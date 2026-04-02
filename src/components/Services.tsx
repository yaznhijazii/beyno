import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Services = () => {
  const { t, isRtl } = useLanguage();
  const services = [
    {
      num: '01',
      title: 'التصميم الداخلي',
      desc: 'تصميم الفضاء التجاري بما يعكس هوية مشروعتك، يستقطب العملاء، ويعظّم الكفاءة التشغيلية.',
      bg: 'bg-ink',
      hoverBg: 'hover:bg-red/5',
      delay: 0.1
    },
    {
      num: '02',
      title: 'الهوية البصرية',
      desc: 'تصميم شعار، ألوان، وخطوط متكاملة تُتذكر وتميزك عن المنافسين بطريقة احترافية.',
      bg: 'bg-ink',
      hoverBg: 'hover:bg-red/5',
      delay: 0.2
    },
    {
      num: '03',
      title: 'الحضور الرقمي',
      desc: 'بناء موقع إلكتروني، إعداد منصات التواصل، وتحسين محركات البحث لتأكيد حضورك الرقمي.',
      bg: 'bg-ink',
      hoverBg: 'hover:bg-red/5',
      delay: 0.3
    },
    {
      num: '04',
      title: 'خطة التسويق',
      desc: 'استراتيجية تسويقية كاملة مخصصة لنوع محلك وسوقك المستهدف جاهزة للتنفيذ.',
      bg: 'bg-ink',
      hoverBg: 'hover:bg-red/5',
      delay: 0.1
    },
    {
      num: '05',
      title: 'الأتمتة والتقنية',
      desc: 'نقاط بيع، نظام حجوزات، وبرامج ولاء — كل العمليات مربوطة ومؤتمتة بذكاء.',
      bg: 'bg-ink',
      hoverBg: 'hover:bg-red/5',
      delay: 0.2
    },
    {
      num: '+',
      title: 'دعم مستمر',
      desc: 'تحليل الأداء، تعديل الاستراتيجية، وحل أي تحدي يواجهك في رحلة النمو.',
      bg: 'bg-red/5',
      border: 'border-[0.5px] border-red/15',
      hoverBg: 'hover:bg-red/10',
      numColor: 'text-cream/30',
      iconBg: 'bg-cream/5 border-cream/10',
      arrowColor: 'text-red/30',
      delay: 0.3
    }
  ];

  return (
    <section id="services" className="py-[100px] bg-ink">
      <div className="max-w-[1280px] mx-auto px-[5%] md:px-[8%]">
        <div className="section-header-grid">
          <div className="flex-1">
            <motion.div 
              className="section-tag-wrapper"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="section-tag-line" />
              <span className="section-tag-text">{t('nav.services')}</span>
            </motion.div>
            
            <motion.h2 
              className="section-title text-cream"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              {isRtl ? (
                <>منظومة خدمات <em className="text-red not-italic font-syne dir-ltr inline-block">متكاملة</em></>
              ) : (
                <>Integrated <em className="text-red not-italic font-syne inline-block">Solutions</em></>
              )}
            </motion.h2>
          </div>
          
          <motion.p 
            className="section-desc text-cream/35"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {isRtl ? 'خمس ركائز أساسية تضمن تحويل رؤيتك إلى واقع تجاري ملموس ومربح' : 'Five core pillars ensuring your vision transforms into a tangible and profitable commercial reality.'}
          </motion.p>
        </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/5 border-[0.5px] border-cream/5 rounded-[20px] overflow-hidden mt-14"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        {services.map((svc, i) => (
          <motion.div 
            key={i}
            className={`group relative py-12 px-8 cursor-none transition-colors duration-300 overflow-hidden dir-rtl ${svc.bg} ${svc.hoverBg} ${svc.border || ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: svc.delay, ease: "easeOut" }}
          >
            {/* Hover Blob */}
            <div className="absolute -bottom-[60px] -left-[60px] w-[160px] h-[160px] bg-red opacity-0 rounded-full transition-all duration-400 ease-out scale-50 group-hover:opacity-[0.07] group-hover:scale-150 pointer-events-none" />
            
            <div className="flex items-center justify-between mb-8">
              <div className={`text-[11px] font-bold tracking-[0.18em] dir-ltr ${svc.numColor || 'text-red'}`}>
                {svc.num}
              </div>
              <div className="w-2 h-2 rounded-full bg-cream/10 transition-colors duration-300 group-hover:bg-red/40" />
            </div>
            
            <div className="font-ibm font-bold text-2xl text-cream mb-4 tracking-[-0.01em] h2-ar">
              {svc.title}
            </div>
            
            <div className="text-sm text-cream/35 font-light leading-[1.7] ibm-font relative z-10 max-w-[90%]">
              {svc.desc}
            </div>
            
            <div className={`absolute bottom-8 left-8 text-lg text-cream/10 transition-all duration-300 dir-ltr group-hover:-translate-x-1 group-hover:-translate-y-1 ${svc.arrowColor ? 'group-hover:' + svc.arrowColor : 'group-hover:text-red'}`}>
              &#x2197;
            </div>
          </motion.div>
        ))}
        </motion.div>
      </div>
    </section>
  );
};
