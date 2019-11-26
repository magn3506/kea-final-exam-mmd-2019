import React, { Component } from "react"
import styled, { css } from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import { device, size } from "../../../styles/global-js/breakpoints"
import ButiqueSmallLabel from "../../../../static/icons/small_label_butique.svg"
import BarSmallLabel from "../../../../static/icons/smal_label_bar.svg"
import SiteTitle from "../../atoms/siteTitle/siteTitle"
import CloseIcon from "../../atoms/icons/closeIcon/close-icon"
import ArrowIcon from "../../atoms/icons/arrow/arrow"
export class navBottom extends Component {
  state = {
    siteType: true,
  }

  handleSwitch = () => {
    this.setState({
      siteType: !this.state.siteType,
    })
  }

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
        background: ${this.state.siteType
          ? colors.greenGrade
          : colors.redGrade};
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
      background: ${this.state.siteType ? colors.greenGrade : colors.redGrade};
      display: flex;
      height: 100%;
      a {
        color: white;
        text-transform: capitalize;
        padding: 15px 20px;
        white-space: nowrap;
        @media ${device.laptop} {
          padding: 10px 20px 10px 10px;
          width: auto;
        }

        &:hover > i {
          svg {
            transform: rotate(360deg);
            fill: ${colors.tan};
          }
        }
        i {
          margin-left: 5px;

          svg {
            transform: rotate(180deg);
            width: 10px;
            height: 10px;
          }
        }
      }

      /* ? TEST -------------- */
      flex-direction: column;
      &:hover > div {
        opacity: 1;
        display: block;
        transition: 0.2s ease-in-out;
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
          transition: 0.5s 0.5s ease-in-out;
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
              width: auto;
              white-space: nowrap;
            }
          }
        }
      }
      a:hover {
        color: ${colors.tan};
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
      background: ${this.state.siteType ? colors.redGrade : colors.greenGrade};
      width: 100%;
      display: flex;
      height: 100px;
      cursor: pointer;

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
            <SiteTitle
              titleName={this.state.siteType ? "Butique" : "Bar & Café"}
            ></SiteTitle>
          </NavHeader>
          <LinkContainer>
            {this.state.siteType ? (
              <React.Fragment>
                <Li>
                  <a href="">Hats</a>
                </Li>
                <Li>
                  <a href="#">
                    Boots <i>{<ArrowIcon></ArrowIcon>}</i>
                  </a>
                  <div>
                    <ul>
                      <li>
                        <a href="">The Lad</a>
                      </li>
                      <li>
                        <a href="">The Lady</a>
                      </li>
                    </ul>
                  </div>
                </Li>
                <Li>
                  <a href="">Clothing</a>
                </Li>
                <Li>
                  <a href="#">
                    Accesories <i>{<ArrowIcon></ArrowIcon>}</i>
                  </a>
                  <div>
                    <ul>
                      <li>
                        <a href="">Gifts</a>
                      </li>
                      <li>
                        <a href="">Accesories</a>
                      </li>
                      <li>
                        <a href="">Beard</a>
                      </li>
                    </ul>
                  </div>
                </Li>
                <Li>
                  <a href="#">Sale</a>
                </Li>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Li>
                  <a href="">Bourbon tasting</a>
                </Li>
                <Li>
                  <a href="#">Drinks Menu</a>
                </Li>
                <Li>
                  <a href="">Events</a>
                </Li>
                <Li>
                  <a href="#">Gallery</a>
                </Li>
              </React.Fragment>
            )}
          </LinkContainer>
          <LinkDevider></LinkDevider>
          <GlobalLinks>
            <G_LI>
              <a href="">Contact</a>
            </G_LI>
            <G_LI>
              <a href="">About</a>
            </G_LI>
          </GlobalLinks>
          <SwitchContainer onClick={this.handleSwitch}>
            <SwitchIcon>
              <img
                src={this.state.siteType ? BarSmallLabel : ButiqueSmallLabel}
                alt="shop label icon"
              />
            </SwitchIcon>
          </SwitchContainer>
        </NavContainer>
      </NavWrapper>
    )
  }
}

export default navBottom
