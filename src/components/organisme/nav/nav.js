import React, { Component } from "react"
import NavTop from "../../molecules/nav-top/nav-top"
import NavBottom from "../../molecules/nav-bottom/nav-bottom"
export class nav extends Component {
  render() {
    return (
      <nav>
        <NavTop></NavTop>
        <NavBottom></NavBottom>
      </nav>
    )
  }
}

export default nav
