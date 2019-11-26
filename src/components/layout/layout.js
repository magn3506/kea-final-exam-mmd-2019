import React from "react"
import { GlobalStyle } from "../../styles/global-js/globalstyles"
import Nav from "../organisme/nav/nav"
import styled, { css } from "styled-components"
import { device } from "../../styles/global-js/breakpoints"

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
      <Nav></Nav>
      <TopSpacerModule />
      {props.children}
    </div>
  )
}
export default Layout
