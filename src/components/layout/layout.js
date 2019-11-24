import React from "react"
import Nav from "../organisme/nav/nav"
import { GlobalStyle } from "../../../src/styles/global-js/globalstyles"

export default ({ children }) => (
  <div>
    <GlobalStyle></GlobalStyle>
    <Nav></Nav>
    {children}
  </div>
)
