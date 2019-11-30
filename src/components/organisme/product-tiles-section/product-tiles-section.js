import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"
import { device } from "../../../styles/global-js/breakpoints"

import ProductTilesGrid from "../product-tiles-grid/product-tiles-grid"

const Wrapper = styled.div`
  width: 100%;
`

const Title = styled.h2`
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0px 0px 12px 12px;
  font-size: 1.5rem;
`

const CTA = styled(Link)`
  color: white;

  padding-left: 5px;
  font-weight: 600;
  font-size: 0.8rem;

  &:hover {
    opacity: 0.8;
  }

  @media ${device.tablet} {
    font-size: 1rem;
    padding-left: 10px;
  }

  @media ${device.laptop} {
    font-size: 1.2rem;
    padding-left: 10px;
  }
`

const ProductTilesSection = ({ products, title, cta }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ProductTilesGrid products={products} />
      <CTA to="/products">{cta}</CTA>
    </Wrapper>
  )
}

export default ProductTilesSection
