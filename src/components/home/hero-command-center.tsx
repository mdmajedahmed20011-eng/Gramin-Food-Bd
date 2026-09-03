import { useState, useEffect } from "react";
import { company } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconWhatsApp, IconArrowRight, IconSparkles, IconCheck, IconPhone } from "@/components/ui-blocks";
import { cn } from "@/lib/utils";

const liveVisaUpdates = [
  { flag: "🇬🇧", country: "United Kingdom", desc: "Tier 4 Visa Granted in 4 Days", uni: "Buckinghamshire New University (BNU)", tag: "MOI Accepted" },
  { flag: "🇦🇺", country: "Australia", desc: "Master of IT Offer Issued", uni: "Deakin University", tag: "30% Scholarship" },
  { flag: "🇩🇪", country: "Germany / Europe", desc: "Zero Tuition Admission Approved", uni: "University of Debrecen", tag: "Without IELTS" },
  { flag: "🇨🇦", country: "Canada", desc: "Study Permit & 3-Yr PGWP Path", uni: "Seneca Polytechnic", tag: "Fast Vetted" },
];

const heroVisuals = [
  {
    id: "bnu",
    label: "BNU Partner Session",
    tag: "Official Delegation",
    image: "/brand-assets/772204691_122282788340103184_9204887386025201573_n.jpg",
    title: "Direct Delegation with Ms. Ayesha Rauf",
    highlight: "Spot Evaluations · Partner University UK",
  },
  {
    id: "banner",
    label: "Global Admissions",
    tag: "Official Network",
    image: "/brand-assets/banner.jpg",
    title: "Fulfill Your Study Abroad Dream With Us",
    highlight: "UK, Australia, Europe, Canada, USA & Malaysia",
  },
  {
    id: "counselors",
    label: "Counseling Desk",
    tag: "Khan Tower, Dhaka",
    image: "/brand-assets/766952914_122282362520103184_2941471200207168176_n.jpg",
    title: "Lead Advisors: Moshiur & Tanvir",
    highlight: "100% Free File Opening · Transparent Guidance",
  },
  {
    id: "award",
    label: "Conference Award",
    tag: "LURS 2026 Honor",
    image: "/brand-assets/768667718_122282362400103184_8409750641330812941_n.jpg",
    title: "Research Recognition on Stage",
    highlight: "Honored by Chief Guest Dr. Syed Ragib Ali",
  },
];

const destinationShortcuts = [
  { id: "uk", name: "United Kingdom", flag: "🇬🇧", perk: "3-5 Day Visa · MOI" },
  { id: "aus", name: "Australia", flag: "🇦🇺", perk: "Up to 30% Schol." },
  { id: "eu", name: "Europe (Schengen)", flag: "🇪🇺", perk: "Zero Tuition" },
  { id: "can", name: "Canada", flag: "🇨🇦", perk: "3-Yr PGWP Co-Op" },
  { id: "usa", name: "United States", flag: "🇺🇸", perk: "STEM OPT Career" },
];

export function HeroCommandCenter() {
  const { open } = useRegisterModal();
  const [tickerIndex, setTickerIndex] = useState(0);
  const [activeVisual, setActiveVisual] = useState(0);
  const [selectedDestination, setSelectedDestination] = useState(0);

  // Auto cycle the live visa feed smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % liveVisaUpdates.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentUpdate = liveVisaUpdates[tickerIndex];
  const activeMedia = heroVisuals[activeVisual];

  return (
    <section className="relative overflow-hidden bg-[#FAFAFC] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80">
      {/* Cinematic Ambient Glow Orbs */}
      <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-[#D4AF37]/15 blur-[100px] animate-float-slow" />
      <div className="pointer-events-none absolute right-0 top-12 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="section-shell relative z-10">
        {/* Top: Live Pulsing Visa Acceptance Radar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-slate-800 shadow-xs backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-bold text-slate-900">Live Visa Feed:</span>
            <span className="text-slate-600">
              {currentUpdate.flag} {currentUpdate.country} — <strong className="text-slate-900">{currentUpdate.desc}</strong> ({currentUpdate.uni})
            </span>
            <span className="hidden sm:inline-flex rounded-full bg-emerald-50 px-2 py-0.5 text-[0.65rem] font-bold text-emerald-700 border border-emerald-200">
              {currentUpdate.tag}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            <span>285K+ Verified Followers</span>
            <span className="text-slate-300">·</span>
            <span>Khan Tower, Dhaka</span>
          </div>
        </div>

        {/* Main 2-Column Hero Grid */}
        <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          {/* Left Column: Bold Editorial Positioning */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#FCF8EE] px-4 py-1.5 text-xs font-extrabold text-[#8A6818]">
              <IconSparkles className="w-3.5 h-3.5 text-[#AA771C]" />
              <span>Future Edge Education · Fast-Track Global Admissions</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.08]">
              Where Ambition Meets{" "}
              <span className="relative inline-block text-[#AA771C]">
                Global Acceptance
                <svg className="absolute -bottom-2 left-0 w-full text-[#D4AF37]/40 h-2.5" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 12, 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="max-w-xl text-base sm:text-lg font-medium text-slate-600 leading-relaxed">
              Experience transparent, zero-file-fee study abroad guidance. Connect with senior advisors Moshiur & Tanvir for proven 3 to 5-day UK visa processing, MOI pathways without IELTS, and scholarship access.
            </p>

            {/* Interactive Destination Selector Chips */}
            <div className="pt-1">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Explore Direct Pathways:
              </p>
              <div className="flex flex-wrap gap-2">
                {destinationShortcuts.map((dest, idx) => (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => setSelectedDestination(idx)}
                    className={cn(
                      "flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer",
                      selectedDestination === idx
                        ? "bg-[#090C10] text-[#F5D365] shadow-sm border border-[#D4AF37]"
                        : "bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                    )}
                  >
                    <span>{dest.flag}</span>
                    <span>{dest.name}</span>
                    <span className="hidden sm:inline text-[0.65rem] opacity-75 font-normal">({dest.perk})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dual CTA Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => open()}
                className="group btn-luxury-primary text-sm font-extrabold px-8 py-3.5 shadow-lg cursor-pointer"
              >
                <span>Book Free Profile Evaluation</span>
                <span className="btn-nested-icon">
                  <IconArrowRight className="w-3.5 h-3.5 text-[#090C10]" />
                </span>
              </button>

              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Future Edge! I want to check my eligibility for study abroad.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-secondary text-sm font-bold shadow-xs hover:border-[#D4AF37]"
              >
                <IconWhatsApp className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Advisor</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/80 text-xs font-bold text-slate-800">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>100% Free File Opening</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>3-5 Day UK Visa Record</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span>Without IELTS (MOI)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Holographic Digital Visa Card & Authentic Visual Reel */}
          <div className="relative">
            {/* Double-Bezel Hardware Architecture */}
            <div className="outer-bezel">
              <div className="inner-bezel p-4 sm:p-5 relative overflow-hidden bg-slate-900 text-white shadow-xl">
                {/* Visual Switcher Pills */}
                <div className="flex gap-1.5 overflow-x-auto pb-3 mb-3 border-b border-white/10 [scrollbar-width:none]">
                  {heroVisuals.map((vis, idx) => (
                    <button
                      key={vis.id}
                      type="button"
                      onClick={() => setActiveVisual(idx)}
                      className={cn(
                        "rounded-full px-3 py-1 text-xs font-bold transition-all whitespace-nowrap cursor-pointer",
                        activeVisual === idx
                          ? "bg-[#F5D365] text-[#090C10] shadow-sm font-extrabold"
                          : "bg-white/10 text-slate-300 hover:bg-white/20"
                      )}
                    >
                      {vis.label}
                    </button>
                  ))}
                </div>

                {/* Main Visual Image Window */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black shadow-inner">
                  <img
                    key={activeMedia.id}
                    src={activeMedia.image}
                    alt={activeMedia.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Holographic Verification Chips on Image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="glass-pill rounded-full px-3 py-1 text-[0.68rem] font-bold">
                      {activeMedia.tag}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/90 text-white px-3 py-1 text-[0.68rem] font-bold shadow-sm backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      <span>Verified Evidence</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-display text-base sm:text-lg font-bold text-white drop-shadow-sm">
                      {activeMedia.title}
                    </h3>
                    <p className="text-xs text-[#F5D365] font-semibold mt-0.5">
                      {activeMedia.highlight}
                    </p>
                  </div>
                </div>

                {/* Digital Visa Hologram Passport Strip */}
                <div className="mt-4 rounded-2xl bg-white/5 p-3.5 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-base">🎓</span>
                      <span className="font-bold text-white">Direct Counseling Desk</span>
                    </div>
                    <span className="text-[#F5D365] font-semibold">Khan Tower, 359 DIT Road</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2.5 text-xs">
                    <a
                      href="tel:+8801805041710"
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-white/10 py-2 font-bold text-white hover:bg-white/20 transition-colors"
                    >
                      <IconPhone className="w-3.5 h-3.5 text-[#F5D365]" />
                      <span>01805-041710</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => open()}
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-[#D4AF37] py-2 font-extrabold text-[#090C10] hover:bg-[#F5D365] transition-colors cursor-pointer"
                    >
                      <span>Get Free Assessment</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
