import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import { device } from "../../../styles/global-js/breakpoints"

const ImageGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstagramContent(limit: 10) {
        edges {
          node {
            images {
              standard_resolution {
                url
              }
            }
          }
        }
      }
    }
  `)

  const ImageArr = data.allInstagramContent.edges

  const ImageGalleryWrapper = styled.div`
    /* background: ${colors.gold}; */
    max-width: 1024px;
    margin: 100px auto;
  `

  const Title = styled.h1`
    color: ${colors.gold};
    width: 100%;
    text-align: center;
  `

  const ImageGalleryContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    @media ${device.laptop} {
      padding: 50px;
    }

    img {
      width: 50%;
      /* margin-top: 20px; */
      margin: 0px auto;
      border: 10px solid transparent;
      transition: 0.001s ease-in-out;

      &:hover {
        transform: scale(1.05);
        transition: 0.2s ease-in-out;
        border: 2px solid black;
      }

      &:nth-child(5n) {
        width: 100%;
      }
      @media ${device.laptop} {
        &:hover {
          transform: scale(1.2);
          transition: 0.2s ease-in-out;
          border: 2px solid black;
        }
        margin: 0px auto;
        width: 33%;
        &:nth-child(4) {
          width: 50%;
        }
        &:nth-child(5) {
          width: 50%;
        }
        &:nth-child(9) {
          width: 50%;
        }
        &:nth-child(10) {
          width: 50%;
        }
      }
    }
  `

  const Image = styled.img``

  return (
    <ImageGalleryWrapper>
      <Title>Gallery</Title>
      <ImageGalleryContainer>
        {ImageArr.map(img => {
          return (
            <Image
              src={img.node.images.standard_resolution.url}
              alt="Image From Instagram"
            ></Image>
          )
        })}
      </ImageGalleryContainer>
    </ImageGalleryWrapper>
  )
}

export default ImageGallery
