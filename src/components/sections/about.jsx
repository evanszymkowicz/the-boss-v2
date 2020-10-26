import React from "react"
import FeatureLink from "../ui/link/feature-link"
import Section from "../ui/section"
// import Underground from "../ui/gfx/underground"
// import introducing from "../../static/assets/introducing.jpeg"
import introducing from "../../../static/assets/introducing.jpeg"
import "../../scss/ui/_section-container.scss"

const About = () => {
  return (
    <div className="section-container section-right">
      <figure className="image">
        <img src={introducing} alt="Introducing" />
      </figure>
      <Section title="Rick Ross" subtitle="Maybach Group">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-two-thirds is-offset-one-third">
              {/* <p>Learn More</p> */}
              <FeatureLink to={`/about`} label="Story" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default About
