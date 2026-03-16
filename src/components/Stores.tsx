import { motion } from 'framer-motion';

export const Stores = () => {
  const stores = [
    {
      title: 'كافيه وقهوة مختصة',
      desc: 'تصميم أجواء مريحة وقائمة مميزة تضمن الزيارة المتكررة والنمو المستدام.',
      icon: '☕',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'بوتيك وأزياء',
      desc: 'عرض بضاعة جذاب وتكامل مع منصات التواصل للبيع الذكي والاحترافي.',
      icon: '👗',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'سوبرماركت ذكي',
      desc: 'تخطيط رفوف مدروس ونظام مخزون آلي يقلل الهدر ويزيد من كفاءة التشغيل.',
      icon: '🛒',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'صالون وسبا',
      desc: 'أنظمة حجز ذكية، إدارة موظفين، وبرامج ولاء تحافظ على عملائك الدائمين.',
      icon: '✂️',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'مطاعم وفود ترك',
      desc: 'تصميم مطابخ احترافية وقوائم طعام رقمية تفاعلية تتوافق مع منصات التوصيل.',
      icon: '🍔',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'محلات الإلكترونيات',
      desc: 'عرض منتجات متطور، نظام ضمان وصيانة لرفع قيمة متجرك في السوق.',
      icon: '📱',
      image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=800'
    }
  ];

  // Triple the items to ensure a seamless loop with zero gaps
  const tickerItems = [...stores, ...stores, ...stores];

  return (
    <section id="stores" className="pt-[200px] pb-[140px] bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-[5%] md:px-[8%] mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 text-right dir-rtl">
          <div>
            <motion.div 
              className="flex items-center gap-3 mb-6 justify-end"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[11px] tracking-[0.4em] uppercase text-red font-bold font-syne">Sector Expertise</span>
              <div className="w-12 h-px bg-red" />
            </motion.div>
            
            <motion.h2 
              className="font-ibm font-bold text-[clamp(40px,6vw,72px)] leading-[1] text-ink h2-ar"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              حلول مصممة <br/> <em className="text-red not-italic font-syne italic">لنمو</em> قطاعك
            </motion.h2>
          </div>
          
          <motion.p 
            className="text-xl text-ink-3 max-w-[500px] ibm-font leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            استعرض التنوع؛ نحن نوفر أنظمة عمل متكاملة تتوافق مع "شخصية" مشروعك واحتياجات السوق الحقيقية.
          </motion.p>
        </div>
      </div>

      {/* Infinity Horizontal Scroll */}
      <div className="relative dir-ltr"> {/* Force LTR container for predictable X animation */}
        {/* Shadow Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex gap-6 px-6"
          animate={{ x: [0, -2844] }} // Move exactly by the width of one set: 6 cards * (450px + 24px gap) = 2844px
          transition={{ 
            duration: 40, // Slightly faster for better energy
            repeat: Infinity, 
            ease: "linear"
          }}
        >
          {tickerItems.map((store, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[320px] md:w-[450px] h-[450px] md:h-[500px] rounded-[40px] overflow-hidden group cursor-pointer border border-border"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url(${store.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end dir-rtl text-right">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-3xl mb-6 border border-white/10 group-hover:bg-red/20 group-hover:border-red/30 transition-all duration-500">
                  {store.icon}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-ibm group-hover:text-red transition-colors duration-300">{store.title}</h3>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed font-ibm font-light max-w-[300px] group-hover:text-white/80 transition-colors duration-300">
                  {store.desc}
                </p>
                
                <div className="mt-8 flex items-center gap-3 text-red font-bold text-sm tracking-widest uppercase font-syne opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Explore <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
