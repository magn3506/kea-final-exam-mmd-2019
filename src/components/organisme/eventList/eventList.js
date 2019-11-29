import React from "react"
import EventItem from "./eventItem"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import { device } from "../../../styles/global-js/breakpoints"

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulEvents {
          edges {
            node {
              title
              slug
              shortDescription {
                shortDescription
              }
              time
              date(formatString: "DD MMM")
            }
          }
        }
      }
    `}
    render={data => <EventList data={data} {...props} />}
  />
)

const EventList = ({ data }) => {
  const EventListWrapper = styled.div`
    padding: 5px 0px;

    display: grid;
    width: 100%;
    @media ${device.tablet} {
      grid-template-columns: 1fr 1fr;
    }
  `

  const Event = styled.div`
    background: ${colors.redGrade};
    margin: 0 auto;
    max-width: 1024px;
    padding: 25px 0px 100px 0px;
  `
  const Title = styled.h2`
    margin: 0 auto;
    text-align: center;
    padding: 20px 0px;
    color: ${colors.gold};
  `

  return (
    <Event>
      <Title>Events</Title>
      <EventListWrapper>
        {data.allContentfulEvents.edges.map(e => {
          return <EventItem data={e.node}></EventItem>
        })}
      </EventListWrapper>
    </Event>
  )
}
