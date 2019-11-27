import React from "react"
import styled from "styled-components"

import { colors } from "../../../styles/global-js/colors"
import BarLogo from "../../../../static/Bar-logo.png"
import BoutiqueLogo from "../../../../static/Boutique-logo.png"

import { Link } from "gatsby"

const Wrapper = styled.div`
width: 100%;
height: 400px;

display: flex;
justify-content: center;
align-items: center;

background: ${props => 
    props.siteType === true && colors.redGrade || 
    props.siteType === false && colors.greenGrade
  };
`

const Logo = styled.img`
width: 300px;
height: 300px;

`

const SwitchSection = props => {
    return (
        <Wrapper siteType={props.siteType}>
            <Link to={props.siteType === true && "/bar" || props.siteType === false && "/butique"}>
            {props.siteType === true && <Logo src={BarLogo} /> || props.siteType === false && <Logo src={BoutiqueLogo} />}
            </Link>
        </Wrapper>
    )
}

export default SwitchSection