import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

export const LocationHub: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#fbfbf9] border-b border-[#e5e5df]" id="location">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <span className="text-[#0f766e] text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
            Practice Address &amp; Schedule
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0a0f1d] tracking-tight">
            Visit Our Indiranagar Clinic
          </h2>
          <p className="text-[#334155] text-sm mt-2 font-light">
            Centrally situated on 100 Feet Road with direct metro connectivity and senior-friendly accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Timetable and Reception Details */}
          <div className="lg:col-span-6 bg-white border border-[#e5e5df] p-8 flex flex-col justify-between">
            <div>
              <div className="pb-6 border-b border-[#e5e5df] mb-6">
                <span className="text-xs uppercase tracking-widest text-[#847545] font-semibold block mb-1">
                  Facility Address
                </span>
                <address className="not-italic text-sm text-[#0a0f1d] leading-relaxed font-normal">
                  No. 412, 100 Feet Road, HAL 2nd Stage,<br />
                  Indiranagar, Bengaluru, Karnataka 560038<br />
                  <span className="text-xs text-[#0f766e] font-medium mt-1 inline-block">
                    {CLINIC_INFO.landmark}
                  </span>
                </address>
              </div>

              {/* Split OPD Schedule */}
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-[#334155] font-semibold block mb-4">
                  OPD Hours &amp; Consultations
                </span>
                <div className="border-t border-[#e5e5df] divide-y divide-[#e5e5df] text-xs">
                  <div className="py-3 flex justify-between items-center">
                    <div>
                      <span className="font-medium text-[#0a0f1d] block">
                        Morning Session (General &amp; Fasting Lab)
                      </span>
                      <span className="text-[#334155]">Monday through Saturday</span>
                    </div>
                    <span className="font-serif text-sm font-semibold text-[#0a0f1d]">
                      09:00 – 13:30
                    </span>
                  </div>

                  <div className="py-3 flex justify-between items-center">
                    <div>
                      <span className="font-medium text-[#0a0f1d] block">
                        Evening Session (Specialist OPD)
                      </span>
                      <span className="text-[#334155]">Monday through Saturday</span>
                    </div>
                    <span className="font-serif text-sm font-semibold text-[#0a0f1d]">
                      17:00 – 20:30
                    </span>
                  </div>

                  <div className="py-3 flex justify-between items-center">
                    <div>
                      <span className="font-medium text-[#0a0f1d] block">
                        Sunday Diagnostics &amp; Senior Review
                      </span>
                      <span className="text-[#334155]">By Prior Confirmation Only</span>
                    </div>
                    <span className="font-serif text-sm font-semibold text-[#0a0f1d]">
                      10:00 – 13:00
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Contact Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#e5e5df] text-xs">
                <div>
                  <span className="text-[#334155] uppercase tracking-wider block">OPD Telephone</span>
                  <a
                    className="font-medium text-[#0a0f1d] hover:text-[#0f766e] mt-0.5 block"
                    href={`tel:${CLINIC_INFO.phoneDesk.replace(/\s+/g, '')}`}
                  >
                    {CLINIC_INFO.phoneDesk}
                  </a>
                </div>
                <div>
                  <span className="text-[#334155] uppercase tracking-wider block">Direct Concierge</span>
                  <a
                    className="font-medium text-[#0f766e] mt-0.5 block"
                    href={`tel:${CLINIC_INFO.phoneOpd.replace(/\s+/g, '')}`}
                  >
                    {CLINIC_INFO.phoneOpd}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#e5e5df] mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 bg-[#0a0f1d] text-white px-5 py-3 text-xs uppercase tracking-wider font-semibold hover:bg-[#334155] transition-colors"
                href={CLINIC_INFO.whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                WhatsApp OPD Desk
              </a>
              <a
                className="inline-flex items-center gap-2 bg-[#fbfbf9] border border-[#e5e5df] text-[#0a0f1d] px-5 py-3 text-xs uppercase tracking-wider font-semibold hover:border-[#0a0f1d] transition-colors"
                href={`mailto:${CLINIC_INFO.email}`}
              >
                <span className="material-symbols-outlined text-sm">mail</span>
                {CLINIC_INFO.email}
              </a>
            </div>
          </div>

          {/* Right: Architectural Map Frame & Valet Note */}
          <div className="lg:col-span-6 bg-white border border-[#e5e5df] p-3 flex flex-col justify-between">
            <div className="relative w-full h-[380px] lg:h-full min-h-[340px] overflow-hidden bg-[#0a0f1d]">
              <img
                className="w-full h-full object-cover filter contrast-[1.05]"
                alt="Location map of Aarogya Clinic Indiranagar Bangalore"
                src={CLINIC_INFO.images.map}
                loading="lazy"
                width="600"
                height="450"
              />
              {/* Map Overlay Plaque */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs border border-[#e5e5df] p-4 flex items-center justify-between flex-wrap gap-3">
                <div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#0a0f1d] block">
                    Complimentary Valet &amp; Ramp Access
                  </span>
                  <span className="text-[11px] text-[#334155]">
                    Direct elevator to Clinic Floor 2 • Wheelchair ready
                  </span>
                </div>
                <a
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0a0f1d] text-white text-[11px] uppercase tracking-wider font-semibold hover:bg-[#334155] transition-colors"
                  href="https://maps.google.com/?q=Indiranagar+100+Feet+Road+Bengaluru"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Navigate</span>
                  <span className="material-symbols-outlined text-xs">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
