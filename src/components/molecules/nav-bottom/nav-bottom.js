import React, { Component } from "react"
import styled, { css } from "styled-components"
import { colors } from "../../../styles/global-js/colors"

export class navBottom extends Component {
  render() {
    const NavWrapper = styled.div`
      width: 100vw;
      height: 100vh;
      background-color: rgba(35, 37, 33, 0.9);
      position: fixed;
    `
    const NavContainer = styled.div`
      width: 75vw;
      height: 100vh;
      background-color: ${colors.darkGrey};
    `

    return (
      <NavWrapper>
        <NavContainer></NavContainer>
      </NavWrapper>
    )
  }
}

export default navBottom
