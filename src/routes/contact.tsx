import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, PageHero, RegisterButton, SectionHeading } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Affordable International | Maijdee, Noakhali" },
      {
        name: "description",
        content:
          "Visit Affordable International at Ashfak Plaza (Level 4), Maijdee Bazar, Maijdee Court, Noakhali. Call 01736-493995 or WhatsApp us for IELTS registration, Mock tests, and study abroad counseling.",
      },
      { property: "og:title", content: "Contact Affordable International | Maijdee, Noakhali" },
      {
        property: "og:description",
        content:
          "Official IDP & British Council Registration Point in Maijdee Court, Noakhali. Call 01736-493995 or email affordablebd25@gmail.com.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    program: "IELTS Preparation (Academic/GT)",
    destination: "United Kingdom",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Affordable International!\n\nI want to book a free consultation from your website contact page:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Program: ${formData.program}\n• Preferred Destination: ${formData.destination}\n• Question: ${formData.notes || "N/A"}`;
    window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Direct Student Desk"
        title="Speak With Our Mentors in Maijdee"
        subtitle="Walk in to our central campus at Ashfak Plaza (4th Floor), Maijdee Bazar, or contact our hotlines. Free profile evaluation and consultation without any file-opening charges."
        image="/assets/affordable-banner.jpg"
        imageAlt="Affordable International central office in Maijdee Bazar, Noakhali"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
      </PageHero>

      <section className="section-shell grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left Column: Office Details, Hotlines & Google Map */}
        <div className="space-y-6">
          <div className="card-clean rounded-3xl p-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-bold text-[#ED1C24]">
              <span className="h-2 w-2 rounded-full bg-[#ED1C24] animate-ping" />
              IDP & British Council Authorized
            </span>

            <h2 className="mt-3 font-display text-xl font-bold text-slate-900">{company.name}</h2>
            <p className="mt-1 text-xs font-semibold text-[#00AEEF]">{company.category}</p>

            <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs sm:text-sm text-slate-700">
              <p>
                <strong>📍 Office Address:</strong> {company.address.line1}
              </p>
              <p className="text-slate-600">
                {company.address.line2}, {company.address.city}
              </p>
              <p className="text-xs text-slate-500 pt-1">
                <strong>🕒 Office Hours:</strong> {company.hours}
              </p>
            </div>

            {/* Official Hotlines */}
            <div className="mt-6 border-t border-slate-100 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Direct Phone Hotlines (মাইজদী বাজার):
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-800">
                {company.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:+880${p.replace(/[^0-9]/g, "").slice(-10)}`}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-center hover:border-[#ED1C24] hover:text-[#ED1C24] transition-colors"
                  >
                    📞 {p}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp Quick Chat */}
            <div className="mt-4">
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Hello Affordable International, I need consultation.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald w-full text-center text-xs py-3"
              >
                💬 Chat Directly on WhatsApp: 01736-493995
              </a>
            </div>

            {/* Email & Facebook */}
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <a
                href={`mailto:${company.email}`}
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-center font-semibold text-slate-700 hover:text-[#ED1C24] transition-colors"
              >
                ✉️ {company.email}
              </a>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-center font-semibold text-slate-700 hover:text-[#1877F2] transition-colors"
              >
                📘 Facebook Page
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
            <div className="h-64 sm:h-72 w-full overflow-hidden rounded-2xl">
              <iframe
                src={company.mapsEmbed}
                title="Affordable International Maijdee Google Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Booking Form */}
        <div className="card-clean rounded-3xl p-8">
          <div className="border-b border-slate-100 pb-4">
            <span className="badge-clean badge-red">
              100% Free Consultation
            </span>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-900">
              Send Your Inquiry / Book an Appointment
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Fill in your details to immediately route your inquiry to our senior mentor on WhatsApp.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-600">
                ✓
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Inquiry Forwarded Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. If WhatsApp did not open automatically, tap below to chat with our Maijdee counselor.
              </p>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald inline-flex text-xs py-3 px-6 shadow-md"
              >
                💬 Open WhatsApp Chat
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Mahfuzur Rahman"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#ED1C24] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 01736-XXXXXX"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#ED1C24] focus:bg-white transition-colors"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Program / Service
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#ED1C24] focus:bg-white transition-colors"
                  >
                    <option value="IELTS Preparation (Academic/GT)">IELTS Preparation (Academic/GT)</option>
                    <option value="IELTS Mock Test Center Booking">IELTS Mock Test Center Booking</option>
                    <option value="Official Exam Booking (৳2,000 Cashback)">Official Exam Booking (৳2,000 Cashback)</option>
                    <option value="Spoken English & Writing">Spoken English & Writing</option>
                    <option value="Kids & Junior English">Kids & Junior English</option>
                    <option value="Study Abroad Career Counseling">Study Abroad Career Counseling</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Target Country
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#ED1C24] focus:bg-white transition-colors"
                  >
                    <option value="United Kingdom">🇬🇧 United Kingdom</option>
                    <option value="USA">🇺🇸 United States</option>
                    <option value="Canada">🇨🇦 Canada</option>
                    <option value="Australia">🇦🇺 Australia</option>
                    <option value="South Korea">🇰🇷 South Korea</option>
                    <option value="Malaysia">🇲🇾 Malaysia</option>
                    <option value="European Union">🇪🇺 European Union (Germany, Italy, etc.)</option>
                    <option value="Language Course Only">Language Course in Maijdee Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Query or Current Qualifications
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Completed HSC with GPA 4.80. Want to know about upcoming IELTS batch and UK September intake..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#ED1C24] focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full text-xs sm:text-sm py-3.5 shadow-md"
                >
                  Send Inquiry to WhatsApp (01736-493995) →
                </button>
              </div>

              <p className="text-[0.68rem] text-slate-500 text-center pt-1">
                🔒 We respect your privacy. No spam. You will be connected directly with an authorized counselor.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
