'use client';

import { createContext, useState, useContext } from 'react';

const languages = ['English', 'Hindi'];

export const Language = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('English');

  const switchLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <Language.Provider value={{ language, switchLanguage, languages }}>
      {children}
    </Language.Provider>
  );
}

export function useLanguage() {
  return useContext(Language);
}