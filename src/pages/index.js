import React from "react"
import { colors } from "../styles/global-js/colors"
import { device } from "../styles/global-js/breakpoints"
import { GlobalStyle } from "../styles/global-js/globalstyles"
import HBBSymbolText from "../components/atoms/hbb-symbol-title/hbb-symbol-title"
import { Link } from "gatsby"
import Logo from "../../static/icons/Logo-rectangle.svg"
import styled from "styled-components"

import BarIcon from "../../static/Bar-logo.png"
import BoutiqueIcon from "../../static/Boutique-logo.png"
import UnderlineIcon from "../../static/icons/Underlinetest.png"

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
    flex-direction: row;
  `
  const LinkBoutique = styled(Link)`
    background: ${colors.greenGrade};
    cursor: pointer;
    padding: 10px 0px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px;

    @media ${device.tablet} {
      height: 200px;
  }

  @media ${device.laptop} {
    height: 200px;
  }

    &:hover {
      background: transparent;
      border: 1px solid ${colors.gold};
    }
    div {
      width: 60%;
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
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px;

    @media ${device.tablet} {
      height: 200px;
  }

  @media ${device.laptop} {
    height: 200px;
  }

    &:hover {
      background: transparent;
      border: 1px solid ${colors.gold};
    }

    div {
      width: 60%;
      margin: 0 auto;

      svg {
        width: 100%;
      }
    }
  `

  const LogoContainer = styled.div`
    width: 100%;
    margin: 30px auto;
    display: flex;
    justify-content: center;

    img {
      width: 100px;
    }
  `

const LinkItemCon = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

  const FrameCon = styled.div`
    border: 7px solid ${colors.gold};
    margin: 3px;
  `
  const OuterFrameCon = styled.div`
    border: 3px solid ${colors.gold};
    margin: 5px;
  `

  const Img = styled.img`
    width: 100%;
  `

  const TextLink = styled.p`
  color: ${colors.gold};
  font-size: 0.8rem;
  text-align: center;
  font-weight: 700;
  `

  const Underline = styled.img`
  width: 80%;
  margin-top: 0;
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
          <LinkItemCon>
          <OuterFrameCon>
              <FrameCon>
                <LinkBoutique to="/butique">
                  <div>
                    <Img src={BoutiqueIcon} />
                  </div>
                </LinkBoutique>
              </FrameCon>
            </OuterFrameCon>
            <TextLink>See the Boutique</TextLink>
            <Underline src={UnderlineIcon} />
          </LinkItemCon>
          <LinkItemCon>
          <OuterFrameCon>
              <FrameCon>
                <LinkBar to="/bar">
                  <div>
                    <Img src={BarIcon} />
                  </div>
                </LinkBar>
              </FrameCon>
            </OuterFrameCon>
            <TextLink>See the Bar &amp; Café</TextLink>
            <Underline src={UnderlineIcon} />
          </LinkItemCon>
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
