import React from "react"
import styled from "styled-components"

import { colors } from "../../../styles/global-js/colors"

const Wrapper = styled.div`
`
const Title = styled.h4`
  color: ${colors.gold};
  font-weight: 600;
`

const List = styled.ul`
list-style: none;
padding: 0;
`

const Links = styled.li`
color: white;
font-size: 12px;
margin-bottom: 5px;
`

const Information = () => {
  return (
    <Wrapper>
      <Title>Information</Title>
      <List>
        <Links>About</Links>
        <Links>Contact</Links>
        <Links>Shipping and Returns</Links>
      </List>
    </Wrapper>
  )
}

export default Information
