const siteUrl = "https://1stikkmobile.com";

const body = `# 1 Stikk Mobile Inc.

> Mobile healthcare, drug screening, blood draws, wellness visits, and workforce training.

## Preferred URLs
- ${siteUrl}/
- ${siteUrl}/services
- ${siteUrl}/services/drug-screening
- ${siteUrl}/services/routine-collections
- ${siteUrl}/training
- ${siteUrl}/training/phlebotomy
- ${siteUrl}/training/drug-screening
- ${siteUrl}/non-profit
- ${siteUrl}/business-solutions
- ${siteUrl}/articles

## Summary
1 Stikk Mobile Inc. provides mobile blood draws, DOT and non-DOT drug testing, wellness checkups, DNA and paternity testing, behavioral health support, employer testing programs, and healthcare training.

## Contact
- Phone: (877) 217-8455
- Email: collection.lab@1stikkmobile.com

## Sitemap
- ${siteUrl}/sitemap.xml
`;

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
