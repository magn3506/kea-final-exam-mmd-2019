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

const ListItems = styled.li`
color: white;
font-size: 12px;
margin-bottom: 5px;
`

const Address = () => {
  return (
    <Wrapper>
      <Title>Address</Title>
      <List>
        <ListItems>Istedgade 24</ListItems>
        <ListItems>Copenhagen, Denmark</ListItems>
      </List>
    </Wrapper>
  )
}

export default Address
