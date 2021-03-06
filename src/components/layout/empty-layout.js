import React from "react"

import Layout from "./layout"
import Section from "../ui/section"
import Hero from "../ui/hero"

export default class EmptyLayout extends React.Component {
  render() {
    const { location, title, value } = this.props

    return (
      <Layout location={location} title={`${title} "${this.props.value}"`}>
        <Hero title={title} subtitle={value} />
        <Section>
          There are no posts
        </Section>
      </Layout>
    )
  }
}
