import React from "react"
import styled from "styled-components"

import ProductTile from "../../molecules/product-tile/product-tile"
import Swiper from 'react-id-swiper'
import "swiper/css/swiper.css"

const Wrapper = styled.div`
  width: 100%;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
`
const SwiperGrid = styled(Swiper)`

`
const ProductGrid = styled.div`
`

const ProductTilesGrid = props => {

    const params = {
        slidesPerView: 3,
        spaceBetween: 5
      }

  return (
    <Wrapper>
      <Container>
      <SwiperGrid {...params}>
          {props.products.map( product => (
            <ProductGrid>
              <ProductTile title={product.title} price={product.price} img={product.img} />
            </ProductGrid>
          ))}
      </SwiperGrid>
      </Container>
    </Wrapper>
  )
}

export default ProductTilesGrid
