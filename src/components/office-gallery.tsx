import { FbReel } from "@/components/fb-reel";
import { company, verifiedFacebookReels } from "@/lib/site-data";
import { IconSparkles, IconWhatsApp, IconPhone } from "@/components/ui-blocks";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function OfficeGallery() {
  return (
    <div className="space-y-12">
      {/* 3 Verified Official Facebook Video Reels with Stagger */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-bold text-red-700">
              <IconSparkles className="w-3.5 h-3.5 text-red-600" />
              <span>Official Video Evidence</span>
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 mt-1">
              Verified Facebook Reels & Stories
            </h3>
          </div>
          <a
            href={company.social.facebookReels}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
          >
            <span>View All on Facebook</span>
            <span>↗</span>
          </a>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {verifiedFacebookReels.map((reel) => (
            <StaggerItem key={reel.id}>
              <FbReel
                title={reel.title}
                reelUrl={reel.reelUrl}
                embedUrl={reel.embedUrl}
                category={reel.category}
                badge={reel.badge}
                posterUrl={reel.posterUrl}
                views={reel.views}
                duration={reel.duration}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Dual Global Hubs: Dhaka (Left) & London (Right) */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Dhaka Corporate Office Card & Map (Slides from Left) */}
        <SlideIn direction="left" distance={45} className="h-full">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-bold text-red-700">
                <span>🇧🇩</span>
                <span>Dhaka Corporate Office</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                Merul Badda, Aftabnagar Campus
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Visit our headquarters for 100% free document assessment, IELTS and Spoken English diagnostic classes, and in-person counselor consultation.
              </p>
              <div className="text-xs text-slate-700 space-y-1.5 border-t border-slate-100 pt-3">
                <p>
                  <strong>📍 Address:</strong> {company.dhakaOffice.full}
                </p>
                <p>
                  <strong>🕒 Hours:</strong> {company.hours}
                </p>
                <p>
                  <strong>📞 Hotlines:</strong> 01886 91 33 91 · +88 01611 40 20 93
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 aspect-[16/9] w-full">
              <iframe
                src={company.dhakaOffice.mapsEmbed}
                title="Alex Global Consultancy Dhaka Office"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello Alex Global Consultancy! I would like to visit your Dhaka Aftabnagar office for counseling.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald text-xs py-2.5 px-4 shadow-sm active:scale-95"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>WhatsApp Aftabnagar Desk</span>
              </a>
              <a
                href="tel:01886913391"
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95"
              >
                <IconPhone className="w-3.5 h-3.5 text-red-600" />
                <span>01886 91 33 91</span>
              </a>
            </div>
          </div>
        </SlideIn>

        {/* London Branch Office Card & Map (Slides from Right) */}
        <SlideIn direction="right" distance={45} className="h-full">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-900">
                <span>🇬🇧</span>
                <span>London Branch Office</span>
              </span>
              <h4 className="font-display text-lg font-black text-slate-900">
                The Arches Cranberry Lane, London
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our UK team provides continuous support once you arrive in the United Kingdom: airport welcome coordination, student accommodation search, and university registration.
              </p>
              <div className="text-xs text-slate-700 space-y-1.5 border-t border-slate-100 pt-3">
                <p>
                  <strong>📍 Address:</strong> {company.londonOffice.full}
                </p>
                <p>
                  <strong>🌐 Network:</strong> UK & European Admissions Desk
                </p>
                <p>
                  <strong>📞 UK Hotline:</strong> +44 07539228276
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 aspect-[16/9] w-full">
              <iframe
                src={company.londonOffice.mapsEmbed}
                title="Alex Global Consultancy London Office"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.londonOffice.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello Alex Global London office! I am inquiring about UK admissions and post-arrival assistance.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-secondary text-xs py-2.5 px-4 text-blue-950 active:scale-95"
              >
                <IconWhatsApp className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp UK Desk</span>
              </a>
              <a
                href="tel:+4407539228276"
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95"
              >
                <IconPhone className="w-3.5 h-3.5 text-blue-600" />
                <span>+44 07539228276</span>
              </a>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  );
}

