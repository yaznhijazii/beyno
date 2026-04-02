import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../utils';
import Magnetic from './Magnetic';
import { useRoute } from '../context/RouterContext';

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, isRtl } = useLanguage();
  const { navigate, route } = useRoute();

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 80);

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        if (!mobileMenuOpen) setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const scrollTo = (id: string) => {
    if (route !== 'home') {
      navigate('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'stores', label: t('nav.stores'), type: 'scroll' },
    { id: 'process', label: t('nav.process'), type: 'scroll' },
    { id: 'projects', label: t('nav.projects'), type: 'page' },
    { id: 'products', label: t('nav.products'), type: 'page' },
  ];

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              'fixed top-0 left-0 right-0 z-[100] h-20 px-[5%] flex items-center justify-between border-b transition-all duration-500',
              scrolled || mobileMenuOpen
                ? 'bg-ink border-white/5 backdrop-blur-xl h-16' 
                : 'bg-transparent border-transparent'
            )}
          >
            {/* Scroll Progress Bar */}
            <motion.div 
              className={cn("absolute bottom-0 h-[2px] bg-red z-[101]", isRtl ? "right-0 origin-right" : "left-0 origin-left")}
              style={{ scaleX: scrollYProgress }}
            />

            <Magnetic strength={0.2}>
              <button
                dir="ltr"
                onClick={() => scrollTo('top')}
                className="font-syne font-extrabold text-[28px] text-cream tracking-[-0.05em] flex items-center group relative z-10"
              >
                Tek<span className="text-red ml-1 mr-0.5 text-[16px] translate-y-1">◣</span>ton
              </button>
            </Magnetic>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => link.type === 'page' ? navigate(link.id as 'projects' | 'products') : scrollTo(link.id)}
                  className={cn(
                    "text-[13px] font-bold tracking-wider transition-all duration-300 font-ibm relative group",
                    link.type === 'page'
                      ? 'text-cream/60 hover:text-red'
                      : 'text-cream/40 hover:text-cream'
                  )}
                >
                  {link.label}
                  <span className={cn("absolute -bottom-1 w-0 h-px transition-all duration-300 group-hover:w-full", link.type === 'page' ? 'bg-red' : 'bg-red', isRtl ? "right-0" : "left-0")} />
                </button>
              ))}
            </div>

            {/* Left side Actions */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-red transition-all group"
                title={language === 'ar' ? 'Switch to English' : 'التحويل للعربية'}
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5 text-cream/70 group-hover:text-red transition-colors"
                >
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </motion.button>

              <motion.button
                onClick={() => scrollTo('cta')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "hidden sm:block bg-red text-white border-none py-[10px] px-[20px] rounded-xl text-[13px] font-bold shadow-lg shadow-red/20 active:shadow-none transition-all uppercase tracking-wider",
                  isRtl ? "font-ibm" : "font-syne"
                )}
              >
                {t('nav.cta')}
              </motion.button>

              {/* Burger Button */}
              <button 
                className="md:hidden flex flex-col gap-1.5 p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className={cn("w-6 h-[2px] bg-cream transition-all", mobileMenuOpen && "rotate-45 translate-y-2")} />
                <div className={cn("w-6 h-[2px] bg-cream transition-all", mobileMenuOpen && "opacity-0")} />
                <div className={cn("w-6 h-[2px] bg-cream transition-all", mobileMenuOpen && "-rotate-45 -translate-y-2")} />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: isRtl ? '100%' : '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRtl ? '100%' : '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[99] bg-ink flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col gap-8 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    if (link.type === 'page') {
                      navigate(link.id as 'projects' | 'products');
                      setMobileMenuOpen(false);
                    } else {
                      scrollTo(link.id);
                    }
                  }}
                  className={cn(
                    "text-3xl font-bold transition-colors",
                    language === 'en' ? "font-syne" : "font-ibm",
                    link.type === 'page' ? 'text-red/70 hover:text-red' : 'text-cream/60 hover:text-red'
                  )}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('cta')}
                className={cn(
                  "mt-8 bg-red text-white py-4 px-12 rounded-2xl text-xl font-bold",
                  isRtl ? "font-ibm" : "font-syne"
                )}
              >
                {t('nav.cta')}
              </button>
              <button
                onClick={() => {
                  setLanguage(language === 'ar' ? 'en' : 'ar');
                  setMobileMenuOpen(false);
                }}
                className="mt-4 flex items-center gap-2 text-cream/40 font-syne text-[11px] font-bold tracking-[0.3em] uppercase group"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                {language === 'ar' ? 'English' : 'عربي'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
