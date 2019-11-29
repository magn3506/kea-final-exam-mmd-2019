import React from "react"
import SplashImage from "./splashImage"

export default {
  component: SplashImage,
  title: "Components|Atoms/splashImage",
}

const img = "https://dummyimage.com/1200x1000/000/fff.jpg"

export const splashImage = () => <SplashImage img={img}/>