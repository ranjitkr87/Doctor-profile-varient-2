import React, { useState } from 'react';
import { REVIEWS } from '../data/clinicData';
import { ReviewItem } from '../types/clinic';

export const Testimonials: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [authorLoc, setAuthorLoc] = useState('');
  const [treatmentType, setTreatmentType] = useState('General Consultation');
  const [reviewMsg, setReviewMsg] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const featured = reviewsList[0];
  const supporting = reviewsList.slice(1);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewMsg.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: authorName.trim(),
      location: authorLoc.trim() || 'Bengaluru',
      treatment: treatmentType,
      rating: 5,
      text: reviewMsg.trim(),
      date: 'Just now',
      verified: true
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmittedFeedback(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setSubmittedFeedback(false);
      setAuthorName('');
      setAuthorLoc('');
      setReviewMsg('');
    }, 2000);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#fbfbf9] border-b border-[#e5e5df]" id="reviews">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-[#e5e5df] flex-wrap gap-4">
          <div>
            <span className="text-[#0f766e] text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
              Patient Records &amp; Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0a0f1d] tracking-tight">
              Restored Health &amp; Long-Term Partnerships
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowReviewModal(true)}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#0a0f1d] border border-[#e5e5df] px-3.5 py-2 hover:border-[#0a0f1d] bg-white transition-colors"
            >
              <span className="material-symbols-outlined text-sm text-[#0f766e]">rate_review</span>
              Share Feedback
            </button>
            <div className="text-right">
              <span className="font-serif text-2xl font-bold text-[#0a0f1d]">4.9 / 5.0</span>
              <span className="block text-[11px] uppercase tracking-widest text-[#334155] font-medium">
                850+ Verified Google Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Large Featured Editorial Quote */}
        {featured && (
          <div className="bg-white border border-[#e5e5df] p-8 lg:p-14 mb-8">
            <span className="font-serif text-6xl text-[#847545]/40 leading-none block -mb-4">“</span>
            <blockquote className="font-serif text-2xl lg:text-3xl text-[#0a0f1d] font-normal leading-relaxed mb-8">
              {featured.text}
            </blockquote>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-[#e5e5df] gap-4">
              <div>
                <span className="font-bold text-[#0a0f1d] tracking-tight text-base block">
                  {featured.name}
                </span>
                <span className="text-xs text-[#334155]">
                  {featured.location} • {featured.treatment}
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f766e] uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">verified</span> Verified OPD Patient
              </span>
            </div>
          </div>
        )}

        {/* Supporting 2-Column Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supporting.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-[#e5e5df] p-6 lg:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-[#847545] font-semibold">
                    {review.treatment}
                  </span>
                  <span className="text-xs font-medium text-amber-600">★★★★★</span>
                </div>
                <p className="font-serif text-lg text-[#0a0f1d] leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>
              <div className="pt-4 border-t border-[#e5e5df] flex items-center justify-between text-xs">
                <div>
                  <strong className="text-[#0a0f1d] block">{review.name}</strong>
                  <span className="text-[#334155]">{review.location}</span>
                </div>
                <span className="text-[#0f766e] font-medium">Verified Patient</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Dialog */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white border border-[#e5e5df] max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95">
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-4 right-4 text-[#334155] hover:text-[#0a0f1d]"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {submittedFeedback ? (
              <div className="text-center py-8">
                <span className="material-symbols-outlined text-4xl text-[#0f766e] mb-2">check_circle</span>
                <h3 className="font-serif text-2xl text-[#0a0f1d] font-bold">Thank You</h3>
                <p className="text-xs text-[#334155] mt-1">Your feedback has been verified and recorded.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <span className="text-[#0f766e] text-[10px] uppercase tracking-widest font-semibold block">OPD Feedback Desk</span>
                  <h3 className="font-serif text-2xl text-[#0a0f1d] font-normal">Share Your Clinical Experience</h3>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a0f1d] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full text-xs p-2.5 border border-[#e5e5df] focus:border-[#0f766e] outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a0f1d] mb-1">
                      Locality / City
                    </label>
                    <input
                      type="text"
                      value={authorLoc}
                      onChange={(e) => setAuthorLoc(e.target.value)}
                      placeholder="e.g. Indiranagar, Bengaluru"
                      className="w-full text-xs p-2.5 border border-[#e5e5df] focus:border-[#0f766e] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a0f1d] mb-1">
                      Department
                    </label>
                    <select
                      value={treatmentType}
                      onChange={(e) => setTreatmentType(e.target.value)}
                      className="w-full text-xs p-2.5 border border-[#e5e5df] focus:border-[#0f766e] outline-none bg-white"
                    >
                      <option>Diabetes &amp; Metabolic Care</option>
                      <option>Hypertension &amp; Cardiology</option>
                      <option>Preventive Health Checkup</option>
                      <option>Geriatric Medicine</option>
                      <option>Diagnostics &amp; Lab Workup</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#0a0f1d] mb-1">
                    Your Comments *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={reviewMsg}
                    onChange={(e) => setReviewMsg(e.target.value)}
                    placeholder="Describe your consultation with Dr. Arvind Sharma and the clinical outcome..."
                    className="w-full text-xs p-2.5 border border-[#e5e5df] focus:border-[#0f766e] outline-none"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#334155] border border-[#e5e5df]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs uppercase tracking-wider font-semibold bg-[#0a0f1d] text-white hover:bg-[#334155]"
                  >
                    Submit Testimonial
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
