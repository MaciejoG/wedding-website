import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as const, label: 'EN' },
    { code: 'de' as const, label: 'DE' },
    { code: 'pl' as const, label: 'PL' }
  ];

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full border border-border shadow-lg px-3 py-2">
      <Languages className="w-4 h-4 text-bordeaux" />
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage(lang.code)}
          className={language === lang.code 
            ? "bg-bordeaux hover:bg-bordeaux/90 text-bordeaux-foreground h-8 px-3" 
            : "h-8 px-3 hover:bg-accent"}
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
