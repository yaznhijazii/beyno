import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { SectorMarquee } from './components/SectorMarquee';
import { Why } from './components/Why';
import { Stores } from './components/Stores';
import { Analytics } from './components/Analytics';
import { Process } from './components/Process';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { cn } from './utils';

const MainContent = () => {
  const { isRtl, language } = useLanguage();
  return (
    <div 
      dir={isRtl ? "rtl" : "ltr"} 
      lang={language}
      className={cn(
        "font-sans antialiased bg-cream selection:bg-red selection:text-white transition-all duration-500 grain",
        isRtl ? "font-ibm" : "font-sans"
      )}
    >
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <SectorMarquee />
        <Why />
        <Stores />
        <Analytics />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;
