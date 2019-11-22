import React from "react"

import styled from "styled-components"
import { colors } from "../styles/global-js/colors"
import "../styles/global-css/base.scss"
import Button from "../components/atoms/button/button"

const StyleCompTest = styled.h1`
  color: ${colors.green};
  font-size: 2rem;
`

const indexPage = () => {
  return (
    <div>
      <StyleCompTest>Hello World!</StyleCompTest>
      <Button secondary>Click me!</Button>
    </div>
  )
}

export default indexPage
