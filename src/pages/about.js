import React from "react"
import Layout from "../components/layout/layout"
import { colors } from "../styles/global-js/colors"
import { device } from "../styles/global-js/breakpoints"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import ImageGallery from "../components/organisme/image-gallery/image-gallery"
const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAboutPage {
        body {
          json
        }
      }
    }
  `)

  const Wrapper = styled.div`
    max-width: 1024px;
    margin: 0px auto;
    background: ${colors.grey};
    padding: 25px;
    box-shadow: ${colors.NavBoxShadow};
    @media ${device.laptop} {
      padding: 100px 0px;
      margin: 0px auto 50px auto;
    }
  `
  const Container = styled.div`
    width: 100%;
  `
  const BodyText = styled.div`
    max-width: 800px;
    margin: 0 auto;
    width: 100%;

    p {
      letter-spacing: 0.3px;
    }
    h1,
    h2,
    h3,
    h4 {
      width: 100%;
      color: ${colors.gold};
    }
  `

  return (
    <Layout siteType={true}>
      <Wrapper>
        <Container>
          <BodyText>
            {documentToReactComponents(data.contentfulAboutPage.body.json)}
            <ImageGallery></ImageGallery>
          </BodyText>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default AboutPage
