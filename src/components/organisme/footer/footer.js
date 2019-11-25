import React from "react"
import styled from "styled-components"

import Newsletter from "../../molecules/newsletter/newsletter"
import Copyright from "../../atoms/copyright/copyright"
import { colors } from "../../../styles/global-js/colors"

import Information from "./information"
import Address from "./address"
import Hours from "./hours"

const Wrapper = styled.div`
  width: 100%;
  background: ${colors.footerGreen};
`
const Container = styled.div`
padding: 10px 20px 10px 20px;
`
const InformationBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <InformationBox>
        <Information />
        <Address />
        </InformationBox>
        <Hours />
        <Newsletter />
        </Container>
        <Copyright />
    </Wrapper>
  )
}

export default Footer
