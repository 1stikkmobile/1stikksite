import localFont from "next/font/local";

import "./globals.css";

const canvaSans = localFont({
  src: "../public/fonts/canva-sans-latin.woff2",
  variable: "--font-brand",
  display: "swap",
  weight: "400 700"
});

const siteUrl = "https://1stikkmobile.com";
const logoImage = "/images/logo/logo.jpg";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "1 Stikk Mobile Inc. | Mobile Health Access and Training",
    template: "%s | 1 Stikk Mobile Inc."
  },
  description:
    "Mobile healthcare access, blood collections, lab testing support, phlebotomy training, drug screening, and workforce readiness for underserved communities.",
  applicationName: "1 Stikk Mobile Inc.",
  keywords: [
    "1 Stikk Mobile",
    "mobile health services",
    "mobile lab services",
    "phlebotomy training",
    "blood collection",
    "drug screening services",
    "Monroe Louisiana nonprofit healthcare"
  ],
  category: "healthcare",
  creator: "1 Stikk Mobile Inc.",
  publisher: "1 Stikk Mobile Inc.",
  openGraph: {
    title: "1 Stikk Mobile Inc. | We Always Care",
    description:
      "Compassionate mobile health services, lab access, training, and community wellness support delivered where care is needed most.",
    url: siteUrl,
    siteName: "1 Stikk Mobile Inc.",
    images: [
      {
        url: logoImage,
        width: 500,
        height: 500,
        alt: "1 Stikk Mobile Inc. logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "1 Stikk Mobile Inc. | Mobile Health Access",
    description:
      "Book mobile health services, training, lab support, and community wellness help with 1 Stikk Mobile Inc.",
    images: [logoImage]
  },
  icons: {
    icon: [{ url: logoImage, type: "image/jpeg" }],
    shortcut: logoImage,
    apple: logoImage
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eacf02"
};

export default function RootLayout({ children }) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "1 Stikk Mobile Inc.",
      url: siteUrl,
      logo: `${siteUrl}${logoImage}`,
      image: `${siteUrl}${logoImage}`,
      telephone: "+13185120170",
      email: "collection.lab@1stikkmobile.com",
      sameAs: ["https://www.facebook.com/share/1Adzhmj8YD/"]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "1 Stikk Mobile Inc.",
      publisher: {
        "@id": `${siteUrl}#organization`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": `${siteUrl}#medical-business`,
      name: "1 Stikk Mobile Inc.",
      url: siteUrl,
      logo: `${siteUrl}${logoImage}`,
      image: `${siteUrl}${logoImage}`,
      telephone: "+13185120170",
      email: "collection.lab@1stikkmobile.com",
      description:
        "Community-driven mobile health access, lab collections, phlebotomy training, drug screening, and wellness education.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Monroe",
        addressRegion: "LA",
        addressCountry: "US"
      },
      areaServed: {
        "@type": "Country",
        name: "United States"
      },
      potentialAction: {
        "@type": "ReserveAction",
        target: "https://myriad.health/book?token=WnjFcnpNSCsatghXix",
        name: "Book a 1 Stikk Mobile patient service"
      }
    }
  ];

  return (
    <html lang="en">
      <body className={canvaSans.variable}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
