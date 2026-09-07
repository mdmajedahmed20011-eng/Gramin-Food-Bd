import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Academic Allies" },
      {
        name: "description",
        content:
          "Terms and conditions governing educational advisory services, admissions processing, and free study abroad counseling at Academic Allies.",
      },
      { property: "og:title", content: "Terms of Use | Academic Allies" },
      { property: "og:description", content: "Terms governing our overseas education counseling, European scholarships, and language academy." },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "1. Scope of Advisory Services",
    body: "Academic Allies provides 100% genuine profile evaluation, European university course selection, Universitaly portal pre-enrollment, DSU scholarship filing, language academy coaching, and visa file preparation. We strictly operate via official university and embassy portals. Statutory third-party costs (such as university tuition deposits, official embassy visa fees, medical screening, and translation/legalization charges) are paid directly to the respective institutions or authorities.",
  },
  {
    title: "2. Anti-Fraud Policy & Document Authenticity",
    body: "Applicants are solely responsible for the authenticity and legality of all academic certificates, transcripts, MOI letters, and financial sponsorship documents submitted. Academic Allies enforces a zero-tolerance policy against fraudulent documentation, fake work offers, or illegal visa schemes ('Dalaler Fake Visa Noy').",
  },
  {
    title: "3. Admissions & Visa Decisions Disclaimer",
    body: "University admissions, tuition waivers, and regional scholarships (including Italian DSU) are decided exclusively by the respective international universities and regional welfare boards. Visa approvals are determined solely by sovereign immigration authorities and embassies. While Academic Allies provides comprehensive mock interviews and verified documentation assembly, sovereign decisions remain with the respective government bodies.",
  },
  {
    title: "4. Language Academy Terms",
    body: "Students enrolled in our IELTS Preparation, Spoken English, or Kids English programs receive specialized materials and scheduled interactive mock tests conducted by British Council & IDP certified faculty. Batch schedules and diagnostic tests are coordinated through our Chattogram headquarters.",
  },
  {
    title: "5. Contact & Corporate Headquarters",
    body: `If you have questions regarding these terms, email ${company.emails[0]}, call ${company.phones[0]} / ${company.phones[1]}, or visit our Corporate Headquarters at Finlay Square (7th Floor), CDA Avenue, 2 No. Gate, East Nasirabad, Chattogram.`,
  },
];

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal & Conditions" title="Terms of Use" subtitle="Last updated: September 2026">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Terms of Use" }]} />
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
