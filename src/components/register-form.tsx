import { useState } from "react";
import { company, destinations } from "@/lib/site-data";

const field =
  "w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all hover:bg-white focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500/10";
const label = "mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700";

const serviceOptions = [
  "100% Free Profile Assessment & Counseling",
  "Study Abroad Admissions (UK, USA, Canada, Australia, Europe)",
  "IELTS Preparation Masterclass (Target Band 7.0+)",
  "Spoken English & Communication Fluency",
  "Kids English & Spoken Foundation",
  "Student & Spouse Visa Filing",
  "Tourist & Visit Visa (Schengen 27, UK, USA, Canada)",
  "Business & Work Permit Visa Advisory",
];

const officeOptions = [
  "Dhaka Corporate Office (Merul Badda, Aftabnagar)",
  "London Branch Office (The Arches Cranberry Lane)",
  "Online Consultation (WhatsApp / Zoom)",
];

export function RegisterForm({ onDone }: { onDone?: () => void }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "100% Free Profile Assessment & Counseling",
    destination: "United Kingdom",
    currentStatus: "Bachelor's Graduate (Masters Aspirant)",
    office: "Dhaka Corporate Office (Merul Badda, Aftabnagar)",
    message: "",
  });

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const whatsappHref = () => {
    const lines = [
      "✨ Free Consultation Request — Alex Global Consultancy",
      `👤 Name: ${form.name}`,
      `📞 Phone: ${form.phone}`,
      form.email ? `✉️ Email: ${form.email}` : "",
      `🎯 Interested Service: ${form.service}`,
      `🌍 Destination: ${form.destination}`,
      `🎓 Status/Background: ${form.currentStatus}`,
      `🏢 Preferred Office: ${form.office}`,
      form.message ? `📝 Notes: ${form.message}` : "",
      "\nI would like to schedule a free counseling session with an Alex Global advisor.",
    ].filter(Boolean);
    return `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="py-10 text-center space-y-4">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl shadow-inner">
          ✅
        </div>
        <h3 className="font-display text-2xl font-black text-slate-900">
          Booking Confirmed! 🎉
        </h3>
        <p className="mx-auto max-w-md text-sm text-slate-600 leading-relaxed">
          Thank you, <strong className="text-slate-900">{form.name}</strong>! Your free consultation has been booked. An{" "}
          <strong>{company.name}</strong> senior advisor will contact you on{" "}
          <strong className="text-emerald-700">{form.phone}</strong> shortly.
        </p>
        <div className="mt-2 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-xs text-emerald-800 text-left space-y-1">
          <p>✔ Zero file-opening fee · Free profile evaluation</p>
          <p>✔ Dhaka (Aftabnagar) &amp; London (Cranberry Lane) offices</p>
          <p>✔ Response typically within 1 business hour</p>
        </div>
        {onDone && (
          <button
            type="button"
            onClick={onDone}
            className="mt-4 btn-luxury-primary text-xs py-3 px-8 justify-center shadow-md"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="border-b border-slate-100 pb-3 mb-2">
        <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-red-600">
          Alex Global Consultancy · Free Evaluation
        </span>
        <h3 className="font-display text-xl font-black text-slate-900">
          Book Your Free Assessment
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Zero file-opening fee · Honest advice from Dhaka & London
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="reg-name" className={label}>
            Full Name *
          </label>
          <input
            id="reg-name"
            type="text"
            required
            value={form.name}
            onChange={set("name")}
            placeholder="e.g. Tanzimul Islam"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="reg-phone" className={label}>
            Mobile / WhatsApp Number *
          </label>
          <input
            id="reg-phone"
            type="tel"
            required
            value={form.phone}
            onChange={set("phone")}
            placeholder="e.g. 01886-XXXXXX"
            className={field}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="reg-service" className={label}>
            Interested Service / Course
          </label>
          <select
            id="reg-service"
            value={form.service}
            onChange={set("service")}
            className={field}
          >
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="reg-dest" className={label}>
            Preferred Country / Destination
          </label>
          <select
            id="reg-dest"
            value={form.destination}
            onChange={set("destination")}
            className={field}
          >
            {destinations.map((d) => (
              <option key={d.slug} value={d.name}>
                {d.flag} {d.name}
              </option>
            ))}
            <option value="Europe / Schengen 27">🇪🇺 Europe / Schengen 27</option>
            <option value="Language Course (IELTS / Spoken / Kids)">🎯 Language Training Only</option>
            <option value="Other / Not Decided">🌍 Other / Need Advice</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="reg-status" className={label}>
            Current Academic / Work Status
          </label>
          <select
            id="reg-status"
            value={form.currentStatus}
            onChange={set("currentStatus")}
            className={field}
          >
            <option value="HSC / A-Level Completed (Bachelor's Aspirant)">HSC / A-Level Completed (Bachelor's)</option>
            <option value="Bachelor's Graduate (Master's Aspirant)">Bachelor's Graduate (Master's)</option>
            <option value="Diploma / Polytechnic Holder">Diploma / Polytechnic Graduate</option>
            <option value="Working Professional (Visa / Language)">Working Professional (Visa / Language)</option>
            <option value="Parent for Kids English Course">Parent inquiring for Kids English</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="reg-office" className={label}>
            Preferred Office / Meeting Mode
          </label>
          <select
            id="reg-office"
            value={form.office}
            onChange={set("office")}
            className={field}
          >
            {officeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="reg-email" className={label}>
          Email Address (Optional)
        </label>
        <input
          id="reg-email"
          type="email"
          value={form.email}
          onChange={set("email")}
          placeholder="e.g. name@example.com"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="reg-msg" className={label}>
          Specific Questions or IELTS Score (Optional)
        </label>
        <textarea
          id="reg-msg"
          rows={2}
          value={form.message}
          onChange={set("message")}
          placeholder="Tell us your GPA, IELTS score (or without IELTS), target intake, etc."
          className={field}
        />
      </div>

      <button
        type="submit"
        className="btn-luxury-primary w-full text-xs py-3.5 mt-2 justify-center shadow-lg hover:shadow-red-600/30"
      >
        <span>Book Free Appointment</span>
        <span>→</span>
      </button>

      <p className="text-center text-[0.7rem] text-slate-600">
        🔒 100% Privacy Guaranteed · Zero File Opening Fees · Instant Counselor Response
      </p>
    </form>
  );
}
