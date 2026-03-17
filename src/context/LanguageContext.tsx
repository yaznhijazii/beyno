import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
  isRtl: boolean;
}

const translations: Record<Language, any> = {
  ar: {
    nav: {
      why: 'لماذا Tekton',
      stores: 'أنواع المحلات',
      analytics: 'تحليل البيانات',
      process: 'كيف نعمل',
      cta: 'ابدأ مشروعك'
    },
    hero: {
      tag: 'Build · Brand · Launch',
      headline: 'من الفكرة إلى الافتتاح — منصة إطلاق المشاريع التجارية الأكثر تكاملاً',
      ctaSecondary: 'شاهد كيف نعمل',
      stats: {
        projects: 'مشروع تجاري',
        launchTime: 'متوسط وقت الإطلاق',
        services: 'في منصة واحدة',
        satisfaction: 'رضا العملاء',
        days: '14 يوم',
        srvCount: '5 خدمات'
      }
    },
    why: {
      tag: 'The Logic of Excellence',
      title: 'من العشوائية إلى المنطق',
      desc: 'الفرق الجوهري ليس فقط في السرعة، بل في المنظومة الذكية التي تحول مشروعك من مجرد فكرة إلى كيان تجاري ناجح.',
      stats: [
        { label: 'معدل سرعة الإطلاق', desc: 'بينما يحتاج السوق التقليدي 6 أشهر، نحن نطلق مشروعك في أسبوعين.', trend: '+300% أسرع', unit: 'يوم' },
        { label: 'شفافية مالية', desc: 'سعر ثابت ومحدد من اليوم الأول، بدون أي تكاليف مخفية أو مفاجآت.', trend: 'أمان مالي' },
        { label: 'ذكاء تشغيلي', desc: 'تحليل فوري للبيانات يساعدك على اتخاذ قرارات نمو ذكية بدلاً من التخمين.', trend: 'داتا حية' },
        { label: 'تواصل مركزي', desc: 'وداعاً لتشتت التواصل، نحن ندير التصميم والبناء والتقنية باحترافية.', trend: 'تركيز مطلق', unit: 'شريك' }
      ]
    },
    stores: {
      tag: 'Sector Expertise',
      title: 'حلول مصممة لنمو قطاعك',
      desc: 'استعرض التنوع؛ نحن نوفر أنظمة عمل متكاملة تتوافق مع "شخصية" مشروعك واحتياجات السوق الحقيقية.',
      items: [
        { title: 'كافيه وقهوة مختصة', desc: 'تصميم أجواء مريحة وقائمة مميزة تضمن الزيارة المتكررة والنمو المستدام.' },
        { title: 'بوتيك وأزياء', desc: 'عرض بضاعة جذاب وتكامل مع منصات التواصل للبيع الذكي والاحترافي.' },
        { title: 'سوبرماركت ذكي', desc: 'تخطيط رفوف مدروس ونظام مخزون آلي يقلل الهدر ويزيد من كفاءة التشغيل.' },
        { title: 'صالون وسبا', desc: 'أنظمة حجز ذكية، إدارة موظفين، وبرامج ولاء تحافظ على عملائك الدائمين.' },
        { title: 'مطاعم وفود ترك', desc: 'تصميم مطابخ احترافية وقوائم طعام رقمية تفاعلية تتوافق مع منصات التوصيل.' },
        { title: 'محلات الإلكترونيات', desc: 'عرض منتجات متطور، نظام ضمان وصيانة لرفع قيمة متجرك في السوق.' }
      ]
    },
    analytics: {
      tag: 'Data Intelligence',
      title: 'تحليل بيانات حقيقي',
      desc: 'لوحة تحكم ذكية تعطيك نبض مشروعك في الوقت الفعلي — مبيعاتك، سلوك عملائك، وتوقعات نموك القادمة بدقة متناهية.',
      panelTitle: 'Tekton Insights — لوحة التحكم الذكية',
      live: 'مباشر',
      kpis: [
        { label: 'إيرادات اليوم', unit: '' },
        { label: 'عدد الطلبات', unit: '' },
        { label: 'متوسط الفاتورة', unit: 'ر.س' },
        { label: 'عملاء جدد', unit: '' }
      ],
      charts: {
        weekly: 'الإيرادات الأسبوعية (الحالية مقابل السابقة)',
        lastWeek: 'الأسبوع الماضي',
        thisWeek: 'هذا الأسبوع',
        loyalty: 'توزيع العملاء حسب الولاء',
        loyalLabel: 'دائمون'
      },
      loyaltyItems: ['عملاء دائمون', 'زيارة أولى', 'عبر التطبيق'],
      performance: 'الأداء الأعلى',
      forecast: 'التوقعات القادمة',
      forecastDesc: 'من المتوقع زيادة المبيعات في الربع القادم بناءً على اتجاهات السوق الحالية.',
      aiTitle: 'توصيات الذكاء الاصطناعي',
      aiNotes: [
        { title: 'ذروة الطلب', desc: 'تحديث الجدولة للساعة 9 صباحاً' },
        { title: 'المخزون', desc: 'إعادة طلب البن (يكفي لـ 3 أيام)' },
        { title: 'العروض', desc: 'تفعيل خصم 20% للعملاء "المنقطعين"' }
      ]
    },
    process: {
      tag: 'Integrated Journey',
      title: 'منظومة خدمات في خارطة طريق واحدة',
      desc: 'نحن شريكك الثابت في كل مرحلة، ندمج الخبرة المعمارية بالذكاء التقني لنبني لك مشروعاً لا يكتفي بالعمل، بل يفرض نفسه في السوق.',
      steps: [
        { title: 'التخطيط والجدوى', phase: 'المرحلة الاستراتيجية', desc: 'دراسة السوق، تحديد الميزانية، واختيار الموقع الأنسب لضمان استدامة المشروع.' },
        { title: 'التصميم الداخلي', phase: 'مرحلة بناء المكان', desc: 'توزيع فني ذكي للمساحات وتصميم داخلي يربط العميل بالمحل عاطفياً.' },
        { title: 'الهوية البصرية', phase: 'مرحلة البراندنج', desc: 'خلق الروح واللغة البصرية التي ستميزك في السوق وتجذب الأنظار.' },
        { title: 'الأنظمة والتقنية', phase: 'مرحلة الأتمتة', desc: 'تجهيز الـ POS وأنظمة المخزون وربط محلك بمنصة Tekton للتحليل.' },
        { title: 'التشغيل والنمو', phase: 'مرحلة الانطلاق', desc: 'دعم تسويقي وتشغيلي مستمر لضمان تطور المحل وزيادة أرباحه.' }
      ]
    },
    sectors: [
      'كافيه وقهوة مختصة', 'مطاعم وفود ترك', 'سوبرماركت وبقالة', 'صالون وسبا',
      'بوتيك وأزياء', 'إلكترونيات', 'صيدلية', 'محل حلاقة', 'صالات رياضية',
      'مخابز وحلويات', 'مغاسل ملابس', 'مكتبات'
    ],
    cta: {
      tag: 'Ready to build?',
      title: 'جاهز تطلق مشروعك؟',
      desc: 'انضم لأكثر من 10 مشاريع تجارية انطلقت بقوة. اترك بريدك الإلكتروني وسيقوم فريقنا بالتواصل معك لبدء رحلة التميز.',
      placeholder: 'بريدك الإلكتروني',
      button: 'أرسل الآن',
      success: 'تم استلام طلبك، سنتواصل معك!',
      social: 'انضم لـ +10 طموحين'
    },
    footer: {
      desc: 'من الفكرة إلى الافتتاح — نحن شريكك التقني والاستراتيجي لإطلاق مشروعك التجاري القادم بمعايير عالمية.',
      col1: 'المنظومة',
      col2: 'الخدمات',
      col3: 'تواصل',
      services: ['التصميم الداخلي', 'الهوية البصرية', 'الحضور الرقمي', 'خطة التسويق', 'الأتمتة'],
      bottom: '© 2026 Tekton Intelligence. بني للمبدعين.'
    }
  },
  en: {
    nav: {
      why: 'Why Tekton',
      stores: 'Sectors',
      analytics: 'Analytics',
      process: 'Process',
      cta: 'Launch Now'
    },
    hero: {
      tag: 'Build · Brand · Launch',
      headline: 'From Concept to Grand Opening — The Complete Commercial Venture Launchpad',
      ctaSecondary: 'How we operate',
      stats: {
        projects: 'Commercial Projects',
        launchTime: 'Avg. Launch Time',
        services: 'In one platform',
        satisfaction: 'Client Satisfaction',
        days: '14 Days',
        srvCount: '5 Services'
      }
    },
    why: {
      tag: 'The Logic of Excellence',
      title: 'From Chaos to Logic',
      desc: 'The fundamental difference is not just speed, but the intelligent system that transforms your project from a mere idea into a thriving commercial entity.',
      stats: [
        { label: 'Launch Velocity', desc: 'While the traditional market takes 6 months, we launch your venture in just two weeks.', trend: '+300% Faster', unit: 'Days' },
        { label: 'Financial Clarity', desc: 'Fixed, transparent pricing from day one. No hidden costs or technical surprises.', trend: 'Financial Safety' },
        { label: 'Operational Intelligence', desc: 'Real-time data analysis that powers smart growth decisions instead of guesswork.', trend: 'Live Data' },
        { label: 'Centralized Synergy', desc: 'Goodbye to communication fragmentation. We manage design, construction, and tech professionally.', trend: 'Absolute Focus', unit: 'Partner' }
      ]
    },
    stores: {
      tag: 'Sector Expertise',
      title: 'Tailored Solutions for Sector Growth',
      desc: 'Explore the diversity; we provide integrated systems that align with your brands personality and real market needs.',
      items: [
        { title: 'Specialty Coffee & Cafes', desc: 'Designed for comfort and curated menus that ensure repeat visits and sustainable growth.' },
        { title: 'Boutiques & Fashion', desc: 'Captivating displays integrated with social platforms for smart, professional sales.' },
        { title: 'Smart Supermarkets', desc: 'Strategic shelf planning and automated inventory systems that maximize efficiency.' },
        { title: 'Salon & Spa Systems', desc: 'Intelligent booking, staff management, and loyalty programs that keep your clients coming back.' },
        { title: 'Restaurants & Food Trucks', desc: 'Professional kitchen designs and interactive digital menus synced with delivery platforms.' },
        { title: 'Tech & Electronics', desc: 'Sophisticated product showcasing and warranty systems to elevate your market value.' }
      ]
    },
    analytics: {
      tag: 'Data Intelligence',
      title: 'Real-time Data Analytics',
      desc: 'An intelligent dashboard that gives you the pulse of your project in real-time — sales, customer behavior, and accurate growth forecasts.',
      panelTitle: 'Tekton Insights — Smart Dashboard',
      live: 'LIVE',
      kpis: [
        { label: 'Daily Revenue', unit: '' },
        { label: 'Orders Count', unit: '' },
        { label: 'Avg. Receipt', unit: '$' },
        { label: 'New Customers', unit: '' }
      ],
      charts: {
        weekly: 'Weekly Revenue (Current vs Previous)',
        lastWeek: 'Last Week',
        thisWeek: 'This Week',
        loyalty: 'Customer Loyalty Distribution',
        loyalLabel: 'Loyal'
      },
      loyaltyItems: ['Loyal Customers', 'First Visit', 'Via App'],
      performance: 'Top Performance',
      forecast: 'Upcoming Forecast',
      forecastDesc: 'Sales are expected to increase in the next quarter based on current market trends.',
      aiTitle: 'AI Recommendations',
      aiNotes: [
        { title: 'Peak Demand', desc: 'Update scheduling for 9:00 AM' },
        { title: 'Inventory', desc: 'Reorder coffee beans (3 days left)' },
        { title: 'Offers', desc: 'Activate 20% discount for "inactive" customers' }
      ]
    },
    process: {
      tag: 'Integrated Journey',
      title: 'Integrated Services in One Roadmap',
      desc: 'We are your constant partner at every stage, merging architectural expertise with technical intelligence to build a venture that dominates the market.',
      steps: [
        { title: 'Planning & Feasibility', phase: 'Strategic Phase', desc: 'Market study, budgeting, and selecting the most suitable location to ensure sustainability.' },
        { title: 'Interior Design', phase: 'Building Phase', desc: 'Intelligent spatial distribution and interior design that connects the customer emotionally.' },
        { title: 'Visual Identity', phase: 'Branding Phase', desc: 'Creating the soul and visual language that will distinguish you and attract eyes.' },
        { title: 'Systems & Tech', phase: 'Automation Phase', desc: 'Setting up POS, inventory systems, and linking your store to the Tekton platform.' },
        { title: 'Operation & Growth', phase: 'Launch Phase', desc: 'Ongoing marketing and operational support to ensure growth and increased profits.' }
      ]
    },
    sectors: [
      'Specialty Coffee', 'Restaurants', 'Smart Supermarkets', 'Salons & Spas', 
      'Boutiques', 'Electronics', 'Pharmacies', 'Barber Shops', 'Fitness Centers', 
      'Bakeries', 'Laundry', 'Bookstores'
    ],
    cta: {
      tag: 'Ready to build?',
      title: 'Ready to launch your masterpiece?',
      desc: 'Join a selective group of entrepreneurs who chose brilliance, speed, and operational intelligence.',
      placeholder: 'Your email address',
      button: 'Send Now',
      success: 'Received. Our team will reach out shortly.',
      social: 'Join 10+ Visionaries'
    },
    footer: {
      desc: 'From Concept to Grand Opening — We are your strategic tech partner for launching global-standard ventures.',
      col1: 'Ecosystem',
      col2: 'Services',
      col3: 'Contact',
      services: ['Interior Design', 'Visual Identity', 'Digital Presence', 'Marketing Strategy', 'Automation'],
      bottom: '© 2026 Tekton Intelligence. Built for Visionaries.'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'ar';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key;
      }
    }
    return value;
  };

  const isRtl = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
