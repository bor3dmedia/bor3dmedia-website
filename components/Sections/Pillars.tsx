import React from 'react';
import { PILLARS } from '../../constants';
import Reveal from '../UI/Reveal';

const Pillars: React.FC = () => {
  return (
    <section id="why-us" className="relative overflow-hidden bg-zinc-50 text-black py-28 md:py-40 border-t border-zinc-100">
      {/* soft radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(0,0,0,0.04),transparent_70%)]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Centered heading */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02]">
              Built on three things
              <br className="hidden md:block" /> that <span className="font-serif-italic font-normal">actually</span> matter.
            </h2>
          </Reveal>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={(i * 150) as 0 | 100 | 200 | 300 | 400} width="100%">
                <div className="group relative h-full rounded-3xl border border-zinc-200/80 bg-white p-8 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.20)] hover:border-zinc-300">
                  {/* Icon badge */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold tracking-tight">{pillar.title}</h3>
                  <p className="text-black/40 text-sm mt-1 mb-8">{pillar.tagline}</p>

                  <ul className="flex flex-col gap-5 border-t border-zinc-100 pt-8">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex gap-3 text-black/60 text-[15px] leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black/70 ring-2 ring-black/10" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Pillars;
