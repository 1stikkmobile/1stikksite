export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/search", "/admin"]
    },
    sitemap: "https://1stikkmobile.com/sitemap.xml"
  };
}
