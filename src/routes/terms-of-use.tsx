import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Affordable International Maijdee" },
      {
        name: "description",
        content:
          "Terms and conditions governing educational services, IELTS coaching, mock tests, and free study abroad counseling at Affordable International in Maijdee Court, Noakhali.",
      },
      { property: "og:title", content: "Terms of Use | Affordable International" },
      { property: "og:description", content: "Terms governing our language coaching and study abroad counseling." },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "1. Scope of Our Services",
    body: "Affordable International provides IELTS coaching, authorized British Council and IDP test registration, mock tests, Spoken and Kids English training, and 100% free study abroad counselling and visa file assistance. Third-party statutory fees (such as official British Council exam fees, embassy visa fees, medical tests, and courier charges) are direct costs payable by the candidate.",
  },
  {
    title: "2. Document Authenticity & Student Responsibility",
    body: "Applicants are solely responsible for the legal validity and authenticity of all educational certificates, transcripts, test score cards, and bank sponsor papers submitted. Providing fraudulent documents will lead to immediate cancellation of mentorship.",
  },
  {
    title: "3. Admissions & Visa Decisions Disclaimer",
    body: "University admissions and scholarships are awarded solely at the discretion of the partner institutions. Student visa grants are determined entirely by the respective foreign embassies and high commissions. Affordable International ensures transparent guidance, profile matching, and comprehensive interview preparation, but does not guarantee visa outcomes or sell visas.",
  },
  {
    title: "4. Exam Fees & Schedule Currency",
    body: "Official IELTS exam registration fees are established by IDP and the British Council and are subject to official revisions (such as the September 2026 fee schedule updates). We ensure complete transparency and provide eligible promotional cashbacks as announced.",
  },
  {
    title: "5. Contact & Inquiries",
    body: `If you have questions regarding these terms, email ${company.email}, call ${company.phones[0]}, or visit our main office at ${company.address.line1}, ${company.address.line2}, ${company.address.city}.`,
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
