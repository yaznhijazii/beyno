import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../utils';
import { useRoute } from '../context/RouterContext';
import { Analytics } from '../components/Analytics';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const ProductsPage = () => {
  const { isRtl } = useLanguage();
  const { navigate } = useRoute();

  return (
    <div className="min-h-screen bg-ink" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Page Header */}
      <div className="bg-ink border-b border-white/5 px-[5%] md:px-[8%] py-8">
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
            {isRtl ? 'منتجاتنا' : 'Our Products'}
          </span>
        </div>
      </div>

      {/* Analytics Section - Full Page */}
      <Analytics />
    </div>
  );
};
