import React, { useState } from 'react';

export const Logo: React.FC = () => {
  const [error, setError] = useState(false);

  return (
    <div className="flex justify-center items-center mb-6 md:mb-8 w-full px-4">
      {!error ? (
        <img
          src="https://i.ibb.co/LDwpFJ1F/a27df971-f95d-4229-b63b-6ee8076825a2.png"
          alt="Wellnest Pilates Studio"
          className="w-full max-w-[480px] h-auto object-contain transition-all duration-300"
          onError={() => setError(true)}
        />
      ) : (
        <div className="flex flex-col items-center text-brand-light">
          <h1 className="font-serif text-5xl md:text-7xl italic tracking-tighter leading-none">
            WELLNEST
          </h1>
          <div className="flex items-center gap-3 mt-2 opacity-80 text-[10px] md:text-xs uppercase tracking-[0.25em] font-sans">
            <span>ESTD.</span>
            <span>PILATES STUDIO</span>
            <span>2025</span>
          </div>
        </div>
      )}
    </div>
  );
};