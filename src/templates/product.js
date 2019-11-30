import React from "react"
import styled from "styled-components"

import Layout from "../components/layout/layout"
import { colors } from "../styles/global-js/colors"
import { device } from "../styles/global-js/breakpoints"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import BoutiqueLogo from "../../static/Boutique-logo.png"
import PaymentFields from "../components/molecules/paymentFields/paymentFields"
import DeliveryReturnCTA from "../components/atoms/delivery-return-cta/delivery-return-cta"

export const query = graphql`
  query($slug: String!) {
    contentfulProducts(slug: { eq: $slug }) {
      title
      img {
        resize(width: 300, height: 300) {
          src
        }
      }
      price
      description {
        json
      }
    }
  }
`
const BackSection = styled.div`
  width: 100%;
  background: #21231f;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`
const Logo = styled.img`
  width: 50px;
  height: 50px;
`

const BackText = styled.p`
  color: ${colors.gold};
  font-weight: 600;
  position: relative;
  padding-left: 20px;
  cursor: pointer;

  &:before,
  &:after {
    border-right: 2px solid;
    content: "";
    display: block;
    height: 8px;
    margin-top: -6px;
    position: absolute;
    transform: rotate(45deg);
    left: 5px;
    top: 50%;
    width: 0;
  }

  &:after {
    margin-top: -1px;
    transform: rotate(135deg);
  }

  &:hover {
    opacity: 0.8;
  }
`
const ImageCon = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.h1`
  color: white;
  text-align: center;
`

const Price = styled.h1`
  color: ${colors.gold};
  text-align: center;
`
const ShippingLink = styled.p`
  text-align: center;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;

  a {
    color: white;
    text-decoration: underline;
    &:hover {
      opacity: 0.8;
    }
  }
`

const DescriptionCon = styled.div`
padding: 5px;
`
const Bar = styled.hr`
border: 2px solid ${colors.gold};
`

const DescriptionTitle = styled.h3`
  color: ${colors.gold};
  font-weight: 600;
`
const DescriptionText = styled.p`
  color: white;
`

const Product = props => {
  const { title, img, price } = props.data.contentfulProducts

  return (
    <Layout siteType={true}>
      <BackSection>
        <BackText>Back</BackText>
        <Logo src={BoutiqueLogo} />
      </BackSection>
      <ImageCon>
        <img src={img[0].resize.src} />
      </ImageCon>
      <Title>{title}</Title>
      <Price>{price}</Price>
      <ShippingLink>
        <Link to="/shipping-return">Shipping and returns policy</Link>
      </ShippingLink>
      <PaymentFields />
      <DeliveryReturnCTA />
      <DescriptionCon>
        <Bar />
        <DescriptionTitle>Description</DescriptionTitle>
        <DescriptionText>
          {documentToReactComponents(
            props.data.contentfulProducts.description.json
          )}
        </DescriptionText>
      </DescriptionCon>
    </Layout>
  )
}

export default Product
