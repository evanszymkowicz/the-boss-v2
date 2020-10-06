import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import EmptyLayout from "../components/layout/empty-layout"
import Section from "../components/ui/section"
import Article from "../components/ui/article/article-grid"
import { Paginator } from "@pittica/gatsby-plugin-blog"

const TagTemplate = ({ location, pageContext, data }) => {
  const { name } = pageContext

  if (data.allMarkdownRemark.edges.length > 0) {
    return (
      <Layout location={location} title={`Tag "${name}"`}>
        <Section title="Tag" subtitle={name}>
          <div className="columns is-multiline">
            {data.allMarkdownRemark.edges.map(({ node }) => {
              return (
                <div className="column is-one-third" key={node.fields.slug}>
                  <Article node={node} />
                </div>
              )
            })}
          </div>
        </Section>
        <Paginator context={pageContext} className="bottom-nav" />
      </Layout>
    )
  } else {
    return (
      <EmptyLayout location={location} title="Tag" value={name}>
        Sorry, there is nothing here. Please check back soon.
      </EmptyLayout>
    )
  }
}

export const pageQuery = graphql`
  query TagTemplate($name: String, $limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { tags: { in: [$name] } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
      }
      totalCount
      edges {
        node {
          fields {
            slug
            tags
          }
          excerpt
          timeToRead
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            description
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 1280) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`

export default TagTemplate
