import React from "react"
import { Link } from "gatsby"
import { Search } from 'styled-icons/feather'
import Layout from "../layouts/layout"
import Image from "../gatsby-components/image"
import SEO from "../gatsby-components/seo"

import { Button, IconButton, Section } from "../components/Element"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi People</h1>
    <p>I changed some stuff!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Section flex justifyContent="space-evenly" m={2}>
      <Link to="/page-2/">Go to page 2</Link>
      <Button variant="primary">My Custom Button!</Button>
      <IconButton icon={<Search />} />
    </Section>
  </Layout>
)

export default IndexPage
