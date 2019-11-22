import React from "react"
import styled from "styled-components"
import { colors } from "../../../styles/global-js/colors"

const Wrapper = styled.div`
  width: 225px;
`

const InfoBox = styled.div`
  background: white;
`
const ImgBox = styled.img`
width: 100%;
`

const ProductTitle = styled.h4``

const ProductPrice = styled.p`
  color: ${colors.gold};
  font-weight: 600;
`

const ProductTile = props => {
  return (
    <Wrapper>
      <ImgBox src={props.img} />
      <InfoBox>
        <ProductTitle>{props.title}</ProductTitle>
        <ProductPrice>{props.price}</ProductPrice>
      </InfoBox>
    </Wrapper>
  )
}

export default ProductTile
