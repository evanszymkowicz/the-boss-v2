module.exports = {
  siteMetadata: {
    title: `The Boss`,
    author: `Evan Szymkowicz`,
    description: `Home of the Boss`,
    locale: {
      language: `en`,
      culture: `IT`
    },
    siteUrl: `https://evanwolf.tech`,
    legal: {
      privacy: '/legal/privacy',
      terms: '/legal/tos',
      cookies: '/legal/cookies'
    },
    organization: {
      company: `N/A`,
      address: `1666 Connecticut Ave NW`,
      url: `https://evanwolf.tech`,
      logo: `https://evanwolf.techlogo.png`,
      zipCode: `48121`,
      city: `Washington`,
      province: `DC`,
      country: `USA`,
      email: `evan.szymkowicz@evanwolf.tech`
      // taxId: ``,
      // vatId: ``,
      // registryId: ``
    },
    appearance: {
      accent: `#cc151a`,
      background: `#ffffff`,
      theme: `#1d1d1d`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/articles`,
        name: `articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-156974102-1`,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-htaccess`,
      options: {
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: 'pittica.com',
        ErrorDocument: `
          ErrorDocument 401 /error/401/index.html
          ErrorDocument 403 /error/403/index.html
          ErrorDocument 404 /error/404/index.html
          ErrorDocument 500 /error/500/index.html
        `
      }
    },
    {
      resolve: `gatsby-plugin-iubenda-cookie-footer`,
      options: {
        iubendaOptions: {
          "lang": "en",
          "siteId": "",
          "countryDetection": true,
          "consentOnContinuedBrowsing": false,
          "cookiePolicyInOtherWindow": true,
          "cookiePolicyId": "",
          "cookiePolicyUrl": "https://evanwolf.techlegal/cookies",
          "banner": {
            "position": "float-top-center",
            "textColor": "#fff",
            "backgroundColor": "#1d1d1d",
            "acceptButtonDisplay": true,
            "acceptButtonColor": "#cc151a",
            "acceptButtonCaptionColor": "#fff"
          }
        }
      }
    },
    `gatsby-plugin-sass`,
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
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Boss`,
        short_name: `The Boss`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cc151a`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: [
          { domain: 'https://www.gstatic.com', crossOrigin: true },
          { domain: 'https://www.google.com', crossOrigin: true },
          { domain: 'https://www.google-analytics.com', crossOrigin: true }
        ]
      }
    },
    {
      resolve: `@pittica/gatsby-plugin-trustpilot-widget`,
      options: {
        username: "pittica.com",
        template: "5419b6a8b0d04a076446a9ad",
        business: "5eaf034c658436000194e69b"
      }
    },
    {
      resolve: `@pittica/gatsby-plugin-blog`,
      options: {
        postsPerPage: 15,
        templateCategory: "./src/templates/category.js",
        templateTag: "./src/templates/tag.js",
        templateArticle: "./src/templates/blog-post.js",
        templateList: "./src/templates/blog-list.js",
        slug: "blog"
      }
    },
    {
      resolve: `@pittica/gatsby-plugin-seo`,
      options: {
        image: `/share.jpg`,
        socials: {
          twitter: {
            username: "https://twitter.com/home"
          },
          github: {
            username: `https://github.com/evanszymkowicz`
          },
          linkedin: {
            page: `https://www.linkedin.com/in/evanszymkowicz/`
          }
        }
      }
    }
  ]
}
