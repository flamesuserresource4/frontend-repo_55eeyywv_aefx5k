import React from 'react';

const certifications = [
  {
    name: 'Certified Frontend Developer',
    issuer: 'Open Web Consortium',
    year: '2023',
  },
  {
    name: 'Cloud Practitioner',
    issuer: 'Global Cloud Institute',
    year: '2022',
  },
  {
    name: 'Python for Data & APIs',
    issuer: 'Data Engineering Academy',
    year: '2021',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl" role="img" aria-label="medal">🏅</span>
          <h2 className="text-3xl font-bold tracking-tight text-emerald-900">Certifications</h2>
        </div>
        <ol className="relative border-s border-emerald-200/70 ml-3">
          {certifications.map((c) => (
            <li key={c.name} className="mb-8 ms-6">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white ring-4 ring-white">✓</span>
              <div className="rounded-xl border border-emerald-200/60 bg-white/70 backdrop-blur p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-emerald-900">{c.name}</h3>
                  <span className="text-sm text-emerald-700/80">{c.year}</span>
                </div>
                <p className="text-emerald-900/80">{c.issuer}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Certifications;
