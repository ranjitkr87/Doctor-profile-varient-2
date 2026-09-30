import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onSelectTreatmentById: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTreatmentById }) => {
  return (
    <footer className="bg-white border-t border-[#e5e5df] text-[#334155] text-xs">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#e5e5df]">
          {/* Brand & Accreditation */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#0a0f1d] flex items-center justify-center font-serif text-lg font-bold text-[#0a0f1d]">
                A
              </div>
              <span className="font-serif text-xl font-bold text-[#0a0f1d]">
                {CLINIC_INFO.name}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#334155] max-w-sm">
              Centre for Advanced Internal Medicine, Diabetes Management, and Preventive Family Health. Providing calm, evidence-based care in East Bengaluru.
            </p>
            <div className="text-[11px] space-y-1 text-[#0a0f1d] pt-1">
              <p><span className="font-semibold text-[#334155]">KPME License:</span> {CLINIC_INFO.kpmeLicense}</p>
              <p><span className="font-semibold text-[#334155]">NABH Quality Ref:</span> {CLINIC_INFO.nabhRef}</p>
              <p><span className="font-semibold text-[#334155]">Councils:</span> Delhi &amp; Karnataka Medical Council Accredited</p>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#0a0f1d] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a className="hover:text-[#0a0f1d] transition-colors" href="#physician">Physician Qualifications</a></li>
              <li><a className="hover:text-[#0a0f1d] transition-colors" href="#treatments">Treatments &amp; Diagnostics</a></li>
              <li><a className="hover:text-[#0a0f1d] transition-colors" href="#standards">Practice Standards</a></li>
              <li><a className="hover:text-[#0a0f1d] transition-colors" href="#pathway">Consultation Pathway</a></li>
              <li><a className="hover:text-[#0a0f1d] transition-colors" href="#triage">Metabolic Health Triage</a></li>
              <li><a className="hover:text-[#0a0f1d] transition-colors" href="#reviews">Patient Stories</a></li>
              <li><a className="hover:text-[#0a0f1d] transition-colors" href="#faq">Inquiries &amp; Insurance</a></li>
            </ul>
          </div>

          {/* Specialties */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#0a0f1d] font-bold">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectTreatmentById('preventive-care')}
                  className="hover:text-[#0a0f1d] transition-colors text-left"
                >
                  Preventive Health Checkups
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTreatmentById('diabetes-metabolic')}
                  className="hover:text-[#0a0f1d] transition-colors text-left"
                >
                  Diabetes &amp; Metabolic Health
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTreatmentById('cardiology-hypertension')}
                  className="hover:text-[#0a0f1d] transition-colors text-left"
                >
                  Cardiology &amp; Hypertension
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTreatmentById('respiratory-allergy')}
                  className="hover:text-[#0a0f1d] transition-colors text-left"
                >
                  Respiratory &amp; Allergy Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTreatmentById('geriatric-chronic')}
                  className="hover:text-[#0a0f1d] transition-colors text-left"
                >
                  Geriatric &amp; Chronic Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTreatmentById('digital-diagnostics')}
                  className="hover:text-[#0a0f1d] transition-colors text-left"
                >
                  Digital Laboratory Workup
                </button>
              </li>
            </ul>
          </div>

          {/* Address & OPD */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#0a0f1d] font-bold">
              Clinic Hub
            </h4>
            <p className="text-xs text-[#334155] leading-relaxed">
              {CLINIC_INFO.address}
            </p>
            <div className="pt-2 text-xs space-y-1">
              <p><strong className="text-[#0a0f1d]">OPD Mobile:</strong> {CLINIC_INFO.phoneOpd}</p>
              <p><strong className="text-[#0a0f1d]">Desk Phone:</strong> {CLINIC_INFO.phoneDesk}</p>
              <p><strong className="text-[#0a0f1d]">WhatsApp Desk:</strong> Active 08:00 – 21:00</p>
            </div>
          </div>
        </div>

        {/* Statutory Notice & Copyright */}
        <div className="pt-8 space-y-4">
          <p className="text-[11px] leading-relaxed text-[#334155]/80">
            <strong className="text-[#0a0f1d] font-medium">Medical Notice:</strong> Information on this website is intended for educational purposes and patient scheduling only. It does not replace direct clinical consultation with a qualified medical practitioner. If you are experiencing acute chest pain, severe dyspnea, or traumatic physical injury, please immediately proceed to the nearest emergency room or dial 112 / 108.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#334155] pt-2 gap-2">
            <span>© 2024 Aarogya Healthcare Practice Ltd. Clinical Registrations under Delhi Medical Council &amp; NABH Standards. All rights reserved.</span>
            <div className="flex items-center space-x-4">
              <a className="hover:text-[#0a0f1d] transition-colors" href="#faq">Patient Privacy Policy</a>
              <span>•</span>
              <a className="hover:text-[#0a0f1d] transition-colors" href="#faq">Terms of Consultation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
