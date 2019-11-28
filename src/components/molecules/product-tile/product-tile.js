import React from "react"
import styled from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import { device } from "../../../styles/global-js/breakpoints"

const Wrapper = styled.div`
  width: 100px;
  margin-left: 5px;
  margin-right: 5px;
  background: white;
  margin-bottom: 30px;

  @media ${device.tablet} {
    width: 175px;
    margin-left: 5px;
    margin-right: 5px;
  }

  @media ${device.laptop} {
    width: 225px;
    margin-left: 10px;
    margin-right: 10px;
  }
`

const InfoBox = styled.div`
  background: white;
  padding: 5px 5px 5px 3px;

  @media ${device.tablet} {
    padding: 10px 10px 10px 10px;
  }

  @media ${device.laptop} {
    padding: 10px 10px 10px 10px;
  }
`
const ImgBox = styled.img`
  width: 100%;
`

const ProductTitle = styled.h4`
  font-size: 0.8rem;
  margin-top: 0;

  @media ${device.tablet} {
    font-size: 1rem;
  }

  @media ${device.laptop} {
    font-size: 1.2rem;
  }
`

const ProductPrice = styled.p`
  color: ${colors.gold};
  font-weight: 600;
  font-size: 0.8rem;
  margin-bottom: 0;

  @media ${device.tablet} {
    font-size: 1rem;
  }

  @media ${device.laptop} {
    font-size: 1rem;
  }
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
