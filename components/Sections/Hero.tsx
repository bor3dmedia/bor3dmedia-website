import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col">

      {/* ── Background: drifting YouTube thumbnail mosaic ── */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">

        {/* Thumbnail grid — rotated slightly for cinematic feel */}
        {(() => {
          const imgs = [
            'https://cdn.prod.website-files.com/691e1ad634013b0c7bbacdf9/698e2db0d6106c9017b93176_CGC%20Facebook%20Banner.jpg',
            'https://i.ytimg.com/vi/cd9or9hVpAw/maxresdefault.jpg',
            'https://aliabdaal.com/wp-content/uploads/2025/01/ali-abdaal-author-feel-good-productivity-book.jpg',
            '/1.png',
            '/chuff2.jpg',
            '/fut2.jpg',
            '/2.png',
            '/3.png',
          ];
          const rows = [
            { cls: 'thumb-row thumb-row-l1', order: [0,1,2,3,4,5,6,7] },
            { cls: 'thumb-row thumb-row-r1', order: [3,6,1,2,7,4,0,5] },
            { cls: 'thumb-row thumb-row-l2', order: [4,2,7,5,3,1,6,0] },
            { cls: 'thumb-row thumb-row-r2', order: [1,4,3,6,5,7,0,2] },
          ];
          return (
            <div className="absolute inset-0 flex flex-col justify-center gap-3" style={{ transform: 'rotate(-2deg) scale(1.15)', transformOrigin: 'center' }}>
              {rows.map((row, ri) => (
                <div key={ri} className={row.cls}>
                  {[...row.order, ...row.order].map((idx, i) => (
                    <img key={i} src={imgs[idx]}
                      className="h-44 w-[290px] object-cover rounded-xl flex-shrink-0" alt="" />
                  ))}
                </div>
              ))}
            </div>
          );
        })()}

        {/* Dark veil — makes thumbnails atmospheric, not distracting */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Horizontal vignette — fades edges to black */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, black 0%, transparent 25%, transparent 75%, black 100%)' }} />
        {/* Vertical vignette */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.7) 100%)' }} />

        {/* Brand colour blobs on top of thumbnails */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-[#f3fc46] rounded-full blur-[180px] opacity-[0.10]" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-orange-600 rounded-full blur-[160px] opacity-[0.14]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] bg-red-900 rounded-full blur-[140px] opacity-[0.20]" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      </div>

      {/* ── Navbar spacer ── */}
      <div className="h-20 shrink-0" />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-start justify-end text-left px-8 md:px-14 pb-16 md:pb-20">
        <h1 className="text-[9vw] md:text-[5vw] font-display font-bold leading-[0.9] tracking-tighter text-white max-w-4xl">
          <span className="text-white block">You create.</span>
          <span className="text-white/40 block">We handle the rest.</span>
        </h1>

        <a
          href="https://calendar.app.google/8gmQRu6BPC1GPMxr9"
          target="_blank" rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-[#f3fc46] text-black text-sm font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(243,252,70,0.25)]"
        >
          Work With Us <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
