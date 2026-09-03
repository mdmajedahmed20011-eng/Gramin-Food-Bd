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
import { company, processSteps, teamMembers } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Affordable International | Maijdee, Noakhali" },
      {
        name: "description",
        content:
          "Affordable International is an authorized IDP and British Council Registration Point & Mock Test Venue in Maijdee Court, Noakhali. Learn about our mission, vision, expert instructors, and affordable global education ethos.",
      },
      { property: "og:title", content: "About Affordable International | Explore More, Spend Less" },
      {
        property: "og:description",
        content:
          "Official IDP & British Council Registration Point in Maijdee Court, Noakhali. Dedicated to authentic IELTS training, communicative English, and 100% free study abroad counseling.",
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
        title="Making Global Education Accessible & Affordable"
        subtitle="Founded in Maijdee Court, Noakhali, Affordable International is built on a clear conviction: Every ambitious student deserves world-standard English skills and international study opportunities without exorbitant fees or misleading claims."
        image="/assets/affordable-banner.jpg"
        imageAlt="Affordable International official brand banner"
      >
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About Us" }]} />
      </PageHero>

      {/* Brand Identity & Overview Section */}
      <section className="section-shell py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Quick Profile Card */}
          <div className="card-clean rounded-3xl p-8">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
              <BrandLogo size={56} />
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">{company.name}</h3>
                <span className="inline-block rounded-full bg-red-50 border border-red-200 px-3 py-0.5 text-xs font-bold text-[#ED1C24] mt-1">
                  {company.origin}
                </span>
              </div>
            </div>

            <dl className="mt-6 space-y-4 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Category</dt>
                <dd className="font-bold text-slate-900">{company.category}</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Main Campus</dt>
                <dd className="font-bold text-slate-900 text-right">Ashfak Plaza (4th Floor), Maijdee</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Accreditations</dt>
                <dd className="font-bold text-sky-700 text-right">IDP & British Council Venue</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Official Slogan</dt>
                <dd className="font-bold text-[#ED1C24]">"{company.slogan}"</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-3">
                <dt className="text-slate-500 font-medium">Consulting Fee</dt>
                <dd className="font-bold text-emerald-700">100% Free (Zero File Charge)</dd>
              </div>
              <div className="flex justify-between pt-1">
                <dt className="text-slate-500 font-medium">Primary Hotlines</dt>
                <dd className="font-bold text-slate-900">{company.phones[0]}</dd>
              </div>
            </dl>

            <div className="mt-8 rounded-2xl bg-slate-50 p-4 border border-slate-200">
              <p className="text-xs font-bold text-slate-900 mb-1">Our Core Commitment:</p>
              <p className="text-xs italic text-[#ED1C24]">"{company.tagline}"</p>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Core Values */}
          <div className="space-y-6">
            <span className="badge-clean badge-red">
              Our Guiding Principles
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Empowering Students in Noakhali and Beyond
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Many students in regional cities like Maijdee, Noakhali face significant hurdles: exorbitant consultancy charges in distant metro centers, lack of certified IELTS exam venues, and misleading promises regarding foreign university admissions.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              Affordable International was founded to provide an authentic, trustworthy, and affordable alternative right at home in Maijdee Bazar. We bring official British Council and IDP test registration, genuine mock test hall acoustics, and direct international university tie-ups to your doorstep.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">
                  🎯 Our Mission
                </h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  To provide transparent, ethical, and cost-effective English language training and study abroad guidance, enabling every student to realize their international academic aspirations.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-display text-base font-bold text-slate-900">
                  🔭 Our Vision
                </h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  To be Bangladesh's most reputable and student-centric language and foreign education consultancy, known for verified authenticity, high exam success, and zero hidden charges.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-sky-50 border border-sky-200 p-5">
              <h4 className="font-display text-sm font-bold text-sky-900 mb-2">
                🌟 Core Values That Define Us:
              </h4>
              <BulletList
                items={[
                  "Affordability First: Genuine exam cashback and zero file opening charges.",
                  "Academic Honesty: Realistic target band scores and verified university requirements.",
                  "Authentic Facilities: British Council mock test venue with individual audio headsets.",
                  "Comprehensive Care: Nurturing language courses for school children to post-graduates.",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="section-shell py-10 sm:py-14 border-t border-slate-200">
        <StatsStrip />
      </section>

      {/* Meet the Academic Team & Leadership */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
        <SectionHeading
          eyebrow="Leadership & Faculty"
          title="Meet Our Instructors & Mentors"
          subtitle="Experienced language trainers, test coordinators, and overseas education advisors committed to your success."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="card-clean rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between"
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
                    <span className="rounded-full bg-[#0A192F]/80 backdrop-blur px-3 py-1 text-[0.65rem] font-bold text-white border border-white/20">
                      {member.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#ED1C24] mt-0.5">
                    {member.role}
                  </p>
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hello, I would like to speak with ${member.name} at Affordable International.`)}`}
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

      {/* Campus Gallery */}
      <section className="section-shell py-14 sm:py-20 border-t border-slate-200">
        <SectionHeading
          eyebrow="Our Facilities"
          title="Visit Us at Ashfak Plaza, Maijdee"
          subtitle="Take a visual tour of our modern classrooms, mock test booths, and student consultation desks."
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
