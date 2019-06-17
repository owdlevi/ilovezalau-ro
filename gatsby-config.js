module.exports = {
  siteMetadata: {
    title: `I Love Zalau`,
    author: `David Levente Dozsa`,
    about: `"I Love Zalău" isi propune sa devina un loc de intalnire virtual pentru zalauanii de pretutindeni si pentru toti cei care cunosc si iubesc acest oras. `,
    description: `"I Love Zalău" isi propune sa devina un loc de intalnire virtual pentru zalauanii de pretutindeni si pentru toti cei care cunosc si iubesc acest oras.`,
    siteUrl: `https://www.ilovezalau.ro/`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
