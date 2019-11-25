import React from "react"
import styled from "styled-components"

import { colors } from "../../../styles/global-js/colors"
import { device } from "../../../styles/global-js/breakpoints"

const Wrapper = styled.div`
`

const Title = styled.h4`
  color: ${colors.gold};
  font-weight: 600;
  margin-bottom: 0;
`
const HourBox = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;

@media ${device.tablet} {
    width: 85%;
  }

  @media ${device.laptop} {
    width: 50%;
  }
`

const ListLeft = styled.ul`
list-style: none;
padding: 0;
`

const ListRight = styled.ul`
list-style: none;
padding: 0;
`

const ListItems = styled.li`
color: white;
font-size: 12px;
margin-bottom: 5px;
`

const Hours = () => {
  return (
    <Wrapper>
      <Title>Opening hours</Title>
      <HourBox>
      <ListLeft>
        <ListItems>Mon - Thursday</ListItems>
        <ListItems>Friday</ListItems>
        <ListItems>Saturday</ListItems>
        <ListItems>Sunday</ListItems>
      </ListLeft>
      <ListRight>
        <ListItems> 10:00 - 19:00</ListItems>
        <ListItems>10:00 - 20:00</ListItems>
        <ListItems>10:00 - 21:00</ListItems>
        <ListItems> 12:00 - 16:00</ListItems>
      </ListRight>
      </HourBox>
    </Wrapper>
  )
}

export default Hours