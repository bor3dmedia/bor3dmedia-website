import React from 'react';
import Reveal from '../UI/Reveal';

const TEAM = [
  {
    name: "Francisco Albuquerque",
    role: "Co-Founder",
    description: "Strategic vision and creative direction. Co-creator of the Andamente project, with over 300k followers across social media.",
    image: "https://prifvutxutzcspiukzek.supabase.co/storage/v1/object/public/nothing1/1.jpeg",
    initial: "F",
  },
  {
    name: "Bruno Carvalho",
    role: "Co-Founder",
    description: "In charge of the entire operation. From logistics to finances, he keeps the machine running.",
    image: "/bruno.png",
    initial: "BC",
  },
  {
    name: "Fábio Domingues",
    role: "Videography",
    description: "Behind the camera on every production. The eye that sees everything.",
    image: "https://prifvutxutzcspiukzek.supabase.co/storage/v1/object/public/nothing1/4.jpeg",
    initial: "FD",
  },
  {
    name: "João Reis",
    role: "Creative & Designer",
    description: "Turns ideas into visual identities that stick in your memory.",
    image: "/reis.jpg",
    initial: "JR",
  },
  {
    name: "Raquel Nogueira",
    role: "Marketing",
    description: "The mind behind distribution and organic growth.",
    image: "https://prifvutxutzcspiukzek.supabase.co/storage/v1/object/public/nothing1/2.jpeg",
    initial: "R",
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-28 md:py-40 bg-white border-t border-zinc-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        <Reveal width="100%">
          <div className="max-w-4xl mx-auto text-center mb-20 md:mb-24">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black tracking-tighter leading-[1.02]">
              The people <span className="font-serif-italic font-normal">behind</span> it.
            </h2>
            <p className="text-black/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mt-8">
              Obsessed with content, driven by results. Every person on the team lives and breathes YouTube every single day.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {TEAM.map((member, index) => (
            <Reveal key={member.name} delay={(index * 100) as 100 | 200 | 300 | 400} width="100%">
              <div className="group flex flex-col items-center text-center">
                {/* Photo */}
                <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-5 border border-zinc-200 shadow-lg group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Overlay with initial fallback */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>

                {/* Info */}
                <div className="inline-block bg-[#f3fc46] text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
                  {member.role}
                </div>
                <h3 className="text-lg font-bold text-black leading-tight mb-1">
                  {member.name}
                </h3>
                <p className="text-zinc-500 text-xs font-medium leading-relaxed">
                  {member.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
