import React from 'react';
import { Logo } from './components/Logo';
import { LeadForm } from './components/LeadForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between selection:bg-brand-light selection:text-brand-dark">

      <div
        className="fixed inset-0 pointer-events-none opacity-5"
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}
      ></div>

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 md:py-20 z-10 relative">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center">

          <Logo />

          <div className="text-center mb-10 space-y-4 max-w-2xl">
            <p className="text-xl md:text-2xl font-serif italic opacity-90 text-brand-light">
              Hapet së shpejti
            </p>
            <p className="text-base md:text-lg font-light opacity-70 max-w-md mx-auto leading-relaxed text-brand-light">
              Bëhuni pjesë e waiting listës. Lini të dhënat tuaja për t'u njoftuar të parët kur të hapim dyert për rezervime.
            </p>
          </div>

          <LeadForm />

        </div>
      </main>

      <footer className="w-full py-8 border-t border-brand-light/10 z-10 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center justify-center gap-2 font-light">
            <span className="text-xs uppercase tracking-widest opacity-60 text-brand-light">
              Lokacioni
            </span>
            <address className="not-italic text-sm md:text-base opacity-90 hover:opacity-100 transition-opacity text-brand-light">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Gjuro+Gjakoviki+59+Kumanovo+1300"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-transparent hover:border-brand-light/50 pb-0.5 transition-all"
              >
                Gjuro Gjakoviki 59, Kumanovo 1300
              </a>
            </address>
          </div>
          <div className="mt-8 text-[10px] opacity-30 uppercase tracking-widest text-brand-light">
            © 2025 Wellnest Pilates. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;