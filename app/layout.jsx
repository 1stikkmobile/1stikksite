import localFont from "next/font/local";
import Script from "next/script";

import "./globals.css";

const canvaSans = localFont({
  src: "../public/fonts/canva-sans-latin.woff2",
  variable: "--font-brand",
  display: "swap",
  weight: "400 700"
});

const siteUrl = "https://1stikkmobile.com";
const logoImage = `${siteUrl}/images/logo/logo.jpg`;
const faviconImage = "/favicon.png";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mobile Blood Draws & Lab Testing | 1 Stikk Mobile Inc.",
    template: "%s | 1 Stikk Mobile Inc."
  },
  description:
    "Book mobile blood draws, lab testing, drug screening, DNA testing, and wellness visits at home with 1 Stikk Mobile. Call in or schedule patient service online.",
  applicationName: "1 Stikk Mobile Inc.",
  keywords: [
    "1 Stikk Mobile",
    "mobile blood draw",
    "mobile lab testing",
    "DOT collector training",
    "at home blood test",
    "mobile phlebotomy",
    "drug screening services",
    "DNA paternity testing"
  ],
  category: "healthcare",
  creator: "1 Stikk Mobile Inc.",
  publisher: "1 Stikk Mobile Inc.",
  openGraph: {
    title: "Mobile Blood Draws & Lab Testing | 1 Stikk Mobile Inc.",
    description:
      "Mobile blood draws, lab testing, drug screening, DNA testing, wellness visits, and patient services delivered at home or on site.",
    url: siteUrl,
    siteName: "1 Stikk Mobile Inc.",
    images: [
      {
        url: logoImage,
        width: 1200,
        height: 630,
        alt: "1 Stikk Mobile mobile healthcare services"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Blood Draws & Lab Testing | 1 Stikk Mobile Inc.",
    description:
      "Book mobile blood draws, lab testing, wellness visits, and drug screening with 1 Stikk Mobile.",
    images: [logoImage]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: faviconImage, type: "image/png" }
    ],
    shortcut: faviconImage,
    apple: [
      { url: "/apple-icon.jpg", type: "image/jpeg" },
      { url: faviconImage, type: "image/png" }
    ]
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
      logo: `${siteUrl}/images/logo/logo.jpg`,
      image: logoImage,
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
      logo: `${siteUrl}/images/logo/logo.jpg`,
      image: logoImage,
      telephone: "+13185120170",
      email: "collection.lab@1stikkmobile.com",
      description:
        "Mobile blood draws, lab testing, drug screening, DNA testing, wellness visits, mock drug screening kits, and healthcare training from 1 Stikk Mobile.",
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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '232197706379165');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://www.facebook.com/tr?id=232197706379165&ev=PageView&noscript=1"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
