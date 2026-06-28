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

// Booking destinations
export const myriadUrl = "https://myriad.health/book?token=WnjFcnpNSCsatghXix";
export const calendlyUrl =
  "https://calendly.com/1stikkmobile-meeting/health?hide_event_type_details=1&hide_gdpr_banner=1&background_color=121212&text_color=ffffff&primary_color=e3b505";
export const calendlyBookingUrl = "https://calendly.com/1stikkmobile-meeting/health";

export const mainPhone = "(877) 217-8455";
export const mainPhoneDialHref = "tel:8772178455";
export const afterHoursPhone = "(318) 512-0170";
export const afterHoursPhoneHref = "tel:3185120170";

// Training-only contact — (318) 512-0170 · Ext. 205
export const trainingPhone = "(318) 512-0170";
export const trainingPhoneHref = "tel:3185120170";
export const trainingPhoneExt = "205";
export const contactEmail = "collection.lab@1stikkmobile.com";
export const faxLine = "(318) 383-0842";
export const officeHoursText = "Open 24 Hours · Monday to Sunday";
export const labPortalUrl = "https://1stikkmobilelaboratory.org";
export const facebookUrl = "https://www.facebook.com/share/1Adzhmj8YD/";

// Services (mega menu) — each has its own detail page
export const services = [
  {
    title: "Routine Collections",
    slug: "routine-collections",
    icon: Droplets,
    tag: "For patients",
    book: "patient",
    summary: "Professional blood draws and specimen collection brought to your home, work, or facility.",
    points: [
      "Routine blood draws and follow-up labs",
      "Specimen collection (blood, urine, saliva, stool)",
      "At-home and bedside lab services",
      "Standing and timed physician-ordered collections"
    ]
  },
  {
    title: "Wellness",
    slug: "wellness",
    icon: HeartPulse,
    tag: "For patients",
    book: "patient",
    summary: "Preventive screenings and ongoing wellness support that meet people where they are.",
    points: [
      "Wellness clinic services",
      "Preventive health screenings",
      "Chronic care and health monitoring",
      "Postpartum care and urgent care support"
    ]
  },
  {
    title: "Drug Screening",
    slug: "drug-screening",
    icon: ShieldCheck,
    tag: "Patients & employers",
    book: "patient",
    summary: "DOT and non-DOT testing for individuals and employers, handled with clean chain-of-custody.",
    points: [
      "DOT-compliant drug testing",
      "Non-DOT drug and alcohol screening",
      "Employer and pre-employment programs",
      "Return-to-duty testing"
    ]
  },
  {
    title: "Genetic Testing",
    slug: "genetic-testing",
    icon: Dna,
    tag: "For patients",
    book: "patient",
    summary: "Personalized DNA and paternity testing brought directly to you for accurate, private results.",
    points: [
      "DNA and paternity testing",
      "Personalized genetic insights",
      "Private, professional collection",
      "Clear guidance through every step"
    ]
  },
  {
    title: "Behavioral Health",
    slug: "behavioral-health",
    icon: Brain,
    tag: "For patients",
    book: "call",
    summary: "Compassionate support and screening for behavioral health and substance-recovery needs.",
    points: [
      "Substance abuse program support",
      "Behavioral health screenings",
      "24-hour crisis hotline guidance",
      "Respectful, confidential coordination"
    ]
  },
  {
    title: "Non Profit",
    slug: "non-profit",
    icon: HandHeart,
    tag: "Community",
    book: "contact",
    summary: "Community health fairs and outreach that bring care to underserved neighborhoods.",
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
    tag: "For organizations",
    book: "training",
    summary: "On-site testing, partnerships, and lab-business mentorship for clinics, schools, and facilities.",
    points: [
      "On-site testing for clinics, schools, and facilities",
      "Partnership plans for home care and mobile providers",
      "Lab business consulting and startup mentorship",
      "Mobile health fairs and corporate wellness"
    ]
  }
];

export const serviceMap = Object.fromEntries(services.map((s) => [s.slug, s]));

// Training & Programs — each has its own detail page at /training/[slug]
export const trainingPrograms = [
  {
    slug: "phlebotomy",
    title: "Phlebotomy Training & Certification",
    icon: Syringe,
    image: "/images/training/training-hands-on.jpg",
    imageAlt: "Hands-on venipuncture practice during a 1 Stikk Mobile training session",
    gallery: [
      { src: "/images/training/training-hands-on.jpg", alt: "Participant practicing venipuncture with instructor guidance" },
      { src: "/images/training/training-guidance.jpg", alt: "Instructor pointing out the vein placement before a blood draw" },
      { src: "/images/training/training-polaroids.jpg", alt: "Training day collage showing multiple mobile lab practicum setups" }
    ],
    summary: "Hands-on venipuncture, capillary collection, and certification preparation for new careers.",
    description:
      "Hands-on phlebotomy certification training for beginners and career changers. Learn venipuncture, specimen handling, patient care, and prepare for national certification — no experience required.",
    who: [
      "Complete beginners with no medical experience",
      "CNAs and medical assistants expanding their skills",
      "Career changers entering the healthcare field",
      "Students preparing for national certification exams"
    ],
    learn: [
      "Venipuncture technique — arm, hand, and difficult draws",
      "Capillary collection and fingerstick procedures",
      "Proper specimen labeling and safe handling",
      "Patient safety, comfort, and infection control",
      "National phlebotomy certification exam preparation"
    ],
    includes: [
      "Hands-on lab practice with real equipment",
      "Mock collection sessions with instructor feedback",
      "One-on-one guidance from a certified professional",
      "Certification preparation materials",
      "Certificate of completion"
    ],
    duration: "Flexible scheduling · self-paced with live guidance"
  },
  {
    slug: "drug-screening",
    title: "Drug Screening Training",
    icon: ShieldCheck,
    image: "/images/training/training-table.jpg",
    imageAlt: "Specimen collection workstation set up for drug screening training",
    gallery: [
      { src: "/images/training/training-table.jpg", alt: "Specimen supplies organized on a table ready for screening practice" },
      { src: "/images/training/training-instructor.jpg", alt: "Instructor supervising a butterfly needle insertion" },
      { src: "/images/training/training-polaroids.jpg", alt: "Colorful polaroid snapshots from a drug screening workshop" }
    ],
    summary: "Learn DOT and non-DOT collection, chain-of-custody, and mock-collection procedures.",
    description:
      "DOT and non-DOT drug screening training for healthcare workers, clinic staff, and HR professionals. Learn proper collection, chain of custody, compliance procedures, and how to run a screening program.",
    who: [
      "Healthcare workers adding a high-demand skill",
      "Clinic and urgent care staff",
      "HR professionals managing workplace drug testing",
      "Business owners setting up a screening program"
    ],
    learn: [
      "DOT-compliant urine specimen collection procedures",
      "Non-DOT drug and alcohol testing protocols",
      "Chain-of-custody documentation and required forms",
      "Breath alcohol testing (BAT) procedures",
      "Regulatory compliance and donor privacy rules"
    ],
    includes: [
      "Mock collection practice sessions",
      "DOT regulation overview and reference materials",
      "Documentation and form completion training",
      "Live Q&A with a certified instructor",
      "Certificate of completion"
    ],
    duration: "1–2 day intensive · or flexible self-paced option"
  },
  {
    slug: "workforce",
    title: "Workforce & Healthcare Programs",
    icon: GraduationCap,
    image: "/images/training/training-instructor.jpg",
    imageAlt: "Instructor guiding a student while preparing a butterfly needle",
    gallery: [
      { src: "/images/training/training-instructor.jpg", alt: "Trainer demonstrating mobile lab techniques" },
      { src: "/images/training/training-guidance.jpg", alt: "Hands-on coaching during a skills lab" },
      { src: "/images/training/training-02.png", alt: "Medical assistant program flyer for 1 Stikk Mobile" }
    ],
    summary: "Beginner-friendly programs that build job-ready skills for mobile and allied health roles.",
    description:
      "Beginner-friendly workforce and healthcare training that builds job-ready skills for mobile and allied health careers. No prior experience needed — just the desire to serve and grow.",
    who: [
      "Job seekers looking to start a healthcare career",
      "Community members re-entering the workforce",
      "Youth and young adults starting out",
      "Anyone interested in mobile healthcare roles"
    ],
    learn: [
      "Clinical basics and healthcare terminology",
      "Professional communication and patient interaction",
      "Mobile health operations and lab procedures",
      "Job search strategies and resume guidance",
      "Health equity and community care principles"
    ],
    includes: [
      "Skills training with real-world application",
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
    image: "/images/training/training-03.png",
    imageAlt: "Bridge program flyer highlighting 1 Stikk Mobile training support",
    gallery: [
      { src: "/images/training/training-03.png", alt: "Bridge program curriculum overview poster" },
      { src: "/images/training/training-01.png", alt: "Collection training marketing one-sheet" },
      { src: "/images/training/training-table.jpg", alt: "Consulting session showing specimen transport setup" }
    ],
    summary: "Startup mentorship and partnership plans for clinics, home care, and mobile providers.",
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
  { title: "Routine blood draws", icon: Droplets, slug: "routine-collections", book: "patient" },
  { title: "Postpartum care", icon: Baby, slug: "wellness", book: "patient" },
  { title: "Urgent care services", icon: Activity, slug: "wellness", book: "patient" },
  { title: "Employer drug testing", icon: ShieldCheck, slug: "drug-screening", book: "patient" },
  { title: "DNA & paternity testing", icon: Dna, slug: "genetic-testing", book: "patient" },
  { title: "Wellness clinic", icon: HeartPulse, slug: "wellness", book: "patient" }
];

export const testimonials = [
  {
    name: "Darius K.",
    role: "HR Director",
    quote: "We use 1 Stikk for all our employee screenings. Their mobile unit is a lifesaver!"
  },
  {
    name: "Ashley M.",
    role: "Patient",
    quote:
      "1 Stikk helped me avoid the hassle of traveling for blood work. They were on time, professional, and I got my results fast!"
  },
  {
    name: "This can be you",
    role: "Share your experience",
    quote: "We are waiting for you to leave us a review!!!!"
  }
];

export const faqs = [
  {
    q: "What services does 1 Stikk Mobile provide?",
    a: "We provide mobile lab services including blood draws, drug and alcohol testing, genetic testing, wellness support, and specimen collection, along with training programs and business solutions."
  },
  {
    q: "Do you offer at-home or mobile services?",
    a: "Yes. Our certified professionals come directly to your home, workplace, clinic, or facility to provide convenient and reliable healthcare services."
  },
  {
    q: "Do I need medical experience to join your training programs?",
    a: "No. Our training programs are beginner-friendly and designed for individuals with no prior healthcare experience."
  },
  {
    q: "What certifications do you offer?",
    a: "We offer training in phlebotomy, drug screening, mock collections, and medical assistant preparation programs with certification options."
  },
  {
    q: "How do I book a service or appointment?",
    a: "You can book a patient service directly through our Book a Service button, or call our support team at (877) 217-8455 for assistance."
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
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services", mega: "services" },
  { label: "Training & Programs", href: "/training", mega: "training" },
  { label: "Contact Us", href: "/contact" }
];

export const sectionTargets = {
  "/": "top",
  "/about": "founder",
  "/services": "services",
  "/training": "training",
  "/locations": "locations",
  "/contact": "contact",
  "/reviews": "reviews"
};

export { BadgeCheck, FlaskConical, Microscope, Stethoscope, TestTube2, Users };

