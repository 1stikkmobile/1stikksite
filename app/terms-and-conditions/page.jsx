import LegalPage from "../../components/LegalPage";

export const metadata = {
  title: "Terms and Conditions",
  alternates: {
    canonical: "https://1stikkmobile.com/terms-and-conditions"
  },
  robots: {
    index: false,
    follow: false
  }
};

const sections = [
  {
    heading: "Use of this website",
    paragraphs: [
      "By using the 1 Stikk Mobile website, you agree to use it only for lawful purposes and in a way that does not interfere with the website, our operations, or other visitors.",
      "Website content is provided for general informational purposes and may be updated, revised, or removed at any time."
    ]
  },
  {
    heading: "Appointments and service requests",
    paragraphs: [
      "Submitting a request through this website or through Calendly does not guarantee an appointment until scheduling is confirmed by our team.",
      "Service availability, clinical scope, geographic coverage, and timing may vary based on staffing, safety, physician orders, and operational constraints."
    ]
  },
  {
    heading: "No emergency use",
    paragraphs: [
      "This website is not intended for medical emergencies. If you are experiencing an emergency, call 911 or seek immediate emergency care."
    ]
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "The website design, branding, copy, graphics, and other content belonging to 1 Stikk Mobile are protected by applicable intellectual property laws and may not be reused without permission.",
      "Third-party names, logos, and services remain the property of their respective owners."
    ]
  },
  {
    heading: "Disclaimer and liability",
    paragraphs: [
      "We work to keep the website accurate and available, but we do not guarantee that it will always be uninterrupted, error-free, or perfectly current.",
      "To the fullest extent permitted by law, 1 Stikk Mobile is not liable for indirect, incidental, or consequential damages arising from website use."
    ]
  },
  {
    heading: "Contact",
    paragraphs: [
      "Questions about these terms can be sent to collection.lab@1stikkmobile.com or directed to our team by phone at (877) 217-8455."
    ]
  }
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms and Conditions"
      updated="June 28, 2026"
      sections={sections}
    />
  );
}
