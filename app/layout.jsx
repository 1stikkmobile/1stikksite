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
const faviconImage = "/favicon.png";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DOT Collector Training $75 | 1 Stikk Mobile Inc.",
    template: "%s | 1 Stikk Mobile Inc."
  },
  description:
    "DOT collector training for $75 with a physical mock kit shipped, live virtual mocks, drug screening support, and healthcare-provider credibility from 1 Stikk Mobile.",
  applicationName: "1 Stikk Mobile Inc.",
  keywords: [
    "1 Stikk Mobile",
    "DOT collector training",
    "DOT collector certification",
    "drug testing mock kit",
    "49 CFR Part 40 training",
    "drug screening services",
    "urine specimen collector training"
  ],
  category: "healthcare",
  creator: "1 Stikk Mobile Inc.",
  publisher: "1 Stikk Mobile Inc.",
  openGraph: {
    title: "DOT Collector Training $75 | 1 Stikk Mobile Inc.",
    description:
      "Get DOT collector training for $75 with a physical mock kit shipped, 5 live virtual mocks, and support from a real healthcare provider.",
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
    title: "DOT Collector Training $75 | 1 Stikk Mobile Inc.",
    description:
      "Physical mock kit shipped, live virtual mocks, and DOT collector training for $75 from 1 Stikk Mobile.",
    images: [logoImage]
  },
  icons: {
    icon: [{ url: faviconImage, type: "image/png" }],
    shortcut: faviconImage,
    apple: faviconImage
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
        "DOT collector training, mock drug screening kits, live virtual mock collections, mobile drug screening, and healthcare support from 1 Stikk Mobile.",
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
