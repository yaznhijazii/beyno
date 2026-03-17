import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../utils';

export const SectorMarquee = () => {
  const { t, isRtl } = useLanguage();
  const sectors = t('sectors') || [];

  return (
    <div className="bg-ink py-6 border-y border-white/5 overflow-hidden relative">
      {/* Gradients to fade edges */}
      <div className={cn("absolute inset-y-0 left-0 w-32 z-10", isRtl ? "bg-gradient-to-r from-ink to-transparent" : "bg-gradient-to-r from-ink to-transparent")} />
      <div className={cn("absolute inset-y-0 right-0 w-32 z-10", isRtl ? "bg-gradient-to-l from-ink to-transparent" : "bg-gradient-to-l from-ink to-transparent")} />
      
      <motion.div 
        className={cn("flex whitespace-nowrap gap-12 w-max", isRtl ? "flex-row-reverse" : "flex-row")}
        animate={{ x: isRtl ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {[...sectors, ...sectors].map((sector, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="text-[10px] tracking-[0.4em] uppercase text-red font-black font-syne">●</span>
            <span className="text-sm font-bold text-cream/30 font-ibm tracking-tight hover:text-red transition-colors cursor-default whitespace-nowrap">
              {sector}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
