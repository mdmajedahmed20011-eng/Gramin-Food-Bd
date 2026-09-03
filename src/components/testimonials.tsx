import { Reveal } from "@/components/reveal";
import { SectionHeading, IconCheck } from "@/components/ui-blocks";

export const testimonials = [
  {
    name: "Mahmudul Hasan",
    course: "IELTS Academic (Band 7.5)",
    destination: "UK University Admission",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    intake: "IELTS Candidate",
    text: "Affordable International-এর মক টেস্ট সেন্টার নোয়াখালীতে সত্যিই সেরা। অরিজিনাল ব্রিটিশ কাউন্সিল হেডফোন নিয়ে পরীক্ষা দেওয়ার কারণে মেইন পরীক্ষায় কোনো ভয় লাগেনি। রিডিং আর রাইটিং টিপসগুলো অসাধারণ ছিল!",
  },
  {
    name: "Nusrat Jahan Fariha",
    course: "MSc in Data Science",
    destination: "University of Greenwich",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    intake: "September Intake",
    text: "মাইজদী থেকে পড়াশোনা করে বাইরে যাওয়ার ব্যাপারে অনেক দ্বিধায় ছিলাম। কিন্তু Affordable International-এর মেন্টররা কোনো ফাইল ওপেনিং চার্জ ছাড়াই আমার পুরো প্রোফাইল অ্যাসেস করে অফার লেটার ও ভিসা করিয়ে দিয়েছেন।",
  },
  {
    name: "Farhan Tanvir",
    course: "IELTS Academic (Band 8.0)",
    destination: "Deakin University",
    country: "Australia",
    flag: "🇦🇺",
    rating: 5,
    intake: "IELTS & Study Abroad",
    text: "আইইএলটিএস এক্সাম রেজিস্ট্রেশনে ২,০০০ টাকা ইনস্ট্যান্ট ক্যাশব্যাক পেয়েছিলাম এবং সাথে দুটো ফ্রি মক টেস্ট। টিচারদের ওয়ান-টু-ওয়ান স্পিকিং ইন্টারভিউ ফিডব্যাক আমার ব্যান্ড স্কোর ৭ থেকে ৮-এ তুলতে সাহায্য করেছে।",
  },
  {
    name: "Mrs. Shahnaz Begum (Parent)",
    course: "Kids Spoken English",
    destination: "Class 5 Student",
    country: "Bangladesh",
    flag: "🇧🇩",
    rating: 5,
    intake: "Junior Program",
    text: "আমার ছেলে আগে ইংরেজিতে কথা বলতে একদম লজ্জা পেত। কিডস স্পোকেন ক্লাসে শিক্ষকরা এত সুন্দর আনন্দদায়ক খেলার ছলে ফনিক্স ও ইংরেজি শিখিয়েছেন যে এখন ও নিজে থেকেই ইংরেজিতে কথা বলতে চেষ্টা করে।",
  },
  {
    name: "Kazi Ashiqur Rahman",
    course: "Korean Language (KLP) & Scholarship",
    destination: "Kyungpook National University",
    country: "South Korea",
    flag: "🇰🇷",
    rating: 5,
    intake: "March Intake",
    text: "কোরিয়াতে ১০০% স্কলারশিপের আবেদনের প্রতিটি স্টেপ তারা যত্নসহকারে গাইড করেছেন। নোয়াখালীতে এত আন্তরিক এবং বিশ্বস্ত সার্ভিস পাবো ভাবতেই পারিনি। Explore More, Spend Less স্লোগানের মর্যাদা তারা রেখেছেন।",
  },
  {
    name: "Sabbir Hossain",
    course: "Spoken & Professional Writing",
    destination: "Corporate Career Prep",
    country: "Bangladesh",
    flag: "🇧🇩",
    rating: 5,
    intake: "Fluency Batch",
    text: "স্পোকেন ইংলিশ কোর্সে জয়েন করার পর প্রেজেন্টেশন ও প্রতিদিনের কথোপকথনের ভয় পুরোপুরি কেটে গেছে। মাইজদী বাজারে এরকম কোয়ালিটি ফুল ক্লাসরুম সত্যিই প্রশংসার দাবিদার।",
  },
];

function Card({ t }: { t: (typeof testimonials)[number] }) {
  const initials = t.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <figure className="mx-3 flex w-[21rem] shrink-0 flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md sm:w-[25rem]">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-500 text-sm" aria-label={`${t.rating} out of 5 stars`}>
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[0.65rem] font-bold text-emerald-800">
            <IconCheck className="w-3 h-3 text-emerald-600" />
            <span>{t.intake}</span>
          </span>
        </div>

        <blockquote className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-700">
          “{t.text}”
        </blockquote>
      </div>

      <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#0A192F] to-[#1E293B] text-xs font-bold text-white shadow-sm border border-slate-700">
          {initials}
        </span>
        <div className="min-w-0 flex-1">
          <span className="block truncate text-sm font-bold text-slate-900">{t.name}</span>
          <span className="block truncate text-xs text-slate-500">
            {t.course}
          </span>
          <span className="block text-xs font-semibold text-[#E11D48]">
            {t.flag} {t.destination}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-[#FAFAFC] py-16 sm:py-24 border-y border-slate-200">
      <Reveal className="section-shell">
        <SectionHeading
          eyebrow="Student Feedback & Results"
          title="Stories of Success & Fluency"
          subtitle="Real feedback from IELTS candidates, language learners, and study abroad students guided by Affordable International in Maijdee Court, Noakhali."
        />
      </Reveal>

      <Reveal delay={120} className="group relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#FAFAFC] to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#FAFAFC] to-transparent sm:w-28" />
        <div className="marquee-track py-2 [animation-duration:45s] group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
