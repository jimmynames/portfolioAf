module.exports = {
  siteMetadata: {
    title: `Jimmy Names Codes`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-112975901-1',
        anonymize: true
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [ `Open Sans Condensed` ]
      }
    }
  ]
}
