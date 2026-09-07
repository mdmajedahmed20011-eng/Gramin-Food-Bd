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
      { title: "Services & Language Academy | Academic Allies — European Admissions & IELTS" },
      {
        name: "description",
        content:
          "Explore Academic Allies services: 100% Genuine Portal Processing, European Higher Education (Italy Padova, Sweden, Finland, UK, Canada, USA), DSU Regional Scholarships up to €7,000/yr, British Council Certified IELTS (Band 7+), Spoken English & Kids English. Headquarters: Finlay Square (7th Floor), Chattogram.",
      },
      { property: "og:title", content: "Services & Academy | Academic Allies — Advancing Education" },
      {
        property: "og:description",
        content:
          "Comprehensive European University Admissions, DSU Scholarships, Certified IELTS Coaching, and Genuine Portal Visa Guidance. Finlay Square (7th Floor), CDA Avenue, Chattogram. Hotline: 01859-870936.",
      },
    ],
  }),
  component: Services,
});

const serviceCategories = [
  { id: "all", label: "All Offerings" },
  { id: "study-abroad", label: "European & Global Admissions" },
  { id: "language-courses", label: "Language Academy (IELTS & English)" },
  { id: "scholarships", label: "DSU & European Scholarships" },
  { id: "visa-guidance", label: "Embassy Portals & Mocks" },
];

const comparisonData = [
  {
    feature: "Ethical Standards & Integrity",
    academicAllies: "100% Genuine Portals (Zero Fake Visas / 'Dalaler Fake Visa Noy')",
    traditional: "Fraudulent fake work permit schemes resulting in embassy bans",
    highlight: true,
  },
  {
    feature: "European DSU Scholarship Support",
    academicAllies: "Up to €7,000/yr stipend + 100% tuition waiver (Padova/Rome/Milan)",
    traditional: "Zero knowledge of Italian regional welfare (DSU / ER.GO)",
    highlight: true,
  },
  {
    feature: "In-House Language Academy",
    academicAllies: "British Council & IDP Certified IELTS (Band 7+), Spoken & Kids English",
    traditional: "Consultancy only; no dedicated language lab or mock facility",
    highlight: true,
  },
  {
    feature: "Application Transparency",
    academicAllies: "Direct Universitaly, CIMEA, DOV and Embassy portal credentials",
    traditional: "Hidden application accounts managed by unverified third parties",
    highlight: true,
  },
  {
    feature: "Partner University Direct Access",
    academicAllies: "100+ Accredited Universities across Italy, Sweden, Finland, UK, Canada, USA",
    traditional: "Restricted to a few aggressive commission-based colleges",
    highlight: false,
  },
  {
    feature: "Physical Chattogram Accessibility",
    academicAllies: "Corporate HQ: Finlay Square (7th Floor), CDA Avenue + Zeenat Abad Branch",
    traditional: "Temporary rented spaces without long-term local accountability",
    highlight: true,
  },
];

const serviceFaqs = [
  {
    q: "How does Academic Allies assist with Italian University admissions?",
    a: "We guide you through the entire Italian academic cycle: course selection at top universities like University of Padova, Universitaly pre-enrollment portal filing, CIMEA/DOV document legalization, and regional DSU scholarship applications for up to €7,000/year living allowance.",
  },
  {
    q: "What is your stance against fraudulent visa agencies?",
    a: "We actively campaign against fake visa traps ('Dalaler Fake Visa Noy'). Every application processed through Academic Allies is submitted directly to official government portals, accredited universities, and authorized embassy visa centers with verified documentation.",
  },
  {
    q: "What language training batches are currently available?",
    a: "Our Language Academy offers three core programs at our Chattogram center and online: 1) IELTS Preparation Masterclass (target Band 7.0+ with British Council/IDP certified trainers), 2) Spoken English & Workplace Communication, and 3) Kids English Foundation for young learners.",
  },
  {
    q: "Can I apply to European universities without IELTS?",
    a: "Yes! Many European universities accept Medium of Instruction (MOI) certificates from accredited institutions if your prior degree was taught in English. Additionally, we evaluate internal university English proficiency tests and Duolingo where permitted.",
  },
  {
    q: "Where is Academic Allies located in Chittagong?",
    a: "Our corporate headquarters is located at Finlay Square (7th Floor), CDA Avenue, 2 No. Gate, East Nasirabad, Chattogram. We also operate our Zeenat Abad branch in Chittagong-4203.",
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
        eyebrow="European Admissions, Scholarships & Academy"
        title="Comprehensive Education Advisory & Language Training"
        subtitle="100% genuine portal processing, Italian DSU scholarships up to €7,000/yr, top Nordic and UK admissions, and British Council certified IELTS coaching at our Chattogram corporate headquarters."
        image="/assets/banner.jpg"
        imageAlt="Academic Allies European study abroad and language academy"
      >
        <div className="space-y-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={open}
              className="btn-luxury-primary text-xs sm:text-sm py-3.5 px-8 shadow-xl"
            >
              <span>Book Free Profile Assessment</span>
              <IconSparkles className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                "Hello Academic Allies! I would like to inquire about your European admissions, DSU scholarships, and language academy batches.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className="btn-luxury-secondary text-xs sm:text-sm py-3.5 px-7 shadow-xl text-slate-900"
            >
              <IconWhatsApp className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: {company.phones[0]}</span>
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
                    ? "bg-[#0C2340] text-[#D4AF37] shadow-md border border-[#0C2340]"
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
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-900 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Academic Allies Language Academy</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              IELTS, Spoken English & <span className="text-[#0C2340]">Kids English</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              British Council & IDP certified faculty, interactive language labs, and small batches at Finlay Square (7th Floor), Chattogram and online.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.slug}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-md flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl p-2 rounded-2xl bg-amber-50 border border-amber-200/80">
                      {course.icon}
                    </span>
                    <span className="rounded-full bg-[#0C2340] text-[#D4AF37] px-3 py-1 text-xs font-bold">
                      {course.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-black text-slate-900">
                      {course.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-800 mt-0.5">
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
                    className="btn-luxury-primary w-full text-xs py-3 justify-center shadow-md"
                  >
                    <span>Enroll / Free Diagnostic Test</span>
                    <span>→</span>
                  </button>
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hello Academic Allies Language Academy! I want to join the next ${course.title} batch. Please send fee and schedule.`,
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
      {(activeCategory === "all" || activeCategory === "study-abroad" || activeCategory === "scholarships") && (
        <section className="section-shell py-16 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-900 mb-3">
              <IconSparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Full Lifecycle Guidance</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              European Admissions, DSU Scholarships & <span className="text-[#0C2340]">Student Care</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              From Universitaly portal filing in Chattogram to Italian Codice Fiscale and DSU scholarship disbursement in Europe, we provide 100% verified guidance.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.slug}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{service.icon}</span>
                    {service.highlightBadge && (
                      <span className="rounded-full bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-0.5 text-[0.68rem] font-bold">
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
                    className="text-[#0C2340] font-bold hover:text-[#D4AF37] hover:underline flex items-center gap-1 cursor-pointer"
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

      {/* 5. Transparency Comparison Table */}
      <section className="section-shell py-16 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-900 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Honesty & Anti-Fraud Standards</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Students Trust <span className="text-[#0C2340]">Academic Allies</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Compare our verified official portal filing and scholarship expertise against fraudulent middlemen.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#0C2340] text-white font-display uppercase tracking-wider text-[0.7rem]">
                <tr>
                  <th className="p-4 sm:p-5">Key Parameter</th>
                  <th className="p-4 sm:p-5 text-[#D4AF37] font-extrabold bg-[#07172B]">
                    ★ Academic Allies
                  </th>
                  <th className="p-4 sm:p-5 text-slate-400">Traditional / Fraudulent Middlemen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row) => (
                  <tr
                    key={row.feature}
                    className={cn("transition-colors hover:bg-slate-50", row.highlight && "bg-amber-50/20")}
                  >
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-4 sm:p-5 font-bold text-[#0C2340] bg-amber-50/40">
                      <div className="flex items-center gap-2">
                        <IconCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.academicAllies}</span>
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

      {/* 6. Step-by-Step 5-Stage Process */}
      <section className="section-shell py-16 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-900 mb-2.5">
            <IconSparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Structured Process</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Proven 5-Step European Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Meticulous file preparation to ensure university admission, DSU scholarship approval, and visa issuance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3 relative hover:border-[#D4AF37] hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-black text-2xl text-[#0C2340]">
                  {step.step}
                </span>
                <span className="rounded-full bg-amber-100 text-amber-900 text-[0.68rem] font-bold px-2.5 py-0.5">
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

      {/* 7. Service FAQs Accordion */}
      <section className="section-shell py-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions on Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Clear, transparent answers about our European admissions, DSU scholarships, and language academy.
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
                    ? "bg-white border-[#D4AF37] shadow-md ring-1 ring-[#D4AF37]/30"
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
                      isOpen ? "bg-[#0C2340] text-[#D4AF37] rotate-180" : "bg-slate-100 text-slate-600",
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

      {/* 8. Bottom CTA */}
      <CtaBand />
    </>
  );
}
