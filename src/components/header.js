import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../assets/styles/sass/styles.scss"

const Header = ({ siteTitle }) => (
  <header className="site__header">
    <div className="site__header-logo">
      <Link to="/">{ siteTitle } &mdash;</Link>
    </div>
    <nav className="site__header-nav">
      <Link to="/">Home</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
