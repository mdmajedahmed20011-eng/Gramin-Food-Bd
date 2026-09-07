import { FbReel } from "@/components/fb-reel";
import { company, verifiedFacebookReels } from "@/lib/site-data";
import { IconSparkles, IconWhatsApp, IconPhone } from "@/components/ui-blocks";
import { SlideIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

export function OfficeGallery({ showReels = false }: { showReels?: boolean } = {}) {
  const verifiedPhotoMoments = [
    {
      src: "/assets/succes 3 revwie.jpg",
      title: "Family Trust: Student & Father Celebrating European Visa",
      badge: "Parental Trust",
      desc: "European study permit stamped with Academic Allies counseling at Finlay Square headquarters.",
    },
    {
      src: "/assets/succes.jpg",
      title: "5 Steps to Europe: Visa Approval Handover",
      badge: "Europe Visa",
      desc: "Student holding stamped visa passport in front of the official 'Your Journey to Europe in 5 Steps' backdrop.",
    },
    {
      src: "/assets/succes 2.jpg",
      title: "Direct Admission & Genuine File Processing",
      badge: "100% Genuine",
      desc: "Counselor handing over verified passport with study visa; zero fake documents or deceptive agent promises.",
    },
    {
      src: "/assets/778915755_122248399610271074_4940366587612604886_n.jpg",
      title: "Family Celebration at Chattogram Office",
      badge: "Verified Success",
      desc: "Proud guardians joining the visa announcement ceremony at Academic Allies.",
    },
  ];

  return (
    <div className="space-y-14">
      {/* 1. Verified Visa Success Photo Wall */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-bold text-amber-900">
              <IconSparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Verified Photo Evidence · Finlay Square Hub</span>
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black text-[#0C2340] mt-1">
              Real Students, Real Parents & European Visa Grants
            </h3>
          </div>
          <a
            href={company.social.facebook}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-[#0C2340] hover:text-[#D4AF37] flex items-center gap-1 transition-colors"
          >
            <span>See 47K+ Community on Facebook</span>
            <span>↗</span>
          </a>
        </div>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {verifiedPhotoMoments.map((photo, i) => (
            <StaggerItem key={i}>
              <div className="group rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full hover-lift">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="rounded-full bg-[#071527]/85 backdrop-blur-md px-2.5 py-1 text-[0.62rem] font-black text-amber-300 border border-amber-400/40">
                      {photo.badge}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display text-xs font-bold text-[#0C2340] line-clamp-2 group-hover:text-amber-700 transition-colors">
                      {photo.title}
                    </h4>
                    <p className="text-[0.7rem] text-slate-500 mt-1 line-clamp-2">
                      {photo.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 mt-3 flex items-center justify-between text-[0.65rem] text-slate-400 font-semibold">
                    <span>Academic Allies Archive</span>
                    <span className="text-emerald-600 font-bold">✓ Verified</span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* 2. Verified Facebook Video Reels */}
      {showReels && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-[#0C2340]">
                <IconSparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Official Video Guides</span>
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-black text-[#0C2340] mt-1">
                Official Reels & Visa Guidelines
              </h3>
            </div>
            <a
              href={company.social.facebookReels}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-[#0C2340] hover:text-[#D4AF37] flex items-center gap-1 transition-colors"
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
      )}

      {/* 3. Chattogram Corporate Hubs: Finlay Square & Zeenat Abad */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Chattogram Corporate Headquarters (Finlay Square) */}
        <SlideIn direction="left" distance={45} className="h-full">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4 flex flex-col justify-between h-full border-t-4 border-t-[#0C2340]">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold text-amber-900">
                <span>📍</span>
                <span>Corporate Headquarters</span>
              </span>
              <h4 className="font-display text-lg font-black text-[#0C2340]">
                Finlay Square (7th Floor), CDA Avenue
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Visit our premier headquarters for 100% free European profile assessment, Universitaly guidance, British Council & IDP aligned IELTS coaching, and parent-student consultations.
              </p>
              <div className="text-xs text-slate-700 space-y-1.5 border-t border-slate-100 pt-3">
                <p>
                  <strong>📍 Address:</strong> {company.chattogramOffice.full}
                </p>
                <p>
                  <strong>🕒 Hours:</strong> {company.hours}
                </p>
                <p>
                  <strong>📞 Hotlines:</strong> 01859-870936 · 01812-386307 · 01812-386318
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 aspect-[16/9] w-full">
              <iframe
                src={company.chattogramOffice.mapsEmbed}
                title="Academic Allies Finlay Square Chattogram Headquarters"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello Academic Allies! I would like to visit your Finlay Square Chattogram office for counseling.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-emerald text-xs py-2.5 px-4 shadow-sm active:scale-95"
              >
                <IconWhatsApp className="w-4 h-4" />
                <span>WhatsApp Finlay Square Desk</span>
              </a>
              <a
                href="tel:01859870936"
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95"
              >
                <IconPhone className="w-3.5 h-3.5 text-[#0C2340]" />
                <span>01859-870936</span>
              </a>
            </div>
          </div>
        </SlideIn>

        {/* Chattogram City Branch (Zeenat Abad) */}
        <SlideIn direction="right" distance={45} className="h-full">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs space-y-4 flex flex-col justify-between h-full border-t-4 border-t-[#D4AF37]">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-[#0C2340]">
                <span>📍</span>
                <span>Chattogram City Branch</span>
              </span>
              <h4 className="font-display text-lg font-black text-[#0C2340]">
                Zeenat Abad Campus, Chittagong
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our Zeenat Abad campus provides dedicated student file submission, document authentication audits, Spoken English foundation classes, and study visa status updates.
              </p>
              <div className="text-xs text-slate-700 space-y-1.5 border-t border-slate-100 pt-3">
                <p>
                  <strong>📍 Address:</strong> {company.branchOffice.full}
                </p>
                <p>
                  <strong>🕒 Hours:</strong> Saturday – Thursday: 10:00 AM – 6:00 PM
                </p>
                <p>
                  <strong>📞 Branch Lines:</strong> 01805-211186 · 01805-211860
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 aspect-[16/9] w-full">
              <iframe
                src={company.branchOffice.mapsEmbed}
                title="Academic Allies Zeenat Abad Chittagong Branch"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hello Academic Allies Zeenat Abad branch! I am inquiring about European admissions and visa support.",
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-luxury-secondary text-xs py-2.5 px-4 text-[#0C2340] active:scale-95"
              >
                <IconWhatsApp className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Branch Desk</span>
              </a>
              <a
                href="tel:01805211186"
                className="btn-secondary text-xs py-2.5 px-4 active:scale-95"
              >
                <IconPhone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>01805-211186</span>
              </a>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  );
}
