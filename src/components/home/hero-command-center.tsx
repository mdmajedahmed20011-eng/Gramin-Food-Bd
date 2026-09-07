import { useState, useEffect } from "react";
import { company } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { IconArrowRight, IconPhone } from "@/components/ui-blocks";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { SlideIn } from "@/components/motion-wrapper";

interface SlideData {
  country: string;
  code: string;
  flag: string;
  slogan: string;
  perks: string[];
  image: string;
  uniCount: string;
  intakes: string;
  slug: string;
}

const heroSlides: SlideData[] = [
  {
    country: "Italy",
    code: "IT",
    flag: "🇮🇹",
    slogan: "Study at prestigious public universities including University of Padova with English-taught Bachelor's & Master's, up to 100% tuition waivers, and regional DSU scholarships.",
    perks: ["Padova & Top Public Unis", "DSU Scholarship Guidance", "100% English-Taught Programs", "Universitaly Portal Assistance"],
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=85",
    uniCount: "30+ Public Universities",
    intakes: "2026/2027 Intakes Open",
    slug: "italy",
  },
  {
    country: "Sweden & Finland",
    code: "SE",
    flag: "🇸🇪",
    slogan: "Experience world-leading Nordic innovation, tuition waivers for high-achievers, generous post-study residence permits, and vibrant tech research opportunities.",
    perks: ["World #1 Innovation Hubs", "Post-Study Residence Rights", "Family Relocation Friendly", "English-Taught Master's"],
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1400&q=85",
    uniCount: "40+ Nordic Universities",
    intakes: "Autumn 2026 Admissions Open",
    slug: "sweden",
  },
  {
    country: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    slogan: "Top-ranking UK institutions with 1-year fast-track Master's, 2-Year Post-Study Work (PSW) visas, and specialized British Council certified application guidance.",
    perks: ["British Council Certified", "1-Year Master's Programs", "2-Year PSW Rights", "Merit Scholarships up to £4,000"],
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85",
    uniCount: "120+ Universities",
    intakes: "Jan & Sep 2026 Intakes Open",
    slug: "uk",
  },
  {
    country: "Canada",
    code: "CA",
    flag: "🇨🇦",
    slogan: "Top public Designated Learning Institutions (DLIs), career-accelerating paid co-op internships, and up to 3-year Post-Graduation Work Permits (PGWP).",
    perks: ["Direct DLI Admissions", "Paid Co-Op Internships", "Up to 3-Year PGWP", "Spouse Work Permit Eligible"],
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1400&q=85",
    uniCount: "80+ DLIs & Universities",
    intakes: "Jan, May & Sep 2026 Open",
    slug: "canada",
  },
  {
    country: "USA",
    code: "US",
    flag: "🇺🇸",
    slogan: "Tier-1 research institutions, 3-year STEM OPT extensions, generous university assistantships, and rigorous 1-on-1 embassy visa mock interviews.",
    perks: ["Tier-1 Global Campuses", "3-Year STEM OPT Extension", "1-on-1 Visa Mock Preparation", "Direct I-20 Processing"],
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1400&q=85",
    uniCount: "100+ Universities",
    intakes: "Spring & Fall 2026 Open",
    slug: "usa",
  },
  {
    country: "Malaysia",
    code: "MY",
    flag: "🇲🇾",
    slogan: "Globally recognized UK and Australian branch campuses in Malaysia with affordable tuition, simplified EMGS visa processing, and smooth international pathways.",
    perks: ["Affordable Living & Tuition", "Direct UK/Aus Degree Dual Awards", "Fast EMGS Approval", "Ideal for Credit Transfer"],
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1400&q=85",
    uniCount: "25+ Leading Campuses",
    intakes: "Multiple Intakes Throughout Year",
    slug: "malaysia",
  },
];

const liveSuccessToasts = [
  { student: "Tanvir A.", action: "visa granted for University of Padova", countryCode: "IT", flag: "🇮🇹", time: "6 minutes ago" },
  { student: "Sadia K.", action: "approved for Sweden Residence Permit", countryCode: "SE", flag: "🇸🇪", time: "12 minutes ago" },
  { student: "Fahim U.", action: "secured UK Visa with Scholarship", countryCode: "GB", flag: "🇬🇧", time: "20 minutes ago" },
  { student: "Rashed M.", action: "admitted to Finland UAS Master's", countryCode: "FI", flag: "🇫🇮", time: "31 minutes ago" },
  { student: "Marzia N.", action: "achieved IELTS Overall Band 7.5", countryCode: "BD", flag: "🌟", time: "45 minutes ago" },
];

export function HeroCommandCenter() {
  const { open } = useRegisterModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [toastIndex, setToastIndex] = useState(0);

  // Auto advance slide every 5.5 seconds
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(slideTimer);
  }, []);

  // Auto rotate toast every 4.5 seconds
  useEffect(() => {
    const toastTimer = setInterval(() => {
      setToastIndex((prev) => (prev + 1) % liveSuccessToasts.length);
    }, 4500);
    return () => clearInterval(toastTimer);
  }, []);

  const slide = heroSlides[currentSlide] ?? heroSlides[0];
  const activeToast = liveSuccessToasts[toastIndex] ?? liveSuccessToasts[0];
  if (!slide) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F5FC]/60 via-[#FAFAFC] to-[#FAFAFC] pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-200/80">
      {/* Subtle Ambient Backdrop Glows */}
      <div className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-amber-400/15 blur-[130px]" />

      <div className="section-shell relative z-10">
        {/* Main 2-Column Hero Showcase */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center min-h-[500px]">
          {/* Left Column */}
          <SlideIn direction="left" distance={45} className="space-y-6">
            {/* Top Brand Over-Title */}
            <div className="flex items-center gap-2">
              <span className="text-[0.72rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#0C2340]">
                — ACADEMIC ALLIES · ADVANCING EDUCATION · CHATTOGRAM —
              </span>
            </div>

            {/* Signature Editorial Serif Headline */}
            <div className="space-y-1">
              <p className="font-serif-editorial italic text-3xl sm:text-5xl lg:text-6xl text-slate-500 font-normal leading-tight">
                Study in
              </p>
              <h1 className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-none tracking-tight">
                {slide.country}
              </h1>
              {/* Gold Brand Accent Bar */}
              <div className="h-1.5 w-24 bg-gradient-to-r from-amber-500 via-amber-400 to-transparent rounded-full mt-3 mb-4" />
            </div>

            {/* Live Applications Intake Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-amber-50 border border-amber-300/80 px-4 py-1.5 text-xs font-bold text-amber-900 shadow-xs">
              <span className="beacon-dot">
                <span className="beacon-ping bg-amber-500" />
                <span className="beacon-core bg-amber-600" />
              </span>
              <span>Official 5-Step Europe Admissions · {slide.intakes}</span>
            </div>

            {/* Destination Description */}
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-xl">
              {slide.slogan}
            </p>

            {/* High Impact Perks Bullet Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {slide.perks.map((perk) => (
                <span
                  key={perk}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-slate-200/80 px-3 py-1.5 text-[0.73rem] sm:text-xs font-semibold text-slate-700 shadow-xs hover:border-amber-400 transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>{perk}</span>
                </span>
              ))}
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={open}
                className="btn-luxury-primary text-slate-950 px-7 py-3.5 text-xs sm:text-sm font-bold shadow-lg hover:shadow-amber-400/30 transition-all cursor-pointer active:scale-95"
              >
                <span>Start Your European Application</span>
                <IconArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${company.phones[0].replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 px-5 py-3.5 text-xs sm:text-sm font-bold transition-all shadow-xs active:scale-95"
              >
                <IconPhone className="w-3.5 h-3.5 text-amber-600" />
                <span>Call Hotline: {company.phones[0]}</span>
              </a>
            </div>

            {/* Social Trust Line */}
            <div className="pt-2 text-xs text-slate-500 font-medium">
              Trusted by 47,000+ followers & 100% recommended on Facebook.{" "}
              <button
                type="button"
                onClick={open}
                className="text-[#0C2340] font-bold hover:underline cursor-pointer inline-flex items-center gap-1"
              >
                <span>Get Free Profile Assessment</span>
                <span>→</span>
              </button>
            </div>
          </SlideIn>

          {/* Right Column */}
          <SlideIn direction="right" distance={45} className="relative">
            <div className="relative overflow-hidden rounded-[2.2rem] sm:rounded-[2.8rem] shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] bg-slate-100 group">
              {/* Scenic Destination Photography */}
              <img
                key={slide.country}
                src={slide.image}
                alt={`Study in ${slide.country} - Academic Allies`}
                className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src = "/assets/banner.jpg";
                }}
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

              {/* Floating Country Code Badge (Top-Right) */}
              <div className="absolute top-5 right-5 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-xl border border-white/80 text-center min-w-[78px] hover-lift">
                <div className="font-sans text-xl sm:text-2xl font-black text-slate-900 tracking-wider leading-none">
                  {slide.code}
                </div>
                <div className="text-[0.62rem] font-extrabold uppercase tracking-widest text-slate-500 mt-1">
                  {slide.country.split(" ")[0]}
                </div>
              </div>

              {/* Floating University Count Badge (Bottom-Left) */}
              <div className="absolute bottom-5 left-5 rounded-xl bg-black/60 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-white border border-white/20 flex items-center gap-2">
                <span>🎓</span>
                <span>{slide.uniCount}</span>
              </div>

              {/* Slider Arrow Controls (Bottom-Right) */}
              <div className="absolute bottom-5 right-5 flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous Slide"
                  onClick={() =>
                    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-slate-800 shadow-md hover:bg-white hover:scale-105 transition-all cursor-pointer font-bold active:scale-95"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next Slide"
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-slate-800 shadow-md hover:bg-white hover:scale-105 transition-all cursor-pointer font-bold active:scale-95"
                >
                  ›
                </button>
              </div>
            </div>

            {/* Slider Dots Indicator */}
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {heroSlides.map((s, idx) => (
                <button
                  key={s.country}
                  type="button"
                  aria-label={`Go to slide ${s.country}`}
                  onClick={() => setCurrentSlide(idx)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300 cursor-pointer",
                    currentSlide === idx
                      ? "w-8 bg-amber-500"
                      : "w-2 bg-slate-300 hover:bg-slate-400",
                  )}
                />
              ))}
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
