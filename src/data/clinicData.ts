import { TreatmentItem, FaqItem, ReviewItem } from '../types/clinic';

export const CLINIC_INFO = {
  name: "Aarogya Clinic & Diagnostics",
  tagline: "Centre for Advanced Internal Medicine & Family Health",
  city: "Indiranagar, Bengaluru",
  address: "No. 412, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038",
  landmark: "Direct Landmark: Opposite Metro Pillar 128 (Near CMH Junction)",
  phoneOpd: "+91 98765 43210",
  phoneDesk: "+91 80 4123 9800",
  email: "care@aarogyaclinic.in",
  whatsappUrl: "https://wa.me/919876543210?text=Hello%20Aarogya%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation",
  kmcLicense: "KMC Reg. 64281/2006",
  kpmeLicense: "BLR-EAST/MED/4128/2021",
  nabhRef: "CQ-2023-0841",
  opdHours: {
    morning: "09:00 – 13:30 IST",
    evening: "17:00 – 20:30 IST",
    sunday: "10:00 – 13:00 IST (Diagnostics & Senior Review by prior appointment)",
    labOpens: "07:30 AM Daily (Fasting Blood Draws)"
  },
  consultationFee: "₹800 (Includes detailed 20-min workup + 7-day complimentary review)",
  doctor: {
    name: "Dr. Arvind Sharma",
    title: "Medical Director & Chief Physician",
    degrees: "MBBS, MD (General Medicine) • Fellowship in Clinical Diabetology (Boston / CMC Vellore)",
    experience: "18+ Years Pedigree",
    kmc: "KMC License: 64281/2006",
    quote: "Medical practice is, at its root, an unhurried dialogue. In an era where clinical encounters are truncated into four-minute corporate transactions, our practice prioritizes thorough listening, detailed clinical history, and clinical diagnosis before ordering arbitrary diagnostic batteries.",
    subquote: "Every patient carries a distinct physiological baseline and lifestyle context. Our commitment is to offer evidence-informed care that reduces unnecessary medication and promotes preventive longevity."
  },
  images: {
    heroDoctor: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnCWIpRgW4fmPgtbDX5LVVrD2XtIpFL7cTQsZHqqP09SROmCete0e3njcLSIapmMWGi-vkNOIhlkGWqQ491LQe2NSL72pk1nPE8eAcs3aASUQzJqCLswEj8x_V5ABYWxlBV1eFahyx8YbVWJ7js9HhA5Lw_BOvrkKdjns9NDL82SRwsaH17h-UdSnd786YSP2Hyicdy1Qg9pLat4Ai9mJ5ecxYuoqgNraXgLElxqWlOzgAIMDk9cNY",
    doctorConsulting: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwew8vxDxUcoeBVrd8c9O0fypV56Zrv0_FXXGjYiavjMuocrN4pCqncTkN3fPG0-DJgFNgCwcuuj6J0ork_vTbnx8OwnR5kYX4_Xoy0-Ixjw47ibhkS0HNmj1P8c4PCh7Zb9oboaIluKImNjtVJlqlQYBn04EyO3K2F0wjwVTpZEryyNg3r8C3crUdO3vsFzX-m4wXlfMhSDaNm9weJE0mkf6mIZI8FPloEEeEmmP6VFdByJa9Fmje",
    map: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_XsNXd1dmoqtmwb6yMfM4YZDcKFyjO4bWUGsPsnBvjBNkpLbP3Nj72ZcJgbmJSJYoiEFL5MtqqMY0uHofGJlWgxDSjLU1waoEz2lslofwUTgE6b6NQ3zMTtIxKcddU__RE2eCCpY67sSGF1q-yUpn8uDzESz7QEOfSNRn0TS_qs8jvgGYxA4SdMVuFry1Jo-oLXHc9BhJ9iy_w8BE_I1iEaCKuChGHnZaJYSSwVjDUco12zu6MM-7"
  }
};

export const TREATMENTS: TreatmentItem[] = [
  {
    id: "preventive-care",
    number: "01",
    category: "Primary Care & Longevity",
    title: "Preventive Health Checkups",
    shortDescription: "Comprehensive biochemical blood panels, resting 12-lead ECG, pulmonary risk profiling, and personalised lifestyle cardiovascular evaluations.",
    fullDescription: "A proactive clinical evaluation designed to unearth occult cardiometabolic disease, nutritional deficiencies, and organ stress years before symptoms emerge. Includes comprehensive anthropometry, resting ECG, lipid subfraction analysis, and an unhurried 20-minute discussion of longevity targets.",
    indications: [
      "Annual adult health audit & executive screening",
      "Family history of early coronary artery disease or stroke",
      "Chronic unexplained fatigue, sleep disruption, or brain fog",
      "Pre-operative medical clearance"
    ],
    keyDiagnostics: [
      "Fasting Lipid Profile & High Sensitivity CRP (hs-CRP)",
      "Liver & Kidney Function Panels with eGFR",
      "Resting 12-Lead Electrocardiogram (ECG)",
      "Thyroid Stimulating Hormone (TSH) & Vitamin D3/B12"
    ],
    preparationInstructions: "Requires 10-12 hours of overnight water-only fasting. Morning hypertension medications may be taken with small sips of water.",
    consultationFee: "₹800 (Test packages itemized separately at NABL rates)",
    typicalDuration: "25 - 35 minutes"
  },
  {
    id: "diabetes-metabolic",
    number: "02",
    category: "Endocrinology",
    title: "Diabetes & Metabolic Health",
    shortDescription: "Targeted glycemic management, continuous HbA1c titration, diabetic neuropathy prevention, and evidence-guided carbohydrate optimization.",
    fullDescription: "Personalized Type 2 diabetes management emphasizing root-cause insulin resistance reduction, glycemic variability smoothing, and targeted pharmacotherapy. We focus on medication deprescribing and metabolic remission wherever clinically appropriate.",
    indications: [
      "Newly diagnosed Type 2 diabetes or Impaired Fasting Glucose (Prediabetes)",
      "Suboptimal glycemic control (HbA1c > 7.0%) despite multi-drug therapy",
      "Diabetic complications screening (microalbuminuria, peripheral neuropathy)",
      "Metabolic Syndrome with visceral adiposity and fatty liver (MASLD)"
    ],
    keyDiagnostics: [
      "HbA1c with estimated average glucose (eAG)",
      "Fasting & Post-Prandial Blood Glucose with fasting insulin",
      "Spot Urine Albumin-to-Creatinine Ratio (UACR)",
      "Vibration perception threshold (VPT) neuropathy screening"
    ],
    preparationInstructions: "Fast for 10 hours for fasting blood draw. Bring your current glucometer and a 3-day log of blood sugar readings if available.",
    consultationFee: "₹800 (Complimentary 7-day review)",
    typicalDuration: "25 minutes"
  },
  {
    id: "cardiology-hypertension",
    number: "03",
    category: "Cardiovascular Medicine",
    title: "Cardiology & Hypertension",
    shortDescription: "Preventive cardiac screenings, ambulatory blood pressure monitoring, 2D echo referrals, and dyslipidemia risk prevention.",
    fullDescription: "Comprehensive diagnostic assessment and titration for essential and secondary hypertension, atherosclerotic cardiovascular disease risk estimation, and arrhythmia triage. We prioritize vascular protection, renal preservation, and lifestyle normalization.",
    indications: [
      "Refractory or fluctuating blood pressure readings (>135/85 mmHg at home)",
      "Palpitations, mild exertional breathlessness, or atypical chest tightness",
      "Elevated ApoB, LDL-C, or Lipoprotein(a) with strong family history",
      "White-coat hypertension vs. true sustained hypertension evaluation"
    ],
    keyDiagnostics: [
      "Automated calibrated triple-measurement blood pressure profiling",
      "High-resolution 12-lead ECG analysis",
      "Electrolyte panel (Sodium, Potassium, Serum Creatinine)",
      "Referral alignment for Ambulatory 24-hr BP & Stress Echo"
    ],
    preparationInstructions: "Avoid caffeine, nicotine, and strenuous physical exertion for 60 minutes prior to blood pressure evaluation.",
    consultationFee: "₹800",
    typicalDuration: "20 - 25 minutes"
  },
  {
    id: "respiratory-allergy",
    number: "04",
    category: "Chest & Allergy",
    title: "Respiratory & Allergy Care",
    shortDescription: "Adult and pediatric asthma management, nebulization services, chronic bronchitis therapy, and seasonal allergy relief protocols.",
    fullDescription: "Targeted clinical workup for persistent allergic rhinitis, adult-onset asthma, post-viral chronic cough, and COPD. We offer on-site ultrasonic nebulization, peak flow measurement, and allergen avoidance counselling customized for Bengaluru's environmental triggers.",
    indications: [
      "Chronic nocturnal or early morning dry/productive cough",
      "Seasonal wheezing and allergic bronchospasm",
      "Allergic sinusitis, post-nasal drip, and recurring throat irritation",
      "Post-COVID reactive airway hypersensitivity"
    ],
    keyDiagnostics: [
      "Peak Expiratory Flow Rate (PEFR) serial assessment",
      "Complete Blood Count with Absolute Eosinophil Count (AEC) and total IgE",
      "Pulse oximetry & chest auscultation workup",
      "Clinic nebulization with bronchodilator challenge"
    ],
    preparationInstructions: "Carry any existing inhalers, spacers, or nasal sprays for inhaler technique evaluation with the physician.",
    consultationFee: "₹800 (Nebulization procedure ₹250 if required)",
    typicalDuration: "20 minutes"
  },
  {
    id: "geriatric-chronic",
    number: "05",
    category: "Senior Health",
    title: "Geriatric & Chronic Illness",
    shortDescription: "Holistic multi-morbidity management for senior citizens, routine polypharmacy audits, cognitive checks, and home care coordination.",
    fullDescription: "Dedicated internal medicine care for older adults navigating multiple intersecting chronic conditions (hypertension, osteoarthritis, kidney decline, diabetes, sleep disturbance). We perform rigorous drug-drug interaction audits to eliminate redundant medications and preserve vitality.",
    indications: [
      "Polypharmacy review (patients taking 5+ prescription medicines)",
      "Recurrent falls, frailty, orthostatic dizziness, or balance changes",
      "Unexplained appetite loss or involuntary weight reduction",
      "Comprehensive multi-morbidity coordination and palliative guidance"
    ],
    keyDiagnostics: [
      "Comprehensive Medication Reconciliation & Beers Criteria audit",
      "Postural orthostatic blood pressure testing (lying/standing)",
      "Kidney clearance & electrolyte stabilization check",
      "Basic cognitive screening (Mini-Cog) and functional mobility review"
    ],
    preparationInstructions: "Please bring all current prescription bottles, strips, and supplements in their original packaging.",
    consultationFee: "₹800 (Wheelchair assistance & ground elevator provided)",
    typicalDuration: "30 minutes"
  },
  {
    id: "digital-diagnostics",
    number: "06",
    category: "Laboratory",
    title: "Digital Diagnostics & Lab",
    shortDescription: "NABL-standardized sample collection, precision biochemical analyzers, and rapid digital report delivery to WhatsApp in under 4 hours.",
    fullDescription: "State-of-the-art diagnostic phlebotomy center utilizing vacuum collection technology for hemolysis-free specimens. Partnered with NABL-certified core reference laboratories for reliable hematology, clinical chemistry, endocrinology, and microbiologic testing.",
    indications: [
      "Physician-prescribed routine and specialized blood investigations",
      "Fasting lipid, thyroid, and diabetic profiles",
      "Urgent fever profiles (Dengue, Malaria, Typhoid, CBC, CRP)",
      "Urine microscopy and culture sensitivity testing"
    ],
    keyDiagnostics: [
      "Automated 5-part differential hematology (CBC)",
      "Spectrophotometric clinical chemistry panels",
      "Immunoassay hormone & antibody testing",
      "Instant WhatsApp & encrypted PDF digital report dispatch"
    ],
    preparationInstructions: "Lab opens at 07:30 AM. Fasting blood tests require 10-12 hours of overnight fast; drinking plain water is allowed and encouraged.",
    consultationFee: "Test-based pricing with transparent published rate card",
    typicalDuration: "10-minute phlebotomy; 4-hour report turnaround"
  }
];

export const INSTITUTIONAL_MATRIX = [
  {
    label: "Institutional Affiliation",
    detail: "Former Senior Consultant, Manipal Hospital & St. John's Medical College"
  },
  {
    label: "Fellowships & Councils",
    detail: "RSSDI Life Member, CMC Vellore Clinical Diabetology Fellow"
  },
  {
    label: "Continuous Symposia",
    detail: "1,200+ accredited hours in advanced internal medicine symposia"
  },
  {
    label: "Primary Focus",
    detail: "Type 2 Diabetes Reversal, Hypertension & Preventive Vascular Health"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Raghavan Nambiar",
    location: "Indiranagar, Bengaluru",
    treatment: "Diabetes & Metabolic Protocol",
    rating: 5,
    text: "Dr. Arvind Sharma's approach to diabetes is remarkably distinct. Instead of merely augmenting my insulin doses, he analyzed my routine and guided diet modifications that brought my HbA1c down from 9.1 to 6.4 in five months.",
    date: "14 Aug 2024",
    verified: true
  },
  {
    id: "rev-2",
    name: "Priyanka Deshmukh",
    location: "Koramangala, Bengaluru",
    treatment: "Elderly Care & General Medicine",
    rating: 5,
    text: "Finding a doctor who actually listens for 20 continuous minutes without glancing at his watch is rare in Bangalore. His diagnosis for my mother's persistent fatigue was spot on, avoiding expensive hospital admissions.",
    date: "28 Jul 2024",
    verified: true
  },
  {
    id: "rev-3",
    name: "Karthik Sundaram",
    location: "Whitefield, Bengaluru",
    treatment: "Diagnostic Diagnostics & Annual Review",
    rating: 5,
    text: "The clinic infrastructure is immaculately clean, diagnostic blood test results were dispatched straight to WhatsApp by noon, and the consultation billing was completely clear. Highly recommended family practice.",
    date: "02 Sep 2024",
    verified: true
  },
  {
    id: "rev-4",
    name: "Dr. Meenakshi Rao",
    location: "HAL 2nd Stage, Bengaluru",
    treatment: "Cardiovascular & Hypertension Titration",
    rating: 5,
    text: "As a fellow physician, I trust Dr. Sharma implicitly with my parents' health. His evidence-based prescribing and conservative attitude towards invasive procedures reflect true clinical integrity.",
    date: "19 Jun 2024",
    verified: true
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Do I need a prior appointment or can I walk in?",
    answer: "While we accommodate emergency walk-in patients during OPD hours, we strongly advise scheduling prior appointments online or via WhatsApp. Prior booking guarantees minimal waiting times and reserves a full 20-minute consultation window for your clinical review.",
    category: "appointments"
  },
  {
    id: "faq-2",
    question: "How do I book a consultation via WhatsApp?",
    answer: "Simply click the 'Chat on WhatsApp' button on this site or text +91 98765 43210. Our clinical receptionist will share open time slots for morning or evening sessions, confirm your patient details, and send an instant calendar invite with clinic location.",
    category: "appointments"
  },
  {
    id: "faq-3",
    question: "Are diagnostic tests and blood collections done at the clinic?",
    answer: "Yes. Our in-house diagnostic collection facility opens daily at 7:30 AM for fasting blood draws, 12-lead ECGs, and urine biochemistry. Digital reports certified by NABL protocols are delivered directly to your mobile within 4 hours.",
    category: "diagnostics"
  },
  {
    id: "faq-4",
    question: "Do you support cashless health insurance / mediclaim reimbursement?",
    answer: "We provide comprehensive itemized invoices, diagnostic summaries, and prescription receipts complying with IRDAI guidelines for prompt reimbursement across all major health insurance providers (Star Health, HDFC Ergo, ICICI Lombard, Care Health, etc.).",
    category: "insurance"
  },
  {
    id: "faq-5",
    question: "What is the clinic consultation fee and follow-up policy?",
    answer: "The initial detailed consultation fee is ₹800. This includes your physical evaluation, biometric records, and prescription guidance. Every consultation includes a complimentary review visit within 7 days for test analysis and dosage adjustment.",
    category: "clinic"
  },
  {
    id: "faq-6",
    question: "Is parking available at the Indiranagar clinic?",
    answer: "Yes, designated basement parking is reserved for patient vehicles, along with dedicated ramp access and elevator service suitable for senior citizens and wheelchair users.",
    category: "clinic"
  }
];

export const AVAILABLE_SLOTS = [
  { time: "09:00 AM", period: "morning" as const, available: true },
  { time: "09:30 AM", period: "morning" as const, available: true },
  { time: "10:00 AM", period: "morning" as const, available: false },
  { time: "10:30 AM", period: "morning" as const, available: true },
  { time: "11:15 AM", period: "morning" as const, available: true },
  { time: "12:00 PM", period: "morning" as const, available: true },
  { time: "12:45 PM", period: "morning" as const, available: true },
  { time: "05:00 PM", period: "evening" as const, available: true },
  { time: "05:30 PM", period: "evening" as const, available: true },
  { time: "06:15 PM", period: "evening" as const, available: true },
  { time: "07:00 PM", period: "evening" as const, available: false },
  { time: "07:30 PM", period: "evening" as const, available: true },
  { time: "08:00 PM", period: "evening" as const, available: true }
];
