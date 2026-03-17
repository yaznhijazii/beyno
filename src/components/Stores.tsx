import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../utils';

export const Stores = () => {
  const { t, isRtl } = useLanguage();

  const storeBase = [
    { icon: '☕', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800' },
    { icon: '👗', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
    { icon: '🛒', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800' },
    { icon: '✂️', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800' },
    { icon: '🍔', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800' },
    { icon: '📱', image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=800' }
  ];

  const stores = storeBase.map((b, i) => ({
    ...b,
    ...t('stores.items')[i]
  }));

  const tickerItems = [...stores, ...stores, ...stores];

  return (
    <section id="stores" className="pt-[200px] pb-[140px] bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-[5%] md:px-[8%] mb-16">
        <div className={cn("flex flex-col md:flex-row justify-between items-start gap-12", isRtl ? "text-right" : "text-left")}>
          <div className="w-full">
            <motion.div 
              className={cn("flex items-center gap-3 mb-6", "justify-start")}
              initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-px bg-red" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-red font-bold font-syne">{t('stores.tag')}</span>
            </motion.div>
            
            <motion.h2 
              className="font-ibm font-bold text-[clamp(40px,6vw,72px)] leading-[1.1] text-ink h2-ar"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {isRtl ? (
                <>حلول مصممة <br className="hidden md:block" /> لنمو قطاعك</>
              ) : (
                <>Solutions Tailored <br className="hidden md:block" /> for Sector Growth</>
              )}
            </motion.h2>
          </div>
          
          <motion.p 
            className="text-xl text-ink-3 max-w-[500px] ibm-font leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {t('stores.desc')}
          </motion.p>
        </div>
      </div>

      <div className="relative dir-ltr">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex gap-6 px-6"
          animate={{ x: [0, -2844] }}
          transition={{ 
            duration: 40,
            repeat: Infinity, 
            ease: "linear"
          }}
        >
          {tickerItems.map((store, i) => (
            <div
              key={i}
              data-cursor="view"
              className="relative shrink-0 w-[320px] md:w-[450px] h-[450px] md:h-[500px] rounded-[40px] overflow-hidden group cursor-pointer border border-border"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url(${store.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
              
              <div className={cn("absolute inset-0 p-10 flex flex-col justify-end", isRtl ? "text-right" : "text-left")}>
                <div className={cn("w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-3xl mb-6 border border-white/10 group-hover:bg-red/20 group-hover:border-red/30 transition-all duration-500", !isRtl && "self-start")}>
                  {store.icon}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-ibm group-hover:text-red transition-colors duration-300">{store.title}</h3>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed font-ibm font-light max-w-[300px] group-hover:text-white/80 transition-colors duration-300">
                  {store.desc}
                </p>
                
                <div className={cn("mt-8 flex items-center gap-3 text-red font-bold text-sm tracking-widest uppercase font-syne opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500", !isRtl && "self-start")}>
                  {isRtl ? 'استكشف' : 'Explore'} <span>{isRtl ? '←' : '→'}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
