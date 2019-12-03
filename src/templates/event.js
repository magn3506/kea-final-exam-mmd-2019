import React from "react"
import styled from "styled-components"

import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import { colors } from "../styles/global-js/colors"
import { device } from "../styles/global-js/breakpoints"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    contentfulEvents(title: { eq: $slug }) {
      title
      time
      date(formatString: "DD MMM")
      fullDescription {
        json
      }
      eventImage {
        resize(width: 800) {
          src
        }
      }
    }
  }
`

const EventPost = props => {
  const { title, time, date, eventImage } = props.data.contentfulEvents

  console.log(typeof eventImage.resize.src)

  const SiteWrapper = styled.div`
    background: ${colors.red};
  `

  const SiteContainer = styled.div``

  const TextWrapper = styled.div`
    padding: 25px;
    max-width: 600px;
    margin: 0 auto;
    padding-bottom: 100px;
    @media (min-width: 600px) {
      padding-bottom: 150px;
    }
    @media ${device.laptop} {
      max-width: 800px;
      padding-bottom: 250px;
    }
  `
  const Title = styled.h2`
    color: ${colors.gold};
    width: 100%;
  `
  const Time = styled.div`
    color: ${colors.grey};
    font-family: "Roboto Slab", serif;
  `
  const Date = styled.div`
    color: ${colors.gold};
    font-size: 12px;
  `

  const Text = styled.p`
    color: ${colors.grey};
    font-size: 12px;
    letter-spacing: 1px;
  `

  const ImageMobileContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    @media (min-width: 600px) {
      display: none;
    }
  `
  const ImageMobile = styled.img`
    width: 100%;
  `
  const ImageTapletContainer = styled.div`
    max-width: 800px;
    padding: 25px;
    margin: 0 auto;
    display: none;
    position: relative;
    @media (min-width: 600px) {
      display: block;
    }
  `
  const ImageTaplet = styled.img`
    width: 550px;
    position: absolute;
    top: -100px;
    border: 5px solid ${colors.gold};
    border-radius: 10px;
    box-shadow: ${colors.NavBoxShadow};

    @media ${device.laptop} {
      width: 800px;
      top: -200px;
    }
  `

  const GreenSpacer = styled.div`
    display: none;
    @media (min-width: 600px) {
      background: ${colors.redGrade};
      width: 100%;
      height: 400px;
      display: block;
    }
    @media ${device.laptop} {
      height: 500px;
    }
  `

  return (
    <Layout siteType={false}>
      <SiteWrapper>
        <SiteContainer>
          <ImageMobileContainer>
            <ImageMobile src={eventImage.resize.src}></ImageMobile>
          </ImageMobileContainer>

          <TextWrapper>
            <Title>{title}</Title>
            <Time>{time}</Time>
            <Date>{date}</Date>
            <Text>
              {documentToReactComponents(
                props.data.contentfulEvents.fullDescription.json
              )}
            </Text>
          </TextWrapper>
          <ImageTapletContainer>
            <ImageTaplet src={eventImage.resize.src}></ImageTaplet>
          </ImageTapletContainer>
        </SiteContainer>
      </SiteWrapper>
      <GreenSpacer></GreenSpacer>
    </Layout>
  )
}

export default EventPost
