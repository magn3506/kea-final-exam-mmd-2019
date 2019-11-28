import React from "react"
import styled from "styled-components"

import ProductTile from "../../molecules/product-tile/product-tile"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"

const Wrapper = styled.div`
  width: 100%;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
`
const SwiperGrid = styled(Swiper)``
const ProductGrid = styled.div``

const ProductTilesGrid = props => {
  let params

  const mediaMobile = window.matchMedia(
    "(max-width: 600px) and (min-width: 320px)"
  )
  const mediaTablet = window.matchMedia(
    "(max-width: 1024px) and (min-width: 768px)"
  )
  const mediaDesktop = window.matchMedia(
    "(max-width: 2560px) and (min-width: 1024px)"
  )

  const paramsMobile = {
    slidesPerView: 3.3,
    spaceBetween: 0,
  }
  const paramsTablet = {
    slidesPerView: 4,
    spaceBetween: 0,
  }

  const paramsDesktop = {
    slidesPerView: 4,
    spaceBetween: 0,
  }
  if (mediaMobile.matches) {
    params = paramsMobile
    console.log("Mobile", params, mediaMobile)
  } else if (mediaTablet.matches) {
    params = paramsTablet
    console.log("Tablet", params, mediaTablet)
  } else if (mediaDesktop.matches) {
    params = paramsDesktop
    console.log("Desktop", params, mediaDesktop)
  }

  return (
    <Wrapper>
      <Container>
        <SwiperGrid {...params}>
          {props.products.map(product => (
            <ProductGrid key={product.node.id}>
              <ProductTile
                title={product.node.title}
                price={product.node.price}
                img={product.node.img[0].resize.src}
                link="/products"
              />
            </ProductGrid>
          ))}
        </SwiperGrid>
      </Container>
    </Wrapper>
  )
}

export default ProductTilesGrid
