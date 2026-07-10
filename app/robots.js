export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/search", "/admin"]
    },
    host: "https://1stikkmobile.com",
    sitemap: "https://1stikkmobile.com/sitemap.xml"
  };
}
