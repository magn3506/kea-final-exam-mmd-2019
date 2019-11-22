import React, { Component } from "react"
import styled, { css } from "styled-components"
import { colors } from "../../../styles/global-js/colors"

export class burger extends Component {
  render() {
    const Burger = styled.div`
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
    `
    const BurgerLine = styled.div`
      background-color: ${colors.grey};
      width: 100%;
      height: 4px;
      border-radius: 100px;
    `
    return (
      <Burger>
        <BurgerLine></BurgerLine>
        <BurgerLine></BurgerLine>
        <BurgerLine></BurgerLine>
      </Burger>
    )
  }
}

export default burger
