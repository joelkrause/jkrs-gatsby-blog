import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const postsArchive = () => (
  <Layout>
    <SEO title="Posts" />
    <div className="page__hero">
    <h1>Posts</h1>
    </div>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default postsArchive
