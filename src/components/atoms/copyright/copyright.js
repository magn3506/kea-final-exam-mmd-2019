import React from "react"
import styled from "styled-components"

import { colors } from "../../../styles/global-js/colors"

const Wrapper = styled.div`
  background: ${colors.green};
  width: 100%;
`
const Title = styled.p`
color: white;
text-align: center;
padding: 5px 5px 5px 5px;
`

const Copyright = () => {
  return (
    <Wrapper>
      <Title>&copy; {(new Date().getFullYear())} Hats, Boots &amp; Bourbon</Title>
    </Wrapper>
  )
}

export default Copyright
