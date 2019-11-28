import React from "react"
import styled from "styled-components"

import { colors } from "../../../styles/global-js/colors"
import { Link } from "gatsby"
import DiamondIcon from "../../../../static/icons/diamond.svg"

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const Title = styled.h2`
text-align: center;
color: white;
text-transform: uppercase;
letter-spacing: 2px;
`

const CTABox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`

const CTA = styled(Link)`
color: ${colors.gold};
text-align: center;

padding: 0px 5px 0px 5px;
font-weight: 600;

&:hover {
    opacity: .8;
}
`

const Img = styled.img`
width: 15px;
`

const TitleCTA = props => {
    return (
        <Wrapper>
            <Title>{props.title}</Title>
            <CTABox>
            <Img src={DiamondIcon} alt="diamond icon" />
            <CTA to="/products">{props.cta}</CTA>
            <Img src={DiamondIcon} alt="diamond icon" />
            </CTABox>
        </Wrapper>
    )
}

export default TitleCTA