import React from 'react';
import { PILLARS } from '../../constants';
import Reveal from '../UI/Reveal';

const Pillars: React.FC = () => {
  return (
    <section id="why-us" className="py-32 bg-white border-t border-zinc-100 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <Reveal width="100%">
            <p className="text-zinc-400 text-sm font-mono uppercase tracking-[0.25em] mb-6">Why Bored Media</p>
            <h2 className="text-4xl md:text-7xl font-display font-bold text-black tracking-tighter leading-[0.95] max-w-4xl">
              BUILT ON THREE THINGS THAT ACTUALLY <span className="bg-[#f3fc46] px-3 inline-block transform -skew-x-6">MATTER.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i * 150) as 0 | 100 | 200 | 300 | 400} width="100%">
              <div className="border-t-2 border-black pt-6">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-black">{pillar.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm font-medium mb-8">{pillar.tagline}</p>
                <ul className="flex flex-col gap-5">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex gap-3 text-zinc-600 text-base font-medium leading-relaxed">
                      <span className="text-[#c4cc14] flex-shrink-0 font-bold">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
