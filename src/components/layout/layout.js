import React from "react"
//  TODO: Header
//  TODO: Footer

export default class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <>
        // <Header title={title} root={location.pathname === `${__PATH_PREFIX__}/`} />
        <main>
          <div className="inner-page">
            {children}
          </div>
        </main>
        // <Footer />
      </>
    )
  }
}
