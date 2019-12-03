import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../../../styles/global-js/colors"

const eventItem = props => {
  const { title, shortDescription, date, slug, time } = props.data

  const EventItemWrapper = styled.div`
    width: 100%;
    display: flex;

    a {
      border: 2px solid ${colors.gold};
      display: block;
      padding: 20px;
      margin: 20px;
      border-radius: 10px;
      box-sizing: border-box;
      background-color: #462d29;
      display: block;
      cursor: pointer;
    }
    a:hover {
      transform: scale(0.98);
      transition: 0.1s ease-in-out;
    }
  `
  const Title = styled.div`
    font-size: 16px;
    font-weight: 900;
    letter-spacing: 2px;
    color: ${colors.gold};
    margin-top: 10px;
  `

  const Description = styled.div`
    color: ${colors.grey};
    font-size: 12px;
    line-height: 1.2rem;
    margin-top: 10px;
    font-family: "Roboto Slab", serif;
  `
  const Date = styled.div`
    color: ${colors.grey};
    font-weight: 900;
    letter-spacing: 5px;
    border-bottom: 1px solid ${colors.gold};
    display: flex;
    justify-content: space-between;
  `
  return (
    <EventItemWrapper>
      <Link to={title}>
        <Date>
          <div>{date}</div>
          <div>{time}</div>
        </Date>
        <Title>{title}</Title>
        <Description>{shortDescription.shortDescription}</Description>
      </Link>
    </EventItemWrapper>
  )
}

export default eventItem
