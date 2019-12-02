import React from "react"
import { colors } from "../styles/global-js/colors"
import { device } from "../styles/global-js/breakpoints"
import { GlobalStyle } from "../styles/global-js/globalstyles"
import HBBSymbolText from "../components/atoms/hbb-symbol-title/hbb-symbol-title"
import { Link } from "gatsby"
import BarIcon from "../components/atoms/icons/bar_icon/bar-icon"
import BoutiqueIcon from "../components/atoms/icons/boutique_Icon/boutique-icon"
import Logo from "../../static/logo_wide.svg"
import styled from "styled-components"

const IndexPage = () => {
  const Wrapper = styled.div`
    background: black;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
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
    font-size: 1rem;
    text-align: center;
    font-family: "Roboto Slab", serif;
    width: 100%;
    margin: 25px 0px;
    @media ${device.tablet} {
      font-size: 1.3rem;
      margin: 50px 0px;
    }
    @media ${device.laptop} {
      font-size: 1.5rem;
    }
  `
  const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
  `
  const LinkBoutique = styled(Link)`
    background: ${colors.greenGrade};
    cursor: pointer;
    padding: 10px 0px;
    &:hover {
      background: transparent;
      border: 1px solid ${colors.gold};
    }
    div {
      width: 40%;
      margin: 0 auto;
      svg {
        width: 100%;
      }
    }
  `
  const LinkBar = styled(Link)`
    background: ${colors.redGrade};
    cursor: pointer;
    padding: 10px 0px;
    &:hover {
      background: transparent;
      border: 1px solid ${colors.gold};
    }

    div {
      width: 40%;
      margin: 0 auto;

      svg {
        width: 100%;
      }
    }
  `

  const LogoContainer = styled.div`
    width: 100%;
    margin: 30px auto;
    opacity: 0.5;
  `

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Wrapper>
        <Container>
          <TitleSVGContainer>
            <HBBSymbolText></HBBSymbolText>
          </TitleSVGContainer>
          <Text>Choose which place you want to experience</Text>
          <LinkContainer>
            <LinkBoutique to="/butique">
              <div>
                <BoutiqueIcon />
              </div>
            </LinkBoutique>
            <LinkBar to="/bar">
              <div>
                <BarIcon />
              </div>
            </LinkBar>
          </LinkContainer>
          <LogoContainer>
            <img src={Logo} alt="LOGO" />
          </LogoContainer>
        </Container>
      </Wrapper>
    </>
  )
}

export default IndexPage
