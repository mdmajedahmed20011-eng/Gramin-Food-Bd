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
  IconGlobe,
  IconCheck,
  IconArrowRight,
  IconPhone,
  IconWhatsApp,
  IconSparkles,
} from "@/components/ui-blocks";
import {
  company,
  destinations,
  faqs,
  services,
  processSteps,
  verifiedEventsAndPartners,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Future Edge Education | Top Study Abroad Consultant in BD | UK, Europe, Aus & Canada" },
      {
        name: "description",
        content:
          "Future Edge Education & Consultancy — Top Study Abroad Consultant in Bangladesh. Fast-track UK visa processing (3-5 day grants), without IELTS (MOI) admissions, scholarship guidance, and partner universities across UK, Europe, Australia, Canada, New Zealand, Malaysia & USA.",
      },
      { property: "og:title", content: "Future Edge Education | Top Study Abroad Consultant in BD" },
      {
        property: "og:description",
        content:
          "Fulfill Your Study Abroad Dream With Us! 100% Free Profile Assessment with senior counselors Moshiur & Tanvir. Khan Tower, 359 DIT Road, Dhaka. Hotline: 01805-041710.",
      },
    ],
  }),
  component: Home,
});

const heroMediaTabs = [
  {
    id: "banner",
    label: "Global Destinations",
    badge: "Official Banner",
    image: "/brand-assets/banner.jpg",
    title: "Fulfill Your Study Abroad Dream With Us!",
    desc: "UK, Australia, New Zealand, Canada, Malaysia, Europe (Hungary, Denmark, Finland, Sweden).",
  },
  {
    id: "bnu-session",
    label: "BNU Partner Session",
    badge: "International Partner",
    image: "/brand-assets/772204691_122282788340103184_9204887386025201573_n.jpg",
    title: "Session on BNU with Ms. Ayesha Rauf",
    desc: "Direct delegation from Buckinghamshire New University UK at our Dhaka office.",
  },
  {
    id: "europe",
    label: "Study in Europe",
    badge: "European Admissions",
    image: "/brand-assets/787160278_122284754246103184_2179868027112497957_n.jpg",
    title: "Denmark, Finland, Sweden & Hungary",
    desc: "University of Debrecen Master's with & without IELTS (MOI accepted).",
  },
  {
    id: "team-expo",
    label: "Counselor Team",
    badge: "FE Leadership",
    image: "/brand-assets/766952914_122282362520103184_2941471200207168176_n.jpg",
    title: "Your Future Beyond Borders",
    desc: "Senior counseling team guiding students with complete honesty and transparency.",
  },
  {
    id: "award",
    label: "Conference Award",
    badge: "LURS 2026 Honor",
    image: "/brand-assets/768667718_122282362400103184_8409750641330812941_n.jpg",
    title: "LURS 2026 Student Research Recognition",
    desc: "Honored on stage by Chief Guest Danobir Dr. Syed Ragib Ali.",
  },
];

function Home() {
  const [activeMediaTab, setActiveMediaTab] = useState(0);
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [activeRegion, setActiveRegion] = useState<string>("All");

  const regions = ["All", "Europe", "North America", "Southeast Asia", "Oceania"];

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

  return (
    <>
      {/* 1. Ultra-Clean Executive Hero Section */}
      <section className="relative overflow-hidden bg-[#FAFAFC] border-b border-slate-200/80 pt-12 pb-16 sm:pt-18 sm:pb-24">
        {/* Soft Ambient Floating Glows */}
        <div className="pointer-events-none absolute -left-28 -top-20 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[120px] animate-float-slow" />
        <div className="pointer-events-none absolute right-0 top-1/4 h-[460px] w-[460px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="section-shell relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* Left Column: Authoritative Messaging */}
            <div className="space-y-6">
              {/* Single Refined Venue Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#FCF8EE] px-4 py-1.5 text-xs font-bold text-[#8A6818]">
                <span className="flex h-2 w-2 rounded-full bg-[#D4AF37] animate-ping" />
                <span>Top Study Abroad Consultant in BD · 285K+ Followers · 100% Recommend</span>
              </div>

              {/* High-Contrast Editorial Headline */}
              <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Fulfill Your Study Abroad <br />
                <span className="text-[#AA771C]">Dream With Us!</span>
              </h1>

              {/* Slogan & Location Line */}
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold">
                <span className="rounded-full bg-[#090C10] px-3.5 py-1 text-[#F5D365] border border-[#D4AF37]/40 shadow-sm font-bold">
                  "{company.motto}"
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-700">
                  Khan Tower, 359 DIT Road, Dhaka 1219
                </span>
              </div>

              {/* Spacious Body Text */}
              <p className="max-w-xl text-sm sm:text-base leading-relaxed text-slate-600">
                Bangladesh's premier higher education consultancy. Connect directly with senior advisors Moshiur and Tanvir for 100% free profile evaluations, fast-track UK visa processing (with proven 3 to 5-day approvals), and without IELTS (MOI) university admissions.
              </p>

              {/* Unified CTA Hierarchy */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <RegisterButton
                  label="Book Free Profile Assessment"
                  className="px-8 py-4 text-sm font-bold shadow-lg"
                />
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Future Edge Education! I want to book a 100% free counseling session.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-luxury-secondary text-sm font-bold shadow-sm"
                >
                  <IconWhatsApp className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp {company.phones[0]}</span>
                </a>
              </div>

              {/* Clean Integrated Divider Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 text-xs font-bold text-slate-800">
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Free File</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-[#AA771C] shrink-0" />
                  <span>3-5 Day UK Visas</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Without IELTS (MOI)</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-slate-700 shrink-0" />
                  <span>BNU / UEL Partners</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Media Showcase Card */}
            <div className="relative">
              <div className="card-luxury p-3 sm:p-4 shadow-xl border border-[#D4AF37]/30">
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
                          ? "bg-[#090C10] text-[#F5D365] shadow-sm border border-[#D4AF37]"
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
                    <span className="rounded-full bg-slate-950/85 px-3 py-1 font-bold text-[#F5D365] backdrop-blur-md border border-[#D4AF37]/40">
                      {currentMedia.badge}
                    </span>
                    <span className="rounded-full bg-[#D4AF37] px-3 py-1 font-bold text-[#090C10] shadow-sm">
                      ● Verified Asset
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
                <div className="mt-3.5 rounded-2xl bg-[#FCF8EE] p-3.5 border border-[#D4AF37]/30">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-slate-800">Direct Counseling Desk:</span>
                    <span className="text-[#8A6818] font-bold">Khan Tower, 359 DIT Road</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {company.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:+880${p.replace(/[^0-9]/g, "").slice(-10)}`}
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-[#D4AF37]/40 bg-white py-2 font-bold text-slate-800 hover:border-[#D4AF37] hover:text-[#8A6818] transition-colors shadow-sm"
                      >
                        <IconPhone className="w-3.5 h-3.5 text-[#AA771C]" />
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

      {/* 2. Global University & Partner Marquee */}
      <UniversityMarquee />

      {/* 3. Verified BNU Partner Delegation & Live Spotlight */}
      <section className="section-shell py-8 sm:py-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#090C10] via-[#151A24] to-[#090C10] text-white p-6 sm:p-10 border border-[#D4AF37]/40 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-3.5 py-1 text-xs font-bold text-[#F5D365]">
                <IconSparkles className="w-3.5 h-3.5" />
                <span>Featured Partner Delegation · Direct In-Office Assessment</span>
              </div>
              <h2 className="font-display text-xl sm:text-3xl font-extrabold tracking-tight text-white">
                Buckinghamshire New University (BNU) Session with Ms. Ayesha Rauf
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Meet foreign university delegates directly at Future Edge Education. On-spot profile evaluations, without IELTS (MOI) admissions for eligible applicants, and scholarship grants for Bachelor's and Master's degrees.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/offers"
                className="btn-luxury-primary text-xs py-3 px-6 shadow-md"
              >
                <span>View Partner Sessions</span>
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

      {/* 5. Core Admissions & Visa Services */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
        <SectionHeading
          eyebrow="Admissions & Visa Services"
          title="Empower • Educate • Elevate"
          subtitle="Discover our genuine study abroad services — from 100% free profile assessment to fast-track 3-day UK visa processing, MOI pathways without IELTS, and spouse visa support."
        />

        {/* Tab Selector Segmented Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {services.map((s, idx) => (
            <button
              key={s.slug}
              type="button"
              onClick={() => setActiveServiceTab(idx)}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all cursor-pointer",
                activeServiceTab === idx
                  ? "bg-[#090C10] text-[#F5D365] shadow-md border border-[#D4AF37]"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-[#FCF8EE] hover:text-[#8A6818]",
              )}
            >
              <span>{s.icon}</span>
              <span>{s.title.split(" ")[0]} {s.title.split(" ")[1] || ""}</span>
            </button>
          ))}
        </div>

        {/* Featured Service Showcase Card */}
        <div className="mt-8 card-luxury p-6 sm:p-10 border border-[#D4AF37]/30">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FCF8EE] text-[#8A6818] shadow-sm border border-[#D4AF37]/40 text-2xl">
                  {currentService.icon}
                </span>
                <div>
                  <span className="badge-clean badge-gold text-[0.68rem]">
                    {currentService.highlightBadge || "Verified Service"}
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
                  Key Service Highlights:
                </p>
                <div className="grid gap-2 sm:grid-cols-2 pt-1">
                  {currentService.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <IconCheck className="w-4 h-4 text-[#8A6818] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <RegisterButton
                  label={`Book ${currentService.title.split(" ")[0]} Consultation`}
                  className="px-7 py-3 text-xs font-bold"
                />
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello Future Edge Education! I would like to consult about ${currentService.title}.`)}`}
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
            <div className="rounded-3xl bg-[#090C10] p-7 text-white space-y-4 shadow-xl border border-[#D4AF37]/40">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[#F5D365]">
                  Counseling Desk
                </span>
                <span className="text-xs font-semibold text-slate-300">
                  Khan Tower, Dhaka
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-200 leading-relaxed">
                "{currentService.guarantee}"
              </p>
              <div className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex justify-between">
                  <span>Lead Counselors:</span>
                  <span className="font-bold text-[#F5D365]">Moshiur & Tanvir</span>
                </div>
                <div className="flex justify-between">
                  <span>Venue:</span>
                  <span className="font-bold text-white">Khan Tower, 359 DIT Road</span>
                </div>
                <div className="flex justify-between">
                  <span>File-Opening Fee:</span>
                  <span className="font-bold text-emerald-400">100% Free (Zero Taka)</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/services"
                  className="flex items-center justify-center gap-2 w-full text-center rounded-2xl bg-white/10 hover:bg-white/20 py-2.5 text-xs font-bold text-white transition-colors"
                >
                  <span>Explore Full Service Matrix</span>
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
          title="Verified Study Destinations"
          subtitle="Explore world-renowned university destinations featured on our official banner: UK, Europe (Hungary, Denmark, Finland, Sweden), Australia, Canada, New Zealand, Malaysia, and USA."
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
                  ? "bg-[#090C10] text-[#F5D365] shadow-md border border-[#D4AF37]"
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
              className="card-luxury p-6 flex flex-col justify-between border border-slate-200 hover:border-[#D4AF37]"
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
                  <span className="rounded-full bg-[#FCF8EE] border border-[#D4AF37]/40 px-2.5 py-0.5 text-[0.65rem] font-bold text-[#8A6818]">
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
                    <span className="font-bold text-[#8A6818]">{d.scholarships}</span>
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
                  className="flex items-center gap-1 text-xs font-bold text-[#AA771C] hover:underline"
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
          title="From Free Profile Assessment to Flight Departure"
          subtitle="A transparent, proven pathway guided directly by senior counselors Moshiur & Tanvir."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="card-luxury p-6 relative overflow-hidden border border-slate-200 hover:border-[#D4AF37]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-3xl font-black text-slate-200">
                  {step.step}
                </span>
                <span className="badge-clean badge-gold">
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

      {/* 9. Authentic Campus, Partner & Event Gallery */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
        <SectionHeading
          eyebrow="Inside Future Edge Education"
          title="Partner Sessions, Awards & Life at Future Edge"
          subtitle="Explore authentic photos from our Buckinghamshire New University delegation session, education expos, student research conference honors, and counseling desks."
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
          subtitle="Clear answers regarding our 100% free counseling, 3-day UK visa track record, without IELTS (MOI) admissions, and European opportunities."
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
