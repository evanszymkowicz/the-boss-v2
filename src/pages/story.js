import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout/layout"
import Section from "../components/ui/section"
import Featuring from "../components/sections/featuring"
//  local
import story from "../../static/assets/about.svg"
import breaker from "../../static/assets/about-breaker.svg"
//  TODO: Complete the render method
class StoryPage extends React.Component {
  render() {}
}

export default StoryPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
