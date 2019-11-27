import React, { Component } from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"

const ProductsPage = ({ location }) => {
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
        {location.state && location.state.filter ? (
          <p>{location.state.filter}</p>
        ) : (
          <p>no product added</p>
        )}
      </MainContentTestRemoveMe>
    </Layout>
  )
}
export default ProductsPage
