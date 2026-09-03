import { useState } from "react";
import { company, destinations } from "@/lib/site-data";

const field =
  "w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all hover:bg-white focus:border-[#ED1C24] focus:bg-white focus:ring-2 focus:ring-[#ED1C24]/10";
const label = "mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700";

const serviceOptions = [
  "IELTS Preparation (Academic / GT)",
  "IELTS Mock Test Booking (Exam Hall + Headphones)",
  "Official IELTS Exam Registration (৳2,000 Cashback)",
  "Spoken English & Writing Fluency",
  "Kids & Junior English Program",
  "Free Study Abroad Career Counselling",
  "University Admission & Visa Guidance",
];

export function RegisterForm({ onDone }: { onDone?: () => void }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "IELTS Preparation (Academic / GT)",
    destination: "United Kingdom",
    currentStatus: "HSC Passed / Student",
    message: "",
  });

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const whatsappHref = () => {
    const lines = [
      "✨ Free Consultation & Enrollment Request — Affordable International",
      `👤 Name: ${form.name}`,
      `📞 Phone: ${form.phone}`,
      form.email ? `✉️ Email: ${form.email}` : "",
      `🎯 Interested Program: ${form.service}`,
      `🌍 Preferred Country: ${form.destination}`,
      `🎓 Current Status: ${form.currentStatus}`,
      form.message ? `📝 Notes: ${form.message}` : "",
      "\nI would like to speak with a mentor at your Ashfak Plaza, Maijdee office.",
    ].filter(Boolean);
    return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSent(true);
    window.open(whatsappHref(), "_blank");
  };

  if (sent) {
    return (
      <div className="py-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-600 shadow-inner">
          ✓
        </div>
        <h3 className="mt-4 font-display text-2xl font-extrabold text-slate-900">
          Request Submitted!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
          Thank you, <strong className="text-slate-900">{form.name}</strong>. An Affordable International advisor is preparing your customized roadmap.
        </p>

        <div className="mt-6 rounded-2xl border border-sky-200 bg-sky-50/70 p-4 text-xs text-sky-900">
          ⚡ <strong>Direct WhatsApp Support:</strong> If WhatsApp didn't open automatically, tap below to chat directly with our Maijdee counselor.
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="btn-emerald text-xs py-3 px-6 shadow-md"
          >
            💬 Open in WhatsApp
          </a>
          {onDone && (
            <button
              type="button"
              onClick={onDone}
              className="btn-secondary text-xs py-3 px-6"
            >
              Close Window
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
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
            placeholder="e.g. Tanvir Ahmed"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="reg-phone" className={label}>
            Mobile / WhatsApp *
          </label>
          <input
            id="reg-phone"
            type="tel"
            required
            value={form.phone}
            onChange={set("phone")}
            placeholder="e.g. 01736-XXXXXX"
            className={field}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="reg-service" className={label}>
            Interested Program / Service
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
            Preferred Destination
          </label>
          <select
            id="reg-dest"
            value={form.destination}
            onChange={set("destination")}
            className={field}
          >
            {destinations.map((d) => (
              <option key={d.slug} value={d.name}>
                {d.flag} Study in {d.name}
              </option>
            ))}
            <option value="Only IELTS / Spoken Course">Only IELTS / Spoken / Kids English</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="reg-status" className={label}>
            Current Academic Level
          </label>
          <select
            id="reg-status"
            value={form.currentStatus}
            onChange={set("currentStatus")}
            className={field}
          >
            <option value="HSC Passed / College Student">HSC Passed / College Student</option>
            <option value="University Undergraduate">University Undergraduate</option>
            <option value="Bachelor's Graduate">Bachelor's Graduate (Masters Aspirant)</option>
            <option value="School Student (Junior/Kids)">School Student (Junior / Kids)</option>
            <option value="Job Holder / Professional">Job Holder / Professional</option>
          </select>
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
            placeholder="tanvir@gmail.com"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="reg-msg" className={label}>
          Your Specific Questions or Notes
        </label>
        <textarea
          id="reg-msg"
          rows={2}
          value={form.message}
          onChange={set("message")}
          placeholder="e.g. Want to know about upcoming IELTS batch dates and mock test fees..."
          className={field}
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[0.7rem] text-slate-500 text-center sm:text-left">
          🔒 100% Privacy. Official IDP & British Council Registration Point.
        </p>
        <button
          type="submit"
          className="btn-primary w-full sm:w-auto text-xs py-3 px-8 shadow-md"
        >
          Submit & Chat on WhatsApp →
        </button>
      </div>
    </form>
  );
}
