import Layout from "../components/layout/layout"
import styled from "styled-components"
import { colors } from "../styles/global-js/colors"

import React, { useState } from "react"
import { device } from "../styles/global-js/breakpoints"

import SplashImage from "../components/atoms/splashImage/splashImage"
import TitleCTA from "../components/atoms/TitleCTA/TitleCTA"
import ImageBanner from "../components/molecules/imageBanner/imageBanner"
import ProductTilesGrid from "../components/organisme/product-tiles-grid/product-tiles-grid"
import CategoryTilesGrid from "../components/molecules/category-tiles-grid/category-tiles-grid"
import ProductTilesSection from "../components/organisme/product-tiles-section/product-tiles-section"
import { StaticQuery, graphql } from "gatsby"

const MainContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

const EssentialsCollectionSection = styled.div`
  border-bottom: 1px solid ${colors.tan};
`

const SaleSection = styled.div`
  background: ${colors.greenGrade};
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
  background: ${colors.darkGrade};

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
    query={graphql`
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
        allContentfulAsset(filter: { title: { eq: "Hero Test" } }) {
          edges {
            node {
              resize(width: 1000, height: 750) {
                src
              }
            }
          }
        }
      }
    `}
    render={data => <ButiqueMainPage data={data} {...props} />}
  />
)

const ButiqueMainPage = ({ data }) => {
  // state = {
  //   // True = butique, False = bar
  //   siteType: true,
  // }
  const products = data.allContentfulProducts.edges
  const collections = data.allContentfulCollectionTeaser.edges
  const Heroimage = data.allContentfulAsset.edges[0].node.resize.src

  const [siteType, setSiteType] = useState(true)
  return (
    <Layout siteType={siteType}>
      <MainContent>
        <SplashImage img={Heroimage} />

        <EssentialsCollectionSection>
          <TitleCTA title="The essential collection" cta="Shop Now" />
          <ProductTilesGrid products={products} />
        </EssentialsCollectionSection>
        <ImageBanner
          img={
            "https://p2d7x8x2.stackpathcdn.com/wordpress/wp-content/uploads/2017/01/old-fashioned-1024x684.jpg"
          }
          text="Combining the best of two worlds, a clothing store and a cocktailbar &amp; café"
        />
        <CategoryTilesGrid collections={collections} title="SHOP BY CATEGORY" />
        <SaleSection>
          <ProductTilesSection
            products={products}
            title="Sale Sale Sale"
            cta="See all"
          />
        </SaleSection>
        <GiftSection>
          <ProductTilesSection
            products={products}
            title="Great grifts for any occassion"
            cta="See all"
          />
        </GiftSection>
      </MainContent>
    </Layout>
  )
}
