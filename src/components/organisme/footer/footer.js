import React from "react"
import styled from "styled-components"

import Newsletter from "../../molecules/newsletter/newsletter"
import Copyright from "../../atoms/copyright/copyright"
import { colors } from "../../../styles/global-js/colors"
import { device } from "../../../styles/global-js/breakpoints"

import Information from "./information"
import Address from "./address"
import Hours from "./hours"

const Wrapper = styled.div`
  width: 100%;

  background: ${props => 
    props.sitetype === true && colors.redGrade || 
    props.sitetype === false && colors.footerGreen
  };
`
const Container = styled.div`
padding: 10px 20px 10px 20px;

@media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media ${device.laptop} {
  }
`
const InformationBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

@media ${device.tablet} {
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  @media ${device.laptop} {
    width: 60%;
  }
`
const HourBox = styled.div`
@media ${device.tablet} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`
const Newsletterbox = styled.div`
@media ${device.tablet} {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;

    justify-self: center;
    align-self: center;
  }

  @media ${device.laptop} {
    justify-self: flex-end;
  }
`

const Footer = props => {
  return (
    <Wrapper sitetype={props.sitetype}>
      <Container>
        <InformationBox>
        <Information />
        <Address />
        </InformationBox>
        <HourBox>
            <Hours />
        </HourBox>
        <Newsletterbox>
            <Newsletter />
        </Newsletterbox>
        </Container >
        <Copyright sitetype={props.sitetype}/>
    </Wrapper>
  )
}

export default Footer
