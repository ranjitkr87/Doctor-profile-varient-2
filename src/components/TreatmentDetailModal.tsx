import React from 'react';
import { TreatmentItem } from '../types/clinic';

interface TreatmentDetailModalProps {
  treatment: TreatmentItem | null;
  onClose: () => void;
  onBook: (treatmentId: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onBook
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white border border-[#0a0f1d] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#334155] hover:text-[#0a0f1d] p-1 border border-transparent hover:border-[#e5e5df]"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Header */}
        <div className="border-b border-[#e5e5df] pb-4 mb-6">
          <div className="flex items-center gap-3 mb-1">
            <span className="font-serif text-xl text-[#0f766e] font-semibold">{treatment.number}</span>
            <span className="text-[11px] uppercase tracking-widest text-[#847545] font-semibold">
              {treatment.category}
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0a0f1d]">
            {treatment.title}
          </h2>
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-xs text-[#334155]">
          <div>
            <h4 className="uppercase tracking-wider font-semibold text-[#0a0f1d] mb-2">
              Clinical Overview &amp; Philosophy
            </h4>
            <p className="font-light leading-relaxed text-sm text-[#0a0f1d]">
              {treatment.fullDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#fbfbf9] p-4 border border-[#e5e5df]">
            <div>
              <h4 className="uppercase tracking-wider font-semibold text-[#0a0f1d] mb-2 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#0f766e] text-sm">clinical_notes</span>
                Primary Indications
              </h4>
              <ul className="space-y-1.5 font-light">
                {treatment.indications.map((ind, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#0f766e] font-bold">•</span>
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="uppercase tracking-wider font-semibold text-[#0a0f1d] mb-2 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#0f766e] text-sm">biotechnology</span>
                Key Diagnostic Workup
              </h4>
              <ul className="space-y-1.5 font-light">
                {treatment.keyDiagnostics.map((diag, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#847545] font-bold">•</span>
                    <span>{diag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#faf6ed] border border-[#847545]/20 p-4">
            <h4 className="uppercase tracking-wider font-semibold text-[#847545] mb-1 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">info</span>
              Fasting &amp; Preparation Directive
            </h4>
            <p className="text-xs text-[#0a0f1d] font-normal leading-relaxed">
              {treatment.preparationInstructions}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-[#e5e5df] pt-4 text-xs">
            <div>
              <span className="text-[#334155] block uppercase tracking-wider">Fee Structure</span>
              <span className="font-semibold text-[#0a0f1d] text-sm mt-0.5 block">
                {treatment.consultationFee}
              </span>
            </div>
            <div>
              <span className="text-[#334155] block uppercase tracking-wider">Consultation Window</span>
              <span className="font-semibold text-[#0a0f1d] text-sm mt-0.5 block">
                {treatment.typicalDuration}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8 pt-6 border-t border-[#e5e5df]">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#334155] border border-[#e5e5df] hover:border-[#0a0f1d]"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onBook(treatment.id);
            }}
            className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold bg-[#0a0f1d] text-white hover:bg-[#334155] flex items-center justify-center gap-2"
          >
            <span>Book Appointment for {treatment.title}</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
