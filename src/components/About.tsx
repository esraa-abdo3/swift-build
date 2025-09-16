import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Users, Award, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageContext";
import "../index.css"

export function About() {
  const { t, isRTL } = useLanguage();

  const stats = [
    { icon: Building2, number: t('about.stat1'), label: t('about.stat1Label') },
    { icon: Users, number: t('about.stat2'), label: t('about.stat2Label') },
    { icon: Award, number: t('about.stat3'), label: t('about.stat3Label') },
    { icon: Clock, number: t('about.stat4'), label: t('about.stat4Label') },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">{t('about.badge')}</Badge>
          <h2 className="text-4xl font-bold mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
          <div className={isRTL ? 'lg:col-start-2' : ''}>
            <h3 className={`text-3xl font-bold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('about.heading')}
            </h3>
            <p className={`text-lg text-muted-foreground mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('about.description1')}
            </p>
            <p className={`text-lg text-muted-foreground mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('about.description2')}
            </p>
            
            <div className="space-y-4">
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`w-2 h-2 bg-purple-600 rounded-full ${isRTL ? 'ml-4' : 'mr-4'}`}></div>
                <span className={isRTL ? 'text-right' : 'text-left'}>{t('about.feature1')}</span>
              </div>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`w-2 h-2 bg-purple-600 rounded-full ${isRTL ? 'ml-4' : 'mr-4'}`}></div>
                <span className={isRTL ? 'text-right' : 'text-left'}>{t('about.feature2')}</span>
              </div>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`w-2 h-2 bg-purple-600 rounded-full ${isRTL ? 'ml-4' : 'mr-4'}`}></div>
                <span className={isRTL ? 'text-right' : 'text-left'}>{t('about.feature3')}</span>
              </div>
            </div>
          </div>
          
          <div className={`relative ${isRTL ? 'lg:col-start-1' : ''}`}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1684497404598-6e844dff9cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwd29ya2Vyc3xlbnwxfHx8fDE3NTc5MTM3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Construction team at work"
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}