import styled, { css } from "styled-components"

const Button = styled.a`
  min-width: 100px;
  padding: 5px 20px;
  height: 50px;
  background-color: green;
  border-radius: 200px;
  border: none;
  color: white;
  font-weight: 800;
  text-align: center;
  cursor: pointer;
  ${props =>
    props.secondary &&
    css`
      background: white;
      color: palevioletred;
      border: 1px solid black;
    `};
`

export default Button
