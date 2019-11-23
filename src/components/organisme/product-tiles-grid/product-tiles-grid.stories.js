import React from "react"
import ProductTilesGrid from "./product-tiles-grid"

export default {
  component: ProductTilesGrid,
  title: "Components|Organisme/product-tiles-grid",
}

const products = [
    {
        title: "Fedora Furfelt - Stetson",
        price: "1.099,00 kr",
        img: "https://dummyimage.com/600x600/000/fff.jpg"
    },
    {
        title: "Fedora Furfelt - Stetson",
        price: "1.099,00 kr",
        img: "https://dummyimage.com/600x600/000/fff.jpg"
    },
    {
        title: "Fedora Furfelt - Stetson",
        price: "1.099,00 kr",
        img: "https://dummyimage.com/600x600/000/fff.jpg"
    },
    {
        title: "Fedora Furfelt - Stetson",
        price: "1.099,00 kr",
        img: "https://dummyimage.com/600x600/000/fff.jpg"
    },
    {
        title: "Fedora Furfelt - Stetson",
        price: "1.099,00 kr",
        img: "https://dummyimage.com/600x600/000/fff.jpg"
    },
    {
        title: "Fedora Furfelt - Stetson",
        price: "1.099,00 kr",
        img: "https://dummyimage.com/600x600/000/fff.jpg"
    },
    {
        title: "Fedora Furfelt - Stetson",
        price: "1.099,00 kr",
        img: "https://dummyimage.com/600x600/000/fff.jpg"
    },
    {
        title: "Fedora Furfelt - Stetson",
        price: "1.099,00 kr",
        img: "https://dummyimage.com/600x600/000/fff.jpg"
    },
]

export const productTile = () => <ProductTilesGrid products={products} />