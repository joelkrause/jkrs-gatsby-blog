import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const postsArchive = () => (
  <Layout>
    <SEO title="Posts" />
    <div className="page__hero">
    <h1>Posts</h1>
    </div>
    <p>Welcome to page 2</p>
    <AniLink paintDrip to="/">Go back to the homepage</AniLink>
  </Layout>
)

export default postsArchive
