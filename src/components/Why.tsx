import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../utils';

export const Why = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section id="why" className="py-24 px-[5%] bg-cream-2 relative overflow-hidden">
      {/* Background Soul */}
      <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle, #0f0e0d 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-[1280px] mx-auto px-[5%] md:px-[8%]">
        <div className="section-header-grid">
          <div className="max-w-[700px]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-tag-wrapper"
            >
              <div className="section-tag-line" />
              <span className="section-tag-text">{t('why.tag')}</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={cn("section-title flex flex-col gap-0 md:gap-1 lg:gap-1")}
            >
              <span>{isRtl ? "من العشوائية" : "From Chaos"}</span>
              <span className="italic">
                {isRtl ? (
                  <>إلى <em className="text-red not-italic">{t('why.title').split(' ').pop()}</em></>
                ) : (
                  <>To <em className="text-red not-italic">{t('why.title').split(' ').pop()}</em></>
                )}
              </span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-desc text-ink-3/80"
          >
            {t('why.desc')}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
