// Removed React import
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

function App() {
  return (
    <div className="font-sans antialiased bg-cream selection:bg-red selection:text-white">
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
}

export default App;
