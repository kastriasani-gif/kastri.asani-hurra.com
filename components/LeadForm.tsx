import React, { useState } from 'react';
import { LeadData } from '../types';
import { submitLead } from '../services/sheetService';

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadData>({
    email: '',
    emri: '',
    mbiemri: '',
    telefonnumri: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email) {
      setStatus('error');
      setMessage('Ju lutemi shkruani emailin.');
      return;
    }

    setStatus('loading');
    
    try {
      const response = await submitLead(formData);
      if (response.success) {
        setStatus('success');
        setMessage(response.message);
        setFormData({ email: '', emri: '', mbiemri: '', telefonnumri: '' });
      } else {
        setStatus('error');
        setMessage(response.message);
      }
    } catch (err) {
      setStatus('error');
      setMessage('Ndodhi një gabim i papritur. Ju lutemi provoni përsëri.');
    }
  };

  if (status === 'success') {
    return (
      <div className="w-full max-w-md mx-auto p-8 border border-brand-light/20 rounded-lg text-center bg-brand-light/5 animate-fade-in">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-2xl font-serif mb-2">Faleminderit!</h3>
        <p className="opacity-80 font-light">{message}</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-xs uppercase tracking-widest border-b border-brand-light/50 pb-1 hover:border-brand-light transition-colors"
        >
          Kthehu
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto flex flex-col gap-5">
      
      {/* Required Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs uppercase tracking-widest opacity-70 ml-1">Email <span className="text-red-300">*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="email@shembull.com"
          className="w-full bg-transparent border-b border-brand-light/30 py-3 px-2 text-brand-light placeholder-brand-light/30 focus:outline-none focus:border-brand-light transition-colors"
        />
      </div>

      {/* Name and Last Name - Two Columns on Desktop */}
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-1 flex flex-col gap-1">
          <label htmlFor="emri" className="text-xs uppercase tracking-widest opacity-70 ml-1">Emri</label>
          <input
            type="text"
            id="emri"
            name="emri"
            value={formData.emri}
            onChange={handleChange}
            placeholder="Opsionale"
            className="w-full bg-transparent border-b border-brand-light/30 py-3 px-2 text-brand-light placeholder-brand-light/30 focus:outline-none focus:border-brand-light transition-colors"
          />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <label htmlFor="mbiemri" className="text-xs uppercase tracking-widest opacity-70 ml-1">Mbiemri</label>
          <input
            type="text"
            id="mbiemri"
            name="mbiemri"
            value={formData.mbiemri}
            onChange={handleChange}
            placeholder="Opsionale"
            className="w-full bg-transparent border-b border-brand-light/30 py-3 px-2 text-brand-light placeholder-brand-light/30 focus:outline-none focus:border-brand-light transition-colors"
          />
        </div>
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-1">
        <label htmlFor="telefonnumri" className="text-xs uppercase tracking-widest opacity-70 ml-1">Numri i Telefonit</label>
        <input
          type="tel"
          id="telefonnumri"
          name="telefonnumri"
          value={formData.telefonnumri}
          onChange={handleChange}
          placeholder="Opsionale"
          className="w-full bg-transparent border-b border-brand-light/30 py-3 px-2 text-brand-light placeholder-brand-light/30 focus:outline-none focus:border-brand-light transition-colors"
        />
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="text-red-300 text-sm text-center py-2 bg-red-900/10 border border-red-900/20 rounded">
          {message}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 w-full bg-brand-light text-brand-dark font-medium py-4 uppercase tracking-[0.15em] hover:bg-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <span className="w-4 h-4 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin"></span>
            Duke dërguar...
          </>
        ) : (
          'Më njoftoni'
        )}
      </button>

      <p className="text-center text-xs opacity-50 font-light mt-2">
        Ne respektojmë privatësinë tuaj. Të dhënat nuk do të ndahen me palë të treta.
      </p>
    </form>
  );
};