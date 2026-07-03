import FirstStikkSite from "../../components/FirstStikkSite";
import { notFound } from "next/navigation";
import { articleMap, articles, faqs, serviceMap, services, trainingProgramMap, trainingPrograms } from "../../components/data";

const siteUrl = "https://1stikkmobile.com";
const defaultOgImage = `${siteUrl}/og-image.jpg`;

function buildPageMetadata({
  title,
  description,
  canonical,
  openGraphTitle,
  openGraphDescription,
  image = defaultOgImage,
  imageAlt = "1 Stikk Mobile healthcare and training services"
}) {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: openGraphTitle ?? `${title} | 1 Stikk Mobile`,
      description: openGraphDescription ?? description,
      url: canonical,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle ?? `${title} | 1 Stikk Mobile`,
      description: openGraphDescription ?? description,
      images: [image]
    }
  };
}

function isValidRoute(slug = []) {
  if (slug.length === 0) return true;

  if (slug.length === 1) {
    return [
      "about",
      "services",
      "training",
      "program",
      "non-profit",
      "business-solutions",
      "contact",
      "articles"
    ].includes(slug[0]);
  }

  if (slug.length === 2) {
    if (slug[0] === "services") {
      return slug[1] === "drug-screening" || Boolean(serviceMap[slug[1]]);
    }

    if (slug[0] === "training") {
      return Boolean(trainingProgramMap[slug[1]]);
    }

    if (slug[0] === "articles") {
      return Boolean(articleMap[slug[1]]);
    }
  }

  return false;
}

export async function generateStaticParams() {
  const serviceSlugs = services.map((s) => ["services", s.slug]);
  const trainingSlugs = trainingPrograms.map((p) => ["training", p.slug]);
  const articleSlugs = articles.map((a) => ["articles", a.slug]);
  return [
    { slug: [] },
    { slug: ["about"] },
    { slug: ["services"] },
    ...serviceSlugs.map((slug) => ({ slug })),
    { slug: ["training"] },
    ...trainingSlugs.map((slug) => ({ slug })),
    { slug: ["program"] },
    { slug: ["non-profit"] },
    { slug: ["business-solutions"] },
    { slug: ["contact"] },
    { slug: ["articles"] },
    ...articleSlugs.map((slug) => ({ slug }))
  ];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug ?? [];

  if (!isValidRoute(slug)) {
    return {
      title: "Page Not Found | 1 Stikk Mobile",
      robots: {
        index: false,
        follow: false
      }
    };
  }

  if (slug.length === 0) {
    return buildPageMetadata({
      title: "Mobile Blood Draws, Drug Testing & Phlebotomy Training",
      description:
        "Book mobile blood draws, drug screening, wellness visits, and hands-on phlebotomy training with 1 Stikk Mobile. Serving patients, employers, and communities nationwide.",
      canonical: siteUrl,
      openGraphTitle: "1 Stikk Mobile | Mobile Healthcare, Testing and Training",
      openGraphDescription:
        "Mobile blood draws, wellness checkups, drug screening, DNA testing, and healthcare training brought directly to homes, employers, and communities."
    });
  }

  // Training program detail page
  if (slug[0] === "training" && slug[1]) {
    const program = trainingProgramMap[slug[1]];
    if (program) {
      const canonical = `${siteUrl}/training/${program.slug}`;
      return buildPageMetadata({
        title: `${program.title} Training`,
        description: program.description,
        canonical,
        openGraphTitle: `${program.title} | 1 Stikk Mobile`,
        image: `${siteUrl}${program.image}`,
        imageAlt: program.imageAlt
      });
    }
  }

  // Training index
  if (slug[0] === "training" && !slug[1]) {
    return buildPageMetadata({
      title: "Phlebotomy and Drug Testing Training Programs",
      description:
        "Beginner-friendly phlebotomy, drug screening, workforce, and lab business consulting programs from 1 Stikk Mobile. Call (318) 512-0170 Ext. 205 to enroll.",
      canonical: `${siteUrl}/training`,
      openGraphTitle: "Phlebotomy and Drug Testing Training Programs | 1 Stikk Mobile",
      openGraphDescription:
        "Hands-on healthcare training programs for beginners and professionals. Phlebotomy certification, DOT drug screening, workforce development, and lab business mentorship."
    });
  }

  // Drug screening detail (specialized rich page)
  if (slug[0] === "services" && slug[1] === "drug-screening") {
    const canonical = `${siteUrl}/services/drug-screening`;
    return buildPageMetadata({
      title: "Drug Screening Services | DOT, SAP Assessment & More",
      description:
        "Mobile DOT & non-DOT drug screening, SAP Assessment, medical drug testing, and mock collections training — brought to your location by 1 Stikk Mobile. Call (877) 217-8455.",
      canonical,
      openGraphTitle: "Drug Screening Services | 1 Stikk Mobile",
      openGraphDescription:
        "DOT and non-DOT drug screens, SAP assessment, employer compliance testing, and mock collections training delivered mobile nationwide."
    });
  }

  // Service detail page
  if (slug[0] === "services" && slug[1]) {
    const service = serviceMap[slug[1]];
    if (service) {
      const canonical = `${siteUrl}/services/${service.slug}`;
      return buildPageMetadata({
        title: `${service.title} | Mobile Healthcare`,
        description: `${service.summary} Book a mobile ${service.title.toLowerCase()} service with 1 Stikk Mobile — we come to you anywhere in the US.`,
        canonical,
        openGraphTitle: `${service.title} | 1 Stikk Mobile`,
        image: `${siteUrl}${service.image}`,
        imageAlt: service.imageAlt
      });
    }
  }

  // Services index
  if (slug[0] === "services" && !slug[1]) {
    return buildPageMetadata({
      title: "Mobile Healthcare Services",
      description:
        "Blood draws, wellness, drug screening, genetic testing, behavioral health, and more — all delivered mobile to your home or facility. Book online or call (877) 217-8455.",
      canonical: `${siteUrl}/services`,
      openGraphTitle: "Mobile Healthcare Services | 1 Stikk Mobile",
      openGraphDescription:
        "Blood draws, wellness visits, drug screening, DNA testing, and behavioral health support delivered where care is needed."
    });
  }

  // Non Profit
  if (slug[0] === "non-profit") {
    return buildPageMetadata({
      title: "Community Health Fairs and Mobile Wellness Screenings",
      description:
        "1 Stikk Mobile brings health fairs, wellness screenings, and outreach to underserved communities. Partner with us to bring care where it's needed most.",
      canonical: `${siteUrl}/non-profit`,
      openGraphTitle: "Community Health Fairs and Mobile Wellness Screenings | 1 Stikk Mobile",
      openGraphDescription:
        "Mobile health fairs, outreach, and wellness events for underserved communities across all 50 states."
    });
  }

  // Business Solutions
  if (slug[0] === "business-solutions") {
    return buildPageMetadata({
      title: "On-Site Drug Testing and Mobile Lab Services for Organizations",
      description:
        "On-site testing, lab business mentorship, and partnership programs for clinics, schools, employers, and mobile providers. Schedule a consult with 1 Stikk Mobile.",
      canonical: `${siteUrl}/business-solutions`,
      openGraphTitle: "On-Site Drug Testing and Mobile Lab Services | 1 Stikk Mobile",
      openGraphDescription:
        "Corporate drug testing, lab startup consulting, and mobile health partnerships for organizations nationwide."
    });
  }

  // About
  if (slug[0] === "about") {
    return buildPageMetadata({
      title: "About Us | Meet Founder Tiffany Clinton",
      description:
        "Meet Tiffany Clinton, CPT, RMA — CEO and founder of 1 Stikk Mobile Inc. Faith-rooted, community-driven mobile healthcare serving all 50 states.",
      canonical: `${siteUrl}/about`,
      openGraphTitle: "About 1 Stikk Mobile | Meet Founder Tiffany Clinton",
      openGraphDescription:
        "Faith-rooted, community-driven mobile healthcare. Tiffany Clinton leads a team that delivers care with dignity while training the next generation of mobile healthcare professionals."
    });
  }

  // Program page
  if (slug[0] === "program" && !slug[1]) {
    return buildPageMetadata({
      title: "Youth and Adult Workforce Development Programs",
      description:
        "Join 1 Stikk Mobile's purpose-driven programs: Moving With a Purpose youth empowerment, Hustle With a Purpose second-chance adult program, and Mock Collections drug screen training. Call 877-217-8455.",
      canonical: `${siteUrl}/program`,
      openGraphTitle: "Youth and Adult Workforce Development Programs | 1 Stikk Mobile",
      openGraphDescription:
        "Youth empowerment, adult second-chance programs, and drug screen mock collection training. Build skills, careers, and generational wealth with 1 Stikk Mobile."
    });
  }

  // Contact
  if (slug[0] === "contact") {
    return buildPageMetadata({
      title: "Contact 1 Stikk Mobile",
      description:
        "Reach 1 Stikk Mobile anytime. Call (877) 217-8455, book online, or email collection.lab@1stikkmobile.com. Open 24 hours, 7 days a week.",
      canonical: `${siteUrl}/contact`,
      openGraphTitle: "Contact 1 Stikk Mobile | (877) 217-8455",
      openGraphDescription:
        "Call (877) 217-8455 or book online. Open 24/7 and serving clients nationwide."
    });
  }

  // Articles index
  if (slug[0] === "articles" && !slug[1]) {
    const canonical = `${siteUrl}/articles`;
    return buildPageMetadata({
      title: "Health and Wellness Articles | Mobile Healthcare Resources",
      description:
        "Expert guides on mobile blood draws, DOT drug testing, phlebotomy training, chain of custody, and wellness screenings — written by certified healthcare professionals at 1 Stikk Mobile.",
      canonical,
      openGraphTitle: "Health and Wellness Articles | 1 Stikk Mobile",
      openGraphDescription:
        "Patient care guides, employer compliance resources, and training insights from 1 Stikk Mobile."
    });
  }

  // Article detail
  if (slug[0] === "articles" && slug[1]) {
    const article = articleMap[slug[1]];
    if (article) {
      const canonical = `${siteUrl}/articles/${article.slug}`;
      return {
        title: article.title,
        description: article.description,
        alternates: { canonical },
        openGraph: {
          title: `${article.headline} | 1 Stikk Mobile`,
          description: article.description,
          url: canonical,
          type: "article",
          publishedTime: article.dateISO,
          authors: [article.author.name],
          images: [
            {
              url: `${siteUrl}${article.image}`,
              width: 1200,
              height: 630,
              alt: article.imageAlt
            }
          ]
        },
        twitter: {
          card: "summary_large_image",
          title: `${article.headline} | 1 Stikk Mobile`,
          description: article.description,
          images: [`${siteUrl}${article.image}`]
        }
      };
    }
  }

  // Home — no override needed, layout.jsx defaults apply
  return {};
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug ?? [];

  if (!isValidRoute(slug)) {
    notFound();
  }

  const article = slug[0] === "articles" && slug[1] ? articleMap[slug[1]] : null;
  const service = slug[0] === "services" && slug[1] ? serviceMap[slug[1]] : null;
  const trainingProgram = slug[0] === "training" && slug[1] ? trainingProgramMap[slug[1]] : null;
  const currentPath = slug.length === 0 ? "/" : `/${slug.join("/")}`;
  const currentUrl = slug.length === 0 ? siteUrl : `${siteUrl}${currentPath}`;
  const breadcrumbItems = [
    { name: "Home", item: siteUrl },
    ...(slug[0] === "services" ? [{ name: "Services", item: `${siteUrl}/services` }] : []),
    ...(slug[0] === "training" ? [{ name: "Training", item: `${siteUrl}/training` }] : []),
    ...(slug[0] === "articles" ? [{ name: "Articles", item: `${siteUrl}/articles` }] : []),
    ...(slug[0] === "program" ? [{ name: "Programs", item: `${siteUrl}/program` }] : []),
    ...(slug.length > 0
      ? [
          {
            name:
              article?.title ||
              service?.title ||
              trainingProgram?.title ||
              slug[0].replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase()),
            item: currentUrl
          }
        ]
      : [])
  ];

  const articleSchema = article
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.headline,
        description: article.description,
        image: `${siteUrl}${article.image}`,
        datePublished: article.dateISO,
        dateModified: article.dateISO,
        author: {
          "@type": "Person",
          name: article.author.name,
          jobTitle: article.author.role,
          worksFor: {
            "@type": "Organization",
            name: "1 Stikk Mobile Inc.",
            url: siteUrl
          }
        },
        publisher: {
          "@type": "Organization",
          name: "1 Stikk Mobile Inc.",
          url: siteUrl,
          logo: { "@type": "ImageObject", url: `${siteUrl}/images/logo/logo.jpg` }
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/articles/${article.slug}` }
      }
    : null;

  const breadcrumbSchema = breadcrumbItems.length > 1
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.item
        }))
      }
    : null;

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${currentUrl}#webpage`,
    url: currentUrl,
    name:
      article?.headline ||
      service?.title ||
      trainingProgram?.title ||
      (slug.length === 0
        ? "Mobile Blood Draws, Drug Testing and Phlebotomy Training"
        : breadcrumbItems[breadcrumbItems.length - 1]?.name),
    isPartOf: {
      "@id": `${siteUrl}#website`
    },
    about: {
      "@id": `${siteUrl}#medical-business`
    }
  };

  const serviceSchema = service
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        serviceType: service.title,
        description: service.summary,
        provider: {
          "@id": `${siteUrl}#medical-business`
        },
        areaServed: "United States",
        url: currentUrl
      }
    : null;

  const trainingSchema = trainingProgram
    ? {
        "@context": "https://schema.org",
        "@type": "Course",
        name: trainingProgram.title,
        description: trainingProgram.description,
        provider: {
          "@type": "Organization",
          name: "1 Stikk Mobile Inc.",
          url: siteUrl
        },
        url: currentUrl
      }
    : null;

  const faqSchema = (article?.faqs?.length || (!slug || slug.length === 0))
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: ((article && article.faqs) || faqs).map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a }
        }))
      }
    : null;

  return (
    <>
      <FirstStikkSite slug={slug} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      {serviceSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      )}
      {trainingSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trainingSchema) }} />
      )}
      {articleSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      )}
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
    </>
  );
}
