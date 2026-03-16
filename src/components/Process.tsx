import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const steps = [
    {
      num: '01',
      title: 'التخطيط والجدوى',
      phase: 'المرحلة الاستراتيجية',
      desc: 'دراسة السوق، تحديد الميزانية، واختيار الموقع الأنسب لضمان استدامة المشروع.',
      icon: '📊'
    },
    {
      num: '02',
      title: 'التصميم المعماري',
      phase: 'مرحلة بناء المكان',
      desc: 'توزيع فني ذكي للمساحات وتصميم داخلي يربط العميل بالمحل عاطفياً.',
      icon: '🎨'
    },
    {
      num: '03',
      title: 'الهوية البصرية',
      phase: 'مرحلة البراندنج',
      desc: 'خلق الروح واللغة البصرية التي ستميزك في السوق وتجذب الأنظار.',
      icon: '✨'
    },
    {
      num: '04',
      title: 'الأنظمة والتقنية',
      phase: 'مرحلة الأتمتة',
      desc: 'تجهيز الـ POS وأنظمة المخزون وربط محلك بمنصة Beyno للتحليل.',
      icon: '⚙️'
    },
    {
      num: '05',
      title: 'التشغيل والنمو',
      phase: 'مرحلة الانطلاق',
      desc: 'دعم تسويقي وتشغيلي مستمر لضمان تطور المحل وزيادة أرباحه.',
      icon: '📈'
    }
  ];

  return (
    <section id="process" ref={containerRef} className="py-[120px] px-[5%] md:px-[8%] bg-white relative overflow-hidden">
      {/* Decorative Parallax Circles */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-cream-2/40 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] pointer-events-none" 
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="dir-rtl text-right">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4 justify-end"
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-red font-bold font-syne">Integrated Journey</span>
              <div className="w-10 h-px bg-red" />
            </motion.div>
            
            <motion.h2 
              className="font-ibm font-bold text-[clamp(32px,4.5vw,56px)] leading-[1.1] text-ink h2-ar"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              منظومة خدمات <br className="hidden md:block" /> 
              في <em className="text-red not-italic font-syne relative inline-block">
                خارطة طريق
                <motion.svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <motion.path 
                    d="M0 5 Q 25 0, 50 5 T 100 5" 
                    fill="none" 
                    stroke="#e8390a" 
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </motion.svg>
              </em> واحدة
            </motion.h2>
          </div>
          
          <motion.p 
            className="text-lg text-ink-3 max-w-[450px] dir-rtl text-right ibm-font leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            نحن شريكك الثابت في كل مرحلة، ندمج الخبرة المعمارية بالذكاء التقني لنبني لك مشروعاً لا يكتفي بالعمل، بل يفرض نفسه في السوق.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-red/20 -translate-y-1/2 hidden md:block z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative z-10">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              className="relative bg-cream-2/30 border border-border/50 p-8 rounded-[32px] dir-rtl group transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] h-full flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]" />
              
              <div className="flex items-center justify-between mb-12 relative z-10">
                <span className="font-syne font-black text-xl text-red/20 group-hover:text-red/100 transition-all duration-500">{step.num}</span>
                <motion.div 
                  className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                  whileHover={{ scale: 1.2 }}
                >
                  {step.icon}
                </motion.div>
              </div>
              
              <div className="mb-6 relative z-10">
                <div className="text-[10px] font-bold text-ink/30 uppercase tracking-[0.2em] mb-2 group-hover:text-red/60 transition-colors">{step.phase}</div>
                <h3 className="text-xl font-bold text-ink mb-3 font-ibm leading-tight">{step.title}</h3>
                <p className="text-sm text-ink-3/70 leading-[1.7] font-ibm font-light group-hover:text-ink transition-colors">
                  {step.desc}
                </p>
              </div>

              <div className="mt-auto pt-6 flex justify-end relative z-10">
                <motion.div 
                  className="w-8 h-[2px] bg-red/20 group-hover:w-full transition-all duration-500 origin-right"
                />
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};
