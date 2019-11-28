import styled from "styled-components"
import React from "react"
import { device } from "../../../styles/global-js/breakpoints"
import { colors } from "../../../styles/global-js/colors"
import UnderlineSVG from "../../atoms/icons/underline/underlineSVG"
import ButtonBar from "../../atoms/button-bar/button-bar"
import YearSVG from "../../atoms/icons/year/year"

const barCafeSection = () => {
  const TitleCon = styled.div`
    margin-top: -40px;
  `

  const BarTitle = styled.h1`
    color: ${colors.gold};

    max-width: 300px;
    margin: 0 auto;
    text-align: center;
    text-transform: uppercase;
  `

  const UnderlingSVGCon = styled.div`
    width: 250px;
    margin: 10px auto;
    svg {
      width: 100%;
    }
  `
  const IntroText = styled.p`
    max-width: 600px;
    padding: 40px;
    margin: 0 auto;
    color: ${colors.grey};

    @media ${device.tablet} {
      max-width: 700px;
    }
    @media ${device.laptop} {
      max-width: 800px;
    }
  `

  const YearSVGCon = styled.div`
    width: 250px;
    margin: 70px auto;

    @media ${device.tablet} {
      width: 300px;
    }
    @media ${device.laptop} {
      width: 350px;
    }

    svg {
      width: 100%;
    }
  `

  return (
    <div>
      <TitleCon>
        <BarTitle>Bar & Café</BarTitle>
        <UnderlingSVGCon>
          <UnderlineSVG></UnderlineSVG>
        </UnderlingSVGCon>
      </TitleCon>
      <IntroText>
        The best taco bowls are made in Trump Tower Grill. I love Hispanics!
        This placeholder text is gonna be HUGE. You could see there was text
        coming out of her eyes, text coming out of her wherever. You’re
        disgusting. Be careful, or I will spill the beans on your placeholder
        text. I'm speaking with myself, number one, because I have a very good
        brain and I've said a lot of things. Lorem Ipsum better hope that there
        are no "tapes" of our conversations before he starts leaking to the
        press! I think the only card she has is the Lorem card. Lorem Ipsum's
        father was with Lee Harvey Oswald prior to Oswald's being, you know,
        shot. nice."
        <ButtonBar linkTo="/drinks-menu">Drinks Menu</ButtonBar>
      </IntroText>
      <YearSVGCon>
        <YearSVG></YearSVG>
      </YearSVGCon>
    </div>
  )
}

export default barCafeSection
