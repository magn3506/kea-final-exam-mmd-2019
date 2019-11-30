import React from "react"
import styled from "styled-components"
import Delivery from "../../../../static/icons/delivery-truck.svg"
import BoxReturn from "../../../../static/icons/box-return.svg"

import { device } from "../../../styles/global-js/breakpoints"

const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 10px;
`

const DeliveryImg = styled.img`
width: 35px;
margin-right: 15px;
`
const ReturnImg = styled.img`
width: 35px;
margin-right: 15px;
`

const DeliveryCon = styled.div`
display: flex;
flex-direction: row;
`

const ReturnCon = styled.div`
display: flex;
flex-direction: row;
`

const DeliveryTextCon = styled.div`
`

const ReturnTextCon = styled.div``

const DeliveryTitle = styled.p`
font-weight: 600;
font-size: 0.9rem;
color: white;
margin-bottom: 5px;

@media ${device.tablet} {
    font-size: 0.8rem;
  }

  @media ${device.laptop} {
    font-size: 0.6rem;
    margin-bottom: 0;
  }
`
const DeliveryText = styled.p`
color: white;
margin-top: 0;
font-size: 0.9rem;

@media ${device.tablet} {
    font-size: 0.8rem;
  }

  @media ${device.laptop} {
    font-size: 0.6rem;
  }
`

const ReturnTitle = styled.p`
font-weight: 600;
color: white;
margin-bottom: 5px;
font-size: 0.9rem;

@media ${device.tablet} {
    font-size: 0.8rem;
  }

  @media ${device.laptop} {
    font-size: 0.6rem;
    margin-bottom: 0;
  }
`
const ReturnText = styled.p`
color: white;
margin-top: 0;
font-size: 0.9rem;

@media ${device.tablet} {
    font-size: 0.8rem;
  }

  @media ${device.laptop} {
    font-size: 0.6rem;
  }
`

const DeliveryReturnCTA = () => {
    return (
        <Wrapper>
            <DeliveryCon>
            <DeliveryImg src={Delivery} alt="Delivery" />
            <DeliveryTextCon>
            <DeliveryTitle>Standard delivery</DeliveryTitle>
            <DeliveryText>1-3 weekdays</DeliveryText>
            </DeliveryTextCon>
            </DeliveryCon>
            <ReturnCon>
            <ReturnImg src={BoxReturn} alt="Return" />
            <ReturnTextCon>
            <ReturnTitle>Return policy</ReturnTitle>
            <ReturnText>Within 14 days</ReturnText>
            </ReturnTextCon>
            </ReturnCon>
        </Wrapper>
    )
}

export default DeliveryReturnCTA