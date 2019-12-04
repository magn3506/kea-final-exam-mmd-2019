import React from "react"
import styled from "styled-components"

import { colors } from "../../../styles/global-js/colors"
import { device } from "../../../styles/global-js/breakpoints"
import BarLogo from "../../../../static/Bar-logo.png"
import BoutiqueLogo from "../../../../static/Boutique-logo.png"
import LogoHome from "../../../../static/icons/Logo-rectangle.svg"

import { Link } from "gatsby"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    height: 400px;
  }

  @media ${device.laptop} {
    flex-direction: row;
    height: 400px;
  }
`
const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background: ${props =>
    (props.siteType === true && colors.redGrade) ||
    (props.siteType === false && colors.greenGrade)};
`

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: black;
`

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;

  &:hover {
    opacity: 0.8;
  }

  @media ${device.tablet} {
    width: 300px;
  height: 300px;
  margin: 0;
  }

  @media ${device.laptop} {
    width: 300px;
  height: 300px;
  margin: 0;
  }
`

const HomeLogo = styled.img`
  width: 75px;
  height: 75px;
  margin: 20px;

  &:hover {
    opacity: 0.8;
  }

  @media ${device.tablet} {
    width: 250px;
  height: 250px;
  margin: 0;
  }

  @media ${device.laptop} {
    width: 250px;
  height: 250px;
  margin: 0;
  }
`

const SwitchSection = props => {
  return (
    <Wrapper>
      <LogoContainer>
        <Link to="/">
          <HomeLogo src={LogoHome} />
        </Link>
      </LogoContainer>
      <SwitchContainer siteType={props.siteType}>
        <Link
          to={
            (props.siteType === true && "/bar") ||
            (props.siteType === false && "/butique")
          }
        >
          {(props.siteType === true && <Logo src={BarLogo} />) ||
            (props.siteType === false && <Logo src={BoutiqueLogo} />)}
        </Link>
      </SwitchContainer>
    </Wrapper>
  )
}

export default SwitchSection
