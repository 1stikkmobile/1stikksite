/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.1stikkmobile.com"
          }
        ],
        destination: "https://1stikkmobile.com/:path*",
        permanent: true
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
