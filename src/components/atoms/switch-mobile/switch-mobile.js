import React from "react"
import styled from "styled-components"

import { colors } from "../../../styles/global-js/colors"
import BarLogo from "../../../../static/Bar-logo.png"
import BoutiqueLogo from "../../../../static/Boutique-logo.png"
import { device } from "../../../styles/global-js/breakpoints"

import { Link } from "gatsby"

const Wrapper = styled.div`
width: 75px;
height: 75px;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
background: ${props => 
    props.siteType === true && colors.redGrade || 
    props.siteType === false && colors.greenGrade
  };
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 5;

  @media ${device.laptop} {
    display: none;
  }
`

const Logo = styled.img`
width: 60px;
height: 60px;

`

const SwitchMobile = props => {
    return (
        <Wrapper siteType={props.siteType}>
            <Link to={props.siteType === true && "/bar" || props.siteType === false && "/butique"}>
            {props.siteType === true && <Logo src={BarLogo} /> || props.siteType === false && <Logo src={BoutiqueLogo} />}
            </Link>
        </Wrapper>
    )
}

export default SwitchMobile