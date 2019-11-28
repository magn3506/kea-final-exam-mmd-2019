import Layout from "../components/layout/layout"
import styled from "styled-components"
import React, { Component } from "react"
import { colors } from "../styles/global-js/colors"
import { device } from "../styles/global-js/breakpoints"
import BarCafeSection from "../components/organisme/barCafeSection/barCafeSection"
import BarHero from "../components/molecules/bar-hero/bar-hero"
import VideoPromo from "../components/organisme/videoPromo/videoPromo"
import ImageTeaser from "../components/organisme/image-teaser/image-teaser"

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
        <ImageTeaser imageUrl="https://p2d7x8x2.stackpathcdn.com/wordpress/wp-content/uploads/2017/01/old-fashioned-1024x684.jpg"></ImageTeaser>
      </Layout>
    )
  }
}

export default BarMainPage
