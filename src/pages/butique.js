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
      allContentfulCollectionTeaser {
        edges {
          node {
            title
            collectionImage {
              resize(width: 300, height: 300) {
                src
              }
            }
            filter
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
  const products = data.allContentfulProducts.edges;
  const collections = data.allContentfulCollectionTeaser.edges;
  console.log(collections);

  const [siteType, setSiteType] = useState(true);

    return (
      <Layout siteType={siteType}>
        <MainContent>
          <SplashImage img={img} />
          <TitleCTA title="The essential collection" cta="Shop Now" />
          <ProductTilesGrid products={products}/>
          <ImageBanner img={"https://p2d7x8x2.stackpathcdn.com/wordpress/wp-content/uploads/2017/01/old-fashioned-1024x684.jpg"} text="Some Promotion image and title for bar &amp; café fx. Social shopping drink menu" />
          <CategoryTilesGrid collections={collections} title="SHOP BY CATEGORY"/>
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

