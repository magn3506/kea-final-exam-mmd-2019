import React, { Component } from "react"
import styled, { css } from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import Burger from "../../atoms/burger/burger"
import SiteTitle from "../../atoms/siteTitle/siteTitle"
import CartIcon from "../../../../static/icons/cart.svg"
import Logo from "../../../../static/logo_wide.svg"

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
      @media (min-width: 1000px) {
        height: 60px;
      }
    `

    const Wrapper = styled.div``

    const BottomLine = styled.div`
      height: 5px;
      background: ${colors.greenGrade};
    `
    const CartIconCon = styled.div`
      width: 20px;
      cursor: pointer;
      display: flex;
      img {
        width: 100%;
      }
      &:hover {
        opacity: 0.8;
      }
    `

    const LogoIconCon = styled.div`
      width: 120px;
      cursor: pointer;
      display: flex;
      img {
        width: 100%;
      }
      &:hover {
        opacity: 0.8;
      }
      @media (max-width: 1000px) {
        display: none;
      }
    `

    return (
      <Wrapper>
        <TopBar>
          <Burger></Burger>
          <LogoIconCon>
            <img src={Logo} alt='logo'></img>
          </LogoIconCon>
          <SiteTitle titleName='Butique'></SiteTitle>
          <CartIconCon>
            <img src={CartIcon} alt='cart' />
          </CartIconCon>
        </TopBar>
        <BottomLine></BottomLine>
      </Wrapper>
    )
  }
}

export default navTop
