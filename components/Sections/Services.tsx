import React from 'react';
import { SERVICES_DATA } from '../../constants';
import Reveal from '../UI/Reveal';

const Services: React.FC = () => {
  return (
    <section id="services" className="relative overflow-hidden bg-zinc-50 text-black py-28 md:py-40 border-t border-zinc-100">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Centered heading */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02]">
              Everything you need,
              <br className="hidden md:block" /> <span className="font-serif-italic font-normal">nothing</span> you don't.
            </h2>
          </Reveal>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {SERVICES_DATA.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={(i * 100) as 0 | 100 | 200 | 300 | 400} width="100%">
                <div className="group h-full flex flex-col">
                  {/* Vibrant gradient tile */}
                  <div className={`relative aspect-square w-full rounded-3xl bg-gradient-to-br ${service.gradient} overflow-hidden shadow-[0_10px_40px_-12px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_60px_-16px_rgba(0,0,0,0.45)]`}>
                    {/* glossy sheen */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_10%,rgba(255,255,255,0.35),transparent_50%)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-14 h-14 md:w-16 md:h-16 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="mt-6 text-lg md:text-xl font-bold tracking-tight">{service.title}</h3>
                  <p className="mt-2 text-black/50 text-[15px] leading-relaxed">{service.description}</p>
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
