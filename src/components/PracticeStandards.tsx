import React from 'react';

export const PracticeStandards: React.FC = () => {
  const standards = [
    {
      num: '01 / Rigorous Time',
      title: 'Unhurried 20-Min Consultations',
      desc: 'Thorough clinical evaluation, detailed lifestyle inquiry, and adequate discussion time without the rushed pace of tertiary chain hospitals.'
    },
    {
      num: '02 / Clinical Precision',
      title: 'In-House Modern Diagnostic Lab',
      desc: 'NABL accredited quick tests, phlebotomy, and standard reports synchronized seamlessly into your encrypted electronic health record.'
    },
    {
      num: '03 / Continuity',
      title: 'Direct Post-Consult Support',
      desc: 'Verified clinical coordinator WhatsApp desk for immediate prescription queries, dosage clarifications, and report reviews.'
    },
    {
      num: '04 / Clarity',
      title: 'Transparent & Ethical Billing',
      desc: 'Fixed published fees, zero unindicated investigation quotas, and clear itemized billing suitable for quick insurance reimbursement.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#fbfbf9] border-b border-[#e5e5df]" id="standards">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <span className="text-[#0f766e] text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
            Practice Standards
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0a0f1d] tracking-tight">
            How Our Outpatient Care Differs
          </h2>
          <p className="text-[#334155] text-sm mt-3 font-light leading-relaxed">
            Engineered to eradicate the anxiety, long queues, and institutional friction typical of large commercial hospital chains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {standards.map((std, idx) => (
            <div key={idx} className="border-t border-[#0a0f1d] pt-6">
              <span className="text-xs uppercase tracking-widest text-[#847545] font-semibold block mb-2">
                {std.num}
              </span>
              <h3 className="font-serif text-2xl font-medium text-[#0a0f1d] mb-3">
                {std.title}
              </h3>
              <p className="text-sm text-[#334155] font-light leading-relaxed">
                {std.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
