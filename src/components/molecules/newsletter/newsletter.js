import React from "react"
import styled from "styled-components"

import Instagram from "../../atoms/SoMe/instagram"
import Facebook from "../../atoms/SoMe/facebook"
import EmailInput from "../../atoms/emailInput/emailInput"

const Wrapper = styled.div``

const Title = styled.p`
  color: #8a6551;
  font-size: 14px;
`

const SoMeBox = styled.div`
  display: flex;
  flex-direction: row;
`

const Newsletter = () => {
  return (
    <Wrapper>
      <Title>Follow us &amp; find out about our next event!</Title>
      <EmailInput />
      <SoMeBox>
        <Instagram />
        <Facebook />
      </SoMeBox>
    </Wrapper>
  )
}

export default Newsletter
