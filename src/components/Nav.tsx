import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { cn } from '../utils';

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'why', label: 'لماذا Beyno' },
    { id: 'stores', label: 'أنواع المحلات' },
    { id: 'analytics', label: 'تحليل البيانات' },
    { id: 'process', label: 'كيف نعمل' },
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
              className="absolute bottom-0 right-0 h-[2px] bg-red origin-right z-[101]"
              style={{ scaleX: scrollYProgress }}
            />

            <button
              dir="ltr"
              onClick={() => scrollTo('top')}
              className="font-syne font-extrabold text-[28px] text-cream tracking-[-0.05em] flex items-center group"
            >
              Bey<span className="text-red">.</span>no
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-[13px] font-bold text-cream/40 hover:text-cream tracking-wider transition-all duration-300 font-ibm relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 right-0 w-0 h-px bg-red transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Left side Actions */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center gap-2 text-cream/60 hover:text-cream px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 transition-all font-syne text-[11px] font-bold tracking-widest uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red/40" />
                English
              </motion.button>

              <motion.button
                onClick={() => scrollTo('cta')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:block bg-red text-white border-none py-[10px] px-[20px] rounded-xl text-[13px] font-bold font-ibm shadow-lg shadow-red/20 active:shadow-none transition-all"
              >
                ابدأ مشروعك
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[99] bg-ink flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col gap-8 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-3xl font-bold text-cream/60 hover:text-red transition-colors font-ibm"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('cta')}
                className="mt-8 bg-red text-white py-4 px-12 rounded-2xl text-xl font-bold font-ibm"
              >
                ابدأ مشروعك الآن
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
