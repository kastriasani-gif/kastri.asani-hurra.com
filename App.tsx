import React from 'react';
import { Logo } from './components/Logo';
import { LeadForm } from './components/LeadForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between selection:bg-brand-light selection:text-brand-dark">
      
      {/* Background Texture/Gradient Overlay (Optional subtle aesthetic touch) */}
      <div className="fixed inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 md:py-20 z-10 relative">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
          
          <Logo />

          <div className="text-center mb-12 space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
              Studioja jonë e Pilates<br/>hapet së shpejti
            </h2>
            <p className="text-base md:text-lg font-light opacity-80 max-w-md mx-auto leading-relaxed">
              Bëhuni pjesë e rrugëtimit tonë. Lini të dhënat tuaja për t'u njoftuar të parët kur të hapim dyert për rezervime.
            </p>
          </div>

          <LeadForm />

        </div>
      </main>

      {/* Footer / Location */}
      <footer className="w-full py-8 border-t border-brand-light/10 z-10 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center justify-center gap-2 font-light">
            <span className="text-xs uppercase tracking-widest opacity-60">Lokacioni</span>
            <address className="not-italic text-sm md:text-base opacity-90 hover:opacity-100 transition-opacity">
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
          <div className="mt-8 text-[10px] opacity-30 uppercase tracking-widest">
            &copy; 2025 Wellnest Pilates. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;