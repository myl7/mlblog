module.exports = {
  siteMetadata: {
    title: 'mylmoe',
    description: 'myl7\'s blog with some other utilities',
    siteUrl: 'https://myl.moe',
    author: {
      name: 'myl7',
      email: 'myl@myl.moe',
      avatar: '' // Leave empty to use Gravatar
    }
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-69FKKHXY5H'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              backgroundColor: 'transparent'
            }
          },
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-embed-snippet',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: true,
              noInlineHighlight: true,
            }
          }
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
        ignore: [
          '**/LICENSE'
        ]
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'site',
        path: './content/site/',
        ignore: [
          '**/LICENSE'
        ]
      },
      __key: 'site'
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({query: {site, allMarkdownRemark}}) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.pubDate,
                  url: site.siteMetadata.siteUrl + edge.node.fields.path,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.path,
                  custom_elements: [{'content:encoded': edge.node.html}]
                })
              })
            },
            query: `
              {
                allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___pubDate]}) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                        path
                      }
                      frontmatter {
                        title
                        pubDate
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'mylmoe\'s RSS Feed',
            match: '^/posts/'
          }
        ]
      }
    }
  ]
}
