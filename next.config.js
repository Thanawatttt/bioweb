const path = require("path");

module.exports = {
  // output: 'export', // ลบหรือ comment บรรทัดนี้
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '*',
      },
    ],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/donate',
        destination: 'https://tipme.in.th/floppybird',
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/@meoisreal',
        permanent: true,
      },
      {
        source: '/steam',
        destination: 'https://steamcommunity.com/profiles/76561199194061093/',
        permanent: true,
      },
      {
        source: '/tiktok',
        destination: 'https://www.tiktok.com/@pigcaf',
        permanent: true,
      },
      {
        source: '/facebook',
        destination: 'https://facebook.com/thanawattawilha',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/thanawatttt',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/',
        permanent: true,
      },
    ];
  },
  trailingSlash: true,
};