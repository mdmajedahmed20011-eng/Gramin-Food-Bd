import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Breadcrumbs,
  BulletList,
  CtaBand,
  PageHero,
  IconCheck,
  IconSparkles,
  IconArrowRight,
  IconWhatsApp,
  IconPhone,
  IconGlobe,
} from "@/components/ui-blocks";
import { company, processSteps, services, courses } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Courses | Alex Global Consultancy — Study Abroad, IELTS, Spoken & Kids English" },
      {
        name: "description",
        content:
          "Explore Alex Global Consultancy services: 100% Free Profile Assessment, Higher Education Abroad Admissions, IELTS Masterclass (Band 7+), Spoken English, Kids English & 8 Visa Categories. Dhaka & London Offices.",
      },
      { property: "og:title", content: "Services & Courses | Alex Global Consultancy" },
      {
        property: "og:description",
        content:
          "Comprehensive Study Abroad Admissions, IELTS Preparation, Spoken English, Kids English & Visa Guidance. Dhaka (Aftabnagar) & London (Cranberry Lane). Hotline: 01886 91 33 91.",
      },
    ],
  }),
  component: Services,
});

const serviceCategories = [
  { id: "all", label: "All Offerings" },
  { id: "study-abroad", label: "Study Abroad Admissions" },
  { id: "language-courses", label: "Language Academy (IELTS & English)" },
  { id: "visa-guidance", label: "8 Visa Categories" },
  { id: "logistics", label: "Pre-Departure & London Hub" },
];

const comparisonData = [
  {
    feature: "File-Opening & Initial Counseling",
    alexGlobal: "100% Free (Zero File-Opening Charge)",
    traditional: "৳15,000 – ৳30,000 upfront non-refundable fee",
    highlight: true,
  },
  {
    feature: "Direct UK & European Presence",
    alexGlobal: "London Branch Office (The Arches Cranberry Lane E16)",
    traditional: "No overseas office; students are left on their own after flying",
    highlight: true,
  },
  {
    feature: "In-House Language Academy",
    alexGlobal: "IELTS Band 7+, Spoken English & Kids English Batches",
    traditional: "Consultancy only; no dedicated coaching or mock test facility",
    highlight: true,
  },
  {
    feature: "Visa Categories Handled",
    alexGlobal: "8 Visa Types: Student, Spouse, Visit, Business, Work, Medical, Migration, Sports",
    traditional: "Strictly student visas only; unable to assist families or visits",
    highlight: false,
  },
  {
    feature: "University Network & Support",
    alexGlobal: "100+ Accredited Universities in UK, USA, Canada, Australia, Cyprus, Europe",
    traditional: "Limited to a few commercial private colleges",
    highlight: false,
  },
  {
    feature: "Post-Arrival Care",
    alexGlobal: "Airport Pickup, Student Accommodation, Bank Account & London Office Welcome",
    traditional: "Service stops once the visa stamp is received in Dhaka",
    highlight: true,
  },
];

const serviceFaqs = [
  {
    q: "Is Alex Global Consultancy truly 100% free with no hidden charges?",
    a: "Yes, absolutely. We do not charge any file-opening fees, processing fees, or profile assessment charges for higher education admissions. Official statutory expenses (such as university tuition deposits, embassy visa application fees, and medical tests) are paid directly to the respective institutions.",
  },
  {
    q: "What language training batches are currently available?",
    a: "We offer three core programs at our Dhaka Aftabnagar campus and online: 1) IELTS Preparation Masterclass (Academic & General Training with weekly mock tests), 2) Spoken English & Communication Fluency (24 live interactive sessions), and 3) Kids English & Spoken Foundation for children aged 5 to 14 years.",
  },
  {
    q: "How does your London office assist Bangladeshi students?",
    a: "Our London Branch Office (The Arches Cranberry Lane, London E16 4BJ, UK) provides on-ground guidance after you land in the UK: airport pickup coordination, safe student accommodation search, UK bank account opening advice, and ongoing academic support.",
  },
  {
    q: "Which visa categories can Alex Global Consultancy process?",
    a: "We process 8 core categories: Student Visa, Spouse & Dependent Visa, Tourist/Visit Visa (Europe Schengen 27, UK, USA, Canada, Asia), Business Visa, Work Permit Visa, Medical Visa, Migration Visa, and Sports Visa.",
  },
  {
    q: "Can I apply to study in the UK or Europe without IELTS?",
    a: "Yes! If you graduated from an accredited institution where English was the Medium of Instruction (MOI), we provide verified admission pathways at partner universities in the UK, Cyprus, Malaysia, and selected European destinations.",
  },
];

function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const { open } = useRegisterModal();

  return (
    <>
      {/* 1. High-Impact Page Hero with Breadcrumbs */}
      <PageHero
        eyebrow="Admissions, Courses & Visas"
        title="Comprehensive Education & Travel Advisory"
        subtitle="100% free profile evaluation, university admissions across 100+ global partners, certified IELTS & Spoken English coaching, and all 8 visa categories backed by our Dhaka and London offices."
        image="/latest-assets/banner.png"
        imageAlt="Alex Global Consultancy study abroad admissions and language academy"
      >
        <div className="space-y-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={open}
              className="btn-luxury-primary text-xs sm:text-sm py-3.5 px-8 shadow-xl hover:shadow-red-600/30"
            >
              <span>Book Free Profile Assessment</span>
              <IconSparkles className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "Hello Alex Global Consultancy! I would like to inquire about your services and courses.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-luxury-secondary text-xs sm:text-sm py-3.5 px-7 shadow-xl text-slate-900"
            >
              <IconWhatsApp className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: 01886 91 33 91</span>
            </a>
          </div>
        </div>
      </PageHero>

      {/* 2. Service Category Filter Tabs */}
      <section className="bg-white border-b border-slate-200 py-6 sticky top-[69px] z-30 shadow-xs backdrop-blur-md bg-white/95">
        <div className="section-shell">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer",
                  activeCategory === cat.id
                    ? "bg-red-600 text-white shadow-md border border-red-500"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Language Academy Specialized Section (IELTS, Spoken & Kids English) */}
      {(activeCategory === "all" || activeCategory === "language-courses") && (
        <section className="section-shell py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-700 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-red-600" />
              <span>Alex Global Language Academy</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              IELTS, Spoken English & <span className="text-red-600">Kids English</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Certified instructors, small batch sizes, and modern interactive classrooms located at our Dhaka Aftabnagar campus and live online.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-md flex flex-col justify-between hover:border-red-500/50 hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl p-2 rounded-2xl bg-red-50 border border-red-200/80">
                      {course.icon}
                    </span>
                    <span className="rounded-full bg-red-100 text-red-700 border border-red-200 px-3 py-1 text-xs font-bold">
                      {course.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-black text-slate-900">
                      {course.title}
                    </h3>
                    <p className="text-xs font-semibold text-red-600 mt-0.5">
                      {course.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-2 rounded-2xl bg-slate-50 p-3.5 text-[0.72rem] text-slate-700 border border-slate-200/70">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Duration:</span>
                      <strong className="text-slate-900">{course.duration}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Schedule:</span>
                      <strong className="text-slate-900">{course.classSchedule}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Format:</span>
                      <strong className="text-slate-900">{course.batchType}</strong>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-slate-500 block">
                      Course Modules & Benefits:
                    </span>
                    <ul className="space-y-1.5">
                      {course.highlights.slice(0, 4).map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-slate-700">
                          <IconCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={open}
                    className="btn-luxury-primary w-full text-xs py-3 justify-center shadow-md hover:shadow-red-600/30"
                  >
                    <span>Enroll / Free Diagnostic Test</span>
                    <span>→</span>
                  </button>
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello Alex Global Language Academy! I want to join the next ${course.title} batch. Please send fee and schedule.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-luxury-secondary w-full text-xs py-2.5 justify-center text-slate-900"
                  >
                    <IconWhatsApp className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Core Educational Services Grid */}
      {(activeCategory === "all" || activeCategory === "study-abroad" || activeCategory === "logistics") && (
        <section className="section-shell py-16 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-700 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-red-600" />
              <span>Full Lifecycle Advisory</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Higher Education Admissions & <span className="text-red-600">Student Care</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              From university course matching in Dhaka to accommodation finding in London, we provide honest end-to-end guidance.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.slug}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between hover:border-red-500/40 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{service.icon}</span>
                    {service.highlightBadge && (
                      <span className="rounded-full bg-red-50 text-red-700 border border-red-200 px-2.5 py-0.5 text-[0.68rem] font-bold">
                        {service.highlightBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-lg font-black text-slate-900">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.summary}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <BulletList items={service.points} />
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 mt-5 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-semibold">{service.timeline}</span>
                  <button
                    type="button"
                    onClick={open}
                    className="text-red-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. All 8 Visa Categories Comprehensive Showcase */}
      {(activeCategory === "all" || activeCategory === "visa-guidance") && (
        <section className="section-shell py-16 border-t border-slate-200">
          <div className="rounded-3xl border border-slate-800 bg-[#0F172A] p-8 sm:p-12 text-white shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="rounded-full bg-red-600/20 text-red-400 border border-red-500/30 px-3.5 py-1 text-xs font-bold inline-block mb-3">
                Global Travel & Immigration
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
                All 8 Visa Categories Processed
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                As featured in our verified video reels, Alex Global Consultancy handles complex immigration files with precision.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Student Visa", icon: "🎓", desc: "Full CAS, I-20 & COE file assembly for UK, USA, Canada, Aus, Cyprus & Europe.", badge: "Core Service" },
                { title: "Spouse & Family Visa", icon: "💍", desc: "Dependent work rights and child schooling documentation alongside primary applicant.", badge: "High Approval" },
                { title: "Tourist & Visit Visa", icon: "✈️", desc: "Europe Schengen (27 countries), UK standard visitor, USA B1/B2 & Canada visitor visas.", badge: "Worldwide" },
                { title: "Business Visa", icon: "💼", desc: "Commercial delegations, overseas conference attendance, and corporate travel files.", badge: "Fast Track" },
                { title: "Work Permit Visa", icon: "🛠️", desc: "Post-study work permit compliance, employer sponsorship, and overseas job seeker visas.", badge: "Post-Study" },
                { title: "Medical Visa", icon: "🏥", desc: "Expedited medical appointment verification, hospital invitations, and treatment visas.", badge: "Priority" },
                { title: "Migration Visa", icon: "🌍", desc: "Skilled migration points audit, regional programs, and residency pathways.", badge: "PR Roadmap" },
                { title: "Sports Visa", icon: "⚽", desc: "Athletic trials, tournament participation, and international sporting club delegations.", badge: "Athletic" },
              ].map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl bg-slate-800/80 border border-slate-700/80 p-5 space-y-2.5 flex flex-col justify-between hover:border-red-500/50 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{v.icon}</span>
                      <span className="text-[0.65rem] font-bold text-red-400 bg-red-500/20 px-2 py-0.5 rounded-full border border-red-500/30">
                        {v.badge}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-sm text-white">{v.title}</h3>
                    <p className="text-[0.72rem] text-slate-300 leading-relaxed">{v.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={open}
                    className="text-[0.72rem] font-bold text-red-400 hover:text-red-300 text-left pt-2 border-t border-slate-700 cursor-pointer"
                  >
                    Check Eligibility →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Transparency Comparison Table */}
      <section className="section-shell py-16 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-700 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Honesty & Transparency</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Students Choose <span className="text-red-600">Alex Global</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Compare our verified zero-file-fee model and dual-hub presence against traditional agencies.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white font-display uppercase tracking-wider text-[0.7rem]">
                <tr>
                  <th className="p-4 sm:p-5">Key Parameter</th>
                  <th className="p-4 sm:p-5 text-red-400 font-extrabold bg-slate-800">
                    ★ Alex Global Consultancy
                  </th>
                  <th className="p-4 sm:p-5 text-slate-400">Traditional Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row) => (
                  <tr
                    key={row.feature}
                    className={cn("transition-colors hover:bg-slate-50", row.highlight && "bg-red-50/20")}
                  >
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 font-bold text-red-700 bg-red-50/40">
                      <div className="flex items-center gap-2">
                        <IconCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.alexGlobal}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Step-by-Step 6-Stage Process */}
      <section className="section-shell py-16 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3.5 py-1 text-xs font-bold text-red-700 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Structured Process</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Proven 6-Step Admission Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Meticulous file preparation to ensure seamless university admission and visa clearance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative hover:border-red-500/50 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-black text-2xl text-red-600">
                  {step.step}
                </span>
                <span className="rounded-full bg-slate-100 text-slate-700 text-[0.68rem] font-bold px-2.5 py-0.5">
                  {step.badge}
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-slate-900">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Service FAQs Accordion */}
      <section className="section-shell py-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions on Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Clear, transparent answers about our fee policy, language academy, and visa procedures.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {serviceFaqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={faq.q}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "bg-white border-red-500 shadow-md ring-1 ring-red-500/20"
                    : "bg-white border-slate-200 hover:border-slate-300",
                )}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer font-display font-bold text-sm sm:text-base text-slate-900"
                >
                  <span>{faq.q}</span>
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-transform duration-300",
                      isOpen ? "bg-red-600 text-white rotate-180" : "bg-slate-100 text-slate-600",
                    )}
                  >
                    ↓
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-medium">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. Bottom CTA */}
      <CtaBand />
    </>
  );
}
