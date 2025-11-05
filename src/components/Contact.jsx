import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-white to-emerald-50/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl" role="img" aria-label="envelope">✉️</span>
          <h2 className="text-3xl font-bold tracking-tight text-emerald-900">Contact</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <a
            href="mailto:your.email@example.com"
            className="group flex items-center gap-3 rounded-xl border border-emerald-200/60 bg-white/70 backdrop-blur p-4 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <div className="p-2 rounded-lg bg-emerald-600 text-white">
              <Mail size={18} />
            </div>
            <div>
              <div className="font-semibold text-emerald-900 group-hover:text-emerald-700">Email</div>
              <div className="text-sm text-emerald-800/80">your.email@example.com</div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-emerald-200/60 bg-white/70 backdrop-blur p-4 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <div className="p-2 rounded-lg bg-emerald-600 text-white">
              <Linkedin size={18} />
            </div>
            <div>
              <div className="font-semibold text-emerald-900 group-hover:text-emerald-700">LinkedIn</div>
              <div className="text-sm text-emerald-800/80">/in/your-profile</div>
            </div>
          </a>

          <a
            href="tel:+1234567890"
            className="group flex items-center gap-3 rounded-xl border border-emerald-200/60 bg-white/70 backdrop-blur p-4 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <div className="p-2 rounded-lg bg-emerald-600 text-white">
              <Phone size={18} />
            </div>
            <div>
              <div className="font-semibold text-emerald-900 group-hover:text-emerald-700">Phone</div>
              <div className="text-sm text-emerald-800/80">+1 (234) 567-890</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
