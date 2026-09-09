import React from 'react';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import Brands from './components/Sections/Brands';
import Services from './components/Sections/Services';
import Work from './components/Sections/Work';
import Philosophy from './components/Sections/Philosophy';
import Pillars from './components/Sections/Pillars';
import Process from './components/Sections/Process';
import CTA from './components/Sections/CTA';
import Team from './components/Sections/Team';
import Footer from './components/Layout/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    // anchor links scroll smoothly via Lenis
    const handleAnchorClick = (e: Event) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!target) return;
      const id = target.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -80 });
      }
    };
    document.addEventListener('click', handleAnchorClick);

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-white min-h-screen text-black selection:bg-[#f3fc46] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Philosophy />
        <Services />
        <Pillars />
        <Process />
        <Work />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;