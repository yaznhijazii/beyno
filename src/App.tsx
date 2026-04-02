import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { SectorMarquee } from './components/SectorMarquee';
import { Stores } from './components/Stores';
import { Process } from './components/Process';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { RouterProvider, useRoute } from './context/RouterContext';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProductsPage } from './pages/ProductsPage';
import { cn } from './utils';

const MainContent = () => {
  const { isRtl, language } = useLanguage();
  const { route } = useRoute();

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
      {route === 'projects' && (
        <>
          <ProjectsPage />
          <Footer />
        </>
      )}
      {route === 'products' && (
        <>
          <ProductsPage />
          <Footer />
        </>
      )}
      {route === 'home' && (
        <>
          <Nav />
          <main>
            <Hero />
            <SectorMarquee />
            <Stores />
            <Process />
            <CTA />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <MainContent />
      </RouterProvider>
    </LanguageProvider>
  );
}

export default App;
