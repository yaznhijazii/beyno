import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

export const Analytics = () => {
  const barData = [
    { name: 'إث', value: 52 },
    { name: 'ث', value: 62 },
    { name: 'أر', value: 46 },
    { name: 'خ', value: 100 },
    { name: 'ج', value: 64 },
    { name: 'س', value: 90 },
    { name: 'أح', value: 82 },
  ];

  const pieData = [
    { name: 'عملاء دائمون', value: 48, color: '#e8390a' },
    { name: 'زيارة أولى', value: 31, color: '#e89a0a' },
    { name: 'عبر التطبيق', value: 21, color: '#0a3ae8' },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-ink rounded-lg p-3 border border-cream/10 text-xs text-cream/80 dir-rtl shadow-2xl backdrop-blur-md">
          <p className="mb-0 font-ibm font-bold leading-none">{`القيمة: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="analytics" className="py-[120px] px-[5%] md:px-[8%] bg-ink relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="dir-rtl text-right">
            <motion.span 
              className="text-[11px] tracking-[0.4em] uppercase text-red font-bold dir-ltr mb-4 block font-syne"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Data Intelligence
            </motion.span>
            
            <motion.h2 
              className="font-ibm font-bold text-[clamp(32px,5vw,56px)] tracking-[-0.04em] leading-[1.05] text-cream mb-4 h2-ar"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              تحليل بيانات <em className="text-red not-italic font-ibm relative">حقيقي
                <motion.div 
                  className="absolute -bottom-1 left-0 w-full h-[3px] bg-red/40"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </em>
            </motion.h2>
          </div>
          
          <motion.p 
            className="text-lg text-cream/35 font-light leading-[1.8] dir-rtl max-w-[480px] ibm-font text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            لوحة تحكم ذكية تعطيك نبض مشروعك في الوقت الفعلي — مبيعاتك، سلوك عملائك، وتوقعات نموك القادمة بدقة متناهية.
          </motion.p>
        </div>
        
        <motion.div 
          className="bg-cream/5 border border-cream/10 rounded-[32px] overflow-hidden shadow-2xl relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Scanning Line Effect */}
          <motion.div 
            className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-red/20 to-transparent z-20 pointer-events-none"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Top Bar */}
          <div className="bg-cream/5 py-4 px-8 flex items-center gap-3 border-b border-cream/5">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]/80" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]/80" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]/80" />
            </div>
            <span className="text-[13px] text-cream/40 mr-auto ml-0 dir-rtl font-ibm font-medium">
              Beyno Insights — لوحة التحكم الذكية
            </span>
            <div className="flex items-center gap-2 px-3 py-1 bg-red/10 rounded-full border border-red/20">
              <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full animate-pulse" />
              <span className="text-[10px] text-red font-bold uppercase tracking-widest font-syne">Live Feed</span>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-cream/5">
            {[
              { label: 'إيرادات اليوم', val: '2,840', perc: '+12.4%', up: true },
              { label: 'عدد الطلبات', val: '147', perc: '+8.1%', up: true },
              { label: 'متوسط الفاتورة', val: '19.3', unit: 'ر.س', perc: '-2.1%', up: false },
              { label: 'عملاء جدد', val: '34', perc: '+22%', up: true },
            ].map((kpi, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="py-10 px-8 dir-rtl border-l border-cream/5 last:border-l-0 group hover:bg-white/[0.02] transition-colors"
              >
                <div className="text-[11px] text-cream/30 font-bold uppercase tracking-wider mb-3 font-ibm">{kpi.label}</div>
                <div className="flex items-baseline gap-1 mb-3">
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="font-syne font-black text-3xl text-cream group-hover:text-red transition-colors tabular-nums"
                  >
                    {kpi.val}
                  </motion.span>
                  {kpi.unit && <span className="text-xs text-cream/40 font-ibm font-bold">{kpi.unit}</span>}
                </div>
                <div className={`text-[10px] font-black py-1 px-2.5 rounded-lg inline-flex items-center gap-1 ${kpi.up ? 'bg-[#0e7a45]/20 text-[#4ade80]' : 'bg-red/20 text-red'}`}>
                  {kpi.up ? '▲' : '▼'} {kpi.perc}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visualization Section */}
          <div className="grid grid-cols-1 md:grid-cols-5 border-b border-cream/5">
            <div className="p-10 md:col-span-3 border-l border-cream/5">
              <div className="flex justify-between items-center mb-8 dir-rtl">
                <div className="text-sm text-cream/60 font-bold font-ibm">الإيرادات الأسبوعية (الحالية مقابل السابقة)</div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-[10px] text-cream/30 font-ibm">
                    <span className="w-2 h-2 rounded-full bg-cream/10" /> الأسبوع الماضي
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-cream/30 font-ibm">
                    <span className="w-2 h-2 rounded-full bg-red" /> هذا الأسبوع
                  </div>
                </div>
              </div>
              <div className="h-[200px] w-full dir-ltr">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <Tooltip cursor={{ fill: 'rgba(255,255,255,0.03)' }} content={<CustomTooltip />} />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'rgba(248,244,238,0.2)', fontSize: 10, fontWeight: 700 }} 
                      dy={10}
                    />
                    <Bar 
                      dataKey="value" 
                      radius={[6, 6, 0, 0]}
                    >
                      {barData.map((_, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={index === 3 ? '#e8390a' : 'rgba(248,244,238,0.1)'} 
                          className="hover:fill-red transition-all duration-300"
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="p-10 md:col-span-2 flex flex-col justify-center">
              <div className="text-sm text-cream/60 font-bold mb-10 dir-rtl font-ibm">توزيع العملاء حسب الولاء</div>
              <div className="flex items-center gap-10">
                <div className="w-[120px] h-[120px] relative shrink-0 dir-ltr">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        innerRadius={40}
                        outerRadius={55}
                        paddingAngle={8}
                        dataKey="value"
                        stroke="none"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="font-syne font-black text-xl text-cream">48%</span>
                    <span className="text-[8px] text-cream/30 uppercase tracking-[0.2em] font-bold">Loyal</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 dir-rtl flex-1">
                  {pieData.map((d, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center gap-3 group cursor-pointer"
                      whileHover={{ x: -5 }}
                    >
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: d.color }} />
                      <div className="flex flex-col">
                        <span className="text-[11px] text-cream font-bold font-ibm leading-none mb-1">{d.name}</span>
                        <span className="text-[10px] text-cream/30 font-syne font-black">{d.value}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Insights */}
          <div className="grid grid-cols-1 md:grid-cols-3 p-10 gap-12">
            <div className="dir-rtl">
              <div className="text-[11px] text-red font-bold uppercase tracking-widest mb-6 font-syne">Top Performance</div>
              <div className="space-y-5">
                {[
                  { title: 'كابتشينو كلاسيك', p: '92%', val: '680' },
                  { title: 'لاتيه بالفانيلا', p: '75%', val: '520' },
                  { title: 'قهوة مختصة', p: '62%', val: '410' }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-cream/80 font-bold font-ibm">{item.title}</span>
                      <span className="text-[10px] text-cream/30 font-syne font-black">{item.val}</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: item.p }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className="h-full bg-red group-hover:bg-[#ff5f57] transition-colors" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dir-rtl bg-white/[0.02] p-6 rounded-2xl border border-white/5">
              <div className="text-[11px] text-cream/40 font-bold uppercase tracking-widest mb-4 font-ibm">التوقعات القادمة</div>
              <div className="text-2xl font-syne font-black text-cream mb-2">+31<span className="text-red">%</span></div>
              <p className="text-[11px] text-cream/40 font-ibm leading-relaxed mb-6">من المتوقع زيادة المبيعات في الربع القادم بناءً على اتجاهات السوق الحالية.</p>
              <div className="flex items-end gap-1.5 h-12 dir-ltr">
                {[40, 65, 45, 80, 55, 95, 100].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: 0.8 + (i * 0.05) }}
                    className={`flex-1 rounded-t-sm ${i > 4 ? 'bg-red' : 'bg-cream/10'}`} 
                  />
                ))}
              </div>
            </div>

            <div className="dir-rtl">
              <div className="text-[11px] text-cream/40 font-bold uppercase tracking-widest mb-6 font-ibm">توصيات الذكاء الاصطناعي</div>
              <div className="space-y-4">
                {[
                  { title: 'ذروة الطلب', desc: 'تحديث الجدولة للساعة 9 صباحاً' },
                  { title: 'المخزون', desc: 'إعادة طلب البن (يكفي لـ 3 أيام)' },
                  { title: 'العروض', desc: 'تفعيل خصم 20% للعملاء "المنقطعين"' }
                ].map((note, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-start gap-4 p-3 rounded-xl border border-red/10 bg-red/[0.03] hover:bg-red/5 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-red mt-1 sm:mt-1.5" />
                    <div>
                      <div className="text-[11px] font-bold text-cream font-ibm">{note.title}</div>
                      <div className="text-[10px] text-cream/40 font-ibm">{note.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
