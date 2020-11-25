const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = {
  siteMetadata: {
    title: 'ProGas Website',
    description: 'A website for ProGas',
    siteUrl: 'https://protoweb.netlify.app/', // No trailing slash allowed!
    image: '/images/get.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@ProGasKe',
    keywords: [
      'Kenyan',
      'Best',
      'Close',
      'Near',
      'Good',
      'Customer',
      'Service',
      'Gas',
      'LPG',
      'Liquid',
      'Petroleum',
      'ytrewq',
    ],
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`getpro`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -90,
      },
    },
  ],
  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      }),
    );
  },
};
