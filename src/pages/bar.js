import Layout from "../components/layout/layout"
import styled from "styled-components"
import React, { Component } from "react"
import { colors } from "../styles/global-js/colors"
import { device } from "../styles/global-js/breakpoints"
import BarCafeSection from "../components/organisme/barCafeSection/barCafeSection"
import BarHero from "../components/molecules/bar-hero/bar-hero"
import VideoPromo from "../components/organisme/videoPromo/videoPromo"

export class BarMainPage extends Component {
  state = {
    // True = butique, False = bar
    siteType: false,
  }

  render() {
    return (
      <Layout siteType={this.state.siteType}>
        <BarHero></BarHero>
        <BarCafeSection></BarCafeSection>
        <VideoPromo></VideoPromo>
      </Layout>
    )
  }
}

export default BarMainPage
