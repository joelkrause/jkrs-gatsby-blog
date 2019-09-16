import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="page__hero">
    <h1>Hello, I'm Joel</h1>
    <p>I'm a frontend web developer from Melbourne currently working at studio chriate.</p>
    <p>i build beautiful pixel perfect wordpress websites.</p>
    </div>
    <h2>Latest Posts</h2>
    POSTS
  </Layout>
)

export default IndexPage