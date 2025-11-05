import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-white text-emerald-950">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-emerald-200/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl" role="img" aria-label="panda">🐼</span>
            <span className="font-semibold tracking-tight text-emerald-900">Panda Portfolio</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-emerald-800">
            <a href="#about" className="hover:text-emerald-600">About</a>
            <a href="#projects" className="hover:text-emerald-600">Projects</a>
            <a href="#certifications" className="hover:text-emerald-600">Certifications</a>
            <a href="#contact" className="hover:text-emerald-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] bg-gradient-to-b from-emerald-100/70 to-green-100/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-900 leading-tight">
                Calm, thoughtful products with a touch of panda and bamboo.
              </h1>
              <p className="mt-4 text-lg text-emerald-900/80 leading-relaxed">
                I design and build serene interfaces and robust systems. Explore my work,
                certifications, and ways to connect below.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-emerald-700 text-white px-4 py-2.5 shadow hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                  View Projects
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-emerald-300 bg-white/70 backdrop-blur px-4 py-2.5 text-emerald-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-white to-emerald-50 shadow-sm flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-30" aria-hidden>
                  {/* Subtle bamboo pattern */}
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <g key={i} transform={`translate(${i * 80 + 40}, 0)`}>
                        <rect x="0" y="20" width="6" height="320" rx="3" fill="#10B981" />
                        <rect x="-8" y="100" width="22" height="6" rx="3" fill="#34D399" />
                        <rect x="-8" y="180" width="22" height="6" rx="3" fill="#34D399" />
                        <rect x="-8" y="260" width="22" height="6" rx="3" fill="#34D399" />
                        <path d="M3 80 C-20 50, -20 50, -10 20" stroke="#059669" strokeWidth="3" />
                        <path d="M3 140 C26 110, 26 110, 36 90" stroke="#059669" strokeWidth="3" />
                      </g>
                    ))}
                  </svg>
                </div>
                <div className="relative z-10 text-center p-10">
                  <div className="text-7xl mb-4" role="img" aria-label="panda">🐼</div>
                  <div className="text-xl font-semibold text-emerald-900">Welcome to my bamboo grove</div>
                  <p className="mt-2 text-emerald-900/80">Take a slow stroll — everything here is designed to be calm and clear.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Projects />
      <Certifications />
      <Contact />

      <footer className="py-10 text-center text-sm text-emerald-800/70">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          © {new Date().getFullYear()} Built with serene energy. 🌿
        </div>
      </footer>
    </div>
  );
}

export default App;
