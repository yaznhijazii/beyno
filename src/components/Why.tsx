import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../utils';

export const Why = () => {
  const { t, isRtl } = useLanguage();
  
  const stats = t('why.stats').map((s: any, i: number) => ({
    ...s,
    value: i === 0 ? '14' : (i === 1 ? '100%' : (i === 2 ? '24/7' : '1')),
    color: i === 0 ? 'bg-red' : 'bg-ink'
  }));

  return (
    <section id="why" className="py-24 px-[5%] bg-cream-2 relative overflow-hidden">
      {/* Background Soul */}
      <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle, #0f0e0d 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className={cn("flex flex-col md:flex-row items-center justify-between mb-16 gap-8", isRtl ? "text-right" : "text-left")}>
          <div className="max-w-[700px]">
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-10 h-px bg-red" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-red font-bold font-syne">{t('why.tag')}</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-ink font-ibm leading-[1.1] tracking-tight"
            >
              {t('why.title').split(' ').map((word: string, i: number) => (
                <span key={i}>
                  {word === 'المنطق' || word === 'Logic' ? <em className="text-red not-italic font-ibm italic">{word}</em> : word}{' '}
                  {i === 1 && <br/>}
                </span>
              ))}
            </motion.h2>
          </div>
          <p className="text-xl text-ink-3/80 font-ibm font-light max-w-[420px] leading-relaxed">
            {t('why.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((s: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              data-cursor="plus"
              className="bg-white border border-ink/10 p-8 rounded-none group relative overflow-hidden flex flex-col justify-between h-[360px] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700"
            >
              <div>
                <div className={cn("flex justify-between items-start mb-6", !isRtl && "flex-row-reverse")}>
                  <div className={`px-3 py-1 rounded-none ${s.color === 'bg-red' ? 'bg-red text-white' : 'bg-ink/5 text-ink/40'} text-[9px] font-bold font-syne uppercase tracking-wider`}>
                    {s.trend}
                  </div>
                  <div className="text-ink/10 group-hover:text-red/20 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn(!isRtl && "rotate-90")}><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </div>
                </div>
                
                <h3 className={cn("text-xs font-bold text-ink/30 uppercase tracking-[0.15em] mb-2 font-ibm", isRtl ? "text-right" : "text-left")}>
                  {s.label}
                </h3>
              </div>
              
              <div className="relative">
                <div className={cn("flex items-baseline gap-1", isRtl ? "text-right" : "text-left")}>
                  <span className={cn("text-6xl md:text-7xl font-black font-syne leading-none tracking-tighter transition-colors duration-500", s.color === 'bg-red' ? 'text-red' : 'text-ink group-hover:text-red')}>
                    {s.value}
                  </span>
                  <span className="text-xl font-bold text-ink/20 font-ibm">
                    {s.unit}
                  </span>
                </div>
                
                <p className={cn("mt-6 text-sm text-ink-3/70 leading-relaxed font-ibm font-light transition-all duration-500 opacity-80 group-hover:text-ink", isRtl ? "text-right" : "text-left")}>
                  {s.desc}
                </p>
              </div>

              {/* Bitten Corner Effect */}
              <div className={cn(
                "absolute bottom-0 w-16 h-16 bg-cream-2 rotate-45 translate-y-1/2 group-hover:scale-110 transition-transform duration-500 border-ink/10",
                isRtl ? "right-0 translate-x-1/2 border-l" : "left-0 -translate-x-1/2 border-r"
              )} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
