import styled from "styled-components"
import { colors } from "../styles/global-js/colors"
import Layout from "../components/layout/layout"

import React, { Component } from "react"

export class IndexPage extends Component {
  state = {
    // True = butique, False = bar
    siteType: true,
  }

  render() {
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
      <Layout siteType={this.state.siteType}>
        <MainContentTestRemoveMe>INDEX PAGE</MainContentTestRemoveMe>
      </Layout>
    )
  }
}

export default IndexPage
