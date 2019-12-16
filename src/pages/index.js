import React from "react"
import { colors } from "../styles/global-js/colors"
import { device } from "../styles/global-js/breakpoints"
import { GlobalStyle } from "../styles/global-js/globalstyles"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"

import BarIcon from "../../static/Bar-logo.png"
import BoutiqueIcon from "../../static/Boutique-logo.png"
import FrontHero from "../components/molecules/Front-hero/Front-hero"
import BackrgroundImage from "../../static/front-page-background.jpg"

const IndexPage = () => {
  const WordAnimation = keyframes`
0% {
  transform: translateY(200px);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
`

  const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: scroll;

    background-image: url(${BackrgroundImage});
    background-size: cover;
  `
  const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding-bottom: 50px;
  `
  const Text = styled.div`
    color: whitesmoke;
    font-size: 0.9rem;
    text-align: center;
    font-family: "Roboto Slab", serif;
    width: 100%;
    margin: 25px 0px;
    opacity: 0;
    animation: ${WordAnimation} 0.5s ease-out 1s forwards;

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
    height: 200px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;

    @media only screen and (max-width: 320px) {
      width: 135px;
    }

    @media ${device.tablet} {
      height: 300px;
      width: 200px;
    }

    @media ${device.laptop} {
      height: 300px;
      width: 200px;
    }

    &:hover {
      background: black;
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
    height: 200px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;

    @media only screen and (max-width: 320px) {
      width: 135px;
    }

    @media ${device.tablet} {
      height: 300px;
      width: 200px;
    }

    @media ${device.laptop} {
      height: 300px;
      width: 200px;
    }

    &:hover {
      background: black;
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

  const LinkItemCon = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    opacity: 0;

    animation: ${WordAnimation} 0.5s ease-out 1.5s forwards;
  `

  const FrameCon = styled.div`
    border: 5px solid ${colors.gold};
    margin-top: 25px;
  `

  const Img = styled.img`
    width: 100%;
  `

  const CTAButton = styled.button`
    width: 102px;
    height: 38px;
    margin: 3px;

    background: #8a6551;
    border: 2px solid #8a6551;
    color: white;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 0.8;
    }

    @media only screen and (max-width: 320px) {
      width: 90px;
      font-size: 0.7rem;
    }
  `

  const ButtonFrame = styled.div`
    border: 3px solid ${colors.gold};
    position: absolute;
  `

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Wrapper>
        <FrontHero color="#1A1A1A"></FrontHero>

        <Container>
          <Text>Feel free to go shopping or have a drink at the bar!</Text>
          <LinkContainer>
            <LinkItemCon>
              <ButtonFrame>
                <Link to="/butique">
                  <CTAButton>To the Shop</CTAButton>
                </Link>
              </ButtonFrame>
              <FrameCon>
                <LinkBoutique to="/butique">
                  <div>
                    <Img src={BoutiqueIcon} />
                  </div>
                </LinkBoutique>
              </FrameCon>
            </LinkItemCon>
            <LinkItemCon>
              <ButtonFrame>
                <Link to="/bar">
                  <CTAButton>To the Bar</CTAButton>
                </Link>
              </ButtonFrame>
              <FrameCon>
                <LinkBar to="/bar">
                  <div>
                    <Img src={BarIcon} />
                  </div>
                </LinkBar>
              </FrameCon>
            </LinkItemCon>
          </LinkContainer>
        </Container>
      </Wrapper>
    </>
  )
}

export default IndexPage
