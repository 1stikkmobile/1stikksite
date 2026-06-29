import {
    Activity,
    Baby,
    BadgeCheck,
    Brain,
    Briefcase,
    Building2,
    Dna,
    Droplets,
    FlaskConical,
    GraduationCap,
    HandHeart,
    HeartPulse,
    Microscope,
    ShieldCheck,
    Stethoscope,
    Syringe,
    TestTube2,
    Users
} from "lucide-react";

// Patients must CALL — no online booking for patient services
// Training: Square ($75 payment) + Calendly (schedule session)
export const squareTrainingUrl = "https://checkout.square.site/merchant/ML21SF304722B/checkout/W4RL45S2FR2QOSYGF4IJUQGU";
// myriadUrl is deprecated — use squareTrainingUrl for training payment
export const myriadUrl = squareTrainingUrl;
export const calendlyBookingUrl = "https://calendly.com/1stikkmobile-meeting/health";
export const calendlyUrl =
  "https://calendly.com/1stikkmobile-meeting/health?hide_event_type_details=1&hide_gdpr_banner=1&background_color=121212&text_color=ffffff&primary_color=e3b505";

export const mainPhone = "(877) 217-8455";
export const mainPhoneDialHref = "tel:8772178455";
export const afterHoursPhone = "(318) 512-0170";
export const afterHoursPhoneHref = "tel:3185120170";

// Training-only contact — (877) 217-8455 ext. 205
export const trainingPhone = "(877) 217-8455";
export const trainingPhoneExt = "ext. 205";
export const trainingPhoneHref = "tel:8772178455";
export const contactEmail = "collection.lab@1stikkmobile.com";
export const faxLine = "(318) 383-0842";
export const officeHoursText = "Open 24 Hours · Monday to Sunday";
export const labPortalUrl = "https://1stikkmobilelaboratory.org";
export const facebookUrl = "https://www.facebook.com/share/1Adzhmj8YD/";

// Services (mega menu) — each has its own detail page
export const services = [
  {
    title: "Blood Tests at Home",
    slug: "routine-collections",
    icon: Droplets,
    image: "/images/services/blood-draw-home.webp",
    imageAlt: "A caring 1 Stikk Mobile professional drawing blood at a patient's home",
    tag: "For patients",
    book: "patient",
    summary: "We come to you for blood tests, urine samples, and labs ordered by your doctor.",
    points: [
      "Blood draws and follow-up labs at home",
      "Urine, saliva, and stool samples collected at your door",
      "At-home and bedside lab visits",
      "Scheduled and timed doctor-ordered tests"
    ]
  },
  {
    title: "Wellness Checkups",
    slug: "wellness",
    icon: HeartPulse,
    image: "/images/services/nurse-blood-draw.webp",
    imageAlt: "A certified wellness professional checking vitals during a mobile visit",
    tag: "For patients",
    book: "patient",
    summary: "Preventive health checks and screenings brought to your home or workplace.",
    points: [
      "Wellness visits at home",
      "Preventive health screenings",
      "Chronic care and health tracking",
      "Postpartum and urgent care support"
    ]
  },
  {
    title: "Drug Tests",
    slug: "drug-screening",
    icon: ShieldCheck,
    image: "/images/services/drug-screening-kit.webp",
    imageAlt: "Mobile drug test collection supplies ready for a workplace visit",
    tag: "Patients & employers",
    book: "patient",
    summary: "DOT and workplace drug testing done at your location with proper paperwork.",
    points: [
      "DOT drug testing for drivers and safety workers",
      "Non-DOT drug and alcohol screening",
      "Employer and pre-hire testing",
      "Return-to-duty testing"
    ]
  },
  {
    title: "DNA & Paternity Tests",
    slug: "genetic-testing",
    icon: Dna,
    image: "/images/services/dna-cheek-swab.webp",
    imageAlt: "DNA cheek swab collection for paternity testing at home",
    tag: "For patients",
    book: "patient",
    summary: "Private DNA and paternity testing collected at your home for accurate results.",
    points: [
      "DNA and paternity testing",
      "Personalized genetic insights",
      "Private, professional sample collection",
      "Clear guidance through every step"
    ]
  },
  {
    title: "Behavioral Health Support",
    slug: "behavioral-health",
    icon: Brain,
    image: "/images/services/lab-general.webp",
    imageAlt: "Compassionate behavioral health support and coordination",
    tag: "For patients",
    book: "call",
    summary: "Caring support and screenings for mental health and recovery needs.",
    points: [
      "Substance abuse program support",
      "Behavioral health screenings",
      "24-hour crisis hotline guidance",
      "Respectful, confidential coordination"
    ]
  }
];

export const otherPrograms = [
  {
    title: "Community Health Fairs",
    slug: "non-profit",
    icon: HandHeart,
    image: "/images/site/van-care.webp",
    imageAlt: "1 Stikk Mobile van bringing care to a community health fair",
    tag: "Community",
    book: "contact",
    summary: "Mobile health fairs and outreach events that bring care to underserved neighborhoods.",
    points: [
      "Community health fairs",
      "Outreach and wellness events",
      "Access for underserved communities",
      "Partnership with local organizations"
    ]
  },
  {
    title: "Business Solutions",
    slug: "business-solutions",
    icon: Building2,
    image: "/images/site/mobile-lab.webp",
    imageAlt: "Mobile lab services for clinics, schools, and employers",
    tag: "For organizations",
    book: "call",
    summary: "On-site testing, partnerships, and business coaching for clinics and employers.",
    points: [
      "On-site testing for clinics, schools, and facilities",
      "Partnership plans for home care and mobile providers",
      "Lab business consulting and startup coaching",
      "Mobile health fairs and corporate wellness"
    ]
  }
];

export const serviceMap = Object.fromEntries([...services, ...otherPrograms].map((s) => [s.slug, s]));

// Training & Programs — each has its own detail page at /training/[slug]
export const trainingPrograms = [
  {
    slug: "phlebotomy",
    title: "Phlebotomy Training & Certification",
    icon: Syringe,
    image: "/images/services/blood-tubes.webp",
    imageAlt: "Student practicing a blood draw during hands-on phlebotomy class",
    gallery: [
      { src: "/images/training/training-hands-on.jpg", alt: "Hands-on blood draw practice in class" },
      { src: "/images/training/training-instructor.jpg", alt: "Instructor guiding a student one-on-one" },
      { src: "/images/training/training-guidance.jpg", alt: "Hands-on coaching during a skills lab" }
    ],
    summary: "Learn to draw blood, handle samples, and get ready for your certification exam.",
    description:
      "Hands-on phlebotomy training for beginners and career changers. Learn to draw blood, handle samples safely, care for patients, and prepare for national certification — no experience needed.",
    who: [
      "Complete beginners with no medical experience",
      "CNAs and medical assistants expanding their skills",
      "Career changers entering healthcare",
      "Students preparing for national certification exams"
    ],
    learn: [
      "Blood draw technique — arm, hand, and difficult veins",
      "Fingerstick and capillary collection",
      "Labeling and safe handling of samples",
      "Patient safety, comfort, and infection control",
      "National phlebotomy certification exam prep"
    ],
    includes: [
      "Hands-on lab practice with real equipment",
      "Mock blood draw sessions with instructor feedback",
      "One-on-one guidance from a certified professional",
      "Certification prep materials",
      "Certificate of completion"
    ],
    duration: "Flexible scheduling · self-paced with live guidance"
  },
  {
    slug: "drug-screening",
    title: "Drug Screening Training",
    icon: ShieldCheck,
    image: "/images/training/drug-screen-mock-collections.png",
    imageAlt: "1 Stikk Mobile drug screen mock collections training graphic with certification details",
    gallery: [
      { src: "/images/training/training-table.jpg", alt: "Drug test supplies organized for practice" },
      { src: "/images/training/training-instructor.jpg", alt: "Instructor demonstrating collection steps" },
      { src: "/images/training/training-polaroids.jpg", alt: "Snapshots from a drug screening workshop" }
    ],
    summary: "Learn DOT and workplace drug testing, live mock collections, and the exact support students receive after enrollment.",
    description:
      "DOT and non-DOT drug screening training for healthcare workers, clinic staff, and HR professionals. Learn proper collection, chain-of-custody paperwork, compliance, and how to run a screening program with guided mock collections and career-ready support.",
    who: [
      "Healthcare workers adding a high-demand skill",
      "Clinic and urgent care staff",
      "HR professionals managing workplace drug testing",
      "Business owners setting up a screening program"
    ],
    learn: [
      "DOT urine collection procedures",
      "Non-DOT drug and alcohol testing steps",
      "Chain-of-custody paperwork and required forms",
      "Breath alcohol testing (BAT) procedures",
      "Compliance, privacy rules, and collector workflow confidence"
    ],
    includes: [
      "Training portal access emailed to you",
      "Live mock collections with guided practice",
      "Q&A with a certified instructor",
      "Kits mailed to you if needed",
      "Mock collection practice sessions",
      "DOT regulation overview and reference materials",
      "Paperwork and form completion training",
      "Certificate of completion",
      "1 Stikk Mobile drug screen collector registration onboarding"
    ],
    duration: "1–2 day intensive · or flexible self-paced option"
  },
  {
    slug: "workforce",
    title: "Workforce & Healthcare Programs",
    icon: GraduationCap,
    image: "/images/services/lab-researchers.webp",
    imageAlt: "Workforce healthcare training class in session",
    gallery: [
      { src: "/images/training/training-guidance.jpg", alt: "Hands-on coaching during workforce training" },
      { src: "/images/training/training-instructor.jpg", alt: "Instructor demonstrating a technique" },
      { src: "/images/training/training-hands-on.jpg", alt: "Student practicing blood draw skills" }
    ],
    summary: "Beginner-friendly programs that teach job-ready skills for healthcare careers.",
    description:
      "Beginner-friendly workforce and healthcare training that teaches job-ready skills for mobile and allied health careers. No prior experience needed — just the desire to serve and grow.",
    who: [
      "Job seekers looking to start a healthcare career",
      "Community members re-entering the workforce",
      "Youth and young adults starting out",
      "Anyone interested in mobile healthcare roles"
    ],
    learn: [
      "Clinical basics and healthcare terms",
      "Professional communication and patient interaction",
      "Mobile health operations and lab procedures",
      "Job search and resume guidance",
      "Community care principles"
    ],
    includes: [
      "Skills training with real-world practice",
      "Career coaching and goal-setting sessions",
      "Job placement support and referrals",
      "Community connections and peer networking",
      "Certificate of completion"
    ],
    duration: "Beginner-friendly · ongoing enrollment open now"
  },
  {
    slug: "consulting",
    title: "Lab Business Consulting & Mentorship",
    icon: Briefcase,
    image: "/images/services/lab-microscope.webp",
    imageAlt: "Lab business consulting and mentorship session overview",
    gallery: [
      { src: "/images/training/training-table.jpg", alt: "Lab business consulting session" },
      { src: "/images/training/training-instructor.jpg", alt: "Mentor working with a student" },
      { src: "/images/training/training-polaroids.jpg", alt: "Training workshop snapshots" }
    ],
    summary: "One-on-one coaching for nurses, clinicians, and entrepreneurs starting a healthcare business.",
    description:
      "One-on-one mentorship and business consulting for nurses, clinicians, and entrepreneurs starting or growing a mobile lab or healthcare business. Learn directly from a working mobile lab CEO.",
    who: [
      "Nurses and clinicians starting a private practice",
      "Entrepreneurs entering the mobile healthcare space",
      "Existing lab owners seeking to grow",
      "Organizations building mobile health partnerships"
    ],
    learn: [
      "Mobile lab business structure and legal setup",
      "Healthcare billing and revenue cycle basics",
      "Regulatory compliance and proper licensing",
      "Marketing, client acquisition, and growth strategy",
      "Partnership development and contract negotiation"
    ],
    includes: [
      "1-on-1 mentorship with CEO Tiffany Clinton",
      "Business plan review and actionable feedback",
      "Resource library and starter templates",
      "Referral network and partnership access",
      "Ongoing accountability and support"
    ],
    duration: "Ongoing · flexible monthly sessions"
  }
];

export const trainingProgramMap = Object.fromEntries(trainingPrograms.map((p) => [p.slug, p]));

// "Our Core Practices"
export const corePractices = [
  { title: "Blood draws at home", icon: Droplets, slug: "routine-collections", book: "patient" },
  { title: "Postpartum care", icon: Baby, slug: "wellness", book: "patient" },
  { title: "Urgent care help", icon: Activity, slug: "wellness", book: "patient" },
  { title: "Workplace drug tests", icon: ShieldCheck, slug: "drug-screening", book: "patient" },
  { title: "DNA & paternity tests", icon: Dna, slug: "genetic-testing", book: "patient" },
  { title: "Wellness checkups", icon: HeartPulse, slug: "wellness", book: "patient" }
];

export const testimonials = [
  {
    name: "Willie Wallace",
    role: "14 reviews • 2 months ago",
    quote: "Very Professional!"
  },
  {
    name: "David Whitehead",
    role: "2 reviews • 9 months ago",
    quote: "Fast and reliable"
  },
  {
    name: "John Jackson",
    role: "2 months ago",
    quote: "Excellent service and very professional staff."
  },
  {
    name: "Catrina Jackson",
    role: "8 reviews • 2 months ago",
    quote: "Highly recommend this company."
  },
  {
    name: "Dennis Hawkins",
    role: "1 review • 2 months ago",
    quote: "Quick, smooth, and dependable service."
  }
];

export const faqs = [
  {
    q: "What services does 1 Stikk Mobile provide?",
    a: "We bring healthcare to you. That includes blood tests, drug and alcohol tests, DNA and paternity tests, wellness checkups, and health screenings — plus training and business support."
  },
  {
    q: "Do you offer at-home or mobile services?",
    a: "Yes. Our certified professionals come directly to your home, workplace, clinic, or facility."
  },
  {
    q: "Do I need medical experience to join your training programs?",
    a: "No. Our training programs are beginner-friendly and designed for people with no healthcare background."
  },
  {
    q: "What certifications do you offer?",
    a: "We offer training in phlebotomy (blood draws), drug screening, mock collections, and medical assistant prep — with certification options."
  },
  {
    q: "How do I book a service or appointment?",
    a: "Click Book a Service or call us at (877) 217-8455. We're here 24/7."
  }
];

export const serviceStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/program" },
  { label: "Services", href: "/services", mega: "services" },
  { label: "Training", href: "/training", mega: "training" },
  { label: "Articles", href: "/articles" }
];

// ------------------------------------------------------------------ Programs

export const programData = {
  hero: {
    title: "Programs built for purpose.",
    lead: "From youth empowerment to second chances for adults — our programs help people build skills, find careers, and create generational change."
  },
  youth: {
    title: "Moving With a Purpose",
    subtitle: "Empowering Youth to Build Careers and Create Generational Wealth",
    image: "/images/services/dna-collection.webp",
    imageAlt: "Youth participants learning hands-on healthcare and career skills",
    description:
      "Moving With a Purpose is a dynamic youth program designed to ignite purpose, unlock potential, and change the narrative for the next generation. Our mission is to equip young people with the creative, technical, and professional skills needed to launch successful careers and build lasting generational wealth.",
    body:
      "Through mentorship, hands-on training, and real-world experience, participants learn to thrive in industries such as healthcare, digital media, technology, and entrepreneurship. We focus on purpose-driven living, helping youth discover their talents, develop leadership, and turn vision into action.",
    focusAreas: [
      "Personal Growth & Faith-Based Values",
      "Creative & Technical Skill-Building",
      "Entrepreneurship & Financial Literacy",
      "Career Readiness & Workforce Development"
    ],
    cta: { label: "Enroll in M.W.A.P", href: "#enroll" }
  },
  adults: {
    title: "Hustle With a Purpose",
    subtitle: "A Second Chance Program for Adults Ready to Transform Their Lives",
    image: "/images/services/lab-science.webp",
    imageAlt: "Adult participant receiving mentorship and career coaching",
    description:
      "Hustle With a Purpose is a life-changing program created to give every adult a second chance at life — a chance to break cycles, rewrite their story, and take control of their future. This initiative empowers individuals with the tools, mindset, and support needed to achieve financial freedom, personal growth, and long-term success.",
    body:
      "We focus on helping adults overcome barriers, build confidence, and gain the practical skills needed to create new opportunities — whether through employment, entrepreneurship, or education.",
    highlights: [
      "Career Development & Job Placement",
      "Financial Literacy & Credit Restoration",
      "Business Coaching & Entrepreneurship",
      "Life Skills & Goal Setting",
      "Faith-Based Mentorship & Support"
    ],
    cta: { label: "Join Hustle With a Purpose", href: "#enroll" }
  },
  drugScreenTraining: {
    title: "Mock Collections — Drug Screen Training",
    subtitle: "Essential Training for a Successful Career in Drug Screening",
    image: "/images/services/lab-tubes.webp",
    imageAlt: "Drug screening collection supplies ready for hands-on training",
    description:
      "Join us to gain the training you need to excel in the field of drug screening. This live Zoom event covers everything from mock collections to completion certificates.",
    event: {
      type: "Live Zoom Event",
      date: "Saturday, January 24, 2026",
      time: "2:00 PM — 5:00 PM"
    },
    includes: [
      "Live Mock Collections",
      "Q&A with certified instructors",
      "Certificate of Completion",
      "1 Stikk Mobile Drug Screen Collector Registration Onboarding"
    ],
    contact: "For assistance with the online training portal, please call 877-217-8455.",
    cta: { label: "Schedule on Calendly", href: calendlyBookingUrl },
    paymentLink: { label: "Pay $75 — Enroll Now", href: squareTrainingUrl }
  },
  cta: {
    title: "Ready to walk in purpose?",
    lead: "Call us or enroll online today. We’re here to help you take the next step.",
    phone: "877-217-8455",
    phoneHref: "tel:8772178455"
  }
};

// ------------------------------------------------------------------ Articles

export const articles = [
  {
    slug: "mobile-blood-draw-at-home",
    title: "Mobile Blood Draw at Home: What to Expect",
    headline: "Mobile Blood Draw at Home: A Complete Patient Guide",
    description:
      "Discover how mobile blood draw services work, what to expect during your at-home lab visit, and why thousands of patients are choosing mobile phlebotomy over clinic trips.",
    category: "Patient Care",
    categorySlug: "patient-care",
    dateISO: "2025-12-15",
    date: "December 15, 2025",
    readTime: "6 min read",
    author: { name: "Tiffany Clinton, CPT, RMA", role: "CEO & Founder, 1 Stikk Mobile" },
    image: "/images/services/blood-draw.jpg",
    imageAlt: "A 1 Stikk Mobile certified phlebotomist arriving at a patient's home for a blood draw",
    intro:
      "Every year, millions of patients delay lab work because of one simple barrier: getting there. Whether it's a lack of transportation, a chronic condition that makes travel difficult, or a caregiver's packed schedule, the trip to a lab draw center can feel impossible. Mobile blood draw services eliminate that barrier entirely — a certified phlebotomist comes to you.",
    sections: [
      {
        heading: "How Mobile Blood Draw Services Work",
        body: "Scheduling is simple. Book online or by phone, choose a time window that fits your day, and a certified professional drives to your home, office, or care facility. They bring all the equipment — collection tubes, needles, biohazard transport bags, and chain-of-custody forms when required. Most visits take under 20 minutes from arrival to departure.\n\nSpecimens are packed and transported to a CLIA-certified laboratory, where results are processed and returned to your ordering physician or directly to you through a secure patient portal. The science and accuracy are identical to what you'd receive in any hospital or outpatient draw center."
      },
      {
        heading: "Who Benefits Most from At-Home Blood Draws",
        body: "At-home blood draws serve patients of every age and condition. Seniors and elderly patients who cannot safely drive benefit most directly. So do patients recovering from surgery, people with mobility impairments, and individuals managing chronic illnesses who already face frequent lab needs.\n\nBusy caregivers, new mothers in the postpartum period, and working professionals who cannot afford time away from their day also find mobile lab services invaluable. Employers increasingly arrange on-site draws for their workforce as well — reducing absenteeism and demonstrating a genuine investment in employee health."
      },
      {
        heading: "What to Expect During Your Home Lab Visit",
        body: "Your phlebotomist will arrive on time, introduce themselves, and verify your identity using your government-issued ID. They'll confirm the test orders, select the appropriate collection site — typically the antecubital vein in your arm — and collect the required specimens professionally and efficiently.\n\nAfter collection, specimens are labeled immediately with your identifying information, packaged per laboratory protocol, and placed in tamper-evident transport packaging. You may receive a copy of the chain-of-custody form and a specimen tracking number if applicable to your test type."
      },
      {
        heading: "How to Prepare for Your Appointment",
        body: "If your tests require fasting — such as a glucose panel or lipid profile — avoid food and caloric beverages for 8–12 hours before your visit. Plain water is always encouraged, as good hydration makes veins easier to access and reduces the chance of a difficult draw.\n\nWear loose-fitting clothing that allows easy access to your upper arm. Keep a current medication list available, as your phlebotomist may need this information for certain specialty panels. Have your insurance card and physician's name ready for documentation purposes."
      },
      {
        heading: "Are At-Home Blood Draws as Accurate as Clinic Visits?",
        body: "Yes — absolutely. The collection technique, equipment, and specimen handling protocols are identical to what any certified phlebotomist uses in a hospital, outpatient clinic, or reference lab. At 1 Stikk Mobile, every team member is certified, trained to current CLSI standards, and follows strict protocols throughout every visit.\n\nThe only difference is the setting — your home instead of a waiting room. Accuracy, reliability, and chain-of-custody integrity are never compromised. Your physician receives the same quality specimen and the same actionable result, delivered faster because there's no scheduling backlog."
      }
    ],
    relatedService: "routine-collections",
    related: ["mobile-wellness-screenings", "dot-drug-testing-guide"]
  },
  {
    slug: "dot-drug-testing-guide",
    title: "DOT Drug Testing Requirements: What Employers Need to Know in 2025",
    headline: "DOT Drug Testing Requirements: A Complete Employer Guide",
    description:
      "Understand DOT drug testing requirements for safety-sensitive employees, the five test types, chain-of-custody procedures, and how to keep your program fully compliant in 2025.",
    category: "Employer Resources",
    categorySlug: "employer-resources",
    dateISO: "2025-11-20",
    date: "November 20, 2025",
    readTime: "8 min read",
    author: { name: "Tiffany Clinton, CPT, RMA", role: "CEO & Founder, 1 Stikk Mobile" },
    image: "/images/services/drug-test-report.jpg",
    imageAlt: "DOT drug test chain-of-custody form with specimen collection supplies",
    intro:
      "If your company employs safety-sensitive workers under Department of Transportation regulations — commercial drivers, pilots, railroad workers, pipeline operators, or maritime personnel — you are legally required to maintain a federally compliant drug and alcohol testing program. Understanding what DOT drug testing requires isn't just good practice; it's the law.",
    sections: [
      {
        heading: "Which Employers Must Follow DOT Drug Testing Rules",
        body: "DOT drug testing regulations apply to any employer with workers in safety-sensitive positions regulated by the DOT's six operating agencies: FMCSA (motor carriers), FAA (aviation), FRA (railroad), FTA (mass transit), PHMSA (pipeline), and USCG (maritime).\n\nIf you operate commercial motor vehicles with a GVWR over 26,001 pounds, carry 16 or more passengers for compensation, or transport certain hazardous materials requiring a placard, your drivers are subject to FMCSA Part 382 — the backbone of DOT drug and alcohol testing requirements."
      },
      {
        heading: "The Five Required Types of DOT Drug Tests",
        body: "Pre-employment testing is mandatory before any safety-sensitive employee begins performing regulated duties. Random testing draws from a pool of all safety-sensitive employees at federally mandated minimum rates — currently 50% for drugs and 10% for alcohol under FMCSA.\n\nPost-accident testing is triggered when a fatal accident occurs or a citation is issued following an injury accident. Reasonable suspicion testing is conducted when a trained supervisor directly observes behavior consistent with drug or alcohol influence. Return-to-duty testing applies to employees who violated the program and completed SAP evaluation."
      },
      {
        heading: "What Substances DOT Tests Screen For",
        body: "DOT urine drug panels screen for five substance categories: marijuana metabolites (THC-COOH), cocaine metabolites, amphetamines (including methamphetamine and MDMA), opioids (codeine, morphine, hydrocodone, hydromorphone, oxycodone, and oxymorphone), and phencyclidine (PCP).\n\nAlcohol testing is entirely separate from urine drug testing and uses evidential breath testing (EBT) devices or saliva-based screening devices. A breath alcohol concentration (BAC) of 0.04 or above is an automatic violation; a BAC between 0.02 and 0.039 temporarily removes the employee from safety-sensitive duties."
      },
      {
        heading: "Chain of Custody and the MRO Process",
        body: "Every DOT urine collection must use a federal five-part Custody and Control Form (CCF). The collection process follows strict 49 CFR Part 40 procedures — from donor identity verification through split specimen preparation and sealing. Any procedural error can invalidate the test.\n\nNon-negative laboratory results go directly to a federally certified Medical Review Officer (MRO) before reaching the employer. The MRO contacts the donor to verify whether a legitimate medical explanation exists — such as a valid prescription — and reports only verified results to the Designated Employer Representative (DER)."
      },
      {
        heading: "The Substance Abuse Professional (SAP) Referral Process",
        body: "When an employee has a DOT violation — verified positive, adulterated, substituted, or refusal to test — they are immediately removed from all safety-sensitive functions. The employer must refer them to a qualified Substance Abuse Professional (SAP) for evaluation and treatment or education recommendations.\n\nThe SAP determines what steps the employee must complete before a return-to-duty test. After a verified negative return-to-duty result, the employee must complete a follow-up testing plan of at least six unannounced tests over the following 12 months. 1 Stikk Mobile offers SAP Assessment services as part of our employer compliance programs."
      }
    ],
    relatedService: "drug-screening",
    related: ["drug-test-chain-of-custody", "mobile-blood-draw-at-home"]
  },
  {
    slug: "phlebotomy-training-career",
    title: "Phlebotomy Training: Your Complete Guide to a Healthcare Career",
    headline: "Phlebotomy Training: Start Your Healthcare Career in Weeks, Not Years",
    description:
      "Everything you need to know about phlebotomy training — how long it takes, what you'll learn, national certifications available, and how to launch a rewarding mobile healthcare career.",
    category: "Training & Career",
    categorySlug: "training-career",
    dateISO: "2025-10-08",
    date: "October 8, 2025",
    readTime: "7 min read",
    author: { name: "Tiffany Clinton, CPT, RMA", role: "CEO & Founder, 1 Stikk Mobile" },
    image: "/images/training/training-instructor.jpg",
    imageAlt: "A student practicing venipuncture technique during hands-on phlebotomy training",
    intro:
      "Phlebotomy is one of the fastest entry points into the healthcare field — and one of the most in-demand. With the right training and national certification, you can begin a meaningful, stable healthcare career in as little as a few weeks. Here's everything you need to know before you start.",
    sections: [
      {
        heading: "What Does a Phlebotomist Do?",
        body: "Phlebotomists are the healthcare professionals responsible for drawing blood specimens from patients for laboratory analysis, transfusions, research, and donation. They work in hospitals, outpatient clinics, reference laboratories, blood donation centers, and increasingly in patients' homes as mobile phlebotomists.\n\nBeyond the blood draw itself, phlebotomists verify patient identity, confirm test orders, label specimens correctly, document collections in laboratory information systems, and ensure safe transport of specimens. Accuracy and patient comfort are equally central to the role."
      },
      {
        heading: "How Long Does Phlebotomy Training Take?",
        body: "Traditional phlebotomy certificate programs range from 4 to 12 weeks at community colleges and technical schools. Intensive programs — typically offered by private training providers — can be completed in 1–2 weeks with dedicated daily training. Phlebotomy can also be embedded within longer Medical Assistant (MA) programs that span 9–12 months.\n\nAt 1 Stikk Mobile, we offer flexible, self-paced phlebotomy training with live instructor guidance so you can balance your education with current work or family commitments. No prior healthcare experience is required to start."
      },
      {
        heading: "What You'll Learn in a Phlebotomy Program",
        body: "Training covers the theory and hands-on practice of venipuncture (drawing from veins), capillary puncture (fingerstick collections), and specialty draws. You'll learn the complete tube order of draw, proper labeling and handling, and specimen transport requirements to ensure sample integrity from collection to the lab.\n\nPatient safety, infection control, and professional communication are woven throughout every quality phlebotomy program. Certification exam preparation is integrated so that graduates are ready to sit for national credentialing exams immediately after completing training."
      },
      {
        heading: "National Phlebotomy Certifications Explained",
        body: "The two most widely recognized certifications in the United States are the CPT (Certified Phlebotomy Technician) awarded by the National Healthcareer Association (NHA) and the PBT (Phlebotomy Technician) credential from the ASCP Board of Certification. Both are accepted by hospitals, clinics, and reference labs nationwide.\n\nCertification demonstrates competency to employers and is often required for hospital employment. Some states — California, Louisiana, Nevada, and Washington — have additional state licensing requirements beyond national certification. Our training prepares graduates for both national exams and applicable state requirements."
      },
      {
        heading: "Career Paths After Phlebotomy Certification",
        body: "Certified phlebotomists can work across a wide range of healthcare settings: hospitals, outpatient labs, blood banks, physician offices, occupational health clinics, and mobile healthcare companies. The Bureau of Labor Statistics projects steady growth in phlebotomy demand through the decade as the aging US population requires more laboratory services.\n\nMany phlebotomists use their certification as a stepping stone to other clinical careers — registered nursing, medical laboratory technology, or physician assistant programs. Mobile phlebotomy, offered by companies like 1 Stikk Mobile, is a fast-growing specialty that combines healthcare with the flexibility of field-based work."
      }
    ],
    relatedService: "routine-collections",
    related: ["mobile-blood-draw-at-home", "mobile-wellness-screenings"]
  },
  {
    slug: "drug-test-chain-of-custody",
    title: "Understanding Drug Test Chain of Custody: A Step-by-Step Guide",
    headline: "Drug Test Chain of Custody: What It Is and Why It Matters",
    description:
      "Learn how drug test chain of custody works from collection to result — including the CCF form, lab testing process, MRO review, and split specimen rights. Essential for employers and donors.",
    category: "Compliance",
    categorySlug: "compliance",
    dateISO: "2025-09-12",
    date: "September 12, 2025",
    readTime: "7 min read",
    author: { name: "Tiffany Clinton, CPT, RMA", role: "CEO & Founder, 1 Stikk Mobile" },
    image: "/images/services/dna-swab.webp",
    imageAlt: "Drug test specimen collection capsules and chain-of-custody supplies",
    intro:
      "Drug testing means nothing without a documented chain of custody. In regulated environments — DOT testing, pre-employment screening, court-ordered drug monitoring, and pain management programs — the integrity of the specimen from collection through result reporting must be provable and unbroken. Understanding how chain of custody works protects employers, healthcare providers, and donors alike.",
    sections: [
      {
        heading: "What Is Chain of Custody in Drug Testing?",
        body: "Chain of custody (COC) is a documented record of every person who handled a specimen — from the moment it was collected to when the laboratory reported the result. It creates a legally defensible paper trail proving the specimen belongs to a specific individual and was handled according to established protocols throughout the entire process.\n\nIn DOT-regulated testing, federal regulations in 49 CFR Part 40 require a five-part Federal Custody and Control Form (CCF) for every urine specimen collection. Non-DOT programs often use proprietary COC forms but follow the same documentation principles."
      },
      {
        heading: "The Chain of Custody Process: Step by Step",
        body: "The process begins when the collector verifies the donor's identity using a government-issued photo ID. The donor provides a specimen in a single-use collection container. The collector checks volume (minimum 30 mL for DOT), temperature (must fall within 90°F–100°F), and appearance before pouring the specimen into tamper-evident specimen bottles.\n\nThe collector applies security seals over the bottle caps and has the donor initial the seals. Both the collector and donor sign the CCF. The completed form accompanies the sealed specimen through shipping to the certified laboratory. Any break in this chain — a missing signature, an intact seal, a temperature failure — can invalidate the entire collection."
      },
      {
        heading: "What Happens at the Certified Laboratory",
        body: "Upon arrival at the laboratory, trained accessioners verify that specimen seals are intact and that CCF information is complete and consistent with the specimen. Any discrepancy triggers a rejected specimen notification before testing begins.\n\nThe specimen undergoes initial immunoassay screening — a highly sensitive rapid test. If the screen returns positive at or above federally established cutoff concentrations, the specimen moves to confirmatory testing using gas chromatography/mass spectrometry (GC-MS), which precisely identifies and quantifies the substance. GC-MS results are considered the gold standard in forensic toxicology."
      },
      {
        heading: "The Role of the Medical Review Officer",
        body: "Non-negative laboratory results are never reported directly to the employer. They first go to a federally certified Medical Review Officer (MRO) — a licensed physician with specialized training in occupational medicine and drug testing science. The MRO protects both the donor and the employer from false positives.\n\nThe MRO contacts the donor to determine whether a legitimate medical explanation exists for the positive result — a valid prescription for opioids, for example, could explain an opiate-positive result. If a satisfactory medical explanation is provided, the MRO may report the result as negative or cancelled. Only after MRO review is a verified positive reported to the employer's Designated Employer Representative."
      },
      {
        heading: "Split Specimen Rights and Donor Protections",
        body: "Federal DOT regulations require every collection to include a split specimen. Bottle A (the primary specimen) is tested by the laboratory. Bottle B (the split) is stored frozen at the original laboratory. When a primary specimen returns a verified positive, adulterated, or substituted result, the donor has 72 hours to request testing of the split specimen at a different HHS-certified laboratory.\n\nThe split must return a confirmed positive for the same substance — or confirmed adulterated or substituted — for the original result to stand. If the split specimen fails to reconfirm, the MRO reports the entire result as cancelled. This split specimen process is one of the most important protections for donors who believe a positive result is in error."
      }
    ],
    relatedService: "drug-screening",
    related: ["dot-drug-testing-guide", "mobile-blood-draw-at-home"]
  },
  {
    slug: "mobile-wellness-screenings",
    title: "Mobile Wellness Screenings: Bringing Preventive Care to Your Door",
    headline: "Mobile Wellness Screenings: Why Preventive Care Should Come to You",
    description:
      "Mobile wellness screenings bring blood pressure checks, cholesterol panels, glucose testing, and preventive health assessments directly to your home, workplace, or community site — no clinic required.",
    category: "Wellness",
    categorySlug: "wellness",
    dateISO: "2025-08-05",
    date: "August 5, 2025",
    readTime: "5 min read",
    author: { name: "Tiffany Clinton, CPT, RMA", role: "CEO & Founder, 1 Stikk Mobile" },
    image: "/images/training/training-table.jpg",
    imageAlt: "The 1 Stikk Mobile laboratory van set up for community wellness screenings",
    intro:
      "Preventive healthcare is most effective when it's accessible. Wellness screenings — blood pressure checks, cholesterol panels, blood glucose monitoring, BMI assessments — catch problems early, before they become serious. The challenge is that millions of Americans never receive preventive care because getting to a clinic feels like one more obstacle in an already demanding life. Mobile wellness screenings remove that obstacle entirely.",
    sections: [
      {
        heading: "What Is a Mobile Wellness Screening?",
        body: "A mobile wellness screening is a preventive health assessment performed at your location — home, office, senior living facility, or community site — by a certified mobile healthcare professional. The service mirrors what you'd receive at a clinic or employer health fair, minus the travel, scheduling friction, and waiting room.\n\nScreenings can include blood pressure measurement, blood glucose testing, cholesterol and lipid panels, BMI calculation, pulse oximetry, and specimen collection for any physician-ordered laboratory panels. Comprehensive metabolic panels, complete blood counts, and thyroid screenings are among the most commonly requested."
      },
      {
        heading: "Who Should Schedule a Wellness Screening",
        body: "Anyone who hasn't had a routine health screening in the past year should consider scheduling one — regardless of age or perceived health status. Many serious conditions, including hypertension, pre-diabetes, and high cholesterol, produce no noticeable symptoms in their early stages. Routine screening is the only way to catch them before they escalate.\n\nPatients over 50, individuals with a family history of cardiovascular disease or diabetes, adults in high-stress or sedentary occupations, and anyone managing obesity or metabolic syndrome benefit especially from regular preventive screenings. New mothers in the postpartum period also commonly use mobile wellness services for follow-up monitoring."
      },
      {
        heading: "Employer Wellness Programs: A Smart Investment",
        body: "For employers, mobile wellness screenings at the workplace represent a measurable return on investment. Employees who receive preventive care and early diagnosis miss fewer workdays due to preventable illness. Health screenings at the worksite also signal a genuine organizational commitment to workforce well-being — a factor that influences recruitment and retention.\n\n1 Stikk Mobile coordinates corporate wellness events for organizations of any size. From small businesses to large employers, we bring certified healthcare professionals and the necessary equipment directly to your facility. Health fairs, scheduled group screenings, and individual appointment-based visits are all available."
      },
      {
        heading: "How to Prepare for a Mobile Wellness Screening",
        body: "If your screening includes a fasting blood panel — glucose, lipids, or a comprehensive metabolic panel — avoid food and caloric beverages for 8–12 hours before your appointment. Plain water and essential medications are generally permitted, but confirm fasting requirements with your ordering provider or our scheduling team.\n\nWear comfortable, loose-fitting clothing for easy access to your arm and blood pressure cuff placement. Keep a brief list of current medications, supplements, and known health conditions available. The visit typically takes 15–30 minutes, and results are sent to your provider or directly to you based on the service type."
      },
      {
        heading: "Community Health Fairs and Non-Profit Outreach",
        body: "Mobile wellness screenings are not only for individuals and employers — they're a cornerstone of community health equity. 1 Stikk Mobile's non-profit programming brings health fairs and wellness screenings to underserved neighborhoods, community centers, churches, and public housing communities where residents may otherwise go years without preventive care.\n\nPartner organizations — nonprofits, faith communities, schools, and municipal agencies — can collaborate with 1 Stikk Mobile to design and host community health events tailored to local needs. Bringing care to the people is not just our business model; it's our mission."
      }
    ],
    relatedService: "wellness",
    related: ["mobile-blood-draw-at-home", "phlebotomy-training-career"]
  },
  {
    slug: "mobile-dna-paternity-testing",
    title: "Mobile DNA & Paternity Testing at Home: How It Works",
    headline: "Mobile DNA & Paternity Testing: Accurate, Private Results at Home",
    description:
      "Learn how mobile DNA and paternity testing works at home — legal vs. at-home tests, chain of custody, accuracy, cost, and how 1 Stikk Mobile collects samples privately at your door.",
    category: "Genetic Testing",
    categorySlug: "genetic-testing",
    dateISO: "2026-01-12",
    date: "January 12, 2026",
    readTime: "7 min read",
    author: { name: "Tiffany Clinton, CPT, RMA", role: "CEO & Founder, 1 Stikk Mobile" },
    image: "/images/services/dna-forensic.webp",
    imageAlt: "Mobile DNA paternity testing collection kit with cheek swabs and chain-of-custody documentation",
    intro:
      "Questions about biological relationships deserve answers that are accurate, private, and legally sound. Mobile DNA and paternity testing brings the entire collection process to your home — a trained professional swabs each participant, documents the chain of custody, and ships samples to an accredited laboratory. Whether you need a personal answer or a court-admissible result, understanding how mobile DNA testing works helps you choose the right option the first time.",
    sections: [
      {
        heading: "How Does Mobile DNA & Paternity Testing Work?",
        body: "Mobile DNA testing works by collecting a buccal (cheek) swab from each participant at your location, then sending those samples to an accredited DNA laboratory for analysis. A certified collector verifies identities, photographs participants when a legal test is requested, and seals each swab in a tamper-evident envelope. Results typically return within 2–5 business days.\n\nThe science is the same regardless of where the sample is collected. Modern paternity tests examine at least 16–24 genetic markers (STR loci) and produce a probability of paternity exceeding 99.99% for an inclusion, or 0% for an exclusion. The convenience of an at-home collection never reduces the accuracy of the result."
      },
      {
        heading: "Legal vs. At-Home DNA Tests: What's the Difference?",
        body: "An at-home (personal knowledge) DNA test is collected by the participants themselves and gives the same lab accuracy — but because no neutral third party verified identities, the result cannot be used in court. These are perfect for personal peace of mind.\n\nA legal DNA test follows a documented chain of custody: a neutral certified collector verifies government-issued ID, photographs participants, and seals samples. Only legal tests are admissible for child support, custody, immigration (where AABB accreditation is required), birth certificate changes, and estate matters. 1 Stikk Mobile performs collections for both, so you choose based on how the result will be used."
      },
      {
        heading: "What Types of Relationship DNA Tests Are Available?",
        body: "Paternity testing (alleged father and child) is the most requested, but mobile collection supports the full range of relationship testing. Maternity, sibling (full or half), grandparent, avuncular (aunt/uncle), and twin zygosity tests are all possible when the alleged parent is unavailable.\n\nAncestry and health-related genetic screening can also be collected the same way. For immigration cases, samples must be processed by an AABB-accredited laboratory and follow strict identity documentation. Our team helps you confirm which test answers your specific question before any sample is taken — avoiding repeat collections and wasted fees."
      },
      {
        heading: "How Accurate and Private Is Mobile DNA Testing?",
        body: "Accredited paternity testing is among the most reliable lab tests performed: an inclusion result reports 99.99%+ probability of paternity, and an exclusion is reported as 0% with complete certainty. Buccal swabs are non-invasive and just as accurate as blood for relationship testing.\n\nPrivacy is built into the mobile model. Collections happen in your home rather than a public lab lobby, samples are sealed in front of you, and results are released only to the authorized parties. For sensitive family situations, this discretion is often the deciding factor in choosing mobile collection over a clinic visit."
      },
      {
        heading: "How to Prepare for Your Mobile DNA Collection",
        body: "Preparation is simple. Each participant should bring a valid government-issued photo ID for legal tests; for a minor child, the parent or legal guardian provides consent and the child's documentation. Avoid eating, drinking, smoking, or chewing gum for about 30 minutes before a cheek swab to keep the sample clean.\n\nDecide in advance whether you need a legal or personal test, since the collection process differs. Have all participants available at the same appointment when possible. Your 1 Stikk Mobile collector handles the swabbing, labeling, photography, and secure shipping — the entire visit usually takes under 20 minutes."
      }
    ],
    faqs: [
      { q: "Is an at-home paternity test as accurate as a legal one?", a: "Yes. The laboratory analysis is identical and equally accurate — both report 99.99%+ for an inclusion and 0% for an exclusion. The only difference is that a legal test adds a verified chain of custody, which is required for court, child support, immigration, and birth certificate use." },
      { q: "How long do mobile DNA test results take?", a: "Most paternity and relationship results are returned within 2–5 business days after the accredited laboratory receives the samples. Expedited options are sometimes available. Your collector will confirm the timeline for your specific test at the appointment." },
      { q: "Can a paternity test be done without the mother?", a: "Yes. A standard paternity test only requires samples from the alleged father and the child. Including the mother's sample can strengthen the statistical result, but it is not required for an accurate, conclusive answer." },
      { q: "Do you offer DNA testing for immigration cases?", a: "Yes. Immigration DNA testing must be processed by an AABB-accredited laboratory with strict identity verification and chain of custody. We collect samples following those requirements and coordinate shipping to the appropriate accredited lab." }
    ],
    relatedService: "genetic-testing",
    related: ["mobile-blood-draw-at-home", "drug-test-chain-of-custody"]
  },
  {
    slug: "onsite-employee-drug-testing",
    title: "On-Site Employee Drug Testing: An Employer's Guide",
    headline: "On-Site Employee Drug Testing: The Complete Employer's Guide",
    description:
      "How on-site and mobile workplace drug testing works for employers — DOT vs. non-DOT, random programs, reasonable suspicion, cost savings, and how to stay compliant in 2026.",
    category: "Employer Resources",
    categorySlug: "employer-resources",
    dateISO: "2026-01-05",
    date: "January 5, 2026",
    readTime: "8 min read",
    author: { name: "Tiffany Clinton, CPT, RMA", role: "CEO & Founder, 1 Stikk Mobile" },
    image: "/images/services/buccal-swab.webp",
    imageAlt: "Mobile drug testing collection supplies set up on-site at an employer workplace",
    intro:
      "Every hour an employee spends driving to an off-site collection facility is an hour of lost productivity — and a window where a sample can be tampered with or a no-show derails a hiring decision. On-site employee drug testing flips the model: a certified collector comes to your workplace, tests your team where they already are, and keeps a clean chain of custody from start to finish. Here's how employers build a compliant, cost-effective program.",
    sections: [
      {
        heading: "What Is On-Site Employee Drug Testing?",
        body: "On-site employee drug testing is a service where a certified collector travels to your workplace to perform drug and alcohol screening — urine, oral fluid, or hair — instead of sending employees to an off-site clinic. Results follow the same laboratory and Medical Review Officer (MRO) process as any collection.\n\nThe model is built for speed and control. Pre-employment, random, post-accident, and reasonable-suspicion tests can all be handled on location, often for an entire shift in a single visit. Employers eliminate travel time, reduce no-shows, and shrink the window for specimen substitution — all while keeping operations running."
      },
      {
        heading: "DOT vs. Non-DOT Workplace Testing",
        body: "DOT testing is federally mandated for safety-sensitive employees under agencies like FMCSA, FAA, and FRA. It requires the five-panel urine screen, a federal Custody and Control Form, split specimens, and MRO review — every step governed by 49 CFR Part 40. There is no flexibility in panels or cutoffs.\n\nNon-DOT testing is employer-defined. You choose the panel (5, 10, or 12 substances), the specimen type, and the cutoff levels, guided by your written policy and state law. Many employers run both programs: DOT for regulated drivers and a customized non-DOT program for the rest of the workforce. A clear, written policy is the legal backbone of either program."
      },
      {
        heading: "Types of Workplace Drug Tests Employers Use",
        body: "Pre-employment testing screens candidates before a start date and is the most common test type. Random testing — selecting employees through a defensible, unpredictable process — is the strongest deterrent and is required in DOT programs at federally set rates.\n\nPost-accident testing follows workplace incidents per your policy and OSHA guidance, while reasonable-suspicion testing is triggered when trained supervisors document specific, observable behavior. Return-to-duty and follow-up testing apply after a violation and treatment. On-site collection supports all of these, including rapid response for post-accident situations where timing is critical."
      },
      {
        heading: "The Business Case: Cost, Compliance, and Safety",
        body: "The direct savings are obvious — no paid travel time, fewer missed appointments, and the ability to test a whole crew at once. The larger return is risk reduction: a documented testing program supports workers' compensation discounts in many states, strengthens negligent-hiring defenses, and reduces accident-related liability.\n\nCompliance is where programs fail most often. Errors in chain of custody, an untrained collector, or an inconsistent policy can invalidate a result or expose you to a wrongful-termination claim. Using certified collectors and an MRO for every non-negative result protects both the employer and the employee — and keeps your program legally defensible."
      },
      {
        heading: "How to Set Up an On-Site Testing Program",
        body: "Start with a written drug and alcohol policy that defines which tests apply, the consequences of a violation, and employee rights. Confirm your state's specific notice and consent requirements, since these vary widely. Then choose your panels and specimen types based on your industry and risk profile.\n\nNext, partner with a mobile provider that supplies certified collectors, a relationship with an accredited lab, and MRO services. Schedule recurring random selections and a clear post-accident protocol so supervisors know exactly what to do. 1 Stikk Mobile builds and manages on-site programs end to end — including DOT consortium management and SAP referrals."
      }
    ],
    faqs: [
      { q: "How much does on-site employee drug testing cost?", a: "Pricing depends on panel size, specimen type, the number of employees, and whether MRO services and program management are included. On-site testing often lowers total cost by eliminating paid travel time and reducing no-shows. We provide custom employer quotes based on your program needs." },
      { q: "Can you test our whole workforce in one visit?", a: "Yes. On-site collection is designed for volume — we can screen an entire shift or department in a single scheduled visit, which is ideal for random selections, post-incident events, and large pre-employment batches." },
      { q: "What's the difference between DOT and non-DOT testing?", a: "DOT testing is federally mandated for safety-sensitive roles and follows fixed panels, forms, and procedures under 49 CFR Part 40. Non-DOT testing is employer-defined — you choose the panel, specimen type, and cutoffs based on your written policy and state law." },
      { q: "Do employers need a written drug testing policy?", a: "Yes. A clear written policy is essential for legal defensibility. It defines which tests apply, employee rights and consent, and the consequences of a violation. State requirements vary, so the policy should be reviewed for your jurisdiction." }
    ],
    relatedService: "drug-screening",
    related: ["dot-drug-testing-guide", "drug-test-chain-of-custody"]
  },
  {
    slug: "start-mobile-phlebotomy-business",
    title: "How to Start a Mobile Phlebotomy Business in 2026",
    headline: "How to Start a Mobile Phlebotomy Business: A Step-by-Step Guide",
    description:
      "A practical, step-by-step guide to starting a mobile phlebotomy business — certification, licensing, equipment, lab partnerships, pricing, and how to win your first clients.",
    category: "Training & Career",
    categorySlug: "training-career",
    dateISO: "2025-12-28",
    date: "December 28, 2025",
    readTime: "9 min read",
    author: { name: "Tiffany Clinton, CPT, RMA", role: "CEO & Founder, 1 Stikk Mobile" },
    image: "/images/site/founder.webp",
    imageAlt: "Mobile phlebotomy business owner preparing a collection bag before a home visit",
    intro:
      "Mobile phlebotomy is one of the fastest-growing corners of healthcare — driven by an aging population, the rise of home health, and patients who simply want care to come to them. If you're a certified phlebotomist or a healthcare entrepreneur, a mobile lab business can be launched lean and scaled deliberately. This guide walks through the real steps, from certification to your first paying client, based on what actually works in the field.",
    sections: [
      {
        heading: "What Does It Take to Start a Mobile Phlebotomy Business?",
        body: "To start a mobile phlebotomy business you need phlebotomy certification, the proper business registration and licensing, liability insurance, collection equipment, and a relationship with a CLIA-certified laboratory to process specimens. With those pieces in place, you can begin serving patients, clinics, and home-health agencies.\n\nThe barrier to entry is lower than most healthcare ventures because you don't need a physical lab — you collect and transport specimens to a partner lab. The real work is in compliance, dependable logistics, and building referral relationships. Start lean: one trained collector, a reliable vehicle, and a tight service area you can serve well."
      },
      {
        heading: "Step 1: Get Certified and Build Your Skills",
        body: "Earn a recognized phlebotomy certification — the CPT (NHA) or PBT (ASCP) are the most widely accepted. A few states (including California, Louisiana, Nevada, and Washington) have additional licensing requirements, so verify your state's rules before launching.\n\nBeyond the credential, mobile work demands confidence with difficult draws, pediatric and geriatric patients, and unfamiliar home environments. Hands-on volume matters more than anything. Many new owners shadow experienced mobile phlebotomists or complete mentorship-based training before taking solo appointments — it's the fastest way to build the judgment field work requires."
      },
      {
        heading: "Step 2: Register, License, and Insure Your Business",
        body: "Choose a legal structure (an LLC is the common choice for liability protection), register with your state, and obtain an EIN. Research local business licenses and any healthcare-specific permits your state requires for specimen collection and transport.\n\nInsurance is non-negotiable: carry professional liability (malpractice) and general liability coverage at minimum. If you'll handle protected health information, build HIPAA-compliant processes from day one. Proper bloodborne-pathogen and biohazard transport protocols — and a medical-waste disposal contract — keep you compliant and protect your reputation."
      },
      {
        heading: "Step 3: Set Up Equipment and a Lab Partnership",
        body: "Your starting kit is modest: collection tubes, needles and safety devices, tourniquets, gauze, antiseptic, sharps containers, biohazard transport bags, and temperature-controlled carriers. A reliable vehicle and an organized mobile cart round out the setup.\n\nThe most important partnership is with a CLIA-certified reference laboratory that accepts courier or mobile-collected specimens. Establish your account, learn their requisition and labeling requirements, and confirm courier pickup or drop-off logistics. Many new businesses also partner with established mobile labs for overflow work while they build their own client base."
      },
      {
        heading: "Step 4: Price Your Services and Win Your First Clients",
        body: "Mobile phlebotomy revenue comes from convenience fees on top of standard draw charges, contracts with home-health agencies and clinics, employer wellness events, and partnerships with telehealth and at-home testing companies. Build pricing that covers travel time, supplies, and your margin — not just the draw itself.\n\nYour first clients usually come from relationships, not ads. Reach out to home-health agencies, assisted-living facilities, concierge physicians, and local clinics that lack their own draw staff. Deliver flawless, on-time service to your earliest patients and referrals will follow. 1 Stikk Mobile offers one-on-one consulting and mentorship for clinicians launching exactly this kind of business."
      }
    ],
    faqs: [
      { q: "Do I need a lab to start a mobile phlebotomy business?", a: "No — you don't need to build your own lab. You collect and transport specimens to a CLIA-certified reference laboratory that processes them. Establishing that lab partnership and following their labeling and logistics requirements is one of the most important early steps." },
      { q: "How much does it cost to start a mobile phlebotomy business?", a: "Startup costs are relatively low compared to most healthcare ventures because no physical lab is required. Typical early expenses include certification, business registration, insurance, collection supplies, biohazard transport, and a reliable vehicle. Many founders start lean with a single collector." },
      { q: "Is mobile phlebotomy profitable?", a: "It can be. Revenue comes from convenience fees, home-health and clinic contracts, employer wellness events, and telehealth partnerships. Profitability depends on dependable logistics, a tight service area, and strong referral relationships rather than heavy advertising." },
      { q: "What certifications do I need?", a: "A recognized phlebotomy certification such as the CPT (NHA) or PBT (ASCP) is the foundation. Some states add their own licensing requirements, so confirm your state's rules. Strong hands-on experience with difficult, pediatric, and geriatric draws is essential for mobile work." }
    ],
    relatedService: "business-solutions",
    related: ["phlebotomy-training-career", "mobile-blood-draw-at-home"]
  },
  {
    slug: "mobile-phlebotomy-homebound-seniors",
    title: "Mobile Phlebotomy for Homebound & Senior Patients",
    headline: "Mobile Phlebotomy for Homebound & Senior Patients: A Caregiver's Guide",
    description:
      "How mobile phlebotomy helps homebound and senior patients get blood work without leaving home — safety, Medicare considerations, what to expect, and how caregivers can prepare.",
    category: "Patient Care",
    categorySlug: "patient-care",
    dateISO: "2025-12-20",
    date: "December 20, 2025",
    readTime: "6 min read",
    author: { name: "Tiffany Clinton, CPT, RMA", role: "CEO & Founder, 1 Stikk Mobile" },
    image: "/images/training/training-guidance.jpg",
    imageAlt: "A certified mobile phlebotomist performing a gentle blood draw for a senior patient at home",
    intro:
      "For homebound seniors and patients with limited mobility, a routine blood draw can mean arranging transportation, navigating a waiting room, and risking exposure or a fall — all for a 10-minute procedure. Mobile phlebotomy removes every one of those obstacles. A certified, compassionate professional comes to the home, performs the draw safely, and handles everything else. For families and caregivers, it's often the single biggest relief in a loved one's care routine.",
    sections: [
      {
        heading: "What Is Mobile Phlebotomy for Homebound Patients?",
        body: "Mobile phlebotomy for homebound patients is an in-home blood draw service where a certified phlebotomist travels to a patient's residence — a private home, assisted-living apartment, or nursing facility — to collect specimens ordered by their physician. The samples are then transported to a CLIA-certified lab for processing.\n\nThis service is designed for people who cannot easily travel: seniors with mobility limitations, patients recovering from surgery, those managing chronic illness, and individuals with conditions that make leaving home risky. The care meets the same clinical standard as any outpatient draw — it simply comes to the patient instead of the other way around."
      },
      {
        heading: "Why At-Home Draws Are Safer for Seniors",
        body: "For older adults, every trip out of the home carries real risk: falls in parking lots and lobbies, exposure to illness in crowded waiting rooms, and the disorientation that unfamiliar environments can cause for patients with dementia. An at-home draw eliminates all of these.\n\nStaying in a familiar, comfortable setting also reduces anxiety, which can make veins easier to access and the whole experience calmer. Phlebotomists trained in geriatric care know how to work with fragile or rolling veins, thin skin, and patients who bruise easily — skills that directly improve comfort and reduce repeat sticks for senior patients."
      },
      {
        heading: "Does Medicare or Insurance Cover Mobile Blood Draws?",
        body: "Coverage depends on the specific plan and the medical necessity of the tests ordered by the physician. The laboratory analysis itself is often covered the same way as any lab work, while a separate mobile collection or travel fee may apply and is not always reimbursed. Homebound patients receiving skilled home-health services may have draws coordinated through that benefit.\n\nBecause rules vary, the best step is to confirm specifics with the patient's plan and ordering provider before the visit. Our scheduling team helps families understand what to expect, what documentation the physician should provide, and how any out-of-pocket convenience fee works — so there are no surprises."
      },
      {
        heading: "What to Expect During an In-Home Visit",
        body: "The phlebotomist arrives within the scheduled window, introduces themselves, and verifies the patient's identity and the physician's test orders. They select a comfortable, well-lit spot, position the patient safely — often seated in a favorite chair — and perform the draw efficiently and gently.\n\nSpecimens are labeled at the bedside, sealed, and packaged for transport per lab protocol. The entire visit usually takes 15–20 minutes. For caregivers, there's nothing to clean up and no follow-up logistics — results are routed to the ordering physician or the patient portal exactly as they would be from a clinic."
      },
      {
        heading: "How Caregivers Can Prepare for the Appointment",
        body: "A little preparation makes the visit smooth. If the tests require fasting, confirm the window with the provider and keep the patient hydrated with water, which makes veins easier to access. Have the physician's order, insurance card, and a current medication list ready.\n\nChoose a comfortable, well-lit area and clear a small space for the phlebotomist to work. Keep the patient warm, since cold can constrict veins. If the patient has a preferred arm or a history of difficult draws, share that up front — it helps the phlebotomist plan and keeps the experience as gentle as possible for your loved one."
      }
    ],
    faqs: [
      { q: "Does Medicare cover mobile blood draws for homebound patients?", a: "Coverage varies by plan and medical necessity. Lab analysis is often covered like standard lab work, while a separate mobile collection or travel fee may apply and isn't always reimbursed. Homebound patients in skilled home-health care may have draws coordinated through that benefit. Confirm specifics with the plan and provider." },
      { q: "Is an at-home blood draw safe for elderly patients?", a: "Yes — it's often safer. It eliminates fall risk during travel and exposure to illness in waiting rooms, and keeps patients calm in a familiar setting. Phlebotomists experienced in geriatric care are skilled with fragile veins, thin skin, and patients who bruise easily." },
      { q: "How long does a home visit take?", a: "Most in-home draws take about 15–20 minutes from arrival to departure. The phlebotomist verifies identity and orders, performs the draw gently, labels and packages the specimens, and handles transport — with no cleanup for the family." },
      { q: "Can you draw blood from patients with difficult veins?", a: "Yes. Mobile phlebotomists are trained for difficult draws, including rolling, fragile, or hard-to-find veins common in seniors. Sharing a patient's history of difficult draws and any preferred arm in advance helps the phlebotomist plan for a comfortable, single-stick experience when possible." }
    ],
    relatedService: "routine-collections",
    related: ["mobile-blood-draw-at-home", "mobile-wellness-screenings"]
  }
];

export const articleMap = Object.fromEntries(articles.map((a) => [a.slug, a]));

export const sectionTargets = {};

export { BadgeCheck, FlaskConical, Microscope, Stethoscope, TestTube2, Users };
