import React from "react"
import styled from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import BarHeroShape from "../../atoms/shapes/barHeroShape/barHeroShape"
import HBBSymbolTitleSVG from "../../atoms/hbb-symbol-title/hbb-symbol-title"
import LeavesSVG from "../../atoms/icons/leaves/leavesSVG"
const BarHero = props => {
  const BarHeroWrapper = styled.div``

  const BarHeroShapeCon = styled.div`
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

    div {
      position: absolute;
      width: inherit;
      svg {
        width: 100%;
      }
    }
  `

  const LeavesSVGContainer = styled.div`
    width: 80px;
    height: 0px;
    position: relative;
    margin: 0 auto;
    div {
      position: absolute;
      top: -120px;
      width: inherit;
      svg {
        width: 100%;
      }
    }
  `

  return (
    <BarHeroWrapper>
      <BarHeroShapeCon>
        <BarHeroShape></BarHeroShape>
      </BarHeroShapeCon>
      <HBBSymbolTitleContainer>
        <div>
          <HBBSymbolTitleSVG></HBBSymbolTitleSVG>
        </div>
      </HBBSymbolTitleContainer>
      <LeavesSVGContainer>
        <div>
          <LeavesSVG></LeavesSVG>
        </div>
      </LeavesSVGContainer>
    </BarHeroWrapper>
  )
}

export default BarHero
