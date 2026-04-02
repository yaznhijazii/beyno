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
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../utils';

export const Analytics = () => {
  const { t, isRtl } = useLanguage();

  const barData = isRtl ? [
    { name: 'إث', value: 52 },
    { name: 'ث', value: 62 },
    { name: 'أر', value: 46 },
    { name: 'خ', value: 100 },
    { name: 'ج', value: 64 },
    { name: 'س', value: 90 },
    { name: 'أح', value: 82 },
  ] : [
    { name: 'Mon', value: 52 },
    { name: 'Tue', value: 62 },
    { name: 'Wed', value: 46 },
    { name: 'Thu', value: 100 },
    { name: 'Fri', value: 64 },
    { name: 'Sat', value: 90 },
    { name: 'Sun', value: 82 },
  ];

  const pieData = t('analytics.loyaltyItems').map((name: string, i: number) => ({
    name,
    value: i === 0 ? 48 : (i === 1 ? 31 : 21),
    color: i === 0 ? '#e8390a' : (i === 1 ? '#e89a0a' : '#0a3ae8')
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={cn("bg-ink rounded-lg p-3 border border-white/10 text-xs text-cream/80 shadow-2xl backdrop-blur-md", isRtl ? "text-right" : "text-left")}>
          <p className="mb-0 font-ibm font-bold leading-none">
            {isRtl ? `القيمة: ${payload[0].value}%` : `Value: ${payload[0].value}%`}
          </p>
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

  const kpis = [
    { label: t('analytics.kpis.0.label'), val: '2,840', perc: '+12.4%', up: true, unit: t('analytics.kpis.0.unit') },
    { label: t('analytics.kpis.1.label'), val: '147', perc: '+8.1%', up: true, unit: t('analytics.kpis.1.unit') },
    { label: t('analytics.kpis.2.label'), val: isRtl ? '19.3' : '19.3', unit: t('analytics.kpis.2.unit'), perc: '-2.1%', up: false },
    { label: t('analytics.kpis.3.label'), val: '34', perc: '+22%', up: true, unit: t('analytics.kpis.3.unit') },
  ];

  const aiNotes = t('analytics.aiNotes');

  return (
    <section id="analytics" className="py-[120px] px-[5%] md:px-[8%] bg-ink relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-[5%] md:px-[8%]">
        <div className="section-header-grid">
          <div className="flex-1">
            <motion.div 
              className="section-tag-wrapper"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="section-tag-line" />
              <span className="section-tag-text">{t('analytics.tag')}</span>
            </motion.div>
            
            <motion.h2 
              className="section-title text-cream mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {t('analytics.title').split(' ').map((word: string, i: number) => (
                <span key={i} className="inline-block mr-3 last:mr-0">
                  {word === 'حقيقي' || word === 'Real-time' ? (
                    <em className="text-red not-italic font-ibm relative">
                      {word}
                      <motion.div 
                        className="absolute -bottom-1 left-0 w-full h-[3px] bg-red/40"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      />
                    </em>
                  ) : word}
                </span>
              ))}
            </motion.h2>
          </div>
          
          <motion.p 
            className="section-desc text-cream/40"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('analytics.desc')}
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
          <div className={cn("bg-cream/5 py-4 px-8 flex items-center gap-6 border-b border-cream/5", isRtl ? "flex-row" : "flex-row")}>
            <div className="flex gap-2 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
            </div>
            <span className={cn("text-[11px] text-cream/30 font-ibm font-bold uppercase tracking-widest", isRtl ? "ml-auto" : "mr-auto")}>
              {t('analytics.panelTitle')}
            </span>
            <div className="flex items-center gap-2 px-3 py-1 bg-red/10 rounded-full border border-red/20 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
              <span className={cn("text-[10px] text-red font-bold uppercase tracking-widest", isRtl ? "font-ibm" : "font-syne")}>{t('analytics.live')}</span>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-cream/5">
            {kpis.map((kpi, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                data-cursor="view"
                className={cn("py-10 px-8 border-cream/5 last:border-0 group hover:bg-white/[0.02] transition-colors cursor-pointer", isRtl ? "text-right border-l" : "text-left border-r")}
              >
                <div className="text-[11px] text-cream/30 font-bold uppercase tracking-wider mb-3 font-ibm">{kpi.label}</div>
                <div className="flex items-baseline gap-1 mb-3">
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={cn("font-black text-3xl text-cream group-hover:text-red transition-colors tabular-nums", isRtl ? "font-ibm" : "font-syne")}
                  >
                    {kpi.val}
                  </motion.span>
                  {kpi.unit && <span className="text-xs text-cream/40 font-ibm font-bold">{kpi.unit}</span>}
                </div>
                <div className={cn("text-[10px] font-black py-1 px-2.5 rounded-lg inline-flex items-center gap-1", kpi.up ? 'bg-[#0e7a45]/20 text-[#4ade80]' : 'bg-red/20 text-red')}>
                  {kpi.up ? '▲' : '▼'} {kpi.perc}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visualization Section */}
          <div className="grid grid-cols-1 md:grid-cols-5 border-b border-cream/5">
            <div className={cn("p-10 md:col-span-3 border-cream/5", isRtl ? "border-l" : "border-r")}>
              <div className={cn("flex justify-between items-center mb-8", isRtl ? "flex-row" : "flex-row")}>
                <div className={cn("text-sm text-cream/60 font-bold font-ibm", isRtl ? "order-1" : "order-1")}>{t('analytics.charts.weekly')}</div>
                <div className={cn("flex gap-4", isRtl ? "order-2" : "order-2")}>
                  <div className="flex items-center gap-2 text-[10px] text-cream/30 font-ibm">
                    <span className="w-2 h-2 rounded-full bg-cream/10" /> {t('analytics.charts.lastWeek')}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-cream/30 font-ibm">
                    <span className="w-2 h-2 rounded-full bg-red" /> {t('analytics.charts.thisWeek')}
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
                          fill={index === (isRtl ? 3 : 3) ? '#e8390a' : 'rgba(248,244,238,0.1)'} 
                          className="hover:fill-red transition-all duration-300"
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="p-10 md:col-span-2 flex flex-col justify-center">
              <div className={cn("text-sm text-cream/60 font-bold mb-10 font-ibm", isRtl ? "text-right" : "text-left")}>{t('analytics.charts.loyalty')}</div>
              <div className={cn("flex items-center gap-10", isRtl ? "flex-row" : "flex-row")}>
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
                        {pieData.map((entry: any, index: number) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className={cn("font-black text-xl text-cream", isRtl ? "font-ibm" : "font-syne")}>48%</span>
                    <span className={cn("text-[8px] text-cream/30 uppercase tracking-[0.2em] font-bold font-ibm")}>{t('analytics.charts.loyalLabel')}</span>
                  </div>
                </div>
                <div className={cn("flex flex-col gap-4 flex-1", isRtl ? "text-right" : "text-left")}>
                  {pieData.map((d: any, i: number) => (
                    <motion.div 
                      key={i} 
                      className={cn("flex items-center gap-3 group cursor-pointer", isRtl ? "flex-row" : "flex-row")}
                      whileHover={{ x: isRtl ? -5 : 5 }}
                    >
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: d.color }} />
                      <div className="flex flex-col">
                        <span className="text-[11px] text-cream font-bold font-ibm leading-none mb-1">{d.name}</span>
                        <span className={cn("text-[10px] text-cream/30 font-black", isRtl ? "font-ibm" : "font-syne")}>{d.value}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Insights */}
          <div className="grid grid-cols-1 md:grid-cols-3 p-10 gap-12">
            <div className={cn(isRtl ? "text-right" : "text-left")}>
              <div className={cn("text-[11px] text-red font-bold uppercase tracking-widest mb-6", isRtl ? "font-ibm" : "font-syne", !isRtl && "tracking-[0.2em]")}>{t('analytics.performance')}</div>
              <div className="space-y-5">
                {[
                  { title: isRtl ? 'كابتشينو كلاسيك' : 'Classic Cappuccino', p: '92%', val: '680' },
                  { title: isRtl ? 'لاتيه بالفانيلا' : 'Vanilla Latte', p: '75%', val: '520' },
                  { title: isRtl ? 'قهوة مختصة' : 'Specialty Coffee', p: '62%', val: '410' }
                ].map((item, i) => (
                  <div key={i} className="group cursor-pointer" data-cursor="plus">
                    <div className={cn("flex justify-between items-center mb-2", isRtl ? "flex-row" : "flex-row")}>
                      <span className="text-xs text-cream/80 font-bold font-ibm">{item.title}</span>
                      <span className={cn("text-[10px] text-cream/30 font-black", isRtl ? "font-ibm" : "font-syne")}>{item.val}</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: item.p }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className={cn("h-full bg-red group-hover:bg-[#ff5f57] transition-colors", isRtl ? "origin-right" : "origin-left scale-x-100")} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={cn("bg-white/[0.02] p-6 rounded-2xl border border-white/5", isRtl ? "text-right" : "text-left")}>
              <div className="text-[11px] text-cream/40 font-bold uppercase tracking-widest mb-4 font-ibm">{t('analytics.forecast')}</div>
              <div className={cn("text-2xl font-black text-cream mb-2", isRtl ? "font-ibm" : "font-syne")}>+31<span className="text-red">%</span></div>
              <p className="text-[11px] text-cream/40 font-ibm leading-relaxed mb-6">{t('analytics.forecastDesc')}</p>
              <div className="flex items-end gap-1.5 h-12 dir-ltr">
                {[40, 65, 45, 80, 55, 95, 100].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: 0.8 + (i * 0.05) }}
                    className={cn("flex-1 rounded-t-sm", i > 4 ? "bg-red" : "bg-cream/10")} 
                  />
                ))}
              </div>
            </div>

            <div className={cn(isRtl ? "text-right" : "text-left")}>
              <div className="text-[11px] text-cream/40 font-bold uppercase tracking-widest mb-6 font-ibm">{t('analytics.aiTitle')}</div>
              <div className="space-y-4">
                {aiNotes.map((note: any, i: number) => (
                  <motion.div 
                    key={i} 
                    className={cn("flex items-start gap-4 p-3 rounded-xl border border-red/10 bg-red/[0.03] hover:bg-red/5 transition-colors", isRtl ? "flex-row" : "flex-row")}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-red mt-1.5 shrink-0" />
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
