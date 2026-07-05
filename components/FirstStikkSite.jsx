"use client";

import {
    ArrowLeft,
    ArrowRight,
    Award,
    BadgeCheck,
    Briefcase,
    CalendarCheck,
    Check,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Clock,
    CreditCard,
    HeartHandshake,
    Mail,
    MapPin,
    Menu,
    Minus,
    Phone,
    Plus,
    Quote,
    ShieldCheck,
    Sparkles,
    Star,
    Users,
    X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
    afterHoursPhone,
    afterHoursPhoneHref,
    articleMap,
    articles,
    calendlyBookingUrl,
    calendlyUrl,
    contactEmail,
    corePractices,
    faqs,
    facebookUrl,
    labPortalUrl,
    mainPhone,
    mainPhoneDialHref,
    nav,
    officeHoursText,
    patientBookingUrl,
    programData,
    serviceMap,
    serviceStates,
    services,
    squareTrainingUrl,
    testimonials,
    trainingPhone,
    trainingPhoneHref,
    trainingFaqs,
    trainingProgramMap,
    trainingPrograms
} from "./data";

function isActivePath(itemHref, pathname) {
  if (itemHref === "/") return pathname === "/";
  return pathname === itemHref || pathname.startsWith(itemHref + "/");
}

function trackSchedule() {
  if (typeof window !== "undefined" && typeof fbq === "function") {
    fbq("track", "Schedule");
  }
}

function trackCheckout() {
  if (typeof window !== "undefined" && typeof fbq === "function") {
    fbq("track", "InitiateCheckout");
  }
}

function bookHref(type) {
  if (type === "training") return squareTrainingUrl;
  if (type === "business") return calendlyBookingUrl;
  if (type === "contact") return "/contact";
  if (type === "patient") return patientBookingUrl;
  return mainPhoneDialHref;
}

function scrollToSection(id) {
  const node = document.getElementById(id);
  if (!node) return;
  node.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ----------------------------------------------------- Service card media */

function ServiceSvgMedia({ type, alt }) {
  if (type === "genetic") {
    return (
      <svg className="service-card-svg" viewBox="0 0 320 180" fill="none" aria-label={alt}>
        <rect width="320" height="180" fill="var(--gold-soft)" />
        <g stroke="var(--teal-deep)" strokeWidth="6" strokeLinecap="round">
          <path d="M80 140 c30 -90 60 -90 90 0" />
          <path d="M110 140 c30 -90 60 -90 90 0" />
          <path d="M80 40 c30 90 60 90 90 0" />
          <path d="M110 40 c30 90 60 90 90 0" />
        </g>
        <g fill="var(--gold-deep)">
          <circle cx="95" cy="90" r="6" />
          <circle cx="125" cy="70" r="6" />
          <circle cx="155" cy="110" r="6" />
          <circle cx="185" cy="90" r="6" />
        </g>
        <text x="160" y="160" textAnchor="middle" fill="var(--ink-2)" fontSize="14" fontWeight="700" fontFamily="var(--font-sans)">DNA & Paternity Tests</text>
      </svg>
    );
  }
  if (type === "heart") {
    return (
      <svg className="service-card-svg" viewBox="0 0 320 180" fill="none" aria-label={alt}>
        <rect width="320" height="180" fill="var(--gold-soft)" />
        <path d="M160 140 C100 90 60 80 60 50 C60 25 85 15 110 25 C135 35 150 55 160 55 C170 55 185 35 210 25 C235 15 260 25 260 50 C260 80 220 90 160 140Z" fill="var(--teal)" opacity="0.9" />
        <circle cx="235" cy="60" r="12" fill="var(--gold)" />
        <path d="M235 60 v-6 M235 60 v6 M235 60 h-6 M235 60 h6" stroke="var(--white)" strokeWidth="3" strokeLinecap="round" />
        <text x="160" y="165" textAnchor="middle" fill="var(--ink-2)" fontSize="14" fontWeight="700" fontFamily="var(--font-sans)">Behavioral Health Support</text>
      </svg>
    );
  }
  return null;
}

function ServiceCardMedia({ service }) {
  if (service.image?.startsWith("svg:")) {
    return <ServiceSvgMedia type={service.image.replace("svg:", "")} alt={service.imageAlt} />;
  }
  return (
    <div className="service-card-media">
      <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 360px" />
    </div>
  );
}

/* ----------------------------------------------------- Animated SVG decor */

function PulseLine({ className = "" }) {
  return (
    <svg className={`anim-svg pulse-line ${className}`} viewBox="0 0 320 60" fill="none" aria-hidden="true">
      <path
        className="pulse-path"
        d="M0 30 H70 l9 -22 l13 44 l11 -34 l9 24 H180 l9 -15 l11 15 H320"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FloatingMotifs() {
  return (
    <div className="floating-motifs" aria-hidden="true">
      <svg className="motif motif-1" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z" fill="currentColor" />
      </svg>
      <svg className="motif motif-2" viewBox="0 0 24 24" fill="none">
        <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <svg className="motif motif-3" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4" />
        <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg className="motif motif-4" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z" fill="currentColor" />
      </svg>
    </div>
  );
}

const trainingSteps = [
  { Icon: CreditCard, title: "Buy the $75 mock kit first", text: "Start by purchasing the mock package so your training process can be opened right away." },
  { Icon: CalendarCheck, title: "Book your call", text: "After you buy, schedule your call with 1 Stikk so we can guide you, answer questions, and get your access ready." },
  { Icon: Users, title: "Receive your mock kit in the mail", text: "Your mock kit is shipped to you with the materials needed to complete your mock collections." },
  { Icon: BadgeCheck, title: "Complete the mock with live monitoring", text: "A 1 Stikk professional monitors your mock exam live, supports you through the process, and helps make sure you can pass with confidence." }
];

const trainingFeatureCards = [
  {
    key: "phlebotomy",
    title: "Phlebotomy",
    subtitle: "Hands-on blood draw training is available, but this track starts with a booking call instead of the $75 mock kit.",
    points: ["Book first to review timing and fit", "Hands-on skill-building with live guidance", "Kept visible and easy to scan on every screen"]
  },
  {
    key: "drug-screening",
    title: "Drug Screening Mock Kit",
    subtitle: "Start here: buy the $75 mock kit first, then book your call and complete live-monitored mocks with 1 Stikk support.",
    points: ["Primary offer on this page", "DOT and non-DOT workflow support", "Only track with the $75 mock kit checkout"]
  },
  {
    key: "medical-assistant",
    title: "Medical Assistant",
    subtitle: "Supportive clinical foundations for students building confidence in patient intake and specimen readiness, with a booking-first flow.",
    points: ["Book first to discuss availability", "Vitals and chart-prep support", "Designed to complement the training lineup"]
  }
];

const trainingOfferItems = [
  "Portal access emailed to you",
  "Scheduling and live virtual monitoring from 1 Stikk",
  "Live Q&A support",
  "Five required mock collections",
  "Mock kit and testing materials provided by 1 Stikk",
  "Employee handbook and compliance-focused binder setup guidance",
  "Certificate of completion",
  "1 Stikk Mobile drug screen collector registration onboarding"
];

const trainingSearchSignals = [
  {
    title: "Mock drug screening kits with real workflow support",
    text: "This is not a generic supply order. 1 Stikk pairs the shipped kit with portal setup, live observation, and paperwork coaching so students can practice the full collector flow."
  },
  {
    title: "Built for DOT and non-DOT collector readiness",
    text: "Students practice chain-of-custody habits, collector steps, and compliance expectations that employers and screening programs actually care about."
  },
  {
    title: "Mobile-first enrollment for faster conversions",
    text: "On phone, the page keeps the mock kit as the primary action, reduces competing choices, and keeps help one tap away with a direct training call option."
  }
];

const patientBookingSteps = [
  {
    Icon: Phone,
    title: "Call or book online",
    text: "Tap the phone button to call us, or use the patient booking link if you prefer to request service online."
  },
  {
    Icon: MapPin,
    title: "Tell us who needs care",
    text: "Share the patient name, service needed, location, and best time. Family members can book for a parent or grandparent."
  },
  {
    Icon: HeartHandshake,
    title: "We come to you",
    text: "A certified mobile professional comes to the home, workplace, or facility and handles the visit with care."
  }
];

const trainingAdSteps = [
  {
    Icon: CreditCard,
    title: "Buy the $75 kit",
    text: "Click checkout first. This opens your mock-kit training path."
  },
  {
    Icon: CalendarCheck,
    title: "Book your call",
    text: "After checkout, schedule your call so we can guide your access and next steps."
  },
  {
    Icon: BadgeCheck,
    title: "Complete the mocks",
    text: "Use the shipped kit to practice collector steps with live support."
  }
];

const homeComparisonItems = {
  competitors: [
    "DrugTestCollector.com: $200-$400 and no physical mock kit",
    "Lifeloc-style programs: higher pricing and pre-recorded-only learning",
    "Attorney-led or corporate training brands: expensive and less practical for individual students"
  ],
  oneStikk: [
    "$75 entry point with clear pricing",
    "Real mock drug screening kit shipped to your door",
    "Five live virtual mocks with real-time feedback",
    "Certificate guidance, portal access, and healthcare-provider credibility"
  ]
};

const homeIncludedItems = [
  "Training portal access",
  "Physical mock kit shipped by 1 Stikk",
  "Five live virtual mock collections",
  "Real-time instructor feedback",
  "Certificate of completion guidance",
  "Collector network registration support"
];

const homeProcessSteps = [
  "Enroll for $75",
  "Receive portal access and next-step guidance",
  "Get the physical mock kit shipped to you",
  "Complete the training flow and live mocks"
];

const homeCareerStats = [
  { label: "Training cost", value: "$75", detail: "A low-friction way to add a collector skill." },
  { label: "Live mocks", value: "5", detail: "Observed practice instead of just watching videos." },
  { label: "Typical competitor pricing", value: "$200-$500", detail: "The price gap is one of your clearest differentiators." },
  { label: "Career upside", value: "$35K-$52K", detail: "A practical earning range the strategy file uses to frame ROI." }
];

const certificationPrograms = [
  {
    title: "Alcohol Testing Certification",
    image: "/images/training/program-alcohol-testing.png",
    imageAlt: "Alcohol testing device used for collector certification training",
    description: "Train on alcohol screening workflows, compliance steps, and collector-ready documentation.",
    points: ["Hands-on alcohol testing overview", "Certificate path with $75 enrollment", "Calendly booking with live support"],
    accent: "pulse"
  },
  {
    title: "Clinical & Diagnostic Testing",
    image: "/images/training/program-clinical-testing.png",
    imageAlt: "Clinical diagnostic blood sample used for healthcare training",
    description: "Build confidence with specimen handling, clinical basics, and patient-ready diagnostic workflows.",
    points: ["Clinical collection essentials", "Certificate-backed completion", "Beginner-friendly live scheduling"],
    accent: "cross"
  },
  {
    title: "DOT Compliance Training",
    image: "/images/training/program-dot-compliance.png",
    imageAlt: "DOT compliance urine sample cup used for screening training",
    description: "Learn DOT paperwork, collection standards, and the compliance details employers expect.",
    points: ["DOT forms and chain-of-custody", "Program certificate after training", "Schedule directly with the training team"],
    accent: "shield"
  }
];

function ProgramAccent({ type }) {
  if (type === "cross") {
    return (
      <svg className="program-accent program-accent-cross" viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <circle cx="60" cy="60" r="44" stroke="currentColor" strokeWidth="3" opacity="0.28" />
        <path d="M60 34v52M34 60h52" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg className="program-accent program-accent-shield" viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <path d="M60 20l28 10v24c0 19-12 35-28 46C44 89 32 73 32 54V30l28-10Z" fill="currentColor" opacity="0.12" />
        <path d="M60 20l28 10v24c0 19-12 35-28 46C44 89 32 73 32 54V30l28-10Z" stroke="currentColor" strokeWidth="4" />
        <path d="m48 61 9 9 17-21" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className="program-accent program-accent-pulse" viewBox="0 0 160 90" fill="none" aria-hidden="true">
      <path d="M12 49h32l10-20 14 38 14-28 11 10h55" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="124" cy="49" r="8" fill="currentColor" />
    </svg>
  );
}

function ConversionSteps({ variant = "patient", title, lead, steps, actions }) {
  return (
    <section className={`conversion-steps conversion-steps-${variant}`} aria-labelledby={`${variant}-steps-title`}>
      <div className="container conversion-steps-shell reveal is-visible">
        <div className="conversion-steps-head">
          <span className="eyebrow"><span className="dot" aria-hidden="true" /> Directions</span>
          <h2 id={`${variant}-steps-title`}>{title}</h2>
          {lead ? <p>{lead}</p> : null}
          {actions ? <div className="conversion-steps-actions">{actions}</div> : null}
        </div>
        <div className="conversion-steps-grid">
          {steps.map((step, index) => {
            const Icon = step.Icon;
            return (
              <article className="conversion-step-card" key={step.title}>
                <span className="conversion-step-number">{index + 1}</span>
                <Icon aria-hidden="true" />
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PatientBookingSteps({ compact = false }) {
  return (
    <ConversionSteps
      variant="patient"
      title={compact ? "Book this service in 3 simple steps." : "Need care for yourself, a parent, or a grandparent? Start here."}
      lead={compact ? "No confusion. Choose a button, tell us what is needed, and we come to you." : "The page is built for quick decisions: call if you want help now, or use the patient booking link to request service online."}
      steps={patientBookingSteps}
      actions={
        <>
          <a className="btn btn-primary btn-lg" href={mainPhoneDialHref}><Phone aria-hidden="true" /> Call to Book</a>
          <a className="btn btn-dark btn-lg" href={patientBookingUrl} onClick={trackSchedule}><CalendarCheck aria-hidden="true" /> Book Patient Service</a>
        </>
      }
    />
  );
}

function TrainingAdSteps() {
  return (
    <ConversionSteps
      variant="training"
      title="Do these 3 steps in order."
      lead="Start with checkout. The kit gives you a direct path toward a drug screener/collector career."
      steps={trainingAdSteps}
      actions={
        <>
          <a className="btn btn-primary btn-lg" href={squareTrainingUrl} onClick={trackCheckout}><CreditCard aria-hidden="true" /> Buy the $75 Mock Kit</a>
          <a className="btn btn-dark btn-lg" href={calendlyBookingUrl} onClick={trackSchedule}><CalendarCheck aria-hidden="true" /> Book Your Call</a>
        </>
      }
    />
  );
}

function MockKitOutcomeStrip() {
  return (
    <section className="mock-kit-outcomes" aria-label="What happens after checkout">
      <div className="container mock-kit-outcomes-shell reveal is-visible">
        <div>
          <span className="eyebrow"><span className="dot" aria-hidden="true" /> After you buy</span>
          <h2>Your $75 kit becomes the start of a real drug screener/collector career.</h2>
        </div>
        <ul>
          <li><Check aria-hidden="true" /> You know exactly what to do next</li>
          <li><Check aria-hidden="true" /> You get portal guidance instead of guessing</li>
          <li><Check aria-hidden="true" /> You practice with mock materials and live support</li>
        </ul>
      </div>
    </section>
  );
}

function TrainingFeatureArt({ type, title }) {
  if (type === "phlebotomy") {
    return (
      <svg className="training-feature-svg training-feature-svg-phleb" viewBox="0 0 360 240" fill="none" aria-label={`${title} animated illustration`}>
        <defs>
          <linearGradient id="phlebBg" x1="40" y1="28" x2="312" y2="210" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--gold-soft)" />
            <stop offset="1" stopColor="oklch(98% 0.016 95)" />
          </linearGradient>
          <linearGradient id="bloodFlow" x1="92" y1="0" x2="214" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="oklch(62% 0.19 24)" />
            <stop offset="1" stopColor="oklch(54% 0.17 18)" />
          </linearGradient>
        </defs>
        <rect x="16" y="16" width="328" height="208" rx="28" fill="url(#phlebBg)" />
        <path className="training-feature-orbit" d="M42 190c42-28 90-44 150-44s93 8 126 26" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
        <rect x="74" y="116" width="114" height="32" rx="16" fill="oklch(90% 0.03 82)" />
        <path d="M104 132c10-21 28-37 52-37 16 0 32 8 42 22 6 8 10 18 12 28" stroke="var(--teal-deep)" strokeWidth="6" strokeLinecap="round" />
        <path className="training-feature-flow" d="M92 132h94" stroke="url(#bloodFlow)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="198" cy="131" r="7" fill="var(--gold)" />
        <path d="M205 126l22-12" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round" />
        <path d="M225 114l33 11-18 11-15-22Z" fill="var(--ink)" />
        <rect x="228" y="76" width="46" height="92" rx="14" fill="var(--surface)" stroke="var(--line-strong)" />
        <rect x="236" y="84" width="30" height="14" rx="7" fill="var(--gold-soft)" />
        <rect x="236" y="108" width="30" height="18" rx="9" fill="oklch(83% 0.16 19)" opacity="0.32" />
        <rect x="236" y="132" width="30" height="28" rx="10" fill="oklch(61% 0.18 20)" />
        <circle cx="121" cy="82" r="20" fill="var(--surface)" stroke="var(--line)" />
        <path d="M114 82h14M121 75v14" stroke="var(--teal-deep)" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "drug-screening") {
    return (
      <svg className="training-feature-svg training-feature-svg-drug" viewBox="0 0 360 240" fill="none" aria-label={`${title} animated illustration`}>
        <defs>
          <linearGradient id="drugBg" x1="60" y1="28" x2="318" y2="212" gradientUnits="userSpaceOnUse">
            <stop stopColor="oklch(97% 0.025 190)" />
            <stop offset="1" stopColor="oklch(94% 0.03 220)" />
          </linearGradient>
        </defs>
        <rect x="16" y="16" width="328" height="208" rx="28" fill="url(#drugBg)" />
        <rect x="76" y="74" width="82" height="108" rx="18" fill="var(--surface)" stroke="var(--line-strong)" />
        <rect x="88" y="62" width="58" height="24" rx="10" fill="var(--gold)" />
        <rect x="94" y="108" width="46" height="50" rx="12" fill="oklch(94% 0.018 235)" />
        <path d="M104 122h26" stroke="var(--teal-deep)" strokeWidth="6" strokeLinecap="round" />
        <path d="M104 138h18" stroke="oklch(70% 0.17 30)" strokeWidth="6" strokeLinecap="round" />
        <path d="M104 154h30" stroke="var(--gold-deep)" strokeWidth="6" strokeLinecap="round" />
        <g className="training-feature-scan">
          <rect x="188" y="74" width="96" height="108" rx="20" fill="var(--surface)" stroke="var(--line-strong)" />
          <path d="M208 106h56M208 128h42M208 150h50" stroke="var(--ink-2)" strokeWidth="5" strokeLinecap="round" opacity="0.86" />
          <path d="m208 90 10 10 18-20" stroke="var(--teal-deep)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <rect className="training-feature-scan-bar" x="196" y="112" width="80" height="18" rx="9" fill="var(--gold)" opacity="0.3" />
        </g>
        <path className="training-feature-dots" d="M76 198c24-14 50-21 82-21 33 0 60 5 84 14 24 8 46 12 72 10" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" strokeDasharray="1 14" />
      </svg>
    );
  }

  return (
    <svg className="training-feature-svg training-feature-svg-assistant" viewBox="0 0 360 240" fill="none" aria-label={`${title} illustration`}>
      <rect x="16" y="16" width="328" height="208" rx="28" fill="oklch(97% 0.02 80)" />
      <circle cx="116" cy="96" r="28" fill="var(--surface)" stroke="var(--line)" />
      <path d="M104 96h24M116 84v24" stroke="var(--teal-deep)" strokeWidth="5" strokeLinecap="round" />
      <rect x="166" y="68" width="112" height="118" rx="24" fill="var(--surface)" stroke="var(--line-strong)" />
      <path d="M194 102h56M194 126h56M194 150h38" stroke="var(--ink-2)" strokeWidth="6" strokeLinecap="round" />
      <path d="m248 166 12 12 24-28" stroke="var(--gold-deep)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path className="training-feature-orbit" d="M58 188c44-22 94-32 152-32 42 0 78 6 102 16" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function CertificateShowcase() {
  return (
    <div className="cert-showcase reveal is-visible">
      <div className="cert-showcase-head">
        <span className="eyebrow"><span className="dot" aria-hidden="true" /> Start with the right training flow</span>
        <h2>Start with the $75 Drug Screening Mock Kit. Every other training track starts with a booking call.</h2>
        <p>The mock kit is the main offer on this page and the only checkout-first option.</p>
      </div>
      <div className="cert-showcase-grid">
        {[...trainingFeatureCards].sort((a, b) => (a.key === "drug-screening" ? -1 : b.key === "drug-screening" ? 1 : 0)).map((card) => {
          const isDrugScreening = card.key === "drug-screening";

          return (
            <div className="cert-card training-feature-card" data-priority={isDrugScreening ? "primary" : "secondary"} key={card.key}>
              <div className="cert-frame training-feature-frame">
                <TrainingFeatureArt type={card.key} title={card.title} />
              </div>
              <strong>{card.title}</strong>
              <p>{card.subtitle}</p>
              <ul className="training-feature-points">
                {card.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <div className="cert-card-actions">
                {isDrugScreening ? (
                  <Link
                    className="btn btn-primary"
                    href={squareTrainingUrl}
                    onClick={() => {
                      if (typeof window !== "undefined" && typeof fbq === "function") {
                        fbq("track", "InitiateCheckout");
                      }
                    }}
                  >
                    <CreditCard aria-hidden="true" /> Buy the $75 Mock Kit
                  </Link>
                ) : (
                  <Link className="btn btn-dark" href={calendlyBookingUrl} onClick={trackSchedule}>
                    <CalendarCheck aria-hidden="true" /> Book First
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="training-offer-notes" style={{ marginTop: "24px" }}>
        <div className="training-offer-note">
          <strong>Want the fastest path in?</strong>
          <span>Choose Drug Screening, buy the $75 mock kit first, then book your call so we can get you into the training flow.</span>
        </div>
      </div>
    </div>
  );
}

function TrainingOfferSpotlight() {
  return (
    <div className="training-offer reveal is-visible">
      <div className="training-offer-media">
        <Image
          src="/images/training/drug-screen-mock-collections.png"
          alt="1 Stikk Mobile drug screen mock collections training flyer showing what the program includes"
          fill
          sizes="(max-width: 760px) 100vw, (max-width: 1080px) 52vw, 640px"
          priority
        />
      </div>
      <div className="training-offer-copy">
        <span className="eyebrow"><span className="dot" aria-hidden="true" /> Main offer</span>
        <h2>The $75 Drug Screening Mock Kit is the starting point.</h2>
        <p>
          Everything needed is bundled into one $75 package. Buy the kit first, then book your call
          so 1 Stikk can unlock your access, prepare you for the process, and move you into live mock support.
        </p>
        <div className="training-offer-badges" aria-label="Key offer highlights">
          <span>Mock kit shipped</span>
          <span>Portal access</span>
          <span>Live monitoring</span>
        </div>
        <ul className="training-offer-list">
          {trainingOfferItems.map((item) => (
            <li key={item}><Check aria-hidden="true" /> {item}</li>
          ))}
        </ul>
        <div className="training-offer-notes">
          <div className="training-offer-note">
            <strong>Start with the purchase.</strong>
            <span>Buying the $75 mock kit first is the fastest way to begin and makes the rest of the process smoother.</span>
          </div>
          <div className="training-offer-note">
            <strong>The flow is simple: buy the kit, book the call, access the portal, then complete the mocks.</strong>
            <span>Once you buy, 1 Stikk helps you schedule your call, sends the kit, and supports your mock exam live so you can complete everything confidently.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrainingSteps() {
  return (
    <div className="training-steps reveal is-visible" aria-label="How training works">
      <div className="training-steps-head">
        <span className="eyebrow"><span className="dot" aria-hidden="true" /> Simple from day one</span>
        <h2>How your training works</h2>
        <PulseLine className="pulse-accent" />
      </div>
      <div className="training-steps-track">
        {trainingSteps.map((s, i) => {
          const Icon = s.Icon;
          return (
            <div className="training-step" key={s.title} style={{ "--step-delay": `${i * 140}ms` }}>
              <span className="training-step-node">
                <Icon aria-hidden="true" />
                <em>{i + 1}</em>
              </span>
              <strong>{s.title}</strong>
              <p>{s.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------- Article FAQ */

function ArticleFaq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="article-faq">
      <h2>Frequently asked questions</h2>
      <div className="faq-list">
        {items.map((item, i) => (
          <FaqItem key={item.q} item={item} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Header */

function Header({ mobileOpen, setMobileOpen }) {
  const [openMega, setOpenMega] = useState(null);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-inner">
          <span className="utility-note">
            <Sparkles aria-hidden="true" />
            Mobile scheduling open · Nationwide service
          </span>
        </div>
      </div>

      <div className="nav-shell container">
        <Link className="brand" href="/" aria-label="1 Stikk Mobile home" onClick={() => setMobileOpen(false)}>
          <Image src="/images/logo/logo.jpg" alt="1 Stikk Mobile logo" width={48} height={48} priority />
          <span>
            <strong>1 Stikk Mobile</strong>
            <small>We Always Care</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {nav.map((item) => (
            <div
              className="nav-item"
              key={item.href}
              onMouseEnter={() => setOpenMega(item.mega || null)}
              onMouseLeave={() => setOpenMega(null)}
            >
              <Link
                className={`nav-link${isActivePath(item.href, pathname) ? " is-active" : ""}`}
                href={item.href}
              >
                {item.label}
                {item.mega ? <ChevronDown aria-hidden="true" size={13} /> : null}
              </Link>

              {item.mega === "services" ? (
                <div className={`mega ${openMega === "services" ? "is-open" : ""}`}>
                  <div className="mega-grid">
                    {services.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link className="mega-card" href={`/services/${s.slug}`} key={s.slug}>
                          <Icon aria-hidden="true" />
                          <span>
                            <strong>{s.title}</strong>
                            <small>{s.summary}</small>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mega-foot">
                    <span>Patient services: call in or use the booking link.</span>
                    <a className="btn btn-primary btn-sm" href={mainPhoneDialHref}>
                      <Phone aria-hidden="true" /> Call to Book
                    </a>
                    <a className="btn btn-dark btn-sm" href={patientBookingUrl} onClick={trackSchedule}>
                      <CalendarCheck aria-hidden="true" /> Book Online
                    </a>
                  </div>
                </div>
              ) : null}

              {item.mega === "training" ? (
                <div className={`mega mega-training ${openMega === "training" ? "is-open" : ""}`}>
                  <div className="mega-grid mega-grid-2">
                    {trainingPrograms.map((p) => {
                      const Icon = p.icon;
                      return (
                        <Link className="mega-card" href={`/training/${p.slug}`} key={p.slug}>
                          <Icon aria-hidden="true" />
                          <span>
                            <strong>{p.title}</strong>
                            <small>{p.summary}</small>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mega-foot">
                    <span>Start with the $75 mock drug screening kit.</span>
                    <Link className="btn btn-dark btn-sm" href="/mock-kit">
                      <ArrowRight aria-hidden="true" /> Mock Kit Page
                    </Link>
                    <a className="btn btn-dark btn-sm" href={calendlyBookingUrl} onClick={trackSchedule}>
                      <CalendarCheck aria-hidden="true" /> Schedule
                    </a>
                    <a className="btn btn-primary btn-sm" href={squareTrainingUrl} onClick={trackCheckout}>
                      <CreditCard aria-hidden="true" /> Pay $75
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-primary" href={mainPhoneDialHref}>
            <Phone aria-hidden="true" />
            Call to Book
          </a>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div className={`mobile-panel ${mobileOpen ? "is-open" : ""}`}>
        <div className="mobile-panel-inner">
          {nav.map((item) => (
            <Link href={item.href} key={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="mobile-group">
            <span>Services</span>
            {services.map((s) => (
              <Link href={`/services/${s.slug}`} key={s.slug} onClick={() => setMobileOpen(false)}>
                {s.title}
              </Link>
            ))}
          </div>
          <div className="mobile-group">
            <span>Training &amp; Programs</span>
            {trainingPrograms.map((p) => (
              <Link href={`/training/${p.slug}`} key={p.slug} onClick={() => setMobileOpen(false)}>
                {p.title}
              </Link>
            ))}
          </div>
          <div className="mobile-group">
            <span>Company</span>
            <Link href="/about" onClick={() => setMobileOpen(false)}>About Us</Link>
            <Link href="/non-profit" onClick={() => setMobileOpen(false)}>Non Profit</Link>
            <Link href="/business-solutions" onClick={() => setMobileOpen(false)}>Business Solutions</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact Us</Link>
          </div>
          <div className="mobile-cta">
            <a className="btn btn-primary" href={mainPhoneDialHref} onClick={() => setMobileOpen(false)}>
              <Phone aria-hidden="true" /> Call to Book
            </a>
            <a className="btn btn-dark" href={patientBookingUrl} onClick={() => setMobileOpen(false)}>
              <CalendarCheck aria-hidden="true" /> Book Patient Service
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------- Hero */

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-shell">
        <FloatingMotifs />
        <div className="hero-copy reveal is-visible">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" /> We come to you · all 50 states
          </span>
          <h1>Mobile blood draws, drug testing, and wellness care at your door.</h1>
          <p className="hero-lead">
            Book lab work, wellness visits, drug testing, or health screenings for yourself or a loved one. A caring,
            certified professional comes right to the home, workplace, or facility.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href={mainPhoneDialHref}>
              <Phone aria-hidden="true" />
              Call to Book
            </a>
            <a className="btn btn-dark btn-lg" href={patientBookingUrl} onClick={trackSchedule}>
              <CalendarCheck aria-hidden="true" />
              Book Patient Service
            </a>
          </div>
          <ul className="hero-trust">
            <li><Star aria-hidden="true" /> Certified, compassionate professionals</li>
            <li><MapPin aria-hidden="true" /> We come to you, no driving needed</li>
            <li><Clock aria-hidden="true" /> Open 24 hours, 7 days a week</li>
          </ul>
        </div>

        <div className="hero-visual reveal is-visible">
          <div className="hero-photo hero-photo-main">
            <Image src="/images/site/mobile-lab.webp" alt="The 1 Stikk Mobile laboratory van set up for sample collection" fill sizes="(max-width: 760px) 95vw, (max-width: 1080px) 95vw, 48vw" priority />
          </div>
          <div className="hero-photo hero-photo-sub">
            <Image src="/images/site/van-care.webp" alt="A 1 Stikk Mobile clinician greeting a patient at a mobile lab van" fill sizes="(max-width: 900px) 90vw, 28vw" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Mission band */

function MissionBand() {
  return (
    <section className="mission-band">
      <div className="container mission-inner reveal">
        <h2>The care they need, right at the door.</h2>
        <p>
          We send certified professionals directly to your home or your loved one's home for blood tests,
          wellness checks, drug testing, and health screenings. Simple, dignified, and dependable.
        </p>
      </div>
    </section>
  );
}

function HomeTrainingComparison() {
  return (
    <section className="section home-ranking-section">
      <div className="container">
        <div className="section-head section-head-center reveal">
          <span className="eyebrow"><span className="dot" aria-hidden="true" /> Why this offer wins</span>
          <h2>A sharper DOT collector training offer than the overpriced competition.</h2>
          <p>Searchers comparing programs need the differences fast: price, physical kit, live mocks, and healthcare-provider credibility.</p>
        </div>
        <div className="home-compare-shell reveal is-visible">
          <article className="home-compare-card home-compare-card-negative">
            <span className="home-compare-label">Typical competitors</span>
            <h3>Higher prices and less practical support.</h3>
            <ul className="home-compare-list">
              {homeComparisonItems.competitors.map((item) => (
                <li key={item}><X aria-hidden="true" /> {item}</li>
              ))}
            </ul>
          </article>
          <article className="home-compare-card home-compare-card-positive">
            <span className="home-compare-label">1 Stikk Mobile</span>
            <h3>Built to convert students who want a real mock-kit workflow.</h3>
            <ul className="home-compare-list">
              {homeComparisonItems.oneStikk.map((item) => (
                <li key={item}><Check aria-hidden="true" /> {item}</li>
              ))}
            </ul>
            <div className="home-compare-actions">
              <a className="btn btn-primary" href={squareTrainingUrl} onClick={trackCheckout}><CreditCard aria-hidden="true" /> Save with $75 Training</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function HomeTrainingBundle() {
  return (
    <section className="section home-bundle-section">
      <div className="container home-bundle-shell reveal is-visible">
        <article className="home-bundle-card">
          <span className="eyebrow"><span className="dot" aria-hidden="true" /> Everything included</span>
          <h2>Your $75 DOT collector training bundle covers the full mock-kit path.</h2>
          <p>
            No hidden fees, no supply-list scavenger hunt, and no pre-recorded-only experience. The offer is structured
            so a student can move from purchase to practice with fewer delays and fewer errors.
          </p>
          <ul className="home-bundle-list">
            {homeIncludedItems.map((item) => (
              <li key={item}><Check aria-hidden="true" /> {item}</li>
            ))}
          </ul>
        </article>
        <article className="home-bundle-card home-bundle-card-dark">
          <span className="eyebrow eyebrow-light"><Award aria-hidden="true" /> How it works</span>
          <h2>Simple enough to start fast on mobile.</h2>
          <div className="home-step-list">
            {homeProcessSteps.map((item, index) => (
              <div className="home-step-card" key={item}>
                <em>{index + 1}</em>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="btn btn-outline" href="/training">View full training flow</Link>
            <a className="btn btn-primary" href={trainingPhoneHref}><Phone aria-hidden="true" /> Call Training</a>
          </div>
        </article>
      </div>
    </section>
  );
}

function HomeCareerPotential() {
  return (
    <section className="section home-career-section">
      <div className="container">
        <div className="section-head section-head-center reveal">
          <span className="eyebrow eyebrow-light"><Briefcase aria-hidden="true" /> Career upside</span>
          <h2>$75 positioned against a practical collector-career return.</h2>
          <p>The strategy file frames the offer as a low-cost path into a real workforce skill. This section makes that ROI visible and scannable.</p>
        </div>
        <div className="home-career-grid reveal is-visible">
          {homeCareerStats.map((item) => (
            <article className="home-career-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Core practices */

function CorePractices() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow"><span className="dot" aria-hidden="true" /> Our core practices</span>
          <h2>The care people ask for most.</h2>
          <p>Every service is mobile, professional, and built around getting your care done without the trip.</p>
        </div>
        <div className="practice-grid">
          {corePractices.map((p) => {
            const Icon = p.icon;
            return (
              <Link className="practice-card reveal" href={`/services/${p.slug}`} key={p.title}>
                <span className="practice-icon"><Icon aria-hidden="true" /></span>
                <strong>{p.title}</strong>
                <span className="practice-cta">Learn more <ArrowRight aria-hidden="true" /></span>
              </Link>
            );
          })}
        </div>
        <div className="section-foot reveal">
          <a className="btn btn-dark" href="/services">View all services <ArrowRight aria-hidden="true" /></a>
          <a className="btn btn-primary" href={mainPhoneDialHref}><Phone aria-hidden="true" /> Call to Book</a>
          <a className="btn btn-dark" href={patientBookingUrl} onClick={trackSchedule}><CalendarCheck aria-hidden="true" /> Book Patient Service</a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Meet founder */

function Founder() {
  return (
    <section className="section founder-section" id="founder">
      <div className="container founder-shell">
        <div className="founder-photo reveal">
          <Image src="/images/site/founder.webp" alt="Tiffany Clinton, CPT, RMA, CEO of 1 Stikk Mobile" fill sizes="(max-width: 900px) 80vw, 30vw" />
          <span className="founder-name">Tiffany Clinton · CPT, RMA · CEO</span>
        </div>
        <div className="founder-copy reveal">
          <span className="eyebrow"><span className="dot" aria-hidden="true" /> Meet the founder</span>
          <h2>Turning struggle into strategy.</h2>
          <p>
            1 Stikk Mobile was built on a simple belief: healthcare should come to people, and opportunity
            should follow. Tiffany Clinton leads a team that delivers care with dignity while training the
            next generation of mobile healthcare professionals.
          </p>
          <blockquote className="founder-quote">
            “Beloved, I pray that you may prosper in all things and be in health, just as your soul prospers.”
            <cite>3 John 1:2</cite>
          </blockquote>
          <div className="hero-actions">
            <a className="btn btn-primary" href={mainPhoneDialHref}><Phone aria-hidden="true" /> Call to Book</a>
            <a className="btn btn-outline" href="/contact">Partner with us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- BBB feature */

function BbbFeature() {
  return (
    <section className="section bbb-section">
      <div className="container bbb-shell">
        <div className="bbb-photo reveal">
          <Image src="/images/site/bbb-ignite.jpg" alt="The BBB Ignite Podcast Studio sign in Central Virginia" fill sizes="(max-width: 900px) 80vw, 34vw" />
        </div>
        <div className="bbb-copy reveal">
          <span className="eyebrow eyebrow-light"><Star aria-hidden="true" /> Featured</span>
          <h2>1 Stikk Mobile on the BBB Ignite Podcast.</h2>
          <p>
            Recognized for community impact and innovation in mobile healthcare, 1 Stikk Mobile was featured
            on the Better Business Bureau’s Ignite Podcast — sharing our mission to bring care and
            opportunity to every doorstep.
          </p>
          <a className="btn btn-primary" href={mainPhoneDialHref}><Phone aria-hidden="true" /> Call to Book</a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Service areas */

function ServiceAreas() {
  return (
    <section className="section areas-section" id="locations">
      <div className="container areas-shell">
        <div className="areas-copy reveal">
          <span className="eyebrow"><span className="dot" aria-hidden="true" /> Mobile lab service locations</span>
          <h2>Nationwide mobile service availability.</h2>
          <p>
            Headquartered in Monroe, Louisiana and serving all 50 states. Wherever you
            are, we coordinate to bring blood tests and care to your door.
          </p>
          <div className="areas-map">
            <Image src="/images/site/map-monroe.jpg" alt="Map showing the 1 Stikk Mobile service base in Monroe, Louisiana" fill sizes="(max-width: 900px) 90vw, 36vw" />
            <span className="areas-map-pin"><MapPin aria-hidden="true" /> Monroe, LA · Home base</span>
          </div>
        </div>
        <div className="areas-list reveal">
          {serviceStates.map((state) => (
            <span key={state}>{state}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Testimonials */

function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const go = (dir) => setIndex((i) => (i + dir + count) % count);

  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        <div className="section-head section-head-center reviews-head reveal">
          <span className="eyebrow eyebrow-light"><Star aria-hidden="true" /> Feedback from Clients</span>
          <h2>Why you should 1 Stikk Mobile Inc.</h2>
        </div>
        <div className="reviews-carousel reveal">
          <button className="review-nav" type="button" aria-label="Previous review" onClick={() => go(-1)}>
            <ChevronLeft aria-hidden="true" />
          </button>
          <figure className="review-card" key={index}>
            <Quote className="review-mark" aria-hidden="true" />
            <div className="review-stars" aria-label="Five star rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} aria-hidden="true" />
              ))}
            </div>
            <blockquote>{testimonials[index].quote}</blockquote>
            <figcaption>
              <strong>{testimonials[index].name}</strong>
              <span>{testimonials[index].role}</span>
            </figcaption>
          </figure>
          <button className="review-nav" type="button" aria-label="Next review" onClick={() => go(1)}>
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
        <div className="review-dots" role="tablist" aria-label="Choose a review">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              className={i === index ? "is-active" : ""}
              aria-label={`Show review from ${t.name}`}
              aria-selected={i === index}
              role="tab"
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- FAQ */

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? "is-open" : ""}`}>
      <button type="button" className="faq-q" aria-expanded={isOpen} onClick={onToggle}>
        <span>{item.q}</span>
        {isOpen ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}
      </button>
      <div className="faq-a" hidden={!isOpen}>
        <p>{item.a}</p>
      </div>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq-section">
      <div className="container faq-shell">
        <div className="faq-intro reveal">
          <span className="eyebrow"><span className="dot" aria-hidden="true" /> Everything you need to know</span>
          <h2>Frequently asked questions.</h2>
          <p>
            Answers to the most common questions about our mobile healthcare services, patient booking,
            training programs, and business solutions.
          </p>
          <a className="btn btn-primary" href={mainPhoneDialHref}><Phone aria-hidden="true" /> Call to Book</a>
        </div>
        <div className="faq-list reveal">
          {faqs.map((item, i) => (
            <FaqItem key={item.q} item={item} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Contact */

function ContactCta() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-shell reveal">
        <span className="eyebrow eyebrow-light"><HeartHandshake aria-hidden="true" /> We’re here to help</span>
        <h2>Anytime, anywhere.</h2>
        <p>
          Whether you need lab work, a wellness visit, or a health screening — our caring team is ready.
          We come to you. Call in or use the patient booking link to request your service.
        </p>
        <div className="contact-actions">
          <a className="btn btn-primary btn-lg" href={mainPhoneDialHref}><Phone aria-hidden="true" /> Call to Book</a>
          <a className="btn btn-dark btn-lg" href={patientBookingUrl} onClick={trackSchedule}><CalendarCheck aria-hidden="true" /> Book Patient Service</a>
        </div>
        <div className="contact-cards">
          <a className="contact-card" href={mainPhoneDialHref}>
            <Phone aria-hidden="true" />
            <span><strong>{mainPhone}</strong><small>Main service line · after hours {afterHoursPhone}</small></span>
          </a>
          <a className="contact-card" href={`mailto:${contactEmail}`}>
            <Mail aria-hidden="true" />
            <span><strong>Email us</strong><small>{contactEmail}</small></span>
          </a>
          <div className="contact-card">
            <Clock aria-hidden="true" />
            <span><strong>Always open</strong><small>{officeHoursText}</small></span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Footer */

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/">
            <Image src="/images/logo/logo.jpg" alt="1 Stikk Mobile logo" width={50} height={50} />
            <span><strong>1 Stikk Mobile</strong><small>We Always Care</small></span>
          </Link>
          <p>Accessible, reliable, and compassionate mobile lab services — headquartered in Monroe, Louisiana and serving patients, employers, and communities nationwide.</p>
          <div className="footer-actions">
            <a className="btn btn-primary btn-sm" href={mainPhoneDialHref}><Phone aria-hidden="true" /> Call</a>
            <a className="btn btn-dark btn-sm" href={patientBookingUrl} onClick={trackSchedule}><CalendarCheck aria-hidden="true" /> Book Online</a>
          </div>
        </div>
        <div className="footer-col">
          <strong>Services</strong>
          {services.map((s) => (
            <Link href={`/services/${s.slug}`} key={s.slug}>{s.title}</Link>
          ))}
        </div>
        <div className="footer-col">
          <strong>Company</strong>
          <Link href="/about">About / Meet founder</Link>
          <Link href="/program">Programs</Link>
          <Link href="/non-profit">Non Profit</Link>
          <Link href="/business-solutions">Business Solutions</Link>
          <Link href="/training">Training &amp; programs</Link>
          <Link href="/articles">Health articles</Link>
          <Link href="/contact">Contact us</Link>
          <a href={labPortalUrl}>Laboratory portal</a>
        </div>
        <div className="footer-col">
          <strong>Get in touch</strong>
          <a href={mainPhoneDialHref}>{mainPhone}</a>
          <a href={patientBookingUrl}>Patient booking link</a>
          <a href={afterHoursPhoneHref}>After hours {afterHoursPhone}</a>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={facebookUrl}>Facebook</a>
          <span>{officeHoursText}</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>This workplace is inclusive and accessible. We encourage individuals with disabilities to apply.</p>
        <div className="footer-legal">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms of Service</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </div>
        <p className="footer-copy">
          This website was created by <a href="https://stackmode.net" target="_blank" rel="noreferrer">Stackmodechris</a> &amp; <a href="https://stackmode.net" target="_blank" rel="noreferrer">Stackmode Network LLC</a>.
        </p>
      </div>
    </footer>
  );
}

/* --------------------------------------------------------- Floating action */

function ConversionToast({ isTraining }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show after 8s
    const firstTimeout = setTimeout(() => setShow(true), 8000);

    // Then every 40s
    const interval = setInterval(() => {
      setShow(true);
      setTimeout(() => setShow(false), 5000);
    }, 40000);
    
    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="conversion-toast reveal is-visible" onClick={() => setShow(false)} style={{ cursor: "pointer" }}>
      <div className="toast-icon"><CalendarCheck aria-hidden="true" /></div>
      <div className="toast-content">
        <strong>{isTraining ? 'Training Sessions Available' : 'Mobile Services Available'}</strong>
        <span>{isTraining ? 'Enroll in our next training session today!' : 'Call to book your mobile service today!'}</span>
      </div>
      {isTraining ? (
        <a href={squareTrainingUrl} className="toast-btn" onClick={trackCheckout}>Enroll</a>
      ) : (
        <a href={mainPhoneDialHref} className="toast-btn">Call</a>
      )}
    </div>
  );
}

function FloatingCta({ isTraining, isHidden = false }) {
  if (isHidden) return null;

  const primary = isTraining
    ? { href: squareTrainingUrl, label: "Buy $75 Kit", Icon: CreditCard, className: "floating-book", onClick: trackCheckout }
    : { href: mainPhoneDialHref, label: "Call", Icon: Phone, className: "floating-call" };

  const secondary = isTraining
    ? { href: calendlyBookingUrl, label: "Book Call", Icon: CalendarCheck, className: "floating-call", onClick: trackSchedule }
    : { href: patientBookingUrl, label: "Book Online", Icon: CalendarCheck, className: "floating-book", onClick: trackSchedule };

  const PrimaryIcon = primary.Icon;
  const SecondaryIcon = secondary.Icon;

  return (
    <>
      <div className="floating-actions-left" aria-label={secondary.label}>
        <a className={`floating-action ${secondary.className}`} href={secondary.href} onClick={secondary.onClick}>
          <SecondaryIcon aria-hidden="true" />
          <span>{secondary.label}</span>
        </a>
      </div>
      <div className="floating-actions" aria-label={primary.label}>
        <a className={`floating-action ${primary.className}`} href={primary.href} onClick={primary.onClick}>
          <PrimaryIcon aria-hidden="true" />
          <span>{primary.label}</span>
        </a>
      </div>
      <div className={`mobile-action-bar ${isTraining ? "mobile-action-bar-training" : "mobile-action-bar-patient"}`} aria-label={isTraining ? "Training quick actions" : "Patient quick actions"}>
        <a className="btn btn-primary" href={primary.href} onClick={primary.onClick}>
          <PrimaryIcon aria-hidden="true" /> {primary.label}
        </a>
        <a className="btn btn-dark" href={secondary.href} onClick={secondary.onClick}>
          <SecondaryIcon aria-hidden="true" /> {secondary.label}
        </a>
      </div>
    </>
  );
}

/* ---------------------------------------------------------- Service detail */

function ServiceDetail({ service }) {
  const Icon = service.icon;
  const isBehavioral = service.slug === "behavioral-health";
  const primary =
    service.book === "training"
      ? { href: squareTrainingUrl, label: "Book Training" }
      : service.book === "call"
      ? { href: mainPhoneDialHref, label: "Call to Book" }
      : service.book === "contact"
      ? { href: "/contact", label: "Contact our team" }
      : { href: patientBookingUrl, label: "Book Patient Service" };

  return (
    <section className="section service-detail">
      <div className="container">
        <Link className="back-link" href="/services"><ArrowLeft aria-hidden="true" /> All services</Link>
        <div className="service-detail-shell">
          <div className="service-detail-copy reveal is-visible">
            <span className="eyebrow"><span className="dot" aria-hidden="true" /> {service.tag}</span>
            <h1>{service.title}</h1>
            <p className="hero-lead">{service.summary}</p>
            <div className="hero-actions">
              {service.book === "patient" ? (
                <a className="btn btn-primary btn-lg" href={mainPhoneDialHref}>
                  <Phone aria-hidden="true" /> Call to Book
                </a>
              ) : null}
              <a className={`${service.book === "patient" ? "btn btn-dark" : "btn btn-primary"} btn-lg`} href={primary.href} onClick={primary.href === squareTrainingUrl ? trackCheckout : primary.href === calendlyBookingUrl || primary.href === patientBookingUrl ? trackSchedule : undefined}>
                {primary.href === mainPhoneDialHref ? <Phone aria-hidden="true" /> : <CalendarCheck aria-hidden="true" />}
                {primary.label}
              </a>
            </div>
            {isBehavioral && (
              <p style={{ marginTop: "1rem", color: "var(--ink-2)", fontSize: "0.95rem" }}>
                Our team coordinates behavioral health screenings and program support with compassion and confidentiality.
              </p>
            )}
          </div>
          <div className="service-detail-visual reveal is-visible">
            <ServiceCardMedia service={service} />
            <article className="service-detail-card">
              <div className="service-detail-card-head">
                <span className="practice-icon"><Icon aria-hidden="true" /></span>
                <h2>What&apos;s included</h2>
              </div>
              <ul>
                {service.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          </div>
        </div>

        <PatientBookingSteps compact />

        <div className="related-head reveal is-visible">
          <h2>Explore other services</h2>
        </div>
        <div className="practice-grid">
          {services.filter((s) => s.slug !== service.slug).map((s) => {
            const Rel = s.icon;
            return (
              <Link className="practice-card reveal is-visible" href={`/services/${s.slug}`} key={s.slug}>
                <span className="practice-icon"><Rel aria-hidden="true" /></span>
                <strong>{s.title}</strong>
                <span className="practice-cta">Learn more <ArrowRight aria-hidden="true" /></span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Program page */

function ProgramFocusIcon({ type }) {
  if (type === "career") {
    return (
      <svg viewBox="0 0 88 88" fill="none" aria-hidden="true">
        <circle className="program-focus-ring" cx="44" cy="44" r="38" />
        <path d="M25 57c8-15 18-23 31-24M31 38l-8 8 10 5M56 33l-1-12 12 5M37 59l14-18 14 17" />
        <circle cx="44" cy="34" r="7" />
      </svg>
    );
  }

  if (type === "finance") {
    return (
      <svg viewBox="0 0 88 88" fill="none" aria-hidden="true">
        <circle className="program-focus-ring" cx="44" cy="44" r="38" />
        <path d="M24 40l20-11 20 11-20 11-20-11ZM30 47v12c8 6 20 6 28 0V47" />
        <circle cx="44" cy="58" r="9" />
        <path d="M44 53v10M40 56h7" />
      </svg>
    );
  }

  if (type === "creative") {
    return (
      <svg viewBox="0 0 88 88" fill="none" aria-hidden="true">
        <circle className="program-focus-ring" cx="44" cy="44" r="38" />
        <path d="M27 61V36c0-8 7-15 17-15s17 7 17 15v25M34 42h20M39 51h10" />
        <path d="M44 32v8M38 36l6 4 6-4" />
        <circle cx="44" cy="44" r="24" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 88 88" fill="none" aria-hidden="true">
      <circle className="program-focus-ring" cx="44" cy="44" r="38" />
      <circle cx="44" cy="44" r="15" />
      <path d="M44 18v12M44 58v12M18 44h12M58 44h12M27 27l9 9M52 52l9 9M61 27l-9 9M36 52l-9 9" />
      <path d="M39 44l4 4 8-10" />
    </svg>
  );
}

function ProgramPage() {
  const visionServices = [
    "Free or low-cost blood collections and lab testing",
    "Phlebotomy and healthcare training programs",
    "Drug screening and health awareness events",
    "Youth and adult job-readiness initiatives in Allied Health",
    "Emergency and on-demand mobile health response"
  ];

  const focusAreas = [
    { type: "career", title: "Career Readiness & Workforce Development" },
    { type: "finance", title: "Entrepreneurship & Financial Literacy" },
    { type: "creative", title: "Creative & Technical Skill-Building" },
    { type: "faith", title: "Personal Growth & Faith-Based Values" }
  ];

  const adultOffers = [
    "Career development and job readiness support",
    "Financial literacy and credit-building guidance",
    "Entrepreneurship and business coaching",
    "Life skills training and goal setting",
    "Mentorship and ongoing support"
  ];

  const adultAudience = [
    "Adults seeking a fresh start",
    "Individuals re-entering the workforce",
    "Those looking to build new skills or careers",
    "Anyone ready to grow personally and professionally"
  ];

  const stats = [
    { label: "Business Partnerships", value: "300+", text: "Clinics, schools, and organizations served nationwide" },
    { label: "Mobile Services Delivered", value: "5K+", text: "At-home and on-site lab & wellness visits completed" },
    { label: "Lab & Diagnostic Tests", value: "25K+", text: "Accurate, timely testing across multiple healthcare sectors" },
    { label: "Individuals Certified", value: "1500+", text: "Phlebotomy, drug screening, and healthcare certifications" }
  ];

  return (
    <section className="program-page program-source-page">
      <section className="program-source-hero">
        <Image
          src="/images/program/source-lab-hero.png"
          alt="1 Stikk Mobile lab training team preparing samples in a laboratory"
          fill
          sizes="100vw"
          priority
        />
        <div className="program-source-shade" />
        <div className="container">
          <div className="program-source-hero-copy reveal is-visible">
            <span>Empower, Educate &amp; Transform</span>
            <h1>Program</h1>
          </div>
        </div>
      </section>

      <section className="program-vision-section">
        <div className="program-arc program-arc-left" aria-hidden="true" />
        <div className="container program-vision-grid">
          <div className="program-vision-copy reveal is-visible">
            <h2>Our Vision</h2>
            <p>We partner with schools, employers, clinics, and community leaders to ensure no one is left behind when it comes to health access or career opportunity.</p>
            <p>Our vision is to empower, educate, and elevate communities-one mobile service at a time.</p>
            <p>Through our mobile units and outreach programs, we serve rural areas, minority populations, and economically disadvantaged individuals with vital services such as:</p>
            <ul className="program-chevron-list">
              {visionServices.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="program-vision-collage reveal is-visible">
            <div className="program-gold-rail" aria-hidden="true" />
            <div className="program-collage-main">
              <Image src="/images/program/vision-lab.png" alt="Healthcare worker reviewing diagnostic information in a lab" fill sizes="(max-width: 760px) 84vw, 420px" />
            </div>
            <div className="program-collage-sub">
              <Image src="/images/services/lab-researchers.webp" alt="Laboratory team working together on specimens" fill sizes="(max-width: 760px) 72vw, 340px" />
            </div>
          </div>
        </div>
      </section>

      <section className="program-focus-section">
        <div className="program-hex-grid" aria-hidden="true" />
        <div className="container">
          <div className="program-focus-head reveal is-visible">
            <h2>Core Focus Areas</h2>
            <p>Moving With a Purpose isn&apos;t just a program - it&apos;s a movement. We&apos;re helping youth take control of their futures and walk boldly into purpose.</p>
          </div>
          <div className="program-focus-grid">
            {focusAreas.map((item) => (
              <article className="program-focus-card reveal is-visible" key={item.title}>
                <span className="program-focus-icon">
                  <ProgramFocusIcon type={item.type} />
                </span>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="program-purpose-section">
        <div className="program-arc program-arc-bottom" aria-hidden="true" />
        <div className="container">
          <article className="program-purpose-block program-purpose-centered reveal is-visible">
            <span className="eyebrow"><span className="dot" aria-hidden="true" /> Youth program</span>
            <h2>{programData.youth.title}</h2>
            <strong>{programData.youth.subtitle}</strong>
            <p>{programData.youth.description}</p>
            <p>{programData.youth.body}</p>
          </article>

          <article className="program-purpose-block program-purpose-split reveal is-visible">
            <div>
              <span className="eyebrow"><span className="dot" aria-hidden="true" /> Adult program</span>
              <h2>{programData.adults.title}</h2>
              <strong>A Second Chance Program for Adults Ready to Transform Their Lives</strong>
              <p>Hustle With a Purpose is a transformational program designed for adults who are ready to take control of their future and create lasting change in their lives. Whether facing setbacks, career challenges, or life transitions, this program provides the structure, support, and skills needed to move forward with confidence.</p>
              <p>We focus on helping individuals break negative cycles, rebuild self-worth, and develop practical pathways toward financial stability, career growth, and personal success.</p>
            </div>
            <div className="program-offer-panel">
              <h3>What the Program Offers?</h3>
              <ul className="program-chevron-list">
                {adultOffers.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <h3>Who its for?</h3>
              <ul className="program-chevron-list">
                {adultAudience.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </article>

          <div className="program-stats-grid reveal is-visible">
            {stats.map((stat) => (
              <article className="program-stat-card" key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
                <p>{stat.text}</p>
              </article>
            ))}
          </div>

          <div className="program-cta reveal is-visible">
            <h2>Purpose-driven support for youth and adults.</h2>
            <p>Moving With a Purpose supports youth building confidence, direction, and career readiness. Hustle With a Purpose supports adults pursuing stability, growth, and a stronger next chapter.</p>
          </div>
        </div>
      </section>
    </section>
  );
}

/* -------------------------------------------------------- Training landing */

function TrainingPage() {
  return (
    <section className="section training-page">
      <FloatingMotifs />
      <div className="container">
        <div className="program-hero reveal is-visible">
          <span className="eyebrow"><span className="dot" aria-hidden="true" /> $75 Mock Drug Screening Kit</span>
          <h1>Turn a $75 mock drug screening kit into a real drug screener/collector career.</h1>
          <p className="hero-lead" style={{ margin: "0 auto 20px", maxWidth: "60ch" }}>
            Start with the mock kit, get portal guidance, complete live observed mock collections, and build the
            confidence to move toward drug screener/collector work.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center", marginBottom: "16px", flexWrap: "wrap", gap: "12px" }}>
            <a className="btn btn-primary btn-lg" href={squareTrainingUrl} onClick={trackCheckout}>
              <CreditCard aria-hidden="true" /> Buy the $75 Mock Kit
            </a>
            <a className="btn btn-dark btn-lg training-hero-secondary" href={calendlyBookingUrl} onClick={trackSchedule}>
              <CalendarCheck aria-hidden="true" /> Book Your Call
            </a>
          </div>
          <ul className="training-hero-points" aria-label="Why students choose this mock package">
            <li><Check aria-hidden="true" /> Buy the kit first to start your training file</li>
            <li><Check aria-hidden="true" /> Use your call to unlock next-step guidance</li>
            <li><Check aria-hidden="true" /> Mock kit shipped directly to you</li>
            <li><Check aria-hidden="true" /> Practice collector workflows with live monitoring</li>
          </ul>
          <a className="training-index-phone" style={{ margin: "0 auto" }} href={trainingPhoneHref} aria-label={`Call training team at ${trainingPhone}`}>
            <Phone aria-hidden="true" />
            <span>
              {trainingPhone} · <strong>Training team direct line</strong>
              <small>Call if you want help with the package, scheduling, portal questions, or mock support</small>
            </span>
          </a>
        </div>
      </div>
      <TrainingAdSteps />
      <MockKitOutcomeStrip />
      <div className="container">
        <TrainingOfferSpotlight />
      </div>
      <div className="container">
        <TrainingSteps />
      </div>
      <div className="container">
        <TrainingSearchSection />
      </div>
      <div className="container">
        <TrainingFaq />
      </div>
      <TrainingMobileBar />
    </section>
  );
}

function MockKitPage() {
  return (
    <section className="section training-page mock-kit-page">
      <FloatingMotifs />
      <div className="container">
        <div className="mock-kit-hero reveal is-visible">
          <div className="mock-kit-copy">
            <span className="eyebrow"><span className="dot" aria-hidden="true" /> $75 Mock Drug Screening Kit</span>
            <h1>Buy the mock kit. Practice the process. Start building a drug screener/collector career.</h1>
            <p className="hero-lead">
              This kit is the first step toward a drug screener/collector career. You get shipped mock materials,
              call guidance, live observed mock collections, and a simple path from practice to confidence.
            </p>
            <div className="hero-price-band mock-kit-price">
              <strong>$75</strong>
              <span>Mock kit, portal guidance, live observed mocks, and certificate-completion support.</span>
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary btn-lg" href={squareTrainingUrl} onClick={trackCheckout}>
                <CreditCard aria-hidden="true" /> Buy the $75 Mock Kit
              </a>
              <a className="btn btn-dark btn-lg" href={calendlyBookingUrl} onClick={trackSchedule}>
                <CalendarCheck aria-hidden="true" /> Book Your Call
              </a>
            </div>
          </div>
          <div className="mock-kit-media">
            <Image
              src="/images/training/drug-screen-mock-collections.png"
              alt="$75 mock drug screening kit and mock collection training from 1 Stikk Mobile"
              fill
              sizes="(max-width: 760px) 100vw, 48vw"
              priority
            />
          </div>
        </div>
      </div>
      <TrainingAdSteps />
      <MockKitOutcomeStrip />
      <div className="container">
        <TrainingOfferSpotlight />
      </div>
      <div className="container">
        <TrainingSearchSection />
      </div>
      <div className="container">
        <TrainingFaq />
      </div>
      <TrainingMobileBar />
    </section>
  );
}

function TrainingSearchSection() {
  return (
    <section className="training-seo-section reveal is-visible" aria-labelledby="training-seo-title">
      <div className="training-seo-shell">
        <div className="training-seo-copy">
          <span className="eyebrow"><span className="dot" aria-hidden="true" /> Mock drug screening kits</span>
          <h2 id="training-seo-title">Mock drug screening kits that help turn training into a drug screener/collector career.</h2>
          <p>
            People searching for mock drug screening kits usually need more than a box in the mail. They need a clear
            process, live support, and a training team that helps them practice the same workflow they will use in real
            DOT and non-DOT collections.
          </p>
          <p>
            1 Stikk Mobile keeps that path simple: buy the kit, book your call, receive your package, and complete
            live monitored mocks with a certified trainer. When the mocks are complete, you&apos;re set up for a drug
            screener/collector career instead of just another course.
          </p>
        </div>
        <div className="training-seo-cards" aria-label="Why this mock kit flow stands out">
          {trainingSearchSignals.map((item) => (
            <article className="training-seo-card" key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainingFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="training-faq-section">
      <div className="training-faq-shell">
        <div className="faq-intro reveal is-visible">
          <span className="eyebrow"><span className="dot" aria-hidden="true" /> Mock kit questions</span>
          <h2>Questions people ask before ordering mock drug screening kits.</h2>
          <p>
            These answers support the exact training flow on this page, especially for mobile visitors comparing kits,
            DOT collector practice, and live monitoring support.
          </p>
          <div className="training-faq-actions">
            <a className="btn btn-primary" href={squareTrainingUrl} onClick={trackCheckout}><CreditCard aria-hidden="true" /> Buy the $75 Mock Kit</a>
            <a className="btn btn-outline" href={trainingPhoneHref}><Phone aria-hidden="true" /> Call Training</a>
          </div>
        </div>
        <div className="faq-list reveal is-visible">
          {trainingFaqs.map((item, i) => (
            <FaqItem key={item.q} item={item} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainingMobileBar() {
  return (
    <div className="training-mobile-bar" aria-label="Training quick actions">
      <a className="btn btn-primary" href={squareTrainingUrl} onClick={trackCheckout}>
        <CreditCard aria-hidden="true" /> Buy Kit
      </a>
      <a className="btn btn-dark" href={trainingPhoneHref}>
        <Phone aria-hidden="true" /> Call Training
      </a>
    </div>
  );
}

/* ------------------------------------------------- Training program detail */

function TrainingProgramDetail({ program }) {
  const Icon = program.icon;
  const isMockTraining = program.slug === "drug-screening";
  return (
    <section className="section training-detail">
      <div className="container">
        <Link className="back-link" href="/training"><ArrowLeft aria-hidden="true" /> All programs</Link>

        {/* Hero */}
        <div className="training-detail-hero">
          <div className="training-detail-copy reveal is-visible">
            <span className="eyebrow"><span className="dot" aria-hidden="true" /> Training program</span>
            <h1>{program.title}</h1>
            <p className="hero-lead">{program.description}</p>

            <div className="training-contact-strip">
              <Phone aria-hidden="true" />
              <span>
                <strong>Need help before you start?</strong>
                <small>{trainingPhone}</small>
              </span>
            </div>

            <div className="hero-actions" style={{ flexWrap: "wrap", gap: "12px" }}>
              {isMockTraining ? (
                <a className="btn btn-primary btn-lg" href={squareTrainingUrl} onClick={trackCheckout}>
                  <CreditCard aria-hidden="true" /> Buy the $75 Mock Kit
                </a>
              ) : null}
              <a className="btn btn-dark btn-lg" href={calendlyBookingUrl} onClick={trackSchedule}>
                <CalendarCheck aria-hidden="true" /> {isMockTraining ? "Book Your Call" : "Schedule a Time"}
              </a>
            </div>
          </div>
          <aside className="training-detail-media reveal is-visible">
            <div className="training-detail-photo">
              <Image src={program.image} alt={program.imageAlt} fill sizes="(max-width: 760px) 100vw, (max-width: 1080px) 45vw, 420px" />
            </div>
            <div className="training-detail-info">
              <span className="practice-icon practice-icon-lg"><Icon aria-hidden="true" /></span>
              <strong>{program.title}</strong>
              <span className="training-duration-badge"><Clock aria-hidden="true" /> {program.duration}</span>
            </div>
          </aside>
        </div>

        {isMockTraining ? <TrainingAdSteps /> : null}

        {/* What you'll learn + What's included */}
        <div className="training-detail-grid">
          <div className="training-detail-card reveal is-visible">
            <h2>What you&apos;ll learn</h2>
            <ul>
              {program.learn.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="training-detail-card reveal is-visible">
            <h2>What&apos;s included</h2>
            <ul>
              {program.includes.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>

        {/* Who this is for */}
        <div className="training-who reveal is-visible">
          <div className="training-who-head">
            <h2>Who this is for</h2>
            <p>This program is designed for:</p>
          </div>
          <div className="training-who-grid">
            {program.who.map((item) => (
              <div className="training-who-card" key={item}>
                <Users aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {program.gallery?.length ? (
          <div className="training-gallery reveal is-visible">
            <h2>Inside the training</h2>
            <div className="training-gallery-grid">
              {program.gallery.map((photo) => (
                <figure className="training-gallery-card" key={photo.src}>
                  <div className="training-gallery-photo">
                    <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1080px) 45vw, 320px" />
                  </div>
                  <figcaption>{photo.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        ) : null}

        {/* Calendly embed */}
        <div className="training-calendly-section reveal is-visible">
          <div className="training-calendly-head">
            <h2>Schedule a time</h2>
            <p>
              Pick a time that works for you if you want help before getting started. Or call us at{" "}
              <strong>{trainingPhone}</strong> — we&apos;re happy to help.
            </p>
          </div>
          <div className="training-calendly-wrap">
            <iframe
              src={calendlyUrl}
              title={`Schedule ${program.title} with 1 Stikk Mobile`}
              width="100%"
              frameBorder="0"
              scrolling="yes"
              loading="lazy"
            />
          </div>
        </div>

        {/* Other programs */}
        <div className="training-related-head reveal is-visible">
          <h2>Explore other programs</h2>
        </div>
        <div className="training-grid">
          {trainingPrograms.filter((p) => p.slug !== program.slug).map((p) => {
            const Rel = p.icon;
            return (
              <Link className="training-card reveal is-visible" href={`/training/${p.slug}`} key={p.slug}>
                <div className="training-card-media">
                  <Image src={p.image} alt={p.imageAlt} fill sizes="(max-width: 760px) 100vw, (max-width: 1080px) 45vw, 360px" />
                </div>
                <div className="training-card-body">
                  <div className="training-card-head">
                    <span className="training-card-icon"><Rel aria-hidden="true" /></span>
                    <strong>{p.title}</strong>
                  </div>
                  <p>{p.summary}</p>
                  <span className="practice-cta">View program <ArrowRight aria-hidden="true" /></span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ About */

function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container reveal is-visible">
          <span className="eyebrow eyebrow-light"><span className="dot" aria-hidden="true" /> About 1 Stikk Mobile</span>
          <h1>Care that comes to people.<br />Opportunity that follows.</h1>
          <p className="hero-lead">
            Faith-rooted, community-driven mobile healthcare — delivering lab services and
            building careers across all 50 states since day one.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href={mainPhoneDialHref}><Phone aria-hidden="true" /> Call to Book</a>
            <a className="btn btn-dark btn-lg" href={patientBookingUrl} onClick={trackSchedule}><CalendarCheck aria-hidden="true" /> Book Online</a>
          </div>
        </div>
      </section>
      <PatientBookingSteps compact />
      <Founder />
      <BbbFeature />
      <ServiceAreas />
      <ContactCta />
    </>
  );
}

/* ---------------------------------------------------- Services Index */

function ServicesIndexPage() {
  return (
    <>
      <section className="services-index-hero">
        <div className="container reveal is-visible">
          <span className="eyebrow eyebrow-light"><span className="dot" aria-hidden="true" /> Mobile Healthcare</span>
          <h1>Mobile blood draws, wellness visits, and drug testing.</h1>
          <p>Blood tests, drug tests, wellness checks, and more — all done at your home or workplace.</p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href={mainPhoneDialHref}><Phone aria-hidden="true" /> Call to Book</a>
            <a className="btn btn-dark btn-lg" href={patientBookingUrl} onClick={trackSchedule}><CalendarCheck aria-hidden="true" /> Book Online</a>
          </div>
        </div>
      </section>
      <PatientBookingSteps compact />
      <section className="section">
        <div className="container">
          <div className="services-index-grid">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link className="service-card reveal" href={`/services/${s.slug}`} key={s.slug}>
                  <ServiceCardMedia service={s} />
                  <div className="service-card-body">
                    <span className="practice-icon"><Icon aria-hidden="true" /></span>
                    <strong>{s.title}</strong>
                    <p className="practice-summary">{s.summary}</p>
                    <span className="practice-cta">Learn more <ArrowRight aria-hidden="true" /></span>
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

/* ------------------------------------------------- Drug Screening */

function DrugScreeningPage() {
  return (
    <>
      <section className="ds-hero">
        <div className="container ds-hero-inner">
          <div className="ds-hero-copy reveal is-visible">
            <span className="eyebrow eyebrow-light">
              <span className="dot" aria-hidden="true" /> Drug Screening · Delivered by 1 Stikk Mobile
            </span>
            <h1>Your Health. Our Priority.<br />Right at Your Door.</h1>
            <p className="hero-lead">
              Professional drug screening for individuals, employers, and medical providers —
              brought directly to your location with full compliance and chain-of-custody standards.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-lg" href={mainPhoneDialHref}><Phone aria-hidden="true" /> Call to Book</a>
              <a className="btn btn-dark btn-lg" href={patientBookingUrl} onClick={trackSchedule}><CalendarCheck aria-hidden="true" /> Book Online</a>
            </div>
          </div>
          <div className="ds-hero-media reveal is-visible">
            <div className="ds-hero-img">
              <Image
                src="/images/services/drug-test-capsules.jpg"
                alt="Drug screening specimen capsules at 1 Stikk Mobile Lab"
                fill
                sizes="(max-width:760px) 95vw, 46vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <PatientBookingSteps compact />

      <section className="ds-section ds-section-light">
        <div className="container ds-split">
          <div className="ds-split-copy reveal">
            <span className="eyebrow"><span className="dot" aria-hidden="true" /> For Physicians &amp; Clinics</span>
            <h2>Medical Drug Screening</h2>
            <p>Support for physicians and pain management clinics with fast, secure, and compliant collection services.</p>
            <ul className="ds-list">
              <li><Check aria-hidden="true" /> Support for physicians and pain management clinics</li>
              <li><Check aria-hidden="true" /> Routine and randomized testing</li>
              <li><Check aria-hidden="true" /> Urine, saliva, or hair follicle collection</li>
              <li><Check aria-hidden="true" /> Fast and secure lab results</li>
              <li><Check aria-hidden="true" /> Monitored and unmonitored options available</li>
            </ul>
            <a className="btn btn-primary" href={mainPhoneDialHref}><Phone aria-hidden="true" /> Call to Book</a>
          </div>
          <div className="ds-split-media reveal">
            <div className="ds-img-frame">
              <Image
                src="/images/services/drug-test-report.jpg"
                alt="Drug test report form with specimen collection tools"
                fill
                sizes="(max-width:900px) 90vw, 44vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ds-section ds-section-dark">
        <div className="container ds-split ds-split-flip">
          <div className="ds-split-copy reveal">
            <span className="eyebrow eyebrow-light"><span className="dot" aria-hidden="true" /> DOT &amp; Non-DOT</span>
            <h2>Employment &amp; Compliance Testing</h2>
            <p>
              We bring cutting-edge mobile screening directly to your worksite — making compliance
              simple and workforce disruption minimal.
            </p>
            <div className="sap-callout">
              <Award className="sap-callout-icon" aria-hidden="true" />
              <div>
                <strong>SAP Assessment Available</strong>
                <span>
                  Substance Abuse Professional evaluations — a federally required step in
                  return-to-duty programs for DOT-regulated employees.
                </span>
              </div>
            </div>
            <ul className="ds-list">
              <li><Check aria-hidden="true" /> DOT &amp; Non-DOT drug screens (urine, hair, oral fluid)</li>
              <li><Check aria-hidden="true" /> SAP Assessment for return-to-duty compliance</li>
              <li><Check aria-hidden="true" /> Consortium management for DOT employers</li>
              <li><Check aria-hidden="true" /> Onsite mobile collections — minimal workforce disruption</li>
              <li><Check aria-hidden="true" /> Chain-of-custody documentation &amp; compliance reporting</li>
            </ul>
            <a className="btn btn-primary" href={mainPhoneDialHref}><Phone aria-hidden="true" /> Call to Book</a>
          </div>
          <div className="ds-split-media reveal">
            <div className="ds-img-frame">
              <Image
                src="/images/services/drug-test-capsules.jpg"
                alt="Certified drug screening collection capsules"
                fill
                sizes="(max-width:900px) 90vw, 44vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ds-section ds-section-light">
        <div className="container ds-split">
          <div className="ds-split-copy reveal">
            <span className="eyebrow"><span className="dot" aria-hidden="true" /> Training</span>
            <h2>Drug Screen &amp; Mock Collections</h2>
            <p>
              This $75 mock package gives students a cleaner step-by-step process. Buy the kit first,
              book your call with 1 Stikk, get access to the portal, receive your materials, and complete
              the mock collections with live support.
            </p>
            <ul className="ds-list">
              <li><Check aria-hidden="true" /> Buy the $75 mock kit first</li>
              <li><Check aria-hidden="true" /> Book your call for access and next-step support</li>
              <li><Check aria-hidden="true" /> Actual mock kit shipped to you by 1 Stikk</li>
              <li><Check aria-hidden="true" /> Five mock collections with live virtual observation</li>
              <li><Check aria-hidden="true" /> Employee handbook and binder setup support</li>
              <li><Check aria-hidden="true" /> Prep guide and mock workflow support</li>
              <li><Check aria-hidden="true" /> Live Q &amp; A with certified instructors</li>
              <li><Check aria-hidden="true" /> Certificate of Completion</li>
              <li><Check aria-hidden="true" /> Drug Screen Collector Registration &amp; Onboarding</li>
            </ul>
            <p className="ds-contact-note">
              Need help with the package, portal, shipped kit, or live mock support? Call{" "}
              <a href={trainingPhoneHref}>{trainingPhone}</a>.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a className="btn btn-primary" href={squareTrainingUrl} onClick={trackCheckout}><CreditCard aria-hidden="true" /> Pay $75 — Enroll Now</a>
              <a className="btn btn-dark" href={calendlyBookingUrl} onClick={trackSchedule}><CalendarCheck aria-hidden="true" /> Book Your Call</a>
            </div>
          </div>
          <div className="ds-split-media reveal">
            <div className="ds-img-frame">
              <Image
                src="/images/training/drug-screen-mock-collections.png"
                alt="1 Stikk Mobile drug screen mock collections training flyer"
                fill
                sizes="(max-width:900px) 90vw, 44vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow"><span className="dot" aria-hidden="true" /> Why Us</span>
            <h2>Why Choose 1 Stikk Mobile</h2>
            <p>Certified, compliant, and mobile — we make professional drug screening effortless.</p>
          </div>
          <div className="ds-why-grid">
            {[
              { Icon: BadgeCheck, title: "Certified Specialists", desc: "Every collector is trained, certified, and compliance-ready from day one." },
              { Icon: MapPin, title: "We Come to You", desc: "Mobile testing at clinics, offices, and job sites — no travel required." },
              { Icon: Clock, title: "Fast Turnaround", desc: "Accurate results delivered quickly so your operations stay on track." },
              { Icon: ShieldCheck, title: "State & Federal Compliant", desc: "Full DOT/non-DOT compliance, chain-of-custody, and complete documentation." }
            ].map((card) => {
              const CardIcon = card.Icon;
              return (
                <div className="ds-why-card reveal" key={card.title}>
                  <span className="practice-icon"><CardIcon aria-hidden="true" /></span>
                  <strong>{card.title}</strong>
                  <p>{card.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="section-foot reveal">
            <a className="btn btn-primary btn-lg" href={mainPhoneDialHref}><Phone aria-hidden="true" /> Call to Book</a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------- Non Profit */

function NonProfitPage() {
  const service = serviceMap["non-profit"];
  const Icon = service.icon;
  return (
    <>
      <section className="np-biz-hero">
        <div className="container np-biz-hero-inner reveal is-visible">
          <span className="eyebrow eyebrow-light"><span className="dot" aria-hidden="true" /> Community Health</span>
          <h1>Community health fairs and mobile wellness screenings.</h1>
          <p className="hero-lead">
            1 Stikk Mobile brings health fairs, screenings, and outreach directly to underserved
            neighborhoods — because everyone deserves access to quality care.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href="/contact"><HeartHandshake aria-hidden="true" /> Partner With Us</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="service-detail-shell">
            <div className="service-detail-copy reveal is-visible">
              <span className="eyebrow"><span className="dot" aria-hidden="true" /> Our Impact</span>
              <h2>Closing the healthcare access gap.</h2>
              <p>
                Our non-profit programming is rooted in community — bringing mobile services to
                people and neighborhoods that need them most, with dignity and compassion.
              </p>
              <p>
                We partner with churches, schools, housing communities, local leaders, and care
                organizations to bring screenings, health education, and wellness events directly
                to the people who may otherwise delay care.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/contact"><HeartHandshake aria-hidden="true" /> Partner With Us</a>
              </div>
            </div>
            <article className="service-detail-card reveal is-visible">
              <div className="service-detail-card-head">
                <span className="practice-icon"><Icon aria-hidden="true" /></span>
                <h2>What&apos;s included</h2>
              </div>
              <ul>
                {service.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}

/* ----------------------------------------------- Business Solutions */

function BusinessSolutionsPage() {
  const service = serviceMap["business-solutions"];
  const Icon = service.icon;
  return (
    <>
      <section className="np-biz-hero">
        <div className="container np-biz-hero-inner reveal is-visible">
          <span className="eyebrow eyebrow-light"><span className="dot" aria-hidden="true" /> For Organizations</span>
          <h1>On-site drug testing and mobile lab services for organizations.</h1>
          <p className="hero-lead">
            On-site testing, lab partnerships, and business mentorship — designed for clinics,
            employers, and healthcare entrepreneurs ready to grow.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href={mainPhoneDialHref}><Phone aria-hidden="true" /> Call to Book</a>
            <a className="btn btn-outline btn-lg" href="/contact">Contact our team</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="service-detail-shell">
            <div className="service-detail-copy reveal is-visible">
              <span className="eyebrow"><span className="dot" aria-hidden="true" /> What We Offer</span>
              <h2>Comprehensive solutions for organizations.</h2>
              <p>
                From onsite corporate testing to lab startup mentorship — we partner with businesses
                to deliver reliable mobile health services at scale.
              </p>
              <p>
                Employers, clinics, schools, home care teams, and community organizations rely on
                1 Stikk Mobile for faster collections, cleaner compliance workflows, and mobile
                support that keeps staff focused on patient care and operations.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={mainPhoneDialHref}><Phone aria-hidden="true" /> Call to Book</a>
                <a className="btn btn-outline" href="/contact">Contact our team</a>
              </div>
            </div>
            <article className="service-detail-card reveal is-visible">
              <div className="service-detail-card-head">
                <span className="practice-icon"><Icon aria-hidden="true" /></span>
                <h2>What&apos;s included</h2>
              </div>
              <ul>
                {service.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}

/* -------------------------------------------------------------- Contact */

function ContactPage() {
  return (
    <>
      <section className="section contact-section">
        <div className="container contact-page-shell">
          <div className="contact-page-head reveal is-visible">
            <span className="eyebrow"><span className="dot" aria-hidden="true" /> We&apos;re here to help</span>
            <h1>Contact 1 Stikk Mobile for mobile healthcare and testing.</h1>
            <p className="hero-lead">
              Call, email, or book online — our caring team is ready to get you the care you need,
              whenever you need it.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <a className="btn btn-primary btn-lg" href={mainPhoneDialHref}><Phone aria-hidden="true" /> Call to Book</a>
              <a className="btn btn-dark btn-lg" href={patientBookingUrl} onClick={trackSchedule}><CalendarCheck aria-hidden="true" /> Book Online</a>
            </div>
          </div>
          <div className="contact-cards reveal">
            <a className="contact-card" href={mainPhoneDialHref}>
              <Phone aria-hidden="true" />
              <span>
                <strong>{mainPhone}</strong>
                <small>Main service line · after hours {afterHoursPhone}</small>
              </span>
            </a>
            <a className="contact-card" href={`mailto:${contactEmail}`}>
              <Mail aria-hidden="true" />
              <span>
                <strong>Email us</strong>
                <small>{contactEmail}</small>
              </span>
            </a>
            <div className="contact-card">
              <Clock aria-hidden="true" />
              <span>
                <strong>Always open</strong>
                <small>{officeHoursText}</small>
              </span>
            </div>
          </div>
        </div>
      </section>
      <PatientBookingSteps compact />
      <ServiceAreas />
    </>
  );
}

/* ----------------------------------------------------------------- Articles */

function ArticleCard({ article }) {
  return (
    <Link className="article-card reveal" href={`/articles/${article.slug}`}>
      <div className="article-card-cover">
        <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 33vw" />
      </div>
      <div className="article-card-body">
        <span className="article-cat">{article.category}</span>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <div className="article-meta">
          <span>{article.author.name}</span>
          <span className="article-meta-dot" />
          <span>{article.date}</span>
          <span className="article-meta-dot" />
          <span>{article.readTime}</span>
        </div>
        <span className="article-read-more">Read article <ArrowRight aria-hidden="true" /></span>
      </div>
    </Link>
  );
}

function ArticlesPage() {
  return (
    <>
      <section className="articles-hero">
        <div className="container articles-hero-inner reveal is-visible">
          <span className="eyebrow eyebrow-light"><Sparkles aria-hidden="true" /> DOT collector training resources</span>
          <h1>High-intent guides built to rank for DOT collector training, mock kits, and compliance questions.</h1>
          <p>
            These articles are written to capture buyer-intent searches around collector certification, 49 CFR Part 40,
            physical mock kits, live virtual mocks, and the career upside behind 1 Stikk Mobile&apos;s $75 offer.
          </p>
        </div>
      </section>
      <section className="articles-section">
        <div className="container">
          <div className="articles-grid">
            {articles.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
          <div className="section-foot reveal">
            <Link className="btn btn-dark" href="/training">View the training offer <ArrowRight aria-hidden="true" /></Link>
            <a className="btn btn-primary" href={squareTrainingUrl} onClick={trackCheckout}><CreditCard aria-hidden="true" /> Get the $75 Mock Kit</a>
          </div>
        </div>
      </section>
    </>
  );
}

function ArticleDetailPage({ article }) {
  const relatedArticles = article.related
    .map((slug) => articleMap[slug])
    .filter(Boolean);

  const relatedService = article.relatedService ? serviceMap[article.relatedService] : null;
  const relatedTrainingProgram = article.relatedTraining ? trainingProgramMap[article.relatedTraining] : null;

  return (
    <>
      <div className="container">
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <ChevronRight aria-hidden="true" />
          <Link href="/articles">Articles</Link>
          <ChevronRight aria-hidden="true" />
          <span>{article.category}</span>
        </nav>

        <div className="article-detail-layout">
          <main className="article-detail-main">
            <header className="article-detail-header">
              <span className="article-cat">{article.category}</span>
              <h1>{article.headline}</h1>
              <div className="article-meta">
                <span>{article.author.name}</span>
                <span className="article-meta-dot" />
                <span>{article.date}</span>
                <span className="article-meta-dot" />
                <Clock aria-hidden="true" style={{ width: 13, height: 13 }} />
                <span>{article.readTime}</span>
              </div>
            </header>

            <div className="article-cover">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                sizes="(max-width: 760px) 100vw, (max-width: 1080px) 100vw, 780px"
                priority
              />
            </div>

            <p className="article-intro">{article.intro}</p>

            <div className="article-body">
              {article.sections.map((s) => (
                <div className="article-section" key={s.heading}>
                  <h2>{s.heading}</h2>
                  {s.body.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              ))}
            </div>

            {relatedTrainingProgram ? (
              <div className="article-inline-cta article-sidebar-cta">
                <strong>The next step is the $75 mock-kit training flow.</strong>
                <p>
                  Buy the mock kit first, get portal guidance, receive your shipped materials, and complete five live
                  virtual mock collections with 1 Stikk support.
                </p>
                <a className="btn btn-primary" href={squareTrainingUrl} onClick={trackCheckout}>
                  <CreditCard aria-hidden="true" />
                  Buy the $75 Mock Kit
                </a>
              </div>
            ) : null}

            {article.faqs?.length ? (
              <div className="article-faq-wrapper">
                <ArticleFaq items={article.faqs} />
              </div>
            ) : null}

            <div className="article-author-bio">
              <div className="article-author-bio-avatar">
                <Image src="/images/site/founder.webp" alt={article.author.name} fill sizes="56px" />
              </div>
              <div className="article-author-bio-info">
                <strong>{article.author.name}</strong>
                <span>{article.author.role}</span>
              </div>
            </div>
          </main>

          <aside className="article-sidebar">
            <div className="article-sidebar-cta">
              <strong>{relatedTrainingProgram ? "Ready to start collector training?" : "Ready to book a service?"}</strong>
              <p>
                {relatedTrainingProgram
                  ? `Start ${relatedTrainingProgram.title.toLowerCase()} with 1 Stikk Mobile's $75 mock-kit-first training flow.`
                  : relatedService
                  ? `Book a ${relatedService.title} service — we come to you anywhere in the US.`
                  : "Book mobile lab services — we come to you anywhere in the US."}
              </p>
              {relatedTrainingProgram ? (
                <Link className="btn btn-primary" href={`/training/${relatedTrainingProgram.slug}`}>
                  <CreditCard aria-hidden="true" />
                  See the $75 training offer
                </Link>
              ) : (
                <a className="btn btn-primary" href={mainPhoneDialHref}>
                  <Phone aria-hidden="true" />
                  {relatedService ? `Call to book ${relatedService.title}` : "Call to Book"}
                </a>
              )}
            </div>

            {relatedArticles.length > 0 && (
              <div className="article-sidebar-related">
                <div className="article-sidebar-related-head">Related Articles</div>
                {relatedArticles.map((rel) => (
                  <Link className="article-sidebar-link" href={`/articles/${rel.slug}`} key={rel.slug}>
                    <div style={{ flex: 1 }}>
                      <div className="article-sidebar-link-cat">{rel.category}</div>
                      <strong>{rel.title}</strong>
                    </div>
                    <ChevronRight className="article-sidebar-link-arrow" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>

      {relatedArticles.length > 0 && (
        <section className="article-related">
          <div className="container">
            <div className="article-related-head">
              <h2>More from our resource library</h2>
              <p>Practical guides and expert insights from the 1 Stikk Mobile team.</p>
            </div>
            <div className="articles-grid">
              {relatedArticles.map((a) => <ArticleCard key={a.slug} article={a} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/* -------------------------------------------------------------------- Root */

function ImportantNotice() {
  return (
    <section className="section important-notice">
      <div className="container">
        <div className="notice-shell reveal is-visible">
          <div className="notice-img">
            <Image src="/images/important-notice.png" alt="Important Notice Stamp" width={400} height={250} />
          </div>
          <div className="notice-copy">
            <h2>Important Notice</h2>
            <p>
              We offer a full range of mobile laboratory, wellness, and diagnostic services tailored to individuals, healthcare providers, and organizations. Our certified professionals deliver every service with precision, care, and strict confidentiality. <strong>Please note that all services are non-refundable.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FirstStikkSite({ slug = [] }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isAbout = slug[0] === "about" && !slug[1];
  const isServicesIndex = slug[0] === "services" && !slug[1];
  const isDrugScreening = slug[0] === "services" && slug[1] === "drug-screening";
  const activeService = slug[0] === "services" && slug[1] && slug[1] !== "drug-screening" ? serviceMap[slug[1]] : null;
  const isNonProfit = slug[0] === "non-profit" && !slug[1];
  const isBusinessSolutions = slug[0] === "business-solutions" && !slug[1];
  const isTrainingIndex = slug[0] === "training" && !slug[1];
  const isMockKit = slug[0] === "mock-kit" && !slug[1];
  const activeTrainingProgram = slug[0] === "training" && slug[1] ? trainingProgramMap[slug[1]] : null;
  const isTrainingPage = slug[0] === "training";
  const isContact = slug[0] === "contact" && !slug[1];
  const isProgram = slug[0] === "program" && !slug[1];
  const isArticlesIndex = slug[0] === "articles" && !slug[1];
  const activeArticle = slug[0] === "articles" && slug[1] ? articleMap[slug[1]] : null;
  const isTrainingLike = isTrainingPage || isProgram;

  useEffect(() => {
    document.documentElement.classList.add("js");
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main id="main-content" tabIndex={-1}>
        {isDrugScreening ? (
          <DrugScreeningPage />
        ) : activeService ? (
          <ServiceDetail service={activeService} />
        ) : activeTrainingProgram ? (
          <TrainingProgramDetail program={activeTrainingProgram} />
        ) : isMockKit ? (
          <MockKitPage />
        ) : isTrainingIndex ? (
          <TrainingPage />
        ) : isAbout ? (
          <AboutPage />
        ) : isServicesIndex ? (
          <ServicesIndexPage />
        ) : isNonProfit ? (
          <NonProfitPage />
        ) : isBusinessSolutions ? (
          <BusinessSolutionsPage />
        ) : isContact ? (
          <ContactPage />
        ) : isProgram ? (
          <ProgramPage />
        ) : isArticlesIndex ? (
          <ArticlesPage />
        ) : activeArticle ? (
          <ArticleDetailPage article={activeArticle} />
        ) : (
          <>
      <Hero />
      <PatientBookingSteps />
      <MissionBand />
      <CorePractices />
      <Founder />
      <BbbFeature />
      <ServiceAreas />
      <Testimonials />
      <Faq />
      <ContactCta />
          </>
        )}
      </main>
      <ImportantNotice />
      <Footer />
      <FloatingCta isTraining={(isTrainingLike && !isTrainingIndex) || isMockKit} isHidden={isTrainingIndex} />
    </>
  );
}
