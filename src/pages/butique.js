import Layout from "../components/layout/layout"
import styled from "styled-components"

import React, { useState } from "react"
import { device } from "../styles/global-js/breakpoints"

import SplashImage from "../components/atoms/splashImage/splashImage"
import TitleCTA from "../components/atoms/TitleCTA/TitleCTA"
import ImageBanner from "../components/molecules/imageBanner/imageBanner"
import ProductTilesGrid from "../components/organisme/product-tiles-grid/product-tiles-grid"
import CategoryTilesGrid from "../components/molecules/category-tiles-grid/category-tiles-grid"
import ProductTilesSection from "../components/organisme/product-tiles-section/product-tiles-section"
import { StaticQuery, graphql } from "gatsby"

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

/* DUMMY DATA SKAL SLETTES OG ERSTATTES MED CONTENTFUL DATA */

const MainContent = styled.div`
max-width: 1000px;
margin: 0 auto;
`

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

export default props => (
  <StaticQuery 
  query={
    graphql`
    query {
      allContentfulProducts(sort: { fields: title, order: DESC }) {
        edges {
          node {
            title
            price
            img {
              resize(width: 300, height: 300) {
                src
              }
            }
            id
            slug
          }
        }
      }
    }
    `}
    render={data => <ButiqueMainPage data={data} {...props}  />}
    />
)

const ButiqueMainPage = ({ data }) => {
  // state = {
  //   // True = butique, False = bar
  //   siteType: true,
  // }
  const products2 = data.allContentfulProducts.edges;
  console.log(products2);

  const test = products2.map( e => {
    return e.node.img[0].resize.src
  })
console.log(test);
  const [siteType, setSiteType] = useState(true);

    return (
      <Layout siteType={siteType}>
        <MainContent>
          <SplashImage img={img} />
          <TitleCTA title="The essential collection" cta="Shop Now" />
          <ProductTilesGrid products={products2}/>
          <ImageBanner img={img} text="Some Promotion image and title for bar &amp; café fx. Social shopping drink menu" />
          <CategoryTilesGrid img={categoryImg} title="SHOP BY CATEGORY"/>
          <SaleSection>
          <ProductTilesSection products={products2} title="Sale Sale Sale" cta="See all" />
          </SaleSection>
          <GiftSection>
          <ProductTilesSection products={products2} title="Great grifts for any occassion" cta="See all" />
          </GiftSection>
        </MainContent>
      </Layout>
    )
  }

