import React, { Component } from "react"
import styled, { css } from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import { device, size } from "../../../styles/global-js/breakpoints"
import ButiqueSmallLabel from "../../../../static/icons/small_label_butique.svg"

export class navBottom extends Component {
  render() {
    const NavWrapper = styled.div`
      width: 100vw;
      height: 100vh;
      background: rgba(35, 37, 33, 0.9);
      position: fixed;
      /* top: 0; */

      @media ${device.laptop} {
        position: static;
        height: auto;
        background: ${colors.greenGrade};
      }
    `
    const NavContainer = styled.div`
      width: 75vw;
      height: 100vh;
      background-color: ${colors.darkGrey};
      display: flex;
      flex-direction: column;
      @media ${device.laptop} {
        height: 100%;
        width: 1000px;
        margin: auto;
        flex-direction: row;
        background-color: transparent;
      }
    `

    const NavHeader = styled.div`
      width: 100%;
      background: ${colors.darkGrade};
      height: 150px;
      color: white;

      @media ${device.laptop} {
        display: none;
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
      a {
        color: white;
        text-transform: capitalize;
        padding: 10px;
        @media ${device.laptop} {
        }
      }
    `

    const LinkDevider = styled.div`
      width: 100%;
      height: 5px;
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
      /* FIX COLROS ! */
      display: flex;

      a {
        background-color: black;
        color: white;
        text-transform: capitalize;
        background: black;
        width: 100%;
        padding: 10px;
      }
    `

    const SwitchContainer = styled.div`
      background: ${colors.redGrade};
      height: 250px;
      width: 100%;
      display: flex;

      @media ${device.laptop} {
        height: auto;
        width: 250px;
      }
    `
    const SwitchIcon = styled.div`
      width: 100px;
      margin: 0 auto;
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
          <NavHeader>Butique</NavHeader>
          <LinkContainer>
            <Li>
              <a href="">link 1</a>
            </Li>
            <Li>
              <a href="">link 2</a>
            </Li>
            <Li>
              <a href="">link 3</a>
            </Li>
            <Li>
              <a href="">link 4</a>
            </Li>
            <Li>
              <a href="">link 5</a>
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
