import Layout from "../components/layout/layout"
import styled from "styled-components"
import DrinksMenuComponent from "../components/organisme/drinks-menu/drinks-menu-component"
import React, { Component } from "react"
import { device } from "../styles/global-js/breakpoints"

export class DrinksMenu extends Component {
  state = {
    // True = butique, False = bar
    siteType: false,
  }
  render() {
    const Wrapper = styled.div`
      max-width: 1024px;
      margin: 0 auto;
      @media ${device.laptop} {
        margin: 100px auto;
      }
    `

    return (
      <Layout siteType={this.state.siteType}>
        <Wrapper>
          <DrinksMenuComponent></DrinksMenuComponent>
        </Wrapper>
      </Layout>
    )
  }
}

export default DrinksMenu
