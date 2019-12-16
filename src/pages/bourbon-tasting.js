import React from "react"
import styled from "styled-components"
import { colors } from "../styles/global-js/colors"
import Layout from "../components/layout/layout"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import EventList from "../components/organisme/eventList/eventList"
import { device } from "../styles/global-js/breakpoints"

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
        zach {
          json
        }
        zachImg {
          resize(width: 400, height: 400) {
            src
          }
        }
        comstumTasting {
          json
        }
        imgPromo {
          resize(width: 1024, height: 1024) {
            src
          }
        }
      }
    }
  `)

  const Wrapper = styled.div`
    max-width: 1024px;
    margin: 0 auto;

    h1,
    h2,
    h3 {
      font-size: 26px;
      text-transform: uppercase;
    }
    p {
      font-size: 16px;
    }

    @media ${device.tablet} {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      grid-gap: 10px;
      margin: 50px auto;
    }
    @media ${device.tablet} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
      margin: 50px auto;
    }
  `
  const BourbonTastingWrapper = styled.div`
    background: ${colors.redGrade};
  `
  const Mainbody = styled.div`
    padding: 25px;

    h3 {
      color: ${colors.gold};
      width: 100%;
    }
    p {
      color: ${colors.grey};
    }
    a {
      color: ${colors.gold};
      text-decoration: underline;
      cursor: pointer;
    }
  `

  const CommingEventsContainer = styled.div`
    width: 100%;
  `
  const ComEventTitle = styled.h3`
    color: ${colors.gold};
    padding: 25px;

    width: 100%;
  `
  const ComEventListCon = styled.div`
    width: 100%;
    background: ${colors.red};

    h2 {
      display: none;
    }

    div {
      padding: 0px;
      @media ${device.tablet} {
        grid-template-columns: 1fr;
      }
    }
  `

  const LeftCol = styled.div`
    @media ${device.tablet} {
      display: grid;
    }
  `
  const RightCol = styled.div`
    @media ${device.tablet} {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 400px 1fr;
      grid-gap: 10px;
    }
    @media ${device.laptop} {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 400px 0.5fr;
      grid-gap: 10px;
    }
  `

  const ZachContainer = styled.div`
    background: ${colors.redGrade};
  `
  const ImgCon = styled.div`
    width: 100%;

    img {
      width: 100%;
    }
  `
  const ZachText = styled.div`
    padding: 25px;

    h3 {
      color: ${colors.gold};
    }
    p {
      color: ${colors.grey};
    }
  `

  const VideoContainer = styled.div`
    width: 100%;
    height: 200px;
    @media ${device.tablet} {
      height: 400px;
    }
    iframe {
      width: 100%;
      height: inherit;
    }
  `

  const CostumTastingContainer = styled.div`
    background: ${colors.redGrade};
  `
  const CostumText = styled.div`
    padding: 25px;
    h3 {
      color: ${colors.gold};
    }
    p {
      color: ${colors.grey};
    }
  `

  const ImageBannerWrapper = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    
  `


  
  return (
    <Layout siteType={false}>
      <Wrapper>
        <LeftCol>
          <BourbonTastingWrapper>
            <Mainbody>
              {documentToReactComponents(
                data.contentfulBourbonTasting.body.json
              )}
            </Mainbody>
            <CommingEventsContainer>
              <ComEventListCon>
                <ComEventTitle>Comming Events</ComEventTitle>
                <EventList></EventList>
              </ComEventListCon>
            </CommingEventsContainer>
          </BourbonTastingWrapper>
        </LeftCol>

        <RightCol>
          <ZachContainer>
            <ImgCon>
              <img
                src={data.contentfulBourbonTasting.zachImg.resize.src}
                alt="image"
              />
            </ImgCon>
            <ZachText>
              {documentToReactComponents(
                data.contentfulBourbonTasting.zach.json
              )}
            </ZachText>
          </ZachContainer>
          <VideoContainer>
            <iframe
              title="Video of bourbon tasting"
              src="https://www.youtube.com/embed/M99vPoW2v6g"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </VideoContainer>
          <CostumTastingContainer>
            <CostumText>
              {documentToReactComponents(
                data.contentfulBourbonTasting.comstumTasting.json
              )}
            </CostumText>
          </CostumTastingContainer>
        </RightCol>
      </Wrapper>
      <ImageBannerWrapper>
      
      </ImageBannerWrapper>
    </Layout>
  )
}

export default BourbonTasting

{
  /* <BodyText>
{documentToReactComponents(data.contentfulBourbonTasting.body.json)}
</BodyText> */
}
