import React from "react"
import Header from "../header"
//  TODO: Footer
//  TODO LT: SEO solution

export default class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <>
        <Header
          title={title}
          root={location.pathname === `${__PATH_PREFIX__}/`}
        />
        <main>
          <div className="inner-page">{children}</div>
        </main>
      </>
    )
  }
}
