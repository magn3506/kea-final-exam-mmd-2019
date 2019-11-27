import React from "react"
import { GlobalStyle } from "../../styles/global-js/globalstyles"
import Nav from "../organisme/nav/nav"
import styled, { css } from "styled-components"
import { device } from "../../styles/global-js/breakpoints"

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
    </div>
  )
}
export default Layout
