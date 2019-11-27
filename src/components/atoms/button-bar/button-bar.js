import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { colors } from "../../../styles/global-js/colors"

const ButtonBar = props => {
  const ButtonBar = styled.div`
    margin-top: 50px;
    a {
      color: ${colors.gold};
      border: 3px solid ${colors.gold};
      padding: 10px 20px;
      border-radius: 1000px;
      background: transparent;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      display: inline-block;
    }
    a:hover {
      transform: scale(0.97);
      transition: 0.1s ease-in-out;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    }
  `

  return (
    <>
      <ButtonBar>
        <Link to={props.linkTo}>{props.children}</Link>
      </ButtonBar>
    </>
  )
}

export default ButtonBar
