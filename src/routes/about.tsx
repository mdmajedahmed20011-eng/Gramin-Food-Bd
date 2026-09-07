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
      { title: "About Us | Academic Allies | Chattogram, Bangladesh" },
      {
        name: "description",
        content:
          "Learn about Academic Allies — Chittagong's premier European study abroad consultancy and certified language academy headquartered at Finlay Square (7th Floor), CDA Avenue, East Nasirabad, Chattogram.",
      },
      { property: "og:title", content: "About Academic Allies | Advancing Education" },
      {
        property: "og:description",
        content:
          "Official profile of Academic Allies. 100% genuine portal processing, European higher education (Italy, Sweden, Finland, UK, Canada, USA), DSU scholarships, and British Council certified IELTS.",
      },
    ],
  }),
  component: About,
});

const advisoryWings = [
  {
    title: "European Admissions & DSU Scholarship Cell",
    hub: "Chattogram HQ (Finlay Square)",
    badge: "Europe Direct",
    icon: "🏛️",
    desc: "Specialized advisors for Italian Universitaly portals, University of Padova applications, DOV/CIMEA verification, and regional DSU scholarship filing for up to €7,000/year living stipends and 100% tuition waiver.",
  },
  {
    title: "Academic Allies Language Academy",
    hub: "Executive Language Labs",
    badge: "Language Academy",
    icon: "🎯",
    desc: "British Council & IDP certified faculty delivering intensive IELTS preparation (target Band 7.0+), practical Spoken English fluency for career growth, and engaging Kids English Foundation programs.",
  },
  {
    title: "Embassy Visa Integrity & Portal Filing Cell",
    hub: "Compliance Wing",
    badge: "100% Genuine",
    icon: "🛂",
    desc: "Strict anti-fraud protocol ('Dalaler Fake Visa Noy'). Every student dossier is verified and submitted directly through official embassy and university portals with rigorous 1-on-1 mock interview preparation.",
  },
  {
    title: "Pre-Departure & Global Scholar Care Desk",
    hub: "Chattogram HQ & Branch",
    badge: "Scholar Care",
    icon: "✈️",
    desc: "Comprehensive pre-departure briefings, currency exchange guidance, European student accommodation assistance, Italian Codice Fiscale, and post-arrival settlement support in Europe.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story & Educational Mission"
        title="Advancing Education Across Borders"
        subtitle="Academic Allies is Chittagong's premier European higher education consultancy and language academy, empowering ambitious scholars through genuine university admissions, regional scholarships, and English mastery."
        image="/assets/banner.jpg"
        imageAlt="Academic Allies corporate headquarters and student orientations"
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
                <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-0.5 text-xs font-bold text-amber-900 mt-1">
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
                <dt className="text-slate-500 font-medium">Chattogram Corporate HQ</dt>
                <dd className="font-bold text-slate-900 text-right max-w-[240px]">
                  {company.headquarters.full}
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Chattogram Branch</dt>
                <dd className="font-bold text-[#0C2340] text-right max-w-[240px]">
                  {company.offices.chattogramBranch.address}
                </dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Language Academy</dt>
                <dd className="font-bold text-amber-800 text-right">IELTS Band 7+ • Spoken • Kids English</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Core Philosophy</dt>
                <dd className="font-bold text-slate-900">{company.philosophy}</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Consulting Integrity</dt>
                <dd className="font-bold text-emerald-700">100% Genuine Portals (Zero Fake Visas)</dd>
              </div>
              <div className="flex justify-between pt-1">
                <dt className="text-slate-500 font-medium">Hotlines & WhatsApp</dt>
                <dd className="font-bold text-slate-900 text-right">{company.phones[0]} / {company.phones[1]}</dd>
              </div>
            </dl>

            <div className="mt-8 rounded-2xl bg-slate-50 p-4 border border-slate-200">
              <p className="text-xs font-bold text-slate-900 mb-1">Official Motto:</p>
              <p className="text-xs italic text-amber-800">"{company.slogan}" · {company.taglineBn}</p>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Guiding Principles */}
          <div className="space-y-6">
            <span className="badge-clean badge-navy">
              Our Vision & Mission
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Academic Excellence • Zero Fraud • Proven Scholar Success
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Academic Allies was established with a singular mission: to protect aspiring students from fraudulent middlemen and deliver transparent, world-class pathways to prestigious European and global universities. Operating out of our corporate headquarters at Finlay Square (7th Floor), CDA Avenue, Chattogram, we manage the entire academic life cycle with rigorous precision.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              From Italian Universitaly portals and DSU Regional Scholarships (€7,000/year living grant with zero tuition) to Nordic admissions in Sweden and Finland, our students receive accredited guidance. Simultaneously, our in-house Language Academy prepares candidates for British Council/IDP certified IELTS Band 7.0+, executive Spoken English, and Kids English Foundation.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">
                  🎯 Our Mission
                </h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  To provide transparent, 100% genuine higher education pathways to European and world-ranked universities while delivering premier English language training.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">
                  🔭 Our Vision
                </h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  To be Bangladesh's most trusted educational bridge to Europe, renowned for scholarship excellence, anti-fraud standards, and proven student success.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-linear-to-r from-amber-50/60 via-slate-50 to-blue-50/60 border border-slate-200 p-5">
              <h4 className="font-display text-sm font-bold text-[#0C2340] mb-2">
                🌟 The Academic Allies Pillars:
              </h4>
              <BulletList
                items={[
                  "Zero Fake Visa Traps: 100% genuine direct university and embassy portal processing.",
                  "European Scholarship Leadership: Expert Italian DSU scholarship filing (€7,000/year + €0 tuition).",
                  "British Council Partner Academy: Proven IELTS coaching (Target Band 7.0+), Spoken English, and Kids English.",
                  "Chattogram Central Location: Easily accessible at Finlay Square (7th Floor), 2 No. Gate, East Nasirabad.",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Presence Spotlight */}
      <section className="section-shell py-12 border-t border-slate-200">
        <div className="rounded-3xl bg-[#0C2340] border border-slate-800 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <span className="badge-clean badge-gold text-xs">
                Chattogram Headquarters & Branch Network
              </span>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white">
                Finlay Square Corporate Center & Zeenat Abad Branch
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Academic Allies welcomes students and guardians to our state-of-the-art counseling suites at Finlay Square (7th Floor), CDA Avenue, East Nasirabad, Chattogram. Here, certified counselors evaluate your academic transcripts, map out European scholarship eligibility, and guide you through each stage of the application.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold text-[#D4AF37]">📍 Corporate Headquarters</p>
                  <p className="text-[0.75rem] text-slate-300 mt-1">{company.headquarters.full}</p>
                  <p className="text-[0.75rem] text-slate-400 mt-1">📞 {company.phones[0]} / {company.phones[1]}</p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold text-emerald-400">🏛️ Branch Office</p>
                  <p className="text-[0.75rem] text-slate-300 mt-1">{company.offices.chattogramBranch.address}</p>
                  <p className="text-[0.75rem] text-slate-400 mt-1">📞 {company.phones[2]} / {company.phones[3]}</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-slate-900">
              <img
                src="/assets/banner.jpg"
                alt="Academic Allies Corporate Headquarters at Finlay Square Chattogram"
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
          subtitle="Experienced professionals dedicated to European admissions, language training, scholarship filing, and pre-departure settlement."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advisoryWings.map((wing) => (
            <div
              key={wing.title}
              className="card-clean rounded-3xl p-6 flex flex-col justify-between border border-slate-200 hover:border-[#D4AF37] shadow-sm hover:shadow-md transition-all bg-white"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-2xl">{wing.icon}</span>
                  <span className="badge-clean badge-navy text-[0.68rem]">{wing.badge}</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900 leading-snug">
                  {wing.title}
                </h3>
                <p className="text-[0.68rem] font-bold text-[#0C2340] mt-0.5">
                  📍 {wing.hub}
                </p>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  {wing.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello Academic Allies, I want to consult your "${wing.title}" division.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#0C2340] hover:text-[#D4AF37] hover:underline flex items-center justify-center gap-1.5"
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
          eyebrow="Verified Community"
          title="Offices, Videos & Scholar Testimonials"
          subtitle="Discover our verified Chattogram headquarters at Finlay Square, student visa celebrations, and official Facebook broadcasts."
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
