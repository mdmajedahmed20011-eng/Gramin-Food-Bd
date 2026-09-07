import { useState } from "react";
import { company, destinations } from "@/lib/site-data";
import { IconWhatsApp, IconCheck, IconPhone } from "@/components/ui-blocks";
import { SlideIn, CountUp } from "@/components/motion-wrapper";

export function QuickLeadSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("Italy");
  const [courseLevel, setCourseLevel] = useState("Postgraduate / Master's");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `Hello Academic Allies!\n\nI would like a Free Profile Assessment:\n` +
      `• Name: ${name || "Applicant"}\n` +
      `• Phone: ${phone || "Not provided"}\n` +
      `• Email: ${email || "Not provided"}\n` +
      `• Destination: ${destination}\n` +
      `• Course Level: ${courseLevel}\n\n` +
      `Please guide me on European admissions, DSU scholarships, Language Academy courses, and visa processing at your Chattogram office.`
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
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-700">
                — FAST-TRACK CONSULTATION —
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Advance Your Future{" "}
                <span className="text-[#0C2340]">Abroad</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-lg">
                Get personalized guidance from our expert counselors at Finlay Square, Chattogram. Zero fake visa traps, zero file-opening charge, and 100% genuine European university and embassy portal processing.
              </p>
            </div>

            {/* Two Side-by-Side Stat Boxes with CountUp */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {/* Box 1: Scholars Guided */}
              <div className="rounded-2xl border border-amber-200/70 bg-amber-50/40 p-5 text-center transition-all hover-lift">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">
                  <span className="text-xl">🎓</span>
                </div>
                <div className="font-serif-editorial text-3xl sm:text-4xl font-bold text-slate-900">
                  <CountUp value={1200} suffix="+" duration={2} />
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">
                  Scholars Guided
                </div>
              </div>

              {/* Box 2: Facebook Community & Rating */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-center transition-all hover-lift">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0C2340] text-amber-300">
                  <span className="text-xl">⭐</span>
                </div>
                <div className="font-serif-editorial text-3xl sm:text-4xl font-bold text-slate-900">
                  <CountUp value={100} suffix="%" duration={2} />
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">
                  FB Recommendation (47K+)
                </div>
              </div>
            </div>

            {/* Benefit Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                  <IconCheck className="w-3.5 h-3.5 text-amber-700" />
                </div>
                <span>100% Free Initial Assessment & European 5-Step Roadmap</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                  <IconCheck className="w-3.5 h-3.5 text-amber-700" />
                </div>
                <span>Chattogram HQ at Finlay Square (7th Fl) &amp; Zeenat Abad Branch</span>
              </div>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                  <IconCheck className="w-3.5 h-3.5 text-amber-700" />
                </div>
                <span>Official British Council &amp; ICEF Partner · IELTS Band 7+ Coaching</span>
              </div>
            </div>
          </SlideIn>

          {/* Right Column: Elevated White Lead Capture Form Card */}
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
                    Full Name <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                  />
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone / WhatsApp <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01859-XXXXXX"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
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
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all cursor-pointer"
                  >
                    <option value="Italy">Italy (University of Padova / Universitaly / DSU)</option>
                    <option value="Sweden">Sweden (English Master's & Innovation)</option>
                    <option value="Finland">Finland (UAS Network & Post-Study Work)</option>
                    <option value="United Kingdom">United Kingdom (1-Yr Masters & 2-Yr PSW)</option>
                    <option value="Canada">Canada (Public DLIs & Paid Co-op)</option>
                    <option value="USA">United States (STEM OPT & Visa Prep)</option>
                    <option value="Malaysia">Malaysia (Global Campuses & Transfers)</option>
                    <option value="Language Academy">Language Academy (IELTS Band 7+ / Spoken / Kids)</option>
                  </select>
                </div>

                {/* Course Level */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Course / Study Level
                  </label>
                  <select
                    value={courseLevel}
                    onChange={(e) => setCourseLevel(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all cursor-pointer"
                  >
                    <option value="Postgraduate / Master's">Postgraduate (Master's / Laurea Magistrale)</option>
                    <option value="Undergraduate / Bachelor's">Undergraduate (Bachelor's / Laurea Triennale)</option>
                    <option value="IELTS Masterclass">IELTS Academic Preparation (Band 7.0+)</option>
                    <option value="Spoken English">Spoken English & Fluency</option>
                    <option value="Kids English Foundation">Kids English (Ages 5–14)</option>
                  </select>
                </div>

                {/* Submit WhatsApp Button */}
                <button
                  type="submit"
                  className="btn-luxury-primary w-full text-slate-950 font-bold py-4 px-6 text-xs sm:text-sm shadow-lg hover:shadow-amber-400/30 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2 active:scale-95"
                >
                  <IconWhatsApp className="w-5 h-5 text-emerald-700" />
                  <span>Get Free Consultation via WhatsApp</span>
                </button>

                {/* Privacy disclaimer */}
                <p className="text-[0.7rem] text-slate-400 text-center pt-1 font-medium">
                  By submitting, you agree to our terms. Zero fake visa risks · We protect your privacy.
                </p>
              </form>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
