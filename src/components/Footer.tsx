
export const Footer = () => {
  return (
    <footer className="bg-ink pt-24 pb-12 px-[5%] md:px-[8%] relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-red/20 via-white/5 to-transparent" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[400px] h-[400px] bg-red/5 blur-[120px] rounded-full" />

      <div className="max-w-[1400px] mx-auto relative z-10 text-right dir-rtl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Column - Far Right */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-start text-right">
            <div dir="ltr" className="font-syne font-extrabold text-[36px] tracking-[-0.07em] text-cream flex items-center mb-8 group cursor-pointer">
              Bey<span className="text-red">.</span>no
            </div>
            
            <p className="font-ibm text-lg text-cream/30 font-light leading-relaxed mb-10 max-w-[450px]">
              من الفكرة إلى الافتتاح — نحن شريكك التقني والاستراتيجي لإطلاق مشروعك التجاري القادم بمعايير عالمية.
            </p>
            
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-cream/40 font-bold font-syne">All Systems Operational</span>
            </div>
          </div>

          {/* Links Columns - To the Left of Brand */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 text-right">
            <div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-red font-bold mb-8 font-syne">المنظومة</div>
              <ul className="space-y-4">
                {['لماذا Beyno', 'كيف نعمل', 'تحليل البيانات', 'أنواع المحلات'].map((link, i) => (
                  <li key={i}>
                    <a href={`#${['why', 'process', 'analytics', 'stores'][i]}`} className="text-sm text-cream/40 hover:text-cream transition-all duration-300 font-ibm block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.3em] uppercase text-red font-bold mb-8 font-syne">الخدمات</div>
              <ul className="space-y-4">
                {['التصميم الداخلي', 'الهوية البصرية', 'الحضور الرقمي', 'خطة التسويق', 'الأتمتة'].map(link => (
                  <li key={link}>
                    <span className="text-sm text-cream/40 cursor-default hover:text-cream/60 transition-colors font-ibm block">{link}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="text-[11px] tracking-[0.3em] uppercase text-red font-bold mb-8 font-syne">تواصل</div>
                <a href="mailto:hello@beyno.com" className="text-sm text-cream/40 hover:text-cream transition-all duration-300 font-ibm block">hello@beyno.com</a>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <div className="text-[10px] tracking-[0.1em] text-cream/20 font-syne uppercase">Based in</div>
                <div className="text-xs text-cream/40 font-ibm font-bold">Amman, Jordan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 dir-ltr">
          <div className="text-[10px] tracking-[0.2em] text-cream/15 uppercase font-syne">
            © 2026 Beyno Intelligence. Built for Visionaries.
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
