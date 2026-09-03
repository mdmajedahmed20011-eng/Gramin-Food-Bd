/**
 * Affordable International — Official Verified Brand Data & Educational Knowledge Base.
 *
 * Official Data:
 *  - Brand Name: Affordable International (Affiliate: Affordable Global Studies, Affordable IELTS & Mock Test Center)
 *  - Official Slogan: "Explore More, Spend Less"
 *  - Primary Tagline: "Explore Your Global Future with Affordable International"
 *  - Sub-tagline: "All at an Affordable Cost"
 *  - Accreditations: Authorized IDP IELTS Registration Point & British Council Registration Point | Mock Test Venue
 *  - Location: Ashfak Plaza (Level 4 / ৪র্থ তলা), Next to Green Hall & Dutch Bangla ATM Booth, Maijdee Bazar, Maijdee Court, Noakhali
 *  - Official Hotlines: 01736-493995, +880 1511-493995
 *  - WhatsApp: +880 1736-493995
 *  - Email: affordablebd25@gmail.com
 *  - Website: affordablebd.com
 *  - Official Facebook: https://www.facebook.com/affordableinternationalofficial/
 */

export type NavChild = { label: string; to: string; params?: Record<string, string>; badge?: string };
export type NavItem = { label: string; to: string; params?: Record<string, string>; children?: NavChild[] };

export const company = {
  name: "Affordable International",
  shortName: "Affordable",
  affiliateName: "Affordable Global Studies",
  slogan: "Explore More, Spend Less",
  tagline:
    "Explore Your Global Future with Affordable International — Official British Council & IDP Registration Point, Premier IELTS Mock Center, Spoken English, and Study Abroad Consultancy in Maijdee Court, Noakhali.",
  bio: "IELTS & Study Abroad, Professional Mock Test, Spoken & Writing English, Kids & Junior English — All at an Affordable Cost.",
  category: "Educational Consultant · Language School",
  established: "2023",
  origin: "Maijdee Court, Noakhali, Bangladesh",
  email: "affordablebd25@gmail.com",
  phones: ["01736-493995", "01511-493995"],
  whatsapp: "8801736493995",
  hours: "Saturday – Thursday: 9:30 AM – 7:30 PM (Friday: 2:30 PM – 7:30 PM)",
  signOff: "Explore Your Global Future · Explore More, Spend Less",
  address: {
    line1: "Ashfak Plaza (Level 4 / ৪র্থ তলা), South Side of Green Hall",
    line2: "Near Dutch Bangla ATM Booth, Maijdee Bazar",
    city: "Maijdee Court, Noakhali Sadar, Noakhali, Bangladesh",
    plusCode: "Maijdee Bazar, Noakhali",
  },
  geo: { lat: 22.8715, lng: 91.0975 },
  mapsUrl: "https://maps.google.com/?q=Ashfak+Plaza+Maijdee+Bazar+Noakhali",
  mapsEmbed: "https://maps.google.com/maps?q=22.8715,91.0975&z=15&hl=en&output=embed",
  social: {
    facebook: "https://www.facebook.com/affordableinternationalofficial/",
    facebookReels: "https://www.facebook.com/affordableinternationalofficial/reels/",
    website: "https://affordablebd.com",
  },
  accreditations: [
    "IDP IELTS Official Registration Point",
    "British Council Official Registration Point",
    "British Council Official Mock Test Venue",
  ],
  stats: [
    { value: "100%", label: "Free Study Abroad Counselling", badge: "Zero Fee" },
    { value: "৳2,000", label: "Instant Exam Cashback", badge: "Live Promo" },
    { value: "2 Free", label: "Mock Tests with Registration", badge: "Bonus" },
    { value: "7+", label: "Top Destination Clusters", badge: "Global" },
  ],
} as const;

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Courses & Services",
    to: "/services",
    children: [
      { label: "IELTS Preparation (Academic & GT)", to: "/services", badge: "Top Rated" },
      { label: "Affordable Mock Test Center", to: "/services", badge: "Authorized Venue" },
      { label: "Spoken & Writing English", to: "/services" },
      { label: "Kids & Junior English", to: "/services", badge: "Kids Special" },
      { label: "Study Abroad & Visa Support", to: "/services", badge: "100% Free" },
    ],
  },
  {
    label: "Destinations",
    to: "/destinations",
    children: [
      { label: "Study in UK", to: "/study-in-{$country}", params: { country: "uk" }, badge: "2-Yr PSW" },
      { label: "Study in USA", to: "/study-in-{$country}", params: { country: "usa" }, badge: "STEM OPT" },
      { label: "Study in Canada", to: "/study-in-{$country}", params: { country: "canada" }, badge: "PGWP" },
      { label: "Study in Australia", to: "/study-in-{$country}", params: { country: "australia" }, badge: "Go8" },
      { label: "Study in South Korea", to: "/study-in-{$country}", params: { country: "south-korea" }, badge: "100% Scholarship" },
      { label: "Study in Malaysia", to: "/study-in-{$country}", params: { country: "malaysia" }, badge: "Affordable" },
      { label: "Study in Europe", to: "/study-in-{$country}", params: { country: "europe" }, badge: "Low/No Tuition" },
    ],
  },
  { label: "Live Offers", to: "/offers" },
  { label: "Student Stories", to: "/videos" },
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
    tagline: "1-year intensive Master's degrees and 2-year Graduate Route work visa",
    intro:
      "The UK provides prestigious, world-renowned qualifications with fast-track degrees — complete a Master's in just 12 months — backed by the 2-year Graduate Route stay-back work visa.",
    why: [
      "1-year Master's and 3-year Bachelor's save substantial time and living costs",
      "2-year Graduate Route post-study work visa for all degree holders",
      "Spouse visa options available for research-based master's and doctoral degrees",
      "World-class universities with strong global alumni networks",
    ],
    popularFields: ["Business & Management", "Data Science & AI", "Public Health", "Law & Finance", "Engineering Management"],
    avgTuition: "£12,000 – £22,000 / year",
    avgLiving: "£9,000 – £12,000 / year",
    pswv: "2 Years (Graduate Route)",
    intakes: "January/February & September/October",
    scholarships: "£2,000 – £6,000 Vice-Chancellor & Merit Discounts",
    topUnis: ["University of Greenwich", "Coventry University", "University of Hertfordshire", "Queen Mary University", "University of Portsmouth"],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "usa",
    name: "USA",
    flag: "🇺🇸",
    region: "North America",
    tagline: "World's largest higher education hub with 3-year STEM OPT work rights",
    intro:
      "The United States hosts thousands of globally accredited colleges and Tier-1 research universities, offering flexible degree curricula, graduate assistantships, and generous STEM work authorization.",
    why: [
      "Unrivaled choice of 4,000+ accredited universities and colleges",
      "STEM degree graduates get up to 36 months OPT work authorization",
      "Graduate Assistantships (TA/RA) with tuition waivers and monthly stipends",
      "Continuous scholarship opportunities for high academic scorers",
    ],
    popularFields: ["Computer Science & AI", "Data Analytics", "Biomedical & Healthcare", "Electrical Engineering", "FinTech & Business"],
    avgTuition: "$16,000 – $38,000 / year",
    avgLiving: "$10,000 – $15,000 / year",
    pswv: "1 Year (Standard) / 3 Years (STEM OPT)",
    intakes: "Fall (August/September) & Spring (January)",
    scholarships: "$5,000 to Full Tuition Waiver + Assistantships",
    topUnis: ["Arizona State University", "University of North Texas", "University of South Florida", "Purdue University", "Georgia State University"],
    withoutIelts: false,
    featured: true,
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    region: "North America",
    tagline: "Quality public universities, paid co-op programs & up to 3-year PGWP",
    intro:
      "Canada combines high-standard public universities, practical polytechnic colleges, paid co-op work placements, and one of the most organized Post-Graduation Work Permit (PGWP) pathways.",
    why: [
      "Public institutions offering hands-on paid co-op internships",
      "Post-Graduation Work Permit (PGWP) for up to 3 years",
      "Transparent provincial nomination pathways for skilled graduates",
      "Welcoming and secure multicultural society",
    ],
    popularFields: ["Business Administration", "Software Engineering & IT", "Hospitality Management", "Supply Chain", "Health Administration"],
    avgTuition: "CAD $15,000 – $28,000 / year",
    avgLiving: "CAD $16,000 – $20,000 / year",
    pswv: "Up to 3 Years (PGWP)",
    intakes: "September (Fall), January (Winter), May (Summer)",
    scholarships: "CAD $2,000 – $8,000 Entrance Grants",
    topUnis: ["University of Windsor", "Seneca Polytechnic", "Conestoga College", "Memorial University", "York University"],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    region: "Oceania",
    tagline: "Top-ranked universities with high minimum wage & generous post-study work",
    intro:
      "Australia is one of the premier study destinations for Bangladeshi students, offering Group of Eight (Go8) universities, high minimum wage student jobs, and up to 4 years post-study work visa.",
    why: [
      "Universities consistently ranked in the global Top 100",
      "Part-time work permitted up to 48 hours per fortnight",
      "Post-Study Work Visa (Subclass 485) up to 2–4 years",
      "Vibrant student communities in Sydney, Melbourne, Brisbane, and Adelaide",
    ],
    popularFields: ["Accounting & Finance", "Nursing & Public Health", "Information Technology", "Cybersecurity", "Engineering"],
    avgTuition: "AUD $22,000 – $38,000 / year",
    avgLiving: "AUD $21,041 / year",
    pswv: "Up to 2–4 Years (Subclass 485)",
    intakes: "February & July (Major Intakes)",
    scholarships: "15% – 30% Merit Scholarships",
    topUnis: ["Deakin University", "Western Sydney University", "La Trobe University", "Curtin University", "University of Wollongong"],
    withoutIelts: false,
    featured: true,
  },
  {
    slug: "south-korea",
    name: "South Korea",
    flag: "🇰🇷",
    region: "East Asia",
    tagline: "Global tech superpower offering up to 100% tuition scholarships & KLP",
    intro:
      "South Korea is a booming destination for Bangladeshi students with world-leading semiconductor and AI research labs, Korean Language Programs (KLP), and massive government (GKS) & university scholarships.",
    why: [
      "Generous scholarships covering 30% to 100% of university tuition fees",
      "World leader in robotics, electronics, digital media, and automotive engineering",
      "Legal part-time student work rights during semester and vacations",
      "Safe, technologically advanced, and student-friendly campuses",
    ],
    popularFields: ["Computer Engineering", "International Business", "Korean Language (KLP)", "Electronics", "Global Affairs"],
    avgTuition: "$2,000 – $5,000 / semester (often 50% to 100% waived)",
    avgLiving: "$500 – $800 / month",
    pswv: "D-10 Job Seeking Visa (Up to 2 Years)",
    intakes: "March (Spring) & September (Fall)",
    scholarships: "30% – 100% Tuition Waiver + GKS Korean Government Scholarships",
    topUnis: ["Kyungpook National University", "Korea University", "Hanyang University", "Pusan National University", "Chonnam National University"],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    region: "Southeast Asia",
    tagline: "Budget-friendly tropical study with UK/Australian branch campuses & fast visa",
    intro:
      "Malaysia provides internationally accredited degrees and branch campuses of top UK/Australian universities at one-third of Western costs, with fast EMGS visa processing within 30 days.",
    why: [
      "Branch campuses offering identical UK and Australian degrees",
      "Fast student visa approval (EMGS process usually takes 3 to 4 weeks)",
      "Very affordable living costs and familiar Muslim-friendly halal environment",
      "English is the primary medium of instruction across all private universities",
    ],
    popularFields: ["Information Technology", "Business Management", "Hospitality & Tourism", "Biomedical Sciences", "Civil Engineering"],
    avgTuition: "USD $3,500 – $7,500 / year",
    avgLiving: "USD $3,000 – $4,500 / year",
    pswv: "Pass Extension & Regional Employment Options",
    intakes: "January, April, July, September, November",
    scholarships: "20% – 50% Merit Tuition Reductions",
    topUnis: ["Taylor's University", "UCSI University", "Sunway University", "APU (Asia Pacific University)", "Monash University Malaysia"],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "europe",
    name: "European Union",
    flag: "🇪🇺",
    region: "Europe",
    tagline: "Tuition-free or low-cost universities across Germany, Italy, and Scandinavia",
    intro:
      "The European Union offers world-class academic institutions with zero or minimal tuition fees at public universities in Germany and Italy, paired with Schengen-wide mobility and post-study stay-back rights.",
    why: [
      "Zero tuition fees at German public universities; DSU regional grants in Italy",
      "Schengen visa allowing travel across 29 European countries",
      "12 to 18-month stay-back job seeker visas upon graduation",
      "Extensive selection of English-taught Bachelor's and Master's programs",
    ],
    popularFields: ["Mechanical & Automotive Engineering", "Renewable Energy", "Computer Science", "Sustainable Architecture", "International Trade"],
    avgTuition: "€0 – €4,000 / year (Germany: €0, Italy: €1,000–€3,500)",
    avgLiving: "€8,000 – €11,200 / year",
    pswv: "12 to 18 Months Job-Seeking Residence Permit",
    intakes: "September/October (Winter) & March/April (Summer)",
    scholarships: "Free Public Tuition + Italian DSU Regional Grants (up to €7,000/yr)",
    topUnis: ["TU Munich", "RWTH Aachen", "Politecnico di Milano", "University of Bologna", "Centria UAS Finland"],
    withoutIelts: true,
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
    slug: "ielts-coaching-registration",
    title: "IELTS Preparation & Official Exam Registration",
    summary:
      "As an authorized IDP and British Council Registration Point, Affordable International offers expert coaching for both IELTS Academic & General Training, along with hassle-free exam slot booking and exclusive cashbacks.",
    points: [
      "Comprehensive module coverage: Listening, Reading, Writing, and Speaking",
      "Official IDP & British Council test slot registration desk",
      "Instant ৳2,000 Cashback on official exam fee registration",
      "2 Full-length Mock Tests included completely FREE with registration",
      "Small interactive batches with personalized band score improvement plans",
    ],
    icon: "🎯",
    timeline: "2 to 3 Months Intensive Course",
    guarantee: "Target Band 7.0+ Strategy Guarantee",
    highlightBadge: "Authorized Registration Point",
  },
  {
    slug: "mock-test-center",
    title: "Affordable Mock Test Center (British Council Venue)",
    summary:
      "Experience the exact feel of the official test day. Our dedicated mock hall in Ashfak Plaza, Maijdee Bazar features individual acoustic headphones, authentic audio, timed papers, and 1-on-1 speaking evaluations with detailed feedback.",
    points: [
      "Authorized British Council Mock Test Venue in Maijdee Court, Noakhali",
      "Individual high-clarity headphones for real exam hall listening conditions",
      "Real exam time limits for Reading and Writing sections",
      "Face-to-face 1-on-1 Speaking mock interviews evaluated by senior instructors",
      "Detailed band score breakdown with actionable tips to overcome weaknesses",
    ],
    icon: "🎧",
    timeline: "Weekly Test Slots (Fridays & Saturdays)",
    guarantee: "Authentic British Council & IDP Standard",
    highlightBadge: "Official Mock Venue",
  },
  {
    slug: "spoken-english",
    title: "Spoken English & Writing Fluency Program",
    summary:
      "Break the language barrier and overcome hesitation. Our spoken English course focuses on real-life conversations, natural sentence structure, accent clarity, public speaking, and formal email/report writing.",
    points: [
      "Daily conversational practice, debate sessions, and impromptu presentations",
      "Phonetics, correct pronunciation, and accent reduction techniques",
      "Practical applied grammar without tedious rote memorization",
      "Professional formal writing: academic essays, resumes, and formal emails",
      "Friendly, non-judgmental classroom environment for all skill levels",
    ],
    icon: "🗣️",
    timeline: "2 Months (3 Classes/Week)",
    guarantee: "Fluency & Confidence Guarantee",
    highlightBadge: "High Student Satisfaction",
  },
  {
    slug: "kids-junior-english",
    title: "Kids & Junior English Program",
    summary:
      "Specially designed for school-going children and young learners. We make English learning joyful, engaging, and fear-free through phonics, vocabulary games, storytelling, and interactive conversations.",
    points: [
      "Interactive phonics to master clear English reading and pronunciation",
      "Fun vocabulary expansion through games, picture books, and storytelling",
      "Confidence building to speak English naturally in school and daily life",
      "Basic grammar concepts taught through child-friendly activities",
      "Caring, patient, and highly trained instructors with small class sizes",
    ],
    icon: "🧸",
    timeline: "Continuous Weekend & Afternoon Batches",
    guarantee: "Joyful & Fear-Free English Learning",
    highlightBadge: "Loved by Parents",
  },
  {
    slug: "study-abroad-counselling",
    title: "100% Free Study Abroad Career Counselling",
    summary:
      "Sit down with our senior international education counselors in Maijdee. We thoroughly analyze your GPA, CGPA, IELTS or language score, study gap, and financial sponsor to chart out the best country and university roadmap.",
    points: [
      "Zero file-opening fee — 100% free initial profile assessment",
      "University shortlisting across UK, USA, Canada, Australia, Korea, Malaysia, and Europe",
      "Honest evaluation of study gaps, budget constraints, and scholarship eligibility",
      "Personalized transparent roadmap with complete cost and intake timeline",
    ],
    icon: "🌏",
    timeline: "Instant Consultation (30–45 Mins)",
    guarantee: "100% Free · Zero Hidden Charges",
    highlightBadge: "100% Free Service",
  },
  {
    slug: "university-admission-visa",
    title: "University Admission Support & Bulletproof Visa Guidance",
    summary:
      "From drafting compelling Statements of Purpose (SOP) and obtaining university offer letters to building error-free embassy visa files and conducting mock interviews, we manage the entire process seamlessly.",
    points: [
      "Direct university partner portal application lodgement",
      "Professional drafting of Statement of Purpose (SOP), Cover Letter, and CV",
      "Comprehensive visa checklist, sponsor document audit, and tax calculation",
      "1-on-1 embassy mock interview sessions simulating real consular questions",
      "Pre-departure briefing, student airfare discounts, and accommodation assistance",
    ],
    icon: "🛂",
    timeline: "End-to-End Until Flight Departure",
    guarantee: "Expert Document Quality Guarantee",
    highlightBadge: "High Visa Success",
  },
];

export const liveOffers = [
  {
    id: "cashback-ielts",
    badge: "🔥 Live Cashback",
    title: "৳2,000 Instant Cashback on IELTS Exam Booking",
    description:
      "Book your official IELTS exam through Affordable International (Authorized IDP & British Council Registration Point) and receive an instant ৳2,000 cashback! Pay only ৳27,600 instead of ৳29,600.",
    benefits: [
      "Instant ৳2,000 cashback on official registration",
      "2 Full-length Mock Tests completely FREE (worth ৳2,000+)",
      "100% Free Study Abroad Profile Evaluation & University Shortlisting",
      "100% Free Application & Visa Processing Support",
    ],
    deadline: "Limited Time Promo",
    cta: "Claim Cashback via WhatsApp",
  },
  {
    id: "fee-update-notice",
    badge: "📢 Official Exam Fee Notice",
    title: "Official IELTS Exam Fee Schedule (Effective 4 September 2026)",
    description:
      "Please note the official revised exam fees set by test owners effective from September 4, 2026 across Bangladesh. Book before the revision to lock in current rates!",
    fees: [
      { name: "Regular IELTS (Academic / General Training)", fee: "৳31,100 BDT" },
      { name: "IELTS for UKVI (Academic / General Training)", fee: "৳34,850 BDT" },
      { name: "IELTS Life Skills (A1 / B1)", fee: "৳26,000 BDT" },
    ],
    note: "All tests registered through Affordable International are conducted under strict IDP and British Council regulations.",
    cta: "Check Available Test Dates",
  },
  {
    id: "free-orientation",
    badge: "🎓 Free Orientation Class",
    title: "Weekly IELTS & Study Abroad Orientation Free Class",
    description:
      "Solve all confusion about IELTS preparation, band scores, and study abroad pathways. Free entry for HSC graduates, university students, and study abroad aspirants.",
    schedule: "Every Friday at 11:00 AM",
    venue: "Affordable International, Ashfak Plaza (4th Floor), Maijdee Bazar, Noakhali",
    perks: [
      "Full IELTS test format breakdown & strategy roadmap",
      "Free diagnostic assessment & spot band score estimate",
      "1-on-1 counseling with senior trainers & abroad mentors",
    ],
    cta: "Register for Free Orientation",
  },
];

export const teamMembers = [
  {
    name: "Senior Academic Mentors",
    role: "Founders & Head Trainers",
    badge: "Certified Trainers",
    desc: "Passionate educators with years of experience in IELTS training, university admissions, and student mentorship in Noakhali and nationwide.",
    image: "/assets/team-instructors.jpg",
  },
  {
    name: "Affordable IELTS & Mock Center Desk",
    role: "British Council & IDP Test Coordinators",
    badge: "Authorized Coordinators",
    desc: "Dedicated to smooth test bookings, verified headphone acoustics, and standardized paper evaluations for our test candidates.",
    image: "/assets/ielts-orientation-poster.jpg",
  },
  {
    name: "Junior & Kids English Faculty",
    role: "Early Language Educators",
    badge: "Phonics Specialists",
    desc: "Specialized instructors focusing on phonetics, child psychology, and communicative games to make English learning a joyful experience.",
    image: "/assets/kids-class-1.jpg",
  },
];

export const officeGalleryPhotos = [
  {
    src: "/assets/team-instructors.jpg",
    title: "Affordable International Leadership & Mentors",
    category: "Mentorship Team",
    desc: "Our dedicated founders and senior trainers wearing official Affordable Global Studies lanyards.",
  },
  {
    src: "/assets/ielts-orientation-poster.jpg",
    title: "IELTS Mock Test & Free Orientation Session",
    category: "Mock Center & Classes",
    desc: "Students taking timed IELTS mock tests with individual headphones at Ashfak Plaza, Maijdee.",
  },
  {
    src: "/assets/kids-class-1.jpg",
    title: "Kids English Interactive Learning",
    category: "Kids English",
    desc: "Young learners developing foundational English phonetics and vocabulary in a caring classroom environment.",
  },
  {
    src: "/assets/kids-class-2.jpg",
    title: "Junior English Communicative Practice",
    category: "Language Classes",
    desc: "Students actively participating in speaking exercises and confidence-building activities.",
  },
  {
    src: "/assets/nstu-expo-stall.jpg",
    title: "Study in Europe — University Expo & Outreach",
    category: "Campus Events",
    desc: "Affordable Global Studies education stall connecting with ambitious university students.",
  },
  {
    src: "/assets/affordable-banner.jpg",
    title: "Explore Your Global Future — Official Billboard",
    category: "Global Destinations",
    desc: "Affordable International official brand banner highlighting key study abroad destinations.",
  },
];

export const faqs = [
  {
    q: "Where is Affordable International located in Maijdee?",
    a: "We are conveniently located at Ashfak Plaza (Level 4 / ৪র্থ তলা), right next to the south side of Green Hall and close to the Dutch Bangla ATM Booth, Maijdee Bazar, Maijdee Court, Noakhali.",
  },
  {
    q: "Is Affordable International an authorized IELTS test registration point?",
    a: "Yes! Affordable International is an official and authorized Registration Point for both IDP IELTS and the British Council. We are also an authorized British Council Mock Test Venue.",
  },
  {
    q: "How does the ৳2,000 IELTS exam cashback offer work?",
    a: "When you book your official IELTS exam date through our registration desk, you receive an instant ৳2,000 cashback on the regular exam fee (paying ৳27,600 instead of ৳29,600). Plus, you get 2 full-length Mock Tests and 100% Free Study Abroad Counseling included.",
  },
  {
    q: "What facilities are provided in your IELTS Mock Test Center?",
    a: "Our mock center in Ashfak Plaza simulates authentic test day conditions: individual acoustic headphones for the Listening test, timed Reading & Writing booklets, and one-on-one face-to-face Speaking interviews evaluated by experienced instructors.",
  },
  {
    q: "Do you offer English courses for young children?",
    a: "Yes, our 'Kids & Junior English' program is tailored for school students. It uses fun phonics, vocabulary games, storytelling, and interactive dialogues to build natural fluency without any pressure or fear.",
  },
  {
    q: "Do you charge any file-opening fee for study abroad counseling?",
    a: "No! We do NOT charge any file-opening fee. Our initial profile evaluation, university shortlisting, and career counseling are 100% free with complete transparency.",
  },
  {
    q: "Which study abroad destinations do you guide students for?",
    a: "We actively provide counseling, admission, scholarship, and visa guidance for the UK, USA, Canada, Australia, South Korea, Malaysia, and European countries (Germany, Italy, Finland, Sweden, etc.).",
  },
  {
    q: "How can I register for the weekly free orientation class?",
    a: "You can simply message us on WhatsApp at 01736-493995 or visit our office at Ashfak Plaza (Level 4), Maijdee Bazar on Friday before 11:00 AM.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "100% Free Profile Assessment",
    text: "Visit our Ashfak Plaza office in Maijdee or WhatsApp us. We analyze your academic GPA, IELTS/language status, and budget.",
    badge: "Step 1",
  },
  {
    step: "02",
    title: "IELTS & Language Preparation",
    text: "Enroll in our targeted IELTS, Spoken English, or Mock Test programs with certified trainers to achieve your required scores.",
    badge: "Step 2",
  },
  {
    step: "03",
    title: "University & Scholarship Match",
    text: "We shortlist accredited partner universities offering your desired course across UK, USA, Canada, Australia, Korea, or Europe.",
    badge: "Step 3",
  },
  {
    step: "04",
    title: "Application & Offer Acceptance",
    text: "We prepare your documents, draft professional Statements of Purpose (SOP), and file your university applications directly.",
    badge: "Step 4",
  },
  {
    step: "05",
    title: "Visa Filing & Mock Interview",
    text: "Our visa experts compile an error-free file, verify financial documentation, and conduct 1-on-1 embassy mock interviews.",
    badge: "Step 5",
  },
  {
    step: "06",
    title: "Pre-Departure & Fly Abroad",
    text: "We provide comprehensive pre-departure briefings, accommodation tips, and connect you with student seniors abroad.",
    badge: "Step 6",
  },
];
