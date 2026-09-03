import { Reveal } from "@/components/reveal";
import { company, officeGalleryPhotos } from "@/lib/site-data";

export function OfficeGallery() {
  return (
    <div className="space-y-10">
      {/* Real Photos Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {officeGalleryPhotos.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <figure className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                <img
                  src={p.src}
                  alt={p.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-xs font-bold text-white">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D4AF37]/90 px-2.5 py-0.5 text-[0.62rem] font-bold text-[#090C10] mb-1.5 shadow-sm">
                    {p.category}
                  </span>
                  <p className="font-display text-sm leading-snug text-white">{p.title}</p>
                  <p className="mt-1 text-[0.7rem] font-normal text-slate-300">{p.desc}</p>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        ))}
      </div>

      {/* Location Card & Interactive Map */}
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr] items-center rounded-3xl border border-[#D4AF37]/30 bg-white p-6 sm:p-8 shadow-sm">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FCF8EE] border border-[#D4AF37]/40 px-3 py-1 text-xs font-bold text-[#8A6818]">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37] animate-ping" />
            Walk In or Book Appointment
          </span>
          <h3 className="font-display text-xl font-extrabold text-slate-900">
            Visit Our Khan Tower Dhaka Corporate Office
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Conveniently located at Khan Tower, 359 DIT Road, Dhaka 1219. Meet senior counselors Moshiur and Tanvir in person for 100% free document assessment, fast-track visa filing, and international university partner introductions.
          </p>

          <div className="space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-3">
            <p>
              <strong>📍 Address:</strong> {company.address.full}
            </p>
            <p>
              <strong>🌐 Network:</strong> {company.presence}
            </p>
            <p>
              <strong>🕒 Hours:</strong> {company.hours}
            </p>
            <p>
              <strong>📞 Direct Hotline:</strong> {company.phones.join(" · ")}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Future Edge Education, I would like to visit your Khan Tower, DIT Road Dhaka office for study abroad counseling.")}`}
              target="_blank"
              rel="noreferrer"
              className="btn-emerald text-xs py-2.5 px-5 shadow-sm"
            >
              💬 WhatsApp Us Before Visiting
            </a>
            <a
              href={`tel:+880${company.phones[0].replace(/[^0-9]/g, "").slice(-10)}`}
              className="btn-secondary text-xs py-2.5 px-5"
            >
              📞 Call Reception
            </a>
          </div>
        </div>

        {/* Embedded Responsive Google Map */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-inner">
          <div className="h-72 sm:h-80 w-full">
            <iframe
              src={company.mapsEmbed}
              title="Future Edge Education Corporate Office Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
