module.exports = {
  siteMetadata: {
    title: `SlayTony`,
    description: `desc`,
    author: `SlayTony`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  pathPrefix: "/slaytony.github.io",
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              // prism custom css를 불러올 수 있도록 설정
              customCss: require.resolve("./src/styles/prism-custom.css"),
              prompt: {
                user: "Copy",
                copier: "Copied!"
              }
            },
          },
        ],
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
      resolve: `gatsby-plugin-github-pages`,
      options: {
      },
    },
  ],
}
