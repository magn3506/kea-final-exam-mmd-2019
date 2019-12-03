import NavTop from "../../molecules/nav-top/nav-top"
import NavBottom from "../../molecules/nav-bottom/nav-bottom"
import styled, { css } from "styled-components"

import React, { Component } from "react"

export class nav extends Component {
  state = {
    navOpen: false,
  }

  handleNavOpen = () => {
    this.setState({
      navOpen: !this.state.navOpen,
    })
  }

  render() {
    const Header = styled.header`
      position: fixed;
      z-index: 2;
    `

    return (
      <Header>
        <nav>
          <NavTop
            siteType={this.props.siteType}
            handleNavOpen={this.handleNavOpen}
          ></NavTop>
          <NavBottom
            siteType={this.props.siteType}
            navOpen={this.state.navOpen}
            handleNavOpen={this.handleNavOpen}
          ></NavBottom>
        </nav>
      </Header>
    )
  }
}

export default nav
