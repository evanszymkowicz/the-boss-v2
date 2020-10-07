import React from "react"
import { graphql } from "gatsby"
import Story from "../components/sections/story"
import Blog from "../components/sections/blog"
import Featuring from "../components/sections/featuring"
import Layout from "../components/layout/layout"
import Section from "../components/ui/section"

export default class Index extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout location={this.props.location}>
        <Story />
        <Blog posts={posts} />{" "}
        <Section>
          <Featuring />
        </Section>{" "}
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "^/blog/" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MM/DD/YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630) {
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
