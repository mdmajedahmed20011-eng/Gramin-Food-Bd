import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Breadcrumbs,
  BulletList,
  CtaBand,
  PageHero,
  RegisterButton,
  SectionHeading,
  IconCheck,
  IconSparkles,
  IconArrowRight,
  IconWhatsApp,
  IconPhone,
  IconGlobe,
} from "@/components/ui-blocks";
import { company, processSteps, services } from "@/lib/site-data";
import { useRegisterModal } from "@/components/register-modal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Admissions & Visa Services | Future Edge Education & Consultancy" },
      {
        name: "description",
        content:
          "Explore Future Edge Education services: 100% Free Profile Assessment, Fast-track UK Student Visa Processing (3-5 day approvals), Without IELTS (MOI) Admissions, University Selection, and Spouse Visa Support in Dhaka & Sylhet.",
      },
      { property: "og:title", content: "Admissions & Visa Services | Future Edge Education" },
      {
        property: "og:description",
        content:
          "Verified study abroad counseling, partner university sessions, and fast visa processing at Future Edge Education. Khan Tower, 359 DIT Road, Dhaka.",
      },
    ],
  }),
  component: Services,
});

const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "admissions-visa", label: "Admissions & Visas" },
  { id: "fast-moi", label: "Fast-Track & MOI" },
  { id: "delegations-aid", label: "Delegations & Aid" },
  { id: "family", label: "Spouse & Family" },
];

const comparisonData = [
  {
    feature: "File-Opening & Initial Counseling",
    futureEdge: "100% Free (Zero File-Opening Charge)",
    traditional: "৳10,000 – ৳30,000 upfront non-refundable fee",
    highlight: true,
  },
  {
    feature: "UK Student Visa Processing Timeline",
    futureEdge: "Fast-Track 3 to 5 Days (Proven Record)",
    traditional: "Standard 4 to 8 weeks with frequent delays",
    highlight: true,
  },
  {
    feature: "Without IELTS / MOI Pathways",
    futureEdge: "Direct Acceptance at Partner Universities (UK, Hungary)",
    traditional: "Limited or insisted on repetitive commercial exams",
    highlight: false,
  },
  {
    feature: "Foreign University Access",
    futureEdge: "Direct Delegations at Office (e.g. BNU UK with Ms. Ayesha Rauf)",
    traditional: "Indirect sub-agents without delegation access",
    highlight: true,
  },
  {
    feature: "Counselor Mentorship & Transparency",
    futureEdge: "Direct Guidance by Moshiur & Tanvir",
    traditional: "Junior telecallers and frequent staff turnover",
    highlight: false,
  },
];

const serviceFaqs = [
  {
    q: "Is Future Edge Education truly 100% free with no hidden charges?",
    a: "Yes, absolutely. We do not charge any file-opening fees, processing fees, or profile evaluation fees. Our advisory services are 100% free for students. Standard statutory fees (such as university tuition deposits, official UKVI/embassy visa fees, and medical tests) are paid directly to the respective institutions.",
  },
  {
    q: "How have students achieved UK visas in just 3 to 5 working days?",
    a: "Our fast-track results are achieved through meticulous compliance audits before submission. Senior counselors Moshiur and Tanvir personally review every CAS letter, sponsor bank solvency certificate, relationship document, and SOP to ensure zero ambiguity, allowing UKVI caseworkers to grant visas swiftly without delays or credibility interview referrals.",
  },
  {
    q: "Which programs accept Medium of Instruction (MOI) without IELTS?",
    a: "If you have completed your Bachelor's or previous education from an accredited English medium institution, partner universities in the UK (such as Southampton Solent, University of East London, and Buckinghamshire New University) as well as the University of Debrecen in Hungary accept an official MOI certificate for direct admission.",
  },
  {
    q: "Can my spouse and children travel with me on a student visa?",
    a: "Yes, dependent visas are available for eligible research degrees and postgraduate programs in the UK, as well as Green List programs in New Zealand and postgraduate studies in Canada and Australia. In New Zealand and Australia, eligible spouses are granted open work rights.",
  },
  {
    q: "How can I attend foreign university delegation sessions at your office?",
    a: "We regularly host international university recruitment advisors (such as Ms. Ayesha Rauf from Buckinghamshire New University UK) at our Khan Tower, 359 DIT Road Dhaka office. You can register for upcoming sessions through our website or WhatsApp hotline (+880 1805-041710) for on-spot evaluation.",
  },
];

function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const { open } = useRegisterModal();

  const filteredServices = services.filter((s) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "admissions-visa")
      return s.slug === "free-profile-assessment" || s.slug === "fast-track-visa-processing";
    if (activeCategory === "fast-moi")
      return s.slug === "fast-track-visa-processing" || s.slug === "without-ielts-moi-admissions";
    if (activeCategory === "delegations-aid")
      return s.slug === "university-partner-sessions" || s.slug === "scholarships-financial-aid";
    if (activeCategory === "family")
      return s.slug === "spouse-family-visa-support";
    return true;
  });

  return (
    <>
      {/* 1. High-Impact Page Hero with Breadcrumbs */}
      <PageHero
        eyebrow="Admissions & Visa Services"
        title="Comprehensive Study Abroad & Career Pathways"
        subtitle="From 100% free profile evaluations and record 3 to 5-day UK visa processing to without IELTS (MOI) university admissions and direct foreign partner sessions."
        image="/brand-assets/banner.jpg"
        imageAlt="Future Edge Education study abroad services and global destinations"
      >
        <div className="space-y-6">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={open}
              className="btn-luxury-primary text-xs sm:text-sm py-3.5 px-8 shadow-xl"
            >
              <IconSparkles className="w-4 h-4" />
              <span>Book 100% Free Assessment</span>
            </button>
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Future Edge Education! I want to inquire about your study abroad services.")}`}
              target="_blank"
              rel="noreferrer"
              className="btn-luxury-secondary text-xs sm:text-sm py-3.5 px-7 shadow-xl"
            >
              <IconWhatsApp className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp {company.phones[0]}</span>
            </a>
          </div>
        </div>
      </PageHero>

      {/* 2. Value Proposition Strip */}
      <section className="relative -mt-6 z-20 section-shell">
        <div className="rounded-3xl border border-[#D4AF37]/40 bg-[#090C10] p-6 sm:p-8 shadow-2xl text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            <div className="text-center pt-2 sm:pt-0">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5D365] block">File Fee</span>
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1 block">100% Free</span>
              <span className="text-[0.68rem] text-slate-300 mt-0.5 block">Zero File-Opening Charge</span>
            </div>
            <div className="text-center pt-4 sm:pt-0 sm:px-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5D365] block">Fast Track</span>
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1 block">3–5 Days</span>
              <span className="text-[0.68rem] text-slate-300 mt-0.5 block">UK Visa Grant Record</span>
            </div>
            <div className="text-center pt-4 sm:pt-0 sm:px-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5D365] block">Without IELTS</span>
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1 block">MOI Accepted</span>
              <span className="text-[0.68rem] text-slate-300 mt-0.5 block">UK & Hungary Programs</span>
            </div>
            <div className="text-center pt-4 sm:pt-0 sm:px-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5D365] block">Partner Delegations</span>
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1 block">Direct Access</span>
              <span className="text-[0.68rem] text-slate-300 mt-0.5 block">BNU UK & European Uni</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Filter & Search Bar */}
      <section className="section-shell pt-14 pb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="badge-clean badge-gold text-xs">
              Verified Service Portfolio
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Explore Our Advisory Solutions
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer",
                  activeCategory === cat.id
                    ? "bg-[#090C10] text-[#F5D365] border border-[#D4AF37] shadow-sm"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100",
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Rich Service Cards Grid */}
      <section className="section-shell pb-14 sm:pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {filteredServices.map((s) => (
            <article
              key={s.slug}
              id={s.slug}
              className="card-clean rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200 hover:border-[#D4AF37] shadow-sm hover:shadow-lg transition-all relative overflow-hidden group bg-white"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#D4AF37]/5 blur-2xl group-hover:bg-[#D4AF37]/15 transition-all" />

              <div>
                {/* Top Badge & Header */}
                <div className="flex items-start justify-between border-b border-slate-100 pb-5 gap-4">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FCF8EE] border border-[#D4AF37]/40 text-3xl shadow-sm">
                      {s.icon}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#FCF8EE] border border-[#D4AF37]/40 px-2.5 py-0.5 text-[0.65rem] font-bold text-[#8A6818]">
                          {s.highlightBadge || "Verified Service"}
                        </span>
                        <span className="text-[0.68rem] font-semibold text-slate-500">
                          ⏱ {s.timeline}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-slate-900 mt-1 leading-snug">
                        {s.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Summary Description */}
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {s.summary}
                </p>

                {/* Key Deliverables Block */}
                <div className="mt-6 rounded-2xl bg-slate-50 p-5 border border-slate-200">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center justify-between">
                    <span>What We Deliver:</span>
                    <span className="text-[0.65rem] text-[#8A6818] font-semibold">Senior Guided</span>
                  </p>
                  <BulletList items={s.points} />
                </div>

                {/* Counselor Guarantee Box */}
                <div className="mt-4 flex items-center justify-between rounded-xl bg-[#FCF8EE] px-4 py-2.5 border border-[#D4AF37]/30 text-xs text-[#8A6818] font-bold">
                  <span className="flex items-center gap-1.5">
                    <IconSparkles className="w-3.5 h-3.5 text-[#8A6818]" />
                    <span>{s.guarantee}</span>
                  </span>
                  <span className="text-[0.65rem] font-normal text-slate-600">Khan Tower Desk</span>
                </div>
              </div>

              {/* Action Footer */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={open}
                  className="btn-luxury-primary text-xs py-3 px-6 shadow-md cursor-pointer"
                >
                  <IconSparkles className="w-3.5 h-3.5" />
                  <span>Book Free Session</span>
                </button>

                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello Future Edge Education, I want to consult regarding ${s.title}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-luxury-secondary text-xs py-2.5 px-5 shadow-sm"
                >
                  <IconWhatsApp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Inquiries</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Interactive Comparison Matrix: Why Future Edge vs Traditional Agencies */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
        <SectionHeading
          eyebrow="The Future Edge Distinction"
          title="Why Choose Future Edge Education?"
          subtitle="See how our student-first philosophy, zero file-opening charges, and fast-track processing compare to traditional agencies."
        />

        <div className="mt-12 overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-white shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#090C10] text-white">
                  <th className="p-4 sm:p-6 font-display font-bold text-slate-200">Service Aspect</th>
                  <th className="p-4 sm:p-6 font-display font-bold text-[#F5D365] bg-[#141A25]">
                    ⭐ Future Edge Education
                  </th>
                  <th className="p-4 sm:p-6 font-display font-bold text-slate-400">Traditional Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      "hover:bg-slate-50 transition-colors",
                      idx % 2 === 0 ? "bg-white" : "bg-slate-50/50",
                    )}
                  >
                    <td className="p-4 sm:p-6 font-bold text-slate-900">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-6 font-bold text-[#8A6818] bg-[#FCF8EE]/60 border-x border-[#D4AF37]/20">
                      <div className="flex items-center gap-2">
                        <IconCheck className="w-4 h-4 text-[#8A6818] shrink-0" />
                        <span>{row.futureEdge}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 text-slate-500">
                      {row.traditional}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. 6-Step Connected Milestone Roadmap */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
        <SectionHeading
          eyebrow="Milestone Roadmap"
          title="From Free Profile Assessment to Flight Departure"
          subtitle="A transparent, proven step-by-step methodology guided personally by senior counselors Moshiur & Tanvir."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="card-clean rounded-3xl p-6 border border-slate-200 hover:border-[#D4AF37] relative overflow-hidden transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-3xl font-extrabold text-[#AA771C]">
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

      {/* 7. Dedicated Services FAQ Accordion */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
        <SectionHeading
          eyebrow="Clear Guidance"
          title="Frequently Asked Questions About Our Services"
          subtitle="Everything you need to know about our free counseling, fast-track visa processing, and MOI admissions."
        />

        <div className="mt-10 max-w-3xl mx-auto space-y-3">
          {serviceFaqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={faq.q}
                className={cn(
                  "overflow-hidden rounded-2xl border transition-all shadow-sm",
                  isOpen ? "border-[#D4AF37] bg-white" : "border-slate-200 bg-white/80 hover:border-slate-300",
                )}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left font-display text-sm sm:text-base font-bold text-slate-900 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-base font-bold transition-transform duration-300",
                      isOpen
                        ? "bg-[#FCF8EE] text-[#8A6818] rotate-45 border border-[#D4AF37]/40"
                        : "bg-slate-100 text-slate-600",
                    )}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 bg-slate-50/50 p-5 sm:p-6 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. Final Luxury CTA Pre-Footer */}
      <CtaBand />
    </>
  );
}
