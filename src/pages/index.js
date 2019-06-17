import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <SEO title="Page Title"
        description="Page Description" />
    <h1>
      Hello from Gatsby on Now 2.0
    </h1>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
