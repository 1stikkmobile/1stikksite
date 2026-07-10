export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/search", "/admin"]
    },
    host: "https://www.1stikkmobile.com",
    sitemap: "https://www.1stikkmobile.com/sitemap.xml"
  };
}
