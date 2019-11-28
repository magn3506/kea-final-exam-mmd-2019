import React from "react"

import Layout from "../components/layout/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    contentfulEvents(title: { eq: $slug }) {
      title
    }
  }
`

const EventPost = props => {
  return (
    <Layout>
      <h1>{props.data.contentfulEvents.title}</h1>
    </Layout>
  )
}

export default EventPost
