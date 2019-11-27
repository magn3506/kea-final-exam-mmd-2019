import React from "react"
import styled from "styled-components"

import Instagram from "../../atoms/SoMe/instagram"
import Facebook from "../../atoms/SoMe/facebook"
import EmailInput from "../../atoms/emailInput/emailInput"

import { device } from "../../../styles/global-js/breakpoints"

const Wrapper = styled.div`
display: flex;
justify-content: center;

@media ${device.tablet} {
  justify-content: initial;
  }

  @media ${device.laptop} {
    justify-content: initial;
  }
`

const Container = styled.div``

const Title = styled.p`
  color: #8a6551;
  font-size: 14px;
  font-weight: 600;
`

const SoMeBox = styled.div`
  display: flex;
  flex-direction: row;
`

const Newsletter = () => {
  return (
    <Wrapper>
      <Container>
      <Title>Follow us &amp; find out about our next event!</Title>
      <EmailInput />
      <SoMeBox>
        <Instagram />
        <Facebook />
      </SoMeBox>
      </Container>
    </Wrapper>
  )
}

export default Newsletter
