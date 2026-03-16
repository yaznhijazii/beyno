import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { num: '10+', label: 'مشروع تجاري' },
    { num: '14 يوم', label: 'متوسط وقت الإطلاق' },
    { num: '5 خدمات', label: 'في منصة واحدة' },
    { num: '98%', label: 'رضا العملاء' },
  ];

  return (
    <section id="top" ref={containerRef} className="min-h-screen bg-ink flex flex-col relative overflow-hidden pt-16">
      {/* Background Animated Elements */}
      <div 
        className="absolute inset-0 z-0 bg-[linear-gradient(rgba(248,244,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(248,244,238,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"
        style={{ animation: 'gridShift 30s linear infinite' }}
      />
      
      {/* Floating Animated Blobs */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-red/10 blur-[140px] rounded-full pointer-events-none" 
      />
      <motion.div 
        style={{ y: y2, rotate: -rotate }}
        className="absolute bottom-[20%] -right-[10%] w-[400px] h-[400px] bg-red/5 blur-[100px] rounded-full pointer-events-none" 
      />

      <div className="flex-1 px-[5%] md:px-[8%] flex flex-col items-center justify-center relative z-10 text-center py-20">
        
        {/* Animated Top Tag */}
        <motion.div 
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="w-8 h-px bg-red" 
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <span className="text-[10px] tracking-[0.5em] uppercase text-red font-bold font-syne">
            Build · Brand · Launch
          </span>
          <motion.div 
            className="w-8 h-px bg-red" 
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Logo with Staggered Character Animation */}
        <div dir="ltr" className="flex items-center justify-center mb-6 overflow-hidden">
          {["B", "e", "y", ".", "n", "o"].map((char, i) => (
            <motion.span
              key={i}
              className={`font-syne font-extrabold text-[clamp(80px,18vw,160px)] leading-[0.85] tracking-[-0.07em] ${char === '.' ? 'text-red' : 'text-cream'}`}
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: i * 0.1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Headline with Progressive Reveal */}
        <motion.h1 
          className="font-ibm font-bold text-[clamp(24px,4vw,42px)] text-cream/90 mb-10 tracking-[-0.02em] dir-rtl max-w-[850px] leading-[1.3]"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          من الفكرة إلى الافتتاح — منصة إطلاق <br/>
          المشاريع التجارية <em className="text-red not-italic font-syne relative">
            الأكثر تكاملاً
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-[6px] bg-red/20 -z-10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 2 }}
            />
          </em>
        </motion.h1>

        {/* CTA Section with Magnetic-Like Hover */}
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-8 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          
          <motion.button 
            onClick={() => scrollTo('process')}
            className="text-cream/50 hover:text-cream text-base font-medium font-ibm transition-all duration-300 flex items-center gap-3 group"
          >
            <span className="relative">
              شاهد كيف نعمل
              <motion.span className="absolute -bottom-1 left-0 w-0 h-px bg-cream/30 group-hover:w-full transition-all duration-500" />
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xl"
            >
              ↓
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Stats Bar with Counting Animation Feel */}
      <motion.div 
        className="border-t border-white/5 bg-ink/50 backdrop-blur-xl relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              className="py-10 px-4 text-center group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 + (i * 0.1) }}
            >
              <div className="font-syne font-black text-5xl text-cream mb-2 group-hover:text-red transition-all duration-500 group-hover:scale-110 flex items-center justify-center gap-2 dir-rtl">
                {stat.num.includes('+') ? (
                  <div className="flex items-center">
                    <span>{stat.num.replace('+', '')}</span>
                    <span className="text-red">+</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span>{stat.num.split(' ')[0]}</span>
                    <span className="font-ibm text-3xl opacity-50">{stat.num.split(' ')[1]}</span>
                  </div>
                )}
              </div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-cream/30 font-ibm font-bold group-hover:text-cream/60 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @keyframes gridShift {
          from { background-position: 0 0; }
          to { background-position: 80px 80px; }
        }
      `}</style>
    </section>
  );
};
