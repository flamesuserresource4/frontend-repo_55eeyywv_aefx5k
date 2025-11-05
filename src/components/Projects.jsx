import React from 'react';

const projects = [
  {
    title: 'Bamboo Notes',
    description: 'A minimal note app with calming gradients and delightful micro‑interactions.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Panda Planner',
    description: 'Task planning that feels gentle. Progress bars, focus timers, and warm visuals.',
    tech: ['FastAPI', 'MongoDB', 'React'],
    link: '#',
  },
  {
    title: 'Zen Shop',
    description: 'A soothing e‑commerce experience with accessible components and crisp performance.',
    tech: ['Next.js', 'Stripe', 'Vercel'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-2xl" role="img" aria-label="bamboo">🎋</span>
          <h2 className="text-3xl font-bold tracking-tight text-emerald-900">Projects</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group block rounded-2xl border border-emerald-200/60 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-emerald-900 group-hover:text-emerald-700">
                  {p.title}
                </h3>
                <span className="text-xl" role="img" aria-label="panda">🐼</span>
              </div>
              <p className="mt-2 text-emerald-900/80 leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-emerald-700 group-hover:gap-3 transition-all">
                <span>View</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
