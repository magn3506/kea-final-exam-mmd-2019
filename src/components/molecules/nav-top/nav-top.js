import React, { Component } from "react"
import styled, { css } from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import Burger from "../../atoms/burger/burger"

export class navTop extends Component {
  render() {
    const TopBar = styled.div`
      background: ${colors.darkGrade};
      height: 35px;
      color: white;
      padding: 5px 10px;
      display: flex;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
    `

    const Wrapper = styled.div``

    const BottomLine = styled.div`
      height: 5px;
      background: ${colors.greenGrade};
    `

    const SiteTitle = styled.div`
      color: red;
    `

    return (
      <Wrapper>
        <TopBar>
          <Burger></Burger>
          <SiteTitle>Butqiue</SiteTitle>
          <div>Cart</div>
        </TopBar>
        <BottomLine></BottomLine>
      </Wrapper>
    )
  }
}

export default navTop
