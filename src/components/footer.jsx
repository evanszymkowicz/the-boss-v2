import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
// import TrustpilotReviews from "@pittica/gatsby-plugin-trustpilot-widget"
import Sign from "./ui/sign"
import PrivacyLink from "./ui/link/privacy-link"
import Section from "./ui/section"
import "../scss/ui/_footer.scss"

const Footer = () => {
  const { site, siteBuildMetadata } = useStaticQuery(
    graphql`
        query {
          site {
            siteMetadata {
              organization {
                company
                address
                city
                country
                email
              }
              locale {
                language
              }
              legal {
                privacy
                terms
                cookies
              }
              appearance {
                accent
                background
                theme
              }
            }
          }
          siteBuildMetadata {
            fields {
              seo {
                socials {
                  linkedin {
                    page
                  }
                  github {
                    username
                  }
                }
              }
            }
          }
        }
      `
  )

  const owner = site.siteMetadata.organization
  const appearance = site.siteMetadata.appearance
  const socials = siteBuildMetadata.fields.seo.socials
  const legal = site.siteMetadata.legal

  let tax = null
  let email = null

  if (owner.taxId === owner.vatId) {
    tax = (<div><span className="has-text-primary">VAT Code</span> {owner.vatId}</div>)
  } else {
    tax = (
      <>
        <div><span className="has-text-primary">Fiscal Code</span> {owner.taxId}</div>
        <div><span className="has-text-primary">VAT Num</span> {owner.vatId}</div>
      </>
    )
  }

  if (owner.email) {
    email = (<div><span className="has-text-primary">email</span> <a href={"mailto:" + owner.email}>{owner.email}</a></div>)
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-one-fifths">
            <Sign color={appearance.background} />
          </div>
          <div className="column is-two-fifths">
            <h3>{owner.company}</h3>
            <div className="bracket-group">
              <div className="icon">
                <i className="icon-pittica-marker"></i>
              </div>
              {owner.address}<br />
              {owner.zipCode} {owner.city} ({owner.province})<br />
              {owner.country}
            </div>
            {tax}
            {/* <div><span className="has-text-primary">REA</span> {owner.registryId}</div> */}
            {email}
          </div>
          <div className="column is-one-fifths">
            <ul>
              <li>
                <PrivacyLink />
              </li>
              <li>
                <Link to={legal.cookies}>Cookie Policy</Link>
              </li>
              <li>
                <Link to={legal.terms}>Terms and Conditions</Link>
              </li>
              <li>
                <Link to={'/legal'}>Legal Note</Link>
              </li>
            </ul>
          </div>
          <div className="column is-one-fifths">
            <h2>Connect</h2>
            <ul className="social-follow">
              <li>
                <a href={"https://www.linkedin.com/" + socials.linkedin.page + "/"} title="LinkedIn"><i className="icon-pittica-linkedin"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Section>
              {/* <TrustpilotReviews
                language={site.siteMetadata.locale.language}
                culture={site.siteMetadata.locale.culture}
                theme="dark"
              /> */}
            </Section>
          </div>
        </div>
        <div className="columns">
          <div className="column is-five-fifths">
            © {new Date().getFullYear()}   Evan Szymkowicz
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
