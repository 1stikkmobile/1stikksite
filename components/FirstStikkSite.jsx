"use client";

import {
    ArrowLeft,
    ArrowRight,
    Award,
    BadgeCheck,
    CalendarCheck,
    Check,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Clock,
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
    calendlyBookingUrl,
    calendlyUrl,
    contactEmail,
    corePractices,
    facebookUrl,
    faqs,
    labPortalUrl,
    mainPhone,
    mainPhoneDialHref,
    myriadUrl,
    nav,
    officeHoursText,
    serviceMap,
    serviceStates,
    services,
    testimonials,
    trainingPhone,
    trainingPhoneExt,
    trainingPhoneHref,
    trainingProgramMap,
    trainingPrograms
} from "./data";

function bookHref(type) {
  if (type === "training") return calendlyBookingUrl;
  if (type === "call") return mainPhoneDialHref;
  if (type === "contact") return "/contact";
  return myriadUrl;
}

function scrollToSection(id) {
  const node = document.getElementById(id);
  if (!node) return;
  node.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ------------------------------------------------------------------ Header */

function Header({ mobileOpen, setMobileOpen }) {
  const [openMega, setOpenMega] = useState(null);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-inner">
          <a className="utility-phone" href={mainPhoneDialHref}>
            <Phone aria-hidden="true" />
            <span>Call anytime · {mainPhone}</span>
          </a>
          <span className="utility-note">
            <Sparkles aria-hidden="true" />
            Mobile scheduling open · nationwide service
          </span>
        </div>
      </div>

      <div className="nav-shell container">
        <Link className="brand" href="/" aria-label="1 Stikk Mobile home" onClick={() => setMobileOpen(false)}>
          <Image src="/images/logo/logo.jpg" alt="1 Stikk Mobile logo" width={56} height={56} priority />
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
              <Link className="nav-link" href={item.href}>
                {item.label}
                {item.mega ? <ChevronDown aria-hidden="true" size={15} /> : null}
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
                    <span>Patient service — booked online in minutes.</span>
                    <a className="btn btn-primary btn-sm" href={myriadUrl}>
                      <CalendarCheck aria-hidden="true" /> Book a Service
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
                    <span>Call to enroll: {trainingPhone} · Ext. {trainingPhoneExt}</span>
                    <a className="btn btn-dark btn-sm" href={calendlyBookingUrl}>
                      <CalendarCheck aria-hidden="true" /> Schedule on Calendly
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-ghost" href={mainPhoneDialHref}>
            <Phone aria-hidden="true" />
            Call
          </a>
          <a className="btn btn-primary" href={myriadUrl}>
            <CalendarCheck aria-hidden="true" />
            Book a Service
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
          <div className="mobile-cta">
            <a className="btn btn-primary" href={myriadUrl} onClick={() => setMobileOpen(false)}>
              <CalendarCheck aria-hidden="true" /> Book a Service
            </a>
            <a className="btn btn-ghost" href={mainPhoneDialHref} onClick={() => setMobileOpen(false)}>
              <Phone aria-hidden="true" /> Call {mainPhone}
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
        <div className="hero-copy reveal is-visible">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" /> We come to you · all 50 states
          </span>
          <h1>Healthcare delivered to your door.</h1>
          <p className="hero-lead">
            Book lab work, wellness visits, or health screenings for yourself or a loved one — a caring,
            certified professional comes right to the home. No driving. No waiting rooms. Just dependable care.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href={myriadUrl}>
              <CalendarCheck aria-hidden="true" />
              Book a Service
            </a>
            <a className="btn btn-outline btn-lg" href={mainPhoneDialHref}>
              <Phone aria-hidden="true" />
              {mainPhone}
            </a>
          </div>
          <ul className="hero-trust">
            <li><Star aria-hidden="true" /> Certified, compassionate professionals</li>
            <li><MapPin aria-hidden="true" /> We come to you — no driving needed</li>
            <li><Clock aria-hidden="true" /> Open 24 hours, 7 days a week</li>
          </ul>
        </div>

        <div className="hero-visual reveal is-visible">
          <div className="hero-photo hero-photo-main">
            <Image src="/images/site/van-care.webp" alt="A 1 Stikk Mobile clinician greeting a patient at a mobile lab van" fill sizes="(max-width: 760px) 95vw, (max-width: 1080px) 95vw, 48vw" priority />
          </div>
          <div className="hero-photo hero-photo-sub">
            <Image src="/images/site/mobile-lab.webp" alt="The 1 Stikk Mobile laboratory van set up for sample collection" fill sizes="(max-width: 900px) 90vw, 28vw" />
          </div>
          <div className="hero-badge">
            <strong>(877) 217-8455</strong>
            <span>Call to schedule anytime</span>
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
          We send certified professionals directly to your home or your loved one's — for blood draws,
          wellness checks, and health screenings. Simple, dignified, and dependable. No trip required.
        </p>
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
          <a className="btn btn-primary" href={myriadUrl}><CalendarCheck aria-hidden="true" /> Book a Service</a>
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
            <a className="btn btn-primary" href={myriadUrl}><CalendarCheck aria-hidden="true" /> Book a Service</a>
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
          <a className="btn btn-primary" href={myriadUrl}><CalendarCheck aria-hidden="true" /> Get started today</a>
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
            Headquartered in Monroe, Louisiana and serving communities across all 50 states. Wherever you
            are, we coordinate to bring collection and care to your door.
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
            Answers to the most common questions about our mobile healthcare services, training programs,
            and business solutions.
          </p>
          <a className="btn btn-primary" href={myriadUrl}><CalendarCheck aria-hidden="true" /> Book a Service</a>
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
          We come to you. Just call or book online in minutes.
        </p>
        <div className="contact-actions">
          <a className="btn btn-primary btn-lg" href={myriadUrl}><CalendarCheck aria-hidden="true" /> Book a Service</a>
          <a className="btn btn-outline btn-lg" href={mainPhoneDialHref}><Phone aria-hidden="true" /> {mainPhone}</a>
        </div>
        <div className="contact-cards">
          <a className="contact-card" href={mainPhoneDialHref}>
            <Phone aria-hidden="true" />
            <span><strong>{mainPhone}</strong><small>Call anytime · after hours {afterHoursPhone}</small></span>
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
          <p>Accessible, reliable, and compassionate mobile lab services — delivered right to your doorstep.</p>
          <a className="btn btn-primary btn-sm" href={myriadUrl}><CalendarCheck aria-hidden="true" /> Book a Service</a>
        </div>
        <div className="footer-col">
          <strong>Services</strong>
          {services.map((s) => (
            <Link href={`/services/${s.slug}`} key={s.slug}>{s.title}</Link>
          ))}
        </div>
        <div className="footer-col">
          <strong>Quick links</strong>
          <Link href="/about">About / Meet founder</Link>
          <Link href="/services">Our services</Link>
          <a href={calendlyBookingUrl}>Training &amp; programs</a>
          <Link href="/contact">Contact us</Link>
          <a href={labPortalUrl}>Laboratory portal</a>
        </div>
        <div className="footer-col">
          <strong>Get in touch</strong>
          <a href={mainPhoneDialHref}>{mainPhone}</a>
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
        <p className="footer-copy">© 2026 1 Stikk Mobile Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* --------------------------------------------------------- Floating action */

function FloatingCta({ isTraining }) {
  if (isTraining) {
    return (
      <div className="floating-actions" aria-label="Quick training actions">
        <a className="floating-action floating-call" href={trainingPhoneHref} aria-label={`Call training team at ${trainingPhone} extension ${trainingPhoneExt}`}>
          <Phone aria-hidden="true" />
          <span>Call Ext. {trainingPhoneExt}</span>
        </a>
        <a className="floating-action floating-book" href={calendlyBookingUrl}>
          <CalendarCheck aria-hidden="true" />
          <span>Schedule</span>
        </a>
      </div>
    );
  }
  return (
    <div className="floating-actions" aria-label="Quick actions">
      <a className="floating-action floating-call" href={mainPhoneDialHref}>
        <Phone aria-hidden="true" />
        <span>Call</span>
      </a>
      <a className="floating-action floating-book" href={myriadUrl}>
        <CalendarCheck aria-hidden="true" />
        <span>Book a Service</span>
      </a>
    </div>
  );
}

/* ---------------------------------------------------------- Service detail */

function ServiceDetail({ service }) {
  const Icon = service.icon;
  const primary =
    service.book === "training"
      ? { href: calendlyBookingUrl, label: "Schedule on Calendly" }
      : service.book === "call"
      ? { href: mainPhoneDialHref, label: `Call ${mainPhone}` }
      : service.book === "contact"
      ? { href: "/contact", label: "Contact our team" }
      : { href: myriadUrl, label: "Book a Service" };

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
              <a className="btn btn-primary btn-lg" href={primary.href}><CalendarCheck aria-hidden="true" /> {primary.label}</a>
              <a className="btn btn-outline btn-lg" href={mainPhoneDialHref}><Phone aria-hidden="true" /> {mainPhone}</a>
            </div>
          </div>
          <article className="service-detail-card reveal is-visible">
            <div className="service-detail-card-head">
              <span className="practice-icon"><Icon aria-hidden="true" /></span>
              <h2>What’s included</h2>
            </div>
            <ul>
              {service.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </article>
        </div>

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

/* -------------------------------------------------------- Training landing */

function TrainingPage() {
  return (
    <section className="section training-page">
      <div className="container training-page-shell">
        <div className="training-hero-copy reveal is-visible">
          <span className="eyebrow"><span className="dot" aria-hidden="true" /> Training &amp; programs</span>
          <h1>Build a career in mobile healthcare.</h1>
          <p>
            Step into real-world labs with compassionate instructors, flexible schedules, and national
            certification prep. Every program blends virtual learning with hands-on practice so you can
            serve patients confidently.
          </p>
          <ul className="training-highlights">
            <li>Hands-on skill labs and ride-alongs</li>
            <li>Certification prep and clinical mentorship</li>
            <li>Business pathways for mobile lab owners</li>
          </ul>
          <div className="hero-actions">
            <a className="btn btn-dark btn-lg" href={calendlyBookingUrl}><CalendarCheck aria-hidden="true" /> Schedule on Calendly</a>
            <a className="btn btn-outline btn-lg" href={trainingPhoneHref}><Phone aria-hidden="true" /> {trainingPhone} · Ext. {trainingPhoneExt}</a>
          </div>
          <a className="training-index-phone" href={trainingPhoneHref} aria-label={`Call training team at ${trainingPhone} extension ${trainingPhoneExt}`}>
            <Phone aria-hidden="true" />
            <span>
              {trainingPhone} · <strong>Ext. {trainingPhoneExt}</strong>
              <small>Training team direct line</small>
            </span>
          </a>
        </div>
        <div className="training-hero-media reveal is-visible" aria-hidden="true">
          <div className="training-hero-main">
            <Image src="/images/training/training-hands-on.jpg" alt="Hands-on venipuncture practice during training" fill sizes="(max-width: 760px) 100vw, (max-width: 1080px) 45vw, 520px" priority />
          </div>
          <div className="training-hero-stack">
            <div className="training-hero-thumb">
              <Image src="/images/training/training-guidance.jpg" alt="Instructor pointing to a vein before a draw" fill sizes="(max-width: 760px) 45vw, (max-width: 1080px) 22vw, 240px" />
            </div>
            <div className="training-hero-thumb">
              <Image src="/images/training/training-polaroids.jpg" alt="Polaroid collage from 1 Stikk Mobile training" fill sizes="(max-width: 760px) 45vw, (max-width: 1080px) 22vw, 240px" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="training-grid">
          {trainingPrograms.map((p) => {
            const Icon = p.icon;
            return (
              <Link className="training-card reveal is-visible" href={`/training/${p.slug}`} key={p.slug}>
                <div className="training-card-media">
                  <Image src={p.image} alt={p.imageAlt} fill sizes="(max-width: 760px) 100vw, (max-width: 1080px) 45vw, 360px" />
                </div>
                <div className="training-card-body">
                  <div className="training-card-head">
                    <span className="training-card-icon"><Icon aria-hidden="true" /></span>
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

/* ------------------------------------------------- Training program detail */

function TrainingProgramDetail({ program }) {
  const Icon = program.icon;
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

            <div className="training-call-banner" role="complementary" aria-label="Training team phone number">
              <Phone aria-hidden="true" />
              <div className="training-call-banner-text">
                <strong>Call our training team</strong>
                <span>{trainingPhone} · Ext. {trainingPhoneExt}</span>
                <small>We answer questions &amp; help you get started</small>
              </div>
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary btn-lg" href={calendlyBookingUrl}>
                <CalendarCheck aria-hidden="true" /> Schedule on Calendly
              </a>
              <a className="btn btn-outline btn-lg" href={trainingPhoneHref}>
                <Phone aria-hidden="true" /> {trainingPhone} · Ext. {trainingPhoneExt}
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
              <a className="training-sidebar-call" href={trainingPhoneHref}>
                <Phone aria-hidden="true" />
                {trainingPhone}
                <small>Ext. {trainingPhoneExt} · Training direct line</small>
              </a>
              <a className="btn btn-dark" href={calendlyBookingUrl} style={{ width: "100%", justifyContent: "center" }}>
                <CalendarCheck aria-hidden="true" /> Book on Calendly
              </a>
            </div>
          </aside>
        </div>

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
            <h2>Schedule your session</h2>
            <p>
              Pick a time that works for you. Or call us directly at{" "}
              <strong>{trainingPhone} · Ext. {trainingPhoneExt}</strong> — we&apos;re happy to help.
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
          <div className="training-call-strip">
            <Phone aria-hidden="true" />
            <div className="training-call-strip-text">
              <strong>Prefer to call? We make it easy.</strong>
              <span>Reach our training team at {trainingPhone} · Ext. {trainingPhoneExt} — Mon to Sun, 24 hours</span>
            </div>
            <a className="btn btn-primary" href={trainingPhoneHref}>
              <Phone aria-hidden="true" /> Call Ext. {trainingPhoneExt}
            </a>
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
                <span className="practice-icon"><Rel aria-hidden="true" /></span>
                <strong>{p.title}</strong>
                <p>{p.summary}</p>
                <span className="practice-cta">View program <ArrowRight aria-hidden="true" /></span>
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
            <a className="btn btn-primary btn-lg" href={myriadUrl}><CalendarCheck aria-hidden="true" /> Book a Service</a>
            <a className="btn btn-outline btn-lg" href={mainPhoneDialHref}><Phone aria-hidden="true" /> {mainPhone}</a>
          </div>
        </div>
      </section>
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
          <h1>Comprehensive mobile healthcare services.</h1>
          <p>Every service is professional, mobile, and built around getting your care done without the trip.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="practice-grid">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link className="practice-card reveal" href={`/services/${s.slug}`} key={s.slug}>
                  <span className="practice-icon"><Icon aria-hidden="true" /></span>
                  <strong>{s.title}</strong>
                  <p className="practice-summary">{s.summary}</p>
                  <span className="practice-cta">Learn more <ArrowRight aria-hidden="true" /></span>
                </Link>
              );
            })}
          </div>
          <div className="section-foot reveal">
            <a className="btn btn-primary" href={myriadUrl}><CalendarCheck aria-hidden="true" /> Book a Service</a>
            <a className="btn btn-ghost" href={mainPhoneDialHref}><Phone aria-hidden="true" /> {mainPhone}</a>
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
              <a className="btn btn-primary btn-lg" href={myriadUrl}><CalendarCheck aria-hidden="true" /> Book Appointment</a>
              <a className="btn btn-outline btn-lg" href={mainPhoneDialHref}><Phone aria-hidden="true" /> {mainPhone}</a>
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
            <a className="btn btn-primary" href={myriadUrl}><CalendarCheck aria-hidden="true" /> Book Appointment</a>
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
            <a className="btn btn-primary" href={myriadUrl}><CalendarCheck aria-hidden="true" /> Book Appointment</a>
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
              Essential training for a successful career in drug screening — join us to gain the
              hands-on experience you need to excel in the field.
            </p>
            <ul className="ds-list">
              <li><Check aria-hidden="true" /> Live Q &amp; A with certified instructors</li>
              <li><Check aria-hidden="true" /> Live mock collections practice</li>
              <li><Check aria-hidden="true" /> Certificate of Completion</li>
              <li><Check aria-hidden="true" /> Drug Screen Collector Registration &amp; Onboarding</li>
            </ul>
            <p className="ds-contact-note">
              For assistance with the online training portal, call{" "}
              <a href={trainingPhoneHref}>{trainingPhone}</a>.
            </p>
            <a className="btn btn-dark" href={calendlyBookingUrl}><CalendarCheck aria-hidden="true" /> Schedule Training</a>
          </div>
          <div className="ds-split-media reveal">
            <div className="ds-img-frame">
              <Image
                src="/images/services/blood-draw.jpg"
                alt="1 Stikk Mobile practitioner performing a blood draw"
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
            <a className="btn btn-primary btn-lg" href={myriadUrl}><CalendarCheck aria-hidden="true" /> Book Appointment</a>
            <a className="btn btn-outline btn-lg" href={mainPhoneDialHref}><Phone aria-hidden="true" /> {mainPhone}</a>
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
          <h1>Healthcare for Every Community.</h1>
          <p className="hero-lead">
            1 Stikk Mobile brings health fairs, screenings, and outreach directly to underserved
            neighborhoods — because everyone deserves access to quality care.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href="/contact"><HeartHandshake aria-hidden="true" /> Partner With Us</a>
            <a className="btn btn-outline btn-lg" href={mainPhoneDialHref}><Phone aria-hidden="true" /> {mainPhone}</a>
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
              <div className="hero-actions">
                <a className="btn btn-primary" href="/contact"><HeartHandshake aria-hidden="true" /> Partner With Us</a>
                <a className="btn btn-outline" href={mainPhoneDialHref}><Phone aria-hidden="true" /> {mainPhone}</a>
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
          <h1>Mobile Healthcare Built for Business.</h1>
          <p className="hero-lead">
            On-site testing, lab partnerships, and business mentorship — designed for clinics,
            employers, and healthcare entrepreneurs ready to grow.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href={calendlyBookingUrl}><CalendarCheck aria-hidden="true" /> Schedule a Consult</a>
            <a className="btn btn-outline btn-lg" href={mainPhoneDialHref}><Phone aria-hidden="true" /> {mainPhone}</a>
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
              <div className="hero-actions">
                <a className="btn btn-primary" href={calendlyBookingUrl}><CalendarCheck aria-hidden="true" /> Schedule a Consult</a>
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
            <h1>Anytime, anywhere.</h1>
            <p className="hero-lead">
              Call, email, or book online — our caring team is ready to get you the care you need,
              whenever you need it.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <a className="btn btn-primary btn-lg" href={myriadUrl}><CalendarCheck aria-hidden="true" /> Book a Service</a>
              <a className="btn btn-outline btn-lg" href={mainPhoneDialHref}><Phone aria-hidden="true" /> {mainPhone}</a>
            </div>
          </div>
          <div className="contact-cards reveal">
            <a className="contact-card" href={mainPhoneDialHref}>
              <Phone aria-hidden="true" />
              <span>
                <strong>{mainPhone}</strong>
                <small>Call anytime · after hours {afterHoursPhone}</small>
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
      <ServiceAreas />
    </>
  );
}

/* -------------------------------------------------------------------- Root */

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
  const activeTrainingProgram = slug[0] === "training" && slug[1] ? trainingProgramMap[slug[1]] : null;
  const isTrainingPage = slug[0] === "training";
  const isContact = slug[0] === "contact" && !slug[1];

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
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main>
        {isDrugScreening ? (
          <DrugScreeningPage />
        ) : activeService ? (
          <ServiceDetail service={activeService} />
        ) : activeTrainingProgram ? (
          <TrainingProgramDetail program={activeTrainingProgram} />
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
        ) : (
          <>
            <Hero />
            <MissionBand />
            <CorePractices />
            <Testimonials />
            <Faq />
            <ContactCta />
          </>
        )}
      </main>
      <Footer />
      <FloatingCta isTraining={isTrainingPage} />
    </>
  );
}
