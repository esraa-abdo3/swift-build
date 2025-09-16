import { Button } from "./ui/button";
import logoImage from '../assets/2257a324-1da0-480f-991a-e2dda006ffca.png'
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "./LanguageContext";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src={logoImage} 
            alt="Swift Build Logo" 
            className="h-20 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="transition-colors hover:text-primary">
            {t('nav.home')}
          </a>
          <a href="#about" className="transition-colors hover:text-primary">
            {t('nav.about')}
          </a>
          <a href="#services" className="transition-colors hover:text-primary">
            {t('nav.services')}
          </a>
          <a href="#projects" className="transition-colors hover:text-primary">
            {t('nav.projects')}
          </a>
          <a href="#contact" className="transition-colors hover:text-primary">
            {t('nav.contact')}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button>{t('header.getQuote')}</Button>
        </div>
      </div>
    </header>
  );
}