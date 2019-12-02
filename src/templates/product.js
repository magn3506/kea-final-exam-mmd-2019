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
const MainContent = styled.div`
max-width: 1024px;
margin: 0 auto;
`

const BackSection = styled.div`
  width: 100%;
  background: #21231f;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  margin-bottom: 10px;

  @media ${device.tablet} {
    align-items: center;
    margin-bottom: 15px;
  }

  @media ${device.laptop} {
    align-items: center;
    margin-bottom: 10px;
    margin-top: 25px;
    padding: 10px;
  }
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

  & a {
    color: ${colors.gold};
  }

  @media ${device.tablet} {
    font-size: 0.8rem;
  }

  @media ${device.laptop} {
    font-size: 0.8rem;
  }

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

  @media ${device.tablet} {
    align-items: initial;
    background: ${colors.darkGrade};
  }

  @media ${device.laptop} {
    align-items: center;
    background: ${colors.darkGrade};
  }
`

const GalleryImagesCon = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
    display: flex;
    flex-direction: column;
    align-self: baseline;
    margin-top: 10px;
  }

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    align-self: baseline;
    margin-top: 10px;
  }
`

const GalleryImage = styled.img`
width: 50px;
height: 50px;
margin: 0 10px 7px 10px;
cursor: pointer;
transition: .3s;

&:hover {
  opacity: .8;
}
`

const ShownImage = styled.img`
    @media ${device.tablet} {
      width: 350px;
      height: 350px;
    }

    @media ${device.laptop} {
      width: 400px;
      height: 400px;
    }
`

const Title = styled.h1`
  color: white;
  text-align: center;

  @media ${device.tablet} {
    font-size: 1.3rem;
    margin: 10px 10px 10px 10px;
  }

  @media ${device.laptop} {

  }
`

const Price = styled.h1`
  color: ${colors.gold};
  text-align: center;

  @media ${device.tablet} {
    font-size: 1.2rem;
  }

  @media ${device.laptop} {

  }
`
const ShippingLink = styled.p`
  text-align: center;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;

  @media ${device.tablet} {
    font-size: 0.6rem;
  }

  @media ${device.laptop} {

  }

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
  @media ${device.tablet} {
    margin-top: 10px;
  }

  @media ${device.laptop} {
    margin-top: 10px;
  }
`
const Bar = styled.hr`
  border: 2px solid ${colors.gold};

  @media ${device.tablet} {
    border: 1px solid ${colors.gold};
    background: ${colors.gold};
  }

  @media ${device.laptop} {
    border: 1px solid ${colors.gold};
    background: ${colors.gold};
  }
`

const DescriptionTitle = styled.h3`
  color: ${colors.gold};
  font-weight: 600;

  @media ${device.tablet} {
    font-size: 1.2rem;
  }

  @media ${device.laptop} {
    font-size: 1.2rem;
  }
`
const DescriptionText = styled.p`
  color: white;

  & p {
    @media ${device.tablet} {
    font-size: 0.9rem;
    line-height: 1.3rem;
  }

  @media ${device.laptop} {
    font-size: 1rem;
  }
  }
`

const ProductInfoCon = styled.div`
      @media ${device.laptop} {
    width: 400px;
  }
`

const ProductWrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }

  @media ${device.laptop} {
    align-items: center;
    margin-bottom: 10px;
    justify-content: space-between;
  }
`
const ProductInfoTextCon = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Product = props => {
  const { title, img, price } = props.data.contentfulProducts

  return (
    <Layout siteType={true}>
      <MainContent>
      <BackSection>
        <BackText><Link to="/products">Back</Link></BackText>
        <Logo src={BoutiqueLogo} />
      </BackSection>
      <ProductWrapper>
        <ImageCon>
          <GalleryImagesCon>
            <GalleryImage src={img[0].resize.src}/>
            <GalleryImage src={img[0].resize.src}/>
            <GalleryImage src={img[0].resize.src}/>
            <GalleryImage src={img[0].resize.src}/>
          </GalleryImagesCon>
          <ShownImage src={img[0].resize.src} />
        </ImageCon>
        <ProductInfoCon>
          <ProductInfoTextCon>
          <Title>{title}</Title>
          <Price>{price}</Price>
          <ShippingLink>
            <Link to="/shipping-return">Shipping and returns policy</Link>
          </ShippingLink>
          </ProductInfoTextCon>
          <PaymentFields />
          <DeliveryReturnCTA />
        </ProductInfoCon>
      </ProductWrapper>
      <DescriptionCon>
        <Bar />
        <DescriptionTitle>Description</DescriptionTitle>
        <DescriptionText>
          {documentToReactComponents(
            props.data.contentfulProducts.description.json
          )}
        </DescriptionText>
      </DescriptionCon>
      </MainContent>
    </Layout>
  )
}

export default Product
