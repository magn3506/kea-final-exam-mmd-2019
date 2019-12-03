import React from "react"
import styled from "styled-components"

import ProductTile from "../../molecules/product-tile/product-tile"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"

const Wrapper = styled.div`
  width: 100%;
`
const ContainerMobile = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 600px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: none;
  }
`
const ContainerTablet = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`
const ContainerDesktop = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`

const SwiperGrid = styled(Swiper)``

const ProductGrid = styled.div``

const ProductTilesGrid = props => {
  const paramsMobile = {
    slidesPerView: 2.5,
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

  return (
    <Wrapper>
      <ContainerMobile>
        <SwiperGrid {...paramsMobile}>
          {props.products.map(product => (
            <ProductGrid key={product.node.id}>
              <ProductTile
                title={product.node.title}
                price={product.node.price}
                img={product.node.img[0].resize.src}
                link={product.node.slug}
              />
            </ProductGrid>
          ))}
        </SwiperGrid>
      </ContainerMobile>
      <ContainerTablet>
        <SwiperGrid {...paramsTablet}>
          {props.products.map(product => (
            <ProductGrid key={product.node.id}>
              <ProductTile
                title={product.node.title}
                price={product.node.price}
                img={product.node.img[0].resize.src}
                link={product.node.slug}
              />
            </ProductGrid>
          ))}
        </SwiperGrid>
      </ContainerTablet>
      <ContainerDesktop>
        <SwiperGrid {...paramsDesktop}>
          {props.products.map(product => (
            <ProductGrid key={product.node.id}>
              <ProductTile
                title={product.node.title}
                price={product.node.price}
                img={product.node.img[0].resize.src}
                link={product.node.slug}
              />
            </ProductGrid>
          ))}
        </SwiperGrid>
      </ContainerDesktop>
    </Wrapper>
  )
}

export default ProductTilesGrid
