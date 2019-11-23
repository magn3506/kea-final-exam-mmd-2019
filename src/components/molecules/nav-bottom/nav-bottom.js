import React, { Component } from "react"
import styled, { css } from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import SiteTitle from "../../atoms/siteTitle/siteTitle"
import { Link } from "gatsby"
import ButLinkCon from "./butLinkCon"
import BarLinkCon from "./barLinkCon"
import NavSiteSwitch from "./navSwitch"

const navBottom = props => {
  const NavWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(35, 37, 33, 0.9);
    position: fixed;
    box-sizing: border-box;
  `

  const NavContainer = styled.div`
    display: flex;
    height: 100vh;
    box-sizing: border-box;
    width: 75vw;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${colors.darkGrey};
    box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.4);
  `

  const NavLinkContainer = styled.div``
  const NavHeader = styled.div`
    width: 100%;
    height: 65px;
    background: ${colors.darkGrade};
    color: white;
    div {
      margin: 0 auto;
    }
  `
  const NavLinksCon = styled.div`
    ul {
      width: 100%;
      padding: 0px;
      margin: 0px;
    }
  `

  const NavDevider = styled.div`
    width: 100%;
    height: 5px;
    background: ${colors.tan};
  `

  const GLinkCon = styled.div``

  const GlinkWrap = styled.div``
  const GLink = styled.li`
    background: ${colors.dark};
    height: 40px;
    padding-left: 25px;
    display: flex;
    a {
      align-self: center;
      text-decoration: none;
      color: ${colors.white};
      text-transform: capitalize;
      font-size: 14px;
    }
  `

  return (
    <NavWrapper>
      <NavContainer>
        <NavLinkContainer>
          <NavHeader>
            <SiteTitle
              titleName={props.siteType ? "Butique" : "Bar"}
            ></SiteTitle>
          </NavHeader>
          <NavLinksCon>
            {props.siteType ? <ButLinkCon /> : <BarLinkCon />}
            <NavDevider></NavDevider>
            <GlinkWrap>
              <GLinkCon>
                <ul>
                  <GLink>
                    <Link>About</Link>
                  </GLink>
                  <GLink>
                    <Link>Contact</Link>
                  </GLink>
                  <GLink>
                    <Link>Return & Shipping</Link>
                  </GLink>
                </ul>
              </GLinkCon>
            </GlinkWrap>
          </NavLinksCon>
        </NavLinkContainer>
        <NavSiteSwitch siteType={props.siteType}></NavSiteSwitch>
      </NavContainer>
    </NavWrapper>
  )
}

export default navBottom
