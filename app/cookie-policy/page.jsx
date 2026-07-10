import LegalPage from "../../components/LegalPage";

export const metadata = {
  title: "Cookie Policy",
  alternates: {
    canonical: "https://1stikkmobile.com/cookie-policy"
  },
  robots: {
    index: false,
    follow: false
  }
};

const sections = [
  {
    heading: "What cookies are",
    paragraphs: [
      "Cookies are small text files stored on your device to help websites remember information, support embedded tools, and understand how visitors interact with pages."
    ]
  },
  {
    heading: "How we use cookies",
    paragraphs: [
      "1 Stikk Mobile uses cookies and similar technologies to keep the site functioning, improve performance, remember preferences, and support third-party tools such as Calendly for scheduling.",
      "Some cookies may be set directly by our website and others may be set by service providers whose content is embedded on our pages."
    ]
  },
  {
    heading: "Types of cookies",
    paragraphs: [
      "Essential cookies help core features work, including page security and embedded scheduling.",
      "Performance cookies help us understand site usage so we can improve speed, layout, and usability.",
      "Functional cookies remember choices such as browser preferences or interactions that improve the visitor experience."
    ]
  },
  {
    heading: "Managing cookies",
    paragraphs: [
      "Most browsers let you review, block, or delete cookies through browser settings. If you disable cookies, some parts of the website, including scheduling tools, may not work correctly.",
      "To learn more about how personal information is handled, please review our Privacy Policy."
    ]
  },
  {
    heading: "Contact",
    paragraphs: [
      "Questions about this cookie policy can be sent to collection.lab@1stikkmobile.com."
    ]
  }
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Cookies"
      title="Cookie Policy"
      updated="June 28, 2026"
      sections={sections}
    />
  );
}
