import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Section from "../components/ui/section"
import Songs from "../components/sections/songs"
import Partners from "../components/sections/partners"
import introducing from "../../static/assets/introducing.jpeg"
import background from "../../static/assets/homepage-bg.jpg"
import bg1 from "../../static/assets/bg1.jpg"
import bg2 from "../../static/assets/bg2.jpg"
import bg3 from "../../static/assets/bg3.jpg"
import bg4 from "../../static/assets/bg4.jpg"

class AboutPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="About">
        <figure className="image">
          <img src={background} alt="Introducing" width="max" height="max" />
        </figure>
        <Section title="2006" subtitle="Port of Miami">
          <p>Rick Ross' debut album Port of Miami was released in August 2006 and debuted at the top spot on the U.S. Billboard 200 chart.</p>
          <p>Christian Hoard of Rolling Stone magazine predicted that it would be "the summer's biggest rap record". The second single was "Push It", which samples "Scarface (Push It to the Limit)", the theme song from the gangster film Scarface.</p>
          <p>The music video for "Push It" was modeled after the film. During that time, Ross made guest performances on two singles from DJ Khaled's debut Listennn... the Album: "Born-N-Raised" and "Holla at Me". Port of Miami received Gold certification from the Recording Industry Association of America on November 8, 2006.</p>
        </Section>
        <figure className="image">
          <img src={bg1} alt="The Beginning" width="max" height="max" />
        </figure>
         <Section title="2006" subtitle="Port of Miami">
          <p>Rick Ross' debut album Port of Miami was released in August 2006 and debuted at the top spot on the U.S. Billboard 200 chart.</p>
          <p>Christian Hoard of Rolling Stone magazine predicted that it would be "the summer's biggest rap record". The second single was "Push It", which samples "Scarface (Push It to the Limit)", the theme song from the gangster film Scarface.</p>
          <p>The music video for "Push It" was modeled after the film.During that time, Ross made guest performances on two singles from DJ Khaled's debut Listennn... the Album: "Born-N-Raised" and "Holla at Me". Port of Miami received Gold certification from the Recording Industry Association of America on November 8, 2006.</p>
        </Section>
        <figure className="image">
          <img src={bg2} alt="2013" width="max" height="max" />
        </figure>
        <Section title="Prime Rick Ross" subtitle="2013">
         <p>On September 5, 2013, Ross premiered the first official single from Mastermind, "No Games" featuring Future produced by J.U.S.T.I.C.E. League. The following day, it was released to Urban contemporary radio.[39] It was followed by the singles "The Devil Is A Lie" with Jay-Z and "War Ready" with Jeezy.</p>
         <p>Less than a month later, Ross' fifth studio album, God Forgives, I Don't, was released on July 31, 2012 after a few delays. Upon its release, the album charted at number eight on the UK Albums Chart and number two on the UK R&B Albums Chart, making it Ross's highest-charting album and first top 10 album in the United Kingdom. The album debuted at number one on the Billboard 200, with first-week sales of 218,000 copies.[29] Ross premiered four songs: "So Sophisticated" featuring Meek Mill, "Touch'N You" featuring Usher, "Hold Me Back", and "3 Kings" featuring Dr. Dre and Jay-Z. The album was certified gold in less than two months. To celebrate his accomplishment and promote his upcoming MMG Tour, Ross released a mixtape, The Black Bar Mitzvah in October. Rick Ross was nominated by The Source as its "Man of the Year"</p>
        </Section>
        <figure className="image">
          <img src={bg3} alt="Crew" width="max" height="max" />
        </figure>
        <Section title="2014" subtitle="Mastermind & Hood Billionaire">
         <p>Rick Ross released his sixth studio album, Mastermind, in March 2014, the album received generally positive reviews from critics and debuted at number one on the Billboard 200 chart with first week sales of 179,000 copies.[40] As of April 8, 2014, the album has sold over 290,000 copies in the United States.[41] In June 2014, it was announced that Ross would make a guest appearance on the docu-series Sisterhood of Hip Hop.</p>
         <p>In October 2014, Ross announced he would be releasing another album, Hood Billionaire.</p>
        </Section>
        <figure className="image">
          <img src={bg4} alt="Introducing" width="max" height="max" />
        </figure>
        <Section title="Present" subtitle="2018 - Current">
        <p>Ross announced that his ninth studio album, Rather You Than Me, was slated for a March 2017 release. The album debuted and peaked number three on the Billboard 200. On February 2, 2018, Rick Ross released "Florida Boy" with T-Pain and Kodak Black as the first single from the album, which was slated for a 2018 release. On June 22, 2018, Ross released "Green Gucci Suit" with Future as the second single from his tenth studio album Port of Miami 2, released on August 9, 2019. The album debuted at number two on the Billboard 200.</p>
        <p>On July 19, 2020, Ross teamed up with singer August Alsina for a track titled "Entanglements", a diss track towards Alsina's ex-lover Jada Pinkett Smith. On August 7, 2020, Ross released the single "Pinned to the Cross", featuring Finn Matthews, following his Verzuz battle with 2 Chainz.</p>
        </Section>

        <Section title="Songs" subtitle="The music you know">
          <Songs entries={[
            {
              slug: "mastermind",
              link: "https://www.youtube.com/watch?v=qk2jeE1LOn8&ab_channel=RickRossVEVO",
              title: "Push It"
            },
            {
              slug: "astonmartinmusic",
              link: "https://nodejs.org/",
              title: "Aston Martin Music"
            },
            {
              slug: "hoodbillionaire",
              title: "Hood Billionaire"
            },
            {
              slug: "familyties",
              link: "https://vuejs.org/",
              title: "Family Ties"
            },
            {
              slug: "appleofmyeye",
              link: "https://reactjs.org/",
              title: "Apple of my Eye"
            },
            {
              slug: "portofmiami",
              link: "https://git-scm.com/",
              title: "Port of Miami"
            },
            {
              slug: "selfmade",
              title: "Self Made Vol. 2"
            },
            {
              slug: "trilla",
              title: "Trilla"
            }
          ]} />
        </Section>
        <Section title="Featuring" subtitle="Collaborations">
          <Partners />
        </Section>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
