import React from "react"
import styled from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import DiamondIcon from "../../../../static/icons/diamond.svg"
import { Link } from "gatsby"
import { device } from "../../../styles/global-js/breakpoints"
// import YearIcon from "../../../../static/icons/year.svg"

const siteTitle = props => {
  const SiteTtileWrapper = styled(Link)`
    height: 100%;
    margin: 0 auto;
    cursor: pointer;
    display: flex;
    align-self: center;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }

    @media ${device.laptop} {
      transform: translateX(-50px);
    }
  `

  const SiteTitle = styled.div`
    color: red;
    display: flex;
  `
  const DiamondCon = styled.div`
    width: 20px;
    margin: 0px 5px;
    display: flex;
    img {
      width: 100%;
    }
  `

  const H1 = styled.h1`
    font-size: 20px;
    width: 150px;
    display: inline-block;
    color: ${colors.tan};
    text-transform: uppercase;
    text-align: center;
    align-self: center;
    font-family: "Merriweather", serif;
    font-weight: 700;
    letter-spacing: 2px;
    margin: 0px;
  `

  return (
    <SiteTtileWrapper to={props.siteType ? "/butique" : "/bar"}>
      <SiteTitle>
        <DiamondCon>
          <img src={DiamondIcon} alt="diamond icon" />
        </DiamondCon>
        <H1>{props.titleName ? props.titleName : "Page Title"}</H1>
        <DiamondCon>
          <img src={DiamondIcon} alt="Diamond icon" />
        </DiamondCon>
      </SiteTitle>
    </SiteTtileWrapper>
  )
}

export default siteTitle
