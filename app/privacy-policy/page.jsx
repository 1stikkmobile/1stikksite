import LegalPage from "../../components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  alternates: {
    canonical: "https://1stikkmobile.com/privacy-policy"
  },
  robots: {
    index: false,
    follow: false
  }
};

const sections = [
  {
    heading: "Information we collect",
    paragraphs: [
      "1 Stikk Mobile collects the information you choose to share with us when you call, email, submit a form, or request an appointment. That may include your name, contact details, scheduling preferences, and any details needed to coordinate a healthcare-related service inquiry.",
      "We may also receive limited technical information such as browser type, device information, referring pages, and general usage patterns to help us keep the website working properly."
    ]
  },
  {
    heading: "How we use information",
    paragraphs: [
      "We use information to respond to inquiries, schedule services, provide support, improve the website experience, and communicate about our mobile healthcare, training, and community services.",
      "We do not sell your personal information. We may share information with service providers that help us operate the website or scheduling tools, but only for legitimate business purposes tied to delivering our services."
    ]
  },
  {
    heading: "Healthcare and sensitive information",
    paragraphs: [
      "Please avoid sending highly sensitive medical details through general website forms unless we specifically request them for care coordination. When healthcare services are involved, we handle information in line with applicable legal and operational requirements.",
      "If you believe protected health information has been shared with us in error, contact us promptly at collection.lab@1stikkmobile.com so we can help address it."
    ]
  },
  {
    heading: "Cookies and analytics",
    paragraphs: [
      "We and our embedded service providers may use cookies or similar technologies to remember preferences, maintain site functionality, measure performance, and support appointment scheduling tools such as Calendly.",
      "You can manage many cookie settings through your browser. Disabling some cookies may affect website features or scheduling tools."
    ]
  },
  {
    heading: "Your choices and contact",
    paragraphs: [
      "You may contact us to ask for access to, correction of, or deletion of personal information we maintain, subject to applicable law and operational recordkeeping needs.",
      "Questions about this policy can be sent to collection.lab@1stikkmobile.com or by calling (877) 217-8455."
    ]
  }
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      updated="June 28, 2026"
      sections={sections}
    />
  );
}
