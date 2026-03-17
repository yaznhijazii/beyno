import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../utils';
import Magnetic from './Magnetic';

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
    <section id="process" ref={containerRef} className="py-[120px] px-[5%] md:px-[8%] bg-white relative overflow-hidden">
      {/* Decorative Parallax Circles */}
      <motion.div 
        style={{ y }}
        className={cn("absolute top-0 w-[600px] h-[600px] bg-cream-2/40 rounded-full blur-[100px] pointer-events-none", isRtl ? "right-0 translate-x-1/2 -translate-y-1/2" : "left-0 -translate-x-1/2 -translate-y-1/2")} 
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className={cn("flex flex-col md:flex-row justify-between items-end mb-20 gap-8", isRtl ? "text-right" : "text-left")}>
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-px bg-red" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-red font-bold font-syne">{t('process.tag')}</span>
            </motion.div>
            
            <motion.h2 
              className="font-ibm font-bold text-[clamp(32px,4.5vw,56px)] leading-[1.1] text-ink"
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
                  One <em className="text-red not-italic font-urbanist relative inline-block px-1">
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
            className="text-lg text-ink-3 max-w-[450px] ibm-font leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {t('process.desc')}
          </motion.p>
        </div>

        <div className="relative" dir={isRtl ? "rtl" : "ltr"}>
          {/* Connection Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-red/20 -translate-y-1/2 hidden md:block z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative z-10">
          {steps.map((step: any, i: number) => (
            <motion.div 
              key={i}
              className={cn("relative bg-cream-2/30 border border-border/50 p-8 rounded-[32px] group transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] h-full flex flex-col glass-shine", isRtl ? "text-right" : "text-left")}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, type: "spring", bounce: 0.3 }}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              {/* Magnetic Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[32px] pointer-events-none" />
              
              <div className={cn("flex items-center justify-between mb-12 relative z-10")}>
                <Magnetic strength={0.3}>
                  <span className="font-syne font-black text-2xl text-red/10 group-hover:text-red/30 transition-all duration-700 pointer-events-none">{step.num}</span>
                </Magnetic>
                
                <Magnetic strength={0.5}>
                  <motion.div 
                    className="w-14 h-14 rounded-[20px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-border/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500"
                    whileHover={{ rotate: 15 }}
                  >
                    {step.icon}
                  </motion.div>
                </Magnetic>
              </div>
              
              <div className="mb-6 relative z-10">
                <div className="text-[10px] font-bold text-ink/30 uppercase tracking-[0.3em] mb-3 group-hover:text-red/60 transition-colors">{step.phase}</div>
                <h3 className="text-xl font-black text-ink mb-4 font-ibm leading-tight">{step.title}</h3>
                <p className="text-[15px] text-ink-3/60 leading-relaxed font-ibm font-light group-hover:text-ink/80 transition-colors">
                  {step.desc}
                </p>
              </div>

              <div className={cn("mt-auto pt-6 flex relative z-10", isRtl ? "justify-end" : "justify-start")}>
                <motion.div 
                  className={cn("w-8 h-[2px] bg-red/20 group-hover:w-full transition-all duration-500", isRtl ? "origin-right" : "origin-left")}
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
