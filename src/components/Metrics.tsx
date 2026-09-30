import React from 'react';

export const Metrics: React.FC = () => {
  const metrics = [
    {
      value: '18',
      suffix: '+',
      title: 'Years Clinical Mastery',
      description: 'Direct clinical inpatient & OPD experience'
    },
    {
      value: '35k',
      suffix: '+',
      title: 'Patients Evaluated',
      description: 'East Bengaluru & metropolitan consultations'
    },
    {
      value: '98.4',
      suffix: '%',
      title: 'Documented Outcomes',
      description: 'Proven metabolic and cardiovascular stabilization'
    },
    {
      value: '20',
      suffix: 'm',
      title: 'Unhurried Consultations',
      description: 'Zero rushing, comprehensive dialogue'
    }
  ];

  return (
    <section className="bg-white border-b border-[#e5e5df] py-10 lg:py-12" aria-label="Clinical Metrics and Practice Record">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#e5e5df]">
          {metrics.map((m, idx) => (
            <div key={idx} className="lg:px-8 text-left">
              <span className="block font-serif text-4xl lg:text-5xl font-normal text-[#0a0f1d] tracking-tight">
                {m.value}
                <span className="text-[#0f766e] font-light text-3xl lg:text-4xl">{m.suffix}</span>
              </span>
              <span className="block text-xs uppercase tracking-widest text-[#334155] font-semibold mt-2">
                {m.title}
              </span>
              <p className="text-xs text-[#334155] mt-1 font-light">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
