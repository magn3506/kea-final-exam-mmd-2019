import React from "react"
import styled from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import { device } from "../../../styles/global-js/breakpoints"
import { Link } from "gatsby"

const Wrapper = styled.div`
  width: 135px;
  margin-left: 5px;
  margin-right: 5px;
  background: white;
  margin-bottom: 30px;
  transition: 0.2s;

  &:hover {
    opacity: 1;
    box-shadow: ${colors.NavBoxShadow};
    border: 5px solid ${colors.gold};
    border-radius: 10px;
    overflow: hidden;
  }

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
  position: relative;
  height: 100px;

  @media ${device.tablet} {
    padding: 10px 10px 10px 10px;
    height: 125px;
  }

  @media ${device.laptop} {
    padding: 10px 10px 10px 10px;
    height: 125px;
  }
`
const ImgBox = styled.img`
  width: 100%;
`

const ProductTitle = styled.h4`
  font-size: 0.8rem;
  margin-top: 0;
  color: black;
  width: 100%;

  @media ${device.tablet} {
    font-size: 1rem;
  }

  @media ${device.laptop} {
    font-size: 1rem;
  }
`

const ProductPrice = styled.p`
  color: ${colors.gold};
  font-weight: 600;
  font-size: 0.8rem;
  margin-bottom: 0;
  position: absolute;
  bottom: 10px;

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
      <Link to={props.link}>
        <ImgBox src={props.img} />
        <InfoBox>
          <ProductTitle>{props.title}</ProductTitle>
          <ProductPrice>{props.price}</ProductPrice>
        </InfoBox>
      </Link>
    </Wrapper>
  )
}

export default ProductTile
