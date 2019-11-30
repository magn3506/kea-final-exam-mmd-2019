import Layout from "../components/layout/layout"
import styled from "styled-components"
import EventList from "../components/organisme/eventList/eventList"
import React, { Component } from "react"
import { colors } from "../styles/global-js/colors"
import { device } from "../styles/global-js/breakpoints"

export class EventsPage extends Component {
  state = {
    // True = butique, False = bar
    siteType: false,
  }
  render() {
    const Wrapper = styled.div`
      margin: 50px 0px;
      @media ${device.laptop} {
        margin: 100px auto;
      }
    `

    const TextContainer = styled.div`
      max-width: 1024px;
      margin: 50px auto;
      padding: 25px;
      @media ${device.laptop} {
        padding: 0px;
        margin: 100px auto;
      }
    `
    const Title = styled.h1`
      color: ${colors.gold};
      text-transform: uppercase;
    `
    const Text = styled.p`
      color: ${colors.grey};
    `

    return (
      <Layout siteType={this.state.siteType}>
        <Wrapper>
          <TextContainer>
            <Title>Join Us</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              cupiditate alias corporis sequi. Accusantium iste molestiae nisi
              quasi. Numquam consequuntur dignissimos debitis quibusdam
              blanditiis est perspiciatis maxime quos ipsa quaerat.
            </Text>
          </TextContainer>
          <EventList></EventList>
        </Wrapper>
      </Layout>
    )
  }
}

export default EventsPage
