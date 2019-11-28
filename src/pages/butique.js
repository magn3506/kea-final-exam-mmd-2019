import Layout from "../components/layout/layout"
import styled from "styled-components"

import React, { Component } from "react"
import SplashImage from "../components/atoms/splashImage/splashImage"
import TitleCTA from "../components/atoms/TitleCTA/TitleCTA"

const img = "https://dummyimage.com/1200x1000/000/fff.jpg"

export class ButiqueMainPage extends Component {
  state = {
    // True = butique, False = bar
    siteType: true,
  }

  render() {
    const MainContent = styled.div`
      max-width: 1000px;
      margin: 0 auto;
      height: 200vh;
    `

    return (
      <Layout siteType={this.state.siteType}>
        <MainContent>
          <SplashImage img={img} />
          <TitleCTA title="The essential collection" cta="Shop Now" />
        </MainContent>
      </Layout>
    )
  }
}

export default ButiqueMainPage
