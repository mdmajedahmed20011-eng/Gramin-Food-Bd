/**
 * Academic Allies (AA) — Official Verified Brand Data & Knowledge Base
 * 
 * Verified from:
 *  - Official Facebook Page: https://www.facebook.com/academicalliesofficial/ (47K+ Followers, 48K+ Likes, 100% Recommendation Score)
 *  - Official Brand Assets (C:\Users\Majed\Downloads\new asset):
 *      * logo.jpg (Academic Allies Shield Crest: Golden Plane, Open Book, Stars, "ADVANCING EDUCATION")
 *      * banner.jpg ("Apply with us Make your dreams come true!" — USA, Canada, UK, Malaysia, Sweden + Partner Accreditations: British Council, IELTS, ICEF, IDP, Pearson PTE, TOEFL)
 *      * succes.jpg, succes 2.jpg, succes 3 revwie.jpg, 778915755... (Real Student & Guardian European Visa Grant Proofs in front of "YOUR JOURNEY TO EUROPE IN 5 STEPS" official backdrop)
 *  - Corporate Headquarters & Branches:
 *      * Chattogram HQ: Finlay Square (7th Floor), CDA Avenue, 2 No. Gate, East Nasirabad, Chattogram, Bangladesh.
 *      * City Branch: Zeenat Abad, Chittagong-4203, Bangladesh.
 *      * Liaison Desks: Dhaka & Noakhali.
 *  - Official Verified Hotlines & WhatsApp: 
 *      * Primary Helpline & WhatsApp: +880 1859-870936 (01859-870936)
 *      * Additional Support Lines: +880 1812-386307, +880 1812-386318, 01805-211186, 01805-211860
 *  - Official Digital Contacts:
 *      * Email: academicallies0@gmail.com
 *      * Social Handles: Facebook (@academicalliesofficial), Instagram (@academicallies0), YouTube (@AcademicAllies-rs8tq), LinkedIn
 *  - Partner Accreditations: British Council, IELTS, ICEF (Accredited Agency), IDP Education, Pearson PTE, TOEFL ETS.
 */

export type NavChild = { label: string; to: string; params?: Record<string, string>; badge?: string };
export type NavItem = { label: string; to: string; params?: Record<string, string>; children?: NavChild[] };

export const company = {
  name: "Academic Allies",
  shortName: "Academic Allies",
  acronym: "AA",
  legalName: "Academic Allies — Student Immigration & Higher Education Consultancy",
  nativeName: "অ্যাকাডেমিক অ্যালাইজ — Advancing Education",
  slogan: "Advancing Education",
  bengaliHeadline: "আপনার স্বপ্নের বৈশ্বিক উচ্চশিক্ষায় বিশ্বস্ত সঙ্গী",
  bengaliSubheadline: "দালালমুক্ত শতভাগ স্বচ্ছতায় ইউরোপ ও বিশ্বের শীর্ষ বিশ্ববিদ্যালয়ে ভর্তি, ভিসা প্রসেসিং ও ব্রিটিশ কাউন্সিল অ্যালাইন্ড IELTS-স্পোকেন ইংলিশ কেয়ার",
  motto: "Your Dream. Our Guidance. Your Global Future.",
  philosophy: "TRANSPARENCY • AUTHENTICITY • SCHOLASTIC EXCELLENCE",
  tagline:
    "Chattogram's premier educational consultancy specializing in European & Asian admissions, genuine student visa guidance, and British Council & IDP aligned IELTS, Spoken English & Kids English programs.",
  taglineBn: "ইউরোপ ও বৈশ্বিক উচ্চশিক্ষায় আপনার বিশ্বস্ত সঙ্গী",
  bio: "Leading Educational Consultant & Study Abroad Advisory in Chattogram · 47K+ Community · European Visas, IELTS Band 7+, Spoken English & Kids Foundation 🎓",
  category: "Educational Consultant · Study Abroad Agency · Language Academy",
  established: "2018",
  origin: "Chattogram, Bangladesh",
  presence: "Finlay Square (7th Floor), East Nasirabad, Chattogram | Zeenat Abad | Dhaka | Noakhali",
  email: "academicallies0@gmail.com",
  contactEmail: "academicallies0@gmail.com",
  altEmail: "academicallies0@gmail.com",
  emails: ["academicallies0@gmail.com"],
  phones: ["01859-870936", "+880 1812-386307", "+880 1812-386318", "01805-211186"],
  whatsapp: "+8801859870936",
  whatsappFormatted: "+880 1859-870936",
  hours: "Saturday – Thursday: 10:00 AM – 6:00 PM (Friday Closed / Appointment Only)",
  signOff: "Academic Allies · Advancing Education · Your Trusted Gateway to Global Academic Excellence",
  
  // Offices Network
  offices: {
    chattogram: {
      name: "Chattogram Corporate Headquarters (Finlay Square)",
      address: "Finlay Square (7th Floor), CDA Avenue, 2 No. Gate, East Nasirabad, Chattogram, Bangladesh",
      full: "Finlay Square (7th Floor), CDA Avenue, 2 No. Gate, East Nasirabad, Chattogram, Bangladesh",
      phone: "01859-870936",
      phones: ["01859-870936", "+880 1812-386307", "+880 1812-386318"],
      whatsapp: "+8801859870936",
      hours: "Saturday – Thursday: 10:00 AM – 6:00 PM",
      mapsUrl: "https://maps.google.com/?q=Finlay+Square+CDA+Avenue+Chattogram",
      mapsEmbed: "https://maps.google.com/maps?q=Finlay+Square+CDA+Avenue+Chattogram+Bangladesh&z=16&hl=en&output=embed",
    },
    chattogramHQ: {
      name: "Chattogram Corporate Headquarters (Finlay Square)",
      address: "Finlay Square (7th Floor), CDA Avenue, 2 No. Gate, East Nasirabad, Chattogram, Bangladesh",
      full: "Finlay Square (7th Floor), CDA Avenue, 2 No. Gate, East Nasirabad, Chattogram, Bangladesh",
      phone: "01859-870936",
      phones: ["01859-870936", "+880 1812-386307", "+880 1812-386318"],
      whatsapp: "+8801859870936",
      hours: "Saturday – Thursday: 10:00 AM – 6:00 PM",
      mapsUrl: "https://maps.google.com/?q=Finlay+Square+CDA+Avenue+Chattogram",
      mapsEmbed: "https://maps.google.com/maps?q=Finlay+Square+CDA+Avenue+Chattogram+Bangladesh&z=16&hl=en&output=embed",
    },
    branch: {
      name: "Chattogram City Branch (Zeenat Abad)",
      address: "Zeenat Abad, Chittagong-4203, Bangladesh",
      full: "Zeenat Abad, Chittagong-4203, Bangladesh",
      phone: "01805-211186",
      phones: ["01805-211186", "01805-211860"],
      whatsapp: "+8801859870936",
      hours: "Saturday – Thursday: 10:00 AM – 6:00 PM",
      mapsUrl: "https://maps.google.com/?q=Zeenat+Abad+Chittagong+Bangladesh",
      mapsEmbed: "https://maps.google.com/maps?q=Zeenat+Abad+Chittagong+Bangladesh&z=15&hl=en&output=embed",
    },
    chattogramBranch: {
      name: "Chattogram City Branch (Zeenat Abad)",
      address: "Zeenat Abad, Chittagong-4203, Bangladesh",
      full: "Zeenat Abad, Chittagong-4203, Bangladesh",
      phone: "01805-211186",
      phones: ["01805-211186", "01805-211860"],
      whatsapp: "+8801859870936",
      hours: "Saturday – Thursday: 10:00 AM – 6:00 PM",
      mapsUrl: "https://maps.google.com/?q=Zeenat+Abad+Chittagong+Bangladesh",
      mapsEmbed: "https://maps.google.com/maps?q=Zeenat+Abad+Chittagong+Bangladesh&z=15&hl=en&output=embed",
    },
    dhaka: {
      name: "Dhaka Regional Liaison Desk",
      address: "Dhaka, Bangladesh",
      full: "Dhaka, Bangladesh",
      phone: "01859-870936",
      phones: ["01859-870936"],
      whatsapp: "+8801859870936",
      hours: "Saturday – Thursday: 10:00 AM – 6:00 PM",
      mapsUrl: "https://maps.google.com/?q=Dhaka+Bangladesh",
      mapsEmbed: "https://maps.google.com/maps?q=Dhaka+Bangladesh&z=13&hl=en&output=embed",
    },
    noakhali: {
      name: "Noakhali Information Desk",
      address: "Noakhali, Bangladesh",
      full: "Noakhali, Bangladesh",
      phone: "01812-386307",
      phones: ["01812-386307"],
      whatsapp: "+8801859870936",
      hours: "Saturday – Thursday: 10:00 AM – 6:00 PM",
      mapsUrl: "https://maps.google.com/?q=Noakhali+Bangladesh",
      mapsEmbed: "https://maps.google.com/maps?q=Noakhali+Bangladesh&z=14&hl=en&output=embed",
    },
  },

  headquarters: {
    name: "Chattogram Corporate Headquarters (Finlay Square)",
    title: "Chattogram Corporate Headquarters (Finlay Square)",
    building: "Finlay Square (7th Floor)",
    road: "CDA Avenue, 2 No. Gate",
    area: "East Nasirabad",
    city: "Chattogram",
    postalCode: "4000",
    country: "Bangladesh",
    address: "Finlay Square (7th Floor), CDA Avenue, 2 No. Gate, East Nasirabad, Chattogram, Bangladesh",
    full: "Finlay Square (7th Floor), CDA Avenue, 2 No. Gate, East Nasirabad, Chattogram, Bangladesh",
    phone: "01859-870936",
    phones: ["01859-870936", "+880 1812-386307", "+880 1812-386318"],
    hotlines: ["01859-870936", "+880 1812-386307", "+880 1812-386318"],
    whatsapp: "+8801859870936",
    whatsappDisplay: "+880 1859-870936",
    email: "academicallies0@gmail.com",
    hours: "Saturday – Thursday: 10:00 AM – 6:00 PM",
    mapsUrl: "https://maps.google.com/?q=Finlay+Square+CDA+Avenue+Chattogram",
    mapsEmbed: "https://maps.google.com/maps?q=Finlay+Square+CDA+Avenue+Chattogram+Bangladesh&z=16&hl=en&output=embed",
  },

  chattogramHeadOffice: {
    name: "Chattogram Corporate Headquarters (Finlay Square)",
    title: "Chattogram Corporate Headquarters (Finlay Square)",
    building: "Finlay Square (7th Floor)",
    road: "CDA Avenue, 2 No. Gate",
    area: "East Nasirabad",
    city: "Chattogram",
    postalCode: "4000",
    country: "Bangladesh",
    address: "Finlay Square (7th Floor), CDA Avenue, 2 No. Gate, East Nasirabad, Chattogram, Bangladesh",
    full: "Finlay Square (7th Floor), CDA Avenue, 2 No. Gate, East Nasirabad, Chattogram, Bangladesh",
    phone: "01859-870936",
    phones: ["01859-870936", "+880 1812-386307", "+880 1812-386318"],
    hotlines: ["01859-870936", "+880 1812-386307", "+880 1812-386318"],
    whatsapp: "+8801859870936",
    whatsappDisplay: "+880 1859-870936",
    email: "academicallies0@gmail.com",
    hours: "Saturday – Thursday: 10:00 AM – 6:00 PM",
    mapsUrl: "https://maps.google.com/?q=Finlay+Square+CDA+Avenue+Chattogram",
    mapsEmbed: "https://maps.google.com/maps?q=Finlay+Square+CDA+Avenue+Chattogram+Bangladesh&z=16&hl=en&output=embed",
  },

  chattogramZeenatOffice: {
    name: "Chattogram City Branch (Zeenat Abad)",
    title: "Chattogram City Branch (Zeenat Abad)",
    area: "Zeenat Abad",
    city: "Chittagong-4203",
    country: "Bangladesh",
    address: "Zeenat Abad, Chittagong-4203, Bangladesh",
    full: "Zeenat Abad, Chittagong-4203, Bangladesh",
    phone: "01805-211186",
    phones: ["01805-211186", "01805-211860"],
    hotlines: ["01805-211186", "01805-211860"],
    whatsapp: "+8801859870936",
    whatsappDisplay: "+880 1859-870936",
    email: "academicallies0@gmail.com",
    hours: "Saturday – Thursday: 10:00 AM – 6:00 PM",
    mapsUrl: "https://maps.google.com/?q=Zeenat+Abad+Chittagong+Bangladesh",
    mapsEmbed: "https://maps.google.com/maps?q=Zeenat+Abad+Chittagong+Bangladesh&z=15&hl=en&output=embed",
  },

  chattogramOffice: {
    title: "Chattogram Corporate Headquarters (Finlay Square)",
    building: "Finlay Square (7th Floor)",
    road: "CDA Avenue, 2 No. Gate",
    area: "East Nasirabad",
    city: "Chattogram",
    country: "Bangladesh",
    full: "Finlay Square (7th Floor), CDA Avenue, 2 No. Gate, East Nasirabad, Chattogram, Bangladesh",
    hotlines: ["01859-870936", "+880 1812-386307", "+880 1812-386318"],
    whatsapp: "+8801859870936",
    whatsappDisplay: "+880 1859-870936",
    email: "academicallies0@gmail.com",
    mapsUrl: "https://maps.google.com/?q=Finlay+Square+CDA+Avenue+Chattogram",
    mapsEmbed: "https://maps.google.com/maps?q=Finlay+Square+CDA+Avenue+Chattogram+Bangladesh&z=16&hl=en&output=embed",
  },

  branchOffice: {
    title: "Chattogram City Branch (Zeenat Abad)",
    area: "Zeenat Abad",
    city: "Chittagong-4203",
    country: "Bangladesh",
    full: "Zeenat Abad, Chittagong-4203, Bangladesh",
    hotlines: ["01805-211186", "01805-211860"],
    whatsapp: "+8801859870936",
    whatsappDisplay: "+880 1859-870936",
    email: "academicallies0@gmail.com",
    mapsUrl: "https://maps.google.com/?q=Zeenat+Abad+Chittagong+Bangladesh",
    mapsEmbed: "https://maps.google.com/maps?q=Zeenat+Abad+Chittagong+Bangladesh&z=15&hl=en&output=embed",
  },

  address: {
    building: "Finlay Square (7th Floor)",
    street: "CDA Avenue, 2 No. Gate",
    area: "East Nasirabad",
    city: "Chattogram",
    postalCode: "4000",
    country: "Bangladesh",
    full: "Finlay Square (7th Floor), CDA Avenue, East Nasirabad, Chattogram, Bangladesh",
    networkNote: "HQ: Finlay Square 7th Floor, Chattogram | Branches: Zeenat Abad, Dhaka & Noakhali",
  },

  geo: { lat: 22.3601, lng: 91.8217 },
  mapsUrl: "https://maps.google.com/?q=Finlay+Square+CDA+Avenue+Chattogram",
  mapsEmbed: "https://maps.google.com/maps?q=Finlay+Square+CDA+Avenue+Chattogram+Bangladesh&z=16&hl=en&output=embed",

  social: {
    facebook: "https://www.facebook.com/academicalliesofficial/",
    facebookPageName: "@academicalliesofficial",
    facebookVideos: "https://www.facebook.com/academicalliesofficial/videos",
    facebookReels: "https://www.facebook.com/academicalliesofficial/reels",
    instagram: "https://www.instagram.com/academicallies0/",
    instagramHandle: "@academicallies0",
    youtube: "https://www.youtube.com/@AcademicAllies-rs8tq",
    youtubeHandle: "@AcademicAllies-rs8tq",
    linkedin: "https://bd.linkedin.com/in/academic-allies-31a977304",
    messenger: "https://m.me/academicalliesofficial",
  },

  stats: [
    { value: "47K+", label: "Facebook Community Followers", badge: "Verified Reach" },
    { value: "48K+", label: "Active Supporters & Likes", badge: "Trusted Agency" },
    { value: "100%", label: "Recommendation & Positive Rating", badge: "5-Star Feedback" },
    { value: "5-Step", label: "Structured European Visa Pathway", badge: "Zero-Traps Guarantee" },
    { value: "100+", label: "Verified Student Visa Grants", badge: "Proven Results" },
    { value: "ICEF", label: "Accredited Global Education Agency", badge: "Certified Partner" },
  ],

  accreditations: [
    { name: "British Council", role: "IELTS Official Test Registration & Training Partner" },
    { name: "IELTS", role: "Academic & General Training Test Preparation Hub" },
    { name: "ICEF", role: "Certified International Education Agency" },
    { name: "IDP Education", role: "Official IELTS Test Center Associate" },
    { name: "Pearson | PTE", role: "PTE Academic Exam Counseling & Training" },
    { name: "TOEFL ETS", role: "ETS Recognized Global Preparation Center" },
  ],

  verifiedKeyPartners: [
    {
      name: "Top Universities in Italy (Europe)",
      country: "Italy (Schengen)",
      note: "University of Padova, Universitaly pre-enrolment, CIMEA verification & regional scholarship support up to €7,000/yr",
    },
    {
      name: "Leading Swedish Higher Education",
      country: "Sweden (Europe)",
      note: "English-medium Master's, post-study work residence permits & open spouse visa rights",
    },
    {
      name: "Finnish Universities of Applied Sciences",
      country: "Finland (Europe)",
      note: "World's top education ranking, 2-year job seeker stay-back & 30 hrs/week student working rights",
    },
    {
      name: "Top Universities in United Kingdom",
      country: "United Kingdom",
      note: "1-Year Master's, 2-Year Graduate Route PSW, Medium of Instruction (MOI) acceptance & prompt CAS",
    },
    {
      name: "Designated Learning Institutions (DLIs) Canada",
      country: "Canada",
      note: "Reputable public colleges & universities, paid co-op internships & up to 3-year PGWP",
    },
    {
      name: "Tier-1 Accredited United States Universities",
      country: "USA",
      note: "STEM OPT 36-month work extension, institutional scholarships & thorough F-1 mock interviews",
    },
    {
      name: "Malaysian Premier Institutions",
      country: "Malaysia (Asia)",
      note: "Affordable tuition, low living cost, halal food & UK/Australian dual degree transfer pathways",
    },
    {
      name: "Greek & Mediterranean European Universities",
      country: "Greece (Europe)",
      note: "Affordable European tuition, flexible admission & fast-track Schengen student visa processing",
    },
  ],
} as const;

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Study Abroad",
    to: "/destinations",
    children: [
      { label: "Europe in 5 Steps", to: "/destinations", badge: "Signature Pathway" },
      { label: "Study in Italy", to: "/study-in-{$country}", params: { country: "italy" }, badge: "Universitaly / Scholarships" },
      { label: "Study in Sweden", to: "/study-in-{$country}", params: { country: "sweden" }, badge: "Schengen Hub" },
      { label: "Study in Finland", to: "/study-in-{$country}", params: { country: "finland" }, badge: "High Quality" },
      { label: "Study in UK", to: "/study-in-{$country}", params: { country: "uk" }, badge: "1-Yr Masters / PSW" },
      { label: "Study in Canada", to: "/study-in-{$country}", params: { country: "canada" }, badge: "PGWP / Co-op" },
      { label: "Study in USA", to: "/study-in-{$country}", params: { country: "usa" }, badge: "STEM OPT" },
      { label: "Study in Malaysia", to: "/study-in-{$country}", params: { country: "malaysia" }, badge: "Affordable Asia" },
      { label: "Study in Greece", to: "/study-in-{$country}", params: { country: "greece" }, badge: "Affordable Europe" },
      { label: "All Destinations", to: "/destinations", badge: "Worldwide" },
    ],
  },
  {
    label: "Language Academy",
    to: "/services",
    children: [
      { label: "IELTS Preparation (Band 7+)", to: "/services", badge: "Academic & GT" },
      { label: "Spoken English & Fluency", to: "/services", badge: "Accent & Interview" },
      { label: "Kids English Foundation", to: "/services", badge: "Ages 5–14" },
      { label: "Free Diagnostic Test", to: "/services", badge: "100% Free" },
    ],
  },
  {
    label: "Visa & Services",
    to: "/services",
    children: [
      { label: "Student Visa Guidance", to: "/services", badge: "Core Service" },
      { label: "European 5-Step Process", to: "/services", badge: "Proven Model" },
      { label: "Embassy Mock Interviews", to: "/services", badge: "1-on-1 Coaching" },
      { label: "Scholarship Assistance", to: "/services", badge: "Financial Aid" },
      { label: "Pre-Departure & Logistics", to: "/services", badge: "Full Support" },
    ],
  },
  { label: "Intakes & Offers", to: "/offers" },
  { label: "About Academic Allies", to: "/about" },
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
    slug: "italy",
    name: "Italy",
    flag: "🇮🇹",
    region: "Europe (Schengen)",
    tagline: "Universitaly portal pre-enrolment, University of Padova, and regional scholarships up to €7,000/year",
    intro:
      "Italy is a premier European destination for Academic Allies students. With world-renowned public universities like University of Padova, students benefit from English-taught Bachelor's and Master's degrees, DSU need-based regional scholarships covering living costs, and comprehensive Universitaly pre-enrolment guidance.",
    why: [
      "Historic, globally respected universities offering 100% English-medium curricula",
      "Regional Government Scholarships (DSU/ER.GO/EDISU) providing full tuition waivers + up to €7,000 yearly living stipend",
      "End-to-end guidance by Academic Allies on Universitaly portal registration, CIMEA comparability, and declaration of value",
      "Schengen Area mobility across 29 European countries with high student quality of life",
      "Meticulous visa documentation preventing common appointment and submission delays",
    ],
    popularFields: ["Computer Science & Engineering", "Business & Economics", "Data Science & AI", "Biotechnology & Pharmacy", "Architecture & Industrial Design"],
    avgTuition: "€900 – €3,000 / year (zero with regional scholarship waivers)",
    avgLiving: "€500 – €750 / month (often subsidized by scholarships)",
    pswv: "1 Year Post-Study Job Search Permit",
    intakes: "September/October (Main Autumn Intake)",
    scholarships: "Regional DSU Scholarships (100% Tuition Waiver + Living Grant)",
    topUnis: ["University of Padova", "Politecnico di Milano", "University of Bologna", "Sapienza University of Rome", "University of Florence"],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "sweden",
    name: "Sweden",
    flag: "🇸🇪",
    region: "Europe (Schengen)",
    tagline: "World-leading Scandinavian innovation, sustainable tech, and post-study residence permits",
    intro:
      "Featured prominently on our official banner, Sweden is home to Nobel Prize innovation and leading European research universities. Academic Allies provides thorough document preparation for Swedish admissions and residence permit applications.",
    why: [
      "Global leader in innovation, design, and green technology education",
      "1-year job seeker residence permit for international graduates to find employment or launch a startup",
      "Generous family and spouse open work permit rights for degree-seeking students",
      "Safe, clean society where virtually everyone speaks fluent English",
    ],
    popularFields: ["Software Engineering & AI", "Sustainable Energy", "Business & Industrial Management", "Life Sciences & Biomedicine", "Mechanical Engineering"],
    avgTuition: "SEK 90,000 – 150,000 / year",
    avgLiving: "SEK 9,500 – 12,000 / month",
    pswv: "12 Months Job Search Residence Permit",
    intakes: "Autumn (August/September) & Spring (January)",
    scholarships: "Swedish Institute (SI) Scholarships & University Merit Waivers",
    topUnis: ["KTH Royal Institute of Technology", "Lund University", "Chalmers University of Technology", "Uppsala University", "Stockholm University"],
    withoutIelts: false,
    featured: true,
  },
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    tagline: "Fast 1-year Master's, 2-Year Graduate Route PSW, and partner merit scholarships up to £4,000",
    intro:
      "The UK continues to be a cornerstone destination for Academic Allies scholars. We provide direct university shortlisting, prompt CAS processing, Medium of Instruction (MOI) options, and comprehensive Tier-4 student visa support.",
    why: [
      "Fast-track 1-year intensive Master's degrees delivering high ROI",
      "2-Year Graduate Route Post-Study Work Visa (PSW) upon degree completion",
      "Eligibility for Medium of Instruction (MOI) admission for qualified Bangladeshi graduates",
      "Direct applications to Russell Group and modern career-focused partner universities",
      "International merit scholarships between £1,500 and £4,000",
    ],
    popularFields: ["Computer Science & Cyber Security", "MBA & International Business", "Data Analytics & FinTech", "Public Health & Nursing", "Civil Engineering"],
    avgTuition: "£11,000 – £16,500 / year (after partner fee discounts)",
    avgLiving: "£9,207 – £12,000 / year",
    pswv: "2 Years (Graduate Route Visa)",
    intakes: "January/February, May/June & September/October",
    scholarships: "£1,500 – £4,000 Merit Bursaries",
    topUnis: ["University of Greenwich", "University of Hertfordshire", "University of East London", "Coventry University", "Southampton Solent University"],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    region: "North America",
    tagline: "Designated Learning Institutions (DLIs), paid co-op internships, and up to 3-year PGWP",
    intro:
      "Canada delivers globally accredited degrees with practical paid co-op placements. Academic Allies guides students through DLI program selection, PAL/CAQ compliance, and genuine student visa filing with complete financial verification.",
    why: [
      "World-class Designated Learning Institutions (DLIs) across Ontario, British Columbia, Alberta, and Atlantic provinces",
      "Up to 3-Year Post-Graduation Work Permit (PGWP) for eligible degree programs",
      "Co-op work terms allowing students to gain paid Canadian corporate experience during studies",
      "Welcoming multicultural society with clear post-study pathways",
    ],
    popularFields: ["Information Technology & Cloud Computing", "Business Administration & Supply Chain", "Biotechnology", "Health Informatics", "Civil & Mechanical Engineering"],
    avgTuition: "CAD $15,000 – $27,000 / year",
    avgLiving: "CAD $14,000 – $18,000 / year",
    pswv: "Up to 3 Years (PGWP)",
    intakes: "January (Winter), May (Summer) & September (Fall)",
    scholarships: "CAD $2,000 – $8,000 Academic Merit Grants",
    topUnis: ["University of Windsor", "Memorial University of Newfoundland", "Conestoga College", "Seneca Polytechnic", "Fanshawe College"],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "usa",
    name: "United States",
    flag: "🇺🇸",
    region: "North America",
    tagline: "Tier-1 research institutions, STEM OPT 3-year work extension, and 1-on-1 F-1 visa mock interviews",
    intro:
      "The USA offers unparalleled academic infrastructure with over 4,000 accredited institutions. Academic Allies advisors conduct intensive 1-on-1 F-1 visa interview simulations to build authentic student confidence.",
    why: [
      "Access to leading laboratories, research funding, and top faculty",
      "3-Year STEM OPT extension allowing science, tech, math, and engineering graduates to work in the US",
      "Graduate Assistantships (TA/RA) with tuition waivers and monthly stipends",
      "Intensive 1-on-1 F-1 mock interview preparation simulating real embassy visa officer interactions",
    ],
    popularFields: ["Computer Science & Artificial Intelligence", "Data Science & Analytics", "Electrical & Computer Engineering", "Business Analytics", "Biomedical Sciences"],
    avgTuition: "$14,000 – $32,000 / year",
    avgLiving: "$10,000 – $15,000 / year",
    pswv: "1 Year Standard / 3 Years (STEM OPT)",
    intakes: "Fall (August/September) & Spring (January)",
    scholarships: "$3,000 up to Full Tuition Waivers",
    topUnis: ["Arizona State University", "University of North Texas", "University of South Florida", "Purdue University Fort Wayne", "Georgia State University"],
    withoutIelts: false,
    featured: true,
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    region: "Southeast Asia",
    tagline: "Affordable tropical education, fast EMGS visa processing, and UK/Aus credit transfer options",
    intro:
      "Prominently featured on our official banner, Malaysia provides world-class British and Australian accredited education at a fraction of Western costs. Ideal for SSC, HSC, and diploma holders seeking fast visa approval.",
    why: [
      "Affordable tuition fees and low cost of living with halal food everywhere",
      "Fast, seamless EMGS student visa approval within 3 to 4 weeks",
      "Flexible pathways for SSC and HSC graduates into recognized diplomas and degrees",
      "Direct credit transfer (2+1 / 2+2) to partner universities in the UK and Australia",
    ],
    popularFields: ["Hospitality & Hotel Management", "Business Management & Marketing", "Information Technology & Software", "Engineering", "Culinary Arts"],
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
    slug: "finland",
    name: "Finland",
    flag: "🇫🇮",
    region: "Europe (Schengen)",
    tagline: "World's happiest country, high research innovation, and 2-year post-study job seeker visa",
    intro:
      "Finland boasts one of the globe's finest education systems. Academic Allies assists students with UAS entrance exam preparation, tuition fee scholarship applications, and residence permit filing.",
    why: [
      "Generous 2-year post-study job seeker residence permit for international graduates",
      "Student work permit allows up to 30 hours per week during academic semesters",
      "High standard of safety, world-leading quality of life, and clean environment",
      "English-taught Bachelor's and Master's degrees across Universities of Applied Sciences",
    ],
    popularFields: ["Information & Communication Technology", "International Business", "Artificial Intelligence & Game Development", "Environmental Engineering", "Nursing"],
    avgTuition: "€8,000 – €14,000 / year",
    avgLiving: "€700 – €900 / month",
    pswv: "Up to 2 Years Post-Study Work Permit",
    intakes: "September (Autumn) & January (Spring)",
    scholarships: "20% – 50% Early Bird & Academic Merit Scholarships",
    topUnis: ["Aalto University", "University of Helsinki", "Metropolia UAS", "Centria UAS", "LUT University"],
    withoutIelts: true,
    featured: false,
  },
  {
    slug: "greece",
    name: "Greece",
    flag: "🇬🇷",
    region: "Europe (Schengen)",
    tagline: "Affordable Mediterranean European degrees with Schengen access and flexible admission",
    intro:
      "Greece offers an accessible gateway to European higher education. With English-medium college programs in Athens and Thessaloniki, students enjoy affordable tuition, reasonable living costs, and Schengen travel freedom.",
    why: [
      "Affordable tuition fees starting around €3,500 to €5,000 per year",
      "Schengen student visa allowing travel across 29 European countries",
      "English-taught Bachelor's and Master's degrees in business, computing, and tourism",
      "Pleasant Mediterranean lifestyle with vibrant student communities",
    ],
    popularFields: ["Business Administration", "Hospitality & Tourism Management", "Computer Science", "Maritime Studies", "Marketing"],
    avgTuition: "€3,500 – €5,500 / year",
    avgLiving: "€500 – €700 / month",
    pswv: "European credit transfer & regional employment pathways",
    intakes: "February (Spring) & October (Autumn)",
    scholarships: "Up to 40% Early Bird & Academic Discounts",
    topUnis: ["Metropolitan College Greece", "New York College Athens", "City University of Seattle Athens", "American College of Greece"],
    withoutIelts: true,
    featured: false,
  },
];

export const europeFiveSteps = [
  {
    step: 1,
    title: "Eligibility Check & Profile Evaluation",
    titleBn: "যোগ্যতা যাচাই ও প্রোফাইল মূল্যায়ন",
    desc: "We evaluate your academic CGPA, study gap, financial background, and language skills to determine the best European universities for your profile.",
    descBn: "আপনার একাডেমিক সিজিপিএ, স্টাডি গ্যাপ ও ভাষা দক্ষতা ফ্রি যাচাই করে সঠিক ইউরোপীয় বিশ্ববিদ্যালয় নির্বাচন করা হয়।",
    icon: "📋",
  },
  {
    step: 2,
    title: "University & Program Selection",
    titleBn: "বিশ্ববিদ্যালয় ও বিষয় নির্বাচন",
    desc: "Choose the best-suited universities and English-medium programs as per your career goals (Italy, Sweden, Finland, UK, etc.).",
    descBn: "আপনার ক্যারিয়ার লক্ষ্য অনুযায়ী ইতালি, সুইডেন, ফিনল্যান্ড বা যুক্তরাজ্যের সেরা বিষয় ও স্কলারশিপযুক্ত কোর্স বাছাই।",
    icon: "🏛️",
  },
  {
    step: 3,
    title: "Application Submission & Pre-enrolment",
    titleBn: "আবেদন ও প্রি-এনরোলমেন্ট সাবমিশন",
    desc: "We assist you in preparing SOPs, LORs, Universitaly portal pre-enrolment, CIMEA comparability, and direct university offer letters.",
    descBn: "ইউনিভার্সিটার্লি প্রি-এনরোলমেন্ট, চিমেয়া ভেরিফিকেশন, এসওপি প্রস্তুত এবং অফার লেটার সংগ্রহে শতভাগ সহায়তা।",
    icon: "📨",
  },
  {
    step: 4,
    title: "Visa Processing & Authentic Documentation",
    titleBn: "ভিসা প্রসেসিং ও জেনুইন ডকুমেন্টস",
    desc: "Expert guidance for genuine visa filing, embassy appointments, financial sponsorship audit, and 1-on-1 visa interview preparation until approval.",
    descBn: "দালালমুক্ত শতভাগ সঠিক ফাইল রেডি, স্পন্সরশিপ অডিট এবং অ্যাম্বাসি ভাইভা ইন্টারভিউয়ের প্রস্তুতি।",
    icon: "🛂",
  },
  {
    step: 5,
    title: "Fly to Europe & Global Success",
    titleBn: "ইউরোপে যাত্রা ও গ্লোবাল ক্যারিয়ার",
    desc: "Pack your bags! Comprehensive pre-departure briefings, discounted student flights, accommodation support, and airport welcome guidance.",
    descBn: "ভিসা প্রাপ্তির পর সাশ্রয়ী বিমান টিকিট, থাকার জায়গা ও প্রি-ডিপার্চার ব্রিফিং শেষে সফলভাবে ইউরোপে উড়াল।",
    icon: "✈️",
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
    batchType: "Finlay Square Chattogram Campus & Interactive Online",
    targetOutcome: "Target Band Score 7.0 to 8.5",
    description:
      "Academic Allies IELTS coaching is designed specifically for students and professionals aiming to study abroad or migrate. Led by certified instructors aligned with British Council and IDP standards, our program covers all four modules with weekly Cambridge-standard mock tests.",
    highlights: [
      "1-on-1 Speaking mock interviews with individualized examiner-level feedback",
      "Task 1 & Task 2 Writing evaluation with analytical score breakdown",
      "Proven strategies for Reading passage scanning and True/False/Not Given questions",
      "Audio accent decoding practice (British, Australian, American accents)",
      "Weekly full-length mock tests simulating actual British Council / IDP exam conditions",
      "Official British Council & IDP exam registration assistance at our Chattogram hub",
    ],
    modules: [
      { title: "Listening Mastery", desc: "Predicting answers, signpost words, section-wise traps, note completion, and multiple choice precision." },
      { title: "Academic Reading", desc: "Skimming, scanning, heading matching, summary completion, handling complex academic journal passages." },
      { title: "Task 1 & 2 Writing", desc: "Report & graph structures, essay coherence, cohesive devices, Lexical Resource, and grammatical range." },
      { title: "Speaking Fluency", desc: "Overcoming hesitation, cue card elaboration, Part 3 discussions, pronunciation, and idiomatic phrasing." },
    ],
  },
  {
    slug: "spoken-english",
    title: "Spoken English & Communication Fluency",
    subtitle: "Speak English Confidently in Corporate & Visa Interview Settings",
    category: "spoken",
    icon: "🗣️",
    badge: "Career Booster",
    duration: "2 Months (24 Live Sessions)",
    classSchedule: "3 Days / Week (Evening & Flexible Batches)",
    batchType: "Finlay Square Classroom & Interactive Online",
    targetOutcome: "Natural Conversational Fluency & Accent Neutralization",
    description:
      "Break free from hesitation and fear of speaking English! Academic Allies Spoken English program emphasizes practical daily dialogues, accent refinement, professional presentations, and embassy visa interview readiness.",
    highlights: [
      "Daily extempore speaking sessions, situational dialogues, and friendly debates",
      "Eliminating grammatical hesitation and mother-tongue influence (MTI)",
      "Embassy visa interview Q&A simulations with body language coaching",
      "Corporate communication, formal meeting etiquette, and presentation skills",
      "Small batch sizes at Finlay Square center ensuring personal speaking time for everyone",
    ],
    modules: [
      { title: "Fluency Foundations", desc: "Breaking mental blocks, thinking in English, basic conversational structures, overcoming shyness." },
      { title: "Pronunciation & Accent", desc: "Phonetic sounds, syllable stress, intonation patterns, clear accent articulation." },
      { title: "Professional Scenarios", desc: "Presentations, formal meetings, negotiations, telephonic and video conference etiquette." },
      { title: "Embassy & Job Interview Prep", desc: "Answering tough questions, confident eye contact, tone control, concise self-introduction." },
    ],
  },
  {
    slug: "kids-english",
    title: "Kids English & Young Learners Foundation",
    subtitle: "Creative, Fun & Engaging English Learning for Ages 5 to 14",
    category: "kids",
    icon: "🎨",
    badge: "Young Champions",
    duration: "3 Months (Ongoing batches)",
    classSchedule: "2 to 3 Days / Week (Weekend & After-School Timings)",
    batchType: "Finlay Square Safe Classroom & Online Batches",
    targetOutcome: "Strong Early English Foundation, Reading Habit & Natural Spoken Confidence",
    description:
      "Designed specifically for young learners aged 5 to 14, Academic Allies Kids English program makes language acquisition joyful and organic. Through phonics, animated storytelling, educational games, and role-play, children develop spontaneous English communication without fear.",
    highlights: [
      "Activity-based learning: educational games, cartoons, rhymes, and drama",
      "Phonics-first approach ensuring correct pronunciation and spelling from an early age",
      "Building rich vocabulary through visual flashcards and real objects",
      "Encouraging public speaking confidence through friendly show-and-tell sessions",
      "Warm, supportive, and child-safe classroom environment at Finlay Square Chattogram",
      "Regular progress updates and parent-teacher feedback sessions",
    ],
    modules: [
      { title: "Phonics & Sound Magic", desc: "Letter-sound connection, blending, digraphs, early sight words, and spelling tricks." },
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
      "From selecting the right European, North American, or Asian university to securing confirmed unconditional offer letters, Academic Allies guides you with 100% transparency and zero hidden charges.",
    points: [
      "Free profile assessment and study gap evaluation with complete transparency",
      "Course shortlisting matching your academic CGPA, career aspirations, and scholarship opportunities",
      "Direct university portal applications ensuring fast turnaround for offer letters",
      "Professional Statement of Purpose (SOP) and Recommendation Letter (LOR) guidance",
    ],
    icon: "🎓",
    timeline: "Offer Letters in 1 to 3 Weeks",
    guarantee: "100+ Partner Universities",
    highlightBadge: "Core Service",
  },
  {
    slug: "europe-5-steps",
    title: "Signature 5-Step Europe Study & Visa Pathway",
    summary:
      "Our verified 5-step model for Italy, Sweden, Finland, UK, and Greece: Eligibility Check → University Selection → Application Submission → Visa Processing → Fly to Europe. No fake agent traps.",
    points: [
      "Universitaly portal pre-enrolment and CIMEA comparability certificate support for Italy",
      "Regional scholarship assistance (DSU, ER.GO) securing tuition waivers + living stipends",
      "Schengen visa document verification ensuring zero fake paperwork ('Dalaler Fake Visa Noy')",
      "1-on-1 embassy mock interview training simulating consular officer questions",
    ],
    icon: "🏛️",
    timeline: "Step-by-step guidance until visa grant",
    guarantee: "100% Genuine Documents",
    highlightBadge: "Signature Pathway",
  },
  {
    slug: "ielts-coaching-masterclass",
    title: "IELTS Preparation Masterclass (Academic & General)",
    summary:
      "Achieve your target Band 7.0+ score with British Council and IDP aligned certified trainers at our modern Finlay Square Chattogram center or live online batches.",
    points: [
      "Comprehensive coverage of Listening, Reading, Writing (Task 1 & 2), and Speaking",
      "Weekly full Cambridge exam simulation mock tests with personalized band score reports",
      "Small batch sizes ensuring individual speaking time and diagnostic evaluation",
      "Official British Council and IDP exam test date booking assistance",
    ],
    icon: "🎯",
    timeline: "2 to 3 Months Intensive Batches",
    guarantee: "Target Band 7.0+ Guidance",
    highlightBadge: "Top Language Program",
  },
  {
    slug: "spoken-english-communication",
    title: "Spoken English & Communication Fluency",
    summary:
      "Speak English naturally, clearly, and without hesitation. Master daily conversations, embassy visa interviews, corporate presentations, and boardroom communication.",
    points: [
      "Real-world conversational drills, impromptu debates, and public speaking challenges",
      "Accent neutralization and elimination of regional mother-tongue influence (MTI)",
      "Embassy student visa interview simulation and body language coaching",
      "Corporate email writing and presentation etiquette",
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
      "Joyful, creative, and interactive English learning for children aged 5 to 14 years. Building a lifelong love for English through phonics, storytelling, and friendly role-play.",
    points: [
      "Phonics-first approach for clear and accurate pronunciation from an early age",
      "Storytelling, animated learning, educational games, and visual flashcards",
      "Safe, caring classroom environment at Finlay Square, Chattogram",
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
      "We stand by you beyond visa approval! Academic Allies assists with discounted student air ticketing, student dorm/accommodation search, foreign exchange files, and airport guidance.",
    points: [
      "Student discounted airfare booking assistance with extra baggage allowance",
      "Safe student dorm and private accommodation search near your campus",
      "Forex student file creation and international bank account opening guidance",
      "Comprehensive pre-departure orientation on European lifestyle, laws, and part-time jobs",
    ],
    icon: "✈️",
    timeline: "Immediate upon visa grant",
    guarantee: "Full Post-Visa Support",
    highlightBadge: "Post-Visa Care",
  },
];

export type FacebookReel = {
  id: string;
  title: string;
  reelUrl: string;
  embedUrl: string;
  category: "Europe Visas" | "Genuine Guidance" | "Student Stories";
  badge: string;
  summary: string;
  bulletPoints: string[];
  posterUrl?: string;
  views?: string;
  duration?: string;
};

export const verifiedFacebookReels: FacebookReel[] = [
  {
    id: "reel-1-europe-visas",
    title: "Academic Allies — Official Profile & European Visa Success",
    reelUrl: "https://www.facebook.com/academicalliesofficial/",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Facademicalliesofficial%2F&show_text=0",
    category: "Europe Visas",
    badge: "Official Evidence 1",
    views: "47K+ Community",
    duration: "1:00",
    posterUrl: "/assets/succes.jpg",
    summary:
      "Official video reel documenting Academic Allies European study permit grants, University of Padova pre-enrolment, and Finlay Square Chattogram headquarters counseling.",
    bulletPoints: [
      "Headquarters: Finlay Square (7th Floor), CDA Avenue, East Nasirabad, Chattogram",
      "Hotlines: 01859-870936 / +880 1812-386307 / +880 1812-386318",
      "5-Step European student admission & visa pathway",
      "British Council & IDP aligned IELTS and Spoken English preparation",
    ],
  },
  {
    id: "reel-2-dalaler-fake-visa-noy",
    title: "Beware of Fake Agents — Genuine Documentation & Visa Safety",
    reelUrl: "https://www.facebook.com/academicalliesofficial/",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Facademicalliesofficial%2F&show_text=0",
    category: "Genuine Guidance",
    badge: "Official Evidence 2",
    views: "100% Recommended",
    duration: "0:55",
    posterUrl: "/assets/succes 2.jpg",
    summary:
      "Educational awareness video by Academic Allies counseling team explaining why authentic academic papers and genuine embassy filing guarantee safe, successful student immigration.",
    bulletPoints: [
      "Strict anti-fraud policy: 100% genuine university offer letters",
      "No fake visa promises — transparent legal consultation",
      "Branches in Chattogram (Finlay Square & Zeenat Abad), Dhaka, and Noakhali",
      "Student & spouse visa guidance with verifiable records",
    ],
  },
  {
    id: "reel-3-student-parent-celebration",
    title: "Student & Parent Visa Celebration at Finlay Square Campus",
    reelUrl: "https://www.facebook.com/academicalliesofficial/",
    embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Facademicalliesofficial%2F&show_text=0",
    category: "Student Stories",
    badge: "Official Evidence 3",
    views: "Verified Stories",
    duration: "0:45",
    posterUrl: "/assets/succes 3 revwie.jpg",
    summary:
      "Heartwarming moment at Academic Allies office where student and her guardian receive the approved European student visa alongside our senior counselor.",
    bulletPoints: [
      "Parental trust: complete financial transparency and guardian updates",
      "European student visa granted with DSU scholarship support",
      "End-to-end support from profile evaluation to flight departure",
      "Join our 47,000+ community at Academic Allies",
    ],
  },
];

export const verifiedStudentReviews = [
  {
    name: "Tanjina Akter",
    course: "European Student Visa Grant",
    destination: "Italy (University of Padova)",
    country: "Italy",
    flag: "🇮🇹",
    rating: 5,
    highlight: "European Visa Approved!",
    image: "/assets/succes 3 revwie.jpg",
    text: "Academic Allies made my dream of studying in Europe a reality! My father and I visited their Finlay Square office in Chattogram. Their counselors handled my Universitaly pre-enrolment and visa documents with total honesty and zero fake promises. I am deeply grateful to the whole team!",
  },
  {
    name: "Mohammad Shahriar",
    course: "Higher Education in Europe",
    destination: "European University Partner",
    country: "Europe",
    flag: "🇪🇺",
    rating: 5,
    highlight: "5-Step Process Worked!",
    image: "/assets/succes 2.jpg",
    text: "I was worried about agent scams, but Academic Allies' '5 Steps to Europe' gave me complete confidence. From step 1 eligibility check to step 4 visa filing, every document was 100% authentic. Got my visa smoothly without any stress!",
  },
  {
    name: "Nabila Tabassum",
    course: "IELTS Preparation Masterclass",
    destination: "Scored Band 7.5",
    country: "Language Academy",
    flag: "🎯",
    rating: 5,
    highlight: "Band 7.5 in 2.5 Months",
    image: "/assets/succes.jpg",
    text: "Enrolled in the IELTS batch at Finlay Square. The 1-on-1 speaking mock tests and writing correction helped me identify my weak points quickly. Reached Band 7.5 on my first attempt! Best IELTS academy in Chattogram.",
  },
  {
    name: "Abdul Hannan (Guardian)",
    course: "Parent & Guardian Testimonial",
    destination: "Daughter's Study in Europe",
    country: "Bangladesh",
    flag: "🇧🇩",
    rating: 5,
    highlight: "Unmatched Transparency",
    image: "/assets/778915755_122248399610271074_4940366587612604886_n.jpg",
    text: "As a father, ensuring my daughter's safety and genuine admission was my top priority. Academic Allies guided us transparently every step of the way without any hidden charges. They are truly trustworthy allies for families.",
  },
  {
    name: "Sabbir Hossain",
    course: "Spoken English & Interview Prep",
    destination: "Embassy Visa Clearance",
    country: "Language Academy",
    flag: "🗣️",
    rating: 5,
    highlight: "Overcame Hesitation",
    image: "/assets/succes.jpg",
    text: "The Spoken English course and mock embassy interviews gave me the confidence to answer the consular officer's questions with ease. The trainers at Academic Allies are exceptional and extremely supportive.",
  },
];

export const faqs = [
  {
    q: "What makes Academic Allies different from other consultancies?",
    a: "Academic Allies is built on absolute transparency and genuine documentation ('Dalaler Fake Visa Noy'). Based at Finlay Square (7th Floor), Chattogram, we provide verified university admissions, direct pre-enrolment support, British Council & IDP aligned IELTS coaching, and realistic visa guidance with zero fabricated papers.",
  },
  {
    q: "How does the '5 Steps to Europe' program work?",
    a: "Our signature 5-step European pathway guides students through: 1. Free Eligibility Check, 2. University and Course Selection, 3. Application Submission (e.g. Universitaly & CIMEA for Italy), 4. Visa Documentation and 1-on-1 Interview Preparation, and 5. Pre-Departure Briefing & Departure Support.",
  },
  {
    q: "Can I apply to European universities without IELTS?",
    a: "Yes! Many recognized European universities in Italy, Greece, Sweden, and Malaysia accept Medium of Instruction (MOI) certificates from accredited institutions in Bangladesh, or allow students to take internal university English proficiency tests. Our counselors evaluate your individual profile during free consultation.",
  },
  {
    q: "Where are Academic Allies offices located in Bangladesh?",
    a: "Our Corporate Headquarters is located at Finlay Square (7th Floor), CDA Avenue, 2 No. Gate, East Nasirabad, Chattogram. We also maintain a City Branch in Zeenat Abad (Chittagong-4203) as well as liaison desks in Dhaka and Noakhali. Contact hotlines: 01859-870936 / 01812-386307.",
  },
  {
    q: "Do you offer scholarships for Italy and European universities?",
    a: "Yes! For Italy, eligible Bangladeshi students can apply for regional government scholarships (such as DSU/ER.GO), which provide up to 100% tuition fee waivers plus annual living cost stipends up to €7,000. Academic Allies provides comprehensive assistance with income certificate legalisation and portal submissions.",
  },
  {
    q: "What courses are offered in your Language Academy?",
    a: "Our Language Academy at Finlay Square Chattogram offers three core programs: 1. IELTS Preparation Masterclass (Academic & General, Band 7+ target with weekly Cambridge mock tests), 2. Spoken English & Communication Fluency (accent refinement & visa interview prep), and 3. Kids English Foundation (ages 5–14, phonics, storytelling & spoken confidence).",
  },
  {
    q: "Are the mock visa interviews conducted before the embassy appointment?",
    a: "Yes! Every visa applicant undergoes rigorous 1-on-1 mock interviews simulating actual embassy officer questions regarding university choice, study intentions, financial sponsorship, and post-study career plans, ensuring maximum confidence on the interview day.",
  },
  {
    q: "What is the fee for profile assessment at Academic Allies?",
    a: "Profile assessment and initial study abroad counseling at Academic Allies are 100% FREE. You can bring your academic transcripts, certificates, and passport to our Finlay Square Chattogram office or submit an online assessment inquiry anytime.",
  },
];

export const processSteps = [
  {
    step: "01",
    badge: "Step 1 · 100% Free",
    title: "Profile Assessment & European Shortlist",
    text: "Detailed review of academic background, GPA gap, IELTS/MOI status, and budget. Matching with top universities across Italy (Padova), Sweden, Finland, UK, Canada, and USA.",
  },
  {
    step: "02",
    badge: "Step 2 · Pre-Enrolment",
    title: "Document Assembly & Universitaly Filing",
    text: "Certified translation, SOP/LOR crafting, Universitaly portal pre-enrolment, CIMEA comparability, and direct university portal submission.",
  },
  {
    step: "03",
    badge: "Step 3 · Funding",
    title: "DSU Regional Scholarship Application",
    text: "Income certificate legalization and regional welfare portal filing for up to €7,000/year living stipend plus 100% tuition waiver in Italy.",
  },
  {
    step: "04",
    badge: "Step 4 · Compliance",
    title: "Embassy File Audit & 1-on-1 Mock Interview",
    text: "Rigorous financial verification, bank file structuring, and realistic consular mock interview simulations at our Chattogram headquarters.",
  },
  {
    step: "05",
    badge: "Step 5 · Departure",
    title: "Visa Grant, Accommodation & Departure Briefing",
    text: "Celebration of visa grant, European student dorm search, Codice Fiscale setup, discounted air ticketing, and pre-departure briefing.",
  },
];

export const upcomingIntakesAndOffers = [
  {
    id: "italy-padova-dsu",
    badge: "Europe Priority · Italy",
    date: "September 2026 Intake (Deadline Approaching)",
    title: "University of Padova & Italian DSU Scholarship (€7,000/yr)",
    description:
      "Join world-ranked Italian public universities with €0 tuition and up to €7,000/year government living stipend. Universitaly portal applications now open.",
    benefits: [
      "100% Tuition Fee Waiver with DSU regional grant",
      "Up to €7,000/year annual living cost allowance",
      "Medium of Instruction (MOI) accepted for selected Master's programs",
      "Schengen 29-country residence permit and European mobility",
    ],
  },
  {
    id: "ielts-masterclass-chattogram",
    badge: "Language Academy",
    date: "New Batches Starting Every Sunday & Tuesday",
    title: "Academic Allies IELTS Preparation Masterclass (Target Band 7.0+)",
    description:
      "British Council & IDP certified instructors, 36 comprehensive modules, and 12 full-length Cambridge mock tests at Finlay Square (7th Floor), Chattogram.",
    benefits: [
      "Target Band 7.0+ score strategy with 1-on-1 speaking feedback",
      "Free diagnostic test and Cambridge study materials included",
      "Flexible morning, evening, and weekend executive batches",
      "Special discount for European study abroad enrolled students",
    ],
  },
  {
    id: "nordic-sweden-finland",
    badge: "Nordic Excellence",
    date: "Autumn 2026 Intake",
    title: "Sweden & Finland Higher Education with Post-Study Residence",
    description:
      "Apply to high-tech universities in Sweden and Finland with up to 50% merit scholarships, family residence permits, and 2-year job search visas.",
    benefits: [
      "2-Year Post-Study Work / Job Search Permit in Finland & Sweden",
      "Generous family accompaniment and spouse work rights",
      "High English proficiency across everyday life and technology hubs",
      "100% genuine portal processing with zero risk of fake documents",
    ],
  },
  {
    id: "spoken-english-fluency",
    badge: "Fluency & Career",
    date: "Next Batch Starts 15th of This Month",
    title: "Executive Spoken English & Visa Interview Preparation",
    description:
      "Overcome hesitation, master daily conversational fluency, and ace embassy consular interviews through 24 interactive live speaking labs.",
    benefits: [
      "24 interactive sessions with real-life role-playing scenarios",
      "Consular visa interview question banks and answer formulas",
      "Accent reduction, corporate vocabulary, and public speaking confidence",
      "Small batches ensuring every student speaks in every class",
    ],
  },
  {
    id: "uk-fast-track",
    badge: "Priority CAS",
    date: "May & September 2026 Intakes",
    title: "UK Higher Education — 1-Year Master's & 2-Year Graduate Visa",
    description:
      "Fast-track admissions across 50+ UK universities with £1,500 to £4,000 international bursaries and MOI acceptance for qualified graduates.",
    benefits: [
      "Fast-track CAS issuance and priority student visa filing",
      "2-Year Graduate Route Post-Study Work Visa (PSW)",
      "Medium of Instruction (MOI) accepted without IELTS at selected universities",
      "Direct guidance from British Council trained counselors",
    ],
  },
  {
    id: "kids-english-foundation",
    badge: "Junior Academy",
    date: "Friday & Saturday Weekend Batches",
    title: "Kids English & Young Learners Foundation (Ages 5–14)",
    description:
      "A joyful, interactive classroom environment at Finlay Square fostering phonics mastery, vocabulary expansion, and confident spoken communication.",
    benefits: [
      "Phonics-based pronunciation and clear speaking habits from childhood",
      "Storytelling, animated lessons, flashcards, and language games",
      "Caring, child-friendly teachers with regular parent progress reports",
      "Builds early academic confidence and lifelong language fluency",
    ],
  },
];

