import { createFileRoute } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import {
  Breadcrumbs,
  BulletList,
  CtaBand,
  PageHero,
  SectionHeading,
  StatsStrip,
  RegisterButton,
} from "@/components/ui-blocks";
import { OfficeGallery } from "@/components/office-gallery";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Alex Global Consultancy | Dhaka & London" },
      {
        name: "description",
        content:
          "Learn about Alex Global Consultancy (AGC) — dual-hub study abroad consultancy and language academy with offices in Dhaka (Aftabnagar) and London (Cranberry Lane).",
      },
      { property: "og:title", content: "About Alex Global Consultancy | From Dhaka to the World" },
      {
        property: "og:description",
        content:
          "Official profile of Alex Global Consultancy. 100% free counseling, IELTS Preparation, Spoken English, Kids English, and 8 processed visa categories.",
      },
    ],
  }),
  component: About,
});

const advisoryWings = [
  {
    title: "Overseas Admissions & University Matching",
    hub: "Dhaka & London Hubs",
    badge: "Study Abroad",
    icon: "🎓",
    desc: "Dedicated advisors evaluate academic background, GPA gap, budget, and career goals to secure direct offer letters across 100+ global partner institutions in the UK, Canada, Australia, Cyprus, USA, and Europe.",
  },
  {
    title: "IELTS & Language Academy Faculty",
    hub: "Dhaka Campus & Online",
    badge: "Language Academy",
    icon: "🎯",
    desc: "Certified trainers conducting intensive IELTS preparation (target Band 7.0+), practical Spoken English fluency for adults, and joyful Kids English & Spoken Foundation courses for young learners.",
  },
  {
    title: "Visa Compliance & Embassy Documentation Cell",
    hub: "Executive Desk",
    badge: "8 Visa Types",
    icon: "🛂",
    desc: "Thorough documentation auditing, financial sponsorship verification, and 1-on-1 embassy mock interviews for Student, Spouse, Tourist, Business, and Work categories with maximum approval rates.",
  },
  {
    title: "Pre-Departure & UK Student Welfare Desk",
    hub: "London Office (E16 4BJ)",
    badge: "London Liaison",
    icon: "🇬🇧",
    desc: "Direct on-ground assistance in London for airport pick-up coordination, student accommodation search, bank file assistance, and post-arrival settlement across the UK.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story & Dual Global Hubs"
        title="From Dhaka to the World"
        subtitle="Alex Global Consultancy (AGC) bridges ambitious students and families to world-class higher education, comprehensive visa solutions, and English language mastery through dedicated offices in Dhaka and London."
        image="/latest-assets/banner.png"
        imageAlt="Alex Global Consultancy corporate banner and dual global hubs"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About Us" }]} />
      </PageHero>

      {/* Brand Identity & Overview Section */}
      <section className="section-shell py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Quick Profile Card */}
          <div className="card-clean rounded-3xl p-8 border border-slate-200/90 shadow-lg bg-white">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
              <BrandLogo size={56} />
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">{company.name}</h3>
                <span className="inline-block rounded-full bg-red-50 border border-red-200 px-3 py-0.5 text-xs font-bold text-red-700 mt-1">
                  {company.presence}
                </span>
              </div>
            </div>

            <dl className="mt-6 space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Official Organization</dt>
                <dd className="font-bold text-slate-900 text-right">{company.legalName}</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Dhaka Corporate Office</dt>
                <dd className="font-bold text-slate-900 text-right max-w-[240px]">
                  {company.offices.dhaka.address}
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">London Branch Office</dt>
                <dd className="font-bold text-blue-900 text-right max-w-[240px]">
                  {company.offices.london.address}
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Language Academy</dt>
                <dd className="font-bold text-red-700 text-right">IELTS • Spoken • Kids English</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Core Philosophy</dt>
                <dd className="font-bold text-slate-900">{company.philosophy}</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Consulting Fee</dt>
                <dd className="font-bold text-emerald-700">100% Free (Zero File-Opening Charge)</dd>
              </div>
              <div className="flex justify-between pt-1">
                <dt className="text-slate-500 font-medium">Hotlines & WhatsApp</dt>
                <dd className="font-bold text-slate-900 text-right">{company.phones[0]} / {company.phones[1]}</dd>
              </div>
            </dl>

            <div className="mt-8 rounded-2xl bg-slate-50 p-4 border border-slate-200">
              <p className="text-xs font-bold text-slate-900 mb-1">Official Motto:</p>
              <p className="text-xs italic text-red-700">"{company.slogan}" · {company.taglineBn}</p>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Guiding Principles */}
          <div className="space-y-6">
            <span className="badge-clean badge-red">
              Our Vision & Mission
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Global Standards • Ethical Counseling • Lasting Success
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              At Alex Global Consultancy (AGC), we believe that global education and international migration should be transparent, accessible, and free of false promises. With our corporate base in Aftabnagar, Dhaka, and an active UK branch in London (The Arches Cranberry Lane), we maintain end-to-end stewardship of every student's journey.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              Beyond university placements, AGC operates a dedicated English Language Academy offering rigorous IELTS preparation, spoken fluency for professionals, and fun foundational English for young children. Furthermore, our visa division processes 8 core visa categories ensuring complete family and corporate mobility.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">
                  🎯 Our Mission
                </h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  To empower Bangladeshi students and professionals with ethical guidance, high-standard language skills, and seamless visa processing to achieve their global aspirations.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">
                  🔭 Our Vision
                </h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  To be Bangladesh's most reliable dual-hub consultancy, recognized for genuine international presence, high visa success rates, and zero hidden costs.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-linear-to-r from-red-50/60 via-slate-50 to-blue-50/60 border border-slate-200 p-5">
              <h4 className="font-display text-sm font-bold text-red-700 mb-2">
                🌟 The Alex Global Pillars:
              </h4>
              <BulletList
                items={[
                  "Dual Hub Support: Direct physical offices in Dhaka (Aftabnagar) and London (Cranberry Lane).",
                  "Zero File-Opening Charge: 100% free profile evaluation, university shortlisting, and career advice.",
                  "Comprehensive Language Academy: Expert IELTS coaching (Band 7.0+), Spoken English, and Kids English.",
                  "Full Spectrum Visa Processing: 8 categories including Student, Spouse, Tourist, Business, and Work permits.",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dual Global Presence Spotlight */}
      <section className="section-shell py-12 border-t border-slate-200">
        <div className="rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <span className="badge-clean badge-red text-xs">
                Direct Global Infrastructure
              </span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white">
                Dhaka Corporate Hub & London Branch Desk
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Most agencies end their responsibility when a student boards the flight. At Alex Global Consultancy, our London office at The Arches Cranberry Lane (London E16 4BJ) welcomes students on the ground, assisting with accommodation, local transportation, university registration, and ongoing student welfare.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold text-red-400">📍 Dhaka Corporate Campus</p>
                  <p className="text-[0.75rem] text-slate-300 mt-1">{company.offices.dhaka.address}</p>
                  <p className="text-[0.75rem] text-slate-400 mt-1">📞 {company.phones[0]} / {company.phones[1]}</p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold text-blue-400">🇬🇧 London Branch Office</p>
                  <p className="text-[0.75rem] text-slate-300 mt-1">{company.offices.london.address}</p>
                  <p className="text-[0.75rem] text-slate-400 mt-1">📞 {company.offices.london.phone}</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
              <img
                src="/latest-assets/banner.png"
                alt="Alex Global Consultancy dual hubs in Dhaka and London"
                width={800}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="section-shell py-10 sm:py-14 border-t border-slate-200">
        <StatsStrip />
      </section>

      {/* Meet Our Advisory Wings */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
        <SectionHeading
          eyebrow="Specialized Advisory Wings"
          title="Our Operational Divisions"
          subtitle="Experienced professionals dedicated to university admissions, language training, visa processing, and student logistics."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advisoryWings.map((wing) => (
            <div
              key={wing.title}
              className="card-clean rounded-3xl p-6 flex flex-col justify-between border border-slate-200 hover:border-red-300 shadow-sm hover:shadow-md transition-all bg-white"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-2xl">{wing.icon}</span>
                  <span className="badge-clean badge-navy text-[0.68rem]">{wing.badge}</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900 leading-snug">
                  {wing.title}
                </h3>
                <p className="text-[0.68rem] font-bold text-red-700 mt-0.5">
                  📍 {wing.hub}
                </p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  {wing.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello Alex Global Consultancy, I want to consult your "${wing.title}" division.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-red-700 hover:underline flex items-center justify-center gap-1.5"
                >
                  <span>Connect with Division →</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campus & Video Gallery */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200 bg-slate-50/50">
        <SectionHeading
          eyebrow="Dual-Hub Presence"
          title="Offices, Videos & Global Network"
          subtitle="Discover our verified Dhaka and London facilities, student orientations, and official video broadcasts."
        />
        <div className="mt-10">
          <OfficeGallery />
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand />
    </>
  );
}

