import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageContext";

export function Projects() {
  const { t, isRTL } = useLanguage();

  const projects = [
    {
      title: t('projects.luxury.title'),
      category: "Residential",
      description: t('projects.luxury.desc'),
      image: "https://images.unsplash.com/photo-1672331713329-65c270686b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTc5NzA3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      status: t('projects.completed'),
      year: "2024"
    },
    {
      title: t('projects.corporate.title'),
      category: "Commercial",
      description: t('projects.corporate.desc'),
      image: "https://images.unsplash.com/photo-1748771886624-0f0aa2729a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHNpdGV8ZW58MXx8fHwxNzU3OTA0MTkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      status: t('projects.inProgress'),
      year: "2024"
    },
    {
      title: t('projects.manufacturing.title'),
      category: "Industrial",
      description: t('projects.manufacturing.desc'),
      image: "https://images.unsplash.com/photo-1684497404598-6e844dff9cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwd29ya2Vyc3xlbnwxfHx8fDE3NTc5MTM3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      status: t('projects.completed'),
      year: "2023"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">{t('projects.badge')}</Badge>
          <h2 className="text-4xl font-bold mb-6">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
                  <Badge 
                    variant={project.status === t('projects.completed') ? "default" : "secondary"}
                    className={project.status === t('projects.completed') ? "bg-green-600" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}>
                  <Badge variant="outline" className="bg-white">
                    {project.year}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>{project.title}</h3>
                <p className={`text-muted-foreground mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {project.description}
                </p>
                <Button variant="outline" className="w-full">
                  {t('projects.viewDetails')}
                  <ExternalLink className={`h-4 w-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            {t('projects.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
}