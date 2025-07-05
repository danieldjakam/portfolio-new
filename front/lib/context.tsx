'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Theme, getTheme, setTheme, toggleTheme } from './theme';
import { Language, getLanguage, setLanguage, translations } from './language';

interface AppContextType {
  theme: Theme;
  language: Language;
  t: (key: string) => string;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Initialize theme and language from localStorage
    const savedTheme = getTheme();
    const savedLanguage = getLanguage();
    
    setThemeState(savedTheme);
    setLanguageState(savedLanguage);
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.setAttribute('lang', savedLanguage);
  }, []);

  const handleToggleTheme = () => {
    const newTheme = toggleTheme();
    setThemeState(newTheme);
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    setLanguageState(lang);
  };

  // Translation function
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const value: AppContextType = {
    theme,
    language,
    t,
    toggleTheme: handleToggleTheme,
    setLanguage: handleSetLanguage,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}; 