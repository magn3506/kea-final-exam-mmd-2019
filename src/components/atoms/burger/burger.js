import React, { Component } from "react"
import styled from "styled-components"
import { colors } from "../../../styles/global-js/colors"

const burger = props => {
  const Burger = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    @media (min-width: 1024px) {
      display: none;
    }
  `
  const BurgerLine = styled.div`
    background-color: ${colors.grey};
    width: 100%;
    height: 4px;
    border-radius: 100px;
  `
  return (
    <Burger onClick={props.handleNavOpen}>
      <BurgerLine></BurgerLine>
      <BurgerLine></BurgerLine>
      <BurgerLine></BurgerLine>
    </Burger>
  )
}

export default burger
