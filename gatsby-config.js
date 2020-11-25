const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = {
  siteMetadata: {
    title: "ProGas Website",
    description:
      "A website for ProGas",
    siteUrl: "https://protoweb.netlify.app/", // No trailing slash allowed!
    image: "/images/get.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@ProGasKe",
    keywords: ["Kenyan", "Best", "Close", "Near", "Good", "Customer", "Service", "Gas", "LPG", "Liquid", "Petroleum", "ytrewq"]
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -90,
      },
    },
  ],
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    );
  },
};
