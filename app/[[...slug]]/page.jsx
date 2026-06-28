import FirstStikkSite from "../../components/FirstStikkSite";
import { serviceMap, trainingProgramMap } from "../../components/data";

const siteUrl = "https://1stikkmobile.com";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug ?? [];

  // Training program detail page
  if (slug[0] === "training" && slug[1]) {
    const program = trainingProgramMap[slug[1]];
    if (program) {
      const canonical = `${siteUrl}/training/${program.slug}`;
      return {
        title: `${program.title} | 1 Stikk Mobile Training`,
        description: program.description,
        alternates: { canonical },
        openGraph: {
          title: `${program.title} — 1 Stikk Mobile`,
          description: program.description,
          url: canonical,
          type: "website"
        }
      };
    }
  }

  // Training index
  if (slug[0] === "training" && !slug[1]) {
    return {
      title: "Training & Healthcare Programs | 1 Stikk Mobile",
      description:
        "Beginner-friendly phlebotomy, drug screening, workforce, and lab business consulting programs from 1 Stikk Mobile. Call (318) 512-0170 Ext. 205 to enroll.",
      alternates: { canonical: `${siteUrl}/training` },
      openGraph: {
        title: "Training & Healthcare Programs — 1 Stikk Mobile",
        description:
          "Hands-on healthcare training programs for beginners and professionals. Phlebotomy certification, DOT drug screening, workforce development, and lab business mentorship.",
        url: `${siteUrl}/training`,
        type: "website"
      }
    };
  }

  // Drug screening detail (specialized rich page)
  if (slug[0] === "services" && slug[1] === "drug-screening") {
    const canonical = `${siteUrl}/services/drug-screening`;
    return {
      title: "Drug Screening Services | DOT, SAP Assessment & More | 1 Stikk Mobile",
      description:
        "Mobile DOT & non-DOT drug screening, SAP Assessment, medical drug testing, and mock collections training — brought to your location by 1 Stikk Mobile. Call (877) 217-8455.",
      alternates: { canonical },
      openGraph: {
        title: "Drug Screening — 1 Stikk Mobile",
        description: "DOT & non-DOT drug screens, SAP Assessment, employer compliance testing, and mock collections training delivered mobile nationwide.",
        url: canonical,
        type: "website"
      }
    };
  }

  // Service detail page
  if (slug[0] === "services" && slug[1]) {
    const service = serviceMap[slug[1]];
    if (service) {
      const canonical = `${siteUrl}/services/${service.slug}`;
      return {
        title: `${service.title} | Mobile Healthcare | 1 Stikk Mobile`,
        description: `${service.summary} Book a mobile ${service.title.toLowerCase()} service with 1 Stikk Mobile — we come to you anywhere in the US.`,
        alternates: { canonical },
        openGraph: {
          title: `${service.title} — 1 Stikk Mobile`,
          description: service.summary,
          url: canonical,
          type: "website"
        }
      };
    }
  }

  // Services index
  if (slug[0] === "services" && !slug[1]) {
    return {
      title: "Mobile Healthcare Services | 1 Stikk Mobile",
      description:
        "Blood draws, wellness, drug screening, genetic testing, behavioral health, and more — all delivered mobile to your home or facility. Book online or call (877) 217-8455.",
      alternates: { canonical: `${siteUrl}/services` }
    };
  }

  // Non Profit
  if (slug[0] === "non-profit") {
    return {
      title: "Non Profit Community Health | 1 Stikk Mobile",
      description:
        "1 Stikk Mobile brings health fairs, wellness screenings, and outreach to underserved communities. Partner with us to bring care where it's needed most.",
      alternates: { canonical: `${siteUrl}/non-profit` },
      openGraph: {
        title: "Non Profit Community Health — 1 Stikk Mobile",
        description: "Mobile health fairs, outreach, and wellness events for underserved communities across all 50 states.",
        url: `${siteUrl}/non-profit`,
        type: "website"
      }
    };
  }

  // Business Solutions
  if (slug[0] === "business-solutions") {
    return {
      title: "Business Solutions | Mobile Lab Services for Organizations | 1 Stikk Mobile",
      description:
        "On-site testing, lab business mentorship, and partnership programs for clinics, schools, employers, and mobile providers. Schedule a consult with 1 Stikk Mobile.",
      alternates: { canonical: `${siteUrl}/business-solutions` },
      openGraph: {
        title: "Business Solutions — 1 Stikk Mobile",
        description: "Corporate drug testing, lab startup consulting, and mobile health partnerships for organizations nationwide.",
        url: `${siteUrl}/business-solutions`,
        type: "website"
      }
    };
  }

  // About
  if (slug[0] === "about") {
    return {
      title: "About Us | Meet Founder Tiffany Clinton | 1 Stikk Mobile",
      description:
        "Meet Tiffany Clinton, CPT, RMA — CEO and founder of 1 Stikk Mobile Inc. Faith-rooted, community-driven mobile healthcare serving all 50 states.",
      alternates: { canonical: `${siteUrl}/about` },
      openGraph: {
        title: "About 1 Stikk Mobile — Meet Founder Tiffany Clinton",
        description: "Faith-rooted, community-driven mobile healthcare. Tiffany Clinton leads a team that delivers care with dignity while training the next generation of mobile healthcare professionals.",
        url: `${siteUrl}/about`,
        type: "website"
      }
    };
  }

  // Contact
  if (slug[0] === "contact") {
    return {
      title: "Contact Us | 1 Stikk Mobile — (877) 217-8455",
      description:
        "Reach 1 Stikk Mobile anytime. Call (877) 217-8455, book online, or email collection.lab@1stikkmobile.com. Open 24 hours, 7 days a week.",
      alternates: { canonical: `${siteUrl}/contact` },
      openGraph: {
        title: "Contact 1 Stikk Mobile — (877) 217-8455",
        description: "Call (877) 217-8455 or book online. Open 24/7 — we come to you anywhere in the US.",
        url: `${siteUrl}/contact`,
        type: "website"
      }
    };
  }

  // Home — no override needed, layout.jsx defaults apply
  return {};
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <FirstStikkSite slug={resolvedParams?.slug ?? []} />;
}
