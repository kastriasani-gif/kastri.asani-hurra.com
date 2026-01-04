import React, { useState } from 'react';
import { LeadData, TranslationContent } from '../types';
import { submitLead } from '../services/sheetService';

interface LeadFormProps {
  content: TranslationContent;
}

export const LeadForm: React.FC<LeadFormProps> = ({ content }) => {
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
      setMessage(content.errorEmailRequired);
      return;
    }

    setStatus('loading');
    setMessage('');
    
    try {
      const response = await submitLead(formData);
      if (response.success) {
        setStatus('success');
        setMessage(content.successMsg);
        setFormData({ email: '', emri: '', mbiemri: '', telefonnumri: '' });
      } else {
        setStatus('error');
        // Use localized generic error unless it's a specific config error which we might want to debug
        // For production "coming soon", generic is better.
        setMessage(content.errorGeneric);
      }
    } catch (err) {
      setStatus('error');
      setMessage(content.errorGeneric);
    }
  };

  if (status === 'success') {
    return (
      <div className="w-full py-8 px-4 border border-brand-light/20 rounded-lg text-center bg-brand-light/5 animate-fade-in">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-brand-light/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-2xl font-serif mb-2 text-brand-light">{content.successTitle}</h3>
        <p className="text-brand-light/70 font-light text-sm mb-6">{message}</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-xs uppercase tracking-widest text-brand-light/60 hover:text-brand-light border-b border-transparent hover:border-brand-light/50 pb-1 transition-all"
        >
          {content.back}
        </button>
      </div>
    );
  }

  const inputClasses = "w-full bg-transparent border-b border-brand-light/10 focus:border-brand-light/50 py-3 px-1 text-brand-light placeholder-brand-light/20 focus:outline-none transition-colors text-base font-light";
  const labelClasses = "text-[10px] uppercase tracking-[0.15em] text-brand-light/50 mb-0";

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
      
      {/* Required Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className={labelClasses}>{content.emailLabel} <span className="text-brand-light/30">*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder={content.emailPlaceholder}
          className={inputClasses}
        />
      </div>

      {/* Name and Last Name */}
      <div className="flex flex-col gap-1">
        <label htmlFor="emri" className={labelClasses}>{content.nameLabel}</label>
        <input
          type="text"
          id="emri"
          name="emri"
          value={formData.emri}
          onChange={handleChange}
          placeholder={content.optionalPlaceholder}
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="mbiemri" className={labelClasses}>{content.surnameLabel}</label>
        <input
          type="text"
          id="mbiemri"
          name="mbiemri"
          value={formData.mbiemri}
          onChange={handleChange}
          placeholder={content.optionalPlaceholder}
          className={inputClasses}
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-1">
        <label htmlFor="telefonnumri" className={labelClasses}>{content.phoneLabel}</label>
        <input
          type="tel"
          id="telefonnumri"
          name="telefonnumri"
          value={formData.telefonnumri}
          onChange={handleChange}
          placeholder={content.optionalPlaceholder}
          className={inputClasses}
        />
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="text-red-200 text-xs text-center py-2 bg-red-900/20 border border-red-500/20 rounded mt-2">
          {message}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-8 w-full bg-[#F5E6D3] text-[#3E2B22] font-medium py-4 uppercase tracking-[0.2em] hover:bg-white transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-xs md:text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300"
      >
        {status === 'loading' ? (
          <>
            <span className="w-3 h-3 border-2 border-[#3E2B22]/30 border-t-[#3E2B22] rounded-full animate-spin"></span>
            {content.buttonLoading}
          </>
        ) : (
          content.buttonText
        )}
      </button>

      <p className="text-center text-[9px] text-brand-light/30 mt-2 font-light">
        {content.privacy}
      </p>
    </form>
  );
};