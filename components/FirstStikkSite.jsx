"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  ArrowLeft,
  BadgeCheck,
  BriefcaseMedical,
  Building2,
  CalendarCheck,
  ChevronDown,
  CircleHelp,
  ClipboardCheck,
  Droplets,
  ExternalLink,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Home,
  Maximize2,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Stethoscope,
  Syringe,
  TestTube2,
  Users,
  X
} from "lucide-react";

const bookingUrl = "https://calendly.com/1stikkmobile-meeting/health";
const calendlyUrl =
  "https://calendly.com/1stikkmobile-meeting/health?hide_event_type_details=1&hide_gdpr_banner=1&background_color=212121&text_color=ffffff&primary_color=ffc900";
const mainPhone = "(877) 217-8455";
const mainPhoneHref = "tel:8772178455";
const mainPhoneExt = "1 STIKK";
const mainPhoneDialHref = "tel:8772178455,,1";
const afterHoursPhone = "318-512-0170";
const afterHoursPhoneHref = "tel:3185120170";
const contactEmail = "collection.lab@1stikkmobile.com";
const faxLine = "(318) 383-0842";
const faxLineHref = "tel:3183830842";
const officeHours = "Monday to Sunday";
const officeHoursText = "24 HR";

const lanes = [
  {
    title: "Mobile Healthcare Services",
    href: "/services",
    icon: Syringe,
    summary:
      "Professional mobile collection services for patients, families, employers, and facilities that need dependable care outside a traditional lab site.",
    points: ["At-home blood draws", "Specimen collection", "Facility rounds", "Corporate wellness support"]
  },
  {
    title: "Healthcare Provider Solutions",
    href: "/providers",
    icon: Building2,
    summary:
      "A field-ready laboratory collection partner for physicians, telehealth teams, home health agencies, researchers, and long-term care organizations.",
    points: ["Better patient compliance", "Recurring facility support", "Clinical coordination", "Expanded service reach"]
  },
  {
    title: "Education and Training",
    href: "/training",
    icon: GraduationCap,
    summary:
      "Hands-on healthcare training built to develop future phlebotomists, strengthen workforce readiness, and create another pathway into care.",
    points: ["Clinical skill building", "Certification preparation", "Career coaching", "Student support"]
  }
];

const servicesMenu = lanes.map(({ title, href, icon, summary }) => ({
  title,
  href,
  icon,
  text: summary
}));

const nav = [
  { label: "Home", href: "/", id: "top" },
  { label: "Mobile Services", href: "/services", id: "services", menu: servicesMenu },
  { label: "Providers", href: "/providers", id: "providers" },
  { label: "Training", href: "/training", id: "training" },
  { label: "Careers", href: "/careers", id: "careers" },
  { label: "Book", href: "/book", id: "book" },
  { label: "Contact", href: "/contact", id: "contact" }
];

const routeTargets = {
  "/": "top",
  "/services": "services",
  "/providers": "providers",
  "/training": "training",
  "/careers": "careers",
  "/industries": "industries",
  "/about": "mission",
  "/book": "book",
  "/contact": "contact",
  "/reviews": "proof",
  "/lab-quest": "resources",
  "/mockevent": "resources"
};

const careServices = [
  {
    title: "Mobile Phlebotomy",
    slug: "mobile-phlebotomy",
    href: "/services/mobile-phlebotomy",
    icon: Droplets,
    summary:
      "Professional blood draws performed at a patient's home, workplace, assisted living facility, nursing home, or healthcare facility.",
    description:
      "This service is designed for patients who need licensed, respectful collection support without the extra burden of travel, waiting rooms, or missed appointments. We coordinate directly around physician-ordered care and arrive prepared for both one-time and recurring needs.",
    includes: [
      "Routine blood draws for ongoing care and follow-up appointments",
      "Physician ordered labs handled with clear patient identification and collection protocols",
      "Specialty blood collections that require extra handling attention",
      "Standing lab orders for patients needing recurring services",
      "Timed collections completed within a schedule-sensitive window"
    ]
  },
  {
    title: "Mobile Specimen Collection",
    slug: "mobile-specimen-collection",
    href: "/services/mobile-specimen-collection",
    icon: FlaskConical,
    summary:
      "Professional collection of physician-ordered specimens outside of a traditional laboratory setting.",
    description:
      "Patients and providers often need more than a simple blood draw. Our mobile team supports the collection process across multiple specimen types so patients can complete important testing from home, work, or a coordinated care site.",
    includes: [
      "Blood samples collected using mobile phlebotomy protocols",
      "Urine collection with clear labeling and transfer handling",
      "Saliva collection for compatible physician-ordered testing",
      "Stool specimen coordination for ordered diagnostics",
      "Other physician-ordered collections completed when clinically appropriate"
    ]
  },
  {
    title: "Home Lab Collection",
    slug: "home-lab-collection",
    href: "/services/home-lab-collection",
    icon: Home,
    summary:
      "Healthcare professionals travel directly to patients who need care brought closer and made simpler.",
    description:
      "Home collection is especially valuable when the patient should not have to choose between medical follow-through and the stress of getting across town. We help remove transportation barriers while preserving privacy, dignity, and continuity of care.",
    includes: [
      "Elderly patients who benefit from in-home support",
      "Homebound individuals managing ongoing medical needs",
      "Disabled patients needing easier access to routine collection",
      "Patients recovering from surgery who should avoid unnecessary travel",
      "Individuals without dependable transportation",
      "Busy professionals who need flexible collection scheduling"
    ]
  },
  {
    title: "Assisted Living and Nursing Facilities",
    slug: "assisted-living-and-nursing-facilities",
    href: "/services/assisted-living-and-nursing-facilities",
    icon: Building2,
    summary:
      "Routine laboratory collection for facilities that need dependable recurring service.",
    description:
      "We support assisted living, skilled nursing, rehabilitation, memory care, and long-term care settings that need a reliable mobile collection partner able to work within resident schedules and facility workflows.",
    includes: [
      "Assisted living communities",
      "Skilled nursing facilities",
      "Rehabilitation centers",
      "Memory care settings",
      "Long-term care facilities"
    ]
  },
  {
    title: "Employer and Corporate Services",
    slug: "employer-and-corporate-services",
    href: "/services/employer-and-corporate-services",
    icon: ClipboardCheck,
    summary:
      "On-site healthcare collection for businesses that want easier access to screening and wellness support.",
    description:
      "Employers can bring collection services directly to the workplace to reduce logistical friction, improve participation, and support employee health initiatives with a professional healthcare presence.",
    includes: [
      "Employee wellness labs",
      "Health screenings",
      "Corporate testing coordination",
      "Occupational health support"
    ]
  }
];

const careServiceMap = Object.fromEntries(careServices.map((service) => [service.slug, service]));

const providerSolutions = [
  {
    title: "Physician Partnerships",
    summary:
      "Mobile laboratory collection that improves patient compliance while reducing missed lab appointments and unnecessary follow-up delays.",
    points: [
      "Primary care and family medicine",
      "Internal medicine and specialty clinics",
      "Cardiology, endocrinology, nephrology, and oncology support",
      "Concierge medicine and private practice continuity"
    ]
  },
  {
    title: "Telehealth Partnerships",
    summary:
      "Support virtual healthcare providers by completing laboratory collections at the patient's location.",
    points: [
      "Better patient follow-through after remote visits",
      "Improved continuity of care once testing is ordered",
      "Expanded service reach beyond the clinic footprint",
      "Convenient scheduling that fits virtual care models"
    ]
  },
  {
    title: "Home Health Partnerships",
    summary:
      "Work alongside home health agencies to provide laboratory collection for patients already receiving care at home.",
    points: [
      "Aligned collection timing with existing home visits",
      "Reduced burden on patients with complex recovery needs",
      "A cleaner coordination path for clinicians and caregivers"
    ]
  },
  {
    title: "Hospice and Palliative Care Support",
    summary:
      "Compassionate specimen collection services designed for hospice and palliative patients while minimizing unnecessary travel.",
    points: [
      "Patient-centered bedside collection",
      "Respectful scheduling and communication",
      "Reduced disruption for families and care teams"
    ]
  },
  {
    title: "Skilled Nursing and Assisted Living Partnerships",
    summary:
      "Reliable recurring laboratory services for healthcare facilities that need consistency, communication, and field-ready support.",
    points: [
      "Scheduled recurring rounds",
      "Flexible support for resident care plans",
      "Collection workflows that respect facility operations"
    ]
  },
  {
    title: "Clinical Research Support",
    summary:
      "Specimen collection for organizations conducting structured medical studies and research protocols.",
    points: ["Clinical trials", "Research organizations", "Medical studies"]
  },
  {
    title: "Concierge Healthcare Support",
    summary:
      "Premium mobile healthcare support for concierge physicians and private medical practices serving patients who expect convenience and discretion.",
    points: [
      "White-glove scheduling",
      "In-home and on-location collection support",
      "A smoother patient experience for premium practices"
    ]
  }
];

const trainingPrograms = [
  {
    title: "Mobile Phlebotomy Training",
    summary:
      "Hands-on training designed to prepare students for careers in phlebotomy and mobile healthcare support.",
    topics: [
      "Venipuncture",
      "Capillary collections",
      "Patient identification",
      "Infection control",
      "HIPAA",
      "Specimen handling",
      "Safety procedures",
      "Professional communication"
    ]
  },
  {
    title: "Clinical Skills Training",
    summary:
      "Training focused on essential healthcare procedures that build confidence, professionalism, and readiness in real patient-facing environments.",
    topics: ["Infection prevention", "PPE", "Patient care", "Medical documentation", "Professional ethics"]
  },
  {
    title: "CPR and Basic Life Support",
    summary: "Certification course opportunities can be offered when available."
  },
  {
    title: "Continuing Education",
    summary:
      "Professional development for healthcare workers looking to expand their skills and stay prepared for wider care responsibilities."
  },
  {
    title: "Mobile Healthcare Career Preparation",
    summary:
      "Preparation for careers in mobile phlebotomy, home healthcare, clinical laboratory support, and patient care."
  },
  {
    title: "Certification Preparation",
    summary: "Support for students preparing for national certification examinations when applicable."
  },
  {
    title: "Career Placement Assistance",
    summary:
      "Support graduates with resume development, interview preparation, career guidance, and employment opportunities."
  }
];

const hiringRoles = [
  "Physicians",
  "Nurse Practitioners",
  "Physician Assistants",
  "Registered Nurses",
  "Licensed Practical Nurses",
  "Certified Phlebotomists",
  "Medical Assistants",
  "Mobile Healthcare Professionals"
];

const industriesServed = [
  "Primary Care Clinics",
  "Telehealth Providers",
  "Hospitals",
  "Home Health Agencies",
  "Hospice Organizations",
  "Assisted Living Communities",
  "Skilled Nursing Facilities",
  "Rehabilitation Centers",
  "Clinical Research Organizations",
  "Corporate Wellness Programs",
  "Occupational Health Providers",
  "Concierge Medical Practices"
];

const futureServices = [
  "Mobile EKG Services",
  "Mobile Vaccinations",
  "Mobile Wellness Screenings",
  "Mobile Health Assessments",
  "Chronic Disease Monitoring",
  "Remote Patient Monitoring Support",
  "Biometric Screenings",
  "DNA Collection",
  "Drug and Alcohol Testing",
  "Employer Wellness Programs",
  "Insurance Exams",
  "Mobile Health Fairs"
];

const proofGallery = [
  {
    src: "/images/examples/example-03.jpg",
    alt: "A hands-on venipuncture training moment during a 1 Stikk Mobile education session.",
    label: "Hands-on instruction",
    fit: "cover"
  },
  {
    src: "/images/resources/resource-02.jpg",
    alt: "A 1 Stikk Mobile training flyer promoting exam preparation support.",
    label: "Public program promotion",
    fit: "contain"
  },
  {
    src: "/images/resources/resource-09.jpg",
    alt: "A 1 Stikk Mobile care flyer highlighting private and confidential testing support.",
    label: "Care access resource",
    fit: "contain"
  },
  {
    src: "/images/certificates/certificate-01.jpg",
    alt: "A certificate or recognition image connected to 1 Stikk Mobile's public credibility.",
    label: "Visible credibility",
    fit: "contain"
  }
];

const resourceLinks = [
  { href: "https://1stikkmobilelaboratory.org", label: "Laboratory portal", external: true },
  { href: "/lab-quest", label: "Lab Quest resources" },
  { href: "/mockevent", label: "Mock event page" },
  {
    href: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAC6D2ttUNzUwN0ZWSE1CN1VTM01BRUZIWlRUOTVVMy4u",
    label: "Training interest form",
    external: true
  },
  { href: "https://square.link/u/m51BDCSi", label: "Program payment link", external: true },
  { href: "https://www.facebook.com/share/1Adzhmj8YD/", label: "Facebook updates", external: true }
];

const faqs = [
  {
    q: "What can I book?",
    a: "You can request help for mobile lab collections, blood draws, provider partnerships, health screenings, training, and community wellness coordination."
  },
  {
    q: "Who do you serve?",
    a: "1 Stikk Mobile supports individuals, families, employers, long-term care settings, schools, clinics, and community partners who need healthcare support brought closer."
  },
  {
    q: "Can healthcare organizations partner with you?",
    a: "Yes. Physicians, telehealth teams, home health agencies, hospice providers, employers, and research organizations can reach out for recurring or custom support."
  },
  {
    q: "Is this for emergencies?",
    a: "No. For life-threatening emergencies, call 911 immediately. 1 Stikk Mobile provides non-emergency mobile healthcare access, training, and collection coordination."
  }
];

function scrollToSection(id) {
  const node = document.getElementById(id);
  if (!node) return;
  node.scrollIntoView({ behavior: "smooth", block: "start" });
}

function CareRoute() {
  return (
    <svg className="care-route" viewBox="0 0 760 460" role="img" aria-label="Illustration of a mobile healthcare route">
      <defs>
        <linearGradient id="routeLine" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--gold)" />
          <stop offset="55%" stopColor="var(--teal)" />
          <stop offset="100%" stopColor="var(--gold)" />
        </linearGradient>
      </defs>
      <path className="care-route-path" d="M46 330C126 310 152 120 262 128C362 135 386 340 501 334C621 326 628 124 712 112" />
      <g className="care-route-stop">
        <circle cx="46" cy="330" r="22" />
        <path d="M36 330h20M46 320v20" />
      </g>
      <g className="care-route-stop">
        <circle cx="262" cy="128" r="22" />
        <path d="M252 128h20M262 118v20" />
      </g>
      <g className="care-route-stop">
        <circle cx="501" cy="334" r="22" />
        <path d="M491 334h20M501 324v20" />
      </g>
      <g className="care-route-stop">
        <circle cx="712" cy="112" r="22" />
        <path d="M702 112h20M712 102v20" />
      </g>
      <g className="care-route-unit">
        <rect x="312" y="222" width="120" height="54" rx="10" />
        <path d="M432 240h42l28 36h-70z" />
        <path d="M344 250h26M357 237v26" />
        <circle cx="348" cy="282" r="15" />
        <circle cx="428" cy="282" r="15" />
      </g>
    </svg>
  );
}

function PulseBand() {
  return (
    <svg className="pulse-band" viewBox="0 0 1440 120" role="img" aria-label="Animated healthcare pulse line">
      <path className="pulse-band-base" d="M0 66H214l38-40 48 83 57-106 48 63h164l28-32 36 32h226l32-58 46 58h503" />
      <path className="pulse-band-line" d="M0 66H214l38-40 48 83 57-106 48 63h164l28-32 36 32h226l32-58 46 58h503" />
    </svg>
  );
}

function VitalsPanel() {
  return (
    <div className="vitals-panel" aria-hidden="true">
      <div className="vitals-panel-head">
        <span>Mobile readiness</span>
        <span>Field support</span>
      </div>
      <svg className="vitals-panel-graphic" viewBox="0 0 420 260" role="presentation">
        <defs>
          <linearGradient id="vitalsLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--gold)" />
            <stop offset="50%" stopColor="var(--teal)" />
            <stop offset="100%" stopColor="var(--gold)" />
          </linearGradient>
        </defs>
        <path className="vitals-grid-line" d="M30 72H390" />
        <path className="vitals-grid-line" d="M30 130H390" />
        <path className="vitals-grid-line" d="M30 188H390" />
        <path
          className="vitals-line"
          d="M30 130H92l18-24 22 58 24-96 22 130 26-68 22 0 18-28 20 28h38l16-18 18 18h100"
        />
        <circle className="vitals-node" cx="156" cy="68" r="8" />
        <circle className="vitals-node" cx="248" cy="130" r="8" />
        <circle className="vitals-node" cx="356" cy="130" r="8" />
        <g className="vitals-cross">
          <rect x="302" y="54" width="54" height="54" rx="14" />
          <path d="M329 66v30M314 81h30" />
        </g>
      </svg>
      <div className="vitals-panel-foot">
        <strong>Designed for homes, facilities, and community sites.</strong>
        <p>Clean intake, clear scheduling, and a calmer path to getting collections completed.</p>
      </div>
    </div>
  );
}

function CalendlyEmbed({ compact = false, height = 760 }) {
  const [ready, setReady] = useState(false);
  const embedRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const detectIframe = () => {
      const hasIframe = !!embedRef.current?.querySelector("iframe");
      if (hasIframe && !cancelled) {
        setReady(true);
        return;
      }

      attempts += 1;
      if (attempts < 40) {
        window.setTimeout(detectIframe, 250);
      }
    };

    detectIframe();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className={`calendar-embed${compact ? " is-compact" : ""}`}>
      <div
        ref={embedRef}
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        style={{ minWidth: 320, height }}
      />
      {!ready ? (
        <div className="calendar-fallback">
          <p>Loading the scheduler. If it takes a moment, use the booking link below.</p>
          <a href={bookingUrl}>Open Calendly booking page</a>
        </div>
      ) : null}
    </div>
  );
}

function Header({ mobileOpen, setMobileOpen }) {
  return (
    <header className="site-header">
      <div className="service-alert" role="status">
        <Activity aria-hidden="true" />
        <span>Mobile service scheduling is open.</span>
        <a href={mainPhoneHref}>Call {mainPhone}</a>
        <a href={bookingUrl}>Book a consultation</a>
      </div>
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="1 Stikk Mobile home">
          <Image src="/images/logo/logo.jpg" alt="1 Stikk Mobile logo" width={62} height={62} priority />
          <span>
            <strong>1 Stikk Mobile</strong>
            <small>We Always Care</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <div className="nav-item-wrap" key={item.href}>
              <Link className="nav-link" href={item.href}>
                {item.label}
                {item.menu ? <ChevronDown aria-hidden="true" size={16} /> : null}
              </Link>
              {item.menu ? (
                <div className="services-menu" aria-label="Services menu">
                  {item.menu.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link className="service-menu-item" href={service.href} key={service.href}>
                        <Icon aria-hidden="true" />
                        <span>
                          <strong>{service.title}</strong>
                          <small>{service.text}</small>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="btn btn-quiet" href={mainPhoneDialHref}>
            <Phone aria-hidden="true" />
            {mainPhone}
          </a>
          <a className="btn btn-primary" href={bookingUrl}>
            <CalendarCheck aria-hidden="true" />
            Book
          </a>
        </div>
        <button
          className="menu-button"
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <div className={`mobile-panel ${mobileOpen ? "is-open" : ""}`}>
        {nav.map((item) => (
          <Link href={item.href} key={item.href} onClick={() => setMobileOpen(false)}>
            {item.label}
          </Link>
        ))}
        <a href={mainPhoneDialHref} onClick={() => setMobileOpen(false)}>
          Call {mainPhone}
        </a>
        <a href={bookingUrl} onClick={() => setMobileOpen(false)}>
          Book a consultation
        </a>
      </div>
    </header>
  );
}

function FloatingCta() {
  return (
    <div className="floating-actions" aria-label="Quick actions">
      <a className="floating-action floating-action-call" href={mainPhoneDialHref}>
        <Phone aria-hidden="true" />
        <span>Call now</span>
      </a>
      <a className="floating-action floating-action-book" href={bookingUrl}>
        <CalendarCheck aria-hidden="true" />
        <span>Book a call</span>
      </a>
    </div>
  );
}

function SectionLabel({ icon: Icon, children }) {
  return (
    <span className="section-label">
      <Icon aria-hidden="true" />
      {children}
    </span>
  );
}

function ExpandableMedia({
  src,
  alt,
  sizes,
  caption,
  badge,
  className,
  fit = "cover",
  priority = false,
  onExpand
}) {
  return (
    <figure className={`${className} expandable-media`} role="group">
      <button
        className="expandable-media-button"
        type="button"
        onClick={() => onExpand({ src, alt, fit })}
        aria-label={`Expand image: ${alt}`}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
        <span className="expandable-media-hint">
          <Maximize2 aria-hidden="true" />
          <span>Expand image</span>
        </span>
      </button>
      {badge ? <figcaption>{badge}</figcaption> : null}
      {caption ? <figcaption className="expandable-media-caption">{caption}</figcaption> : null}
    </figure>
  );
}

function ImageLightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={image.alt}>
      <button className="image-lightbox-backdrop" type="button" aria-label="Close expanded image" onClick={onClose} />
      <div className="image-lightbox-panel">
        <button className="image-lightbox-close" type="button" aria-label="Close expanded image" onClick={onClose}>
          <X aria-hidden="true" />
        </button>
        <div className={`image-lightbox-frame ${image.fit === "contain" ? "image-lightbox-frame-contain" : ""}`}>
          <Image src={image.src} alt={image.alt} fill sizes="100vw" priority />
        </div>
        <p>{image.alt}</p>
      </div>
    </div>
  );
}

function ServiceDetailPage({ service }) {
  const Icon = service.icon;

  return (
    <>
      <section className="service-detail-hero">
        <div className="container service-detail-shell">
          <Link className="back-link" href="/services">
            <ArrowLeft aria-hidden="true" />
            Back to mobile services
          </Link>
          <div className="service-detail-copy reveal is-visible">
            <SectionLabel icon={Icon}>Mobile Healthcare Service</SectionLabel>
            <h1>{service.title}</h1>
            <p className="hero-lead">{service.summary}</p>
            <p>{service.description}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={bookingUrl}>
                <CalendarCheck aria-hidden="true" />
                Book this service
              </a>
              <a className="btn btn-dark" href={mainPhoneDialHref}>
                <Phone aria-hidden="true" />
                Call {mainPhone}
              </a>
            </div>
          </div>
          <article className="service-detail-card reveal is-visible">
            <div className="service-band-title">
              <Icon aria-hidden="true" />
              <h2>What this service includes</h2>
            </div>
            <ul>
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container related-services">
          <div className="reveal is-visible">
            <SectionLabel icon={TestTube2}>Other mobile services</SectionLabel>
            <h2>Choose another service if you need a different kind of support.</h2>
          </div>
          <div className="service-stack service-stack-linked">
            {careServices
              .filter((item) => item.slug !== service.slug)
              .map((item) => {
                const RelatedIcon = item.icon;
                return (
                  <Link className="service-band service-band-link reveal is-visible" href={item.href} key={item.slug}>
                    <div className="service-band-head">
                      <div className="service-band-title">
                        <RelatedIcon aria-hidden="true" />
                        <h3>{item.title}</h3>
                      </div>
                      <p className="service-band-summary">{item.summary}</p>
                    </div>
                    <div className="service-band-body service-band-body-single">
                      <p>{item.description}</p>
                      <span className="service-band-cta">
                        View service details <ArrowRight aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default function FirstStikkSite({ slug = [] }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedImage, setExpandedImage] = useState(null);
  const activeService = slug[0] === "services" && slug[1] ? careServiceMap[slug[1]] : null;

  useEffect(() => {
    document.documentElement.classList.add("js");
    if (activeService) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    const target = routeTargets[pathname] || (pathname.startsWith("/services") ? "services" : null);
    if (!target || target === "top") return;
    const timeout = window.setTimeout(() => scrollToSection(target), 80);
    return () => window.clearTimeout(timeout);
  }, [activeService, pathname]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!expandedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setExpandedImage(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expandedImage]);

  return (
    <>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main id="top">
        {activeService ? (
          <ServiceDetailPage service={activeService} />
        ) : (
          <>
        <section className="hero">
          <div className="container hero-shell">
            <div className="hero-copy reveal is-visible">
              <SectionLabel icon={ShieldCheck}>Mobile healthcare access across Monroe and nearby communities</SectionLabel>
              <h1>Care that travels. Collection that follows through. Training that builds the workforce.</h1>
              <p className="hero-lead">
                1 Stikk Mobile Inc. brings professional mobile phlebotomy, specimen collection, provider
                support, workforce training, and community-centered health access directly to homes,
                facilities, workplaces, and underserved neighborhoods.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={bookingUrl}>
                  <CalendarCheck aria-hidden="true" />
                  Book a consultation
                </a>
                <a className="btn btn-dark" href={mainPhoneDialHref}>
                  <Phone aria-hidden="true" />
                  Call {mainPhone}
                  <span className="phone-ext">Ext. {mainPhoneExt}</span>
                </a>
              </div>
              <div className="hero-detail-grid">
                <article>
                  <strong>Patients and families</strong>
                  <p>At-home blood draws and specimen collection for people who need care brought closer.</p>
                </article>
                <article>
                  <strong>Providers and facilities</strong>
                  <p>Reliable field collection support that helps reduce missed lab appointments and care delays.</p>
                </article>
                <article>
                  <strong>Students and future hires</strong>
                  <p>Hands-on healthcare training that creates a path into mobile care and phlebotomy.</p>
                </article>
              </div>
            </div>

            <div className="hero-visual reveal is-visible">
              <div className="hero-frame">
                <div className="hero-frame-top">
                  <span>Mobile route coordination</span>
                  <span>In-home collection</span>
                  <span>Provider support</span>
                </div>
                <CareRoute />
                <div className="hero-photo-grid">
                  <ExpandableMedia
                    className="hero-photo hero-photo-main media-frame media-frame-photo"
                    src="/images/examples/example-01.jpg"
                    alt="A clinician providing care support during a mobile healthcare visit."
                    sizes="(max-width: 900px) 88vw, 33vw"
                    badge="Mobile patient care"
                    priority
                    onExpand={setExpandedImage}
                  />
                  <ExpandableMedia
                    className="hero-photo media-frame media-frame-photo"
                    src="/images/examples/example-05.jpg"
                    alt="A blood collection procedure being performed in a mobile care setting."
                    sizes="(max-width: 900px) 44vw, 20vw"
                    badge="On-site blood draws"
                    onExpand={setExpandedImage}
                  />
                  <ExpandableMedia
                    className="hero-photo media-frame media-frame-poster"
                    src="/images/resources/resource-10.jpg"
                    alt="A graphic describing 1 Stikk Mobile's healthcare service categories."
                    sizes="(max-width: 900px) 44vw, 20vw"
                    badge="Service overview"
                    fit="contain"
                    onExpand={setExpandedImage}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hero-pulse-wrap" aria-hidden="true">
            <PulseBand />
          </div>
        </section>

        <section className="route-strip">
          <div className="container route-strip-inner">
            <span>Homes</span>
            <span>Workplaces</span>
            <span>Assisted living</span>
            <span>Skilled nursing</span>
            <span>Clinics</span>
            <span>Community events</span>
          </div>
        </section>

        <section className="section lane-section">
          <div className="container lane-heading reveal">
            <SectionLabel icon={Activity}>Three clear paths through the organization</SectionLabel>
            <h2>Choose the part of 1 Stikk Mobile that fits what you need right now.</h2>
            <p>
              Whether someone needs a home visit, a provider partnership, or training, the site should
              make that path feel obvious immediately and keep the next action close.
            </p>
          </div>
          <div className="container lane-grid">
            {lanes.map((lane) => {
              const Icon = lane.icon;
              return (
                <Link className="lane-card reveal" href={lane.href} key={lane.title}>
                  <div className="lane-card-top">
                    <Icon aria-hidden="true" />
                    <strong>{lane.title}</strong>
                  </div>
                  <p>{lane.summary}</p>
                  <ul>
                    {lane.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <span>
                    Explore this lane <ArrowRight aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container split-intro">
            <div className="sticky-intro reveal">
              <SectionLabel icon={TestTube2}>Mobile Healthcare Services</SectionLabel>
              <h2>Detailed, professional collection support built around patient access.</h2>
              <p>
                This division is for patients, families, assisted living teams, employers, and care
                coordinators who need a professional collection team to travel where the service is
                actually needed. Every program is designed to reduce barriers, protect dignity, and help
                physician-ordered care get completed on time.
              </p>
              <div className="intro-note">
                <strong>Who this helps most</strong>
                <p>
                  Elderly patients, homebound patients, post-surgical recovery cases, transportation-limited
                  households, busy professionals, and facilities managing recurring specimen needs.
                </p>
              </div>
            </div>
            <div className="service-stack">
              {careServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Link className="service-band service-band-link reveal" href={service.href} key={service.title}>
                    <div className="service-band-head">
                      <div className="service-band-title">
                        <Icon aria-hidden="true" />
                        <h3>{service.title}</h3>
                      </div>
                      <p className="service-band-summary">{service.summary}</p>
                    </div>
                    <div className="service-band-body">
                      <p>{service.description}</p>
                      <div>
                        <ul>
                          {service.includes.slice(0, 4).map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                        <span className="service-band-cta">
                          View service details <ArrowRight aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section providers-section" id="providers">
          <div className="container providers-shell">
            <div className="providers-visual reveal">
              <ExpandableMedia
                className="feature-photo media-frame media-frame-photo"
                src="/images/examples/example-06.jpg"
                alt="Mobile collection kits and healthcare materials prepared for provider support."
                sizes="(max-width: 900px) 90vw, 34vw"
                onExpand={setExpandedImage}
              />
              <VitalsPanel />
            </div>
            <div className="providers-copy reveal">
              <SectionLabel icon={BriefcaseMedical}>Healthcare Provider Solutions</SectionLabel>
              <h2>Partnership support for physicians, telehealth, home health, hospice, and clinical teams.</h2>
              <p>
                When providers can extend collection support into the home, facility, or workplace, patient
                compliance gets easier. This service line is built to reduce missed lab appointments,
                improve follow-through, and give organizations a dependable mobile partner without losing
                professionalism, privacy, or continuity.
              </p>
            </div>
          </div>
          <div className="container provider-list">
            {providerSolutions.map((solution) => (
              <article className="provider-row reveal" key={solution.title}>
                <div>
                  <h3>{solution.title}</h3>
                  <p>{solution.summary}</p>
                </div>
                <ul>
                  {solution.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section training-section" id="training">
          <div className="container training-shell">
            <div className="training-copy reveal">
              <SectionLabel icon={GraduationCap}>Education and Training</SectionLabel>
              <h2>Practical healthcare training that supports careers and strengthens community access.</h2>
              <p>
                Students should be able to see the skills they will build, the kind of care settings they
                can work in, and how this training connects directly to real field opportunities.
              </p>
              <div className="curriculum-callout">
                <strong>Students can prepare for careers in</strong>
                <p>Mobile phlebotomy, home healthcare, clinical laboratory support, patient care, and wider allied health roles.</p>
              </div>
            </div>
            <div className="training-media reveal">
              <div className="training-photo-rail">
                <ExpandableMedia
                  className="rail-photo media-frame media-frame-photo"
                  src="/images/examples/example-07.jpg"
                  alt="A student taking part in a practical phlebotomy training exercise."
                  sizes="(max-width: 900px) 78vw, 20vw"
                  onExpand={setExpandedImage}
                />
                <ExpandableMedia
                  className="rail-photo rail-photo-tall media-frame media-frame-poster"
                  src="/images/resources/resource-03.jpg"
                  alt="A flyer presenting 1 Stikk Mobile's education and certification-related offerings."
                  sizes="(max-width: 900px) 78vw, 18vw"
                  fit="contain"
                  onExpand={setExpandedImage}
                />
                <ExpandableMedia
                  className="rail-photo media-frame media-frame-poster"
                  src="/images/resources/resource-07.jpg"
                  alt="A self-paced healthcare training flyer from 1 Stikk Mobile."
                  sizes="(max-width: 900px) 78vw, 18vw"
                  fit="contain"
                  onExpand={setExpandedImage}
                />
              </div>
            </div>
          </div>
          <div className="container training-programs">
            {trainingPrograms.map((program) => (
              <article className="training-row reveal" key={program.title}>
                <div className="training-row-head">
                  <Stethoscope aria-hidden="true" />
                  <h3>{program.title}</h3>
                </div>
                <p>{program.summary}</p>
                {program.topics ? (
                  <ul>
                    {program.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section workforce-section" id="careers">
          <div className="container workforce-grid">
            <div className="reveal">
              <SectionLabel icon={Users}>Careers and hiring</SectionLabel>
              <h2>Join a care model built around mobility, dignity, and dependable follow-through.</h2>
              <p>
                Growth here is not abstract. The organization needs clinicians, trainers, and support staff
                who can help care travel farther and reach people more consistently.
              </p>
              <div className="pill-cloud">
                {hiringRoles.map((role) => (
                  <span key={role}>{role}</span>
                ))}
              </div>
            </div>
            <div className="reveal" id="industries">
              <SectionLabel icon={BadgeCheck}>Industries served and growth paths</SectionLabel>
              <h2>The service model already fits a wide healthcare network and leaves room to expand.</h2>
              <div className="industry-block">
                <strong>Industries served</strong>
                <div className="pill-cloud">
                  {industriesServed.map((industry) => (
                    <span key={industry}>{industry}</span>
                  ))}
                </div>
              </div>
              <div className="industry-block">
                <strong>Future services</strong>
                <div className="pill-cloud pill-cloud-accent">
                  {futureServices.map((service) => (
                    <span key={service}>{service}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section proof-section" id="proof">
          <div className="container proof-shell">
            <div className="proof-copy reveal">
              <SectionLabel icon={ShieldCheck}>Proof, mission, and leadership</SectionLabel>
              <h2>Proof of service, training, and leadership should feel immediate, visual, and human.</h2>
              <p>
                The strongest trust signals here are real people, real training moments, and materials the
                community already sees. That combination builds credibility without making the homepage feel
                like a document dump.
              </p>
              <div className="mission-quote">
                <HeartHandshake aria-hidden="true" />
                <div>
                  <p>
                    Beloved, I pray that you may prosper in all things and be in health, just as your soul
                    prospers.
                  </p>
                  <span>3 John 1:2</span>
                </div>
              </div>
            </div>
            <div className="proof-gallery">
              {proofGallery.map((item) => (
                <ExpandableMedia
                  className={`proof-tile proof-tile-media reveal ${
                    item.fit === "contain" ? "media-frame media-frame-poster" : "media-frame media-frame-photo"
                  }`}
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  sizes="(max-width: 900px) 86vw, 22vw"
                  caption={item.label}
                  fit={item.fit}
                  onExpand={setExpandedImage}
                />
              ))}
            </div>
          </div>

          <div className="container mission-grid" id="mission">
            <ExpandableMedia
              className="leader-photo reveal media-frame media-frame-photo"
              src="/images/ceo/tiffany-clinton.jpg"
              alt="Tiffany Clinton, CEO of 1 Stikk Mobile."
              sizes="(max-width: 900px) 90vw, 28vw"
              onExpand={setExpandedImage}
            />
            <div className="mission-copy reveal">
              <SectionLabel icon={MapPin}>About the mission</SectionLabel>
              <h2>A mobile laboratory and training organization built around access, dignity, and follow-through.</h2>
              <p>
                1 Stikk Mobile serves Monroe and surrounding communities with a care model designed for
                people who should not be left behind by distance, mobility limitations, scheduling
                conflicts, or fragmented follow-up systems. The organization brings care closer while
                building the next generation of healthcare workers at the same time.
              </p>
              <div className="area-grid">
                {[
                  "Monroe and nearby communities",
                  "Home visits and bedside collection",
                  "Assisted living and skilled nursing support",
                  "Clinics, employers, and telehealth partners",
                  "Training, outreach, and community wellness events",
                  "Non-emergency healthcare access coordination"
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section resources-section" id="resources">
          <div className="container resources-grid">
            <div className="reveal">
              <SectionLabel icon={ClipboardCheck}>Quick links and next steps</SectionLabel>
              <h2>Important forms, payments, program links, and updates should stay easy to reach.</h2>
              <p>
                People looking for the next step should not have to hunt through social posts or old flyers.
                This section keeps the most useful links in one clean, high-contrast area.
              </p>
            </div>
            <div className="resource-list reveal">
              {resourceLinks.map((link) => (
                <a href={link.href} key={link.label}>
                  <span>{link.label}</span>
                  {link.external ? <ExternalLink aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section booking-section" id="book">
          <div className="container booking-grid">
            <div className="booking-copy reveal">
              <SectionLabel icon={CalendarCheck}>Book service</SectionLabel>
              <h2>Choose a time for a consultation, or call if you need help deciding what to request.</h2>
              <p>
                Start with the calendar below for mobile lab support, provider partnerships, workforce
                training questions, community wellness coordination, or any general request that needs a
                guided next step.
              </p>
              <div className="contact-card">
                <Phone aria-hidden="true" />
                <div>
                  <strong>{mainPhone}</strong>
                  <span>Main number ext. {mainPhoneExt}</span>
                  <span>After Hours: {afterHoursPhone}</span>
                </div>
              </div>
            </div>
            <div className="calendar-frame reveal">
              <CalendlyEmbed />
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-shell">
            <div className="reveal">
              <SectionLabel icon={CircleHelp}>Before you call</SectionLabel>
              <h2>Clear answers help the first step feel easier and more welcoming.</h2>
            </div>
            <div className="faq-list">
              {faqs.map((item) => (
                <article className="faq-item reveal" key={item.q}>
                  <CircleHelp aria-hidden="true" />
                  <div>
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" id="contact">
          <div className="container final-cta-inner">
            <div className="final-cta-copy reveal">
              <SectionLabel icon={HeartHandshake}>Bring care closer</SectionLabel>
              <h2>Bring the lab, the support, or the training directly to the place where it is needed most.</h2>
              <p>
                Use the calendar here to request mobile care, training information, provider support,
                or a community wellness conversation without leaving the page.
              </p>
            </div>
            <div className="final-cta-scheduler reveal">
              <div className="hero-actions">
                <a className="btn btn-primary" href={bookingUrl}>
                  <CalendarCheck aria-hidden="true" />
                  Book on Calendly
                </a>
                <a className="btn btn-light" href={mainPhoneDialHref}>
                  <Phone aria-hidden="true" />
                  Call {mainPhone}
                </a>
              </div>
              <div className="calendar-frame is-compact">
                <CalendlyEmbed compact height={700} />
              </div>
            </div>
          </div>
        </section>
          </>
        )}
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <Link className="brand" href="/">
            <Image src="/images/logo/logo.jpg" alt="1 Stikk Mobile logo" width={54} height={54} />
            <span>
              <strong>1 Stikk Mobile</strong>
              <small>We Always Care</small>
            </span>
          </Link>
          <div>
            <strong>Call</strong>
            <a href={mainPhoneDialHref}>
              {mainPhone} ext. {mainPhoneExt}
            </a>
            <a href={afterHoursPhoneHref}>After Hours {afterHoursPhone}</a>
          </div>
          <div>
            <strong>Contact Us</strong>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <a href={faxLineHref}>{faxLine} - fax</a>
          </div>
          <div>
            <strong>Office Hours</strong>
            <span>{officeHours}</span>
            <span>{officeHoursText}</span>
          </div>
          <div>
            <strong>Follow us online</strong>
            <a href="https://www.facebook.com/share/1Adzhmj8YD/">Facebook updates</a>
            <span>This workplace is inclusive and accessible.</span>
            <span>We encourage individuals with disabilities to apply.</span>
          </div>
          <div>
            <strong>Book</strong>
            <a href={bookingUrl}>Health consultation</a>
            <a href="https://1stikkmobilelaboratory.org">Laboratory portal</a>
          </div>
          <div>
            <strong>Legal</strong>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
          <p>Copyright 2026 1 Stikk Mobile Inc. All rights reserved.</p>
        </div>
      </footer>

      <FloatingCta />
      <ImageLightbox image={expandedImage} onClose={() => setExpandedImage(null)} />
    </>
  );
}
