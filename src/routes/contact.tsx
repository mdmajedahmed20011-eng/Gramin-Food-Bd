import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Future Edge Education & Consultancy | Dhaka | Sylhet" },
      {
        name: "description",
        content:
          "Visit Future Edge Education at Khan Tower, 359 DIT Road, Dhaka 1219. Call 01805-041710 or WhatsApp us for 100% free profile evaluation, fast-track UK visa processing, and university admissions.",
      },
      { property: "og:title", content: "Contact Future Edge Education | Dhaka | Sylhet" },
      {
        property: "og:description",
        content:
          "Future Edge Education & Consultancy. Khan Tower, 359 DIT Road, Dhaka. Call 01805-041710 or email c1@futureedgeeducation.com.",
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
    program: "100% Free Profile Assessment & Counseling",
    destination: "United Kingdom",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Future Edge Education!\n\nI want to book a free consultation from your website contact page:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service: ${formData.program}\n• Preferred Destination: ${formData.destination}\n• Question: ${formData.notes || "N/A"}`;
    window.open(`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Direct Counseling Desk"
        title="Connect With Senior Counselors in Dhaka"
        subtitle="Walk in to our corporate office at Khan Tower, 359 DIT Road, Dhaka 1219, or connect via WhatsApp and hotline. 100% free profile evaluation and transparent guidance without any file-opening charges."
        image="/brand-assets/banner.jpg"
        imageAlt="Future Edge Education central office in Dhaka"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
      </PageHero>

      <section className="section-shell grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left Column: Office Details, Hotlines & Google Map */}
        <div className="space-y-6">
          <div className="card-clean rounded-3xl p-8 border border-[#D4AF37]/30 shadow-md">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FCF8EE] border border-[#D4AF37]/40 px-3 py-1 text-xs font-bold text-[#8A6818]">
              <span className="h-2 w-2 rounded-full bg-[#D4AF37] animate-ping" />
              Verified Corporate Head Office
            </span>

            <h2 className="mt-3 font-display text-xl font-bold text-slate-900">{company.legalName}</h2>
            <p className="mt-1 text-xs font-semibold text-[#8A6818]">Dhaka | Sylhet Presence · Top Study Abroad Consultant in BD</p>

            <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs sm:text-sm text-slate-700">
              <p>
                <strong>📍 Office Address:</strong> {company.address.line1}
              </p>
              <p className="text-slate-600">
                {company.address.line2}, {company.address.city} {company.address.postalCode}
              </p>
              <p className="text-xs text-slate-500 pt-1">
                <strong>🕒 Office Hours:</strong> {company.hours}
              </p>
              <p className="text-xs text-slate-500">
                <strong>Senior Advisors:</strong> Moshiur & Tanvir
              </p>
            </div>

            {/* Official Hotlines */}
            <div className="mt-6 border-t border-slate-100 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Official Hotline Numbers:
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-800">
                {company.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:+880${p.replace(/[^0-9]/g, "").slice(-10)}`}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-center hover:border-[#D4AF37] hover:text-[#8A6818] transition-colors"
                  >
                    📞 {p}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp Quick Chat */}
            <div className="mt-4">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Future Edge Education, I need consultation.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald w-full text-center text-xs py-3 shadow-sm"
              >
                💬 Chat Directly on WhatsApp: {company.phones[0]}
              </a>
            </div>

            {/* Email & Facebook */}
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <a
                href={`mailto:${company.emails[0]}`}
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-center font-semibold text-slate-700 hover:text-[#8A6818] transition-colors"
              >
                ✉️ {company.emails[0]}
              </a>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-center font-semibold text-slate-700 hover:text-[#1877F2] transition-colors"
              >
                📘 Facebook (@FEEducation)
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
            <div className="h-64 sm:h-72 w-full overflow-hidden rounded-2xl">
              <iframe
                src={company.mapsEmbed}
                title="Future Edge Education Khan Tower Dhaka Google Map"
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
        <div className="card-clean rounded-3xl p-8 border border-slate-200">
          <div className="border-b border-slate-100 pb-4">
            <span className="badge-clean badge-gold">
              100% Free Consultation
            </span>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-900">
              Send Your Inquiry / Book an Appointment
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Fill in your details to immediately route your inquiry to senior counselors Moshiur & Tanvir on WhatsApp.
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
                Thank you, <strong>{formData.name}</strong>. If WhatsApp did not open automatically, tap below to chat with our Future Edge counselor.
              </p>
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`}
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
                  placeholder="e.g. Golam Kibria Chowdhury"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#D4AF37] focus:bg-white transition-colors"
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
                  placeholder="e.g. 01805-XXXXXX"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#D4AF37] focus:bg-white transition-colors"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Service / Program
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#D4AF37] focus:bg-white transition-colors"
                  >
                    <option value="100% Free Profile Assessment & Counseling">100% Free Profile Assessment</option>
                    <option value="Fast-Track UK Student Visa Processing">Fast-Track UK Student Visa (3-5 Days)</option>
                    <option value="Without IELTS (MOI) Admissions">Without IELTS (MOI) Admissions</option>
                    <option value="Buckinghamshire New University (BNU) Delegation">BNU Delegation Session</option>
                    <option value="Study in Europe (Hungary, Denmark, Finland)">Study in Europe (Hungary/EU)</option>
                    <option value="Spouse & Dependent Visa Support">Spouse & Dependent Visa Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#D4AF37] focus:bg-white transition-colors"
                  >
                    <option value="United Kingdom">🇬🇧 United Kingdom</option>
                    <option value="Europe (Hungary, Denmark, Finland, Sweden)">🇪🇺 Europe (Hungary, Denmark, Finland, Sweden)</option>
                    <option value="Australia">🇦🇺 Australia</option>
                    <option value="Canada">🇨🇦 Canada</option>
                    <option value="New Zealand">🇳🇿 New Zealand</option>
                    <option value="Malaysia">🇲🇾 Malaysia</option>
                    <option value="USA">🇺🇸 United States</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Query or Academic Background
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Completed Bachelor's in CSE. Want to apply for MSc in AI in UK with MOI or without IELTS for upcoming intake..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#D4AF37] focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-luxury-primary w-full text-xs sm:text-sm py-3.5 shadow-md"
                >
                  Send Inquiry to WhatsApp ({company.phones[0]}) →
                </button>
              </div>

              <p className="text-[0.68rem] text-slate-500 text-center pt-1">
                🔒 100% Free Profile Assessment. Zero file-opening charges. Connected directly with senior counselors Moshiur & Tanvir.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
