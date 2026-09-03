/**
 * Future Edge Education — Official Verified Brand Data & Knowledge Base
 * 
 * Sources verified:
 *  - Official Facebook Page: https://www.facebook.com/FEEducation/ (285K+ Followers, 100% Recommendation Rating)
 *  - Provided Brand Assets (banner.jpg, logo.jpg, partner sessions, conference award, expo desk)
 *  - Corporate Office: Khan Tower, 359 DIT Road, Dhaka, Bangladesh, 1219
 *  - Network: Dhaka | Sylhet
 *  - Hotlines: 01805-041710 / +880 1805-041710
 *  - WhatsApp: +880 1805-041710
 *  - Emails: c1@futureedgeeducation.com / futureedgeeducation@gmail.com
 *  - Key Counselors: Moshiur ("Moshiur Vai"), Tanvir ("Tanvir Uncle")
 */

export type NavChild = { label: string; to: string; params?: Record<string, string>; badge?: string };
export type NavItem = { label: string; to: string; params?: Record<string, string>; children?: NavChild[] };

export const company = {
  name: "Future Edge Education",
  shortName: "Future Edge",
  legalName: "Future Edge Education & Consultancy",
  slogan: "Fulfill Your Study Abroad Dream With Us!",
  motto: "Your Future Beyond Borders - Study • Graduate • Succeed",
  philosophy: "EMPOWER • EDUCATE • ELEVATE",
  tagline:
    "Top Study Abroad Consultant in Bangladesh — Direct admission guidance, fast-track visa processing, scholarship assistance, and international partner university network for UK, Europe, Australia, Canada, New Zealand, Malaysia & USA.",
  bio: "Top Study Abroad Consultant in BD | Visa & Admission Guidance for UK, USA, Aus & Canada 🎓",
  category: "Educational Consultant · Study Abroad & Career Advisory",
  established: "2018",
  origin: "Dhaka, Bangladesh",
  presence: "Dhaka | Sylhet",
  email: "futureedgeeducation@gmail.com",
  contactEmail: "c1@futureedgeeducation.com",
  emails: ["c1@futureedgeeducation.com", "futureedgeeducation@gmail.com"],
  phones: ["01805-041710", "+880 1805-041710"],
  whatsapp: "+8801805041710",
  whatsappFormatted: "+880 1805-041710",
  hours: "Open Daily: 10:00 AM – 7:00 PM (Saturday – Friday)",
  signOff: "Empower • Educate • Elevate · Your Trusted Partner for Global Education",
  address: {
    building: "Khan Tower",
    street: "359 DIT Road",
    area: "DIT Road (Rampura / Badda Corridor)",
    city: "Dhaka",
    postalCode: "1219",
    country: "Bangladesh",
    full: "Khan Tower, 359 DIT Road, Dhaka, Bangladesh, 1219",
    networkNote: "Offices in Dhaka and Sylhet",
  },
  geo: { lat: 23.7656, lng: 90.4243 },
  mapsUrl: "https://maps.google.com/?q=Khan+Tower+359+DIT+Road+Dhaka+1219",
  mapsEmbed: "https://maps.google.com/maps?q=23.7656,90.4243&z=15&hl=en&output=embed",
  social: {
    facebook: "https://www.facebook.com/FEEducation/",
    facebookPageName: "@FEEducation",
    facebookVideos: "https://www.facebook.com/FEEducation/videos",
    facebookReels: "https://www.facebook.com/FEEducation/reels",
    instagram: "https://www.instagram.com/future_edge_education",
    linkedin: "https://www.linkedin.com/company/future-edge-education/",
    messenger: "https://m.me/FEEducation",
  },
  stats: [
    { value: "285K+", label: "Facebook Community & Followers", badge: "Verified Reach" },
    { value: "100%", label: "Facebook Recommendation Rating", badge: "23+ Verified Reviews" },
    { value: "3-5 Days", label: "Fast UK Visa Grant Record", badge: "Fast Track" },
    { value: "100% Free", label: "Profile Assessment & Counseling", badge: "Zero File Fee" },
  ],
  verifiedKeyPartners: [
    {
      name: "Buckinghamshire New University (BNU)",
      country: "United Kingdom",
      note: "Official In-Office Partner Session with Recruitment Advisor Ms. Ayesha Rauf",
    },
    {
      name: "University of East London",
      country: "United Kingdom",
      note: "Popular MSc Artificial Intelligence & Business Programs (3-Day Visa Grants)",
    },
    {
      name: "Southampton Solent University",
      country: "United Kingdom",
      note: "Global MBA in HRM, BBA, and Computing Pathways",
    },
    {
      name: "University of Debrecen",
      country: "Hungary (Europe)",
      note: "Prestigious European Master's, With & Without IELTS (MOI Accepted)",
    },
    {
      name: "International College Imperia (Imperia College)",
      country: "Malaysia",
      note: "Dedicated Diploma and Higher Education Pathways for SSC / Dakhil Graduates",
    },
  ],
} as const;

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Destinations",
    to: "/destinations",
    children: [
      { label: "Study in UK", to: "/study-in-{$country}", params: { country: "uk" }, badge: "3-5 Day Visas" },
      { label: "Study in Europe (Hungary & Nordic)", to: "/study-in-{$country}", params: { country: "europe" }, badge: "MOI / Low Cost" },
      { label: "Study in Australia", to: "/study-in-{$country}", params: { country: "australia" }, badge: "PSW Visa" },
      { label: "Study in Canada", to: "/study-in-{$country}", params: { country: "canada" }, badge: "PGWP" },
      { label: "Study in New Zealand", to: "/study-in-{$country}", params: { country: "new-zealand" }, badge: "Spouse Visa" },
      { label: "Study in Malaysia", to: "/study-in-{$country}", params: { country: "malaysia" }, badge: "SSC/Dakhil Entry" },
      { label: "Study in USA", to: "/study-in-{$country}", params: { country: "usa" }, badge: "STEM OPT" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Free Profile Assessment", to: "/services", badge: "100% Free" },
      { label: "Fast-Track Visa Filing", to: "/services", badge: "Proven 3-Day Grants" },
      { label: "Without IELTS (MOI) Admissions", to: "/services", badge: "Eligible Courses" },
      { label: "University & Scholarship Guidance", to: "/services" },
      { label: "Spouse & Family Visa Support", to: "/services" },
    ],
  },
  { label: "Success Stories", to: "/videos" },
  { label: "Partner Sessions", to: "/offers" },
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
    tagline: "Fast 3 to 5-day visa grants, 1-year Master's & MOI without IELTS options",
    intro:
      "The UK is Future Edge Education's premier study destination. With a verified track record of student visas granted in as fast as 3 to 5 days, students can access world-class universities like University of East London, Southampton Solent University, and Buckinghamshire New University.",
    why: [
      "Record visa processing: Multiple student visas approved in just 3 to 5 days",
      "Medium of Instruction (MOI) accepted for eligible graduates without IELTS",
      "1-year intensive Master's (MSc AI, Global MBA, etc.) and 3-year Bachelor's",
      "2-Year Graduate Route Post-Study Work Visa (PSW) upon completion",
      "Direct university partner sessions hosted in our Khan Tower Dhaka office",
    ],
    popularFields: ["Artificial Intelligence & Data Science", "Global MBA & HRM", "Computer Science & IT", "International Business", "Public Health"],
    avgTuition: "£11,500 – £16,500 / year (with automatic partner discounts)",
    avgLiving: "£9,207 – £12,000 / year (outside/inside London standard)",
    pswv: "2 Years (Graduate Route Visa)",
    intakes: "September/October & January/February (plus May intakes)",
    scholarships: "£1,500 – £4,000 International Merit Bursaries",
    topUnis: ["University of East London (UEL)", "Southampton Solent University", "Buckinghamshire New University (BNU)", "University of Greenwich", "University of Hertfordshire"],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "europe",
    name: "Europe (Hungary, Denmark, Finland, Sweden)",
    flag: "🇪🇺",
    region: "Europe",
    tagline: "Study in Hungary, Denmark, Finland & Sweden — With & Without IELTS",
    intro:
      "As featured in our official 'Study in Europe' series, Future Edge Education processes top destinations including Hungary (University of Debrecen), Denmark, Finland, and Sweden. Benefit from low tuition fees, European Schengen mobility, and English-taught Master's degrees with MOI.",
    why: [
      "Official focus countries: Hungary, Denmark, Finland, and Sweden",
      "University of Debrecen (Hungary) Master's programs available with MOI / without IELTS",
      "Low tuition fees compared to traditional Western destinations",
      "Schengen visa mobility across 29 European countries",
      "High standard of living, research facilities, and generous post-study stay-back rights",
    ],
    popularFields: ["Computer Science & Engineering", "Business Informatics", "Biotechnology & Health", "Environmental Science", "Data Analytics"],
    avgTuition: "€2,500 – €6,000 / year (Hungary); Nordic tuition depends on degree",
    avgLiving: "€500 – €800 / month (Hungary/Eastern Europe)",
    pswv: "9 to 24 Months European Job-Seeker Residence Permit",
    intakes: "September (Main Autumn Intake) & February (Spring)",
    scholarships: "Stipendium Hungaricum & University Tuition Grants",
    topUnis: ["University of Debrecen (Hungary)", "Budapest Metropolitan University", "University of Pécs", "Finnish UAS Partners", "Danish Technical Institutions"],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    region: "Oceania",
    tagline: "Top ranked universities, high minimum wage & up to 4 years post-study work",
    intro:
      "Australia offers world-class education, high student wages, and vibrant multicultural cities like Sydney, Melbourne, Brisbane, and Perth. Future Edge Education provides comprehensive visa filing and GTE/GST guidance.",
    why: [
      "IELTS requirement: 6.5 overall (minimum 6.0 in each individual band)",
      "High minimum hourly wage with 48 hours per fortnight student work rights",
      "Post-Study Work Visa (Subclass 485) ranging from 2 to 4 years",
      "Generous regional study extensions and skilled migration opportunities",
    ],
    popularFields: ["Information Technology", "Accounting & Professional Finance", "Nursing & Healthcare", "Cybersecurity", "Civil Engineering"],
    avgTuition: "AUD $22,000 – $36,000 / year",
    avgLiving: "AUD $21,000 – $24,500 / year",
    pswv: "2 to 4 Years Post-Study Work Visa",
    intakes: "February & July (Major Intakes)",
    scholarships: "15% to 30% International Student Merit Grants",
    topUnis: ["Deakin University", "Western Sydney University", "La Trobe University", "Curtin University", "University of Wollongong"],
    withoutIelts: false,
    featured: true,
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    region: "North America",
    tagline: "Reputed public universities, paid co-op programs & up to 3-year PGWP",
    intro:
      "Canada provides globally recognized degrees at designated learning institutions (DLIs), combined with paid co-op work terms and the transparent Post-Graduation Work Permit (PGWP) program.",
    why: [
      "Designated Learning Institutions (DLIs) with solid graduate employability",
      "Up to 3-year Post-Graduation Work Permit (PGWP) for eligible Master's & degrees",
      "Co-op programs that integrate paid professional Canadian work experience",
      "Safe, welcoming, and multicultural society for international students",
    ],
    popularFields: ["Computer Science & AI", "Business Administration", "Engineering & Supply Chain", "Healthcare Administration", "Hospitality"],
    avgTuition: "CAD $16,000 – $28,000 / year",
    avgLiving: "CAD $15,000 – $18,000 / year",
    pswv: "Up to 3 Years (PGWP)",
    intakes: "September (Fall), January (Winter), May (Summer)",
    scholarships: "CAD $2,000 – $7,500 Entrance Grants",
    topUnis: ["University of Windsor", "Memorial University", "Conestoga College", "Seneca Polytechnic", "York University"],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    region: "Oceania",
    tagline: "High-ranking universities, international career scope & Spouse/Family visa",
    intro:
      "Featured as one of Future Edge Education's core destinations on our official banner, New Zealand provides high-ranking universities, a safe peaceful lifestyle, and open spouse & dependent family visa facilities.",
    why: [
      "All 8 New Zealand state universities rank in the global top 3%",
      "Spouse work visa and dependent children schooling benefits for Master's students",
      "Up to 3-year Post-Study Work Visa for degree holders",
      "Clean, green, and secure living conditions with part-time work rights",
    ],
    popularFields: ["Information Technology", "Business & Agribusiness", "Tourism & Hospitality Management", "Construction Management", "Environmental Science"],
    avgTuition: "NZD $24,000 – $34,000 / year",
    avgLiving: "NZD $18,000 – $22,000 / year",
    pswv: "Up to 3 Years Post-Study Work Visa",
    intakes: "February & July",
    scholarships: "NZD $3,000 – $10,000 International Student Scholarships",
    topUnis: ["University of Auckland", "University of Otago", "AUT (Auckland University of Technology)", "Massey University", "Waikato University"],
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
      "Malaysia delivers high-quality education at low cost. Future Edge Education provides specialized pathways at institutions like International College Imperia (Imperia College) where SSC and Dakhil graduates can enroll in recognized diplomas.",
    why: [
      "Accessible pathways for SSC and Dakhil graduates into recognized diplomas",
      "Affordable tuition fees and low cost of living with halal food everywhere",
      "Fast EMGS visa processing within 3 to 4 weeks",
      "Opportunity for credit transfer to top universities in the UK and Australia",
    ],
    popularFields: ["Diploma in Hospitality & Hotel Management", "Business Management", "Information Technology", "Culinary Arts", "Engineering"],
    avgTuition: "USD $2,800 – $5,500 / year",
    avgLiving: "USD $2,500 – $4,000 / year",
    pswv: "Regional career placement & graduate options",
    intakes: "January, April, July, September, November",
    scholarships: "20% – 40% Merit Tuition Waivers",
    topUnis: ["International College Imperia (Imperia College)", "Taylor's University", "Sunway University", "UCSI University", "Asia Pacific University (APU)"],
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
      "The USA offers unparalleled academic freedom, thousands of accredited institutions, and up to 36 months of STEM OPT work authorization for science, technology, and engineering graduates.",
    why: [
      "Access to Tier-1 research labs and 4,000+ accredited universities",
      "3-year STEM OPT work rights for technology, computing, and engineering graduates",
      "Graduate Assistantships (TA/RA) with tuition waivers and monthly stipends",
      "Thorough 1-on-1 F-1 visa mock interview coaching by Future Edge counselors",
    ],
    popularFields: ["Computer Science & AI", "Data Analytics", "Electrical Engineering", "FinTech & Business", "Biomedical Engineering"],
    avgTuition: "$14,000 – $32,000 / year",
    avgLiving: "$10,000 – $14,000 / year",
    pswv: "1 Year Standard / 3 Years (STEM OPT)",
    intakes: "Fall (August/September) & Spring (January)",
    scholarships: "$3,000 to Full Tuition Waivers + Assistantships",
    topUnis: ["Arizona State University", "University of North Texas", "University of South Florida", "Purdue University", "Georgia State University"],
    withoutIelts: false,
    featured: true,
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
    slug: "free-profile-assessment",
    title: "100% Free Profile Assessment & Counseling",
    summary:
      "Sit down directly with senior counselors Moshiur and Tanvir at our Khan Tower, Dhaka office or schedule an online session. We honestly assess your GPA, background, budget, and career goals with zero file-opening fee.",
    points: [
      "100% Free initial document screening & academic gap evaluation",
      "Personalized university matching based on your real budget and qualifications",
      "Direct consultation with experienced advisors (Moshiur Vai & Tanvir Uncle)",
      "Zero hidden fees, zero file-opening charge — absolute honesty from day one",
    ],
    icon: "🎯",
    timeline: "Instant Consultation (30–45 Mins)",
    guarantee: "100% Free · Zero File-Opening Charge",
    highlightBadge: "100% Free Service",
  },
  {
    slug: "fast-track-visa-processing",
    title: "Fast-Track Student Visa Processing (3-5 Day Grants)",
    summary:
      "With a proven record of UK student visas approved in as little as 3 to 5 days, Future Edge Education handles end-to-end file preparation, financial document audits, and embassy compliance with precision.",
    points: [
      "Verified track record of UK student visas granted in 3–5 working days",
      "Thorough audit of financial sponsors, bank solvency, and CAS / offer letters",
      "Personalized SOP (Statement of Purpose) and Cover Letter drafting",
      "1-on-1 embassy mock interview preparation simulating real consular questions",
    ],
    icon: "🛂",
    timeline: "Record 3 to 5 Days for UK Visas",
    guarantee: "Meticulous Document Compliance",
    highlightBadge: "Proven Fast Track",
  },
  {
    slug: "without-ielts-moi-admissions",
    title: "Without IELTS (MOI) Admission Pathways",
    summary:
      "Did you study in an English medium curriculum or university where English was the Medium of Instruction? Future Edge Education unlocks verified study pathways in the UK and Hungary without IELTS.",
    points: [
      "Official MOI (Medium of Instruction) certificate acceptance at partner universities",
      "Verified programs in UK (e.g. Southampton Solent, UEL, BNU) & Hungary (Debrecen)",
      "Avoid test score anxiety and save exam booking fees",
      "Direct university internal English test assistance when needed",
    ],
    icon: "📜",
    timeline: "2 to 3 Weeks for Offer Letter",
    guarantee: "Direct University Acceptance",
    highlightBadge: "No IELTS Required",
  },
  {
    slug: "university-partner-sessions",
    title: "Direct International Partner Sessions & Spot Assessments",
    summary:
      "Meet directly with foreign university recruitment delegates in our Dhaka and Sylhet offices. Get your profile evaluated on the spot and receive provisional offer letters with scholarship assessments.",
    points: [
      "Regular in-office partner sessions (e.g. Buckinghamshire New University UK)",
      "Direct face-to-face interaction with university regional recruitment heads",
      "Spot application submission and priority processing",
      "First-hand clarity on tuition fees, scholarships, and campus facilities",
    ],
    icon: "🤝",
    timeline: "Monthly In-Office Events",
    guarantee: "Direct University Delegation Access",
    highlightBadge: "Direct University Access",
  },
  {
    slug: "scholarships-financial-aid",
    title: "Scholarship & Financial Aid Guidance",
    summary:
      "We help students secure tuition fee waivers and merit scholarships ranging from £1,500 to £4,000 in the UK, up to 100% government scholarships in Hungary (Stipendium Hungaricum), and regional grants.",
    points: [
      "Thorough evaluation of eligibility for merit and automatic university bursaries",
      "Application support for Hungarian Stipendium and European tuition grants",
      "Advice on installment-based tuition payment structures",
      "Part-time legal working guidance to manage living expenses abroad",
    ],
    icon: "💰",
    timeline: "Applied Concurrently with Admission",
    guarantee: "Maximum Eligible Aid Maximization",
    highlightBadge: "Tuition Savings",
  },
  {
    slug: "spouse-family-visa-support",
    title: "Spouse & Dependent Family Visa Support",
    summary:
      "Planning to take your spouse or children along? Future Edge Education guides married students through the legal visa pathways for New Zealand, research-based UK degrees, and Canada.",
    points: [
      "Detailed checklist for marriage proof, relationship history, and joint accounts",
      "Full work rights guidance for eligible spouses in New Zealand and partner nations",
      "Dependent children schooling and healthcare documentation support",
      "Simultaneous or subsequent visa lodgement strategy",
    ],
    icon: "👨‍👩‍👧",
    timeline: "Aligned with Primary Student Visa",
    guarantee: "Complete Family Document Compliance",
    highlightBadge: "Family Friendly",
  },
];

export const verifiedEventsAndPartners = [
  {
    id: "bnu-partner-session",
    badge: "🎓 Verified Partner Session",
    title: "Direct Session on Buckinghamshire New University (BNU) UK",
    guest: "Ms. Ayesha Rauf (Recruitment Advisor - Pakistan & Bangladesh, BNU)",
    venue: "Future Edge Education Corporate Office, Khan Tower, 359 DIT Road, Dhaka",
    network: "Future Edge Education | Dhaka | Sylhet",
    summary:
      "Future Edge Education hosted an exclusive partner session with Ms. Ayesha Rauf from Buckinghamshire New University. Prospective students received 1-on-1 profile evaluations, direct guidance on course selections, and priority processing.",
    highlights: [
      "Direct discussion with official BNU university representative",
      "On-spot document evaluation for Bachelor's and Master's programs",
      "Guidance on CAS, MOI eligibility, and UK Post-Study Work Visa (PSW)",
      "Scholarship opportunities and career outcomes for international students",
    ],
    image: "/brand-assets/772204691_122282788340103184_9204887386025201573_n.jpg",
  },
  {
    id: "lurs-2026-award",
    badge: "🏆 Recognition & Award",
    title: "LURS Student Research Conference 2026 Recognition",
    theme: "Turning Ideas into Sustainable Solutions",
    guest: "Chief Guest: Danobir Dr. Syed Ragib Ali (Founder & Chairman)",
    venue: "Closing & Prize Giving Ceremony",
    summary:
      "Future Edge Education leadership was honored on stage at the LURS Student Research Conference 2026 for contributions toward empowering student researchers and advancing higher education opportunities globally.",
    highlights: [
      "Prestigious honorary crest presented by Dr. Syed Ragib Ali and dignitaries",
      "Recognized for promoting higher education accessibility and research pathways",
      "Theme focused on empowering youth toward global education and sustainable solutions",
    ],
    image: "/brand-assets/768667718_122282362400103184_8409750641330812941_n.jpg",
  },
  {
    id: "study-in-europe-campaign",
    badge: "🇪🇺 Verified Campaign",
    title: "Study in Europe: Denmark, Finland, Sweden & Hungary",
    venue: "Khan Tower, Dhaka Office & Virtual Consultations",
    summary:
      "Our official campaign highlighting affordable and high-quality education in Europe. Free counseling is provided for Master's programs at University of Debrecen (Hungary) with and without IELTS, as well as opportunities in Scandinavia.",
    highlights: [
      "Hungary: University of Debrecen with MOI (Without IELTS) and scholarships",
      "Denmark & Finland: Practical polytechnic and research universities",
      "Sweden: English-taught degrees with post-study job seeker visa",
      "Schengen visa mobility across 29 European countries",
    ],
    image: "/brand-assets/787160278_122284754246103184_2179868027112497957_n.jpg",
  },
];

export const teamMembers = [
  {
    name: "Moshiur",
    popularName: "Moshiur Vai / Uncle",
    role: "Senior Education Advisor & Co-Founder",
    badge: "Lead Counselor",
    desc: "Renowned among hundreds of Bangladeshi students for transparent, honest advice. Moshiur personally reviews academic files and has guided numerous students to 3-day UK visa grants.",
    image: "/brand-assets/766952914_122282362520103184_2941471200207168176_n.jpg",
  },
  {
    name: "Tanvir",
    popularName: "Tanvir Uncle",
    role: "Senior Admissions & Visa Coordinator",
    badge: "Visa Specialist",
    desc: "Expert in university application submission, bank solvency audits, and CAS processing with universities in the UK, Europe, Australia, and Malaysia.",
    image: "/brand-assets/766952914_122282362520103184_2941471200207168176_n.jpg",
  },
  {
    name: "International Liaison & Counseling Panel",
    popularName: "FE Counselor Team",
    role: "Global University Coordination Panel",
    badge: "Admissions Team",
    desc: "Dedicated counselor team managing student assessments at our Khan Tower Dhaka office and partner events across Dhaka and Sylhet.",
    image: "/brand-assets/772204691_122282788340103184_9204887386025201573_n.jpg",
  },
];

export const officeGalleryPhotos = [
  {
    src: "/brand-assets/banner.jpg",
    title: "Official Brand Banner & Destinations",
    category: "Brand Billboard",
    desc: "'Fulfill Your Study Abroad Dream With Us!' — UK, Australia, New Zealand, Canada, Malaysia, Europe.",
  },
  {
    src: "/brand-assets/772204691_122282788340103184_9204887386025201573_n.jpg",
    title: "Buckinghamshire New University Partner Session",
    category: "Partner Delegation",
    desc: "Direct in-office session with Ms. Ayesha Rauf (Recruitment Advisor - Pakistan & Bangladesh, BNU) at Future Edge Education.",
  },
  {
    src: "/brand-assets/766952914_122282362520103184_2941471200207168176_n.jpg",
    title: "Future Edge Education Counseling Team at Expo",
    category: "Counseling Desk",
    desc: "'Your Future Beyond Borders - Study • Graduate • Succeed' — FE leadership and counselors guiding students.",
  },
  {
    src: "/brand-assets/766710624_122282362364103184_6697847817027175712_n.jpg",
    title: "Students with Future Edge Brand Packs",
    category: "Student Community",
    desc: "Students holding official Future Edge branded packs and 'Your Future Starts Here' university materials.",
  },
  {
    src: "/brand-assets/768398757_122282362268103184_2531912480432625444_n.jpg",
    title: "1-on-1 Profile Assessment & Application Desk",
    category: "Admissions Desk",
    desc: "Prospective student completing profile evaluation and admission application at the Future Edge desk.",
  },
  {
    src: "/brand-assets/787160278_122284754246103184_2179868027112497957_n.jpg",
    title: "Study in Europe: Denmark, Finland, Sweden, Hungary",
    category: "European Admissions",
    desc: "Official graphics highlighting top European destinations with affordable fees and MOI admission options.",
  },
  {
    src: "/brand-assets/768667718_122282362400103184_8409750641330812941_n.jpg",
    title: "LURS 2026 Student Research Conference Award",
    category: "Honors & Awards",
    desc: "Future Edge Education leadership receiving honorary award from Chief Guest Dr. Syed Ragib Ali.",
  },
  {
    src: "/brand-assets/logo.jpg",
    title: "Future Edge Education Official Monogram",
    category: "Brand Seal",
    desc: "The gold and obsidian circular emblem representing speed, excellence, and global advancement.",
  },
];

export const verifiedStudentReviews = [
  {
    name: "Golam Kibria Chowdhury",
    course: "MSc in Artificial Intelligence",
    destination: "University of East London (UEL)",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    highlight: "Visa in 3 Days!",
    text: "I am genuinely glad to receive my UK Student Visa within just 3 working days! Future Edge Education and Moshiur vai gave me authentic, step-by-step guidance for MSc in AI at University of East London. Highly recommended for genuine visa support.",
  },
  {
    name: "Afruja Akther",
    course: "Global MBA (Human Resource Management)",
    destination: "Southampton Solent University",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    highlight: "MBA Admission & Visa",
    text: "Future Edge Education made my dream of studying in the UK a reality. They secured my admission to Southampton Solent University for Global MBA in HRM and assisted me thoroughly with CAS and visa documentation without any hassle.",
  },
  {
    name: "Mohammad Mehedi Hasan Badhon",
    course: "Postgraduate Degree Program",
    destination: "Southampton Solent University",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    highlight: "Smooth UK Visa Grant",
    text: "Got my UK student visa granted smoothly through Future Edge Education. The team is dedicated, communicative, and very organized. Thank you to the whole consultancy for making this happen!",
  },
  {
    name: "Sa Mi",
    course: "UK Higher Education",
    destination: "UK University Admission",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    highlight: "Visa Granted in 3 Days",
    text: "UK visa granted within just 3 days! The entire team at Future Edge Education, especially Moshiur vai, was extremely honest. Unlike others, they never gave false assurances and prepared my file with total perfection.",
  },
  {
    name: "Gobindo Naidu",
    course: "Undergraduate / Postgraduate Pathway",
    destination: "UK University Partner",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    highlight: "Highly Professional",
    text: "Future Edge Education has been an exceptional partner for my study abroad journey. Their guidance on university selection and financial documents was clear and reliable.",
  },
  {
    name: "Ejjad Ali (Parent)",
    course: "Higher Education Degree",
    destination: "UK University",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    highlight: "Parent Recommendation",
    text: "As a guardian, I am very satisfied with Future Edge Education. Moshiur and Tanvir provided honest counseling and complete support for my daughter's UK study abroad process. A truly trustworthy agency.",
  },
  {
    name: "Monowar Hossen Raju",
    course: "Study Abroad Program",
    destination: "UK University",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    highlight: "UK Visa Received",
    text: "Successfully received my UK Student visa through Future Edge Education. The support from profile assessment to visa approval was top notch!",
  },
];

export const faqs = [
  {
    q: "Where is Future Edge Education located?",
    a: "Our corporate office is located at Khan Tower, 359 DIT Road, Dhaka, Bangladesh, 1219. We also serve students across our network in Dhaka and Sylhet.",
  },
  {
    q: "Can I apply to study abroad without IELTS?",
    a: "Yes! For qualifying students who completed their previous degree in English, we offer Medium of Instruction (MOI) admission pathways in the UK (e.g., Southampton Solent University, University of East London, Buckinghamshire New University) and Hungary (University of Debrecen).",
  },
  {
    q: "How fast is your UK student visa processing?",
    a: "We have multiple verified records of UK student visas approved in as little as 3 to 5 working days, thanks to meticulous document audits and flawless visa file assembly.",
  },
  {
    q: "Do you charge any fee for profile assessment or initial counseling?",
    a: "No! Initial profile assessment, document review, and career consultation at Future Edge Education are 100% FREE with zero file-opening charge.",
  },
  {
    q: "Can SSC or Dakhil graduates study abroad through Future Edge?",
    a: "Yes! We offer specialized pathways in Malaysia (such as International College Imperia / Imperia College) where SSC and Dakhil graduates can enroll in accredited diploma programs and later transition to Bachelor's degrees.",
  },
  {
    q: "Can I bring my spouse or family while studying abroad?",
    a: "Yes. We actively guide students on spouse and dependent family visa options for New Zealand, research-based master's programs in the UK, and other eligible countries.",
  },
  {
    q: "How do I book a counseling appointment?",
    a: "You can directly call our hotline at 01805-041710, send a message on WhatsApp (+880 1805-041710), or visit our Khan Tower, DIT Road, Dhaka office during opening hours (Saturday to Friday, 10:00 AM – 7:00 PM).",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "100% Free Profile Assessment",
    text: "Visit our Khan Tower Dhaka office or connect via WhatsApp. Senior counselors Moshiur & Tanvir evaluate your academic transcripts, budget, and destination goals with zero file fees.",
    badge: "Step 1",
  },
  {
    step: "02",
    title: "University & Intake Selection",
    text: "We shortlist accredited universities across the UK, Europe, Australia, Canada, New Zealand, Malaysia, or USA tailored to your academic background and scholarship eligibility.",
    badge: "Step 2",
  },
  {
    step: "03",
    title: "Application & Offer Letter",
    text: "Our admissions desk prepares your academic documents, crafts an impactful SOP, and submits your application through direct partner portals to secure your offer letter.",
    badge: "Step 3",
  },
  {
    step: "04",
    title: "CAS / I-20 & Financial Audit",
    text: "We verify your tuition deposit, audit bank solvency and sponsor paperwork, and obtain your official CAS or I-20 from the university.",
    badge: "Step 4",
  },
  {
    step: "05",
    title: "Fast-Track Visa Filing & Mock Interview",
    text: "Our visa specialists compile your embassy file and conduct 1-on-1 mock interviews, ensuring quick processing (with UK visas granted in as fast as 3–5 days).",
    badge: "Step 5",
  },
  {
    step: "06",
    title: "Pre-Departure & Fly Abroad",
    text: "We provide comprehensive pre-departure briefings, accommodation guidance, and student arrival assistance to help you settle smoothly into campus life.",
    badge: "Step 6",
  },
];
