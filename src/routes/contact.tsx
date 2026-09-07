import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Breadcrumbs, PageHero } from "@/components/ui-blocks";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Academic Allies — Finlay Square Chattogram" },
      {
        name: "description",
        content:
          "Visit Academic Allies at Finlay Square (7th Floor), CDA Avenue, East Nasirabad, Chattogram or Zeenat Abad branch. Call 01859-870936, 01812-386307 for 100% genuine European counseling.",
      },
      { property: "og:title", content: "Contact Academic Allies | Chattogram Headquarters" },
      {
        property: "og:description",
        content:
          "Academic Allies. Corporate Headquarters at Finlay Square (7th Floor), CDA Avenue, Chattogram. European Higher Education, DSU Scholarships & Language Academy.",
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
    program: "European Study Abroad (Italy / DSU Scholarship)",
    destination: "Italy (University of Padova)",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Academic Allies!\n\nI want to book a free consultation from your website contact page:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service/Course: ${formData.program}\n• Preferred Country/Goal: ${formData.destination}\n• Question: ${formData.notes || "N/A"}`;
    window.open(`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Direct Advisory Desks"
        title="Connect With Our Chattogram Corporate Headquarters"
        subtitle="Walk in to our corporate suites at Finlay Square (7th Floor), CDA Avenue, East Nasirabad, Chattogram, or visit our Zeenat Abad branch. Free profile evaluation, Italian DSU scholarship guidance, and British Council certified IELTS academy."
        image="/assets/banner.jpg"
        imageAlt="Academic Allies headquarters at Finlay Square Chattogram"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
      </PageHero>

      {/* Dual Office Cards Section */}
      <section className="section-shell py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Chattogram Corporate HQ Card */}
          <div className="card-clean rounded-3xl p-8 border border-[#D4AF37]/40 shadow-md bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="badge-clean badge-navy text-xs">
                  <span className="h-2 w-2 rounded-full bg-[#D4AF37] animate-ping inline-block mr-1" />
                  Corporate Headquarters
                </span>
                <span className="text-xs font-bold text-slate-500">7th Floor</span>
              </div>

              <h2 className="mt-4 font-display text-xl font-bold text-slate-900">
                {company.headquarters.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                📍 {company.headquarters.full}
              </p>

              <div className="mt-5 space-y-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-4">
                <p>
                  <strong>📞 Hotlines:</strong> {company.phones[0]} / {company.phones[1]}
                </p>
                <p>
                  <strong>🕒 Working Hours:</strong> {company.hours}
                </p>
                <p>
                  <strong>✉️ Email:</strong> {company.emails[0]}
                </p>
                <p>
                  <strong>🏛️ Key Landmark:</strong> 2 No. Gate, East Nasirabad, Chittagong
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Academic Allies HQ, I want to book an appointment.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald w-full text-center text-xs py-3 shadow-sm"
              >
                💬 WhatsApp HQ: {company.phones[0]}
              </a>
              <a
                href={`tel:${company.phones[0].replace(/[^0-9]/g, "")}`}
                className="rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-center text-xs font-bold text-slate-800 hover:border-[#D4AF37] transition-colors"
              >
                📞 Call Hotline: {company.phones[0]}
              </a>
            </div>
          </div>

          {/* Chattogram Branch Office Card */}
          <div className="card-clean rounded-3xl p-8 border border-slate-200 shadow-md bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="badge-clean badge-gold text-xs">
                  🏛️ Branch Office
                </span>
                <span className="text-xs font-bold text-slate-500">Chittagong-4203</span>
              </div>

              <h2 className="mt-4 font-display text-xl font-bold text-slate-900">
                {company.offices.chattogramBranch.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                📍 {company.offices.chattogramBranch.address}
              </p>

              <div className="mt-5 space-y-2 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-4">
                <p>
                  <strong>📞 Branch Phones:</strong> {company.phones[2]} / {company.phones[3]}
                </p>
                <p>
                  <strong>🕒 Working Hours:</strong> {company.hours}
                </p>
                <p>
                  <strong>🌐 Services:</strong> European Admissions, DSU Scholarship File Audit & Language Academy
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${company.phones[2].replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Academic Allies Branch Office, I need counseling assistance.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald w-full text-center text-xs py-3 shadow-sm"
              >
                💬 WhatsApp Branch: {company.phones[2]}
              </a>
              <a
                href={`tel:${company.phones[2].replace(/[^0-9]/g, "")}`}
                className="rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-center text-xs font-bold text-slate-800 hover:border-[#D4AF37] transition-colors"
              >
                📞 Call Branch Desk: {company.phones[2]}
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
              <p className="text-xs font-bold text-slate-900">📍 Finlay Square Corporate HQ Map</p>
              <p className="text-[0.7rem] text-slate-500">Finlay Square (7th Floor), CDA Avenue, 2 No. Gate, East Nasirabad, Chattogram</p>
            </div>
            <div className="h-64 sm:h-72 w-full overflow-hidden rounded-2xl">
              <iframe
                src={company.headquarters.mapsEmbed}
                title="Academic Allies Finlay Square Chattogram HQ Google Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            <h3 className="font-display font-bold text-base text-slate-900">
              Official Social Channels & Hotline Matrix
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Connect with us directly across our verified channels or schedule an in-person profile audit at Finlay Square.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-200 p-3 text-center text-xs font-bold text-slate-800 hover:border-[#1877F2] hover:text-[#1877F2] transition-colors"
              >
                📘 Facebook (47k+ Followers)
              </a>
              <a
                href={company.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-200 p-3 text-center text-xs font-bold text-slate-800 hover:border-red-600 hover:text-red-600 transition-colors"
              >
                📺 YouTube Channel
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Booking Form */}
        <div className="card-clean rounded-3xl p-8 border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 pb-4">
            <span className="badge-clean badge-navy">
              100% Free Counseling
            </span>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-slate-900">
              Send Your Inquiry / Book an Appointment
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Fill in your details to immediately connect with an Academic Allies counselor on WhatsApp with 100% genuine portal processing.
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
                Thank you, <strong>{formData.name}</strong>. If WhatsApp did not open automatically, tap below to chat with an Academic Allies counselor.
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
                  placeholder="e.g. 01859-XXXXXX"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#D4AF37] focus:bg-white transition-colors"
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
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#D4AF37] focus:bg-white transition-colors"
                  >
                    <option value="European Study Abroad (Italy / DSU Scholarship)">European Study (Italy DSU Scholarship)</option>
                    <option value="IELTS Preparation Masterclass (Target Band 7.0+)">IELTS Preparation (Target 7.0+)</option>
                    <option value="Spoken English & Communication Fluency">Spoken English Fluency</option>
                    <option value="Kids English & Spoken Foundation">Kids English & Foundation</option>
                    <option value="Nordic Admissions (Sweden / Finland)">Nordic Study (Sweden / Finland)</option>
                    <option value="UK Admissions & Priority CAS">UK Admissions & CAS</option>
                    <option value="Canada Admissions & PAL / SDS">Canada Admissions</option>
                    <option value="USA F-1 Visa & Mock Interview">USA F-1 Mock Interview</option>
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
                    <option value="Italy (University of Padova)">🇮🇹 Italy (Padova / DSU €7,000/yr)</option>
                    <option value="Sweden">🇸🇪 Sweden</option>
                    <option value="Finland">🇫🇮 Finland</option>
                    <option value="United Kingdom">🇬🇧 United Kingdom</option>
                    <option value="Canada">🇨🇦 Canada</option>
                    <option value="United States">🇺🇸 United States</option>
                    <option value="Malaysia">🇲🇾 Malaysia</option>
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
                  placeholder="e.g. Completed Bachelor's in CSE. Interested in Master's in Italy with DSU Scholarship, or want to join IELTS evening batch..."
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
                🔒 100% Genuine Portals. Zero fake visas. Direct guidance from our Finlay Square 7th Floor Chattogram headquarters.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
