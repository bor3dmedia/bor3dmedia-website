import React from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from '../UI/Reveal';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-white border-t border-zinc-100 py-28 md:py-44">

      {/* Subtle brand glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#f3fc46] rounded-full blur-[220px] opacity-[0.12]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <Reveal width="100%">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black tracking-tighter mb-8 md:mb-12 leading-[1.02]">
            Ready to scale your
            <span className="block"><span className="font-serif-italic font-normal">content?</span></span>
          </h2>
        </Reveal>

        <Reveal width="100%" delay={200}>
          <div className="flex flex-col items-center justify-center gap-8">
            <a
              href="https://calendar.app.google/8gmQRu6BPC1GPMxr9"
              target="_blank" rel="noopener noreferrer"
              className="w-full md:w-auto px-10 md:px-12 py-5 md:py-6 bg-black text-white text-base md:text-lg font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-xl shadow-black/10"
            >
              Book a Discovery Call
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-xs text-black/40 font-medium uppercase tracking-widest max-w-md mx-auto leading-relaxed mt-2">
              Work with a team that executes, sets strategy and grows your content across every platform.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
