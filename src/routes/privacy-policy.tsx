import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Future Edge Education & Consultancy" },
      {
        name: "description",
        content:
          "How Future Edge Education & Consultancy collects, uses, stores, and protects the personal information of students who register for our study abroad counseling and visa services in Dhaka & Sylhet.",
      },
      { property: "og:title", content: "Privacy Policy | Future Edge Education" },
      { property: "og:description", content: "Our commitment to protecting your personal information and academic records." },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "1. Information We Collect",
    body: "When you register with Future Edge Education or request a free consultation, we collect your name, phone number, email address, preferred destination (UK, Europe, Australia, Canada, New Zealand, Malaysia, USA), academic transcripts, certificates, medium of instruction (MOI) letters, test scores (if any), and passport details. We also collect basic web analytics to improve your experience.",
  },
  {
    title: "2. How We Use Your Information",
    body: "Your information is used exclusively to assess academic and visa eligibility, conduct university course shortlisting, coordinate direct partner delegations (such as Buckinghamshire New University), submit admission applications, and assemble complete student visa files with foreign embassies and high commissions.",
  },
  {
    title: "3. Information Sharing & Third Parties",
    body: "To process your admission and visa applications, your documents are shared only with designated partner universities, awarding bodies, and relevant visa authorities. We NEVER sell, rent, or trade your personal information with third-party advertisers or lead-generation brokers.",
  },
  {
    title: "4. Data Storage & Confidentiality",
    body: "All student files and records are maintained securely in systems accessible only to authorized senior advisors at our Khan Tower, 359 DIT Road, Dhaka office. We retain records only as long as necessary to complete your university admissions and visa processing.",
  },
  {
    title: "5. Your Privacy Rights",
    body: `You may request a review of your profile records, request data correction, or ask to delete your personal information at any time by emailing ${company.emails[0]} or calling our direct hotline at ${company.phones[0]}.`,
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal & Trust" title="Privacy Policy" subtitle="Last updated: August 2026">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]} />
      </PageHero>

      <section className="section-shell py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-8 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
          {sections.map((s) => (
            <div key={s.title} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
              <h2 className="font-display text-base sm:text-lg font-bold text-slate-900">{s.title}</h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
