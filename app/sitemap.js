import { articles, services, trainingPrograms } from "../components/data";

const siteUrl = "https://1stikkmobile.com";

export default async function sitemap() {
  const staticRoutes = [
    "/",
    "/about",
    "/services",
    "/training",
    "/mock-kit",
    "/program",
    "/non-profit",
    "/business-solutions",
    "/contact",
    "/articles"
  ];

  const routes = [
    ...staticRoutes.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date().toISOString(),
      changeFrequency: path === "/" ? "daily" : "weekly",
      priority: path === "/" ? 1.0 : path === "/mock-kit" ? 0.98 : path === "/training" ? 0.95 : 0.8
    })),
    ...services.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8
    })),
    ...trainingPrograms.map((program) => ({
      url: `${siteUrl}/training/${program.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: program.slug === "drug-screening" ? 0.9 : 0.8
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/articles/${article.slug}`,
      lastModified: article.dateISO,
      changeFrequency: "monthly",
      priority: 0.7
    }))
  ];

  return routes;
}
