import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageContext";
import "../index.css"

export function Hero() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center px-4">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1748771886624-0f0aa2729a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHNpdGV8ZW58MXx8fHwxNzU3OTA0MTkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Modern construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('hero.title')}{" "}
            <span className="text-purple-400">{t('hero.titleHighlight')}</span>
          </h1>
          
          <p className={`text-xl mb-8 text-gray-200 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              {t('hero.startProject')}
              <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              {t('hero.viewWork')}
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center">
              <CheckCircle className={`h-5 w-5 text-green-400 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              <span>{t('hero.experience')}</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className={`h-5 w-5 text-green-400 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              <span>{t('hero.projects')}</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className={`h-5 w-5 text-green-400 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              <span>{t('hero.satisfaction')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}