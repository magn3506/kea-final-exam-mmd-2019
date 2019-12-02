import React from "react"
import styled from "styled-components"

import { colors } from "../../../styles/global-js/colors"
import { device } from "../../../styles/global-js/breakpoints"

const Wrapper = styled.div`
margin: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const SizeInputfield = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: ${colors.gold};
  font-weight: 600;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 20px;

  option {
    color: black;
    background: white;
    border-radius: 3px;
  }

`

const PaymentOptionsBox = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const BuyNow = styled.button`
width: 175px;
height: 35px;
cursor: pointer;
transition: .3s;

background: ${colors.green};
border-radius: 3px;
border: none;
color: white;
font-weight: 600;
&:hover {
  opacity: .8;
}

@media ${device.tablet} {
    width: 150px;
  }

  @media ${device.laptop} {
    width: 175px;
  }
`
const AddCart = styled.button`
width: 175px;
height: 35px;
cursor: pointer;
transition: .3s;

background: ${colors.gold};
border-radius: 3px;
border: none;
color: white;
font-weight: 600;
&:hover {
  opacity: .8;
}

@media ${device.tablet} {
    width: 150px;
  }

  @media ${device.laptop} {
    width: 175px;
  }
`

const PaymentFields = () => {
  return (
    <Wrapper>
      <SizeInputfield>
        <option value="" hidden>
          Choose size
        </option>
        <option value="1">S</option>
        <option value="2">M</option>
        <option value="3">L</option>
        <option value="4">XL</option>
      </SizeInputfield>
      <PaymentOptionsBox>
    <AddCart>Add to cart</AddCart>
    <BuyNow>Buy now</BuyNow>
      </PaymentOptionsBox>
    </Wrapper>
  )
}

export default PaymentFields
