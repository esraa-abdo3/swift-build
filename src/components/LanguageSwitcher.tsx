import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      {language === 'en' ? 'العربية' : 'English'}
    </Button>
  );
}