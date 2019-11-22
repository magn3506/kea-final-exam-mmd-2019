import React from "react"
import SiteTitle from "./siteTitle"

export default {
  component: SiteTitle,
  title: "Components|Molecules/Site-Title",
}

export const Butique = () => (
  <SiteTitle color='red' titleName='Butique'></SiteTitle>
)
export const BarAndCafe = () => (
  <SiteTitle color='red' titleName={`Bar & cafe`}></SiteTitle>
)
