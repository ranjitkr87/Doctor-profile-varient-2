import React, { useState } from "react";
import { CLINIC_INFO } from "../data/clinicData";

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Treatments", href: "#treatments" },
    // { name: "Senior Physician", href: "#physician" },
    // { name: "Practice Standards", href: "#standards" },
    // { name: "Patient Pathway", href: "#pathway" },
    // { name: "Health Triage", href: "#triage" },
    { name: "Testimonials", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Visit Clinic", href: "#location" },
  ];

  return (
    <>
      {/* VARIANT DEMARCATION BANNER */}

      {/* TOP RECEPTION & APPOINTMENT TICKER */}
      <div className="bg-white border-b border-[#e5e5df] py-2.5 px-4 lg:px-12 text-xs text-[#334155]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-start">
            <div className="flex items-center gap-2">
              <span className="text-[#0f766e] font-medium">OPD Reception:</span>
              <a
                className="font-semibold text-[#0a0f1d] hover:text-[#0f766e] tracking-wide transition-colors"
                href={`tel:${CLINIC_INFO.phoneOpd.replace(/\s+/g, "")}`}
              >
                {CLINIC_INFO.phoneOpd}
              </a>
            </div>
            <span className="text-[#e5e5df] hidden md:inline">|</span>
            <div className="hidden md:flex items-center gap-2">
              <span className="text-[#334155]">Consultation Hours:</span>
              <span className="text-[#0a0f1d] font-medium">
                09:00 – 13:30 &amp; 17:00 – 20:30 IST
              </span>
            </div>
            <span className="text-[#e5e5df] hidden lg:inline">|</span>
            <span className="hidden lg:inline text-[#334155]">
              100 Feet Road, HAL 2nd Stage, Indiranagar
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium tracking-wider uppercase">
            <span className="text-[#847545] bg-[#faf6ed] px-2 py-0.5 border border-[#847545]/20 font-serif">
              {CLINIC_INFO.kmcLicense}
            </span>
            <a
              className="hover:text-[#0f766e] transition-colors flex items-center gap-1"
              href="#location"
            >
              <span className="material-symbols-outlined text-[13px]">
                location_on
              </span>{" "}
              View Direction
            </a>
          </div>
        </div>
      </div>

      {/* ARCHITECTURAL MAIN NAVIGATION */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b border-[#e5e5df] transition-all">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 h-20 flex items-center justify-between">
          {/* Brand Mark */}
          <a className="flex items-center gap-3.5 group" href="#">
            <div className="w-10 h-10 border border-[#0a0f1d] flex items-center justify-center font-serif text-xl font-bold tracking-tight text-[#0a0f1d] group-hover:bg-[#0a0f1d] group-hover:text-white transition-all">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#0a0f1d] leading-none">
                Aarogya
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#334155] mt-1 font-semibold">
                Clinic &amp; Diagnostics
              </span>
            </div>
          </a>

          {/* Editorial Links */}
          <nav className="hidden xl:flex items-center space-x-7 text-[12px] tracking-[0.06em] uppercase font-medium text-[#334155]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                className="hover:text-[#0a0f1d] transition-colors"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Nav Actions */}
          <div className="flex items-center gap-3">
            <a
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 border border-[#e5e5df] text-xs uppercase tracking-wider font-semibold text-[#0a0f1d] hover:border-[#0a0f1d] transition-colors"
              href={CLINIC_INFO.whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-sm text-[#0f766e]">
                chat
              </span>
              WhatsApp Desk
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 bg-[#0a0f1d] text-white px-5 py-2.5 text-xs uppercase tracking-wider font-semibold hover:bg-[#334155] transition-all shadow-sm cursor-pointer"
            >
              <span>Book Consultation</span>
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#0a0f1d] hover:bg-[#f4f4ef] border border-[#e5e5df]"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-[#e5e5df] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3 text-sm font-medium text-[#0a0f1d]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 border-b border-[#f4f4ef] hover:text-[#0f766e] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="material-symbols-outlined text-xs text-[#334155]">
                    chevron_right
                  </span>
                </a>
              ))}
            </nav>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 border border-[#e5e5df] text-xs uppercase tracking-wider font-semibold text-[#0a0f1d] flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm text-[#0f766e]">
                  chat
                </span>
                Chat on WhatsApp
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full text-center py-2.5 bg-[#0a0f1d] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#334155]"
              >
                Book Clinic Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
