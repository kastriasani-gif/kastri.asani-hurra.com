import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { LeadForm } from './components/LeadForm';
import { Language, TranslationContent } from './types';

const translations: Record<Language, TranslationContent> = {
  sq: {
    headline: "Hapet së shpejti",
    subtext: "Bëhuni pjesë e waiting listës. Lini të dhënat tuaja për t'u njoftuar të parët kur të hapim dyert për rezervime.",
    emailLabel: "Email",
    nameLabel: "Emri",
    surnameLabel: "Mbiemri",
    phoneLabel: "Numri i Telefonit",
    emailPlaceholder: "email@shembull.com",
    optionalPlaceholder: "Opsionale",
    buttonText: "Më njoftoni",
    buttonLoading: "Duke dërguar...",
    privacy: "Ne respektojmë privatësinë tuaj. Të dhënat nuk do të ndahen me palë të treta.",
    successTitle: "Faleminderit!",
    successMsg: "Të dhënat tuaja u ruajtën me sukses.",
    back: "Kthehu",
    location: "Lokacioni",
    address: "Gjuro Gjakoviki 59, Kumanovo 1300",
    errorEmailRequired: "Ju lutemi shkruani emailin.",
    errorGeneric: "Ndodhi një gabim i papritur. Ju lutemi provoni përsëri.",
    footerCopyright: "© 2025 Wellnest Pilates."
  },
  mk: {
    headline: "Отвораме наскоро",
    subtext: "Бидете дел од листата на чекање. Оставете ги вашите податоци за да бидете првите известени кога ќе отвориме за резервации.",
    emailLabel: "Е-пошта",
    nameLabel: "Име",
    surnameLabel: "Презиме",
    phoneLabel: "Телефонски број",
    emailPlaceholder: "email@primer.com",
    optionalPlaceholder: "Опционално",
    buttonText: "Извести ме",
    buttonLoading: "Се испраќа...",
    privacy: "Ја почитуваме вашата приватност. Податоците нема да се споделуваат со трети лица.",
    successTitle: "Ви благодариме!",
    successMsg: "Вашите податоци се успешно зачувани.",
    back: "Назад",
    location: "Локација",
    address: "Ѓуро Ѓаковиќ 59, Куманово 1300",
    errorEmailRequired: "Ве молиме внесете ја вашата е-пошта.",
    errorGeneric: "Настана неочекувана грешка. Ве молиме обидете се повторно.",
    footerCopyright: "© 2025 Wellnest Pilates."
  },
  en: {
    headline: "Opening Soon",
    subtext: "Join our waiting list. Leave your details to be the first to know when we open for bookings.",
    emailLabel: "Email",
    nameLabel: "Name",
    surnameLabel: "Surname",
    phoneLabel: "Phone Number",
    emailPlaceholder: "email@example.com",
    optionalPlaceholder: "Optional",
    buttonText: "Notify Me",
    buttonLoading: "Sending...",
    privacy: "We respect your privacy. Your data will not be shared with third parties.",
    successTitle: "Thank you!",
    successMsg: "Your details have been saved successfully.",
    back: "Go Back",
    location: "Location",
    address: "Gjuro Gjakoviki 59, Kumanovo 1300",
    errorEmailRequired: "Please enter your email.",
    errorGeneric: "An unexpected error occurred. Please try again.",
    footerCopyright: "© 2025 Wellnest Pilates."
  }
};

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('sq');
  const content = translations[currentLang];

  return (
    <div className="min-h-screen w-full flex flex-col justify-between selection:bg-brand-light selection:text-brand-dark bg-brand-dark font-sans relative">

      {/* Language Selector */}
      <div className="absolute top-6 right-6 z-50 flex items-center gap-3 text-[10px] md:text-xs tracking-widest font-sans font-medium text-brand-light">
        <button 
          onClick={() => setCurrentLang('sq')}
          className={`${currentLang === 'sq' ? 'opacity-100 font-bold border-b border-brand-light' : 'opacity-40 hover:opacity-70'} transition-all pb-0.5`}
        >
          SQ
        </button>
        <span className="opacity-20">/</span>
        <button 
          onClick={() => setCurrentLang('mk')}
          className={`${currentLang === 'mk' ? 'opacity-100 font-bold border-b border-brand-light' : 'opacity-40 hover:opacity-70'} transition-all pb-0.5`}
        >
          MK
        </button>
        <span className="opacity-20">/</span>
        <button 
          onClick={() => setCurrentLang('en')}
          className={`${currentLang === 'en' ? 'opacity-100 font-bold border-b border-brand-light' : 'opacity-40 hover:opacity-70'} transition-all pb-0.5`}
        >
          EN
        </button>
      </div>

      {/* Background Texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-5 mix-blend-overlay"
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}
      ></div>

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8 md:py-16 z-10 relative w-full mt-8 md:mt-0">
        
        {/* Card Container */}
        <div className="w-full max-w-[520px] mx-auto bg-[#35241c] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 p-8 md:p-12 rounded-2xl relative overflow-hidden backdrop-blur-sm">
          
          {/* Subtle inner glow/gradient for depth */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-light/5 to-transparent pointer-events-none"></div>

          <div className="flex flex-col items-center relative z-10">
            <Logo />

            <div className="text-center mb-10 space-y-4 w-full">
              <p className="text-3xl md:text-4xl font-serif italic text-brand-light tracking-wide">
                {content.headline}
              </p>
              <p className="text-brand-light/70 font-light text-sm md:text-base leading-relaxed max-w-sm mx-auto">
                {content.subtext}
              </p>
            </div>

            <LeadForm content={content} />
          </div>

        </div>
      </main>

      <footer className="w-full py-8 z-10 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-50 text-brand-light">
              {content.location}
            </span>
            <address className="not-italic text-xs md:text-sm text-brand-light/80 hover:text-brand-light transition-colors">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Gjuro+Gjakoviki+59+Kumanovo+1300"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-brand-light/30 hover:border-brand-light pb-0.5 transition-all"
              >
                {content.address}
              </a>
            </address>
          </div>
          <div className="mt-6 text-[10px] text-brand-light/30 uppercase tracking-widest">
            {content.footerCopyright}
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;