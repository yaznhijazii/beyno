import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../utils';

export const Process = () => {
  const { t, isRtl } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const steps = t('process.steps').map((step: any, i: number) => ({
    ...step,
    num: `0${i + 1}`,
    icon: ['📊', '🎨', '✨', '⚙️', '📈'][i]
  }));

  return (
    <section id="process" ref={containerRef} className="py-[100px] lg:py-[140px] px-[5%] md:px-[8%] bg-white relative overflow-hidden">
      {/* Decorative Parallax Circles */}
      <motion.div 
        style={{ y }}
        className={cn("absolute top-0 w-[600px] h-[600px] bg-cream-2/40 rounded-full blur-[100px] pointer-events-none", isRtl ? "right-0 translate-x-1/2 -translate-y-1/2" : "left-0 -translate-x-1/2 -translate-y-1/2")} 
      />

      <div className="max-w-[1280px] mx-auto relative z-10 w-full" dir={isRtl ? "rtl" : "ltr"}>
        <div className="section-header-grid">
          <div className="flex-1">
            <motion.div 
              className="section-tag-wrapper"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="section-tag-line" />
              <span className="section-tag-text">{t('process.tag')}</span>
            </motion.div>
            
            <motion.h2 
              className="section-title text-ink"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {isRtl ? (
                <>
                  منظومة خدمات <br className="hidden md:block" /> 
                  في <em className="text-red not-italic font-alexandria relative inline-block px-1">
                    خارطة طريق
                    <motion.svg 
                      className="absolute -bottom-2 left-0 w-full h-[12px]" 
                      viewBox="0 0 100 12" 
                      preserveAspectRatio="none"
                    >
                      <motion.path 
                        d="M0 10 Q 30 0, 60 8 T 100 6" 
                        fill="none" 
                        stroke="#e8390a" 
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </motion.svg>
                  </em> واحدة
                </>
              ) : (
                <>
                  Integrated Services in <br className="hidden md:block" /> 
                  One <em className="text-red not-italic font-syne relative inline-block px-1">
                    Roadmap
                    <motion.svg 
                      className="absolute -bottom-2 left-0 w-full h-[12px]" 
                      viewBox="0 0 100 12" 
                      preserveAspectRatio="none"
                    >
                      <motion.path 
                        d="M0 10 Q 30 0, 60 8 T 100 6" 
                        fill="none" 
                        stroke="#e8390a" 
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </motion.svg>
                  </em>
                </>
              )}
            </motion.h2>
          </div>
          
          <motion.p 
            className="section-desc text-ink-3/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {t('process.desc')}
          </motion.p>
        </div>

        <div className="relative mt-20" dir={isRtl ? "rtl" : "ltr"}>
          {/* Animated Roadmap Line (Desktop) */}
          {/* Using 10% inset hides the tails under the first and last solid nodes */}
          <div className="absolute top-[28px] left-[10%] w-[80%] h-[2px] bg-red/10 hidden lg:block z-0" />
          <div className="absolute top-[28px] left-[10%] w-[80%] h-[2px] hidden lg:block z-0">
            <motion.div 
              className="w-full h-full bg-gradient-to-r from-red via-red to-red/20"
              style={{ scaleX: scrollYProgress, transformOrigin: isRtl ? 'right' : 'left' }} 
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10 pt-4 lg:pt-0">
          {steps.map((step: any, i: number) => (
            <motion.div 
              key={i}
              className={cn("relative group flex flex-col h-full", isRtl ? "text-right" : "text-left")}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", bounce: 0.3 }}
            >
              {/* Roadmap Node on Timeline (Desktop Only) */}
              <div className="w-14 h-14 rounded-full border-[3px] border-white bg-cream-2 flex items-center justify-center text-2xl mx-auto mb-6 relative z-20 shadow-[0_5px_15px_rgba(0,0,0,0.05)] group-hover:bg-red group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_10px_20px_rgba(232,57,10,0.3)] group-hover:border-red/10 transition-all duration-500 hidden lg:flex shrink-0">
                {step.icon}
              </div>

              {/* Step Card Body */}
              <div className="bg-white border border-border/40 p-6 md:p-8 rounded-[32px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] group-hover:shadow-[0_40px_80px_-20px_rgba(232,57,10,0.08)] group-hover:border-red/30 transition-all duration-500 relative overflow-hidden flex flex-col flex-1 group-hover:-translate-y-2">
                
                {/* Giant Transparent Number Watermark */}
                <div className={cn("absolute -top-4 font-syne font-black text-[140px] text-ink/[0.02] group-hover:text-red/[0.04] transition-colors duration-700 pointer-events-none select-none tracking-tighter", isRtl ? "-left-4" : "-right-4")}>
                  {step.num}
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-red/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon for Mobile (Shown only on small screens) */}
                  <div className="w-14 h-14 bg-red/5 rounded-2xl flex lg:hidden items-center justify-center text-2xl mb-6 border border-red/10 text-red shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {step.icon}
                  </div>

                  {/* Phase Mini-Tag */}
                  <div className="inline-flex self-start px-3 py-1.5 bg-red/5 text-red text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-6 group-hover:bg-red group-hover:text-white transition-colors duration-500 font-syne">
                    {step.phase}
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-ink mb-3 font-ibm leading-tight group-hover:text-red transition-colors duration-500">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-ink-3/70 leading-[1.8] font-ibm font-light transition-colors duration-500 group-hover:text-ink/90">
                    {step.desc}
                  </p>

                  {/* Bottom Fill Bar representing Progress */}
                  <div className="absolute bottom-0 left-0 w-full h-[4px] bg-ink/5 mt-auto">
                    <div className={cn("h-full bg-red w-0 group-hover:w-full transition-all duration-700 ease-out", isRtl ? "ml-auto" : "mr-auto")} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};
