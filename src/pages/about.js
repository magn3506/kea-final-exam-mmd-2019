import React from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"

const AboutPage = props => {
  const MainContentTestRemoveMe = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    background: grey;
    height: 200vh;
    text-align: center;
    font-size: 2em;
    padding-top: 50px;
  `

  return (
    <Layout>
      <MainContentTestRemoveMe>
        <h1>About Page</h1>
      </MainContentTestRemoveMe>
    </Layout>
  )
}

export default AboutPage
