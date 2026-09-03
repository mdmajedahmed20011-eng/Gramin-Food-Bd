import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { OfficeGallery } from "@/components/office-gallery";
import { Testimonials } from "@/components/testimonials";
import { InteractiveMatcher } from "@/components/interactive-matcher";
import {
  CtaBand,
  RegisterButton,
  SectionHeading,
  StatsStrip,
  FaqList,
  UniversityMarquee,
  IconGraduationCap,
  IconHeadphones,
  IconMic,
  IconSparkles,
  IconGlobe,
  IconCheck,
  IconArrowRight,
  IconPhone,
  IconWhatsApp,
} from "@/components/ui-blocks";
import {
  company,
  destinations,
  faqs,
  services,
  liveOffers,
  processSteps,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Affordable International | IELTS, Mock Test & Study Abroad | Maijdee, Noakhali" },
      {
        name: "description",
        content:
          "Affordable International — Authorized IDP & British Council Registration Point & Mock Test Venue in Maijdee Court, Noakhali. IELTS Coaching, Spoken English, Kids English & 100% Free Study Abroad Counseling. Call 01736-493995.",
      },
      { property: "og:title", content: "Affordable International | IELTS & Study Abroad Maijdee" },
      {
        property: "og:description",
        content:
          "Explore More, Spend Less. Official British Council & IDP registration point, IELTS coaching with ৳2,000 cashback, audio mock center, Spoken & Kids English, and study abroad counseling for UK, USA, Canada, Australia, Korea, and Europe.",
      },
    ],
  }),
  component: Home,
});

const heroMediaTabs = [
  {
    id: "banner",
    label: "Billboard Banner",
    badge: "Official Billboard",
    image: "/assets/affordable-banner.jpg",
    title: "Explore Your Global Future",
    desc: "Study in UK, USA, Canada, Australia, Korea, Malaysia, and Europe.",
  },
  {
    id: "venue",
    label: "IELTS Mock Venue",
    badge: "British Council Venue",
    image: "/assets/ielts-orientation-poster.jpg",
    title: "Authorized Mock Test Hall",
    desc: "Individual acoustic headphones and real test-day environment.",
  },
  {
    id: "kids",
    label: "Kids English Class",
    badge: "Junior Fluency",
    image: "/assets/kids-class-1.jpg",
    title: "Kids & Junior Spoken English",
    desc: "Joyful phonics, vocabulary games, and natural conversation.",
  },
  {
    id: "team",
    label: "Faculty Mentors",
    badge: "Expert Mentors",
    image: "/assets/team-instructors.jpg",
    title: "Dedicated Academic Instructors",
    desc: "Certified trainers supporting IELTS candidates and visa applicants.",
  },
];

const serviceIconMap: Record<string, typeof IconGraduationCap> = {
  ielts: IconGraduationCap,
  "mock-test": IconHeadphones,
  spoken: IconMic,
  kids: IconSparkles,
  "study-abroad": IconGlobe,
  admissions: IconGlobe,
};

function Home() {
  const [activeMediaTab, setActiveMediaTab] = useState(0);
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [activeRegion, setActiveRegion] = useState<string>("All");

  const regions = ["All", "Europe", "North America", "East Asia", "Southeast Asia", "Oceania"];

  const filteredDestinations =
    activeRegion === "All"
      ? destinations
      : destinations.filter(
          (d) =>
            d.region === activeRegion ||
            (activeRegion === "Europe" && d.region.includes("Europe")),
        );

  const currentMedia = heroMediaTabs[activeMediaTab];
  const currentService = services[activeServiceTab];
  const CurrentServiceIcon = serviceIconMap[currentService.slug] || IconGraduationCap;

  return (
    <>
      {/* 1. Ultra-Clean Executive Hero Section */}
      <section className="relative overflow-hidden bg-[#FAFAFC] border-b border-slate-200/80 pt-12 pb-16 sm:pt-18 sm:pb-24">
        {/* Soft Ambient Floating Glows */}
        <div className="pointer-events-none absolute -left-28 -top-20 h-[500px] w-[500px] rounded-full bg-rose-500/8 blur-[120px] animate-float-slow" />
        <div className="pointer-events-none absolute right-0 top-1/4 h-[460px] w-[460px] rounded-full bg-sky-500/8 blur-[120px]" />

        <div className="section-shell relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* Left Column: Authoritative Messaging & Unified Hierarchy */}
            <div className="space-y-6">
              {/* Single Refined Venue Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50/80 px-4 py-1.5 text-xs font-bold text-[#E11D48]">
                <span className="flex h-2 w-2 rounded-full bg-[#E11D48] animate-ping" />
                <span>Authorized IDP & British Council Registration Point & Mock Venue</span>
              </div>

              {/* High-Contrast Editorial Headline */}
              <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Elevate Your English. <br />
                <span className="text-[#E11D48]">Reach Global Universities.</span>
              </h1>

              {/* Slogan & Location Line */}
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold">
                <span className="rounded-full bg-[#0A192F] px-3.5 py-1 text-white shadow-sm font-bold">
                  "{company.slogan}"
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-700">
                  Ashfak Plaza (4th Floor), Maijdee Bazar, Noakhali
                </span>
              </div>

              {/* Spacious Body Text */}
              <p className="max-w-xl text-sm sm:text-base leading-relaxed text-slate-600">
                Noakhali's premier educational institute for authentic IELTS coaching, official mock test hall with individual acoustic headphones, conversational Spoken English, joyful Kids English, and 100% free study abroad counseling.
              </p>

              {/* Unified CTA Hierarchy */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <RegisterButton
                  label="Book Free Consultation / Mock Test"
                  className="px-8 py-4 text-sm font-bold shadow-lg"
                />
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Hello Affordable International! I want to inquire about your courses and study abroad counseling.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-luxury-secondary text-sm font-bold shadow-sm"
                >
                  <IconWhatsApp className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp 01736-493995</span>
                </a>
              </div>

              {/* Clean Integrated Divider Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 text-xs font-bold text-slate-800">
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Free File</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>৳২,০০০ Cashback</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Headphone Hall</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>British Council Venue</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Media Showcase Card */}
            <div className="relative">
              <div className="card-luxury p-3 sm:p-4 shadow-xl">
                {/* Switcher Tab Pills */}
                <div className="flex gap-1.5 overflow-x-auto pb-2 mb-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {heroMediaTabs.map((tab, idx) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveMediaTab(idx)}
                      className={cn(
                        "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all whitespace-nowrap cursor-pointer",
                        activeMediaTab === idx
                          ? "bg-[#0A192F] text-white shadow-sm"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200",
                      )}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Display Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-950 shadow-inner">
                  <img
                    key={currentMedia.id}
                    src={currentMedia.image}
                    alt={currentMedia.title}
                    width={1000}
                    height={625}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />

                  {/* Badges on Image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="rounded-full bg-slate-950/85 px-3 py-1 font-bold text-sky-300 backdrop-blur-md border border-white/20">
                      {currentMedia.badge}
                    </span>
                    <span className="rounded-full bg-emerald-600 px-3 py-1 font-bold text-white shadow-sm">
                      Verified
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <p className="font-display text-base font-bold leading-tight">
                      {currentMedia.title}
                    </p>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                      {currentMedia.desc}
                    </p>
                  </div>
                </div>

                {/* Direct Hotlines Strip */}
                <div className="mt-3.5 rounded-2xl bg-slate-50 p-3.5 border border-slate-200/80">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-slate-800">Direct Desk (মাইজদী বাজার):</span>
                    <span className="text-slate-500 font-medium">Ashfak Plaza (4th Floor)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {company.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:+880${p.replace(/[^0-9]/g, "").slice(-10)}`}
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white py-2 font-bold text-slate-800 hover:border-[#E11D48] hover:text-[#E11D48] transition-colors shadow-sm"
                      >
                        <IconPhone className="w-3.5 h-3.5 text-slate-500" />
                        <span>{p}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Global University & Testing Authority Marquee */}
      <UniversityMarquee />

      {/* 3. Live ৳2,000 IELTS Cashback Card */}
      <section className="section-shell py-8 sm:py-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#030712] via-[#0A192F] to-[#030712] text-white p-6 sm:p-10 border border-slate-800 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/20 border border-rose-500/30 px-3.5 py-1 text-xs font-bold text-rose-300">
                <IconSparkles className="w-3.5 h-3.5" />
                <span>Active IELTS Promotion · Official British Council & IDP Venue</span>
              </div>
              <h2 className="font-display text-xl sm:text-3xl font-extrabold tracking-tight text-white">
                Register for IELTS Exam & Get Instant ৳২,০০০ Cashback + ২ Free Mock Tests!
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Book your official British Council or IDP IELTS exam date directly from our Ashfak Plaza office. Includes 2 full mock tests in our headphone-equipped hall, plus 100% free study abroad counseling and visa file assistance.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/offers"
                className="btn-luxury-primary text-xs py-3 px-6 shadow-md"
              >
                <span>View Full Offer Details</span>
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Verified Metrics Bar */}
      <section className="section-shell py-8 sm:py-12">
        <StatsStrip />
      </section>

      {/* 5. Core Educational Programs (Interactive Executive View) */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
        <SectionHeading
          eyebrow="Academic Programs"
          title="Designed for Language Mastery & Global Acceptance"
          subtitle="Explore our certified IELTS coaching, acoustic mock test center, conversational English, kids junior program, and foreign university admissions."
        />

        {/* Tab Selector Segmented Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {services.map((s, idx) => {
            const TabIcon = serviceIconMap[s.slug] || IconGraduationCap;
            return (
              <button
                key={s.slug}
                type="button"
                onClick={() => setActiveServiceTab(idx)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all cursor-pointer",
                  activeServiceTab === idx
                    ? "bg-[#0A192F] text-white shadow-md ring-2 ring-slate-900/10"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100",
                )}
              >
                <TabIcon className="w-4 h-4" />
                <span>{s.title.split(" ")[0]} {s.title.split(" ")[1] || ""}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Program Showcase Card */}
        <div className="mt-8 card-luxury p-6 sm:p-10 border border-slate-200">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-[#E11D48] shadow-sm border border-rose-100">
                  <CurrentServiceIcon className="w-6 h-6" />
                </span>
                <div>
                  <span className="badge-clean badge-red text-[0.68rem]">
                    {currentService.highlightBadge || "Certified Program"}
                  </span>
                  <span className="ml-2 text-xs font-bold text-slate-500">
                    ⏱ {currentService.timeline}
                  </span>
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                {currentService.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                {currentService.summary}
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5 border border-slate-200 space-y-2">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Program Highlights & Outcomes:
                </p>
                <div className="grid gap-2 sm:grid-cols-2 pt-1">
                  {currentService.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <IconCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <RegisterButton
                  label={`Enroll for ${currentService.title.split(" ")[0]}`}
                  className="px-7 py-3 text-xs font-bold"
                />
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hello Affordable International! I want to enroll in ${currentService.title}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-luxury-secondary px-6 py-3 text-xs font-bold shadow-sm"
                >
                  <IconWhatsApp className="w-4 h-4 text-emerald-600" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Card Summary Box */}
            <div className="rounded-3xl bg-[#0A192F] p-7 text-white space-y-4 shadow-xl border border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-sky-400">
                  Official Facility
                </span>
                <span className="text-xs font-semibold text-slate-300">
                  Ashfak Plaza, Maijdee Bazar
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-200 leading-relaxed">
                "{currentService.guarantee}"
              </p>
              <div className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex justify-between">
                  <span>Batch Schedule:</span>
                  <span className="font-bold text-white">Morning & Evening Batches</span>
                </div>
                <div className="flex justify-between">
                  <span>Venue:</span>
                  <span className="font-bold text-white">Ashfak Plaza (Level 4)</span>
                </div>
                <div className="flex justify-between">
                  <span>Evaluation:</span>
                  <span className="font-bold text-emerald-400">1-on-1 Feedback Included</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/services"
                  className="flex items-center justify-center gap-2 w-full text-center rounded-2xl bg-white/10 hover:bg-white/20 py-2.5 text-xs font-bold text-white transition-colors"
                >
                  <span>View All Course Syllabi</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Interactive Eligibility Calculator */}
      <section className="section-shell py-14 sm:py-20">
        <InteractiveMatcher />
      </section>

      {/* 7. Study Abroad Destinations Section */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
        <SectionHeading
          eyebrow="Global Education Network"
          title="Where Would You Like to Study?"
          subtitle="Explore world-renowned university destinations across the UK, USA, Canada, Australia, South Korea, Malaysia, and Europe."
        />

        {/* Region Filter Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {regions.map((reg) => (
            <button
              key={reg}
              type="button"
              onClick={() => setActiveRegion(reg)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer",
                activeRegion === reg
                  ? "bg-[#0A192F] text-white shadow-md"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100",
              )}
            >
              {reg}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((d) => (
            <article
              key={d.slug}
              className="card-luxury p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-3xl">{d.flag}</span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900">
                        {d.name}
                      </h3>
                      <span className="text-[0.68rem] font-semibold text-slate-500">
                        {d.region}
                      </span>
                    </div>
                  </div>
                  <span className="rounded-full bg-rose-50 border border-rose-200 px-2.5 py-0.5 text-[0.65rem] font-bold text-[#E11D48]">
                    {d.pswv}
                  </span>
                </div>

                <p className="mt-3.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {d.intro}
                </p>

                <div className="mt-4 rounded-2xl bg-slate-50 p-4 border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Avg Tuition:</span>
                    <span className="font-bold text-slate-900">{d.avgTuition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Intakes:</span>
                    <span className="font-bold text-slate-900">{d.intakes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Scholarship:</span>
                    <span className="font-bold text-amber-700">{d.scholarships}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                {d.withoutIelts ? (
                  <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[0.62rem] font-bold text-emerald-700">
                    MOI / Without IELTS
                  </span>
                ) : (
                  <span className="text-[0.65rem] text-slate-500 font-medium">
                    IELTS Required
                  </span>
                )}
                <Link
                  to="/study-in-{$country}"
                  params={{ country: d.slug }}
                  className="flex items-center gap-1 text-xs font-bold text-[#00AEEF] hover:underline"
                >
                  <span>View Guide</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 8. Connected 6-Step Roadmap */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
        <SectionHeading
          eyebrow="Milestone Roadmap"
          title="From Consultation to Arrival Abroad"
          subtitle="A structured, transparent pathway with complete guidance at every milestone."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="card-luxury p-6 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-3xl font-black text-slate-200">
                  {step.step}
                </span>
                <span className="badge-clean badge-red">
                  {step.badge}
                </span>
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Authentic Campus, Classroom & Event Gallery */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
        <SectionHeading
          eyebrow="Inside Affordable International"
          title="Our Maijdee Campus & Active Learning"
          subtitle="Take a look at our IELTS mock test center, classroom speaking sessions, kids English activities, and campus outreach."
        />
        <div className="mt-10">
          <OfficeGallery />
        </div>
      </section>

      {/* 10. Student & Parent Testimonials */}
      <Testimonials />

      {/* 11. FAQ Section */}
      <section className="section-shell py-14 sm:py-20">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Common questions from students and guardians regarding our IELTS coaching, mock tests, fee structures, and study abroad counseling in Maijdee."
        />
        <div className="mt-10 max-w-3xl mx-auto">
          <FaqList items={faqs} />
        </div>
      </section>

      {/* 12. Final Luxury Pre-Footer */}
      <CtaBand />
    </>
  );
}
