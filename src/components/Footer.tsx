import { Separator } from "./ui/separator";
import logoImage from '../assets/2257a324-1da0-480f-991a-e2dda006ffca.png';
import { useLanguage } from "./LanguageContext";
import "../index.css"

export function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className={`flex items-center space-x-2 mb-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <img 
                src={logoImage} 
                alt="Swift Build Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className={`text-gray-300 mb-6 max-w-md ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('footer.description')}
            </p>
            <div className={`space-y-2 text-sm text-gray-400 ${isRTL ? 'text-right' : 'text-left'}`}>
              <p>{t('footer.licensed')}</p>
              <p>CR Number: 1234567890</p>
              <p>www.swiftbuild.sa</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">{t('nav.home')}</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">{t('nav.about')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('nav.services')}</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">{t('nav.projects')}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="font-semibold mb-4">{t('footer.ourServices')}</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">{t('services.residential.title')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('services.commercial.title')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('services.industrial.title')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('services.contracting.title')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('services.maintenance.title')}</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />
        
        <div className={`flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <p>{t('footer.rights')}</p>
          <div className={`flex space-x-6 mt-4 md:mt-0 ${isRTL ? 'space-x-reverse' : ''}`}>
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}