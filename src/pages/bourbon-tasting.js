import React from "react"
import styled from "styled-components"
import { colors } from "../styles/global-js/colors"
import Layout from "../components/layout/layout"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import VideoPromo from "../components/organisme/videoPromo/videoPromo"

const BourbonTasting = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulBourbonTasting {
        promoVideoUrl {
          fixed {
            src
          }
        }
        body {
          json
        }
      }
    }
  `)

  const Wrapper = styled.div`
    max-width: 1024px;
    margin: 10px auto;
  `
  const Container = styled.div`
    background: ${colors.red};
    width: 100%;
  `
  const BodyText = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 100px 20px;
    width: 100%;
    color: ${colors.grey};
    b {
      color: ${colors.gold};
    }
    p {
      letter-spacing: 1px;
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
    <Layout siteType={false}>
      <Wrapper>
        <Container>
          <BodyText>
            {documentToReactComponents(data.contentfulBourbonTasting.body.json)}
          </BodyText>
        </Container>
      </Wrapper>
      <VideoPromo></VideoPromo>
    </Layout>
  )
}

export default BourbonTasting
