import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Future Edge Education & Consultancy" },
      {
        name: "description",
        content:
          "Terms and conditions governing educational advisory services, admissions processing, and free study abroad counseling at Future Edge Education in Dhaka & Sylhet.",
      },
      { property: "og:title", content: "Terms of Use | Future Edge Education" },
      { property: "og:description", content: "Terms governing our overseas education counseling and visa processing guidance." },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "1. Scope of Advisory Services",
    body: "Future Edge Education & Consultancy provides 100% free profile evaluation, university selection, admission application processing, and student visa file preparation. We operate on a zero file-opening fee basis. Statutory third-party costs (such as university tuition deposits, official embassy visa fees, tuberculosis medical screening, and courier charges) are paid directly to the respective institutions or authorities.",
  },
  {
    title: "2. Document Authenticity & Applicant Responsibility",
    body: "Applicants are solely responsible for the authenticity and legality of all academic certificates, marksheets, medium of instruction (MOI) certificates, and financial sponsorship documents submitted. Future Edge maintains a strict zero-tolerance policy against fraudulent documentation.",
  },
  {
    title: "3. Admissions & Visa Decisions Disclaimer",
    body: "University admissions and scholarships are decided exclusively by the respective international universities. Student visa approvals are determined solely by sovereign immigration authorities (such as the UK Visas and Immigration, Australian Department of Home Affairs, and Canadian IRCC). While Future Edge has a proven track record of approvals in as fast as 3 to 5 days, we provide advisory mentorship and do not guarantee or sell visa outcomes.",
  },
  {
    title: "4. University Partner Sessions",
    body: "Partner delegation sessions (such as visits by Buckinghamshire New University UK representatives) are subject to scheduling by the institutions. Registered attendees receive priority on-spot evaluation and guidance.",
  },
  {
    title: "5. Contact & Inquiries",
    body: `If you have questions regarding these terms, email ${company.emails[0]}, call ${company.phones[0]}, or visit our corporate office at ${company.address.full}.`,
  },
];

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal & Conditions" title="Terms of Use" subtitle="Last updated: August 2026">
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
