import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-12">
      {/* 
        This is a text-based representation of the logo based on the provided image style.
        Replace this SVG/Div with an <img src="/logo.png" /> when the asset is available.
      */}
      <div className="relative mb-2">
        <h1 className="text-5xl md:text-7xl tracking-tighter leading-none font-light italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          <span className="not-italic">W</span>ELL<span className="italic">N</span>EST
        </h1>
      </div>
      <div className="flex items-center gap-4 text-xs tracking-[0.2em] font-sans opacity-80 mt-2">
        <span>ESTD.</span>
        <span>PILATES STUDIO</span>
        <span>2025</span>
      </div>
    </div>
  );
};