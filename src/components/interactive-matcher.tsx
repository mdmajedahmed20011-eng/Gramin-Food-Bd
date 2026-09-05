import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { company, destinations } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";

export function InteractiveMatcher() {
  const { open } = useRegisterModal();
  const [level, setLevel] = useState<string>("Master's / MBA");
  const [score, setScore] = useState<string>("GPA 4.0 – 4.9 / Second Class Upper");
  const [ielts, setIelts] = useState<string>("Without IELTS (MOI Accepted)");
  const [budget, setBudget] = useState<string>("Affordable (৳8L – ৳15L)");

  const matchedDestinations = useMemo(() => {
    return destinations.filter((d) => {
      // Without IELTS filter
      if (ielts === "Without IELTS (MOI Accepted)") {
        return d.withoutIelts;
      }
      // Low/Zero tuition budget matching
      if (budget === "Affordable (৳8L – ৳15L)") {
        if (["malaysia", "cyprus", "germany", "uk"].includes(d.slug)) {
          return true;
        }
      }
      if (budget === "Premium (৳18L+)") {
        return ["australia", "canada", "usa", "uk"].includes(d.slug);
      }
      return true;
    }).slice(0, 6);
  }, [budget, ielts]);

  const whatsappHref = () => {
    const text = `Hello Alex Global Consultancy! I used your Study Abroad Eligibility Calculator.\n\nMy Profile:\n• Desired Level: ${level}\n• Academic Result: ${score}\n• English Proficiency: ${ielts}\n• Tuition Budget: ${budget}\n\nMatched Destinations: ${matchedDestinations.map((m) => m.name).join(", ")}\n\nPlease schedule a free consultation with an Alex Global advisor for me!`;
    return `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="card-clean p-6 sm:p-10 border border-slate-200/90 shadow-md bg-white rounded-3xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1 text-xs font-bold text-red-700">
            <IconSparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Interactive Tool · 100% Free Consultation</span>
          </div>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            Study Abroad <span className="text-red-700">Eligibility Calculator</span>
          </h2>
          <p className="mt-1 max-w-2xl text-xs sm:text-sm text-slate-600 leading-relaxed">
            Select your academic degree level, GPA, English status (with or without IELTS/MOI), and budget to instantly discover matched destinations across UK, Canada, Australia, Cyprus, USA, Germany & Finland.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-2 text-xs font-bold text-white">
          Verified 2026/2027 Intakes
        </div>
      </div>

      {/* Profile Filters Matrix */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* 1. Degree Level */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
            1. Desired Study Level
          </label>
          <div className="space-y-1.5">
            {["Diploma (SSC/Dakhil Entry)", "Bachelor's Degree", "Master's / MBA", "PhD / Research"].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setLevel(opt)}
                className={`w-full rounded-xl px-3.5 py-2.5 text-left text-xs font-bold transition-all cursor-pointer ${
                  level === opt
                    ? "bg-slate-900 text-white shadow-sm border border-red-600"
                    : "border border-slate-200 bg-slate-50/80 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Academic Score */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
            2. Academic GPA / CGPA
          </label>
          <div className="space-y-1.5">
            {["GPA 5.0 / First Class", "GPA 4.0 – 4.9 / Second Class Upper", "GPA 3.0 – 3.9", "Study Gap 2–5+ Yrs"].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setScore(opt)}
                className={`w-full rounded-xl px-3.5 py-2.5 text-left text-xs font-bold transition-all cursor-pointer ${
                  score === opt
                    ? "bg-slate-900 text-white shadow-sm border border-red-600"
                    : "border border-slate-200 bg-slate-50/80 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* 3. English Test Status */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
            3. English Proficiency
          </label>
          <div className="space-y-1.5">
            {["Without IELTS (MOI Accepted)", "IELTS 6.5 – 7.5+", "IELTS 6.0 – 6.5", "Planning to Take IELTS"].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setIelts(opt)}
                className={`w-full rounded-xl px-3.5 py-2.5 text-left text-xs font-bold transition-all cursor-pointer ${
                  ielts === opt
                    ? "bg-slate-900 text-white shadow-sm border border-red-600"
                    : "border border-slate-200 bg-slate-50/80 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Budget Range */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
            4. Tuition Budget / Year
          </label>
          <div className="space-y-1.5">
            {["Low Cost / Europe Grants", "Affordable (৳8L – ৳15L)", "Moderate (৳15L – ৳22L)", "Premium (৳18L+)"].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setBudget(opt)}
                className={`w-full rounded-xl px-3.5 py-2.5 text-left text-xs font-bold transition-all cursor-pointer ${
                  budget === opt
                    ? "bg-slate-900 text-white shadow-sm border border-red-600"
                    : "border border-slate-200 bg-slate-50/80 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Matched Results */}
      <div className="mt-8 border-t border-slate-100 pt-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Top Matched Destinations for Your Profile ({matchedDestinations.length}):
          </span>
          <span className="text-xs font-semibold text-emerald-700">
            100% Free Profile Assessment Available
          </span>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {matchedDestinations.map((d) => (
            <div
              key={d.slug}
              className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 transition-all hover:bg-white hover:border-red-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900">
                  <span className="text-xl">{d.flag}</span> {d.name}
                </span>
                <span className="rounded-full bg-red-50 border border-red-200 px-2 py-0.5 text-[0.62rem] font-bold text-red-700">
                  {d.pswv}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">{d.tagline}</p>
              <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-200/60 text-[0.7rem]">
                <span className="font-semibold text-slate-700">Intakes: {d.intakes.split("&")[0]}</span>
                <Link
                  to="/study-in-{$country}"
                  params={{ country: d.slug }}
                  className="font-bold text-red-700 hover:underline flex items-center gap-1"
                >
                  <span>Explore</span>
                  <IconArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-slate-950 border border-slate-800 p-5 sm:p-6 text-white shadow-lg">
          <div>
            <p className="font-display text-sm sm:text-base font-bold text-white">
              Want a 100% Free Profile Audit by Alex Global Consultancy Advisors?
            </p>
            <p className="text-xs text-slate-300 mt-0.5">
              Walk into our Dhaka Corporate Office (Aftabnagar EHL Project) or London Branch (Cranberry Lane), or connect on WhatsApp for an instant evaluation.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={open}
              className="btn-luxury-primary text-xs py-2.5 px-5"
            >
              Book Free Session
            </button>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="btn-luxury-secondary text-xs py-2.5 px-5"
            >
              <IconWhatsApp className="w-3.5 h-3.5 text-emerald-600" />
              <span>Send on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

