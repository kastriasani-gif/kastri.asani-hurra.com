import React, { useState } from 'react';

export const Logo: React.FC = () => {
  const [error, setError] = useState(false);

  return (
    <div className="flex justify-center items-center mb-6 md:mb-8 w-full px-4">
      {!error ? (
        <img
          src="https://i.ibb.co/35Xh3Mc3/logo.png" 
          onError={() => setError(true)}
          alt="Wellnest Pilates Studio"
          style={{ aspectRatio: '3 / 1' }}
          className="w-40 md:w-56 object-contain transition-all duration-500"
        />
      ) : (
        <div className="flex flex-col items-center text-brand-light animate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl italic tracking-tighter leading-none">
            WELLNEST
          </h1>
          <div className="flex items-center gap-3 mt-2 opacity-80 text-[10px] md:text-xs uppercase tracking-[0.25em] font-sans">
            <span>Estd.</span>
            <span>Pilates Studio</span>
            <span>2025</span>
          </div>
        </div>
      )}
    </div>
  );
};