import React from "react"
import BarHero from "./bar-hero"
import { colors } from "../../../styles/global-js/colors"

export default {
  component: BarHero,
  title: "Components|Molecules/Bar-Hero",
}

export const Primeary = () => <BarHero color={colors.red}></BarHero>
