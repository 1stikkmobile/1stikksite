/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/about-us",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
