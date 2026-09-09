import React from 'react';
import { PROBLEMS } from '../../constants';
import Reveal from '../UI/Reveal';

const Philosophy: React.FC = () => {
  return (
    <section id="problem" className="relative overflow-hidden bg-white text-black py-28 md:py-40">
      {/* Motion video background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          src="/videos/yestheory.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-[0.12] blur-2xl scale-110"
        />
        {/* fade edges into white */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Centered heading */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02]">
              You create. We run
              <br className="hidden md:block" /> <span className="font-serif-italic font-normal text-5xl md:text-7xl lg:text-8xl">everything</span> else.
            </h2>
            <p className="mt-8 text-black/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Most creators drown in the work around the work. We take the entire production layer off your plate — so you can stay in your zone of genius.
            </p>
          </Reveal>
        </div>

        {/* Three tall gradient cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {PROBLEMS.map((item, i) => (
            <Reveal key={item.number} width="100%" delay={(i * 120) as 0 | 100 | 200}>
              <div className={`group relative flex h-full min-h-[420px] md:min-h-[520px] flex-col justify-end overflow-hidden rounded-[2rem] bg-gradient-to-br ${item.gradient} p-8 md:p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:-translate-y-1.5`}>
                {/* glossy sheen */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_15%_0%,rgba(255,255,255,0.30),transparent_55%)]" />
                {/* film grain */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    backgroundSize: "180px 180px",
                  }}
                />
                {/* big number watermark */}
                <span className="pointer-events-none absolute top-6 right-8 text-7xl md:text-8xl font-bold text-white/20 leading-none">{item.number}</span>

                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-3 text-white/85 text-[15px] md:text-base leading-relaxed max-w-xs">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
