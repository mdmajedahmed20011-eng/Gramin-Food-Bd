import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Alex Global Consultancy" },
      {
        name: "description",
        content:
          "Terms and conditions governing educational advisory services, admissions processing, and free study abroad counseling at Alex Global Consultancy.",
      },
      { property: "og:title", content: "Terms of Use | Alex Global Consultancy" },
      { property: "og:description", content: "Terms governing our overseas education counseling, language academy, and visa processing guidance." },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "1. Scope of Advisory Services",
    body: "Alex Global Consultancy (AGC) provides 100% free profile evaluation, university selection, admission application processing, language academy enrollment, and visa file preparation across our 8 service categories. We operate on a zero file-opening fee basis. Statutory third-party costs (such as university tuition deposits, official embassy visa fees, tuberculosis medical screening, and courier charges) are paid directly to the respective institutions or authorities.",
  },
  {
    title: "2. Document Authenticity & Applicant Responsibility",
    body: "Applicants are solely responsible for the authenticity and legality of all academic certificates, marksheets, medium of instruction (MOI) certificates, and financial sponsorship documents submitted. AGC maintains a strict zero-tolerance policy against fraudulent documentation.",
  },
  {
    title: "3. Admissions & Visa Decisions Disclaimer",
    body: "University admissions and scholarships are decided exclusively by the respective international universities. Visa approvals are determined solely by sovereign immigration authorities (such as UKVI, IRCC, Australian Home Affairs, and European Embassies). While Alex Global Consultancy provides comprehensive preparation and consular mock interviews, sovereign decisions remain with the respective government bodies.",
  },
  {
    title: "4. Language Academy Terms",
    body: "Students enrolled in our IELTS Preparation, Spoken English, or Kids English programs receive personalized materials and scheduled interactive mock tests. Batch schedules and online session links are coordinated by our Dhaka academic wing.",
  },
  {
    title: "5. Contact & Inquiries",
    body: `If you have questions regarding these terms, email ${company.emails[0]}, call ${company.phones[0]} / UK ${company.offices.london.phone}, or visit our Dhaka Corporate Office at ${company.offices.dhaka.address}.`,
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

