import React from "react"
import ImageBanner from "./imageBanner"

export default {
  component: ImageBanner,
  title: "Components|Molecules/image banner",
}

const img = "https://dummyimage.com/1200x1000/000.jpg"

export const imageBanner = () => <ImageBanner img={img} text="Some Promotion image and title for bar &amp; café fx. Social shopping drink menu" />