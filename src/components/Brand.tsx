import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Brand = () => {
  const { isRtl } = useLanguage();
  return (
    <section id="brand" className="py-[100px] bg-ink">
      <div className="max-w-[1280px] mx-auto px-[5%] md:px-[8%]">
        <div className="section-header-grid">
        <div className="flex-1">
          <motion.div 
            className="section-tag-wrapper"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="section-tag-line" />
            <span className="section-tag-text">{isRtl ? 'الهوية البصرية' : 'Brand Identity'}</span>
          </motion.div>
          
          <motion.h2 
            className="section-title text-cream mb-4"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            {isRtl ? (
              <>الهوية <em className="text-red not-italic font-syne dir-ltr inline-block">البصرية</em></>
            ) : (
              <>Visual <em className="text-red not-italic font-syne inline-block">Identity</em></>
            )}
          </motion.h2>
        </div>
        
        <motion.p 
          className="section-desc text-cream/35"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {isRtl ? 'بناء صورة ذهنية راسخة تعكس احترافية مشروعك وترك بصمة مميزة في السوق السعودي' : 'Building a solid mental image that reflects your project professionalism and leaves a unique mark in the Saudi market.'}
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14 items-start">
        {/* Left Side (Logo Showcase) */}
        <div>
          <motion.div 
            className="bg-cream/5 border-[0.5px] border-cream/10 rounded-[20px] py-12 px-8 flex flex-col items-center gap-2.5 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* Pulse Circle */}
            <div className="absolute -right-[80px] -top-[80px] w-[200px] h-[200px] bg-red opacity-5 rounded-full animate-[slashPulse_4s_ease-in-out_infinite]" />
            
            <div className="font-syne font-extrabold text-5xl tracking-[-0.07em] text-cream leading-none dir-ltr relative z-10 flex items-center">
              Sample<span className="w-2.5 h-2.5 bg-red rounded-full mx-0.5 relative -top-3 inline-block" />Brand
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-cream/20 relative z-10 dir-ltr syne-font">
              Concept · Identity · Design
            </div>
            <div className="font-ibm font-light text-[14px] text-cream/25 relative z-10 dir-rtl mt-3">
              مثال لتصميم هوية بصرية متكاملة لباقة من عملائنا
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="bg-[#0f0e0d] rounded-xl py-5 px-4 flex flex-col items-center justify-center gap-1.5 cursor-none transition-transform duration-200 hover:scale-105 border-[0.5px] border-cream/5 text-center">
              <div className="font-syne font-extrabold text-[22px] tracking-[-0.05em] flex items-center leading-none text-cream dir-ltr">
                Client<span className="w-[5px] h-[5px] bg-red rounded-full relative -top-[5px] mx-px inline-block" />Logo
              </div>
              <div className="text-[9px] tracking-[0.18em] uppercase opacity-30 text-cream syne-font">النمط الليلي</div>
            </div>
            <div className="bg-[#f8f4ee] border-[0.5px] border-border rounded-xl py-5 px-4 flex flex-col items-center justify-center gap-1.5 cursor-none transition-transform duration-200 hover:scale-105 text-center">
              <div className="font-syne font-extrabold text-[22px] tracking-[-0.05em] flex items-center leading-none text-ink dir-ltr">
                Client<span className="w-[5px] h-[5px] bg-red rounded-full relative -top-[5px] mx-px inline-block" />Logo
              </div>
              <div className="text-[9px] tracking-[0.18em] uppercase opacity-30 text-ink syne-font">النمط الصباحي</div>
            </div>
            <div className="bg-red rounded-xl py-5 px-4 flex flex-col items-center justify-center gap-1.5 cursor-none transition-transform duration-200 hover:scale-105 text-center">
              <div className="font-syne font-extrabold text-[22px] tracking-[-0.05em] flex items-center leading-none text-white dir-ltr">
                Client<span className="w-[5px] h-[5px] bg-white rounded-full relative -top-[5px] mx-px inline-block" />Logo
              </div>
              <div className="text-[9px] tracking-[0.18em] uppercase opacity-40 text-white syne-font">هوية العلامة</div>
            </div>

          </motion.div>
        </div>

        {/* Right Side (Colors, Font) */}
        <div className="flex flex-col gap-4">
          {/* Colors */}
          <motion.div 
            className="grid grid-cols-3 md:grid-cols-5 gap-2 mt-4 lg:mt-0"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            {[
              { name: 'الأحمر المتقد', hex: '#E8390A', bg: 'bg-[#e8390a]' },
              { name: 'الأسود اللؤلؤي', hex: '#0F0E0D', bg: 'bg-[#0f0e0d]' },
              { name: 'الكريمي الدافئ', hex: '#F8F4EE', bg: 'bg-[#f8f4ee] border-[0.5px] border-cream/20' },
              { name: 'العنبري', hex: '#E89A0A', bg: 'bg-[#e89a0a]' },
              { name: 'الأخضر الزمردي', hex: '#0E7A45', bg: 'bg-[#0e7a45]' },
            ].map((color, i) => (
              <div key={i} className="rounded-[10px] overflow-hidden cursor-none transition-transform duration-200 hover:scale-105">
                <div className={`h-14 ${color.bg}`} />
                <div className="p-2 px-2.5 bg-cream/5 border-[0.5px] border-cream/10 border-t-0 rounded-b-[10px]">
                  <div className="text-[11px] font-semibold text-cream syne-font truncate">{color.name}</div>
                  <div className="text-[9px] text-cream/35 dir-ltr font-mono">{color.hex}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Typography */}
          <motion.div 
            className="bg-cream/5 border-[0.5px] border-cream/10 rounded-2xl p-7"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="font-ibm font-bold text-[clamp(32px,5vw,52px)] tracking-[-0.03em] text-cream leading-[1.5] dir-rtl mb-3 h2-ar">
              منصة واحدة<br/>تكفي لإطلاق<br/><em className="text-red not-italic font-syne dir-ltr inline-block">أي محل.</em>
            </div>
            <div className="text-sm text-cream/30 font-light leading-[1.8] dir-rtl mb-5 ibm-font">
              Tekton يجمع التصميم الداخلي، الهوية البصرية، الحضور الرقمي، التسويق، والأتمتة — كل شي جاهز تحت سقف واحد وبأعلى معايير الدقة.
            </div>
            <div className="flex gap-5 flex-wrap">
              <div className="dir-ltr text-left">
                <div className="text-[9px] tracking-[0.2em] uppercase text-cream/25 syne-font">Display</div>
                <div className="text-xs font-semibold text-cream/60 mt-0.5 syne-font">Syne 800</div>
              </div>
              <div className="dir-ltr text-left">
                <div className="text-[9px] tracking-[0.2em] uppercase text-cream/25 syne-font">Body</div>
                <div className="text-xs font-semibold text-cream/60 mt-0.5 syne-font">IBM Plex Arabic</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
};
