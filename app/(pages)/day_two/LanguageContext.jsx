"use client"
import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('english');

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}