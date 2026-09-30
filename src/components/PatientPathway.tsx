import React from 'react';

export const PatientPathway: React.FC = () => {
  const steps = [
    {
      num: '01',
      stage: 'Booking',
      title: 'Instant Slot Selection',
      desc: 'Pick your preferred morning or evening OPD slot through our digital widget or directly via WhatsApp assistant in under 60 seconds.',
      badgeStyle: 'bg-[#0a0f1d] text-white'
    },
    {
      num: '02',
      stage: 'Workup',
      title: 'Detailed Clinical Evaluation',
      desc: 'Comprehensive physical examination, biometric vitals profiling, and attentive history evaluation in a calm clinical environment.',
      badgeStyle: 'border border-[#0a0f1d] text-[#0a0f1d]'
    },
    {
      num: '03',
      stage: 'Therapy',
      title: 'Tailored Care Protocol',
      desc: 'Clear prescription, structured diet & exercise guidelines, and precise diagnostic requests explained in detail before you depart.',
      badgeStyle: 'border border-[#0a0f1d] text-[#0a0f1d]'
    },
    {
      num: '04',
      stage: 'Review',
      title: 'Monitored Recovery',
      desc: 'Complimentary 7-day review consultation for treatment response assessment and lab report analysis either in-clinic or on WhatsApp.',
      badgeStyle: 'bg-[#0f766e] text-white'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#e5e5df]" id="pathway">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#e5e5df] gap-4">
          <div>
            <span className="text-[#0f766e] text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
              Linear Patient Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0a0f1d] tracking-tight">
              Consultation Pathway in 4 Disciplined Steps
            </h2>
          </div>
          <span className="text-xs uppercase tracking-wider text-[#334155] font-medium">
            Average Visit Duration: 35 Minutes
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col">
              <div className="flex items-center gap-3 pb-4 border-b border-[#e5e5df]">
                <span className={`w-7 h-7 text-xs font-semibold flex items-center justify-center ${step.badgeStyle}`}>
                  {step.num}
                </span>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#0a0f1d]">
                  {step.stage}
                </span>
              </div>
              <h3 className="font-serif text-xl font-medium text-[#0a0f1d] mt-4 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#334155] font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
