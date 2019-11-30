import React, { Component } from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"


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
    render={data => <ProductsPage data={data} {...props}  />}
    />
)


const ProductsPage = ({ location, data }) => {
  const MainContentTestRemoveMe = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    background: grey;
    height: 200vh;
    text-align: center;
    font-size: 2em;
    padding-top: 50px;
  `
  console.log(data);

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
