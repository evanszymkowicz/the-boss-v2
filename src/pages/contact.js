import React from "react"
import { graphql } from "gatsby"
import ReCaptcha, { Loader } from "@pittica/gatsby-plugin-recaptcha"
import axios from "axios"
import classNames from "classnames"
import Layout from "../components/layout/layout"
import Hero from "../components/ui/hero"
import Section from "../components/ui/section"
import Input from "../components/ui/form/input"
import Textarea from "../components/ui/form/textarea"
import CheckBox from "../components/ui/form/checkbox"
import Button from "../components/ui/form/button"
import PrivacyLink from "../components/ui/link/privacy-link"

class ContactPage extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      active: false,
      loading: false,
      privacy: false,
      captcha: null,
      error: false,
      complete: false,
      name: "",
      email: "",
      message: "",
    }

    Loader()
  }

  handleClick = () => {
    if (this.state.privacy && this.state.captcha) {
      this.setState(() => {
        return {
          active: true,
          loading: true,
        }
      })

      const data = new FormData()
      data.set("name", this.state.name)
      data.set("email", this.state.email)
      data.set("message", this.state.message)
      data.set("g-recaptcha", this.state.captcha)

      axios
        .post("https://www.google.com", data, {
          headers: {
            "Content-Type": "multipart / form-data",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          this.setState({
            loading: false,
            error: false,
            complete: true,
            captcha: null,
          })
        })
        .catch((res) => {
          this.setState({
            active: false,
            loading: false,
            error: true,
            complete: true,
            captcha: null,
          })
        })
    }
  }

  handleInputChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handlePrivacy = (e) => {
    let checked = e.target.checked

    this.setState(() => {
      return {
        privacy: checked,
      }
    })
  }

  verifyCallback = (token) => {
    this.setState(() => {
      return {
        captcha: token,
      }
    })
  }

  render() {
    return (
      <Layout location={this.props.location} title="Contacts">
        <Hero title="Contacts" subtitle="Contact The Boss" />
        {/* <Airplane active={this.state.active}> */}
        <Section>
          {!this.state.complete && (
            <form method="post">
              <div className="columns">
                <div className="column">
                  <Input
                    name="name"
                    label="Name"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="column">
                  <Input
                    type="email"
                    name="email"
                    label="E-Mail"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <Textarea
                    label="Message"
                    name="message"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <CheckBox name="privacy" onChange={this.handlePrivacy}>
                    I declare that I have read the{" "}
                    <PrivacyLink> privacy policy </PrivacyLink>.
                  </CheckBox>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <ReCaptcha
                    action="homepage"
                    sitekey="6Ldq-_UUAAAAACZQEpZvFdd2QkwzQxvdHsVpEKVA"
                    callback={this.verifyCallback}
                  />
                </div>
                <div className="column">
                  <Button
                    label="Submit"
                    onClick={this.handleClick}
                    loading={this.state.loading}
                  />
                </div>
              </div>
            </form>
          )}
          {this.state.complete && (
            <div
              className={classNames({
                notification: true,
                "is-info": !this.state.error,
                "is-danger": this.state.error,
              })}
            >
              {!this.state.error && (
                <>
                  <h3> Message sent! </h3>
                  <p> You will be contacted as soon as possible. </p>
                  <p> Thank you for contacting us. </p>
                </>
              )}
              {this.state.error && (
                <>
                  <h3> Message not sent! </h3>
                  <p>This feature has been disabled.</p>
                  <p>Sorry for the inconvenience. </p>
                </>
              )}
            </div>
          )}
        </Section>
        {/* </Airplane> */}
      </Layout>
    )
  }
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
