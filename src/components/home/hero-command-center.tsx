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
    country: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    slogan: "World-class Russell Group universities, 1-year Master's, 2-Year Post-Study Work Visa, and direct local support from our London branch.",
    perks: ["100% Free Processing", "Russell Group Representation", "Direct London Arrival Care", "Scholarships up to £4,000"],
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85",
    uniCount: "150+ Universities",
    intakes: "Jan & Sep 2026 Intakes Open",
    slug: "uk",
  },
  {
    country: "Canada",
    code: "CA",
    flag: "🇨🇦",
    slogan: "Top public Designated Learning Institutions (DLIs), paid co-op internships, and up to 3-year Post-Graduation Work Permits (PGWP).",
    perks: ["Direct DLI Admissions", "Paid Co-Op Internships", "Up to 3-Year PGWP", "Spouse Work Permit Eligible"],
    image: "https://images.unsplash.com/photo-1517935703635-2717090c2210?auto=format&fit=crop&w=1400&q=85",
    uniCount: "80+ DLIs & Universities",
    intakes: "Jan, May & Sep 2026 Open",
    slug: "canada",
  },
  {
    country: "Australia",
    code: "AU",
    flag: "🇦🇺",
    slogan: "World-ranking universities, lucrative student work rights, vibrant multicultural cities, and attractive regional migration pathways.",
    perks: ["Go8 & Top Universities", "High Student Hourly Wages", "Subclass 500 Fast-Track", "Regional PR Pathways"],
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1400&q=85",
    uniCount: "45+ Universities",
    intakes: "Feb & Jul 2026 Open",
    slug: "australia",
  },
  {
    country: "Cyprus (Europe)",
    code: "CY",
    flag: "🇨🇾",
    slogan: "Affordable European higher education with 100% English-medium curricula, flexible entry criteria, and a high visa issuance ratio.",
    perks: ["Low Tuition (€3,000–€5,000)", "High Visa Grant Ratio", "100% English-Medium Degrees", "No Blocked Account Required"],
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=85",
    uniCount: "25+ Universities",
    intakes: "Feb & Oct 2026 Open",
    slug: "cyprus",
  },
  {
    country: "Germany",
    code: "DE",
    flag: "🇩🇪",
    slogan: "Tuition-free public universities, world-leading research in engineering and IT, and an 18-month post-study jobseeker residence permit.",
    perks: ["Tuition-Free Public Higher Ed", "English-Taught Master's", "18-Month Jobseeker Permit", "Top Engineering Hub of Europe"],
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1400&q=85",
    uniCount: "70+ Public Universities",
    intakes: "Summer & Winter 2026 Open",
    slug: "germany",
  },
  {
    country: "Finland",
    code: "FI",
    flag: "🇫🇮",
    slogan: "The world's happiest country offering high-tech innovation, generous student work benefits, and clear family relocation policies.",
    perks: ["World #1 Education Standard", "Post-Study Residence Rights", "Family Relocation Permitted", "Thriving Tech & Clean Energy Sector"],
    image: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&w=1400&q=85",
    uniCount: "35+ Universities",
    intakes: "Autumn 2026 Open",
    slug: "finland",
  },
  {
    country: "USA",
    code: "US",
    flag: "🇺🇸",
    slogan: "Home to Ivy League and Tier-1 research institutions, 3-year STEM OPT extensions, and life-changing global networking opportunities.",
    perks: ["Tier-1 Global Institutions", "3-Year STEM OPT Extension", "1-on-1 Visa Mock Preparation", "Merit-Based Scholarships"],
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1400&q=85",
    uniCount: "120+ Universities",
    intakes: "Spring & Fall 2026 Open",
    slug: "usa",
  },
];

const liveSuccessToasts = [
  { student: "Ahmed", action: "enrolled at University of Birmingham", countryCode: "GB", flag: "🇬🇧", time: "8 minutes ago" },
  { student: "Nadia", action: "granted Study Permit for Canada", countryCode: "CA", flag: "🇨🇦", time: "14 minutes ago" },
  { student: "Tanvir", action: "accepted at University of Melbourne", countryCode: "AU", flag: "🇦🇺", time: "22 minutes ago" },
  { student: "Sadia", action: "received Visa for Cyprus", countryCode: "CY", flag: "🇨🇾", time: "35 minutes ago" },
  { student: "Farhan", action: "admitted to TU Munich, Germany", countryCode: "DE", flag: "🇩🇪", time: "42 minutes ago" },
  { student: "Raihan", action: "admitted to Aalto University, Finland", countryCode: "FI", flag: "🇫🇮", time: "50 minutes ago" },
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

  const slide = heroSlides[currentSlide];
  const activeToast = liveSuccessToasts[toastIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F5FC]/60 via-[#FAFAFC] to-[#FAFAFC] pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-200/80">
      {/* Subtle Ambient Backdrop Glows */}
      <div className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-red-500/8 blur-[130px]" />

      <div className="section-shell relative z-10">
        {/* Main 2-Column Hero Showcase */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center min-h-[500px]">
          {/* Left Column: DSA-Style Editorial Text Hierarchy (Slides in from Left) */}
          <SlideIn direction="left" distance={45} className="space-y-6">
            {/* Top Brand Over-Title */}
            <div className="flex items-center gap-2">
              <span className="text-[0.72rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#043E8B]">
                — ALEX GLOBAL CONSULTANCY · DHAKA & LONDON —
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
              {/* Red Accent Bar */}
              <div className="h-1.5 w-24 bg-gradient-to-r from-red-600 to-transparent rounded-full mt-3 mb-4" />
            </div>

            {/* Live Applications Intake Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-1.5 text-xs font-bold text-[#043E8B] shadow-xs">
              <span className="beacon-dot">
                <span className="beacon-ping bg-blue-500" />
                <span className="beacon-core bg-[#043E8B]" />
              </span>
              <span>Applications Open Now · {slide.intakes}</span>
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
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-slate-200/80 px-3 py-1.5 text-[0.73rem] sm:text-xs font-semibold text-slate-700 shadow-xs hover:border-red-300 transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                  <span>{perk}</span>
                </span>
              ))}
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={open}
                className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 text-xs sm:text-sm font-bold shadow-lg hover:shadow-red-600/30 transition-all cursor-pointer active:scale-95"
              >
                <span>Start Your Journey</span>
                <IconArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:01886913391"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 px-5 py-3.5 text-xs sm:text-sm font-bold transition-all shadow-xs active:scale-95"
              >
                <IconPhone className="w-3.5 h-3.5 text-red-600" />
                <span>Or Call: 01886 91 33 91</span>
              </a>
            </div>

            {/* Social Trust Line */}
            <div className="pt-2 text-xs text-slate-500 font-medium">
              Join 2,500+ successful students.{" "}
              <button
                type="button"
                onClick={open}
                className="text-red-600 font-bold hover:underline cursor-pointer inline-flex items-center gap-1"
              >
                <span>Get Free Consultation</span>
                <span>→</span>
              </button>
            </div>
          </SlideIn>

          {/* Right Column: Large Rounded Photography Card & Country Badge (Slides in from Right) */}
          <SlideIn direction="right" distance={45} className="relative">
            <div className="relative overflow-hidden rounded-[2.2rem] sm:rounded-[2.8rem] shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] bg-slate-100 group">
              {/* Scenic Destination Photography */}
              <img
                key={slide.country}
                src={slide.image}
                alt={`Study in ${slide.country} - Alex Global Consultancy`}
                className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                loading="eager"
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
                      ? "w-8 bg-red-600"
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
