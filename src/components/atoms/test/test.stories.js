import React from "react"
import Test from "./test"

export default {
  component: Test,
  title: "Components|Atoms/Test",
}

const stub = ["list 1", "list 2", "list 3"]
const stub2 = ["fisk", "kat", "hund", "ulv", "hjort"]

export const firstTest = () => <Test title='Test_1' data={stub} />
export const secondTest = () => <Test title='Test_2' data={stub2} />
