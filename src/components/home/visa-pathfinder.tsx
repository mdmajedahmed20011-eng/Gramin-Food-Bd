import { useState } from "react";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { SlideIn } from "@/components/motion-wrapper";

const educationLevels = [
  { id: "hsc", label: "HSC / Alim / A-Level", subtitle: "Undergraduate / Bachelor Entry" },
  { id: "bachelor", label: "Bachelor's Degree", subtitle: "Master's & Postgrad Entry" },
  { id: "masters", label: "Master's / Working Professional", subtitle: "Postgrad / Second Master's / Spouse" },
];

const englishProficiency = [
  { id: "ielts", label: "IELTS 6.0 – 7.5+", badge: "Direct European Entry" },
  { id: "moi", label: "Medium of Instruction (MOI)", badge: "Without IELTS Path" },
  { id: "needcoaching", label: "Need IELTS / Spoken Coaching", badge: "Join Allies Academy" },
  { id: "kids", label: "Parent: Kids English (5-14 yrs)", badge: "Kids Foundation" },
];

const destinationPreferences = [
  { id: "italy", name: "Italy (Padova)", flag: "🇮🇹", tag: "DSU €7k/yr + Free Tuition", partner: "Universitaly Specialist" },
  { id: "sweden", name: "Sweden", flag: "🇸🇪", tag: "Tech Masters & PSW", partner: "Nordic Study" },
  { id: "finland", name: "Finland", flag: "🇫🇮", tag: "UAS & Post-Study Work", partner: "Happiest Country" },
  { id: "uk", name: "United Kingdom", flag: "🇬🇧", tag: "1-Yr Masters / 2-Yr PSW", partner: "British Council Partner" },
  { id: "canada", name: "Canada", flag: "🇨🇦", tag: "3-Yr PGWP / Co-op", partner: "Public DLIs" },
  { id: "usa", name: "USA", flag: "🇺🇸", tag: "STEM OPT Career", partner: "F-1 Mock Prep" },
];

export function VisaPathfinder() {
  const { open } = useRegisterModal();
  const [eduLevel, setEduLevel] = useState("bachelor");
  const [english, setEnglish] = useState("moi");
  const [destination, setDestination] = useState("italy");

  // Dynamic computation logic
  const getMatchData = () => {
    if (english === "needcoaching") {
      return {
        matchScore: 99,
        title: "Academic Allies Language Academy Pathway",
        headline: "IELTS Preparation Masterclass (Target Band 7.0+) & Spoken Fluency",
        timeline: "2 to 3 Months to Band 7.0+",
        scholarship: "Free Initial Diagnostic Assessment & Mock Test",
        moiAccepted: "Certified British Council / IDP Aligned Curriculum",
        partnerNote: "Trained at our Finlay Square (7th Floor), Chattogram campus or live online with personalized mock interviews.",
        actionType: "course",
      };
    }

    if (english === "kids") {
      return {
        matchScore: 100,
        title: "Kids English Foundation (Ages 5–14)",
        headline: "Confidence-Building Spoken English & Creative Expression",
        timeline: "3 Months Interactive Batches",
        scholarship: "Sibling Enrollment Advantage & Free Trial Session",
        moiAccepted: "Phonics, Pronunciation & Natural Fluency",
        partnerNote: "Modern, safe classroom environment at Finlay Square, Chattogram with dedicated, patient instructors.",
        actionType: "course",
      };
    }

    if (destination === "italy") {
      return {
        matchScore: 99,
        title: "Italy Public University & DSU Scholarship",
        headline: "University of Padova & Universitaly English-Taught Programs",
        timeline: "Pre-Enrollment in 2–3 Weeks",
        scholarship: "Up to €7,000/year Living Stipend + 100% Tuition Waiver",
        moiAccepted: english === "moi" ? "MOI Accepted by Select Universities" : "Direct Unconditional Enrollment",
        partnerNote: "Academic Allies specializes in the official 5 Steps to Europe, guiding you from Universitaly registration to Italian Embassy visa filing.",
        actionType: "abroad",
      };
    } else if (destination === "sweden" || destination === "finland") {
      return {
        matchScore: 97,
        title: "Nordic Innovation Higher Education (Sweden & Finland)",
        headline: "English-Medium Tech Master's & Post-Study Residence Rights",
        timeline: "Autumn 2026 Admissions",
        scholarship: "Merit-Based Tuition Reductions",
        moiAccepted: "English-Taught Master's Programs",
        partnerNote: "Zero fake visa risks. We process authentic applications directly through official university admissions portals.",
        actionType: "abroad",
      };
    } else if (destination === "uk") {
      return {
        matchScore: english === "moi" ? 98 : 99,
        title: "UK Direct University Admission",
        headline: "1-Year Master's, 2-Year PSW & British Council Certified Support",
        timeline: "Offer Letter in 1–2 Weeks",
        scholarship: "Up to £2,000 – £4,000 Merit Bursaries",
        moiAccepted: english === "moi" ? "MOI Accepted (Without IELTS at Partner Unis)" : "Direct Unconditional Offer",
        partnerNote: "Certified British Council Partner counseling at our Finlay Square Chattogram headquarters.",
        actionType: "abroad",
      };
    } else if (destination === "canada") {
      return {
        matchScore: 94,
        title: "Canada Public DLI Pathway",
        headline: "Comprehensive Study Permit, Paid Co-op & up to 3-Year PGWP",
        timeline: "January, May & September Intakes",
        scholarship: "CAD $2,000 – $8,000 Entrance Awards",
        moiAccepted: "IELTS / Duolingo / MOI Pathways",
        partnerNote: "Designated Learning Institutions (DLIs) with transparent post-graduation work permits and spouse work rights.",
        actionType: "abroad",
      };
    } else {
      return {
        matchScore: 92,
        title: "USA Tier-1 University Pathway",
        headline: "World-Class Research with up to 3-Year STEM OPT Extensions",
        timeline: "Fall & Spring Intakes",
        scholarship: "Graduate Assistantships & Merit Waivers",
        moiAccepted: "Standard IELTS / TOEFL / Duolingo",
        partnerNote: "Thorough 1-on-1 F-1 consular mock interview preparation at Academic Allies Chattogram office.",
        actionType: "abroad",
      };
    }
  };

  const match = getMatchData();

  return (
    <section className="section-shell py-10 sm:py-16">
      <SlideIn direction="up" distance={30}>
        <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 lg:p-12 shadow-xl">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-900 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Interactive Pathway Simulator</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Find Your Instant <span className="text-[#0C2340]">Admission &amp; Course Match</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Select your academic background, English proficiency, and target destination below to see your matched program in real time.
            </p>
          </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          {/* Left Column: Interactive 3-Click Selector */}
          <div className="space-y-6">
            {/* Step 1: Education Level */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 block">
                1. Your Current Education / Status
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {educationLevels.map((lvl) => (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => setEduLevel(lvl.id)}
                    className={cn(
                      "p-3 rounded-2xl border text-left transition-all cursor-pointer",
                      eduLevel === lvl.id
                        ? "border-amber-500 bg-amber-50/70 shadow-sm ring-1 ring-amber-400"
                        : "border-slate-200 bg-slate-50/50 hover:bg-slate-100/70",
                    )}
                  >
                    <span className="block text-xs font-bold text-slate-900">{lvl.label}</span>
                    <span className="block text-[0.68rem] text-slate-500 mt-0.5">{lvl.subtitle}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: English Proficiency */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 block">
                2. English Proficiency or Course Interest
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {englishProficiency.map((eng) => (
                  <button
                    key={eng.id}
                    type="button"
                    onClick={() => setEnglish(eng.id)}
                    className={cn(
                      "p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between",
                      english === eng.id
                        ? "border-amber-500 bg-amber-50/70 shadow-sm ring-1 ring-amber-400"
                        : "border-slate-200 bg-slate-50/50 hover:bg-slate-100/70",
                    )}
                  >
                    <div>
                      <span className="block text-xs font-bold text-slate-900">{eng.label}</span>
                      <span className="block text-[0.68rem] text-slate-500 mt-0.5">{eng.badge}</span>
                    </div>
                    {english === eng.id && (
                      <span className="h-5 w-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[0.65rem] font-bold">
                        ✓
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Destination */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 block">
                3. Preferred Study Destination
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {destinationPreferences.map((dest) => (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => setDestination(dest.id)}
                    className={cn(
                      "p-3 rounded-2xl border text-left transition-all cursor-pointer",
                      destination === dest.id
                        ? "border-amber-500 bg-amber-50/70 shadow-sm ring-1 ring-amber-400"
                        : "border-slate-200 bg-slate-50/50 hover:bg-slate-100/70",
                    )}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-lg">{dest.flag}</span>
                      <span className="text-xs font-bold text-slate-900">{dest.name}</span>
                    </div>
                    <span className="block text-[0.65rem] text-amber-800 font-semibold">{dest.tag}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Real-Time Match Result Card */}
          <div className="rounded-3xl border-2 border-amber-400/40 bg-gradient-to-br from-white via-amber-50/20 to-slate-50 p-6 sm:p-7 shadow-lg space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
              <span className="rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-[0.68rem] font-extrabold text-amber-900">
                Matched Result ({match.matchScore}% Compatibility)
              </span>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Zero File Opening Fee
              </span>
            </div>

            <div className="space-y-1.5">
              <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500">
                {match.title}
              </span>
              <h3 className="font-display text-xl font-black text-slate-900 leading-tight">
                {match.headline}
              </h3>
            </div>

            <div className="space-y-2.5 rounded-2xl bg-white p-4 border border-slate-200/80 text-xs">
              <div className="flex items-start gap-2.5">
                <span className="text-amber-700 font-bold">⏱ Timeline:</span>
                <span className="text-slate-700 font-medium">{match.timeline}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">💰 Aid / Perk:</span>
                <span className="text-slate-700 font-medium">{match.scholarship}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#0C2340] font-bold">📜 Language Requirement:</span>
                <span className="text-slate-700 font-medium">{match.moiAccepted}</span>
              </div>
            </div>

            <p className="text-[0.75rem] text-slate-600 leading-relaxed italic border-l-2 border-amber-500 pl-3">
              "{match.partnerNote}"
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={open}
                className="btn-luxury-primary w-full text-xs py-3 justify-center shadow-md hover:shadow-amber-400/30 text-slate-950 font-bold"
              >
                <span>Apply with This Profile</span>
                <span>→</span>
              </button>
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello Academic Allies! My profile matches: ${match.title} (${match.headline}). Please guide me.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-secondary w-full text-xs py-3 justify-center"
              >
                <IconWhatsApp className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Query</span>
              </a>
            </div>
          </div>
        </div>
        </div>
      </SlideIn>
    </section>
  );
}

