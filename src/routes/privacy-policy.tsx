import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Affordable International Maijdee" },
      {
        name: "description",
        content:
          "How Affordable International collects, uses, stores, and protects the personal information of students who register for our IELTS coaching and study abroad services in Maijdee Court, Noakhali.",
      },
      { property: "og:title", content: "Privacy Policy | Affordable International" },
      { property: "og:description", content: "Our commitment to protecting your personal information and student records." },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "1. Information We Collect",
    body: "When you register with Affordable International or request a free consultation, we collect your name, phone number, email address, preferred course (IELTS, Spoken, Kids English), academic history, test scores, and study abroad destination preferences. We also collect basic web analytics to enhance your browsing experience.",
  },
  {
    title: "2. How We Use Your Information",
    body: "Your information is used exclusively to evaluate your course or academic eligibility, conduct IELTS mock test evaluations, book official British Council or IDP exam slots, shortlist partner institutions, and process student visa applications. We also notify you of course schedules and scholarship opportunities.",
  },
  {
    title: "3. Information Sharing & Third Parties",
    body: "To register official exam dates or process university admissions, we share your verified academic documents only with authorized bodies (such as IDP Bangladesh, British Council, and chosen universities). We NEVER sell, rent, or trade your personal information with third-party marketing companies.",
  },
  {
    title: "4. Data Storage & Confidentiality",
    body: "All student files and records are maintained securely in systems accessible only to authorized counsellors at our Ashfak Plaza (4th Floor), Maijdee Bazar office. We retain records only as long as necessary to complete your language training and visa process.",
  },
  {
    title: "5. Your Privacy Rights",
    body: `You may request a copy of your records, request data correction, or ask to delete your personal information at any time by emailing ${company.email} or calling our hotline at ${company.phones[0]}.`,
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
