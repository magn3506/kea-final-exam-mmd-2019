import React from "react"
import ProductTilesSection from "./product-tiles-section"

export default {
  component: ProductTilesSection,
  title: "Components|Organisme/product-tiles-section",
}


const products = [
    {
      title: "Fedora Furfelt - Stetson",
      price: "1.099,00 kr",
      img: "https://dummyimage.com/600x600/000/fff.jpg",
      id: 1,
    },
    {
      title: "Fedora Furfelt - Stetson",
      price: "1.099,00 kr",
      img: "https://dummyimage.com/600x600/000/fff.jpg",
      id: 2,
    },
    {
      title: "Fedora Furfelt - Stetson",
      price: "1.099,00 kr",
      img: "https://dummyimage.com/600x600/000/fff.jpg",
      id: 3,
    },
    {
      title: "Fedora Furfelt - Stetson",
      price: "1.099,00 kr",
      img: "https://dummyimage.com/600x600/000/fff.jpg",
      id: 4,
    },
    {
      title: "Fedora Furfelt - Stetson",
      price: "1.099,00 kr",
      img: "https://dummyimage.com/600x600/000/fff.jpg",
      id: 5,
    },
    {
      title: "Fedora Furfelt - Stetson",
      price: "1.099,00 kr",
      img: "https://dummyimage.com/600x600/000/fff.jpg",
      id: 6,
    },
    {
      title: "Fedora Furfelt - Stetson",
      price: "1.099,00 kr",
      img: "https://dummyimage.com/600x600/000/fff.jpg",
      id: 7,
    },
    {
      title: "Fedora Furfelt - Stetson",
      price: "1.099,00 kr",
      img: "https://dummyimage.com/600x600/000/fff.jpg",
      id: 8,
    },
  ]


  export const productTilesSection = () => <ProductTilesSection products={products} title="Sale Sale Sale" cta="See all" />