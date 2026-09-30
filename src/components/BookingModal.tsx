import React, { useState, useEffect } from 'react';
import { TREATMENTS, AVAILABLE_SLOTS, CLINIC_INFO } from '../data/clinicData';
import { AppointmentBooking } from '../types/clinic';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string;
  initialNotes?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedServiceId,
  initialNotes = ''
}) => {
  const [step, setStep] = useState<'service' | 'datetime' | 'details' | 'confirmed'>('service');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preSelectedServiceId || 'diabetes-metabolic'
  );
  
  // Date calculation: provide next 7 working days
  const getUpcomingDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const isSunday = d.getDay() === 0;
      dates.push({
        dateStr: d.toISOString().split('T')[0],
        dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
        formatted: d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
        isSunday
      });
    }
    return dates;
  };

  const upcomingDates = getUpcomingDates();
  const [selectedDate, setSelectedDate] = useState<string>(upcomingDates[0].dateStr);
  const [selectedSlot, setSelectedSlot] = useState<string>('09:30 AM');

  // Patient info
  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Female');
  const [clinicalNotes, setClinicalNotes] = useState(initialNotes);
  const [confirmedBooking, setConfirmedBooking] = useState<AppointmentBooking | null>(null);

  useEffect(() => {
    if (preSelectedServiceId) {
      setSelectedServiceId(preSelectedServiceId);
      setStep('datetime');
    }
  }, [preSelectedServiceId]);

  useEffect(() => {
    if (initialNotes) {
      setClinicalNotes(initialNotes);
    }
  }, [initialNotes]);

  if (!isOpen) return null;

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !phoneNumber.trim()) return;

    const chosenService = TREATMENTS.find(t => t.id === selectedServiceId);
    const newBooking: AppointmentBooking = {
      id: `ARG-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      patientName: patientName.trim(),
      phoneNumber: phoneNumber.trim(),
      email: email.trim(),
      age: age.trim() || '35',
      gender,
      serviceId: selectedServiceId,
      serviceName: chosenService ? chosenService.title : 'Internal Medicine Consultation',
      date: selectedDate,
      slot: selectedSlot,
      notes: clinicalNotes,
      createdAt: new Date().toISOString(),
      status: 'Confirmed'
    };

    setConfirmedBooking(newBooking);
    setStep('confirmed');
  };

  const handlePrintSlip = () => {
    window.print();
  };

  const handleWhatsAppShare = () => {
    if (!confirmedBooking) return;
    const msg = `Hello Aarogya Clinic, I have scheduled an OPD consultation.%0A%0A*Booking ID:* ${confirmedBooking.id}%0A*Patient:* ${confirmedBooking.patientName} (${confirmedBooking.age}y, ${confirmedBooking.gender})%0A*Service:* ${confirmedBooking.serviceName}%0A*Date & Slot:* ${confirmedBooking.date} at ${confirmedBooking.slot}%0A*Phone:* ${confirmedBooking.phoneNumber}%0A%0APlease acknowledge my appointment confirmation.`;
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
  };

  const chosenServiceObj = TREATMENTS.find(t => t.id === selectedServiceId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white border border-[#0a0f1d] max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#334155] hover:text-[#0a0f1d] p-1.5"
          aria-label="Close dialog"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {step !== 'confirmed' && (
          <div className="border-b border-[#e5e5df] pb-4 mb-6">
            <span className="text-[#0f766e] text-[10px] uppercase tracking-[0.25em] font-bold block mb-1">
              Outpatient Scheduling Desk
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0a0f1d] font-normal">
              Book Clinic Consultation
            </h2>
            <div className="flex items-center gap-2 mt-3 text-xs text-[#334155]">
              <span className={`px-2 py-0.5 ${step === 'service' ? 'bg-[#0a0f1d] text-white font-semibold' : 'bg-[#f4f4ef]'}`}>
                1. Specialty
              </span>
              <span>→</span>
              <span className={`px-2 py-0.5 ${step === 'datetime' ? 'bg-[#0a0f1d] text-white font-semibold' : 'bg-[#f4f4ef]'}`}>
                2. Slot
              </span>
              <span>→</span>
              <span className={`px-2 py-0.5 ${step === 'details' ? 'bg-[#0a0f1d] text-white font-semibold' : 'bg-[#f4f4ef]'}`}>
                3. Details
              </span>
            </div>
          </div>
        )}

        {/* STEP 1: SELECT SPECIALTY */}
        {step === 'service' && (
          <div className="space-y-4">
            <p className="text-xs text-[#334155]">
              Please choose the primary medical department or investigation you wish to schedule:
            </p>
            <div className="space-y-2">
              {TREATMENTS.map(t => (
                <button
                  key={t.id}
                  onClick={() => setSelectedServiceId(t.id)}
                  className={`w-full p-3 text-left border flex items-center justify-between transition-colors cursor-pointer ${
                    selectedServiceId === t.id
                      ? 'border-[#0f766e] bg-[#f0fdfa]'
                      : 'border-[#e5e5df] hover:border-[#0a0f1d] bg-white'
                  }`}
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#847545] font-semibold block">
                      {t.category}
                    </span>
                    <strong className="text-sm text-[#0a0f1d] font-serif block">
                      {t.title}
                    </strong>
                    <span className="text-[11px] text-[#334155]">{t.typicalDuration}</span>
                  </div>
                  <span className={`material-symbols-outlined text-sm ${selectedServiceId === t.id ? 'text-[#0f766e]' : 'text-transparent'}`}>
                    check_circle
                  </span>
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={() => setStep('datetime')}
                className="px-6 py-2.5 bg-[#0a0f1d] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#334155]"
              >
                Proceed to Select Date &amp; Time
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: SELECT DATE & TIME SLOT */}
        {step === 'datetime' && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a0f1d] mb-2">
                Select Consultation Date
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
                {upcomingDates.map((item) => (
                  <button
                    key={item.dateStr}
                    type="button"
                    onClick={() => setSelectedDate(item.dateStr)}
                    className={`p-2 text-center border transition-all cursor-pointer ${
                      selectedDate === item.dateStr
                        ? 'border-[#0a0f1d] bg-[#0a0f1d] text-white'
                        : 'border-[#e5e5df] bg-white text-[#0a0f1d] hover:border-[#0a0f1d]'
                    }`}
                  >
                    <span className="text-[10px] uppercase block opacity-80">{item.dayName}</span>
                    <strong className="text-xs font-serif block mt-0.5">{item.formatted}</strong>
                  </button>
                ))}
              </div>
            </div>

            {/* Morning Slots */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#0a0f1d]">
                  Morning OPD Session (09:00 – 13:30)
                </span>
                <span className="text-[11px] text-[#0f766e] font-medium">Dr. Arvind Sharma</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {AVAILABLE_SLOTS.filter(s => s.period === 'morning').map(s => (
                  <button
                    key={s.time}
                    type="button"
                    disabled={!s.available}
                    onClick={() => setSelectedSlot(s.time)}
                    className={`py-2 px-1 text-xs text-center border transition-all cursor-pointer ${
                      !s.available
                        ? 'bg-[#f4f4ef] text-[#94a3b8] line-through border-[#e5e5df] cursor-not-allowed'
                        : selectedSlot === s.time
                        ? 'border-[#0f766e] bg-[#f0fdfa] text-[#0f766e] font-bold'
                        : 'border-[#e5e5df] bg-white text-[#0a0f1d] hover:border-[#0a0f1d]'
                    }`}
                  >
                    {s.time}
                  </button>
                ))}
              </div>
            </div>

            {/* Evening Slots */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#0a0f1d]">
                  Evening OPD Session (17:00 – 20:30)
                </span>
                <span className="text-[11px] text-[#0f766e] font-medium">Specialist Clinic</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {AVAILABLE_SLOTS.filter(s => s.period === 'evening').map(s => (
                  <button
                    key={s.time}
                    type="button"
                    disabled={!s.available}
                    onClick={() => setSelectedSlot(s.time)}
                    className={`py-2 px-1 text-xs text-center border transition-all cursor-pointer ${
                      !s.available
                        ? 'bg-[#f4f4ef] text-[#94a3b8] line-through border-[#e5e5df] cursor-not-allowed'
                        : selectedSlot === s.time
                        ? 'border-[#0f766e] bg-[#f0fdfa] text-[#0f766e] font-bold'
                        : 'border-[#e5e5df] bg-white text-[#0a0f1d] hover:border-[#0a0f1d]'
                    }`}
                  >
                    {s.time}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-[#e5e5df]">
              <button
                onClick={() => setStep('service')}
                className="text-xs uppercase tracking-wider text-[#334155] underline hover:text-[#0a0f1d]"
              >
                ← Change Specialty
              </button>
              <button
                onClick={() => setStep('details')}
                className="px-6 py-2.5 bg-[#0a0f1d] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#334155]"
              >
                Enter Patient Info →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: PATIENT INFORMATION */}
        {step === 'details' && (
          <form onSubmit={handleConfirmBooking} className="space-y-4">
            <div className="bg-[#fbfbf9] p-3 border border-[#e5e5df] text-xs flex justify-between items-center">
              <div>
                <span className="text-[#334155]">Selected: </span>
                <strong className="text-[#0a0f1d]">{chosenServiceObj?.title}</strong>
              </div>
              <span className="font-serif font-bold text-[#0f766e]">
                {selectedDate} at {selectedSlot}
              </span>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a0f1d] mb-1">
                Patient Full Name *
              </label>
              <input
                type="text"
                required
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="e.g. Anandita Deshmukh"
                className="w-full text-xs p-2.5 border border-[#e5e5df] focus:border-[#0a0f1d] outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a0f1d] mb-1">
                  Mobile Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full text-xs p-2.5 border border-[#e5e5df] focus:border-[#0a0f1d] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a0f1d] mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="patient@example.com"
                  className="w-full text-xs p-2.5 border border-[#e5e5df] focus:border-[#0a0f1d] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a0f1d] mb-1">
                  Age
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="e.g. 48"
                  className="w-full text-xs p-2.5 border border-[#e5e5df] focus:border-[#0a0f1d] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a0f1d] mb-1">
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full text-xs p-2.5 border border-[#e5e5df] focus:border-[#0a0f1d] outline-none bg-white"
                >
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other / Prefer not to say</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a0f1d] mb-1">
                Symptoms or Notes for Dr. Sharma
              </label>
              <textarea
                rows={3}
                value={clinicalNotes}
                onChange={(e) => setClinicalNotes(e.target.value)}
                placeholder="Mention past medical history, current medicines, or specific queries..."
                className="w-full text-xs p-2.5 border border-[#e5e5df] focus:border-[#0a0f1d] outline-none"
              ></textarea>
            </div>

            <div className="bg-[#faf6ed] p-3 text-[11px] text-[#847545] border border-[#847545]/20">
              ✓ No advance booking payment is required online. Standard consultation fee (₹800) is settled directly at the clinic desk following your clinical consultation.
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-[#e5e5df]">
              <button
                type="button"
                onClick={() => setStep('datetime')}
                className="text-xs uppercase tracking-wider text-[#334155] underline hover:text-[#0a0f1d]"
              >
                ← Back to Slots
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#0a0f1d] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#334155]"
              >
                Confirm Appointment Slot
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: OFFICIAL CONFIRMATION VOUCHER */}
        {step === 'confirmed' && confirmedBooking && (
          <div className="space-y-6 text-xs text-[#0a0f1d]">
            <div className="text-center pb-4 border-b border-[#e5e5df]">
              <div className="w-12 h-12 bg-[#0f766e] text-white mx-auto flex items-center justify-center rounded-full mb-2">
                <span className="material-symbols-outlined text-2xl">check</span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#0f766e] font-bold">
                OPD Appointment Confirmed
              </span>
              <h2 className="font-serif text-3xl font-bold mt-1">
                Consultation Token #{confirmedBooking.id}
              </h2>
              <p className="text-xs text-[#334155] mt-1">
                A calendar hold has been reserved for you at Aarogya Clinic.
              </p>
            </div>

            {/* Official Ledger Slip */}
            <div className="bg-[#fbfbf9] border border-[#e5e5df] p-5 space-y-3 font-mono text-[11px]">
              <div className="flex justify-between border-b border-[#e5e5df] pb-2">
                <span className="text-[#334155]">PATIENT:</span>
                <span className="font-bold text-[#0a0f1d]">{confirmedBooking.patientName} ({confirmedBooking.age}Y, {confirmedBooking.gender})</span>
              </div>
              <div className="flex justify-between border-b border-[#e5e5df] pb-2">
                <span className="text-[#334155]">SPECIALTY:</span>
                <span className="font-bold text-[#0a0f1d]">{confirmedBooking.serviceName}</span>
              </div>
              <div className="flex justify-between border-b border-[#e5e5df] pb-2">
                <span className="text-[#334155]">CONSULTANT:</span>
                <span className="font-bold text-[#0a0f1d]">Dr. Arvind Sharma, MD (KMC 64281)</span>
              </div>
              <div className="flex justify-between border-b border-[#e5e5df] pb-2">
                <span className="text-[#334155]">DATE &amp; TIME:</span>
                <span className="font-bold text-[#0f766e]">{confirmedBooking.date} • {confirmedBooking.slot}</span>
              </div>
              <div className="flex justify-between border-b border-[#e5e5df] pb-2">
                <span className="text-[#334155]">OPD LOCATION:</span>
                <span className="text-right text-[#0a0f1d]">100 Feet Rd, Indiranagar (Opp Metro Pillar 128)</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-[#334155]">CONSULTATION FEE:</span>
                <span className="font-bold text-[#0a0f1d]">₹800 (Due at OPD desk)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppShare}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0f766e] text-white py-3 text-xs uppercase tracking-wider font-semibold hover:bg-[#0f766e]/90 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>Send to WhatsApp</span>
              </button>
              <button
                onClick={handlePrintSlip}
                className="flex-1 inline-flex items-center justify-center gap-2 border border-[#0a0f1d] text-[#0a0f1d] py-3 text-xs uppercase tracking-wider font-semibold hover:bg-[#f4f4ef] cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">print</span>
                <span>Print / Save Slip</span>
              </button>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={onClose}
                className="text-xs uppercase tracking-wider text-[#334155] underline hover:text-[#0a0f1d]"
              >
                Return to Clinic Overview
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
