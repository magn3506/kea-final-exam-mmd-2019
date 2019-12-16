import React from "react"
import styled from "styled-components"
import FrontHeroShape from "../../atoms/shapes/FrontHeroShape/FrontHeroShape"
import HBBSymbolTitleSVG from "../../atoms/hbb-symbol-title/hbb-symbol-title"
import Logo from "../../../../static/icons/Logo-rectangle.svg"
import Instagram from "../../../components/atoms/SoMe/instagram"
import Facebook from "../../../components/atoms/SoMe/facebook"
import { colors } from "../../../styles/global-js/colors"
import { device } from "../../../styles/global-js/breakpoints"

const FrontHero = props => {
  const FrontHeroWrapper = styled.div`
    position: relative;
  `

  const FrontHeroShapeCon = styled.div`
    width: 100%;
    height: 350px;

    svg {
      width: 100%;
      height: inherit;
    }
  `

  const HBBSymbolTitleContainer = styled.div`
    width: 200px;
    position: relative;
    height: 0px;
    margin: 0 auto;
    top: -330px;
    z-index: 0;

    div {
      position: absolute;
      width: inherit;
      z-index: 0;
      svg {
        width: 100%;
      }
    }
  `

  const LogoCon = styled.img`
    position: absolute;
    width: 50px;
    left: 10px;
    top: 10px;

    @media ${device.tablet} {
        width: 75px;
    }
    @media ${device.laptop} {
        width: 75px;
    }
  `

  const SoMeBox = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 10px;
    top: 10px;
  `
  const TextTitle = styled.div`
    position: absolute;
    bottom: 0;
    color: ${colors.gold};
    font-weight: 600;
    width: 100%;
    text-align: center;
    margin-bottom: 120px;
  `

  return (
    <FrontHeroWrapper>
      <FrontHeroShapeCon>
        <FrontHeroShape color={props.color}></FrontHeroShape>
      </FrontHeroShapeCon>
      <HBBSymbolTitleContainer>
        <div>
          <HBBSymbolTitleSVG></HBBSymbolTitleSVG>
        </div>
      </HBBSymbolTitleContainer>
      <LogoCon src={Logo} />
      <SoMeBox>
        <Instagram />
        <Facebook />
      </SoMeBox>
      <TextTitle>“THE CLOTHING-STORE ...WITH A BAR!”</TextTitle>
    </FrontHeroWrapper>
  )
}

export default FrontHero
