/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "bdatia.com.ar" }],
        destination: "https://www.bdatia.com.ar/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
