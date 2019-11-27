import React from "react"
import { GlobalStyle } from "../../styles/global-js/globalstyles"
import Nav from "../organisme/nav/nav"
import styled, { css } from "styled-components"
import { device } from "../../styles/global-js/breakpoints"

import Footer from "../organisme/footer/footer"
import SwitchSection from "../molecules/switchSection/switchSection"

const Layout = props => {
  const TopSpacerModule = styled.div`
    height: 75px;
    width: 100vw;
    @media ${device.laptop} {
      height: 150px;
    }
  `

  return (
    <div>
      <GlobalStyle />
      <Nav siteType={props.siteType}></Nav>
      <TopSpacerModule />
      {props.children}
      <SwitchSection siteType={props.siteType} />
      <Footer siteType={props.siteType} />
    </div>
  )
}
export default Layout
