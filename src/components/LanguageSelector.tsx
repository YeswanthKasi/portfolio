/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Language } from '../types';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="relative inline-flex items-center p-1 bg-olive-100/50 backdrop-blur-md rounded-full border border-olive-200/40 shadow-sm" id="lang-selector-container">
      <div className="relative flex space-x-1">
        <button
          id="lang-btn-en"
          onClick={() => onLanguageChange('en')}
          className={`relative px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-colors duration-300 outline-none cursor-pointer ${
            currentLanguage === 'en' ? 'text-white' : 'text-olive-700 hover:text-olive-900'
          }`}
        >
          {currentLanguage === 'en' && (
            <motion.div
              layoutId="activeLang"
              className="absolute inset-0 bg-olive-600 rounded-full -z-10 shadow-sm"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
          <span className="flex items-center gap-1.5">
            <span className="text-sm">🇬🇧</span> EN
          </span>
        </button>

        <button
          id="lang-btn-de"
          onClick={() => onLanguageChange('de')}
          className={`relative px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-colors duration-300 outline-none cursor-pointer ${
            currentLanguage === 'de' ? 'text-white' : 'text-olive-700 hover:text-olive-900'
          }`}
        >
          {currentLanguage === 'de' && (
            <motion.div
              layoutId="activeLang"
              className="absolute inset-0 bg-olive-600 rounded-full -z-10 shadow-sm"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
          <span className="flex items-center gap-1.5">
            <span className="text-sm">🇩🇪</span> DE
          </span>
        </button>
      </div>
    </div>
  );
}
