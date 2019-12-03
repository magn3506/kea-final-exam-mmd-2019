import NavTop from "../../molecules/nav-top/nav-top"
import NavBottom from "../../molecules/nav-bottom/nav-bottom"
import styled from "styled-components"
import SwitchMobile from "../../atoms/switch-mobile/switch-mobile"

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
      z-index: 1;
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
        {this.state.navOpen === false && (
          <SwitchMobile siteType={this.props.siteType} />
        )}
      </Header>
    )
  }
}

export default nav
