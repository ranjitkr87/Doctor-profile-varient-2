import React, { useState } from 'react';
import { FAQS } from '../data/clinicData';

export const FAQSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: 'all', label: 'All Inquiries' },
    { id: 'appointments', label: 'Appointments' },
    { id: 'diagnostics', label: 'Lab & Diagnostics' },
    { id: 'insurance', label: 'Insurance & Billing' },
    { id: 'clinic', label: 'Clinic Facility' }
  ];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCat = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#e5e5df]" id="faq">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-[#0f766e] text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
            Patient Guidance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0a0f1d] tracking-tight">
            Frequently Answered Inquiries
          </h2>
          <p className="text-[#334155] text-sm mt-2 font-light">
            Essential guidelines regarding consultation appointments, laboratory timing, and insurance documentation.
          </p>
        </div>

        {/* Quick Search & Category Bar */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-3 text-[#334155] text-lg">search</span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by keyword (e.g. fee, blood test, insurance, parking)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs border border-[#e5e5df] focus:border-[#0a0f1d] outline-none bg-[#fbfbf9]"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-2.5 text-xs text-[#334155] hover:text-[#0a0f1d]"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 text-xs uppercase tracking-wider transition-all border ${
                  selectedCategory === cat.id
                    ? 'border-[#0a0f1d] bg-[#0a0f1d] text-white font-semibold'
                    : 'border-[#e5e5df] bg-white text-[#334155] hover:border-[#0a0f1d]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#e5e5df] border-t border-b border-[#e5e5df]">
          {filteredFaqs.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#334155]">
              No questions found matching your search. Please contact our reception desk at +91 98765 43210.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={faq.id} className="py-6">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left cursor-pointer focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-serif text-xl sm:text-2xl text-[#0a0f1d] group-hover:text-[#0f766e] transition-colors pr-4">
                      {faq.question}
                    </h3>
                    <span
                      className={`material-symbols-outlined text-[#334155] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#0f766e]' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pt-4 text-sm text-[#334155] font-light leading-relaxed animate-in fade-in-50 duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
