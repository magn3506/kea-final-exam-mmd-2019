import React from "react"
import styled from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import ButiqueIcon from "../../../../static/icons/small_label_butique.svg"
import BarIcon from "../../../../static/icons/smal_label_bar.svg"

const NavSwitch = props => {
  const NavSiteSwitch = styled.button`
    width: 100%;
    height: 60px;
    background: ${props.siteType ? colors.redGrade : colors.greenGrade};
    border-top: 2px solid ${colors.tan};
    display: flex;
    cursor: pointer;
    border: none;
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
    <NavSiteSwitch onClick={props.handleSiteChange}>
      <IconCon>
        <img
          src={props.siteType ? BarIcon : ButiqueIcon}
          alt="Nav site switch"
        />
      </IconCon>
    </NavSiteSwitch>
  )
}

export default NavSwitch
