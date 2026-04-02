import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../utils';
import { useRoute } from '../context/RouterContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    nameAr: 'كافيه ألفا',
    nameEn: 'Café Alpha',
    categoryAr: 'كافيه وقهوة مختصة',
    categoryEn: 'Specialty Coffee',
    descAr: 'تصميم داخلي متكامل، هوية بصرية حديثة، وأنظمة POS ذكية لكافيه في جدة.',
    descEn: 'Full interior design, modern visual identity, and smart POS systems for a Jeddah café.',
    tags: ['تصميم داخلي', 'هوية بصرية', 'Tekton POS'],
    stat: { value: '14', label: 'يوم للانطلاق', labelEn: 'days to launch' },
    color: 'from-red/20 to-red/5',
    accentColor: 'bg-red',
  },
  {
    id: '02',
    nameAr: 'بوتيك لين',
    nameEn: 'Boutique Lein',
    categoryAr: 'أزياء وبوتيك',
    categoryEn: 'Fashion & Boutique',
    descAr: 'نظام عرض بضاعة مبتكر، ربط مع منصات التواصل الاجتماعي، وبرنامج ولاء متكامل.',
    descEn: 'Innovative merchandise display, social media integration, and a full loyalty program.',
    tags: ['هوية بصرية', 'منصات رقمية', 'برنامج ولاء'],
    stat: { value: '11', label: 'يوم للانطلاق', labelEn: 'days to launch' },
    color: 'from-amber-500/20 to-amber-500/5',
    accentColor: 'bg-amber-500',
  },
  {
    id: '03',
    nameAr: 'مطعم مزة',
    nameEn: 'Mazza Restaurant',
    categoryAr: 'مطاعم وفود',
    categoryEn: 'Restaurants & Food',
    descAr: 'قائمة طعام رقمية تفاعلية، تصميم مطبخ احترافي، وتكامل مع تطبيقات التوصيل.',
    descEn: 'Interactive digital menu, professional kitchen design, and delivery platform integration.',
    tags: ['قائمة رقمية', 'تصميم مطبخ', 'Tekton Delivery'],
    stat: { value: '18', label: 'يوم للانطلاق', labelEn: 'days to launch' },
    color: 'from-emerald-500/20 to-emerald-500/5',
    accentColor: 'bg-emerald-500',
  },
  {
    id: '04',
    nameAr: 'صالون نوفا',
    nameEn: 'Nova Salon',
    categoryAr: 'صالون وسبا',
    categoryEn: 'Salon & Spa',
    descAr: 'نظام حجز ذكي عبر واتساب، إدارة موظفين، وتصميم داخلي فاخر لصالون نسائي.',
    descEn: 'Smart WhatsApp booking system, staff management, and luxury interior for a women\'s salon.',
    tags: ['حجز ذكي', 'إدارة موظفين', 'تصميم فاخر'],
    stat: { value: '12', label: 'يوم للانطلاق', labelEn: 'days to launch' },
    color: 'from-violet-500/20 to-violet-500/5',
    accentColor: 'bg-violet-500',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};
const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } }
};

export const ProjectsPage = () => {
  const { isRtl } = useLanguage();
  const { navigate } = useRoute();

  return (
    <div className={cn("min-h-screen bg-ink", isRtl ? "font-ibm" : "font-sans")} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(rgba(248,244,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(248,244,238,0.02)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
      {/* Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Page Header */}
        <div className="border-b border-white/5 px-[5%] md:px-[8%] py-8">
          <div className="max-w-[1280px] mx-auto flex items-center gap-4">
            <button
              onClick={() => navigate('home')}
              className="flex items-center gap-2 text-cream/40 hover:text-cream transition-colors text-sm font-ibm group"
            >
              <motion.span
                animate={{ x: isRtl ? [0, 4, 0] : [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {isRtl ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              </motion.span>
              {isRtl ? 'العودة للرئيسية' : 'Back to Home'}
            </button>
            <span className="text-cream/10">|</span>
            <span className={cn("text-[11px] tracking-[0.3em] uppercase text-red font-bold", isRtl ? "font-ibm" : "font-syne")}>
              {isRtl ? 'مشاريعنا' : 'Our Projects'}
            </span>
          </div>
        </div>

        {/* Hero */}
        <div className="px-[5%] md:px-[8%] pt-20 pb-16">
          <div className="max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-red" />
              <span className={cn("text-[10px] tracking-[0.5em] uppercase text-red font-bold", isRtl ? "font-ibm" : "font-syne")}>
                {isRtl ? 'مشاريع حقيقية · نتائج ملموسة' : 'Real Projects · Tangible Results'}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className={cn("font-black text-cream leading-[1.05] tracking-tight mb-6", isRtl ? "font-ibm text-[clamp(40px,7vw,80px)]" : "font-syne text-[clamp(40px,7vw,80px)]")}
            >
              {isRtl ? (
                <><span className="text-cream/20">10+</span> مشروع أطلقناه<br />
                <em className="not-italic text-red">بكل فخر</em></>
              ) : (
                <><span className="text-cream/20">10+</span> Projects<br />
                Launched with <em className="not-italic text-red">Pride</em></>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-cream/40 font-ibm text-lg max-w-[600px] leading-relaxed"
            >
              {isRtl
                ? 'كل مشروع قصة نجاح — من الفكرة إلى الافتتاح، نحن من يجعلها حقيقية.'
                : 'Every project is a success story — from idea to grand opening, we make it real.'}
            </motion.p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="px-[5%] md:px-[8%] pb-24">
          <div className="max-w-[1280px] mx-auto">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {projects.map((p) => (
                <motion.div
                  key={p.id}
                  variants={card}
                  data-cursor="view"
                  className={cn(
                    "relative group bg-gradient-to-br border border-white/5 rounded-[32px] p-10 overflow-hidden cursor-pointer",
                    "hover:border-white/10 transition-all duration-700",
                    p.color
                  )}
                >
                  {/* Project Number Watermark */}
                  <div className={cn("absolute -top-4 font-syne font-black text-[120px] text-cream/[0.02] pointer-events-none select-none tracking-tighter", isRtl ? "-left-4" : "-right-4")}>
                    {p.id}
                  </div>

                  {/* Accent Glow */}
                  <div className={cn("absolute top-0 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none", p.accentColor, isRtl ? "left-0" : "right-0")} />

                  {/* Category */}
                  <div className={cn("inline-flex px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-8 font-syne border", p.accentColor, "text-white border-transparent")}>
                    {isRtl ? p.categoryAr : p.categoryEn}
                  </div>

                  {/* Name */}
                  <h2 className={cn("font-black text-cream text-3xl mb-3 group-hover:text-white transition-colors", isRtl ? "font-ibm" : "font-syne")}>
                    {isRtl ? p.nameAr : p.nameEn}
                  </h2>

                  {/* Desc */}
                  <p className="text-cream/50 font-ibm text-sm leading-relaxed mb-8 group-hover:text-cream/70 transition-colors">
                    {isRtl ? p.descAr : p.descEn}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] text-cream/50 font-ibm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stat */}
                  <div className="flex items-baseline gap-2">
                    <span className={cn("font-black text-4xl", isRtl ? "font-ibm" : "font-syne", p.accentColor.replace('bg-', 'text-'))}>
                      {p.stat.value}
                    </span>
                    <span className="text-cream/30 text-sm font-ibm">
                      {isRtl ? p.stat.label : p.stat.labelEn}
                    </span>
                  </div>

                  {/* View Action Arrow */}
                  <div className={cn("mt-10 flex items-center gap-3 text-white font-bold text-sm tracking-widest uppercase font-syne opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500", isRtl ? "font-ibm" : "font-syne")}>
                    {isRtl ? 'استكشف المشروع' : 'Explore Project'} 
                    <span className="text-red">{isRtl ? '←' : '→'}</span>
                  </div>

                  {/* Bottom Line */}
                  <div className={cn("absolute bottom-0 left-0 w-0 h-[3px] group-hover:w-full transition-all duration-700", p.accentColor)} />
                </motion.div>
              ))}
            </motion.div>

            {/* Coming Soon Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-6 border border-dashed border-white/10 rounded-[32px] p-10 text-center"
            >
              <div className="text-cream/20 font-syne font-black text-[80px] leading-none mb-4">+</div>
              <p className={cn("text-cream/30 font-ibm text-sm", isRtl ? "text-right md:text-center" : "")}>
                {isRtl ? 'المزيد من المشاريع قادمة — كن أنت القادم' : 'More projects coming — be the next one'}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
