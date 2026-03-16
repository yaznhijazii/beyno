import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const CTA = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    // Simulate API Call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would typically connect to your backend API
    // console.log('Sending email to API:', email);
    
    setStatus('success');
  };

  return (
    <section id="cta" className="py-20 px-[5%] md:px-[8%] bg-cream overflow-hidden">
      <motion.div 
        className="max-w-[1000px] mx-auto bg-red rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(232,57,10,0.25)]"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        {/* Organic Light Movement */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle Grid */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, white 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
          
          {/* Floating Liquid Blobs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [-50, 50, -50],
              y: [-20, 20, -20],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full" 
          />
          
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [50, -50, 50],
              y: [20, -20, 20],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-cream/10 blur-[80px] rounded-full" 
          />

          {/* Scanning Light Beam */}
          <motion.div 
            animate={{ 
              top: ['-100%', '200%'],
              rotate: [45, 45]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
            className="absolute left-[-50%] w-[200%] h-32 bg-gradient-to-b from-transparent via-white/5 to-transparent skew-y-12"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 flex items-center gap-3"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[9px] tracking-[0.4em] uppercase text-white/60 font-bold font-syne">Ready to build?</span>
          </motion.div>

          <motion.h2 
            className="text-[clamp(32px,5vw,60px)] font-bold text-white leading-[1] mb-6 font-ibm tracking-tight dir-rtl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            جاهز تطلق <br/> <span className="text-cream italic font-syne">مشروعك؟</span>
          </motion.h2>

          <p className="text-lg text-white/70 mb-12 max-w-[500px] font-ibm font-light leading-relaxed dir-rtl px-4">
            انضم لأكثر من 10 مشاريع تجارية انطلقت بقوة. اترك بريدك الإلكتروني وسيقوم فريقنا بالتواصل معك لبدء رحلة التميز.
          </p>

          {/* Interactive Creative Form */}
          <div className="w-full max-w-[400px] relative group px-4">
            <AnimatePresence mode="wait">
              {status !== 'success' ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  className="relative flex items-center p-1 bg-white/10 backdrop-blur-2xl rounded-xl border border-white/20 focus-within:border-white/40 transition-all duration-500"
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                >
                  <input 
                    type="email"
                    required
                    placeholder="بريدك الإلكتروني"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent border-none text-white px-4 py-3 font-ibm placeholder:text-white/30 focus:ring-0 text-right dir-rtl text-sm"
                  />
                  
                  <motion.button 
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white text-red px-5 py-2.5 rounded-lg font-bold font-ibm hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)] transition-all disabled:opacity-50 flex items-center gap-2 whitespace-nowrap text-xs"
                  >
                    {status === 'loading' ? (
                      <div className="w-3.5 h-3.5 border-2 border-red/30 border-t-red rounded-full animate-spin" />
                    ) : (
                      'أرسل الآن'
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white text-red p-3 rounded-xl font-bold flex items-center justify-center gap-3 shadow-xl text-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-red text-white flex items-center justify-center text-[10px]">✓</div>
                  <span className="font-ibm">تم استلام طلبك، سنتواصل معك!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div 
            className="mt-12 flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-red bg-cream flex items-center justify-center text-[10px] font-bold text-red overflow-hidden shadow-lg">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" />
                </div>
              ))}
            </div>
            <span className="text-white/40 text-[9px] font-bold tracking-[0.2em] uppercase font-syne">Join 10+ Visionaries</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
