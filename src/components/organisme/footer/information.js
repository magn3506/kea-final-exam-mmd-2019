import React from "react"
import styled from "styled-components"

import { colors } from "../../../styles/global-js/colors"
import { Link } from "gatsby"

const Wrapper = styled.div`
`
const Title = styled.h4`
  color: ${colors.gold};
  font-weight: 600;
  font-size: 1.2rem;
`

const List = styled.ul`
list-style: none;
padding: 0;
`

const ListItem = styled.li`
font-size: 12px;
margin-bottom: 5px;
`
const Links = styled(Link)`
color: white;
text-decoration: none;

&:hover {
    opacity: .8;
}
`

const Information = () => {
  return (
    <Wrapper>
      <Title>Information</Title>
      <List>
        <ListItem><Links to="/about">About</Links></ListItem>
        <ListItem><Links to="/contact">Contact</Links></ListItem>
        <ListItem><Links to="/">Shipping and Returns</Links></ListItem>
      </List>
    </Wrapper>
  )
}

export default Information
