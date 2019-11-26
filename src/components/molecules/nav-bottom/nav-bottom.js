import React, { Component } from "react"
import styled, { css } from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import { device, size } from "../../../styles/global-js/breakpoints"
import ButiqueSmallLabel from "../../../../static/icons/small_label_butique.svg"
import SiteTitle from "../../atoms/siteTitle/siteTitle"
import CloseIcon from "../../atoms/icons/closeIcon/close-icon"

export class navBottom extends Component {
  render() {
    const NavWrapper = styled.div`
      width: 100vw;
      height: 100vh;
      background: rgba(35, 37, 33, 0.9);
      position: fixed;
      top: 0;

      @media ${device.laptop} {
        position: static;
        min-height: 40px;
        height: 40px;
        background: ${colors.greenGrade};
        box-shadow: ${colors.NavBoxShadow};
      }
    `
    const NavContainer = styled.div`
      width: 75vw;
      height: 100vh;
      overflow: scroll;
      background-color: ${colors.darkGrey};
      display: flex;
      flex-direction: column;
      box-shadow: ${colors.NavBoxShadow};
      @media ${device.laptop} {
        height: 100%;

        width: 1000px;
        margin: auto;
        overflow: initial;
        flex-direction: row;
        background-color: transparent;
        box-shadow: none;
      }
    `
    const NavHeader = styled.div`
      width: 100%;
      background: ${colors.darkGrade};
      padding: 20px;
      color: white;

      div {
        margin: 0 auto;
      }

      @media ${device.laptop} {
        display: none;
      }
    `
    const CloseIconContainer = styled.div`
      width: 100%;
      position: relative;
      svg {
        position: absolute;
        width: 15px;
        right: -10px;
        top: -10px;
      }
    `

    const LinkContainer = styled.ul`
      margin: 0px;
      padding: 0px;
      width: 100%;
      display: flex;
      flex-direction: column;

      @media ${device.laptop} {
        flex-direction: row;
      }
    `
    const Li = styled.li`
      background: ${colors.greenGrade};
      display: flex;
      height: 100%;
      a {
        color: white;
        text-transform: capitalize;
        padding: 15px 20px;
        @media ${device.laptop} {
          padding: 10px 20px 10px 10px;
          width: 100px;
        }
      }

      /* ? TEST -------------- */
      flex-direction: column;
      &:hover > div {
        opacity: 1;
        display: block;
        transition: 0.2s;
        @media ${device.laptop} {
          top: -0px;
          opacity: 1;
        }
      }
      div {
        position: relative;
        opacity: 0;
        display: none;

        /* display: flex; */
        @media ${device.laptop} {
          top: -50px;
          display: block;
          opacity: 1;
        }
        width: 100%;

        ul {
          padding: 0;

          margin: 0px;
          width: 100%;
          background: ${colors.green};

          @media ${device.laptop} {
            display: flex;
            position: absolute;
            left: -100vw;
            top: -2px;
            width: auto;
            height: 40px;
            z-index: -1;

            &::before {
              width: 100vw;
              background: inherit;
              content: " ";
              position: relative;
              left: -100vw;
            }
            &::after {
              width: 100vw;
              background: inherit;
              content: " ";
              position: relative;
              right: -100vw;
            }
          }
          li {
            padding: 10px 0px;
            @media ${device.laptop} {
              padding: 0px;
              height: 100%;
              display: flex;
            }
            a {
              min-width: 120px;
            }
          }
        }
      }
    `

    const LinkDevider = styled.div`
      width: 100%;
      min-height: 5px;
      background: ${colors.tan};
      @media ${device.laptop} {
        display: none;
      }
    `

    const GlobalLinks = styled.ul`
      margin: 0px;
      padding: 0px;
      width: 100%;
      display: flex;
      flex-direction: column;
      height: 100%;

      @media ${device.laptop} {
        flex-direction: row;
        justify-content: flex-end;
      }
    `
    const G_LI = styled.li`
      display: flex;

      a {
        color: white;
        text-transform: capitalize;
        background: ${colors.dark};
        width: 100%;
        padding: 15px 20px;
        margin-bottom: 2px;
        @media ${device.laptop} {
          padding: 10px 20px 10px 20px;
          margin-bottom: 0px;
        }
      }
    `

    const SwitchContainer = styled.div`
      background: ${colors.redGrade};
      width: 100%;
      display: flex;
      height: 100px;

      @media ${device.laptop} {
        height: auto;
        width: 250px;
      }
    `
    const SwitchIcon = styled.div`
      width: 100px;
      margin: 0px auto;

      @media ${device.laptop} {
        width: 50px;
      }
      img {
        padding-top: 10px;
        width: 100%;
        @media ${device.laptop} {
          padding-top: 8px;
        }
      }
    `

    return (
      <NavWrapper>
        <NavContainer>
          <NavHeader>
            <CloseIconContainer>
              <CloseIcon></CloseIcon>
            </CloseIconContainer>
            <SiteTitle titleName="Butique"></SiteTitle>
          </NavHeader>
          <LinkContainer>
            <Li>
              <a href="">link 1</a>
            </Li>
            <Li>
              <a href="#">link 2</a>
              <div>
                <ul>
                  <li>
                    <a href="">SubLink 1</a>
                  </li>
                  <li>
                    <a href="">SubLink 2</a>
                  </li>
                  <li>
                    <a href="">SubLink 3</a>
                  </li>
                </ul>
              </div>
            </Li>
            <Li>
              <a href="">link 3</a>
            </Li>
            <Li>
              <a href="">link 4</a>
            </Li>
            <Li>
              <a href="#">link 5</a>
              <div>
                <ul>
                  <li>
                    <a href="">SubLink 1</a>
                  </li>
                  <li>
                    <a href="">SubLink 2</a>
                  </li>
                  <li>
                    <a href="">SubLink 3</a>
                  </li>
                </ul>
              </div>
            </Li>
          </LinkContainer>
          <LinkDevider></LinkDevider>
          <GlobalLinks>
            <G_LI>
              <a href="">Link 1</a>
            </G_LI>
            <G_LI>
              <a href="">Link 2</a>
            </G_LI>
            <G_LI>
              <a href="">Link 3</a>
            </G_LI>
          </GlobalLinks>
          <SwitchContainer>
            <SwitchIcon>
              <img src={ButiqueSmallLabel} alt="" />
            </SwitchIcon>
          </SwitchContainer>
        </NavContainer>
      </NavWrapper>
    )
  }
}

export default navBottom
