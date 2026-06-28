import localFont from "next/font/local";

import "./globals.css";

const canvaSans = localFont({
  src: "../public/fonts/canva-sans-latin.woff2",
  variable: "--font-brand",
  display: "swap",
  weight: "400 700"
});

const siteUrl = "https://1stikkmobile.com";

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
    "Monroe Louisiana nonprofit healthcare"
  ],
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: "1 Stikk Mobile Inc. | We Always Care",
    description:
      "Compassionate mobile health services, lab access, training, and community wellness support delivered where care is needed most.",
    url: siteUrl,
    siteName: "1 Stikk Mobile Inc.",
    images: [
      {
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"]
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/images/logo/logo.jpg", type: "image/jpeg" }
    ],
    shortcut: "/favicon.png",
    apple: "/images/logo/logo.jpg"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eacf02"
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "1 Stikk Mobile Inc.",
    url: siteUrl,
    logo: `${siteUrl}/images/logo/logo.jpg`,
    image: `${siteUrl}/og-image.jpg`,
    telephone: "+13185120170",
    description:
      "Community-driven mobile health access, lab collections, phlebotomy training, drug screening, and wellness education.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monroe",
      addressRegion: "LA",
      addressCountry: "US"
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: "https://calendly.com/1stikkmobile-meeting/health",
      name: "Book a 1 Stikk Mobile health consultation"
    }
  };

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
