/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'de';

export interface TranslationSet {
  nav: {
    about: string;
    education: string;
    experience: string;
    skills: string;
    germanStandards: string;
    aiTwin: string;
    contact: string;
  };
  hero: {
    greeting: string;
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustTitle: string;
    trustText: string;
  };
  about: {
    title: string;
    text1: string;
    text2: string;
    philosophyTitle: string;
    philosophyText: string;
    keyFact1: string;
    keyFact1Val: string;
    keyFact2: string;
    keyFact2Val: string;
    keyFact3: string;
    keyFact3Val: string;
  };
  education: {
    title: string;
    subtitle: string;
    eqfLabel: string;
    eqfLevel: string;
    gradesLabel: string;
  };
  experience: {
    title: string;
    subtitle: string;
    department: string;
    hospital: string;
  };
  skills: {
    title: string;
    subtitle: string;
    clinical: string;
    soft: string;
    languages: string;
    motherTongue: string;
    cefrLevel: string;
  };
  standards: {
    title: string;
    subtitle: string;
    recognitionTitle: string;
    recognitionText: string;
    eqfHighlight: string;
    eqfText: string;
    languageCertTitle: string;
    languageCertText: string;
    statusBadge: string;
  };
  aiTwin: {
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
    welcomeMsg: string;
    typing: string;
    error: string;
    suggest1: string;
    suggest2: string;
    suggest3: string;
  };
  contact: {
    title: string;
    subtitle: string;
    getInTouch: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    hiringLabel: string;
    hiringStatus: string;
  };
}
