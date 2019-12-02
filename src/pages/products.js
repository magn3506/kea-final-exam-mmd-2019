import React, { Component } from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

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
     sort : sortProp,
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

    // STYLED

    const FilterSearchSortContainer = styled.div``

    const FilterTitle = styled.div`
      cursor: pointer;
      &:hover {
        color: red;
      }
    `
    const FilterList = styled.ul`
      cursor: pointer;
      li:hover {
        color: blue;
      }
    `

    const SortTitle = styled.div``
    const SortList = styled.ul``

    return (
      <Layout siteType={true}>
        <h1>products page</h1>
        <FilterSearchSortContainer>
          <div>Search field</div>
          <div>
            <div>
              <FilterTitle onClick={this.handleOpenFilter}>
                Filter: {this.state.filter}
              </FilterTitle>
              {this.state.openFilter && (
                <FilterList>
                  <li onClick={() => this.handleSetFilter("all")}>All</li>
                  <li onClick={() => this.handleSetFilter("hats")}>Hats</li>
                  <li onClick={() => this.handleSetFilter("boots")}>Boots</li>
                </FilterList>
              )}
            </div>
            <div>
              <SortTitle onClick={this.handleOpenSort}>
                Sort by {this.state.sort}
              </SortTitle>
              {this.state.openSort && (
                <SortList>
                  <li onClick={() => this.handleSetSort("lowToHigh")}>
                    Low To High
                  </li>
                  <li onClick={() => this.handleSetSort("highToLow")}>
                    High To Low
                  </li>
                </SortList>
              )}
            </div>
          </div>
        </FilterSearchSortContainer>

        {products.map(e => {
          return (
            <div>
              <ul>
                <li>{e.node.title}</li>
                <li>{e.node.collection}</li>
                <li>{e.node.price}</li>
              </ul>
            </div>
          )
        })}
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
