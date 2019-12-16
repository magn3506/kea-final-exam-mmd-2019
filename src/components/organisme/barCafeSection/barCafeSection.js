import styled, {keyframes} from "styled-components"
import React from "react"
import { device } from "../../../styles/global-js/breakpoints"
import { colors } from "../../../styles/global-js/colors"
import FrontImage from "../../../../static/front-bar-image.jpg"
import FrontImageMobile from "../../../../static/front-bar-image-mobile.jpg"
import DrinksImg from "../../../../static/drinks.jpg"
import EventsImg from "../../../../static/events.jpg"
import BourbonImg from "../../../../static/bourbontasting.jpg"

import { Link } from "gatsby"

const barCafeSection = () => {

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
  
  const TitleCon = styled.div`
    margin-bottom: 15px;
  `

  const BarTitle = styled.h1`
    color: ${colors.gold};
    font-size: 1.2rem;
    font-weight: 600;

    width: 100%;
    margin: 0 auto;
    text-transform: uppercase;

    @media only screen and (max-width: 320px) {
      font-size: 1rem;
      padding: 5px;
    }
  `
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -100px;
  `

  const Container = styled.div`
    max-width: 1024px;
    background: black;
  `

  const IntroText = styled.p`
    margin: 0 auto;
    font-size: 0.9rem;
    line-height: normal;
    color: #a9a9a9;
    letter-spacing: 0.3px;
    
    @media only screen and (max-width: 320px) {
      padding: 5px;
    }
  `

  const IntroductionCon = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
      flex-direction: row;
    }

    @media ${device.laptop} {
      flex-direction: row;
    }
  `

  const TextCon = styled.div`
    padding: 100px 25px 25px 25px;

    @media only screen and (max-width: 320px) {
      padding: 100px 0 0 0;
    }
  `

  const LinksCon = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    justify-content: center;

    opacity: 0;
    animation: ${WordAnimation} 0.5s ease-out .5s forwards;

    @media ${device.tablet} {
      justify-content: initial;
    }

    @media ${device.laptop} {
      justify-content: initial;
    }
  `

  const ImageCon = styled.div`
    width: 100%;
    background: black;
    display: flex;
    justify-content: flex-end;
  `

  const ImageDesktop = styled.img`
  display: none;

    @media ${device.tablet} {
      width: 250px;
      display: block;
    }

    @media ${device.laptop} {
      width: 500px;
      display: block;
    }
  `

const ImageMobile = styled.img`
width: 100%;

@media ${device.tablet} {
  display: none;
}

@media ${device.laptop} {
  display: none;
}
`

  const LinkCon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    position: relative;

    @media ${device.tablet} {
      margin-right: 25px;
    }

    @media ${device.laptop} {
      margin-right: 25px;
    }
  `

  const LinkImage = styled.img`
    width: 100px;
    border: 3px solid ${colors.gold};
    border-radius: 2px;
    margin-bottom: 15px;

    @media only screen and (max-width: 320px) {
      width: 85px;
    }

    @media ${device.tablet} {
      width: 125px;
    }

    @media ${device.laptop} {
      width: 125px;
    }
  `

  const ButtonBar = styled(Link)`
    width: 100px;
    font-size: 0.5rem;
    width: 75px;
    color: ${colors.gold};
    border: 3px solid ${colors.gold};
    font-weight: 600;
    text-align: center;
    padding-bottom: 10px;
    padding-top: 10px;
    border-radius: 1000px;
    background: black;
    display: inline-block;
    position: absolute;
    bottom: 0;

    @media ${device.tablet} {
      width: 100px;
      font-size: 0.7rem;
    }

    @media ${device.laptop} {
      width: 100px;
      font-size: 0.7rem;
    }

    &:hover {
      transform: scale(0.97);
      transition: 0.1s ease-in-out;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    }
  `

  return (
    <Wrapper>
      <Container>
        <IntroductionCon>
          <TextCon>
            <TitleCon>
              <BarTitle>The Clothing store ... with a bar!</BarTitle>
            </TitleCon>
            <IntroText>
              At Hats, Boots &amp; Bourbon you can get a drink, beer or a
              coffee, browse around, ask us about the products, try them on,
              think on it, have another drink, try it on again. Maybe you walk
              out with a new hat, or just a nice experience.
            </IntroText>
            <LinksCon>
              <LinkCon>
                <LinkImage src={DrinksImg} />
                <ButtonBar to="/drinks-menu">Drinks Menu</ButtonBar>
              </LinkCon>
              <LinkCon>
                <LinkImage src={EventsImg} />
                <ButtonBar to="/events">Events</ButtonBar>
              </LinkCon>
              <LinkCon>
                <LinkImage src={BourbonImg} />
                <ButtonBar to="/bourbon-tasting">Bourbon tasting</ButtonBar>
              </LinkCon>
            </LinksCon>
          </TextCon>
          <ImageCon>
            <ImageDesktop src={FrontImage} />
            <ImageMobile src={FrontImageMobile} />
          </ImageCon>
        </IntroductionCon>
      </Container>
    </Wrapper>
  )
}

export default barCafeSection
