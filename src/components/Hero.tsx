import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="border-b border-[#e5e5df] bg-[#fbfbf9] relative overflow-hidden" aria-label="Hero Introduction">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[660px]">
          {/* Left: Editorial Typography & Consultation Callout */}
          <div className="lg:col-span-7 px-6 py-16 lg:py-24 lg:pr-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#e5e5df]">
            <div>
              {/* Micro-label pill */}
              <div className="inline-flex items-center gap-2 text-[#0f766e] uppercase text-[11px] tracking-[0.25em] font-bold pb-2 border-b border-[#0f766e]/30 mb-8">
                <span>Centre for Advanced Internal Medicine &amp; Metabolic Health</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#0a0f1d] leading-[1.15] mb-6">
                Quiet clinical excellence, <br className="hidden sm:inline" />
                <span className="italic font-normal">precision diagnostics,</span> <br className="hidden sm:inline" />
                and unhurried care.
              </h1>

              <p className="text-[#334155] text-base lg:text-lg font-light leading-relaxed max-w-xl mb-10">
                A private outpatient practice dedicated to thorough clinical evaluations, metabolic disease reversal, and proactive longevity protocols. Led by Dr. Arvind Sharma with over 18 years of clinical pedigree.
              </p>

              {/* Dual Action Cluster */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-3 bg-[#0a0f1d] text-white px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#334155] transition-all cursor-pointer shadow-sm"
                >
                  <span>Book Clinic Consultation</span>
                  <span className="material-symbols-outlined text-base">calendar_today</span>
                </button>
                <a
                  className="inline-flex items-center justify-center gap-2.5 bg-white border border-[#e5e5df] px-6 py-4 text-xs uppercase tracking-[0.15em] font-semibold text-[#0a0f1d] hover:border-[#0a0f1d] transition-all"
                  href={CLINIC_INFO.whatsappUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[#0f766e] text-lg">chat</span>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Credibility Subtext Micro-row */}
            <div className="pt-8 border-t border-[#e5e5df] text-xs text-[#334155] flex flex-wrap items-center gap-y-2 gap-x-6">
              <span className="flex items-center gap-1.5 font-medium text-[#0a0f1d]">
                <span className="w-1.5 h-1.5 bg-[#0f766e] rounded-full"></span> 18+ Years Pedigree
              </span>
              <span className="text-[#e5e5df]">•</span>
              <span>CMC &amp; Manipal Hospitals Alumni</span>
              <span className="text-[#e5e5df]">•</span>
              <span>No Advance Booking Fee</span>
              <span className="text-[#e5e5df]">•</span>
              <span className="font-serif italic text-[#847545]">KMC Reg. 64281</span>
            </div>
          </div>

          {/* Right: Architectural Frame with Doctor Portrait */}
          <div className="lg:col-span-5 relative bg-[#f4f4ef] p-6 lg:p-10 flex flex-col justify-center">
            <div className="relative w-full aspect-[4/5] bg-white border border-[#e5e5df] p-3 shadow-sm">
              <div className="relative w-full h-full overflow-hidden bg-[#0a0f1d]">
                <img
                  className="w-full h-full object-cover object-center grayscale-[15%] contrast-[1.05]"
                  alt="Dr. Arvind Sharma senior consultant in Bengaluru clinical practice"
                  src={CLINIC_INFO.images.heroDoctor}
                  loading="eager"
                  width="480"
                  height="600"
                />
              </div>

              {/* Floating Editorial Doctor Identity Plaque */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-[#e5e5df] p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#0a0f1d]">
                      {CLINIC_INFO.doctor.name}
                    </h3>
                    <p className="text-[11px] uppercase tracking-wider text-[#0f766e] font-semibold mt-0.5">
                      {CLINIC_INFO.doctor.title}
                    </p>
                    <p className="text-xs text-[#334155] mt-1">
                      MD (Internal Medicine) • Fellow in Diabetology
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-widest text-[#334155] block">
                      OPD Status
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Open Today
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
