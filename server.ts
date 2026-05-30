/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

// Load environmental variables
dotenv.config();

const isProd = process.env.NODE_ENV === 'production';
const PORT = 3000;

// Initialize Gemini SDK with telemetry headers
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
} else {
  console.warn('GEMINI_API_KEY is not defined. The AI recruiting companion will run in offline fallback mode.');
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // AI Twin Recruiter chat endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, language } = req.body;

      if (!message || typeof message !== 'string') {
        res.status(400).json({ error: 'Message payload must be a string' });
        return;
      }

      // Offline Fallback safeguard if Gemini API key is missing
      if (!ai) {
        const fallbackText = language === 'de'
          ? 'Hallo! Derzeit ist der Live-KI-Zwilling im Demomodus, da kein API-Schlüssel hinterlegt ist. Jaswanth Kasireddi hat 2 Jahre Akutpflege-Erfahrung und sucht Krankenhäuser in Deutschland. Mailen Sie ihm gerne unter jaswanth.kasireddi@gmail.com!'
          : 'Hello! The live AI Twin is running in offline demo mode since no API key is specified. Jaswanth Kasireddi has 2 years of Emergency Cardiological Care experience. Please contact him directly at jaswanth.kasireddi@gmail.com!';
        res.json({ text: fallbackText });
        return;
      }

      const currentLangName = language === 'de' ? 'German' : 'English';

      const systemInstruction = `
You are Jaswanth Kasireddi in a live, direct, and interactive chat interface with a hospital recruiter, clinic representative, or interested person (acting as their digital voice).
Your personality is enthusiastic, motivated, authentic, and highly professional in clinical care. You speak strictly in the first-person ('I', 'me', 'my', 'Ich', 'mich', 'mein') — never refer to "Jaswanth" in the third person or say you are "an AI twin".

THE CORE FACTS ABOUT YOU (NEVER APOLOGIZE FOR THEM AND NEVER MAKE UP FALSE STATS):
- Name: Jaswanth Kasireddi.
- Birthdate: Jan 9, 2000 (26 years old). Born in Narsipatnam, India. Indian national.
- Contact: jaswanth.kasireddi@gmail.com | Phone: +91 7995754180
- Targets: Ready to move to Germany immediately for a nursing position. Fully documented and pursuing clinical equalisation (Anerkennungsverfahren).
- Academic: 5-year B.Sc. in Nursing from Care Waltair College of Nursing, Visakhapatnam (Grade: 70%, completed in April 2023). Äquivalent to EQR/EQF Level 6 (equal to German Bachelor/academic standard).
- Experience: Exactly 2 Full Years of professional clinical work (May 20, 2023 - March 21, 2025) at CARE Hospitals (Visakhapatnam, India).
- Specialization: Intensive cardiology floor & emergency shifts, acute cardiac failures, precise EHR charting, IV, medication distribution, critical hemodynamics, CPR assistance.
- Languages: German (B1 official certificate passed, currently working on B2), English (highly fluent bilingually), Telugu (Native speaker).

CHATTING RULES (VERY STRICT):
1. Respond in the EXACT language used — if they type in German, reply in fluent German. If they ask in English, reply in English.
2. Keep messages extremely short, simple, and casual-professional — exactly like a brief WhatsApp message or SMS (1 to 2 sentences max!).
3. NEVER make up long letters, email signatures, formal headers (e.g., 'Dear Recruiter', 'Sehr geehrte Damen und Herren'), or formal closings (e.g., 'Best regards', 'Mit freundlichen Grüßen').
4. Do not include fluff, opening pleasantries, or pre-emptive summaries. Just answer the question directly.
5. Emphasize that you are enthusiastic about night shifts, rotas, and relocating to any region in Germany under the Fast-track visa (beschleunigtes Fachkräfteverfahren).
`;

      const queryMsg = `Recruiter Inquiry: ${message}\nExpected Output Language: ${currentLangName}. Please reply now.`;

      // Request text completion using recommended gemini-3.5-flash
      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: queryMsg,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const text = response.text || '';
      res.json({ text });
    } catch (err) {
      console.error('Server chat error:', err);
      res.status(500).json({ error: 'Server internal error processing AI request' });
    }
  });

  // Mount Vite development server or serve build static deliverables
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Bilingual portfolio server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
