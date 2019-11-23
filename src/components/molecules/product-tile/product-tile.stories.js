import React from "react"
import ProductTile from "./product-tile"

export default {
  component: ProductTile,
  title: "Components|Molecules/Product-tile",
}

const title = "Fedora Furfelt - Stetson"
const price = "1.099,00 kr"
const img = "https://dummyimage.com/600x600/000/fff.jpg"

export const productTile = () => <ProductTile title={title} price={price} img={img} />