import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "../assets/styles/sass/styles.scss"

const Header = ({ siteTitle }) => (
  <header className="site__header">
    <div className="site__header-logo">
      <Link to="/">{ siteTitle } &mdash;</Link>
    </div>
    <nav className="site__header-nav">
      <AniLink paintDrip to="/">Home</AniLink>
      <AniLink paintDrip to="/posts">Posts</AniLink>
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
