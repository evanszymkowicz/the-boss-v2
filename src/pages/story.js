import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Section from "../components/ui/section"
import Featuring from "../components/sections/featuring"

class StoryPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="Story">
        {/* <figure className="image is max-width">
          <img src={story} alt="Introducing Rick Ross" />
        </figure> */}
        <figure className="image is max-width">
          <img
            src={"https://i.imgur.com/fVMWPHp.jpg"}
            alt="About"
            width="1080"
            height="1080"
          />
        </figure>
        <Section title="About" subtitle="2006: Port of Miami">
          <h2>2006: Port of Miami</h2>
          <p>
            Rick Ross' debut album Port of Miami was released in August 2006 and
            debuted at the top spot on the U.S. Billboard 200 album chart, with
            sales at 187,000 units during the first week. Christian Hoard of
            Rolling Stone magazine predicted that it would be "the summer's
            biggest rap record". The second single was "Push It", which samples
            "Scarface (Push It to the Limit)", the theme song from the gangster
            film Scarface. The music video for "Push It" was modeled after the
            film. During that time, Ross made guest performances on two singles
            from DJ Khaled's debut Listennn... the Album: "Born-N-Raised" and
            "Holla at Me". Port of Miami received Gold certification from the
            Recording Industry Association of America on November 8, 2006.
          </p>
        </Section>
        <Section title="Featuring" subtitle="Associated Acts">
          <Featuring />
        </Section>
      </Layout>
    )
  }
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
