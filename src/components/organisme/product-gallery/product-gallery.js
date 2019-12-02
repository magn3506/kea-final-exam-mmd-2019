import React from "react"
import styled from "styled-components"

import ProductTile from "../../molecules/product-tile/product-tile"

import { device } from "../../../styles/global-js/breakpoints"

const Wrapper = styled.div`
  width: 100%;

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.laptop} {
    max-width: 1024px;
  }
`

const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`

const ProductGallery = ({ products }) => {
  return (
    <Wrapper>
        <Container>
        {products.edges.map(product => (
        <ProductTile
          title={product.node.title}
          price={product.node.pricing}
          img={product.node.img[0].resize.src}
          link={product.node.slug}
          key={product.node.id}
        />
      ))}
        </Container>
    </Wrapper>
  )
}

export default ProductGallery
