import { motion } from 'framer-motion';

export const SectorMarquee = () => {
  const sectors = [
    'كافيه وقهوة مختصة', 'مطاعم وفود ترك', 'سوبرماركت وبقالة', 'صالون وسبا', 
    'بوتيك وأزياء', 'إلكترونيات', 'صيدلية', 'محل حلاقة', 'صالات رياضية', 
    'مخابز وحلويات', 'مغاسل ملابس', 'مكتبات'
  ];

  return (
    <div className="bg-ink py-6 border-y border-white/5 overflow-hidden relative">
      {/* Gradients to fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink to-transparent z-10" />
      
      <motion.div 
        className="flex whitespace-nowrap gap-12"
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 30, 
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
