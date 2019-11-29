import React from "react"
import CategoryTile from "./category-tile"

export default {
    component: CategoryTile,
    title: "Components|Atoms/category-tile",
  }

  const img = "https://dummyimage.com/600x600/000.jpg"

export const categoryTile = () => <CategoryTile img={img} title="Hats" link="/products" />