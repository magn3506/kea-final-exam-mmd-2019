import React, { Component } from "react"
import styled, { css } from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import { device, size } from "../../../styles/global-js/breakpoints"
import ButiqueSmallLabel from "../../../../static/icons/small_label_butique.svg"
import BarSmallLabel from "../../../../static/icons/smal_label_bar.svg"
import SiteTitle from "../../atoms/siteTitle/siteTitle"
import CloseIcon from "../../atoms/icons/closeIcon/close-icon"
import ArrowIcon from "../../atoms/icons/arrow/arrow"
import { Link } from "gatsby"

const navBottom = props => {
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
      background: ${props.siteType ? colors.greenGrade : colors.redGrade};
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
    background: ${props.siteType ? colors.greenGrade : colors.redGrade};
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

    a:hover {
      color: ${colors.tan};
    }

    .active {
      color: ${colors.tan};
      border-bottom: 5px solid ${colors.tan};
    }
  `

  const SwitchContainer = styled.div`
    background: ${props.siteType ? colors.redGrade : colors.greenGrade};
    width: 100%;
    display: flex;
    height: 100px;
    cursor: pointer;

    a {
      width: 100%;
    }

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
            titleName={props.siteType ? "Butique" : "Bar & Café"}
          ></SiteTitle>
        </NavHeader>
        <LinkContainer>
          {props.siteType ? (
            <React.Fragment>
              <Li>
                <Link to="/products" state={{ filter: "hats" }}>
                  Hats
                </Link>
              </Li>
              <Li>
                <Link to="#">
                  Boots <i>{<ArrowIcon></ArrowIcon>}</i>
                </Link>
                <div>
                  <ul>
                    <li>
                      <Link to="/products" state={{ filter: "boots men" }}>
                        The Lad
                      </Link>
                    </li>
                    <li>
                      <Link to="/products" state={{ filter: "boots women" }}>
                        The Lady
                      </Link>
                    </li>
                  </ul>
                </div>
              </Li>
              <Li>
                <Link to="/products" state={{ filter: "clothing" }}>
                  Clothing
                </Link>
              </Li>
              <Li>
                <Link to="#">
                  Accesories <i>{<ArrowIcon></ArrowIcon>}</i>
                </Link>
                <div>
                  <ul>
                    <li>
                      <Link to="/products" state={{ filter: "gift" }}>
                        Gifts
                      </Link>
                    </li>
                    <li>
                      <Link to="/products" state={{ filter: "accesories" }}>
                        Accesories
                      </Link>
                    </li>
                    <li>
                      <Link to="/products" state={{ filter: "beard" }}>
                        Beard
                      </Link>
                    </li>
                  </ul>
                </div>
              </Li>
              <Li>
                <Link to="/products" state={{ filter: "sale" }}>
                  Sale
                </Link>
              </Li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Li>
                <Link to="/bourbon-tasting">Bourbon tasting</Link>
              </Li>
              <Li>
                <Link to="/drinks-menu">Drinks Menu</Link>
              </Li>
              <Li>
                <Link to="/events">Events</Link>
              </Li>
              <Li>
                <Link to="/gallery">Gallery</Link>
              </Li>
            </React.Fragment>
          )}
        </LinkContainer>
        <LinkDevider></LinkDevider>
        <GlobalLinks>
          <G_LI>
            <Link activeClassName="active" to="/contact">
              Contact
            </Link>
          </G_LI>
          <G_LI>
            <Link activeClassName="active" to="/about">
              About
            </Link>
          </G_LI>
        </GlobalLinks>
        <SwitchContainer>
          {!props.siteType ? (
            <Link to="/butique">
              <SwitchIcon>
                <img src={ButiqueSmallLabel} alt="shop label icon" />
              </SwitchIcon>
            </Link>
          ) : (
            <Link to="/bar">
              <SwitchIcon>
                <img src={BarSmallLabel} alt="shop label icon" />
              </SwitchIcon>
            </Link>
          )}
        </SwitchContainer>
      </NavContainer>
    </NavWrapper>
  )
}

export default navBottom
