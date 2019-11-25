import React from "react"
import Nav from "../organisme/nav/nav"
import { GlobalStyle } from "../../../src/styles/global-js/globalstyles"

const Layout = props => {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      {props.children}
    </div>
  )
}

export default Layout
