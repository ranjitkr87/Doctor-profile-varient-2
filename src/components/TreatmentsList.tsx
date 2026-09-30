import React, { useState } from 'react';
import { TREATMENTS } from '../data/clinicData';
import { TreatmentItem } from '../types/clinic';

interface TreatmentsListProps {
  onSelectTreatment: (treatment: TreatmentItem) => void;
  onBookTreatment: (treatmentId: string) => void;
}

export const TreatmentsList: React.FC<TreatmentsListProps> = ({
  onSelectTreatment,
  onBookTreatment
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'metabolic', label: 'Diabetes & Metabolism' },
    { id: 'cardio', label: 'Cardiology & BP' },
    { id: 'preventive', label: 'Preventive & Longevity' },
    { id: 'lab', label: 'Diagnostics & Blood Lab' }
  ];

  const filteredTreatments = TREATMENTS.filter(t => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'metabolic') return t.id === 'diabetes-metabolic';
    if (selectedFilter === 'cardio') return t.id === 'cardiology-hypertension';
    if (selectedFilter === 'preventive') return t.id === 'preventive-care' || t.id === 'geriatric-chronic';
    if (selectedFilter === 'lab') return t.id === 'digital-diagnostics';
    return true;
  });

  return (
    <section className="py-20 lg:py-28 bg-[#fbfbf9] border-b border-[#e5e5df]" id="treatments">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-[#e5e5df] gap-6">
          <div>
            <span className="text-[#0f766e] text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
              Clinical Specializations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0a0f1d] tracking-tight">
              Consultation &amp; Diagnostic Portfolio
            </h2>
          </div>
          <p className="text-[#334155] text-sm max-w-md font-light leading-relaxed">
            Disciplined diagnosis, non-invasive cardiac profiling, and targeted metabolic reversal protocols without redundant corporate quotas.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap items-center gap-2 mb-8" role="tablist" aria-label="Filter clinical specialties">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold transition-all border ${
                selectedFilter === cat.id
                  ? 'bg-[#0a0f1d] text-white border-[#0a0f1d]'
                  : 'bg-white text-[#334155] border-[#e5e5df] hover:border-[#0a0f1d]'
              }`}
            >
              {cat.label}
            </button>
          ))}
          {selectedFilter !== 'all' && (
            <button
              onClick={() => setSelectedFilter('all')}
              className="text-xs text-[#0f766e] underline ml-2 hover:text-[#0a0f1d]"
            >
              Reset
            </button>
          )}
        </div>

        {/* Sophisticated Interactive List (Variant 02 Requirement: NOT standard grid cards) */}
        <div className="divide-y divide-[#e5e5df] border-t border-[#e5e5df]">
          {filteredTreatments.map((treatment) => (
            <article
              key={treatment.id}
              className="py-8 group hover:bg-white/60 transition-colors px-4 -mx-4"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
                <div className="lg:col-span-1">
                  <span className="font-serif text-2xl lg:text-3xl text-[#334155]/50 group-hover:text-[#0f766e] transition-colors font-light">
                    {treatment.number}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <span className="text-[11px] uppercase tracking-widest text-[#847545] font-semibold block mb-1">
                    {treatment.category}
                  </span>
                  <h3
                    onClick={() => onSelectTreatment(treatment)}
                    className="font-serif text-2xl lg:text-3xl text-[#0a0f1d] group-hover:text-[#0f766e] transition-colors font-medium cursor-pointer"
                  >
                    {treatment.title}
                  </h3>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-sm text-[#334155] font-light leading-relaxed">
                    {treatment.shortDescription}
                  </p>
                </div>
                <div className="lg:col-span-3 flex items-center lg:justify-end gap-3 pt-2 lg:pt-0">
                  <button
                    onClick={() => onSelectTreatment(treatment)}
                    className="text-xs text-[#334155] hover:text-[#0a0f1d] underline font-medium"
                    aria-label={`View protocol details for ${treatment.title}`}
                  >
                    Details &amp; Prep
                  </button>
                  <button
                    onClick={() => onBookTreatment(treatment.id)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#0a0f1d] group-hover:text-[#0f766e] transition-colors px-3 py-1.5 border border-[#e5e5df] group-hover:border-[#0f766e] bg-white cursor-pointer"
                  >
                    <span>Book Slot</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
