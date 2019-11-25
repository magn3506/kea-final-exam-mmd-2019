import React, { Component } from "react"
import NavTop from "../../molecules/nav-top/nav-top"
import NavBottom from "../../molecules/nav-bottom/nav-bottom"

class nav extends Component {
  state = {
    siteType: true,
    open: false,
  }

  handleSiteChange = () => {
    this.setState({
      siteType: !this.state.siteType,
    })
  }

  handleNavOpen = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    return (
      <nav>
        {/* <h1>Hello</h1> */}
        <NavTop
          handleNavOpen={this.handleNavOpen}
          siteType={this.state.siteType}
        ></NavTop>
        <NavBottom
          siteType={this.state.siteType}
          handleSiteChange={this.handleSiteChange}
          open={this.state.open}
          handleNavOpen={this.handleNavOpen}
        ></NavBottom>
      </nav>
    )
  }
}

export default nav
