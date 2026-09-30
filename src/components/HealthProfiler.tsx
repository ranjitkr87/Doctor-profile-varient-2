import React, { useState } from 'react';

interface HealthProfilerProps {
  onBookWithTriage: (serviceId: string, notes: string) => void;
}

export const HealthProfiler: React.FC<HealthProfilerProps> = ({ onBookWithTriage }) => {
  const [concern, setConcern] = useState('diabetes');
  const [duration, setDuration] = useState('months');
  const [fastingReady, setFastingReady] = useState(false);
  const [familyHistory, setFamilyHistory] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const toggleHistory = (item: string) => {
    setFamilyHistory(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const getRecommendation = () => {
    switch (concern) {
      case 'diabetes':
        return {
          serviceId: 'diabetes-metabolic',
          serviceName: 'Diabetes & Metabolic Health',
          guidance: 'Fasting and 2-hr post-prandial blood glucose profile + HbA1c is strongly advised.',
          prep: '10-hour overnight water-only fast. Bring existing glucometer data if you monitor at home.',
          urgency: 'Routine OPD consultation within 24-48 hours.'
        };
      case 'bp':
        return {
          serviceId: 'cardiology-hypertension',
          serviceName: 'Cardiology & Hypertension Titration',
          guidance: 'Calibrated blood pressure mapping + 12-lead resting ECG + electrolyte panel.',
          prep: 'Avoid morning caffeine, energy drinks, and tobacco. Bring your home BP logs if available.',
          urgency: 'If home BP > 160/100 mmHg with headache, seek priority evaluation today.'
        };
      case 'checkup':
        return {
          serviceId: 'preventive-care',
          serviceName: 'Preventive Health Checkup',
          guidance: 'Comprehensive metabolic screen, lipid subfractions, liver & renal functions.',
          prep: '10-12 hours overnight fast. Diagnostic phlebotomy desk opens at 07:30 AM.',
          urgency: 'Schedule during morning hours for same-day lab workup.'
        };
      case 'respiratory':
        return {
          serviceId: 'respiratory-allergy',
          serviceName: 'Respiratory & Allergy Care',
          guidance: 'Chest auscultation, peak flow measurement, and allergic sensitization screen.',
          prep: 'Carry current inhalers and nebulization solutions to the clinic.',
          urgency: 'Same-day consultation recommended if wheezing is interfering with sleep.'
        };
      case 'geriatric':
        return {
          serviceId: 'geriatric-chronic',
          serviceName: 'Geriatric & Chronic Illness Management',
          guidance: 'Comprehensive medication reconciliation (Beers criteria audit) & vitals check.',
          prep: 'Bring all active prescriptions, drops, and supplements in original boxes.',
          urgency: 'Senior-friendly ground elevator and ramp access provided.'
        };
      default:
        return {
          serviceId: 'preventive-care',
          serviceName: 'General Internal Medicine Consultation',
          guidance: 'Comprehensive physical examination & clinical dialogue with Dr. Arvind Sharma.',
          prep: 'Bring any medical records or blood reports from the past 12 months.',
          urgency: 'Routine appointment recommended.'
        };
    }
  };

  const rec = getRecommendation();

  const handleApplyToBooking = () => {
    const notesSummary = `Pre-consult Triage: Focus=${concern}, Duration=${duration}, FastingReady=${fastingReady ? 'Yes' : 'No'}, FamilyHistory=${familyHistory.join(', ') || 'None reported'}`;
    onBookWithTriage(rec.serviceId, notesSummary);
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#e5e5df]" id="triage">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-12 text-center md:text-left">
          <span className="text-[#0f766e] text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
            Clinical Self-Assessment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0a0f1d] tracking-tight">
            Pre-Consultation Metabolic &amp; Symptom Profiler
          </h2>
          <p className="text-[#334155] text-sm mt-2 font-light max-w-2xl leading-relaxed">
            Answer three quick clinical prompts to receive immediate preparation directives and identify the ideal consultation specialty before your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-[#fbfbf9] border border-[#e5e5df] p-6 lg:p-8 space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a0f1d] mb-2">
                1. Primary Clinical Area of Concern
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: 'diabetes', label: 'Diabetes / Blood Sugar' },
                  { id: 'bp', label: 'Hypertension / Heart / BP' },
                  { id: 'checkup', label: 'Annual Preventive Audit' },
                  { id: 'respiratory', label: 'Cough / Asthma / Allergies' },
                  { id: 'geriatric', label: 'Senior Citizen Care / Polypharmacy' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setConcern(opt.id);
                      setShowResult(true);
                    }}
                    className={`p-3 text-left text-xs border transition-all cursor-pointer ${
                      concern === opt.id
                        ? 'border-[#0f766e] bg-[#f0fdfa] text-[#0f766e] font-semibold'
                        : 'border-[#e5e5df] bg-white text-[#334155] hover:border-[#0a0f1d]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a0f1d] mb-2">
                2. Symptom Duration
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'acute', label: '< 7 Days' },
                  { id: 'weeks', label: '1 - 4 Weeks' },
                  { id: 'months', label: 'Chronic (>1 Month)' }
                ].map(dur => (
                  <button
                    key={dur.id}
                    type="button"
                    onClick={() => {
                      setDuration(dur.id);
                      setShowResult(true);
                    }}
                    className={`py-2 text-center text-xs border transition-all cursor-pointer ${
                      duration === dur.id
                        ? 'border-[#0a0f1d] bg-[#0a0f1d] text-white font-semibold'
                        : 'border-[#e5e5df] bg-white text-[#334155] hover:border-[#0a0f1d]'
                    }`}
                  >
                    {dur.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a0f1d] mb-2">
                3. Relevant Family History (Select all that apply)
              </label>
              <div className="flex flex-wrap gap-2">
                {['Type 2 Diabetes', 'Early Heart Disease', 'Hypertension', 'Thyroid Disorder'].map(item => {
                  const active = familyHistory.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleHistory(item)}
                      className={`px-3 py-1.5 text-xs border transition-colors cursor-pointer ${
                        active
                          ? 'border-[#847545] bg-[#faf6ed] text-[#847545] font-semibold'
                          : 'border-[#e5e5df] bg-white text-[#334155]'
                      }`}
                    >
                      {active ? '✓ ' : '+ '} {item}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-[#334155]">
                <input
                  type="checkbox"
                  checked={fastingReady}
                  onChange={(e) => setFastingReady(e.target.checked)}
                  className="rounded text-[#0f766e] focus:ring-[#0f766e]"
                />
                <span>I can arrive in a 10-12 hour fasting state for same-day blood investigations</span>
              </label>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 bg-white border border-[#0a0f1d] p-6 lg:p-8 shadow-sm">
            <span className="text-[11px] uppercase tracking-widest text-[#0f766e] font-semibold block mb-1">
              Physician Consultation Guidance
            </span>
            <h3 className="font-serif text-2xl text-[#0a0f1d] font-bold mb-4">
              {rec.serviceName}
            </h3>

            <div className="space-y-4 text-xs text-[#334155] border-t border-b border-[#e5e5df] py-4 my-4">
              <div>
                <strong className="text-[#0a0f1d] block mb-0.5">Clinical Protocol Recommendation:</strong>
                <p className="font-light">{rec.guidance}</p>
              </div>

              <div>
                <strong className="text-[#0a0f1d] block mb-0.5">Test &amp; Visit Preparation:</strong>
                <p className="font-light">{rec.prep}</p>
              </div>

              <div>
                <strong className="text-[#0a0f1d] block mb-0.5">Consultation Timing:</strong>
                <p className="font-light">{rec.urgency}</p>
              </div>
            </div>

            <button
              onClick={handleApplyToBooking}
              className="w-full bg-[#0a0f1d] text-white py-3 px-4 text-xs uppercase tracking-wider font-semibold hover:bg-[#334155] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Appointment for this Protocol</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
