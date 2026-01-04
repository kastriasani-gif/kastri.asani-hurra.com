import React, { useState } from 'react';

export const Logo: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center text-center mb-8 w-full">
      {/* 
         Using direct path '/logo.png' avoids module resolution errors.
         Ensure 'logo.png' is located in the root directory (next to index.html).
      */}
      {!imageError ? (
        <img 
          src="/logo.png" 
          alt="WELLNEST - Estd. Pilates Studio 2025" 
          className="w-auto max-w-full md:max-w-3xl h-auto object-contain animate-fade-in"
          onError={(e) => {
            console.warn("Logo image not found at '/logo.png'. Switched to fallback text.");
            setImageError(true);
          }}
        />
      ) : (
        // Fallback text version acts as a placeholder if the image is missing
        <div className="flex flex-col items-center animate-fade-in py-4">
          <h1 className="text-6xl md:text-8xl tracking-tighter leading-none font-light italic text-brand-light mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            <span className="not-italic">W</span>ELL<span className="italic">N</span>EST
          </h1>
          <div className="flex items-center justify-center gap-6 md:gap-10 text-[10px] md:text-xs tracking-[0.25em] font-sans text-brand-light opacity-80">
            <span>ESTD.</span>
            <span>PILATES STUDIO</span>
            <span>2025</span>
          </div>
        </div>
      )}
    </div>
  );
};