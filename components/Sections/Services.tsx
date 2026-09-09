import React from 'react';
import { SERVICES_DATA } from '../../constants';
import Reveal from '../UI/Reveal';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-32 bg-black text-white relative overflow-hidden">

      {/* Background Noise/Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:mb-24">
          <Reveal width="100%">
            <p className="text-zinc-500 text-sm font-mono uppercase tracking-[0.25em] mb-6">What We Do</p>
            <h2 className="text-4xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-6">
              ONE TEAM. <br />
              <span className="text-[#f3fc46]">EVERY FORMAT.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {SERVICES_DATA.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={(i % 2 === 0 ? 0 : 150) as 0 | 100 | 200 | 300 | 400} width="100%">
                <div className="group h-full bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10 hover:border-[#f3fc46]/50 hover:bg-white/[0.05] transition-all duration-300">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-zinc-600 font-display font-bold text-lg">{service.id}</span>
                    <Icon className="w-6 h-6 text-zinc-500 group-hover:text-[#f3fc46] transition-colors" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
