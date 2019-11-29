import React from "react"
import styled from "styled-components"

import { device } from "../../../styles/global-js/breakpoints"
import CategoryTile from "../../atoms/category-tile/category-tile"

const Wrapper = styled.div`
width: 100%;
margin: 50px 0px 50px 0px;
`
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media ${device.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Title = styled.h2`
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding-bottom: 12px;
`

const CategoryTilesGrid = props => {
    return (
        <Wrapper>
            <Title>{props.title}</Title>
            <Container>
            <CategoryTile img={props.img} title="Hats" link="/products" />
            <CategoryTile img={props.img} title="Ladies" link="/products" />
            <CategoryTile img={props.img} title="Boots" link="/products" />
            </Container>
        </Wrapper>
    )
}

export default CategoryTilesGrid