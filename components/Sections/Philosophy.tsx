import React from 'react';
import { PROBLEMS } from '../../constants';
import Reveal from '../UI/Reveal';

const Philosophy: React.FC = () => {
  return (
    <section id="problem" className="py-32 bg-zinc-50 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal width="100%">
          <div className="max-w-4xl mb-16">
            <p className="text-zinc-400 text-sm font-mono uppercase tracking-[0.25em] mb-6">The Problem</p>
            <h2 className="text-4xl md:text-8xl font-display font-bold text-black tracking-tighter leading-[0.9]">
                YOU CREATE. <br/>
                <span className="text-black bg-[#f3fc46] px-4 inline-block transform -skew-x-6 border-b-8 border-black">WE RUN EVERYTHING ELSE.</span>
            </h2>
          </div>
        </Reveal>

        <div className="max-w-5xl">
          {PROBLEMS.map((item, i) => (
            <Reveal key={item.number} width="100%" delay={(i * 100) as 0 | 100 | 200}>
              <div className="grid grid-cols-1 md:grid-cols-[100px_260px_1fr] gap-4 md:gap-8 items-baseline py-8 border-t border-zinc-200">
                <span className="text-zinc-300 font-display font-bold text-3xl">{item.number}</span>
                <h3 className="text-black font-display font-bold uppercase tracking-wide text-lg">{item.title}</h3>
                <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
