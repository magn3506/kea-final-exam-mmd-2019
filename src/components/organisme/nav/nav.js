import React, { Component } from "react"
import NavTop from "../../molecules/nav-top/nav-top"
import NavBottom from "../../molecules/nav-bottom/nav-bottom"

export class nav extends Component {
  state = {
    siteType: true,
  }

  handleSiteChange = () => {
    this.setState({
      siteType: !this.state.siteType,
    })
    console.log("Hello")
  }

  render() {
    return (
      <nav>
        <NavTop></NavTop>
        <NavBottom
          siteType={this.state.siteType}
          handleSiteChange={this.handleSiteChange}
        ></NavBottom>
      </nav>
    )
  }
}

export default nav
