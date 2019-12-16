import styled from "styled-components"
import { colors } from "../../../styles/global-js/colors"
import { graphql, useStaticQuery } from "gatsby"
import React, { useState, useCallback } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

const ImageGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstagramContent(limit: 4) {
        edges {
          node {
            images {
              standard_resolution {
                url
                width
                height
              }
            }
          }
        }
      }
    }
  `)

  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const ImageArr = data.allInstagramContent.edges

  let photos = []

  ImageArr.map(e => {
    let obj = {
      src: e.node.images.standard_resolution.url,
      width: e.node.images.standard_resolution.width,
      height: e.node.images.standard_resolution.height,
    }
    photos.push(obj)
  })

  const GalleryWrapper = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    background: ${colors.redGrade};
    padding: 25px;
  `
  const Title = styled.h3`
    text-align: left;
    padding: 0px;
    color: ${colors.gold};
  `

  return (
    <GalleryWrapper>
      <Title>Follow us on Instagram</Title>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </GalleryWrapper>
  )
}

export default ImageGallery
