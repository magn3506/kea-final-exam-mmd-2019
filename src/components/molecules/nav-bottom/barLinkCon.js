import React, { Component } from "react"
import styled, { css } from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import { Link } from "gatsby"

export class bLinkCon extends Component {
  render() {
    const BLinkCon = styled.div``

    const Blink = styled.li`
      background: ${colors.redGrade};
      min-height: 40px;
      display: flex;
      flex-direction: column;

      a {
        text-decoration: none;
        color: ${colors.white};
        text-transform: capitalize;
        font-size: 14px;
        margin: 15px 0px;
        margin-left: 25px;
      }

      &:hover {
        background: grey;
        color: orange;
      }
      &:hover > a {
        color: orange;
      }
      &:hover > ul {
        display: block;
      }
    `
    const BSubLinkCon = styled.ul`
      display: flex;
      flex-direction: column;
      display: none;
      left: 0;
    `
    const BSubLink = styled.li`
      background: ${colors.green};
      min-height: 40px;
      display: flex;
      cursor: pointer;
      a {
        align-self: center;
        text-decoration: none;
        color: ${colors.white};
        text-transform: capitalize;
        font-size: 14px;
      }
      &:hover {
        background: darkgray;
      }
      &:hover > a {
        color: red;
      }
    `
    return (
      <BLinkCon>
        <ul>
          <Blink>
            <Link>Bourbon Tasting</Link>
          </Blink>
          <Blink>
            <Link>Drinks Menu</Link>
          </Blink>
          <Blink>
            <Link>Events</Link>
          </Blink>
          <Blink>
            <Link>Gallery</Link>
          </Blink>
        </ul>
      </BLinkCon>
    )
  }
}

export default bLinkCon