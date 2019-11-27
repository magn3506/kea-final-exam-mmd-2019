import Layout from "../components/layout/layout"
import styled from "styled-components"
import BarHero from "../components/molecules/bar-hero/bar-hero"
import React, { Component } from "react"

export class BarMainPage extends Component {
  state = {
    // True = butique, False = bar
    siteType: false,
  }
  render() {
    return (
      <Layout siteType={this.state.siteType}>
        <BarHero></BarHero>
      </Layout>
    )
  }
}

export default BarMainPage
