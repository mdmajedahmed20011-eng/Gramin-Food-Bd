import { useState } from "react";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { SlideIn } from "@/components/motion-wrapper";

const educationLevels = [
  { id: "hsc", label: "HSC / A-Level / Alim", subtitle: "Undergraduate Entry" },
  { id: "bachelor", label: "Bachelor's Degree", subtitle: "Master's & Postgrad Entry" },
  { id: "masters", label: "Master's / Working Professional", subtitle: "Postgrad / Second Master's / Spouse" },
];

const englishProficiency = [
  { id: "ielts", label: "IELTS 6.0 – 7.5+", badge: "Direct Global Entry" },
  { id: "moi", label: "Medium of Instruction (MOI)", badge: "Without IELTS Path" },
  { id: "needcoaching", label: "Need IELTS / Spoken Coaching", badge: "Join AGC Batch" },
  { id: "kids", label: "Parent: Kids English (5-14 yrs)", badge: "Kids Foundation" },
];

const destinationPreferences = [
  { id: "uk", name: "United Kingdom", flag: "🇬🇧", tag: "1-Yr Masters / PSW", partner: "London Direct Care" },
  { id: "canada", name: "Canada", flag: "🇨🇦", tag: "3-Yr PGWP / Co-op", partner: "Public DLIs" },
  { id: "australia", name: "Australia", flag: "🇦🇺", tag: "High Student Wages", partner: "Subclass 500" },
  { id: "cyprus", name: "Cyprus (Europe)", flag: "🇨🇾", tag: "Affordable €3k-€5k", partner: "High Visa Success" },
  { id: "germany", name: "Germany", flag: "🇩🇪", tag: "Low/Zero Tuition", partner: "18-Mo Job Seeker" },
  { id: "usa", name: "USA", flag: "🇺🇸", tag: "STEM OPT Career", partner: "F-1 Mock Prep" },
];

export function VisaPathfinder() {
  const { open } = useRegisterModal();
  const [eduLevel, setEduLevel] = useState("bachelor");
  const [english, setEnglish] = useState("moi");
  const [destination, setDestination] = useState("uk");

  // Dynamic computation logic
  const getMatchData = () => {
    if (english === "needcoaching") {
      return {
        matchScore: 99,
        title: "Alex Global Language Academy Pathway",
        headline: "IELTS Preparation Masterclass & Spoken English Fluency",
        timeline: "2 to 3 Months to Band 7.0+",
        scholarship: "Free Initial Mock Test & Diagnostic Evaluation",
        moiAccepted: "Certified IDP/British Council Aligned Curriculum",
        partnerNote: "Trained at our Dhaka Aftabnagar campus or online with weekly mock tests and individual speaking feedback.",
        actionType: "course",
      };
    }

    if (english === "kids") {
      return {
        matchScore: 100,
        title: "Kids English & Spoken Foundation",
        headline: "Fun, Creative & Child-Centric English Learning (Ages 5–14)",
        timeline: "3 Months Interactive Batches",
        scholarship: "Sibling Discount & Free Trial Class",
        moiAccepted: "Phonics, Storytelling & Spoken Confidence",
        partnerNote: "Safe, nurturing classroom environment in Aftabnagar with loving, patient instructors.",
        actionType: "course",
      };
    }

    if (destination === "uk") {
      return {
        matchScore: english === "moi" ? 98 : 99,
        title: "UK Direct University Admission",
        headline: "1-Year Master's, 2-Year PSW & London Local Branch Support",
        timeline: "Offer Letter in 1–2 Weeks",
        scholarship: "Up to £2,000 – £4,000 Merit Bursaries",
        moiAccepted: english === "moi" ? "100% MOI Accepted (Without IELTS)" : "Direct Unconditional Offer",
        partnerNote: "Alex Global Consultancy operates direct branches in Dhaka (Aftabnagar) and London (The Arches Cranberry Lane) for complete pre and post-arrival care.",
        actionType: "abroad",
      };
    } else if (destination === "cyprus") {
      return {
        matchScore: 96,
        title: "Cyprus European English-Medium Pathway",
        headline: "Extremely Affordable Tuition (€3,000–€5,000/yr) & High Visa Ratio",
        timeline: "Fast Visa Turnaround (3–4 Weeks)",
        scholarship: "Up to 50% Tuition Fee Waivers",
        moiAccepted: "Flexible English Requirements",
        partnerNote: "As highlighted in our official Facebook reels, Cyprus offers a highly accessible European degree pathway with low living expenses.",
        actionType: "abroad",
      };
    } else if (destination === "germany") {
      return {
        matchScore: 94,
        title: "German Public University Admission",
        headline: "Zero / Low Tuition Models with 18-Month Job Seeker Residence",
        timeline: "Winter & Summer Intakes",
        scholarship: "Tuition-Free Public Higher Education",
        moiAccepted: "English-Taught Master's Degrees",
        partnerNote: "Access Europe's economic powerhouse with blocked account guidance and Schengen mobility.",
        actionType: "abroad",
      };
    } else if (destination === "australia") {
      return {
        matchScore: 93,
        title: "Australia Subclass 500 Higher Education",
        headline: "Top Ranked Universities with High Hourly Student Wages",
        timeline: "February & July Major Intakes",
        scholarship: "15% to 30% International Bursaries",
        moiAccepted: english === "ielts" ? "Direct Entry" : "PTE / Packaged ELICOS",
        partnerNote: "2 to 4 years Post-Study Work Visa (Subclass 485) and regional migration advantages.",
        actionType: "abroad",
      };
    } else if (destination === "canada") {
      return {
        matchScore: 92,
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
        matchScore: 91,
        title: "USA Tier-1 University Pathway",
        headline: "World-Class Research with up to 3-Year STEM OPT Extensions",
        timeline: "Fall & Spring Intakes",
        scholarship: "Graduate Assistantships & Merit Waivers",
        moiAccepted: "Standard IELTS / TOEFL / Duolingo",
        partnerNote: "Thorough 1-on-1 F-1 consular mock interview preparation at Alex Global.",
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
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-700 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-red-600" />
              <span>Interactive Pathway Simulator</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Find Your Instant <span className="text-red-600">Admission &amp; Course Match</span>
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
                        ? "border-red-600 bg-red-50/70 shadow-sm ring-1 ring-red-500"
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
                        ? "border-red-600 bg-red-50/70 shadow-sm ring-1 ring-red-500"
                        : "border-slate-200 bg-slate-50/50 hover:bg-slate-100/70",
                    )}
                  >
                    <div>
                      <span className="block text-xs font-bold text-slate-900">{eng.label}</span>
                      <span className="block text-[0.68rem] text-slate-500 mt-0.5">{eng.badge}</span>
                    </div>
                    {english === eng.id && (
                      <span className="h-5 w-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[0.65rem] font-bold">
                        ✓
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Destination (If Abroad Selected) */}
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
                        ? "border-red-600 bg-red-50/70 shadow-sm ring-1 ring-red-500"
                        : "border-slate-200 bg-slate-50/50 hover:bg-slate-100/70",
                    )}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-lg">{dest.flag}</span>
                      <span className="text-xs font-bold text-slate-900">{dest.name}</span>
                    </div>
                    <span className="block text-[0.65rem] text-red-700 font-semibold">{dest.tag}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Real-Time Match Result Card */}
          <div className="rounded-3xl border-2 border-red-500/30 bg-gradient-to-br from-white via-red-50/20 to-slate-50 p-6 sm:p-7 shadow-lg space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
              <span className="rounded-full bg-red-100 border border-red-300 px-3 py-1 text-[0.68rem] font-extrabold text-red-800">
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
                <span className="text-red-600 font-bold">⏱ Timeline:</span>
                <span className="text-slate-700 font-medium">{match.timeline}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">💰 Aid / Perk:</span>
                <span className="text-slate-700 font-medium">{match.scholarship}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-blue-600 font-bold">📜 Language Requirement:</span>
                <span className="text-slate-700 font-medium">{match.moiAccepted}</span>
              </div>
            </div>

            <p className="text-[0.75rem] text-slate-600 leading-relaxed italic border-l-2 border-red-500 pl-3">
              "{match.partnerNote}"
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={open}
                className="btn-luxury-primary w-full text-xs py-3 justify-center shadow-md hover:shadow-red-600/30"
              >
                <span>Apply with This Profile</span>
                <span>→</span>
              </button>
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hello Alex Global Consultancy! My profile matches: ${match.title} (${match.headline}). Please guide me.`,
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
