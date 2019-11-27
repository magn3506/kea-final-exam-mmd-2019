import Layout from "../components/layout/layout"
import styled from "styled-components"

import React, { Component } from "react"

export class EventsPage extends Component {
  state = {
    // True = butique, False = bar
    siteType: false,
  }
  render() {
    const MainContentTestRemoveMe = styled.div`
      max-width: 1000px;
      margin: 0 auto;
      background: grey;
      height: 200vh;
      text-align: center;
      font-size: 2em;
      padding-top: 50px;
    `

    return (
      <Layout siteType={this.state.siteType}>
        <MainContentTestRemoveMe>
          <h1>Events Page</h1>
        </MainContentTestRemoveMe>
      </Layout>
    )
  }
}

export default EventsPage