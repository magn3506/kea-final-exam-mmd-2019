import Layout from "../components/layout/layout"
import styled from "styled-components"
import BarHero from "../components/molecules/bar-hero/bar-hero"
import React, { Component } from "react"
import { colors } from "../styles/global-js/colors"
import UnderlineSVG from "../components/atoms/icons/underline/underlineSVG"
import ButtonBar from "../components/atoms/button-bar/button-bar"
export class BarMainPage extends Component {
  state = {
    // True = butique, False = bar
    siteType: false,
  }

  render() {
    const TitleCon = styled.div`
      margin-top: -40px;
    `

    const BarTitle = styled.h1`
      color: ${colors.gold};
      font-size: 20px;
      width: 200px;
      margin: 0 auto;
      text-align: center;
      text-transform: uppercase;
      font-weight: 300;
      letter-spacing: 1px;
    `

    const UnderlingSVGCon = styled.div`
      width: 250px;
      margin: 10px auto;
      svg {
        width: 100%;
      }
    `
    const IntroText = styled.p`
      max-width: 800px;
      padding: 25px;
      margin: 0 auto;
      color: ${colors.grey};
      font-size: 14px;
      line-height: 1.4rem;
    `

    return (
      <Layout siteType={this.state.siteType}>
        <div>
          <BarHero></BarHero>
          <TitleCon>
            <BarTitle>Bar & Café</BarTitle>
            <UnderlingSVGCon>
              <UnderlineSVG></UnderlineSVG>
            </UnderlingSVGCon>
          </TitleCon>
          <IntroText>
            The best taco bowls are made in Trump Tower Grill. I love Hispanics!
            This placeholder text is gonna be HUGE. You could see there was text
            coming out of her eyes, text coming out of her wherever. You’re
            disgusting. Be careful, or I will spill the beans on your
            placeholder text. I'm speaking with myself, number one, because I
            have a very good brain and I've said a lot of things. Lorem Ipsum
            better hope that there are no "tapes" of our conversations before he
            starts leaking to the press! I think the only card she has is the
            Lorem card. Lorem Ipsum's father was with Lee Harvey Oswald prior to
            Oswald's being, you know, shot. nice."
            <ButtonBar linkTo="/drinks-menu">Drinks Menu</ButtonBar>
          </IntroText>
        </div>
      </Layout>
    )
  }
}

export default BarMainPage
