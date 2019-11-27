import React from "react"
import styled from "styled-components"

import { colors } from "../../../styles/global-js/colors"
import BarLogo from "../../../../static/Bar-logo.png"
import BoutiqueLogo from "../../../../static/Boutique-logo.png"

const Wrapper = styled.div`
width: 100%;
height: 400px;

display: flex;
justify-content: center;
align-items: center;

background: ${props => 
    props.sitetype === true && colors.redGrade || 
    props.sitetype === false && colors.greenGrade
  };
`

const Logo = styled.img`
width: 300px;
height: 300px;

`

const SwitchSection = props => {
    console.log(props);
    return (
        <Wrapper sitetype={props.sitetype}>
            {props.sitetype === true && <Logo src={BarLogo} /> || props.sitetype === false && <Logo src={BoutiqueLogo} />}
        </Wrapper>
    )
}

export default SwitchSection