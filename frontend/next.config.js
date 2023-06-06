/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/channels",
        destination: "/channels/me",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
