import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Alex Global Consultancy" },
      {
        name: "description",
        content:
          "How Alex Global Consultancy collects, protects, and handles personal data for study abroad counseling, language academy students, and visa processing.",
      },
      { property: "og:title", content: "Privacy Policy | Alex Global Consultancy" },
      { property: "og:description", content: "Our commitment to protecting your personal information and academic records." },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "1. Information We Collect",
    body: "When you register with Alex Global Consultancy (AGC) for study abroad admissions, language academy courses (IELTS, Spoken English, Kids English), or visa processing, we collect relevant personal details such as your name, phone/WhatsApp number, email address, academic qualifications, test scores, passports, and destination preferences. We also collect minimal anonymous web analytics to ensure website security and performance.",
  },
  {
    title: "2. How We Use Your Information",
    body: "Your information is used strictly to provide profile evaluations, course shortlisting, university application submissions, IELTS and language coaching scheduling, and visa processing across our 8 official service categories. All handling is coordinated securely between our Dhaka Corporate Office and London Branch.",
  },
  {
    title: "3. Information Sharing & Third Parties",
    body: "We share your documents solely with designated partner universities, awarding bodies, and official immigration authorities (e.g. UKVI, IRCC, Australian Home Affairs). We NEVER sell, rent, or trade your personal information with third-party marketers or brokers.",
  },
  {
    title: "4. Data Storage & Confidentiality",
    body: "Student and client records are stored securely in protected digital repositories accessible only to authorized AGC senior counselors. Physical and electronic records are maintained with high confidentiality.",
  },
  {
    title: "5. Your Privacy Rights",
    body: `You may request access to, correction of, or deletion of your records at any time by emailing ${company.emails[0]} or contacting our hotlines at ${company.phones[0]} / UK ${company.offices.london.phone}.`,
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal & Trust" title="Privacy Policy" subtitle="Last updated: September 2026">
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

