import React from "react"
import NavTop from "../../molecules/nav-top/nav-top"
import NavBottom from "../../molecules/nav-bottom/nav-bottom"
import styled, { css } from "styled-components"

const Nav = props => {
  const Header = styled.header`
    position: fixed;
  `

  return (
    <Header>
      <nav>
        <NavTop siteType={props.siteType}></NavTop>
        <NavBottom siteType={props.siteType}></NavBottom>
      </nav>
    </Header>
  )
}

export default Nav
