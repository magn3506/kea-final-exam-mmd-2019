import React, { Component } from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import ProductGallery from "../components/organisme/product-gallery/product-gallery"
import FilterSearchSortContainer from "../components/molecules/filterSearchSort/filterSearchSort"
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

  componentWillMount() {
    this.setState({
      filter: this.props.pageContext.filterBy,
    })
  }

  render() {
    const { location } = this.props
    const data = this.props.data

    console.log(this.props.pageContext.filterBy)

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

    const ProductPageHero = styled.div`
      max-width: 1024px;
      margin: 40px auto;
      height: 100px;
      background: black;
      display: flex;
      color: white;
      h1 {
        color: white;
        width: 100%;
        text-align: center;
        padding: 20px;
      }
    `

    return (
      <Layout siteType={true}>
        <ProductPageHero>
          <h1>
            Products Page
            {location.state && location.state.filter ? (
              <p>{location.state.filter}</p>
            ) : (
              <p>no product added</p>
            )}
          </h1>
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
