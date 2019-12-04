import React, { Component } from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import ProductGallery from "../components/organisme/product-gallery/product-gallery"
import FilterSearchSortContainer from "../components/molecules/filterSearchSort/filterSearchSort"
import { device } from "../styles/global-js/breakpoints"
import { colors } from "../styles/global-js/colors"
import { irBlack } from "react-syntax-highlighter/dist/styles/hljs"

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulProducts {
          edges {
            node {
              title
              collection
              price
              slug
              id
              img {
                resize(width: 200, height: 200) {
                  src
                }
              }
            }
          }
        }

        contentfulProductsHeroImage {
          image {
            fluid {
              src
            }
          }
        }
      }
    `}
    render={data => <ProductsPage data={data} {...props} />}
  />
)

class ProductsPage extends Component {
  state = {
    filter: "all",
    openFilter: false,
    sort: "lowToHigh",
    openSort: false,
  }

  handleOpenFilter = () => {
    this.setState({ openFilter: !this.state.openFilter })
  }
  handleOpenSort = () => {
    this.setState({ openSort: !this.state.openSort })
  }
  handleSetFilter = filterProp => {
    this.setState({
      filter: filterProp,
      openFilter: !this.state.openFilter,
    })
  }

  handleSetSort = sortProp => {
    this.setState({
      sort: sortProp,
      openSort: !this.state.openSort,
    })
  }

  render() {
    const { location } = this.props
    const data = this.props.data

    let productsArr = data.allContentfulProducts.edges

    let products

    // FILTER
    if (this.state.filter == "all") {
      products = productsArr
    } else {
      let filter = this.state.filter
      products = productsArr.filter(function(e) {
        return e.node.collection.toLowerCase() == filter
      })
    }

    // SORTING LOW-Price TO HIGH-Price

    if (this.state.sort === "lowToHigh") {
      products = products.sort(function(a, b) {
        let A = parseFloat(a.node.price.replace(",", "").replace(".", ""))
        let B = parseFloat(b.node.price.replace(",", "").replace(".", ""))
        return A - B
      })
    } else if (this.state.sort === "highToLow") {
      products = products.sort(function(a, b) {
        let A = parseFloat(a.node.price.replace(",", "").replace(".", ""))
        let B = parseFloat(b.node.price.replace(",", "").replace(".", ""))
        return B - A
      })
    }

    console.log(products)

    // STYLED

    const ProductGalleryContainer = styled.div`
      max-width: 1024px;
      margin: 0 auto;
    `
    const SpacerModule = styled.div`
      max-width: 1024px;
      margin: 0 auto;
      height: 50px;
    `

    const HeroImage = data.contentfulProductsHeroImage.image.fluid.src
    const ProductPageHero = styled.div`
      max-width: 1024px;
      margin: 0px auto 50px auto;
      height: 150px;
      background: black;
      display: flex;
      color: white;
      background-image: url(${HeroImage});
      background-size: 110%;
      background-position: 0px;
      position: relative;
      background-repeat: no-repeat;
      z-index: -1;
      ::after {
        content: " ";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: ${colors.gold};
        opacity: 0.2;
        z-index: -1;
      }
      @media ${device.laptop} {
        height: 200px;
      }
    `

    const Title = styled.h1`
      text-transform: uppercase;
      margin: 50px auto;
      text-align: center;
      font-size: 30px;
      background-color: black;
      position: relative;
      z-index: 0;
      width: 100%;
      font-weight: 900;
      letter-spacing: 3px;
      display: flex;
      align-self: center;
      justify-content: center;
      padding: 10px;
      color: ${colors.gold};
      @media ${device.laptop} {
        font-size: 40px;
        margin: 75px auto;
      }
    `

    return (
      <Layout siteType={true}>
        <ProductPageHero>
          <Title> Products</Title>
        </ProductPageHero>
        <FilterSearchSortContainer
          handleOpenFilter={this.handleOpenFilter}
          handleOpenSort={this.handleOpenSort}
          handleSetFilter={this.handleSetFilter}
          handleSetSort={this.handleSetSort}
          openFilter={this.state.openFilter}
          openSort={this.state.openSort}
          filter={this.state.filter}
          sort={this.state.sort}
        />
        <ProductGalleryContainer>
          <SpacerModule />

          <ProductGallery products={products}></ProductGallery>
        </ProductGalleryContainer>
      </Layout>
    )
  }
}

{
  /* <h1>Products Page</h1>
{location.state && location.state.filter ? (
  <p>{location.state.filter}</p>
) : (
  <p>no product added</p>
)} */
}
