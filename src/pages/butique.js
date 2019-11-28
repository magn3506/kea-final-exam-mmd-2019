import Layout from "../components/layout/layout"
import styled from "styled-components"

import React, { Component } from "react"
import { device } from "../styles/global-js/breakpoints"

import SplashImage from "../components/atoms/splashImage/splashImage"
import TitleCTA from "../components/atoms/TitleCTA/TitleCTA"
import ImageBanner from "../components/molecules/imageBanner/imageBanner"
import ProductTilesGrid from "../components/organisme/product-tiles-grid/product-tiles-grid"
import CategoryTilesGrid from "../components/molecules/category-tiles-grid/category-tiles-grid"
import ProductTilesSection from "../components/organisme/product-tiles-section/product-tiles-section"

/* DUMMY DATA SKAL SLETTES OG ERSTATTES MED CONTENTFUL DATA */
const img = "https://dummyimage.com/1200x1000/000.jpg"
const categoryImg = "https://dummyimage.com/600x600/000.jpg"
const products = [
  {
    title: "Fedora Furfelt - Stetson",
    price: "1.099,00 kr",
    img: "https://dummyimage.com/600x600/000/fff.jpg",
    id: 1,
  },
  {
    title: "Fedora Furfelt - Stetson",
    price: "1.099,00 kr",
    img: "https://dummyimage.com/600x600/000/fff.jpg",
    id: 2,
  },
  {
    title: "Fedora Furfelt - Stetson",
    price: "1.099,00 kr",
    img: "https://dummyimage.com/600x600/000/fff.jpg",
    id: 3,
  },
  {
    title: "Fedora Furfelt - Stetson",
    price: "1.099,00 kr",
    img: "https://dummyimage.com/600x600/000/fff.jpg",
    id: 4,
  },
  {
    title: "Fedora Furfelt - Stetson",
    price: "1.099,00 kr",
    img: "https://dummyimage.com/600x600/000/fff.jpg",
    id: 5,
  },
  {
    title: "Fedora Furfelt - Stetson",
    price: "1.099,00 kr",
    img: "https://dummyimage.com/600x600/000/fff.jpg",
    id: 6,
  },
  {
    title: "Fedora Furfelt - Stetson",
    price: "1.099,00 kr",
    img: "https://dummyimage.com/600x600/000/fff.jpg",
    id: 7,
  },
  {
    title: "Fedora Furfelt - Stetson",
    price: "1.099,00 kr",
    img: "https://dummyimage.com/600x600/000/fff.jpg",
    id: 8,
  },
]

const SaleSection = styled.div`
background: #292929;
padding-bottom: 25px;
padding-top: 25px;

@media ${device.tablet} {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media ${device.laptop} {
    margin-top: 125px;
    margin-bottom: 125px;
  }
`

const GiftSection = styled.div`
padding-bottom: 25px;
padding-top: 25px;

@media ${device.tablet} {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media ${device.laptop} {
    margin-top: 125px;
    margin-bottom: 125px;
  }
`

/* DUMMY DATA SKAL SLETTES OG ERSTATTES MED CONTENTFUL DATA */

export class ButiqueMainPage extends Component {
  state = {
    // True = butique, False = bar
    siteType: true,
  }

  render() {
    const MainContent = styled.div`
      max-width: 1000px;
      margin: 0 auto;
    `

    return (
      <Layout siteType={this.state.siteType}>
        <MainContent>
          <SplashImage img={img} />
          <TitleCTA title="The essential collection" cta="Shop Now" />
          <ProductTilesGrid products={products}/>
          <ImageBanner img={img} text="Some Promotion image and title for bar &amp; café fx. Social shopping drink menu" />
          <CategoryTilesGrid img={categoryImg} title="SHOP BY CATEGORY"/>
          <SaleSection>
          <ProductTilesSection products={products} title="Sale Sale Sale" cta="See all" />
          </SaleSection>
          <GiftSection>
          <ProductTilesSection products={products} title="Great grifts for any occassion" cta="See all" />
          </GiftSection>
        </MainContent>
      </Layout>
    )
  }
}

export default ButiqueMainPage
