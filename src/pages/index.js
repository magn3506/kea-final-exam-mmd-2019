import React from "react"
import { colors } from "../styles/global-js/colors"
import { device } from "../styles/global-js/breakpoints"
import { GlobalStyle } from "../styles/global-js/globalstyles"
import HBBSymbolText from "../components/atoms/hbb-symbol-title/hbb-symbol-title"
import { Link } from "gatsby"

import styled from "styled-components"

const IndexPage = () => {
  const Wrapper = styled.div`
    background: black;
    width: 100vw;
    height: 100vh;
    padding: 50px;
  `
  const Container = styled.div`
    max-width: 350px;
    margin: 0 auto;
  `

  const TitleSVGContainer = styled.div`
    width: 100%;
  `
  const Text = styled.div`
    color: ${colors.gold};
    font-size: 1.5rem;
    text-align: center;
    font-family: "Roboto Slab", serif;
    width: 100%;
    margin: 50px 0px;
  `
  const LinkContainer = styled.div``
  const LinkBoutique = styled(Link)``
  const LinkBar = styled(Link)``

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Wrapper>
        <Container>
          <TitleSVGContainer>
            <HBBSymbolText></HBBSymbolText>
          </TitleSVGContainer>
          <Text>Choose which place you want to experience</Text>
          <LinkContainer></LinkContainer>
        </Container>
      </Wrapper>
    </>
  )
}

export default IndexPage
