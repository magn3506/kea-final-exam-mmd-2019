import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"
import { device } from "../../../styles/global-js/breakpoints"

const Wrapper = styled.div`
  width: 280px;
  height: 300px;
  position: relative;
  transition: 0.3s;
  margin-bottom: 15px;

  &:hover {
    opacity: 0.8;
  }

  @media ${device.tablet} {
    width: 200px;
    height: 215px;
    margin-bottom: 0;
  }

  @media ${device.laptop} {
    width: 300px;
    height: 300px;
  }
`
const ImgBox = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Title = styled.h3`
  color: white;
  position: absolute;
  left: 10px;
  font-size: 1.2rem;
`

const CategoryTile = props => {
  return (
    <Wrapper>
      <Link
        to={`products/${props.title.toLowerCase()}`}
        state={{ filter: props.link }}
      >
        <Title>{props.title}</Title>
        <ImgBox src={props.img} />
      </Link>
    </Wrapper>
  )
}

export default CategoryTile
