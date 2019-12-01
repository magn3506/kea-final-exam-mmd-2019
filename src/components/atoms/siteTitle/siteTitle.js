import React, { Component } from "react"
import styled, { css } from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import DiamondIcon from "../../../../static/icons/diamond.svg"
import { Link } from "gatsby"
// import YearIcon from "../../../../static/icons/year.svg"

const siteTitle = props => {
  const SiteTtileWrapper = styled(Link)`
    height: 100%;
    cursor: pointer;
    display: flex;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
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
  // const YearCon = styled.div`
  //   width: 27px;
  //   display: flex;
  //   margin-right: 0;
  //   transform: translateX(-5px);
  //   img {
  //     width: 100%;
  //   }
  // `

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
        {/* <YearCon>
          <img src={YearIcon} alt='year icon'></img>
        </YearCon> */}
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
