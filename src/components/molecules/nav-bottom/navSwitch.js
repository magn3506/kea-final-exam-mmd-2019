import React, { Component } from "react"
import styled, { css } from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import ButiqueIcon from "../../../../static/icons/small_label_butique.svg"
import BarIcon from "../../../../static/icons/smal_label_bar.svg"
import { Link } from "gatsby"

const NavSwitch = props => {
  const NavSiteSwitch = styled.div`
    width: 100%;
    height: 60px;
    background: ${props.siteType ? colors.redGrade : colors.greenGrade};
    border-top: 2px solid ${colors.tan};
    display: flex;
  `

  const IconCon = styled.div`
    align-self: center;
    width: 80px;
    margin: 0 auto;

    img {
      width: 100%;
    }
  `

  return (
    <Link>
      <NavSiteSwitch>
        <IconCon>
          <img
            src={props.siteType ? BarIcon : ButiqueIcon}
            alt='Nav site switch'
          />
        </IconCon>
      </NavSiteSwitch>
    </Link>
  )
}

export default NavSwitch
