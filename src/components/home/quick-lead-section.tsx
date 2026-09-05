import { useState } from "react";
import { company, destinations } from "@/lib/site-data";
import { IconWhatsApp, IconCheck, IconPhone } from "@/components/ui-blocks";
import { SlideIn, CountUp } from "@/components/motion-wrapper";

export function QuickLeadSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("United Kingdom");
  const [courseLevel, setCourseLevel] = useState("Postgraduate / Master's");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `Hello Alex Global Consultancy!\n\nI would like a Free Profile Assessment:\n` +
      `• Name: ${name || "Applicant"}\n` +
      `• Phone: ${phone || "Not provided"}\n` +
      `• Email: ${email || "Not provided"}\n` +
      `• Destination: ${destination}\n` +
      `• Course Level: ${courseLevel}\n\n` +
      `Please guide me on university admission, scholarships, and visa processing.`
    );

    const waNumber = company.whatsapp.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="relative py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Left Column: Trust & Highlights (Slides from Left) */}
          <SlideIn direction="left" distance={45} className="space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600">
                — FAST-TRACK CONSULTATION —
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Start Your Journey{" "}
                <span className="text-[#043E8B]">Today</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-lg">
                Get personalized guidance from our expert counselors in Dhaka and London. No hidden fees, no obligations — 100% free profile evaluation.
              </p>
            </div>

            {/* Two Side-by-Side Stat Boxes with CountUp */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {/* Box 1: Students Guided */}
              <div className="rounded-2xl border border-blue-100 bg-[#F0F5FC] p-5 text-center transition-all hover-lift">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100/80 text-[#043E8B]">
                  <span className="text-xl">👥</span>
                </div>
                <div className="font-serif-editorial text-3xl sm:text-4xl font-bold text-slate-900">
                  <CountUp value={2500} suffix="+" duration={2} />
                </div>
                <div className="text-xs font-bold text-slate-600 mt-1">
                  Students Guided
                </div>
              </div>

              {/* Box 2: Student Rating */}
              <div className="rounded-2xl border border-red-100 bg-red-50/50 p-5 text-center transition-all hover-lift">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                  <span className="text-xl">⭐</span>
                </div>
                <div className="font-serif-editorial text-3xl sm:text-4xl font-bold text-slate-900">
                  <CountUp value={4.9} decimals={1} suffix=" / 5" duration={2} />
                </div>
                <div className="text-xs font-bold text-slate-600 mt-1">
                  Student Rating
                </div>
              </div>
            </div>

            {/* Benefit Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#043E8B]">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>100% Free Initial Assessment & University Selection</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#043E8B]">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>Dual-Hub Advantage: Local Support in Dhaka & London</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#043E8B]">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>Direct University Representation & Fast CAS / Offer Letters</span>
              </div>
            </div>
          </SlideIn>

          {/* Right Column: Elevated White Lead Capture Form Card (Slides from Right) */}
          <SlideIn direction="right" distance={45}>
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-xl shadow-slate-200/50 hover-glow">
              <div className="mb-6">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                  Book Your Free Counseling
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below. Our senior advisor will contact you within 30 minutes.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#043E8B] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#043E8B] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone / WhatsApp <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#043E8B] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Preferred Destination */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Destination
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-[#043E8B] focus:ring-2 focus:ring-blue-100 outline-none transition-all cursor-pointer"
                  >
                    <option value="United Kingdom">United Kingdom (UK)</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Cyprus">Cyprus (Europe)</option>
                    <option value="Germany">Germany</option>
                    <option value="Finland">Finland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="USA">United States (USA)</option>
                  </select>
                </div>

                {/* Course Level */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Course Level
                  </label>
                  <select
                    value={courseLevel}
                    onChange={(e) => setCourseLevel(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-[#043E8B] focus:ring-2 focus:ring-blue-100 outline-none transition-all cursor-pointer"
                  >
                    <option value="Postgraduate / Master's">Postgraduate (Master's / MBA)</option>
                    <option value="Undergraduate / Bachelor's">Undergraduate (Bachelor's / BSc / BA)</option>
                    <option value="Foundation / Pre-Master's">Foundation / Pre-Master's Pathway</option>
                    <option value="IELTS Preparation / Language">Language Academy (IELTS Band 7+ / Spoken)</option>
                  </select>
                </div>

                {/* Submit WhatsApp Button */}
                <button
                  type="submit"
                  className="btn-shimmer w-full rounded-xl bg-[#043E8B] hover:bg-[#032B60] text-white font-bold py-4 px-6 text-xs sm:text-sm shadow-lg hover:shadow-blue-900/30 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2 active:scale-95"
                >
                  <IconWhatsApp className="w-5 h-5 text-emerald-400" />
                  <span>Get Free Consultation via WhatsApp</span>
                </button>

                {/* Privacy disclaimer */}
                <p className="text-[0.7rem] text-slate-400 text-center pt-1 font-medium">
                  By submitting, you agree to our terms. We protect your privacy and never spam.
                </p>
              </form>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
