import { useState } from "react";
import { useRegisterModal } from "@/components/register-modal";
import { IconSparkles, IconCheck, IconArrowRight, IconWhatsApp } from "@/components/ui-blocks";
import { cn } from "@/lib/utils";

const educationLevels = [
  { id: "hsc", label: "HSC / A-Level / Alim", subtitle: "Undergraduate Entry" },
  { id: "bachelor", label: "Bachelor's Degree", subtitle: "Postgraduate Entry" },
  { id: "masters", label: "Master's / Diploma", subtitle: "Advanced / PhD / Career" },
];

const englishProficiency = [
  { id: "ielts", label: "IELTS 6.0 - 7.0+", badge: "Direct Global Entry" },
  { id: "moi", label: "Medium of Instruction (MOI)", badge: "Without IELTS Path" },
  { id: "duolingo", label: "PTE / Duolingo Accepted", badge: "Fast Results" },
  { id: "notest", label: "No English Test Yet", badge: "Free Internal Test" },
];

const destinationPreferences = [
  { id: "uk", name: "United Kingdom", flag: "🇬🇧", tag: "3-5 Day Visas", partner: "BNU / UEL" },
  { id: "europe", name: "Europe (Schengen)", flag: "🇪🇺", tag: "Low/Zero Tuition", partner: "Hungary / Nordics" },
  { id: "australia", name: "Australia", flag: "🇦🇺", tag: "30% Scholarship", partner: "Subclass 500" },
  { id: "canada", name: "Canada", flag: "🇨🇦", tag: "3-Year PGWP", partner: "Public DLIs" },
];

export function VisaPathfinder() {
  const { open } = useRegisterModal();
  const [eduLevel, setEduLevel] = useState("bachelor");
  const [english, setEnglish] = useState("moi");
  const [destination, setDestination] = useState("uk");

  // Dynamic computation logic
  const getMatchData = () => {
    if (destination === "uk") {
      return {
        matchScore: english === "moi" ? 98 : 99,
        title: "UK Fast-Track Priority Admission",
        headline: "Direct CAS Issuance with High-Speed Visa Grant",
        timeline: "3 to 5 Days Embassy Visa Decision",
        scholarship: "Up to £2,500 - £4,000 Automatic Grants",
        moiAccepted: english === "moi" ? "100% MOI Accepted (Without IELTS)" : "Direct Unconditional Offer",
        partnerNote: "Direct BNU, UEL, & Solent University intake processing with zero file opening charges.",
      };
    } else if (destination === "europe") {
      return {
        matchScore: 95,
        title: "European Schengen Direct Pathway",
        headline: "Low Tuition & English-Medium Degrees in Hungary / Nordics",
        timeline: "Schengen Visa & 27 European Countries Access",
        scholarship: "State Subsidies & English Taught Programs",
        moiAccepted: "English Medium MOI Certificate Accepted",
        partnerNote: "University of Debrecen and Nordic partner access for Master's programs.",
      };
    } else if (destination === "australia") {
      return {
        matchScore: 92,
        title: "Australia Subclass 500 Streamline",
        headline: "High-Demand Courses with Post-Study Work Rights",
        timeline: "Fast GTE / Financial Vetting",
        scholarship: "Up to 25% - 30% Merit Scholarships",
        moiAccepted: english === "ielts" ? "Direct Entry Eligible" : "PTE / Language Package Options",
        partnerNote: "Post-Study Work Visa (Subclass 485) up to 4-5 years in regional centers.",
      };
    } else {
      return {
        matchScore: 90,
        title: "Canada Public DLI Pathway",
        headline: "Comprehensive Study Permit & Co-Op Placement",
        timeline: "Verified Financial Document Guidance",
        scholarship: "Entrance Awards Available",
        moiAccepted: "Standard IELTS / CAEL pathways",
        partnerNote: "3-Year Post-Graduation Work Permit (PGWP) eligibility upon graduation.",
      };
    }
  };

  const match = getMatchData();

  return (
    <section className="section-shell py-12 sm:py-16">
      <div className="outer-bezel">
        <div className="inner-bezel p-6 sm:p-10 lg:p-12">
          {/* Section Header with Micro-copy */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FCF8EE] border border-[#D4AF37]/40 px-3.5 py-1 text-xs font-bold text-[#8A6818] mb-3">
              <IconSparkles className="w-3.5 h-3.5" />
              <span>Interactive Visa & Scholarship Simulator</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Find Your Instant <span className="text-[#AA771C]">Study Abroad Pathway</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Select your academic profile below to see matched countries, visa speeds, and scholarship grants in real time.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            {/* Left Column: Interactive 3-Click Selector */}
            <div className="space-y-6">
              {/* Step 1: Education Level */}
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#090C10] text-[#F5D365] text-xs font-bold">1</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800">Your Current Qualification:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {educationLevels.map((lvl) => (
                    <button
                      key={lvl.id}
                      type="button"
                      onClick={() => setEduLevel(lvl.id)}
                      className={cn(
                        "rounded-2xl p-3 text-left transition-all border cursor-pointer",
                        eduLevel === lvl.id
                          ? "bg-[#090C10] text-white border-[#D4AF37] shadow-md"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300"
                      )}
                    >
                      <p className="font-bold text-xs">{lvl.label}</p>
                      <p className={cn("text-[0.65rem] mt-0.5", eduLevel === lvl.id ? "text-[#F5D365]" : "text-slate-500")}>
                        {lvl.subtitle}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: English Proficiency */}
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#090C10] text-[#F5D365] text-xs font-bold">2</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800">English Language Status:</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {englishProficiency.map((eng) => (
                    <button
                      key={eng.id}
                      type="button"
                      onClick={() => setEnglish(eng.id)}
                      className={cn(
                        "rounded-2xl p-3 text-left transition-all border cursor-pointer",
                        english === eng.id
                          ? "bg-[#090C10] text-white border-[#D4AF37] shadow-md"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300"
                      )}
                    >
                      <p className="font-bold text-xs">{eng.label}</p>
                      <p className={cn("text-[0.65rem] mt-0.5", english === eng.id ? "text-[#F5D365]" : "text-slate-500")}>
                        {eng.badge}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Target Country */}
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#090C10] text-[#F5D365] text-xs font-bold">3</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800">Preferred Study Destination:</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {destinationPreferences.map((dest) => (
                    <button
                      key={dest.id}
                      type="button"
                      onClick={() => setDestination(dest.id)}
                      className={cn(
                        "rounded-2xl p-3 text-center transition-all border cursor-pointer",
                        destination === dest.id
                          ? "bg-[#090C10] text-[#F5D365] border-[#D4AF37] shadow-md"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300"
                      )}
                    >
                      <span className="text-2xl block mb-1">{dest.flag}</span>
                      <p className="font-bold text-xs text-slate-900" style={{ color: destination === dest.id ? "#F5D365" : undefined }}>
                        {dest.name.split(" ")[0]}
                      </p>
                      <p className="text-[0.62rem] text-slate-500 mt-0.5 line-clamp-1">{dest.tag}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Live Computed Result Card */}
            <div className="rounded-3xl bg-gradient-to-b from-[#090C10] to-[#121824] p-6 sm:p-7 text-white border border-[#D4AF37]/35 shadow-2xl relative overflow-hidden">
              {/* Subtle ambient gold shine */}
              <div className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-[#D4AF37]/15 blur-2xl" />

              {/* Match Score Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold tracking-wider uppercase text-[#F5D365]">Live Matched Pathway</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-2.5 py-0.5 text-xs font-extrabold text-emerald-400">
                  <span>{match.matchScore}% Match</span>
                </div>
              </div>

              {/* Headline */}
              <div className="mt-4">
                <h3 className="font-display text-xl font-bold text-white">
                  {match.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  {match.headline}
                </p>
              </div>

              {/* Match Chips */}
              <div className="mt-5 space-y-2.5 text-xs">
                <div className="flex items-center justify-between rounded-xl bg-white/5 p-2.5 border border-white/10">
                  <span className="text-slate-400">Visa Processing:</span>
                  <span className="font-bold text-emerald-400">{match.timeline}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white/5 p-2.5 border border-white/10">
                  <span className="text-slate-400">Scholarship Chance:</span>
                  <span className="font-bold text-[#F5D365]">{match.scholarship}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white/5 p-2.5 border border-white/10">
                  <span className="text-slate-400">Admission Mode:</span>
                  <span className="font-bold text-white">{match.moiAccepted}</span>
                </div>
              </div>

              {/* Note */}
              <p className="text-[0.72rem] text-slate-400 mt-4 leading-relaxed italic border-t border-white/10 pt-3">
                💡 {match.partnerNote}
              </p>

              {/* Instant 1-Click Action */}
              <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={() => open()}
                  className="flex-1 rounded-full bg-gradient-to-r from-[#E5B842] to-[#B38827] text-[#090C10] font-extrabold py-3 text-xs text-center shadow-lg hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Claim Free Assessment for This Path</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/8801805041710?text=${encodeURIComponent(`Hello Future Edge! I ran the Visa Pathfinder for ${match.title} (${eduLevel}, ${english}). I want to book a free counseling session.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-4 text-xs text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <IconWhatsApp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
