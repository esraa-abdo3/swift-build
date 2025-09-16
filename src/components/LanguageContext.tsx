import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'header.getQuote': 'Get Quote',
    
    // Hero
    'hero.title': 'Crafting Excellence,',
    'hero.titleHighlight': 'Fast and Flawless',
    'hero.subtitle': 'Swift Build delivers premium construction solutions with unmatched speed, precision, and quality. From residential homes to commercial complexes, we bring your vision to life.',
    'hero.startProject': 'Start Your Project',
    'hero.viewWork': 'View Our Work',
    'hero.experience': '15+ Years Experience',
    'hero.projects': '500+ Projects Completed',
    'hero.satisfaction': '100% Client Satisfaction',
    
    // About
    'about.badge': 'About Swift Build',
    'about.title': 'Building Excellence Since 2009',
    'about.subtitle': 'At Swift Build, we combine traditional craftsmanship with cutting-edge technology to deliver construction projects that exceed expectations.',
    'about.heading': 'Your Vision, Our Expertise',
    'about.description1': 'With over 15 years of experience in the construction industry, Swift Build has earned a reputation for delivering high-quality projects on time and within budget. Our team of skilled professionals is committed to excellence in every aspect of construction.',
    'about.description2': 'From initial design consultation to final project delivery, we work closely with our clients to ensure their vision becomes reality. Our comprehensive approach covers residential, commercial, and industrial construction projects.',
    'about.feature1': 'Licensed and insured professionals',
    'about.feature2': 'Sustainable and eco-friendly practices',
    'about.feature3': 'Latest construction technology and methods',
    'about.stat1': '500+',
    'about.stat1Label': 'Projects Completed',
    'about.stat2': '50+',
    'about.stat2Label': 'Expert Team Members',
    'about.stat3': '15+',
    'about.stat3Label': 'Years of Excellence',
    'about.stat4': '24/7',
    'about.stat4Label': 'Customer Support',
    
    // Services
    'services.badge': 'Our Services',
    'services.title': 'Complete Construction Solutions',
    'services.subtitle': 'From residential homes to large-scale commercial projects, we offer comprehensive construction services tailored to meet your specific needs and budget.',
    'services.residential.title': 'Residential Construction',
    'services.residential.desc': 'Custom homes, renovations, and residential developments built to your exact specifications.',
    'services.commercial.title': 'Commercial Construction',
    'services.commercial.desc': 'Professional commercial buildings, offices, and retail spaces that enhance your business.',
    'services.industrial.title': 'Industrial Construction',
    'services.industrial.desc': 'Heavy-duty industrial facilities designed for maximum efficiency and durability.',
    'services.contracting.title': 'General Contracting',
    'services.contracting.desc': 'Complete project management from conception to completion with our experienced team.',
    'services.interior.title': 'Interior Finishing',
    'services.interior.desc': 'Professional interior finishing services to bring your space to life with style.',
    'services.maintenance.title': 'Maintenance & Repairs',
    'services.maintenance.desc': 'Ongoing maintenance and repair services to keep your property in perfect condition.',
    'services.learnMore': 'Learn More',
    'services.getQuote': 'Get a Custom Quote',
    
    // Projects
    'projects.badge': 'Our Projects',
    'projects.title': 'Showcasing Our Finest Work',
    'projects.subtitle': 'Explore our portfolio of completed projects that demonstrate our commitment to quality, innovation, and client satisfaction.',
    'projects.luxury.title': 'Luxury Residential Complex',
    'projects.luxury.desc': 'A modern 50-unit residential complex featuring sustainable design and premium amenities.',
    'projects.corporate.title': 'Corporate Headquarters',
    'projects.corporate.desc': 'State-of-the-art office building with modern amenities and energy-efficient systems.',
    'projects.manufacturing.title': 'Manufacturing Facility',
    'projects.manufacturing.desc': 'Large-scale manufacturing plant with advanced automation and safety features.',
    'projects.completed': 'Completed',
    'projects.inProgress': 'In Progress',
    'projects.viewDetails': 'View Details',
    'projects.viewAll': 'View All Projects',
    
    // Contact
    'contact.badge': 'Contact Us',
    'contact.title': 'Ready to Start Your Project?',
    'contact.subtitle': 'Get in touch with our team today for a free consultation and detailed quote for your construction project.',
    'contact.form.title': 'Send Us a Message',
    'contact.form.firstName': 'First Name',
    'contact.form.lastName': 'Last Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone Number',
    'contact.form.projectType': 'Project Type',
    'contact.form.projectTypePlaceholder': 'Residential, Commercial, Industrial...',
    'contact.form.message': 'Project Details',
    'contact.form.messagePlaceholder': 'Tell us about your project requirements, timeline, and budget...',
    'contact.form.send': 'Send Message',
    'contact.office': 'Office Location',
    'contact.phone': 'Phone Number',
    'contact.email': 'Email Address',
    'contact.hours': 'Business Hours',
    'contact.hoursDetail': 'Sunday - Thursday: 8:00 AM - 6:00 PM\nFriday - Saturday: Closed\nEmergency: 24/7 Available',
    'contact.emergency': 'Need an Emergency Service?',
    'contact.emergencyDesc': 'We provide 24/7 emergency construction and repair services for urgent situations.',
    'contact.emergencyButton': 'Emergency Hotline: +966 50 999 8888',
    
    // Footer
    'footer.description': 'Swift Build has been delivering exceptional construction services across Saudi Arabia for over 15 years. We specialize in residential, commercial, and industrial construction projects.',
    'footer.licensed': 'Licensed & Insured Construction Company',
    'footer.quickLinks': 'Quick Links',
    'footer.ourServices': 'Our Services',
    'footer.rights': '© 2024 Swift Build. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy'
  },
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.projects': 'مشاريعنا',
    'nav.contact': 'اتصل بنا',
    'header.getQuote': 'احصل على عرض سعر',
    
    // Hero
    'hero.title': 'صناعة التميز،',
    'hero.titleHighlight': 'سريع ومتقن',
    'hero.subtitle': 'شركة سويفت بيلد تقدم حلول البناء المتميزة بسرعة ودقة وجودة لا مثيل لها. من المنازل السكنية إلى المجمعات التجارية، نحقق رؤيتك إلى الواقع.',
    'hero.startProject': 'ابدأ مشروعك',
    'hero.viewWork': 'اطلع على أعمالنا',
    'hero.experience': 'أكثر من 15 سنة خبرة',
    'hero.projects': 'أكثر من 500 مشروع مكتمل',
    'hero.satisfaction': '100% رضا العملاء',
    
    // About
    'about.badge': 'حول سويفت بيلد',
    'about.title': 'نبني التميز منذ 2009',
    'about.subtitle': 'في سويفت بيلد، نجمع بين الحرفية التقليدية والتكنولوجيا المتطورة لتنفيذ مشاريع البناء التي تفوق التوقعات.',
    'about.heading': 'رؤيتك، خبرتنا',
    'about.description1': 'مع أكثر من 15 عامًا من الخبرة في صناعة البناء، اكتسبت سويفت بيلد سمعة في تسليم المشاريع عالية الجودة في الوقت المحدد وضمن الميزانية. فريقنا من المهنيين المهرة ملتزم بالتميز في كل جانب من جوانب البناء.',
    'about.description2': 'من الاستشارة الأولى للتصميم إلى التسليم النهائي للمشروع، نعمل بشكل وثيق مع عملائنا لضمان تحويل رؤيتهم إلى واقع. نهجنا الشامل يغطي المشاريع السكنية والتجارية والصناعية.',
    'about.feature1': 'مهنيون مرخصون ومؤمنون',
    'about.feature2': 'ممارسات مستدامة وصديقة للبيئة',
    'about.feature3': 'أحدث تقنيات وطرق البناء',
    'about.stat1': '+500',
    'about.stat1Label': 'مشروع مكتمل',
    'about.stat2': '+50',
    'about.stat2Label': 'عضو فريق خبير',
    'about.stat3': '+15',
    'about.stat3Label': 'سنة من التميز',
    'about.stat4': '24/7',
    'about.stat4Label': 'دعم العملاء',
    
    // Services
    'services.badge': 'خدماتنا',
    'services.title': 'حلول البناء الشاملة',
    'services.subtitle': 'من المنازل السكنية إلى المشاريع التجارية الكبيرة، نقدم خدمات البناء الشاملة المصممة لتلبية احتياجاتك المحددة وميزانيتك.',
    'services.residential.title': 'البناء السكني',
    'services.residential.desc': 'منازل مخصصة وتجديدات ومشاريع سكنية مبنية وفقًا لمواصفاتك الدقيقة.',
    'services.commercial.title': 'البناء التجاري',
    'services.commercial.desc': 'مباني تجارية ومكاتب ومساحات تجزئة احترافية تعزز أعمالك.',
    'services.industrial.title': 'البناء الصناعي',
    'services.industrial.desc': 'منشآت صناعية عالية التحمل مصممة لأقصى قدر من الكفاءة والمتانة.',
    'services.contracting.title': 'المقاولات العامة',
    'services.contracting.desc': 'إدارة مشاريع كاملة من المفهوم إلى الإنجاز مع فريقنا ذو الخبرة.',
    'services.interior.title': 'التشطيبات الداخلية',
    'services.interior.desc': 'خدمات التشطيبات الداخلية الاحترافية لإحياء مساحتك بأناقة.',
    'services.maintenance.title': 'الصيانة والإصلاحات',
    'services.maintenance.desc': 'خدمات الصيانة والإصلاح المستمرة للحفاظ على ممتلكاتك في حالة مثالية.',
    'services.learnMore': 'اعرف المزيد',
    'services.getQuote': 'احصل على عرض سعر مخصص',
    
    // Projects
    'projects.badge': 'مشاريعنا',
    'projects.title': 'عرض أفضل أعمالنا',
    'projects.subtitle': 'استكشف محفظة المشاريع المكتملة التي تُظهر التزامنا بالجودة والابتكار ورضا العملاء.',
    'projects.luxury.title': 'مجمع سكني فاخر',
    'projects.luxury.desc': 'مجمع سكني حديث مكون من 50 وحدة يتميز بتصميم مستدام ووسائل راحة متميزة.',
    'projects.corporate.title': 'المقر الرئيسي للشركة',
    'projects.corporate.desc': 'مبنى مكاتب متطور مع وسائل راحة حديثة وأنظمة موفرة للطاقة.',
    'projects.manufacturing.title': 'منشأة تصنيع',
    'projects.manufacturing.desc': 'مصنع تصنيع واسع النطاق مع أتمتة متقدمة وميزات أمان.',
    'projects.completed': 'مكتمل',
    'projects.inProgress': 'قيد التنفيذ',
    'projects.viewDetails': 'عرض التفاصيل',
    'projects.viewAll': 'عرض جميع المشاريع',
    
    // Contact
    'contact.badge': 'اتصل بنا',
    'contact.title': 'جاهز لبدء مشروعك؟',
    'contact.subtitle': 'تواصل مع فريقنا اليوم للحصول على استشارة مجانية وعرض سعر مفصل لمشروع البناء الخاص بك.',
    'contact.form.title': 'أرسل لنا رسالة',
    'contact.form.firstName': 'الاسم الأول',
    'contact.form.lastName': 'الاسم الأخير',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.projectType': 'نوع المشروع',
    'contact.form.projectTypePlaceholder': 'سكني، تجاري، صناعي...',
    'contact.form.message': 'تفاصيل المشروع',
    'contact.form.messagePlaceholder': 'أخبرنا عن متطلبات مشروعك والجدول الزمني والميزانية...',
    'contact.form.send': 'إرسال الرسالة',
    'contact.office': 'موقع المكتب',
    'contact.phone': 'رقم الهاتف',
    'contact.email': 'عنوان البريد الإلكتروني',
    'contact.hours': 'ساعات العمل',
    'contact.hoursDetail': 'الأحد - الخميس: 8:00 ص - 6:00 م\nالجمعة - السبت: مغلق\nالطوارئ: متاح 24/7',
    'contact.emergency': 'تحتاج خدمة طوارئ؟',
    'contact.emergencyDesc': 'نوفر خدمات البناء والإصلاح الطارئة على مدار 24/7 للحالات العاجلة.',
    'contact.emergencyButton': 'خط الطوارئ: +966 50 999 8888',
    
    // Footer
    'footer.description': 'سويفت بيلد تقدم خدمات البناء الاستثنائية في جميع أنحاء المملكة العربية السعودية لأكثر من 15 عامًا. نحن متخصصون في المشاريع السكنية والتجارية والصناعية.',
    'footer.licensed': 'شركة بناء مرخصة ومؤمنة',
    'footer.quickLinks': 'روابط سريعة',
    'footer.ourServices': 'خدماتنا',
    'footer.rights': '© 2024 سويفت بيلد. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.cookies': 'سياسة الكوكيز'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
    isRTL: language === 'ar'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}