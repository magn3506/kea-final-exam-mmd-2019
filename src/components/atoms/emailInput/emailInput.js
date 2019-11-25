import React from "react"
import styled from "styled-components"

const Container = styled.div``

const EmailInputfield = styled.input`
  color: #828282;
  font-family: "Merriweather", serif;
  border-radius: 3px 0px 0px 3px;
  outline: none;
  border: none;
  background: white;
  padding: 10px;
  width: 225px;
`
const SubscribeButton = styled.button`
  padding: 10px;
  border: none;
  background: #8a6551;
  color: white;
  border-radius: 0px 3px 3px 0px;
  font-family: "Merriweather", serif;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

const EmailInput = () => {
  return (
    <Container>
      <EmailInputfield type="email" placeholder="Email address" />
      <SubscribeButton>Subscribe</SubscribeButton>
    </Container>
  )
}

export default EmailInput
