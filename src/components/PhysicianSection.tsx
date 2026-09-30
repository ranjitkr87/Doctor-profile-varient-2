import React from 'react';
import { CLINIC_INFO, INSTITUTIONAL_MATRIX } from '../data/clinicData';

interface PhysicianSectionProps {
  onOpenBooking: () => void;
}

export const PhysicianSection: React.FC<PhysicianSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#e5e5df]" id="physician">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Formal Board Attestation */}
          <div className="lg:col-span-5">
            <div className="bg-[#fbfbf9] border border-[#e5e5df] p-4 relative">
              <div className="aspect-[3/4] w-full overflow-hidden bg-[#0a0f1d]">
                <img
                  className="w-full h-full object-cover grayscale-[10%]"
                  alt="Dr. Arvind Sharma consulting in Indiranagar clinic"
                  src={CLINIC_INFO.images.doctorConsulting}
                  loading="lazy"
                  width="450"
                  height="600"
                />
              </div>
              <div className="pt-4 border-t border-[#e5e5df] mt-4 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0f766e] text-base">verified</span>
                  <span className="font-medium text-[#0a0f1d]">{CLINIC_INFO.doctor.kmc}</span>
                </div>
                <span className="text-[#334155]">Karnataka Medical Council</span>
              </div>
            </div>
          </div>

          {/* Right Column: Medical Philosophy & Institutional Matrix */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-[#0f766e] text-xs uppercase tracking-[0.25em] font-semibold mb-2">
              Practice Leadership
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0a0f1d] tracking-tight mb-2">
              {CLINIC_INFO.doctor.name}
            </h2>
            <p className="text-xs uppercase tracking-widest text-[#847545] font-semibold mb-8">
              {CLINIC_INFO.doctor.degrees}
            </p>

            {/* Editorial Blockquote */}
            <div className="mb-10 pl-6 border-l border-[#0a0f1d] space-y-4">
              <blockquote className="font-serif italic text-xl lg:text-2xl text-[#0a0f1d] leading-relaxed">
                "{CLINIC_INFO.doctor.quote}"
              </blockquote>
              <p className="text-sm text-[#334155] font-light leading-relaxed">
                {CLINIC_INFO.doctor.subquote}
              </p>
            </div>

            {/* Structured Institutional Matrix with Hairline Borders */}
            <div className="border-t border-b border-[#e5e5df] divide-y divide-[#e5e5df] mb-8">
              {INSTITUTIONAL_MATRIX.map((item, idx) => (
                <div key={idx} className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-2 text-xs">
                  <span className="sm:col-span-4 uppercase tracking-widest text-[#334155] font-semibold">
                    {item.label}
                  </span>
                  <span className="sm:col-span-8 text-[#0a0f1d] font-medium">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 bg-[#0a0f1d] text-white px-7 py-3.5 text-xs uppercase tracking-wider font-semibold hover:bg-[#334155] transition-all cursor-pointer"
              >
                <span>Schedule a Consultation with Dr. Sharma</span>
                <span className="material-symbols-outlined text-sm">north_east</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
