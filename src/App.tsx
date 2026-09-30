import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { TreatmentsList } from './components/TreatmentsList';
import { PhysicianSection } from './components/PhysicianSection';
import { PracticeStandards } from './components/PracticeStandards';
import { PatientPathway } from './components/PatientPathway';
import { HealthProfiler } from './components/HealthProfiler';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { LocationHub } from './components/LocationHub';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { TREATMENTS, CLINIC_INFO } from './data/clinicData';
import { TreatmentItem } from './types/clinic';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [triageNotes, setTriageNotes] = useState<string>('');
  const [activeTreatmentDetail, setActiveTreatmentDetail] = useState<TreatmentItem | null>(null);

  // SEO Client-Side Crawlability & Canonical Hash Synchronization
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#treatments') {
        document.title = "Consultation & Diagnostics Portfolio | Aarogya Clinic Indiranagar";
      } else if (hash === '#physician') {
        document.title = "Dr. Arvind Sharma (MD) Senior Physician | Aarogya Clinic Bengaluru";
      } else if (hash === '#location') {
        document.title = "Location & OPD Schedule | Aarogya Clinic 100 Feet Road Indiranagar";
      } else if (hash === '#faq') {
        document.title = "Patient Guidance & Inquiries | Aarogya Clinic Indiranagar";
      } else {
        document.title = "Aarogya Clinic & Diagnostics | Centre for Advanced Internal Medicine & Family Health";
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setTriageNotes('');
    setBookingOpen(true);
  };

  const handleBookWithTriage = (serviceId: string, notes: string) => {
    setSelectedServiceId(serviceId);
    setTriageNotes(notes);
    setBookingOpen(true);
  };

  const handleSelectTreatmentDetail = (treatment: TreatmentItem) => {
    setActiveTreatmentDetail(treatment);
  };

  const handleSelectTreatmentById = (id: string) => {
    const item = TREATMENTS.find(t => t.id === id);
    if (item) {
      setActiveTreatmentDetail(item);
    }
  };

  return (
    <div className="bg-[#fbfbf9] text-[#0a0f1d] font-sans antialiased min-h-screen flex flex-col selection:bg-[#0f766e] selection:text-white">
      {/* 1. Header with Ticker & Navigation */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Metrics Strip */}
        <Metrics />

        {/* 4. Consultation & Diagnostic Portfolio */}
        <TreatmentsList
          onSelectTreatment={handleSelectTreatmentDetail}
          onBookTreatment={(id) => handleOpenBooking(id)}
        />

        {/* 5. Senior Physician Profile */}
        <PhysicianSection onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Practice Standards */}
        <PracticeStandards />

        {/* 7. Clinical Pathway (4 Steps) */}
        <PatientPathway />

        {/* 8. Interactive Metabolic & Symptom Triage */}
        <HealthProfiler onBookWithTriage={handleBookWithTriage} />

        {/* 9. Verified Patient Testimonials */}
        <Testimonials />

        {/* 10. Frequently Answered Inquiries */}
        <FAQSection />

        {/* 11. Location Hub & OPD Schedule */}
        <LocationHub />

        {/* 12. Bottom Conversion CTA */}
        <CallToAction onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 13. Institutional Footer */}
      <Footer onSelectTreatmentById={handleSelectTreatmentById} />

      {/* Floating Mobile Booking Trigger for High Conversion */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-30 flex gap-2">
        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-white border border-[#e5e5df] text-[#0a0f1d] py-3 text-xs uppercase tracking-wider font-semibold text-center shadow-lg flex items-center justify-center gap-1.5"
        >
          <span className="material-symbols-outlined text-sm text-[#0f766e]">chat</span>
          <span>WhatsApp</span>
        </a>
        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 bg-[#0a0f1d] text-white py-3 text-xs uppercase tracking-wider font-semibold text-center shadow-lg flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">calendar_month</span>
          <span>Book Visit</span>
        </button>
      </div>

      {/* Appointment Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preSelectedServiceId={selectedServiceId}
        initialNotes={triageNotes}
      />

      {/* Treatment Protocol Detail Modal */}
      <TreatmentDetailModal
        treatment={activeTreatmentDetail}
        onClose={() => setActiveTreatmentDetail(null)}
        onBook={(serviceId) => handleOpenBooking(serviceId)}
      />
    </div>
  );
}
