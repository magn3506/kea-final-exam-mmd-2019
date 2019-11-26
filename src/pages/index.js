import React from "react"

import styled from "styled-components"
import { colors } from "../styles/global-js/colors"
import Layout from "../components/layout/layout"

const indexPage = () => {
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
      <MainContentTestRemoveMe>INDEX PAGE</MainContentTestRemoveMe>
    </Layout>
  )
}

export default indexPage
