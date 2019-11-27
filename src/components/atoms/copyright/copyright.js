import React from "react"
import styled from "styled-components"

import { colors } from "../../../styles/global-js/colors"

const Wrapper = styled.div`
    background: ${props => 
    props.siteType === false && colors.redGrade || 
    props.siteType === true && colors.greenGrade
  };
  width: 100%;
`
const Title = styled.p`
color: white;
text-align: center;
padding: 5px 5px 5px 5px;
margin: 0;
`

const Copyright = props => {
  return (
    <Wrapper siteType={props.siteType}>
      <Title>&copy; {(new Date().getFullYear())} Hats, Boots &amp; Bourbon</Title>
    </Wrapper>
  )
}

export default Copyright
