/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: "Hats, Boots & Bourbon",
    author: "Jakob & Magnus",
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: "360378157.1677ed0.390b016d7ffa49ff8fe3e4390476c88e",
      },
    },
  ],
}
