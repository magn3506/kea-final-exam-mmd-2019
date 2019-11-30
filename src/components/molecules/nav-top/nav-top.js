import React from "react"
import styled from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import Burger from "../../atoms/burger/burger"
import SiteTitle from "../../atoms/siteTitle/siteTitle"
import CartIcon from "../../../../static/icons/cart.svg"
import Logo from "../../../../static/logo_wide.svg"
import { device } from "../../../styles/global-js/breakpoints"

const navTop = props => {
  const TopBar = styled.div`
    height: 35px;
    color: white;
    padding: 5px 10px;
    display: flex;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    max-width: 1024px;
    margin: 0 auto;
    @media ${device.laptop} {
      height: 60px;
      padding: 0px;
    }
  `

  const Wrapper = styled.div`
    width: 100vw;
    background: ${colors.darkGrade};
  `

  const BottomLine = styled.div`
    height: 5px;
    background: ${colors.greenGrade};
    @media ${device.laptop} {
      display: none;
    }
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
    @media (max-width: 1024px) {
      display: none;
    }
  `

  return (
    <Wrapper>
      <TopBar>
        <Burger handleNavOpen={props.handleNavOpen}></Burger>
        <LogoIconCon>
          <img src={Logo} alt="logo"></img>
        </LogoIconCon>
        <SiteTitle
          titleName={props.siteType ? "Boutique" : "Bar & Cafe"}
        ></SiteTitle>
        <CartIconCon>
          <img src={CartIcon} alt="cart" />
        </CartIconCon>
      </TopBar>
      <BottomLine></BottomLine>
    </Wrapper>
  )
}

export default navTop
