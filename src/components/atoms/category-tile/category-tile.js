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
  z-index: 1;
  left: 10px;
  font-size: 1.2rem;
`

const Overlay = styled.div`
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.35);
position: absolute;
transition: .3s;
z-index: 0;

&:hover {
  background: rgba(0, 0, 0, 0.1);
}
`

const CategoryTile = props => {
  return (
    <Wrapper>
        <Link to="/products" state={{ filter: props.link }}>
          <Title>{props.title}</Title>
          <Overlay />
          <ImgBox src={props.img} />
        </Link>
    </Wrapper>
  )
}

export default CategoryTile
