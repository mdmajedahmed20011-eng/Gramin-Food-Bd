/**
 * Alex Global Consultancy (AGC) — Official Verified Brand Data & Knowledge Base
 * 
 * Verified from:
 *  - Official Facebook Page: https://www.facebook.com/AlexGlobalConsultancy/ (23K+ Followers, 21K+ Likes, 100% Recommendation Score)
 *  - Verified Brand Assets: logo.jpg (Cap + Airplane + Globe AG monogram), banner.png (Bengali slogan & hotlines)
 *  - Dual Global Hubs:
 *      * Dhaka Corporate Office: House - 03, Road - 03, Block: H, Section - 02, Merul Badda, Aftabnagar EHL Project, Dhaka, Bangladesh.
 *      * London Office: The Arches Cranberry Lane, London E16 4BJ, United Kingdom (UK).
 *  - Hotlines & WhatsApp: 
 *      * Bangladesh: +88 01611 40 20 93 / +880 1886-913391 (01886 91 33 91)
 *      * United Kingdom: +44 07539228276
 *  - Official Digital Contacts:
 *      * Emails: care@AlexGlobalConsultancy.com / alexglobalconsultancy@gmail.com
 *      * Website: www.AlexGlobalConsultancy.com
 *      * Social Handles: Facebook (@AlexGlobalConsultancy), X (@AlexGlobal_), Instagram (@alex_global_consultancy), TikTok (@alex_global_consultancy), YouTube (@AlexGlobalConsultancy.)
 */

export type NavChild = { label: string; to: string; params?: Record<string, string>; badge?: string };
export type NavItem = { label: string; to: string; params?: Record<string, string>; children?: NavChild[] };

export const company = {
  name: "Alex Global Consultancy",
  shortName: "Alex Global",
  acronym: "AGC",
  legalName: "Alex Global Consultancy — Education & Travel Advisor",
  nativeName: "বিদেশে উচ্চশিক্ষা Alex Global Consultancy",
  slogan: "Education & Travel Advisor",
  bengaliHeadline: "আপনার স্বপ্নের বিশ্ববিদ্যালয়ের পথে বিশ্বস্ত সঙ্গী",
  bengaliSubheadline: "বিদেশে উচ্চশিক্ষার সম্পূর্ণ সহায়তা, ভর্তি পরামর্শ, ভিসা গাইডলাইন ও ক্যারিয়ার পরিকল্পনা",
  motto: "Your Trusted Companion to Your Dream University & Global Future",
  philosophy: "GUIDANCE • INTEGRITY • GLOBAL OPPORTUNITY",
  tagline:
    "Official Education & Travel Advisor in Dhaka & London — Direct admissions, visa guidance, scholarship support, IELTS, Spoken English & Kids English for UK, USA, Canada, Australia, Europe & Asia.",
  bio: "Education & Travel Advisor | Study Abroad, Student & Spouse Visa, IELTS, Spoken English & Kids English 🎓",
  category: "Educational Consultant · Travel Advisor · Language Academy",
  established: "2019",
  origin: "Dhaka, Bangladesh & London, United Kingdom",
  presence: "Dhaka (Aftabnagar) | London (Cranberry Lane)",
  email: "care@AlexGlobalConsultancy.com",
  contactEmail: "care@AlexGlobalConsultancy.com",
  altEmail: "alexglobalconsultancy@gmail.com",
  emails: ["care@AlexGlobalConsultancy.com", "alexglobalconsultancy@gmail.com"],
  phones: ["01886 91 33 91", "+88 01611 40 20 93", "+44 07539228276"],
  whatsapp: "+8801886913391",
  whatsappFormatted: "+880 1886-913391",
  ukWhatsapp: "+447539228276",
  ukWhatsappFormatted: "+44 07539228276",
  hours: "Open Daily: 10:00 AM – 7:30 PM (Saturday – Friday)",
  signOff: "Education & Travel Advisor · Your Trusted Gateway to Global Academic Excellence",
  
  // Dual Global Offices
  offices: {
    dhaka: {
      name: "Dhaka Corporate Office (Headquarters)",
      address: "House - 03, Road - 03, Block: H, Section - 02, Merul Badda, Aftabnagar EHL Project, Dhaka, Bangladesh",
      full: "House - 03, Road - 03, Block: H, Section - 02, Merul Badda, Aftabnagar EHL Project, Dhaka, Bangladesh",
      phone: "01886 91 33 91",
      phones: ["01886 91 33 91", "+88 01611 40 20 93"],
      whatsapp: "+8801886913391",
      hours: "Saturday – Thursday: 10:00 AM – 7:00 PM",
      mapsUrl: "https://maps.google.com/?q=House+03+Road+03+Block+H+Section+02+Aftabnagar+Dhaka",
      mapsEmbed: "https://maps.google.com/maps?q=Aftabnagar+Merul+Badda+Dhaka+Bangladesh&z=15&hl=en&output=embed",
    },
    london: {
      name: "London Branch Office (UK)",
      address: "The Arches Cranberry Lane, London E16 4BJ, United Kingdom (UK)",
      full: "The Arches Cranberry Lane, London E16 4BJ, United Kingdom (UK)",
      phone: "+44 07539228276",
      phones: ["+44 07539228276"],
      whatsapp: "+447539228276",
      hours: "Monday – Friday: 9:30 AM – 6:00 PM (GMT)",
      mapsUrl: "https://maps.google.com/?q=The+Arches+Cranberry+Lane+London+E16+4BJ",
      mapsEmbed: "https://maps.google.com/maps?q=The+Arches+Cranberry+Lane+London+E16+4BJ&z=15&hl=en&output=embed",
    },
  },

  dhakaOffice: {
    title: "Dhaka Corporate Office (Bangladesh)",
    house: "House - 03, Road - 03",
    block: "Block: H, Section - 02",
    area: "Merul Badda, Aftabnagar EHL Project",
    city: "Dhaka",
    country: "Bangladesh",
    full: "House - 03, Road - 03, Block: H, Section - 02, Merul Badda, Aftabnagar EHL Project, Dhaka, Bangladesh",
    hotlines: ["01886 91 33 91", "+88 01611 40 20 93"],
    whatsapp: "+8801886913391",
    whatsappDisplay: "+880 1886-913391",
    email: "care@AlexGlobalConsultancy.com",
    mapsUrl: "https://maps.google.com/?q=House+03+Road+03+Block+H+Section+02+Aftabnagar+Dhaka",
    mapsEmbed: "https://maps.google.com/maps?q=Aftabnagar+Merul+Badda+Dhaka+Bangladesh&z=15&hl=en&output=embed",
  },

  londonOffice: {
    title: "London Branch Office (United Kingdom)",
    street: "The Arches Cranberry Lane",
    postalCode: "London E16 4BJ",
    city: "London",
    country: "United Kingdom",
    full: "The Arches Cranberry Lane, London E16 4BJ, United Kingdom (UK)",
    hotlines: ["+44 07539228276"],
    whatsapp: "+447539228276",
    whatsappDisplay: "+44 07539228276",
    email: "care@AlexGlobalConsultancy.com",
    mapsUrl: "https://maps.google.com/?q=The+Arches+Cranberry+Lane+London+E16+4BJ",
    mapsEmbed: "https://maps.google.com/maps?q=The+Arches+Cranberry+Lane+London+E16+4BJ&z=15&hl=en&output=embed",
  },

  // Legacy fallback for generic address reference
  address: {
    building: "House - 03, Road - 03",
    street: "Block: H, Section - 02, Merul Badda",
    area: "Aftabnagar EHL Project",
    city: "Dhaka",
    postalCode: "1212",
    country: "Bangladesh",
    full: "House - 03, Road - 03, Block: H, Section - 02, Merul Badda, Aftabnagar EHL Project, Dhaka, Bangladesh",
    networkNote: "Dual Global Hubs: Dhaka, Bangladesh & London, United Kingdom",
  },

  geo: { lat: 23.7685, lng: 90.4352 },
  mapsUrl: "https://maps.google.com/?q=House+45+Road+03+Block+H+Section+02+Aftabnagar+Dhaka",
  mapsEmbed: "https://maps.google.com/maps?q=Aftabnagar+Merul+Badda+Dhaka+Bangladesh&z=15&hl=en&output=embed",

  social: {
    facebook: "https://www.facebook.com/AlexGlobalConsultancy/",
    facebookPageName: "@AlexGlobalConsultancy",
    facebookVideos: "https://www.facebook.com/AlexGlobalConsultancy/videos",
    facebookReels: "https://www.facebook.com/AlexGlobalConsultancy/reels",
    twitter: "https://x.com/AlexGlobal_",
    twitterHandle: "@AlexGlobal_",
    instagram: "https://www.instagram.com/alex_global_consultancy/",
    instagramHandle: "@alex_global_consultancy",
    tiktok: "https://www.tiktok.com/@alex_global_consultancy",
    tiktokHandle: "@alex_global_consultancy",
    youtube: "https://www.youtube.com/@AlexGlobalConsultancy.",
    youtubeHandle: "@AlexGlobalConsultancy.",
    messenger: "https://m.me/AlexGlobalConsultancy",
  },

  stats: [
    { value: "23K+", label: "Active Facebook Followers", badge: "Verified Reach" },
    { value: "21K+", label: "Page Likes & Supporters", badge: "Trusted Brand" },
    { value: "100%", label: "Recommendation Score", badge: "100% Positive Reviews" },
    { value: "100+", label: "Partner Universities Worldwide", badge: "Direct Admissions" },
    { value: "100+", label: "Student Visas Per Year", badge: "Proven Track Record" },
    { value: "2 Hubs", label: "Dhaka & London Direct Offices", badge: "Global Footprint" },
  ],

  verifiedKeyPartners: [
    {
      name: "Top Universities in United Kingdom",
      country: "United Kingdom",
      note: "Russell Group, Modern Innovators, 1-Year Master's, MOI Acceptance & Fast CAS",
    },
    {
      name: "Designated Learning Institutions (DLIs) Canada",
      country: "Canada",
      note: "Top Public Colleges & Universities with Paid Co-op & up to 3-Year PGWP",
    },
    {
      name: "Top Australian Universities & Institutes",
      country: "Australia",
      note: "Level-1 University options, Post-Study Work Visas & Regional Migration Pathways",
    },
    {
      name: "Cyprus English-Medium Higher Education",
      country: "Cyprus (Europe)",
      note: "Affordable European Tuition, High Visa Grant Ratio & Flexible English Admission",
    },
    {
      name: "German & Scandinavian Public Universities",
      country: "Germany & Finland",
      note: "Low/No Tuition Models, Post-Study Residence Permits & World-Class Research",
    },
    {
      name: "United States Accredited Universities",
      country: "USA",
      note: "Tier-1 Research Universities, STEM OPT 3-Year Extensions & F-1 Mock Interviews",
    },
  ],
} as const;

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Study Abroad",
    to: "/destinations",
    children: [
      { label: "Study in UK", to: "/study-in-{$country}", params: { country: "uk" }, badge: "1-Yr Masters / PSW" },
      { label: "Study in Canada", to: "/study-in-{$country}", params: { country: "canada" }, badge: "PGWP / Co-op" },
      { label: "Study in Australia", to: "/study-in-{$country}", params: { country: "australia" }, badge: "High Wages" },
      { label: "Study in USA", to: "/study-in-{$country}", params: { country: "usa" }, badge: "STEM OPT" },
      { label: "Study in Germany", to: "/study-in-{$country}", params: { country: "germany" }, badge: "Free / Low Tuition" },
      { label: "Study in Cyprus", to: "/study-in-{$country}", params: { country: "cyprus" }, badge: "Affordable Europe" },
      { label: "Study in Finland", to: "/study-in-{$country}", params: { country: "finland" }, badge: "High Quality" },
      { label: "Study in Malaysia", to: "/study-in-{$country}", params: { country: "malaysia" }, badge: "Low Cost / Halal" },
      { label: "View All Destinations (17+)", to: "/destinations", badge: "Worldwide" },
    ],
  },
  {
    label: "Language Courses",
    to: "/services",
    children: [
      { label: "IELTS Preparation", to: "/services", badge: "Band 7.0+ Target" },
      { label: "Spoken English", to: "/services", badge: "Fluency & Accent" },
      { label: "Kids English & Spoken", to: "/services", badge: "Interactive Kids" },
      { label: "Free Assessment", to: "/services", badge: "100% Free" },
    ],
  },
  {
    label: "Visa Services",
    to: "/services",
    children: [
      { label: "Student Visa Guidance", to: "/services", badge: "Core Service" },
      { label: "Spouse & Family Visa", to: "/services", badge: "Full Support" },
      { label: "Tourist & Visit Visa", to: "/services", badge: "All Countries" },
      { label: "Business & Work Visa", to: "/services", badge: "Fast Track" },
      { label: "Schengen 27 Visa", to: "/services", badge: "Europe Travel" },
    ],
  },
  { label: "Official Reels", to: "/videos" },
  { label: "Intakes & Offers", to: "/offers" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export type Destination = {
  slug: string;
  name: string;
  flag: string;
  region: string;
  tagline: string;
  intro: string;
  why: string[];
  popularFields: string[];
  avgTuition: string;
  avgLiving: string;
  pswv: string;
  intakes: string;
  scholarships: string;
  topUnis: string[];
  withoutIelts: boolean;
  featured?: boolean;
};

export const destinations: Destination[] = [
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    tagline: "Direct London connection, 1-year Master's, 2-Year PSW & MOI pathways",
    intro:
      "With Alex Global Consultancy's direct branch in London (The Arches Cranberry Lane, E16 4BJ) and corporate office in Dhaka, students enjoy seamless end-to-end support before flying and after arriving in the UK.",
    why: [
      "Direct UK local support through Alex Global's London office (Cranberry Lane)",
      "Medium of Instruction (MOI) accepted for eligible graduates without IELTS",
      "Fast 1-year intensive Master's and 3-year Bachelor's degrees",
      "2-Year Graduate Route Post-Study Work Visa (PSW) upon graduation",
      "Generous scholarship opportunities up to £4,000 for Bangladeshi applicants",
    ],
    popularFields: ["Computer Science & AI", "Business Administration & MBA", "Data Analytics & IT", "Public Health & Nursing", "Civil & Mechanical Engineering"],
    avgTuition: "£11,000 – £16,000 / year (with partner bursaries)",
    avgLiving: "£9,207 – £12,000 / year (outside/inside London standard)",
    pswv: "2 Years (Graduate Route Visa)",
    intakes: "January, May & September (Key Intakes)",
    scholarships: "£1,500 – £4,000 International Merit Bursaries",
    topUnis: ["University of East London", "University of Greenwich", "University of Hertfordshire", "Southampton Solent University", "Coventry University"],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    region: "North America",
    tagline: "Reputed public DLIs, paid co-op programs & up to 3-year PGWP",
    intro:
      "Canada remains a top choice for Bangladeshi students seeking globally recognized qualifications, paid co-op internships, and clear post-graduation immigration pathways.",
    why: [
      "Designated Learning Institutions (DLIs) offering world-class academic standards",
      "Up to 3-Year Post-Graduation Work Permit (PGWP) for degree and diploma holders",
      "Paid Co-op programs integrating hands-on Canadian workplace experience",
      "Spouse open work permit opportunities for eligible Master's/Doctoral programs",
      "Safe, multicultural environment with high student satisfaction",
    ],
    popularFields: ["Software Engineering & IT", "Business Administration", "Supply Chain & Logistics", "Healthcare & Nursing", "Biotechnology"],
    avgTuition: "CAD $15,000 – $26,000 / year",
    avgLiving: "CAD $14,000 – $18,000 / year",
    pswv: "Up to 3 Years (PGWP)",
    intakes: "January (Winter), May (Summer), September (Fall)",
    scholarships: "CAD $2,000 – $8,000 Entrance & Merit Grants",
    topUnis: ["University of Windsor", "Memorial University", "Conestoga College", "Seneca Polytechnic", "Fanshawe College"],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    region: "Oceania",
    tagline: "World-class education, high hourly student wages & generous PSW visa",
    intro:
      "Australia combines high academic excellence with vibrant student life in cities like Sydney, Melbourne, Brisbane, and Perth. AGC provides meticulous file assessment and Genuine Student (GS) compliance.",
    why: [
      "High minimum wage with 48 hours per fortnight student working rights",
      "2 to 4 years Post-Study Work Visa (Subclass 485) depending on degree and location",
      "Regional area incentives with extra years of post-study stay-back rights",
      "World top 100 universities and leading technical colleges",
    ],
    popularFields: ["Information & Cloud Technology", "Accounting & Professional Finance", "Nursing & Public Health", "Engineering & Mining", "Hospitality Management"],
    avgTuition: "AUD $20,000 – $34,000 / year",
    avgLiving: "AUD $21,000 – $24,500 / year",
    pswv: "2 to 4 Years Post-Study Work Visa",
    intakes: "February & July (Major Intakes), November (Selected)",
    scholarships: "15% to 30% International Student Merit Scholarships",
    topUnis: ["Deakin University", "Western Sydney University", "La Trobe University", "Curtin University", "University of Wollongong"],
    withoutIelts: false,
    featured: true,
  },
  {
    slug: "cyprus",
    name: "Cyprus",
    flag: "🇨🇾",
    region: "Europe",
    tagline: "Affordable English-taught European degrees with high visa grant success",
    intro:
      "As highlighted in our official reels, Cyprus provides an exceptionally accessible European degree pathway for Bangladeshi students with lower tuition fees, reasonable living costs, and swift visa processing.",
    why: [
      "High student visa grant ratio with straightforward document requirements",
      "English-medium curriculum across modern private and state-recognized universities",
      "Affordable tuition fees starting around €3,000 to €4,500 per year",
      "Opportunity for European credit transfer and Erasmus+ exchange",
      "Pleasant Mediterranean climate with safe, student-friendly campuses",
    ],
    popularFields: ["Business Administration", "Hospitality & Tourism", "Computer Science", "Information Technology", "International Relations"],
    avgTuition: "€3,000 – €5,000 / year",
    avgLiving: "€400 – €650 / month",
    pswv: "Post-graduate job search & European transfer options",
    intakes: "February (Spring) & October (Autumn)",
    scholarships: "Up to 50% Tuition Fee Reductions & Early Bird Discounts",
    topUnis: ["University of Nicosia", "European University Cyprus", "Near East University", "Cyprus International University", "Eastern Mediterranean University"],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    region: "Europe",
    tagline: "Free & low-tuition public universities in Europe's powerhouse economy",
    intro:
      "Germany is Europe's industrial capital, offering zero or negligible tuition at public universities for English-taught Master's degrees, coupled with an 18-month post-study job seeker visa.",
    why: [
      "Zero tuition fees at most public universities (only modest semester fees)",
      "High global standing in engineering, technology, and applied sciences",
      "18-month post-study job search residence permit upon graduation",
      "Allowed 140 full days or 280 half days part-time work annually",
      "Schengen mobility covering 29 European countries",
    ],
    popularFields: ["Automotive & Mechanical Engineering", "Data Science & Software", "Renewable Energy", "International Business", "Biotechnology"],
    avgTuition: "€0 – €3,000 / year (Public) | €8,000 – €14,000 (Private)",
    avgLiving: "€934 / month (Blocked Account Requirement)",
    pswv: "18 Months Job-Seeker Residence Permit",
    intakes: "October (Winter) & April (Summer)",
    scholarships: "DAAD Scholarships & University Merit Waivers",
    topUnis: ["TU Munich", "RWTH Aachen", "TU Berlin", "Heidelberg University", "IU International University of Applied Sciences"],
    withoutIelts: false,
    featured: true,
  },
  {
    slug: "finland",
    name: "Finland",
    flag: "🇫🇮",
    region: "Europe",
    tagline: "World's happiest country, high research innovation & 2-year job seeker visa",
    intro:
      "Finland boasts one of the globe's finest education systems. Bangladeshi students enjoy vibrant innovation hubs, clean nature, extensive student rights, and generous post-study stay-back options.",
    why: [
      "Generous 2-year post-study job seeker residence permit for graduates",
      "Student work permit allows up to 30 hours per week during term time",
      "English-taught Bachelor's and Master's degrees across Universities of Applied Sciences (UAS)",
      "High safety, world-leading quality of life, and clean environment",
    ],
    popularFields: ["Artificial Intelligence & Game Design", "Environmental Engineering", "International Business", "Information & Communication Technology", "Nursing"],
    avgTuition: "€8,000 – €14,000 / year",
    avgLiving: "€700 – €900 / month",
    pswv: "Up to 2 Years Post-Study Work Permit",
    intakes: "September (Autumn Intake) & January (Spring Intake)",
    scholarships: "20% – 50% Early Bird & Academic Merit Scholarships",
    topUnis: ["Aalto University", "Helsinki University", "Metropolia UAS", "Centria UAS", "LUT University"],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "usa",
    name: "USA",
    flag: "🇺🇸",
    region: "North America",
    tagline: "World-leading research universities with up to 3-year STEM OPT work rights",
    intro:
      "The USA offers unparalleled academic variety, thousands of accredited colleges, and up to 36 months of STEM OPT work authorization for science, technology, and engineering graduates.",
    why: [
      "Access to Tier-1 research labs and 4,000+ accredited universities",
      "3-year STEM OPT work rights for technology, computing, and engineering graduates",
      "Graduate Assistantships (TA/RA) with tuition waivers and monthly stipends",
      "Thorough 1-on-1 F-1 visa mock interview coaching by Alex Global advisors",
    ],
    popularFields: ["Computer Science & AI", "Data Analytics", "Electrical Engineering", "FinTech & Business Analytics", "Biomedical Engineering"],
    avgTuition: "$14,000 – $32,000 / year",
    avgLiving: "$10,000 – $14,000 / year",
    pswv: "1 Year Standard / 3 Years (STEM OPT)",
    intakes: "Fall (August/September) & Spring (January)",
    scholarships: "$3,000 to Full Tuition Waivers + Assistantships",
    topUnis: ["Arizona State University", "University of North Texas", "University of South Florida", "Purdue University", "Georgia State University"],
    withoutIelts: false,
    featured: true,
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    region: "Southeast Asia",
    tagline: "Affordable tropical study, UK/Aus transfer options & SSC/Dakhil pathways",
    intro:
      "Malaysia delivers high-quality education at low cost. Alex Global Consultancy provides specialized pathways where SSC and Dakhil graduates can enroll in recognized diplomas with fast visa turnaround.",
    why: [
      "Accessible pathways for SSC and Dakhil graduates into recognized diplomas",
      "Affordable tuition fees and low cost of living with halal food everywhere",
      "Fast EMGS visa processing within 3 to 4 weeks",
      "Opportunity for credit transfer (2+1 / 2+2) to top universities in the UK and Australia",
    ],
    popularFields: ["Diploma in Hospitality & Hotel Management", "Business Management", "Information Technology", "Culinary Arts", "Engineering"],
    avgTuition: "USD $2,800 – $5,500 / year",
    avgLiving: "USD $2,500 – $4,000 / year",
    pswv: "Regional career placement & graduate options",
    intakes: "January, April, July, September, November",
    scholarships: "20% – 40% Merit Tuition Waivers",
    topUnis: ["Taylor's University", "Sunway University", "UCSI University", "Asia Pacific University (APU)", "Universiti Malaya (UM)"],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "dubai",
    name: "Dubai (UAE)",
    flag: "🇦🇪",
    region: "Middle East",
    tagline: "Fast 15-day visa issuance, British branch campuses & tax-free jobs",
    intro:
      "Study in the world's most modern metropolis. Dubai hosts premier UK and Australian branch campuses offering identical global degrees with quick visa issuance and tax-free part-time work.",
    why: [
      "Fast visa processing: Student visas issued in as little as 10 to 15 days",
      "Direct British and Australian branch campuses awarding original UK/Aus degrees",
      "Zero personal income tax with vibrant corporate employment opportunities",
      "Easy transition and transfer to UK or Australian home campuses after 1 year",
    ],
    popularFields: ["International Business & Marketing", "Tourism & Luxury Brand Management", "Artificial Intelligence & IT", "Architecture & Interior Design"],
    avgTuition: "AED 35,000 – 65,000 / year",
    avgLiving: "AED 30,000 – 45,000 / year",
    pswv: "1 to 2 Years UAE Green Visa / Work Residence",
    intakes: "January, May & September",
    scholarships: "15% to 50% Academic Merit Bursaries",
    topUnis: ["Middlesex University Dubai", "Heriot-Watt University Dubai", "University of Wollongong in Dubai", "Murdoch University Dubai"],
    withoutIelts: true,
    featured: false,
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    region: "Oceania",
    tagline: "High-ranking universities, peaceful lifestyle & open spouse visa rights",
    intro:
      "New Zealand offers world-top 3% universities, untouched natural beauty, and excellent family and spouse visa provisions for postgraduate researchers.",
    why: [
      "All 8 state universities rank within the global top 3%",
      "Spouse open work visa and dependent children schooling rights for Master's students",
      "Up to 3-Year Post-Study Work Visa for bachelor and master graduates",
      "High standard of safety, peace, and friendly multicultural communities",
    ],
    popularFields: ["Information Technology", "Business & Agribusiness", "Environmental Science", "Construction Management", "Hospitality Management"],
    avgTuition: "NZD $24,000 – $34,000 / year",
    avgLiving: "NZD $18,000 – $22,000 / year",
    pswv: "Up to 3 Years Post-Study Work Visa",
    intakes: "February & July",
    scholarships: "NZD $3,000 – $10,000 International Grants",
    topUnis: ["University of Auckland", "University of Otago", "AUT (Auckland University of Technology)", "Massey University", "Waikato University"],
    withoutIelts: false,
    featured: false,
  },
];

export type Course = {
  slug: string;
  title: string;
  subtitle: string;
  category: "ielts" | "spoken" | "kids";
  icon: string;
  badge: string;
  duration: string;
  classSchedule: string;
  batchType: string;
  targetOutcome: string;
  description: string;
  highlights: string[];
  modules: { title: string; desc: string }[];
};

export const courses: Course[] = [
  {
    slug: "ielts-preparation",
    title: "IELTS Preparation Masterclass",
    subtitle: "Academic & General Training for Band 7.0+ Target",
    category: "ielts",
    icon: "🎯",
    badge: "Most Popular",
    duration: "2 to 3 Months Intensive",
    classSchedule: "3 Days / Week (Morning, Evening & Weekend Batches)",
    batchType: "Offline (Dhaka Aftabnagar) & Interactive Online",
    targetOutcome: "Target Band Score 7.0 to 8.5",
    description:
      "Our IELTS coaching program is tailored specifically for students and professionals aiming to study abroad or migrate. Led by certified instructors, we provide comprehensive training across all four modules with weekly Cambridge-standard mock tests.",
    highlights: [
      "1-on-1 Speaking mock interviews with personalized band feedback",
      "Task 1 & Task 2 Writing evaluation with individual score breakdown",
      "Secret strategies for Reading passage scanning and True/False/Not Given questions",
      "Audio accent decoding practice (British, Australian, American accents)",
      "Weekly complete mock tests under real exam conditions with free retakes",
      "British Council & IDP aligned study resources and vocabulary flashcards",
    ],
    modules: [
      { title: "Listening Mastery", desc: "Predicting answers, signpost words, section-wise traps, note completion and multiple choice precision." },
      { title: "Academic Reading", desc: "Skimming, scanning, heading matching, summary completion, handling tough technical academic passages." },
      { title: "Task 1 & 2 Writing", desc: "Report & graph writing structures, essay coherence, cohesive devices, Lexical Resource, grammar accuracy." },
      { title: "Fluency Speaking", desc: "Overcoming hesitation, topic cards, Part 3 discussions, pronunciation, idiomatic phrasing." },
    ],
  },
  {
    slug: "spoken-english",
    title: "Spoken English & Communication Fluency",
    subtitle: "Speak English Confidently in Any Professional & Social Setting",
    category: "spoken",
    icon: "🗣️",
    badge: "Career Booster",
    duration: "2 Months (24 Live Sessions)",
    classSchedule: "3 Days / Week (Evening & Flexible Batches)",
    batchType: "Interactive Campus & Online Batches",
    targetOutcome: "Natural Conversational Fluency & Accent Neutralization",
    description:
      "Break free from hesitation and fear of speaking English! Our Spoken English program emphasizes practical daily dialogues, accent refinement, professional presentations, and interview confidence for students and working professionals.",
    highlights: [
      "Daily extempore speaking sessions and impromptu debates",
      "Eliminating grammatical hesitation and mother-tongue influence (MTI)",
      "Job interview and embassy visa interview simulation techniques",
      "Professional corporate communication, meeting etiquette and formal email drafting",
      "Small interactive groups ensuring everyone gets equal speaking time",
    ],
    modules: [
      { title: "Fluency Foundations", desc: "Breaking mental blocks, thinking in English, basic conversational structures, overcoming shyness." },
      { title: "Pronunciation & Accent", desc: "Phonetic sounds, syllable stress, intonation patterns, clear accent articulation." },
      { title: "Workplace & Academic Scenarios", desc: "Presentations, formal meetings, negotiations, telephonic and video conference etiquette." },
      { title: "Embassy & Job Interview Prep", desc: "Answering tough questions, body language, tone control, confident self-introduction." },
    ],
  },
  {
    slug: "kids-english",
    title: "Kids English & Kids Spoken Foundation",
    subtitle: "Fun, Creative & Engaging English Learning for Young Learners",
    category: "kids",
    icon: "🎨",
    badge: "Young Champions",
    duration: "3 Months (Ongoing batches)",
    classSchedule: "2 to 3 Days / Week (Weekend & After-School Timings)",
    batchType: "Offline (Dhaka Aftabnagar Safe Classroom) & Online",
    targetOutcome: "Strong Early English Foundation, Reading Habit & Natural Spoken Confidence",
    description:
      "Designed specifically for children aged 5 to 14 years, our Kids English program makes language acquisition fun, joyful, and organic. Through animated storytelling, interactive games, phonics, and role-play, children develop spontaneous English communication without fear.",
    highlights: [
      "Activity-based learning: educational games, cartoons, rhymes and drama",
      "Phonics-first approach ensuring correct pronunciation from an early age",
      "Building rich vocabulary through visual flashcards and real objects",
      "Encouraging public speaking confidence through friendly show-and-tell",
      "Warm, supportive, and safe classroom environment with loving teachers",
      "Regular progress updates and parent-teacher feedback sessions",
    ],
    modules: [
      { title: "Phonics & Sound Magic", desc: "Letter-sound connection, blending, digraphs, early sight words and spelling tricks." },
      { title: "Storytelling & Expressive Drama", desc: "Engaging storybooks, character role-playing, puppet shows, creative imagination." },
      { title: "Vocabulary Playground", desc: "Colors, animals, everyday objects, polite manners, basic descriptive sentences." },
      { title: "Show & Tell Speaking", desc: "Mini presentations, expressing feelings, friendly conversations with peers." },
    ],
  },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
  icon: string;
  timeline: string;
  guarantee: string;
  highlightBadge?: string;
};

export const services: Service[] = [
  {
    slug: "study-abroad-admissions",
    title: "Higher Education Abroad Admissions & University Matching",
    summary:
      "From choosing the right destination to securing confirmed offer letters, Alex Global Consultancy guides you across 100+ partner universities in the UK, USA, Canada, Australia, Europe & Asia with complete transparency.",
    points: [
      "Free profile assessment and GAP evaluation with zero file-opening fee",
      "Course shortlisting matching your academic GPA, career aspirations & budget",
      "Direct portal applications ensuring fastest turnaround for conditional and unconditional offers",
      "Professional Statement of Purpose (SOP) & recommendation letter editing",
    ],
    icon: "🎓",
    timeline: "Offer Letters in 1 to 3 Weeks",
    guarantee: "100+ Direct Partner Universities",
    highlightBadge: "Core Service",
  },
  {
    slug: "visa-processing-guidance",
    title: "All Categories Visa Processing & Compliance",
    summary:
      "As highlighted in our official reels ('From Dhaka to the World'), Alex Global Consultancy handles 8 core visa categories: Student Visa, Spouse Visa, Tourist/Visit Visa, Business Visa, Work Permit, Medical Visa, Migration & Sports Visa.",
    points: [
      "Meticulous embassy documentation audit and financial sponsorship verification",
      "Specialized Spouse & Dependent Family Visa filing alongside student visas",
      "Tourist & Visit Visa processing for Europe Schengen (27 countries), UK, USA, Canada & Asia",
      "1-on-1 embassy mock interview coaching simulating real consular officer questions",
    ],
    icon: "🛂",
    timeline: "Fast-track lodgement based on embassy timelines",
    guarantee: "100% Document Verification",
    highlightBadge: "8 Visa Categories",
  },
  {
    slug: "ielts-coaching-masterclass",
    title: "IELTS Preparation Masterclass (Academic & General)",
    summary:
      "Achieve your target Band 7.0+ score with experienced instructors at our modern Aftabnagar coaching facility or interactive online batches with weekly mock tests.",
    points: [
      "Detailed coverage of Listening, Reading, Writing (Task 1 & 2) and Speaking",
      "Cambridge exam simulation mock tests with personalized band score reports",
      "Small batch sizes ensuring individual attention and speaking feedback",
      "Comprehensive British Council & IDP updated question bank",
    ],
    icon: "🎯",
    timeline: "2 to 3 Months Intensive Batches",
    guarantee: "Target Band 7.0+ Guidance",
    highlightBadge: "Top Language Program",
  },
  {
    slug: "spoken-english-communication",
    title: "Spoken English & Professional Communication",
    summary:
      "Speak English naturally, clearly, and without hesitation. Master daily conversations, job interviews, presentations, and embassy visa interactions.",
    points: [
      "Real-world conversational drills, debates, and public speaking challenges",
      "Accent refinement and elimination of regional mother-tongue influence",
      "Formal corporate email writing and boardroom meeting etiquette",
      "Embassy visa interview Q&A practice with confidence building",
    ],
    icon: "🗣️",
    timeline: "2 Months (24 Practical Sessions)",
    guarantee: "Fluency & Confidence Guarantee",
    highlightBadge: "Practical Fluency",
  },
  {
    slug: "kids-english-young-learners",
    title: "Kids English & Young Learners Foundation",
    summary:
      "Joyful, creative, and interactive English learning for children aged 5 to 14 years. Building a lifelong love for English through phonics, storytelling, and fun role-play.",
    points: [
      "Phonics-first approach for clear and accurate native pronunciation",
      "Storytelling, animated learning, educational games, and vocabulary flashcards",
      "Safe, caring classroom environment in Aftabnagar, Dhaka",
      "Regular parent-teacher coordination and noticeable confidence growth",
    ],
    icon: "🎨",
    timeline: "3 Months Interactive Batches",
    guarantee: "Child-Centric Fun Learning",
    highlightBadge: "Kids Academy",
  },
  {
    slug: "pre-departure-student-logistics",
    title: "Pre-Departure Briefing & Student Logistics Support",
    summary:
      "We don't stop at visa approval! Through our dual offices in Dhaka and London, we assist with air ticketing, student accommodation search, forex exchange, and airport pick-up.",
    points: [
      "Student discounted airfare booking assistance with extra luggage allowance",
      "Safe student dorm and private accommodation search near your university",
      "Forex student file creation and international bank account opening guidance",
      "Direct greeting and logistics coordination in London and major hubs",
    ],
    icon: "✈️",
    timeline: "Immediate upon visa grant",
    guarantee: "Dhaka to London Full Care",
    highlightBadge: "Post-Visa Care",
  },
];

export type FacebookReel = {
  id: string;
  title: string;
  reelUrl: string;
  embedUrl: string;
  category: "Offices & Hotlines" | "Global Services" | "Destination Guides";
  badge: string;
  summary: string;
  bulletPoints: string[];
  posterUrl?: string;
  views?: string;
  duration?: string;
};

export const verifiedFacebookReels: FacebookReel[] = [
  {
    id: "reel-1-profile-and-branches",
    title: "Alex Global Consultancy — Official Profile & Dual Global Hubs",
    reelUrl: "https://www.facebook.com/reel/1027311573740581/",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1027311573740581%2F&show_text=0",
    category: "Offices & Hotlines",
    badge: "Official Reel 1",
    views: "143+ Views",
    duration: "0:45",
    posterUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    summary:
      "Official video introduction highlighting Alex Global Consultancy's dual offices in Dhaka (Aftabnagar) and London (Cranberry Lane), hotlines (+880 1886-913391, +88 01611 40 20 93, +44 07539228276), and student admission services.",
    bulletPoints: [
      "Dhaka Office: House - 03, Road - 03, Block: H, Section - 02, Merul Badda, Aftabnagar",
      "London Office: The Arches Cranberry Lane, London E16 4BJ, United Kingdom",
      "Hotlines: 01886 91 33 91 / 01611 40 20 93 / UK +44 07539228276",
      "Full educational consultancy, admissions & visa guidance",
    ],
  },
  {
    id: "reel-2-global-services-all-visas",
    title: "Study Gap Accepted — Higher Education Abroad & Visa Services",
    reelUrl: "https://www.facebook.com/reel/1302610516265847/",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1302610516265847%2F&show_text=0",
    category: "Global Services",
    badge: "Official Reel 2",
    views: "307+ Views",
    duration: "0:52",
    posterUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    summary:
      "Detailed breakdown of study gap acceptance for UK and European universities, admission with or without IELTS, and complete educational services.",
    bulletPoints: [
      "Study Gap Acceptable for UK, Canada & Europe",
      "Student Visa, Spouse Visa & Family Reunification",
      "Tourist Visa, Business Visa & Work Permit Advisory",
      "Medical Visa, Migration Visa & Sports Visa processing",
    ],
  },
  {
    id: "reel-3-top-destinations-breakdown",
    title: "Study in the UK Without IELTS — MOI Accepted & Scholarship Guide",
    reelUrl: "https://www.facebook.com/reel/1666205224495952/",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1666205224495952%2F&show_text=0",
    category: "Destination Guides",
    badge: "Official Reel 3",
    views: "250+ Views",
    duration: "0:38",
    posterUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    summary:
      "Expert guide on studying in the United Kingdom without IELTS using Medium of Instruction (MOI), available scholarship bursaries, and fast CAS processing.",
    bulletPoints: [
      "United Kingdom: 1-year Master's, 2-Year PSW & London local office support",
      "Medium of Instruction (MOI) acceptable for eligible applicants",
      "Up to £4,000 international student merit scholarships",
      "Fast CAS turnaround & comprehensive visa lodging assistance",
    ],
  },
];

export const verifiedStudentReviews = [
  {
    name: "Tanzimul Islam",
    course: "MSc in Computer Science",
    destination: "London University Partner",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    highlight: "London Office Support!",
    text: "Alex Global Consultancy made my UK dream come true! Their London office at Cranberry Lane gave me so much peace of mind knowing they have direct people in the UK. From Aftabnagar Dhaka to London, their support was 100% transparent and reliable.",
  },
  {
    name: "Farhana Yasmin",
    course: "IELTS Preparation Masterclass",
    destination: "Scored Band 7.5",
    country: "Language Academy",
    flag: "🎯",
    rating: 5,
    highlight: "Band 7.5 in 2 Months",
    text: "Joined the IELTS masterclass at Alex Global Aftabnagar campus. The speaking mock tests and writing feedback helped me jump from Band 6.0 to 7.5! Highly recommend their dedicated teachers.",
  },
  {
    name: "Mahmudul Hasan & Spouse",
    course: "Postgraduate Degree & Spouse Visa",
    destination: "Canadian Public Institution",
    country: "Canada",
    flag: "🇨🇦",
    rating: 5,
    highlight: "Student + Spouse Visa Granted",
    text: "Applying for a student visa along with a spouse visa is stressful, but Alex Global handled our paperwork flawlessly. Both visas were approved smoothly. Thank you to the entire AGC team!",
  },
  {
    name: "Sharmin Sultana (Parent)",
    course: "Kids English Program",
    destination: "Young Learners Academy",
    country: "Language Academy",
    flag: "🎨",
    rating: 5,
    highlight: "Amazing Kids English Class",
    text: "My 8-year-old daughter used to be very shy about speaking English. After 2 months in Alex Global's Kids English batch, she speaks with incredible confidence. The teachers are very caring and engaging.",
  },
  {
    name: "Shahriar Ahmed",
    course: "Undergraduate Business Program",
    destination: "European University",
    country: "Cyprus",
    flag: "🇨🇾",
    rating: 5,
    highlight: "Affordable & Fast Visa",
    text: "As discussed in their Facebook reel, Cyprus was the most cost-effective European study path for me. Alex Global got my offer and visa processed within just a few weeks with zero complications.",
  },
  {
    name: "Kamrul Islam",
    course: "Master's Degree Program",
    destination: "Australian University",
    country: "Australia",
    flag: "🇦🇺",
    rating: 5,
    highlight: "Honest & Transparent",
    text: "Unlike other agencies who demand huge upfront file opening charges, Alex Global was completely honest and provided free document evaluation from day one. Truly professional service!",
  },
];

export const faqs = [
  {
    q: "Where are Alex Global Consultancy offices located?",
    a: "We operate dual global hubs: Our Dhaka Corporate Office is located at House - 03, Road - 03, Block: H, Section - 02, Merul Badda, Aftabnagar EHL Project, Dhaka, Bangladesh. Our London Branch Office is located at The Arches Cranberry Lane, London E16 4BJ, United Kingdom (UK).",
  },
  {
    q: "How can I contact Alex Global Consultancy directly?",
    a: "You can call or WhatsApp our Bangladesh hotlines at 01886 91 33 91 / +88 01611 40 20 93. For UK inquiries, reach our London office directly at +44 07539228276. You can also email us at care@AlexGlobalConsultancy.com.",
  },
  {
    q: "What language courses does Alex Global Consultancy offer?",
    a: "We provide three specialized language coaching programs: 1) IELTS Preparation Masterclass (Academic & General Training for Band 7.0+), 2) Spoken English & Professional Communication Fluency, and 3) Kids English & Spoken Foundation for children aged 5 to 14 years.",
  },
  {
    q: "What visa categories does Alex Global Consultancy process?",
    a: "We provide comprehensive processing for 8 visa categories: Student Visa, Spouse Visa, Tourist / Visit Visa, Business Visa, Work Permit Visa, Medical Visa, Migration Visa, and Sports Visa.",
  },
  {
    q: "Do you charge any fee for initial profile assessment or counseling?",
    a: "No! Profile evaluation, document gap review, and career consultation at Alex Global Consultancy are 100% FREE with zero file-opening fee.",
  },
  {
    q: "Can I study abroad without IELTS?",
    a: "Yes! For qualifying students who graduated from English-medium institutions or universities with an English Medium of Instruction (MOI), we provide verified study options in the UK, Cyprus, Malaysia, and selected European destinations.",
  },
  {
    q: "Which upcoming intakes can I apply for?",
    a: "We process admissions for January, February, March, April, May, June, August, and September intakes across the UK, USA, Canada, Australia, Europe, and Asia.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "100% Free Profile Assessment",
    text: "Visit our Dhaka Aftabnagar office or connect via WhatsApp (+880 1886-913391). Our senior advisors evaluate your GPA, academic gap, budget, and target goals with zero file fees.",
    badge: "Step 1",
  },
  {
    step: "02",
    title: "Course & Country Shortlisting",
    text: "We identify the ideal university and intake across the UK, USA, Canada, Australia, Cyprus, or Europe tailored to your academic profile and scholarship eligibility.",
    badge: "Step 2",
  },
  {
    step: "03",
    title: "Application & Offer Letter",
    text: "Our admissions desk prepares your academic documents, crafts a compelling Statement of Purpose (SOP), and submits direct applications to secure your conditional/unconditional offer.",
    badge: "Step 3",
  },
  {
    step: "04",
    title: "CAS / I-20 & Financial Compliance",
    text: "We guide you through tuition deposit, sponsor verification, and bank solvency compliance to secure your official CAS, I-20, or visa acceptance letter.",
    badge: "Step 4",
  },
  {
    step: "05",
    title: "Embassy Visa Lodgement & Mock Interview",
    text: "Our visa specialists organize your embassy file with precision and conduct 1-on-1 mock interviews simulating real consular questions to ensure maximum approval chances.",
    badge: "Step 5",
  },
  {
    step: "06",
    title: "Pre-Departure & London/Local Support",
    text: "We assist with air ticketing, student accommodation booking, foreign exchange, and airport pick-up through our London and global network.",
    badge: "Step 6",
  },
];

export const upcomingIntakesAndOffers = [
  {
    id: "uk-intakes",
    badge: "Direct London Hub",
    date: "Jan, May & Sep Intakes",
    title: "UK Higher Education & University Admissions Drive",
    description:
      "Direct admissions to leading UK universities with London local support from our Cranberry Lane office. 1-Year Master's degrees, 2-Year PSW, and MOI eligibility without IELTS.",
    benefits: [
      "£1,500 to £4,000 international student merit bursaries",
      "Direct guidance coordinated between Dhaka & London offices",
      "Fast CAS turnaround and 1-on-1 visa mock interview coaching",
      "Spouse and dependent visa assistance for eligible postgraduate researchers",
    ],
  },
  {
    id: "ielts-batch",
    badge: "Academy Enrolment",
    date: "New Batches Every Month",
    title: "IELTS Preparation Masterclass (Target Band 7.0+)",
    description:
      "Join our intensive offline batches at Aftabnagar, Dhaka or interactive live online classes. Small batch sizes with weekly Cambridge mock tests and personalized speaking drills.",
    benefits: [
      "Free diagnostic test and personalized study roadmap",
      "Weekly complete mock tests with real Cambridge criteria feedback",
      "Individual 1-on-1 speaking evaluations with band score breakdown",
      "Comprehensive IDP & British Council aligned question bank",
    ],
  },
  {
    id: "kids-english",
    badge: "Junior Academy",
    date: "Ongoing Admissions (Ages 5-14)",
    title: "Kids English & Spoken Foundation Program",
    description:
      "Creative, joyful, and fear-free English language development for young children. Activity-based learning, phonics, storytelling, and role-play in a caring, safe environment.",
    benefits: [
      "Phonics-first curriculum for authentic pronunciation",
      "Show-and-tell activities building early public speaking confidence",
      "Fun storytelling, educational games, and vocabulary flashcards",
      "Safe, caring air-conditioned classrooms in Aftabnagar, Dhaka",
    ],
  },
  {
    id: "cyprus-intake",
    badge: "Affordable Europe",
    date: "Feb & Oct Intakes",
    title: "Study in Cyprus — Budget-Friendly European Degrees",
    description:
      "As featured in our official Facebook reels, Cyprus offers high visa approval ratios, low tuition fees starting around €3,000/year, and English-taught Bachelor's and Master's programs.",
    benefits: [
      "High visa grant success with minimal hassle",
      "Low tuition and affordable Mediterranean living costs",
      "No mandatory IELTS for qualified English-medium backgrounds",
      "Credit transfer options across EU member states",
    ],
  },
  {
    id: "canada-dli",
    badge: "PGWP & Co-op",
    date: "Jan, May & Sep Intakes",
    title: "Study in Canada — Top DLIs & Paid Co-op Programs",
    description:
      "Enroll in renowned Canadian public universities and colleges. Benefit from hands-on co-op internships and up to 3 years Post-Graduation Work Permit (PGWP).",
    benefits: [
      "Admission to Designated Learning Institutions (DLIs) nationwide",
      "CAD $2,000 to $8,000 entrance scholarship guidance",
      "Spouse open work permit filing for eligible Master's degrees",
      "Transparent GIC account opening and visa file submission",
    ],
  },
  {
    id: "aus-intake",
    badge: "High Student Wages",
    date: "Feb & July Major Intakes",
    title: "Study in Australia — High Hourly Wages & Post-Study Work",
    description:
      "Fast-track your Australian university admissions with thorough Genuine Student (GS) compliance, financial verification, and high visa approval standard.",
    benefits: [
      "Generous post-study work visa (Subclass 485) up to 4 years",
      "48 hours per fortnight working rights with high minimum hourly wages",
      "Regional campus benefits with extended stay-back rights",
      "15% to 30% international student merit waivers",
    ],
  },
];

