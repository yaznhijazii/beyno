import { motion } from 'framer-motion';

export const Why = () => {
  const stats = [
    {
      value: '14',
      unit: 'يوم',
      label: 'معدل سرعة الإطلاق',
      desc: 'بينما يحتاج السوق التقليدي 6 أشهر، نحن نطلق مشروعك في أسبوعين.',
      trend: '+300% أسرع',
      color: 'bg-red'
    },
    {
      value: '100%',
      unit: '',
      label: 'شفافية مالية',
      desc: 'سعر ثابت ومحدد من اليوم الأول، بدون أي تكاليف مخفية أو مفاجآت.',
      trend: 'أمان مالي',
      color: 'bg-ink'
    },
    {
      value: '24/7',
      unit: '',
      label: 'ذكاء تشغيلي',
      desc: 'تحليل فوري للبيانات يساعدك على اتخاذ قرارات نمو ذكية بدلاً من التخمين.',
      trend: 'داتا حية',
      color: 'bg-ink'
    },
    {
      value: '1',
      unit: 'شريك',
      label: 'تواصل مركزي',
      desc: 'وداعاً لتشتت التواصل، نحن ندير التصميم والبناء والتقنية باحترافية.',
      trend: 'تركيز مطلق',
      color: 'bg-ink'
    }
  ];

  return (
    <section id="why" className="py-24 px-[5%] bg-cream-2 relative overflow-hidden">
      {/* Background Soul */}
      <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle, #0f0e0d 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 dir-rtl text-right">
          <div className="max-w-[700px]">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4 justify-end"
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-red font-bold font-syne">The Logic of Excellence</span>
              <div className="w-10 h-px bg-red" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-ink font-ibm leading-[1.1] tracking-tight"
            >
              من العشوائية <br/> إلى <em className="text-red not-italic font-ibm italic">المنطق</em>
            </motion.h2>
          </div>
          <p className="text-xl text-ink-3/80 font-ibm font-light max-w-[420px] leading-relaxed">
            الفرق الجوهري ليس فقط في السرعة، بل في المنظومة الذكية التي تحول مشروعك من مجرد فكرة إلى كيان تجاري ناجح.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-ink/10 p-8 rounded-none group relative overflow-hidden flex flex-col justify-between h-[360px] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`px-3 py-1 rounded-none ${s.color === 'bg-red' ? 'bg-red text-white' : 'bg-ink/5 text-ink/40'} text-[9px] font-bold font-syne uppercase tracking-wider`}>
                    {s.trend}
                  </div>
                  <div className="text-ink/10 group-hover:text-red/20 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </div>
                </div>
                
                <h3 className="text-xs font-bold text-ink/30 uppercase tracking-[0.15em] mb-2 font-ibm dir-rtl text-right">
                  {s.label}
                </h3>
              </div>
              
              <div className="relative">
                <div className="flex items-baseline gap-1 dir-rtl text-right">
                  <span className={`text-6xl md:text-7xl font-black font-syne leading-none tracking-tighter transition-colors duration-500 ${s.color === 'bg-red' ? 'text-red' : 'text-ink group-hover:text-red'}`}>
                    {s.value}
                  </span>
                  <span className="text-xl font-bold text-ink/20 font-ibm">
                    {s.unit}
                  </span>
                </div>
                
                <p className="mt-6 text-sm text-ink-3/70 leading-relaxed font-ibm font-light dir-rtl text-right transition-all duration-500 opacity-80 group-hover:text-ink">
                  {s.desc}
                </p>
              </div>

              {/* Bitten Corner Effect (Sharp Tech Cutout) */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-cream-2 rotate-45 translate-x-1/2 translate-y-1/2 group-hover:scale-110 transition-transform duration-500 border-l border-ink/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
