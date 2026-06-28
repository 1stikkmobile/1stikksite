import Link from "next/link";

export default function LegalPage({ eyebrow, title, updated, sections }) {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="container legal-hero-inner">
          <p className="legal-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="legal-updated">Last updated: {updated}</p>
          <Link className="legal-home-link" href="/">
            Return to 1 Stikk Mobile
          </Link>
        </div>
      </section>

      <section className="legal-body">
        <div className="container legal-card">
          {sections.map((section) => (
            <article key={section.heading} className="legal-section">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
