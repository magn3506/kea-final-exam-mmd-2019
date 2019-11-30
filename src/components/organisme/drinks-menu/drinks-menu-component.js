import styled from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import { device } from "../../../styles/global-js/breakpoints"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const DrinkMenuComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDrinksMenu {
        edges {
          node {
            title
            drinkType
            price
            description {
              description
            }
          }
        }
      }
    }
  `)

  let CoffeeArr = []
  let BourbonArr = []
  let CocktailsArr = []
  let CiderArr = []
  let WineArr = []
  let BeerArr = []

  const DataArr = data.allContentfulDrinksMenu.edges

  //MAPPING DATA BY KATAGORI

  DataArr.map(e => {
    if (e.node.drinkType === "coffee") {
      let obj = {
        title: e.node.title,
        drinkType: e.node.drinkType,
        price: e.node.price,
        description: e.node.description.description,
      }
      CoffeeArr.push(obj)
    } else if (e.node.drinkType === "bourbon") {
      let obj = {
        title: e.node.title,
        drinkType: e.node.drinkType,
        price: e.node.price,
        description: e.node.description.description,
      }
      BourbonArr.push(obj)
    } else if (e.node.drinkType === "wine") {
      let obj = {
        title: e.node.title,
        drinkType: e.node.drinkType,
        price: e.node.price,
        description: e.node.description.description,
      }
      WineArr.push(obj)
    } else if (e.node.drinkType === "cider") {
      let obj = {
        title: e.node.title,
        drinkType: e.node.drinkType,
        price: e.node.price,
        description: e.node.description.description,
      }
      CiderArr.push(obj)
    } else if (e.node.drinkType === "cocktail") {
      let obj = {
        title: e.node.title,
        drinkType: e.node.drinkType,
        price: e.node.price,
        description: e.node.description.description,
      }
      CocktailsArr.push(obj)
    } else if (e.node.drinkType === "beer") {
      let obj = {
        title: e.node.title,
        drinkType: e.node.drinkType,
        price: e.node.price,
        description: e.node.description.description,
      }
      BeerArr.push(obj)
    } else {
    }
  })

  console.log(CoffeeArr)
  console.log(BourbonArr)
  console.log(CocktailsArr)
  console.log(CiderArr)
  console.log(WineArr)

  const Wrapper = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    background-color: ${colors.grey};
    border: 10px solid #2e2b28;
  `

  const Title = styled.div`
    font-size: 3rem;
    width: 100%;
    border-bottom: 10px solid #2e2b28;
    text-align: center;
    padding: 20px 0px;
    background: ${colors.redGrade};
    color: ${colors.gold};
  `

  const Container = styled.div`
    max-width: 800px;
    margin: 50px auto;
  `
  const DrinkItemContainer = styled.div`
    padding: 10px;
  `

  const DrinkItem = styled.div`
    display: flex;

    border-bottom: dotted 1px black;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
  `

  const DrinkItemTitle = styled.div`
    text-transform: capitalize;

    font-family: "Roboto Slab", serif;
  `

  const ItemTitle = styled.div`
    text-transform: uppercase;
    font-size: 2rem;
    border-bottom: 5px solid ${colors.gold};
    padding: 10px;
    width: 100%;
  `

  return (
    <Wrapper>
      <Title>DRINKS MENU</Title>
      <Container>
        <DrinkItemContainer>
          <ItemTitle>Coffee</ItemTitle>
          {CoffeeArr.map(e => {
            return (
              <DrinkItem>
                <DrinkItemTitle>{e.title}</DrinkItemTitle>
                <div>{e.price} kr.</div>
              </DrinkItem>
            )
          })}
        </DrinkItemContainer>
        <DrinkItemContainer>
          <ItemTitle>Beer</ItemTitle>
          {BeerArr.map(e => {
            return (
              <DrinkItem>
                <DrinkItemTitle>{e.title}</DrinkItemTitle>
                <div>{e.price} kr.</div>
              </DrinkItem>
            )
          })}
        </DrinkItemContainer>
        <DrinkItemContainer>
          <ItemTitle>Wine</ItemTitle>
          {WineArr.map(e => {
            return (
              <DrinkItem>
                <DrinkItemTitle>{e.title}</DrinkItemTitle>
                <div>{e.price} kr.</div>
              </DrinkItem>
            )
          })}
        </DrinkItemContainer>
        <DrinkItemContainer>
          <ItemTitle>Cocktials</ItemTitle>
          {CocktailsArr.map(e => {
            return (
              <DrinkItem>
                <DrinkItemTitle>{e.title}</DrinkItemTitle>
                <div>{e.price} kr.</div>
              </DrinkItem>
            )
          })}
        </DrinkItemContainer>
        <DrinkItemContainer>
          <ItemTitle>Bourbon</ItemTitle>
          {BourbonArr.map(e => {
            return (
              <DrinkItem>
                <DrinkItemTitle>{e.title}</DrinkItemTitle>
                <div>{e.price} kr.</div>
              </DrinkItem>
            )
          })}
        </DrinkItemContainer>
      </Container>
    </Wrapper>
  )
}

export default DrinkMenuComponent
