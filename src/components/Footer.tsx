import { useLanguage } from '../context/LanguageContext';
import { cn } from '../utils';

export const Footer = () => {
  const { t, isRtl } = useLanguage();

  const menuLinks = [
    { id: 'why', label: t('nav.why') },
    { id: 'process', label: t('nav.process') },
    { id: 'analytics', label: t('nav.analytics') },
    { id: 'stores', label: t('nav.stores') },
  ];

  const services = t('footer.services');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink pt-24 pb-12 px-[5%] md:px-[8%] relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-red/20 via-white/5 to-transparent" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[400px] h-[400px] bg-red/5 blur-[120px] rounded-full" />

      <div className={cn("max-w-[1400px] mx-auto relative z-10", isRtl ? "text-right" : "text-left")}>
        <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24", !isRtl && "lg:flex-row-reverse")}>
          
          {/* Brand Column */}
          <div className={cn("lg:col-span-5 flex flex-col", isRtl ? "items-start lg:items-start" : "items-start lg:items-start")}>
            <div dir="ltr" className="font-syne font-extrabold text-[36px] tracking-[-0.07em] text-cream flex items-center mb-8 group cursor-pointer">
              Tek<span className="text-red ml-1 mr-0.5 text-[20px] translate-y-1.5">◣</span>ton
            </div>
            
            <p className="font-ibm text-lg text-cream/30 font-light leading-relaxed mb-10 max-w-[450px]">
              {t('footer.desc')}
            </p>
            
          </div>

          {/* Links Columns */}
          <div className={cn("lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12", isRtl ? "text-right" : "text-left")}>
            <div>
              <div className={cn("text-[11px] tracking-[0.3em] uppercase text-red font-bold mb-8 font-syne", !isRtl && "tracking-[0.5em]")}>{t('footer.col1')}</div>
              <ul className="space-y-4">
                {menuLinks.map((link) => (
                  <li key={link.id}>
                    <button 
                      onClick={() => scrollTo(link.id)} 
                      className="text-sm text-cream/40 hover:text-cream transition-all duration-300 font-ibm block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className={cn("text-[11px] tracking-[0.3em] uppercase text-red font-bold mb-8 font-syne", !isRtl && "tracking-[0.5em]")}>{t('footer.col2')}</div>
              <ul className="space-y-4">
                {services.map((link: string) => (
                  <li key={link}>
                    <span className="text-sm text-cream/40 cursor-default hover:text-cream/60 transition-colors font-ibm block">{link}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className={cn("text-[11px] tracking-[0.3em] uppercase text-red font-bold mb-8 font-syne", !isRtl && "tracking-[0.5em]")}>{t('footer.col3')}</div>
                <a href="mailto:hello@tekton.com" className="text-sm text-cream/40 hover:text-cream transition-all duration-300 font-ibm block">hello@tekton.com</a>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="text-[10px] tracking-[0.1em] text-cream/20 font-syne uppercase">{isRtl ? 'المقر الرئيسي' : 'Based in'}</div>
                <div className="text-xs text-cream/40 font-ibm font-bold">{isRtl ? 'عمان، الأردن' : 'Amman, Jordan'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={cn("pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6", isRtl ? "dir-ltr" : "dir-ltr")}>
          <div className="text-[10px] tracking-[0.2em] text-cream/15 uppercase font-syne">
            {t('footer.bottom')}
          </div>
          
          <div className="flex gap-8 items-center">
            {['Privacy', 'Terms', 'Security'].map(item => (
              <button key={item} className="text-[10px] tracking-[0.2em] uppercase text-cream/15 hover:text-cream/40 transition-colors font-syne">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
