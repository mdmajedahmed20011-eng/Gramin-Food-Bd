import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Alex Global Consultancy | Dhaka & London" },
      {
        name: "description",
        content:
          "Visit Alex Global Consultancy at Aftabnagar Dhaka or Cranberry Lane London. Call 01886 91 33 91, 01611 40 20 93 or UK +44 07539228276 for 100% free counseling.",
      },
      { property: "og:title", content: "Contact Alex Global Consultancy | Dual Global Hubs" },
      {
        property: "og:description",
        content:
          "Alex Global Consultancy. Dhaka Corporate Office in Aftabnagar & London Branch in Cranberry Lane. Study Abroad & Language Academy.",
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
    program: "Study Abroad Admissions (Free Assessment)",
    destination: "United Kingdom",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Alex Global Consultancy!\n\nI want to book a free consultation from your website contact page:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service/Course: ${formData.program}\n• Preferred Country/Goal: ${formData.destination}\n• Question: ${formData.notes || "N/A"}`;
    window.open(`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Direct Advisory Desks"
        title="Connect With Our Dhaka & London Offices"
        subtitle="Walk in to our corporate office at Aftabnagar EHL Project, Dhaka, or connect with our London branch desk at Cranberry Lane. 100% free profile evaluation, language academy counseling, and visa guidance with zero file-opening charges."
        image="/latest-assets/banner.png"
        imageAlt="Alex Global Consultancy central offices in Dhaka and London"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
      </PageHero>

      {/* Dual Hub Cards Section */}
      <section className="section-shell py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Dhaka Corporate Office Card */}
          <div className="card-clean rounded-3xl p-8 border border-red-200/90 shadow-md bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="badge-clean badge-red text-xs">
                  <span className="h-2 w-2 rounded-full bg-red-600 animate-ping inline-block mr-1" />
                  Dhaka Corporate Hub
                </span>
                <span className="text-xs font-bold text-slate-500">Headquarters</span>
              </div>

              <h2 className="mt-4 font-display text-xl font-bold text-slate-900">
                {company.offices.dhaka.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                📍 {company.offices.dhaka.address}
              </p>

              <div className="mt-5 space-y-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-4">
                <p>
                  <strong>📞 Hotlines:</strong> {company.phones[0]} / {company.phones[1]}
                </p>
                <p>
                  <strong>🕒 Working Hours:</strong> {company.offices.dhaka.hours}
                </p>
                <p>
                  <strong>✉️ Email:</strong> {company.emails[0]}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Alex Global Consultancy Dhaka Office, I need an appointment.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald w-full text-center text-xs py-3 shadow-sm"
              >
                💬 WhatsApp Dhaka Office: {company.phones[0]}
              </a>
              <a
                href={`tel:${company.phones[0]}`}
                className="rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-center text-xs font-bold text-slate-800 hover:border-red-300 transition-colors"
              >
                📞 Call Hotline: {company.phones[0]}
              </a>
            </div>
          </div>

          {/* London Branch Office Card */}
          <div className="card-clean rounded-3xl p-8 border border-blue-200/90 shadow-md bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="badge-clean badge-navy text-xs">
                  🇬🇧 UK Branch Office
                </span>
                <span className="text-xs font-bold text-slate-500">London Hub</span>
              </div>

              <h2 className="mt-4 font-display text-xl font-bold text-slate-900">
                {company.offices.london.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                📍 {company.offices.london.address}
              </p>

              <div className="mt-5 space-y-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-4">
                <p>
                  <strong>📞 UK Phone / WhatsApp:</strong> {company.offices.london.phone}
                </p>
                <p>
                  <strong>🕒 Working Hours:</strong> {company.offices.london.hours}
                </p>
                <p>
                  <strong>🌐 Services:</strong> UK Admissions, CAS Guidance, Local Accommodation & Post-Arrival Care
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${company.offices.london.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Alex Global Consultancy London Office, I need UK assistance.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald w-full text-center text-xs py-3 shadow-sm"
              >
                💬 WhatsApp London Office: {company.offices.london.phone}
              </a>
              <a
                href={`tel:${company.offices.london.phone.replace(/[^0-9+]/g, "")}`}
                className="rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-center text-xs font-bold text-slate-800 hover:border-blue-300 transition-colors"
              >
                📞 Call UK Desk: {company.offices.london.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Form & Google Map */}
      <section className="section-shell grid gap-10 py-10 sm:py-16 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left Column: Maps and Social Channels */}
        <div className="space-y-6">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
            <div className="p-3 border-b border-slate-100">
              <p className="text-xs font-bold text-slate-900">📍 Dhaka Office Location Map</p>
              <p className="text-[0.7rem] text-slate-500">Merul Badda, Aftabnagar EHL Project, Dhaka</p>
            </div>
            <div className="h-64 sm:h-72 w-full overflow-hidden rounded-2xl">
              <iframe
                src={company.offices.dhaka.mapsEmbed}
                title="Alex Global Consultancy Dhaka Office Google Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
            <div className="p-3 border-b border-slate-100">
              <p className="text-xs font-bold text-slate-900">🇬🇧 London Office Location Map</p>
              <p className="text-[0.7rem] text-slate-500">The Arches Cranberry Lane, London E16 4BJ, UK</p>
            </div>
            <div className="h-64 sm:h-72 w-full overflow-hidden rounded-2xl">
              <iframe
                src={company.offices.london.mapsEmbed}
                title="Alex Global Consultancy London Office Google Map"
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
        <div className="card-clean rounded-3xl p-8 border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 pb-4">
            <span className="badge-clean badge-red">
              100% Free Consultation
            </span>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-900">
              Send Your Inquiry / Book an Appointment
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Fill in your details to immediately connect with an Alex Global counselor on WhatsApp with zero file-opening charges.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-600">
                ✓
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Inquiry Prepared Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. If WhatsApp did not open automatically, tap below to chat with an Alex Global Consultancy counselor.
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
                  placeholder="e.g. Tanzimul Islam"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-red-500 focus:bg-white transition-colors"
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
                  placeholder="e.g. 01886-XXXXXX"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-red-500 focus:bg-white transition-colors"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Service / Course
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-red-500 focus:bg-white transition-colors"
                  >
                    <option value="Study Abroad Admissions (Free Assessment)">Study Abroad (Free Assessment)</option>
                    <option value="IELTS Preparation Masterclass (Band 7.0+)">IELTS Preparation (Target 7.0+)</option>
                    <option value="Spoken English & Communication Fluency">Spoken English Fluency</option>
                    <option value="Kids English & Spoken Foundation">Kids English & Spoken Foundation</option>
                    <option value="Student Visa & University Application">Student Visa Filing</option>
                    <option value="Spouse & Dependent Family Visa">Spouse & Dependent Visa</option>
                    <option value="Tourist / Visit Visa Processing">Tourist / Visit Visa</option>
                    <option value="Business / Work Permit Advisory">Business / Work Permit</option>
                    <option value="Other Visa Categories (Medical/Sports/Migration)">Other Visa Categories</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-red-500 focus:bg-white transition-colors"
                  >
                    <option value="United Kingdom">🇬🇧 United Kingdom (London Support)</option>
                    <option value="Canada">🇨🇦 Canada (DLIs & PGWP)</option>
                    <option value="Australia">🇦🇺 Australia</option>
                    <option value="Cyprus">🇨🇾 Cyprus (Affordable Europe)</option>
                    <option value="Germany">🇩🇪 Germany (Free/Low Tuition)</option>
                    <option value="Finland">🇫🇮 Finland</option>
                    <option value="USA">🇺🇸 United States</option>
                    <option value="Malaysia">🇲🇾 Malaysia</option>
                    <option value="Dubai / UAE">🇦🇪 Dubai (UAE)</option>
                    <option value="Language Academy Only">🎯 Language Academy Only</option>
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
                  placeholder="e.g. Completed Bachelor's in BBA. Interested in Master's in UK or Cyprus, or want to join IELTS morning batch..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-red-500 focus:bg-white transition-colors"
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
                🔒 100% Free Profile Assessment. Zero file-opening charges. Direct support from Dhaka and London advisory desks.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

