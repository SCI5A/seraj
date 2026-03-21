import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = (lang: 'ar' | 'en') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {language === 'ar' ? 'العربية' : 'English'}
        </span>
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-card border border-border rounded-lg shadow-lg z-50">
          <button
            onClick={() => toggleLanguage('ar')}
            className={`w-full px-4 py-2 text-right text-sm transition-colors ${
              language === 'ar'
                ? 'bg-primary/10 text-primary font-semibold'
                : 'text-foreground hover:bg-card/80'
            }`}
          >
            العربية
          </button>
          <button
            onClick={() => toggleLanguage('en')}
            className={`w-full px-4 py-2 text-right text-sm transition-colors border-t border-border ${
              language === 'en'
                ? 'bg-primary/10 text-primary font-semibold'
                : 'text-foreground hover:bg-card/80'
            }`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}
