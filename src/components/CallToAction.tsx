import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

interface CallToActionProps {
  onOpenBooking: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenBooking }) => {
  return (
    <section className="bg-[#0a0f1d] text-white py-20 lg:py-28 relative overflow-hidden" id="booking-cta">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <span className="text-emerald-400 text-xs uppercase tracking-[0.3em] font-semibold block mb-4">
          Reserved Consultation Sessions
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight mb-6">
          Take control of your health with personalized medical care.
        </h2>

        <p className="text-white/70 text-base sm:text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Book an appointment with Dr. Arvind Sharma today. Same-day appointments available for acute symptoms and general health assessments.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-[#0a0f1d] px-8 py-4 text-xs uppercase tracking-[0.15em] font-bold hover:bg-emerald-400 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">calendar_month</span>
            <span>Book Consultation Visit</span>
          </button>
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-white/30 text-white px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:border-white transition-all"
            href={CLINIC_INFO.whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-emerald-400 text-base">chat</span>
            <span>WhatsApp Concierge</span>
          </a>
        </div>

        <p className="text-white/40 text-xs tracking-wider uppercase mt-8">
          Reception Desk: {CLINIC_INFO.phoneDesk} • Indiranagar, Bengaluru
        </p>
      </div>
    </section>
  );
};
