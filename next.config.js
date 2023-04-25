/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/kontakt",
        destination: "/contact",
      },

      {
        source: "/o-mnie",
        destination: "/about-me",
      },

      {
        source: "/oferta",
        destination: "/offer",
      },
    ];
  },
};

module.exports = nextConfig;
