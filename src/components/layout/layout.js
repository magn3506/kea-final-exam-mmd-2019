import React from "react"
import { GlobalStyle } from "../../styles/global-js/globalstyles"
import Nav from "../organisme/nav/nav"
import styled, { css } from "styled-components"
import { device } from "../../styles/global-js/breakpoints"

import Footer from "../organisme/footer/footer"
import SwitchSection from "../molecules/switchSection/switchSection"

const Layout = props => {
  const TopSpacerModule = styled.div`
    height: 40px;
    width: 100vw;
    @media ${device.laptop} {
      height: 100px;
    }
  `

  return (
    <div>
      <GlobalStyle siteType={props.siteType} />
      <Nav siteType={props.siteType}></Nav>
      <TopSpacerModule />
      {props.children}
<<<<<<< HEAD
      <SwitchSection siteType={props.siteType} />
      <Footer siteType={props.siteType} />
=======
>>>>>>> magnus_v1
    </div>
  )
}
export default Layout
