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
              date(formatString: "DD MMM HH:MM")
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
    margin: 0 auto;
    max-width: 1024px;
    padding: 5px 0px;
    background: ${colors.redGrade};
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
      flex-direction: row;
    }
  `
  return (
    <EventListWrapper>
      {data.allContentfulEvents.edges.map(e => {
        return <EventItem data={e.node}></EventItem>
      })}
    </EventListWrapper>
  )
}
