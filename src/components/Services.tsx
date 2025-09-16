import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Home, 
  Building, 
  Warehouse, 
  Wrench, 
  PaintBucket, 
  Hammer,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
import "../index.css"

export function Services() {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Home,
      title: t('services.residential.title'),
      description: t('services.residential.desc'),
      features: ["Custom Home Design", "Home Renovations", "Kitchen & Bath Remodeling", "Additions & Extensions"]
    },
    {
      icon: Building,
      title: t('services.commercial.title'),
      description: t('services.commercial.desc'),
      features: ["Office Buildings", "Retail Spaces", "Restaurants", "Medical Facilities"]
    },
    {
      icon: Warehouse,
      title: t('services.industrial.title'),
      description: t('services.industrial.desc'),
      features: ["Warehouses", "Manufacturing Plants", "Distribution Centers", "Industrial Complexes"]
    },
    {
      icon: Wrench,
      title: t('services.contracting.title'),
      description: t('services.contracting.desc'),
      features: ["Project Management", "Permit Acquisition", "Subcontractor Coordination", "Quality Control"]
    },
    {
      icon: PaintBucket,
      title: t('services.interior.title'),
      description: t('services.interior.desc'),
      features: ["Interior Design", "Flooring Installation", "Painting & Texturing", "Custom Millwork"]
    },
    {
      icon: Hammer,
      title: t('services.maintenance.title'),
      description: t('services.maintenance.desc'),
      features: ["Preventive Maintenance", "Emergency Repairs", "System Upgrades", "Property Inspections"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">{t('services.badge')}</Badge>
          <h2 className="text-4xl font-bold mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className={isRTL ? 'text-right' : 'text-left'}>
                <service.icon className={`h-12 w-12 text-purple-600 mb-4 ${isRTL ? 'ml-auto' : ''}`} />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className={`text-muted-foreground mb-6 flex-grow ${isRTL ? 'text-right' : 'text-left'}`}>
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-1.5 h-1.5 bg-purple-600 rounded-full ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full mt-auto">
                  {t('services.learnMore')}
                  <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            {t('services.getQuote')}
          </Button>
        </div>
      </div>
    </section>
  );
}