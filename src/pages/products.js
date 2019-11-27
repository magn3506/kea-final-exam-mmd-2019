import React, { Component } from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"

class ProductsPage extends Component {
  render() {
    const MainContentTestRemoveMe = styled.div`
      max-width: 1000px;
      margin: 0 auto;
      background: grey;
      height: 200vh;
      text-align: center;
      font-size: 2em;
      padding-top: 50px;
    `

    return (
      <Layout siteType={true}>
        <MainContentTestRemoveMe>
          <h1>Products Page</h1>
          {this.props.location.state.filter || undefined ? (
            <p>{this.props.location.state.filter}</p>
          ) : (
            <p>"No props"</p>
          )}
        </MainContentTestRemoveMe>
      </Layout>
    )
  }
}

export default ProductsPage
