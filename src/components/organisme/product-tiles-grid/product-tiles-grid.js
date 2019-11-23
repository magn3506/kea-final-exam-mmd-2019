import React from "react"
import styled from "styled-components"

import ProductTile from "../../molecules/product-tile/product-tile"

const Wrapper = styled.div`
  width: 100%;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const ProductTilesGrid = props => {
  return (
    <Wrapper>
      <Container>
          {props.products.map( product => (
              <ProductTile title={product.title} price={product.price} img={product.img} />
          ))}
      </Container>
    </Wrapper>
  )
}

export default ProductTilesGrid
