import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative isolate overflow-hidden py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-green-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-[280px,1fr] gap-10 items-start">
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-100 to-green-50 border border-emerald-200/60 flex items-center justify-center shadow-sm">
              <span className="text-7xl" role="img" aria-label="panda">🐼</span>
            </div>
            <div className="mt-4 text-center text-sm text-emerald-800/80">
              Calm vibes. Clean code. Bamboo-fueled focus.
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-emerald-900">About Me</h2>
            <p className="text-emerald-900/80 leading-relaxed">
              Hi, I’m a developer and designer who loves crafting serene, thoughtfully
              designed experiences. My work blends accessibility, performance, and
              aesthetics — with a soft spot for pandas and bamboo. I enjoy building
              full‑stack products, polishing small details, and simplifying complex
              ideas into soothing interfaces.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-emerald-200/60 bg-white/70 backdrop-blur p-4">
                <div className="text-2xl font-semibold text-emerald-900">5+ yrs</div>
                <div className="text-sm text-emerald-700/80">Experience</div>
              </div>
              <div className="rounded-xl border border-emerald-200/60 bg-white/70 backdrop-blur p-4">
                <div className="text-2xl font-semibold text-emerald-900">Full‑stack</div>
                <div className="text-sm text-emerald-700/80">JS / Python</div>
              </div>
              <div className="rounded-xl border border-emerald-200/60 bg-white/70 backdrop-blur p-4">
                <div className="text-2xl font-semibold text-emerald-900">UX‑first</div>
                <div className="text-sm text-emerald-700/80">Calm & clear</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bamboo stalks */}
      <div className="absolute inset-x-0 bottom-0 opacity-20 pointer-events-none" aria-hidden>
        <svg className="w-full" height="80" viewBox="0 0 1200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 20 }).map((_, i) => (
            <g key={i} transform={`translate(${i * 60},0)`}>
              <rect x="28" y="10" width="4" height="70" rx="2" fill="#059669" />
              <rect x="20" y="35" width="20" height="6" rx="3" fill="#34D399" />
              <rect x="20" y="55" width="20" height="6" rx="3" fill="#34D399" />
              <path d="M30 30 C10 10, 10 10, 20 0" stroke="#10B981" strokeWidth="3" />
              <path d="M30 40 C50 20, 50 20, 60 10" stroke="#10B981" strokeWidth="3" />
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
};

export default About;
