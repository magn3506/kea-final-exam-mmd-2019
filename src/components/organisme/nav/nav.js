import React, { Component } from "react"
import NavTop from "../../molecules/nav-top/nav-top"
import NavBottom from "../../molecules/nav-bottom/nav-bottom"
import styled, { css } from "styled-components"

export class nav extends Component {
  render() {
    const Header = styled.header`
      position: fixed;
    `

    return (
      <Header>
        <nav>
          <NavTop></NavTop>
          <NavBottom></NavBottom>
        </nav>
      </Header>
    )
  }
}

export default nav
