import React from "react"
import ProductTilesSection from "./product-tiles-section"

export default {
  component: ProductTilesSection,
  title: "Components|Organisme/product-tiles-section",
}

const products = {
  edges: [
    {
      node: {
        title: "Winters Fedora Hat, Almond - Baileys",
        pricing: 149900,
        img: [
          {
            resize: {
              src:
                "//images.ctfassets.net/yyhkqa4jdoli/59DY9tB1bS1wsP0GV0T47g/70e80032d4319dc1f51dd8ede921aa71/size-s-.jpg?w=300&h=300&fl=progressive&q=50&fit=fill",
            },
          },
        ],
        id: "85092e4b-60e2-57f5-be8d-79eadb2f14b86",
        slug: "winters-fedora-hat",
      },
    },
    {
      node: {
        title: "Winters Fedora Hat, Almond - Baileys",
        pricing: 149900,
        img: [
          {
            resize: {
              src:
                "//images.ctfassets.net/yyhkqa4jdoli/59DY9tB1bS1wsP0GV0T47g/70e80032d4319dc1f51dd8ede921aa71/size-s-.jpg?w=300&h=300&fl=progressive&q=50&fit=fill",
            },
          },
        ],
        id: "85092e4b-60e2-57f5-be8d-79eadb2f14b85",
        slug: "winters-fedora-hat",
      },
    },
    {
      node: {
        title: "Winters Fedora Hat, Almond - Baileys",
        pricing: 149900,
        img: [
          {
            resize: {
              src:
                "//images.ctfassets.net/yyhkqa4jdoli/59DY9tB1bS1wsP0GV0T47g/70e80032d4319dc1f51dd8ede921aa71/size-s-.jpg?w=300&h=300&fl=progressive&q=50&fit=fill",
            },
          },
        ],
        id: "85092e4b-60e2-57f5-be8d-79eadb2f14b84",
        slug: "winters-fedora-hat",
      },
    },
    {
      node: {
        title: "Winters Fedora Hat, Almond - Baileys",
        pricing: 149900,
        img: [
          {
            resize: {
              src:
                "//images.ctfassets.net/yyhkqa4jdoli/59DY9tB1bS1wsP0GV0T47g/70e80032d4319dc1f51dd8ede921aa71/size-s-.jpg?w=300&h=300&fl=progressive&q=50&fit=fill",
            },
          },
        ],
        id: "85092e4b-60e2-57f5-be8d-79eadb2f14b83",
        slug: "winters-fedora-hat",
      },
    },
    {
      node: {
        title: "Winters Fedora Hat, Almond - Baileys",
        pricing: 149900,
        img: [
          {
            resize: {
              src:
                "//images.ctfassets.net/yyhkqa4jdoli/59DY9tB1bS1wsP0GV0T47g/70e80032d4319dc1f51dd8ede921aa71/size-s-.jpg?w=300&h=300&fl=progressive&q=50&fit=fill",
            },
          },
        ],
        id: "85092e4b-60e2-57f5-be8d-79eadb2f14b81",
        slug: "winters-fedora-hat",
      },
    },
    {
      node: {
        title: "Winters Fedora Hat, Almond - Baileys",
        pricing: 149900,
        img: [
          {
            resize: {
              src:
                "//images.ctfassets.net/yyhkqa4jdoli/59DY9tB1bS1wsP0GV0T47g/70e80032d4319dc1f51dd8ede921aa71/size-s-.jpg?w=300&h=300&fl=progressive&q=50&fit=fill",
            },
          },
        ],
        id: "85092e4b-60e2-57f5-be8d-79eadb2f14b82",
        slug: "winters-fedora-hat",
      },
    },
  ],
}

export const productTilesSection = () => (
  <ProductTilesSection
    products={products.edges}
    title="Sale Sale Sale"
    cta="See all"
  />
)
