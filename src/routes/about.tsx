import { createFileRoute } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import {
  Breadcrumbs,
  BulletList,
  CtaBand,
  PageHero,
  SectionHeading,
  StatsStrip,
  RegisterButton,
} from "@/components/ui-blocks";
import { OfficeGallery } from "@/components/office-gallery";
import { company, teamMembers, verifiedEventsAndPartners } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Future Edge Education & Consultancy | Dhaka | Sylhet" },
      {
        name: "description",
        content:
          "Learn about Future Edge Education & Consultancy — Bangladesh's trusted study abroad consultant based in Khan Tower, 359 DIT Road, Dhaka. Guided by EMPOWER • EDUCATE • ELEVATE and led by senior advisors Moshiur & Tanvir.",
      },
      { property: "og:title", content: "About Future Edge Education | Your Future Beyond Borders" },
      {
        property: "og:description",
        content:
          "Official profile of Future Edge Education. 100% free counseling, 3-5 day UK visa track record, without IELTS (MOI) admissions, and direct foreign university delegations.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story & Philosophy"
        title="Empower • Educate • Elevate"
        subtitle="Future Edge Education & Consultancy was established with a singular vision: to empower ambitious students across Bangladesh to achieve world-class higher education abroad through genuine mentorship, transparent guidance, and zero file-opening charges."
        image="/brand-assets/banner.jpg"
        imageAlt="Future Edge Education official brand billboard banner"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About Us" }]} />
      </PageHero>

      {/* Brand Identity & Overview Section */}
      <section className="section-shell py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Quick Profile Card */}
          <div className="card-clean rounded-3xl p-8 border border-[#D4AF37]/30 shadow-md">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
              <BrandLogo size={56} />
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">{company.name}</h3>
                <span className="inline-block rounded-full bg-[#FCF8EE] border border-[#D4AF37]/40 px-3 py-0.5 text-xs font-bold text-[#8A6818] mt-1">
                  {company.presence}
                </span>
              </div>
            </div>

            <dl className="mt-6 space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Official Legal Name</dt>
                <dd className="font-bold text-slate-900 text-right">{company.legalName}</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Head Office</dt>
                <dd className="font-bold text-slate-900 text-right">Khan Tower, 359 DIT Road, Dhaka</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Facebook Community</dt>
                <dd className="font-bold text-[#8A6818] text-right">285K+ Followers (100% Rating)</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Core Philosophy</dt>
                <dd className="font-bold text-[#AA771C]">{company.philosophy}</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Consulting Fee</dt>
                <dd className="font-bold text-emerald-700">100% Free (Zero File-Opening Charge)</dd>
              </div>
              <div className="flex justify-between pt-1">
                <dt className="text-slate-500 font-medium">Official Hotlines</dt>
                <dd className="font-bold text-slate-900">{company.phones[0]}</dd>
              </div>
            </dl>

            <div className="mt-8 rounded-2xl bg-[#FCF8EE] p-4 border border-[#D4AF37]/30">
              <p className="text-xs font-bold text-slate-900 mb-1">Our Core Slogan:</p>
              <p className="text-xs italic text-[#AA771C]">"{company.slogan}"</p>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Guiding Principles */}
          <div className="space-y-6">
            <span className="badge-clean badge-gold">
              Our Guiding Principles
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Your Future Beyond Borders: Study • Graduate • Succeed
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              At Future Edge Education, we understand that studying abroad is a life-changing decision for students and their families. Many applicants face misleading information, unexpected hidden fees, and unnecessary delays.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              Led by senior advisors Moshiur and Tanvir, Future Edge Education provides genuine, personalized counseling. We meticulously evaluate academic profiles, guide students toward accredited universities in the UK, Europe, Australia, Canada, New Zealand, Malaysia, and USA, and assemble complete, audit-proof visa files resulting in record approvals in as fast as 3 to 5 days.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">
                  🎯 Our Mission
                </h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  To provide transparent, ethical, and results-driven international education advisory services, helping students gain admissions and scholarships at world-class global universities.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">
                  🔭 Our Vision
                </h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  To be Bangladesh's benchmark study abroad consultancy, recognized for verified authenticity, fast-track visa processing, and long-term student career success.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#FCF8EE] border border-[#D4AF37]/40 p-5">
              <h4 className="font-display text-sm font-bold text-[#8A6818] mb-2">
                🌟 The Future Edge Pillars:
              </h4>
              <BulletList
                items={[
                  "Zero File-Opening Charge: 100% free profile evaluations and course shortlisting.",
                  "Fast-Track UK Visa Records: Proven success with visa grants in as fast as 3 to 5 working days.",
                  "Without IELTS (MOI) Pathways: Access accredited degrees in UK and Europe with English medium certificates.",
                  "Direct University Delegations: In-office partner sessions with foreign university representatives (e.g. BNU UK).",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Verified Conference Award Spotlight */}
      <section className="section-shell py-10 sm:py-14 border-t border-slate-200">
        <div className="rounded-3xl bg-[#090C10] border border-[#D4AF37]/40 p-6 sm:p-10 text-white shadow-xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-3.5 py-1 text-xs font-bold text-[#F5D365]">
                🏆 Academic Recognition
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                LURS Student Research Conference 2026 Honor
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Future Edge Education leadership was honored on stage at the LURS Student Research Conference 2026 under the theme <em>"Turning Ideas into Sustainable Solutions"</em> by Chief Guest Danobir Dr. Syed Ragib Ali (Founder & Chairman) for our contributions toward student empowerment and global education access.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <RegisterButton label="Consult Our Award-Winning Team" className="text-xs py-3 px-6" />
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/40 bg-slate-950">
              <img
                src="/brand-assets/768667718_122282362400103184_8409750641330812941_n.jpg"
                alt="LURS 2026 Student Research Conference Award Presentation to Future Edge Education"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="section-shell py-10 sm:py-14 border-t border-slate-200">
        <StatsStrip />
      </section>

      {/* Meet the Counseling Leadership */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
        <SectionHeading
          eyebrow="Leadership & Counseling Panel"
          title="Meet Our Senior Counselors & Advisors"
          subtitle="Experienced overseas education advisors praised by hundreds of students across Bangladesh for honest, authentic guidance."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="card-clean rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between border border-slate-200 hover:border-[#D4AF37]"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={375}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-[#090C10]/85 backdrop-blur px-3 py-1 text-[0.65rem] font-bold text-[#F5D365] border border-[#D4AF37]/40">
                      {member.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {member.name} <span className="text-xs font-normal text-slate-500">({member.popularName})</span>
                  </h3>
                  <p className="text-xs font-semibold text-[#AA771C] mt-0.5">
                    {member.role}
                  </p>
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello, I would like to speak with ${member.popularName} at Future Edge Education.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary w-full text-center text-xs py-2"
                >
                  Connect on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campus & Events Gallery */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
        <SectionHeading
          eyebrow="Inside Future Edge Education"
          title="Campus Life, Delegations & Outreach"
          subtitle="Explore authentic moments from partner university delegations, in-office consultations, and student orientations."
        />
        <div className="mt-10">
          <OfficeGallery />
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand />
    </>
  );
}
