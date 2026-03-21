import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '@/data/translations';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Function to detect user's preferred language
const detectUserLanguage = (): Language => {
  // Check localStorage first
  const savedLanguage = localStorage.getItem('preferredLanguage') as Language | null;
  if (savedLanguage && ['ar', 'en'].includes(savedLanguage)) {
    return savedLanguage;
  }

  // Check browser language
  const browserLanguage = navigator.language || navigator.languages?.[0];
  if (browserLanguage) {
    const langCode = browserLanguage.split('-')[0].toLowerCase();
    if (langCode === 'ar') {
      return 'ar';
    }
  }

  // Check if user is in Arabic-speaking region based on timezone
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const arabicTimezones = [
    'Asia/Riyadh', 'Asia/Dubai', 'Asia/Baghdad', 'Asia/Amman',
    'Asia/Beirut', 'Africa/Cairo', 'Africa/Casablanca', 'Africa/Tunis',
    'Africa/Algiers', 'Africa/Khartoum', 'Asia/Aden', 'Asia/Sanaa'
  ];
  
  if (arabicTimezones.includes(timezone)) {
    return 'ar';
  }

  // Default to English
  return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize language on mount
  useEffect(() => {
    const detectedLanguage = detectUserLanguage();
    setLanguageState(detectedLanguage);
    
    // Update HTML lang and dir attributes
    document.documentElement.lang = detectedLanguage;
    document.documentElement.dir = detectedLanguage === 'ar' ? 'rtl' : 'ltr';
    
    // Update body direction
    document.body.dir = detectedLanguage === 'ar' ? 'rtl' : 'ltr';
    
    setIsLoaded(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferredLanguage', lang);
    
    // Update HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update body direction
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Dispatch custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: lang } }));
  };

  const t = (key: string): string => {
    return (translations as any)[language][key] || key;
  };

  const isRTL = language === 'ar';

  if (!isLoaded) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export default LanguageContext;
