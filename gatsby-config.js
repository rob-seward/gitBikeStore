require("dotenv").config({path: `.env`,})

module.exports = {
  siteMetadata: {
    title: "GitBikeCo",
    siteTitleDefault: "git-bike-co",
    siteUrl: "https://donthaveoneyet.com",
    hrefLang: "en",
    viewport: "width=device-width, initial-scale=1.0, minimum-scale=1.0",
    description:
      "Gatsby V3 shopify rc starter modfied - store / product context and my own sample products",
    siteImage: "/default-og-image.jpg",
    twitter: "@blah",
  },
  flags: {
    FAST_DEV: true,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        apiKey: process.env.SHOPIFY_API_KEY,
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-styled-components",
    "gatsby-optional-chaining",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
  ].filter(Boolean),
}
