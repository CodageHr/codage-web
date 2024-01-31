const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  trailingSlash: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}',
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async redirects() {

    const redirects = [
      {
        source: "/((?!sitemap|robots|_next|assets|manifest|script|favicon|$).*)",
        destination: '/',
        permanent: true,
      },
    ];

    // Ako niste u produkciji, uklonite redirekciju
    if (isProd) {
      return [];
    }

    return redirects;
  },
};
