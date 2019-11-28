import React from "react"
import styled from "styled-components"
import { device } from "../../../styles/global-js/breakpoints"

const ImageTeaser = props => {
  const ImageTeaserWrapper = styled.div`
    background-image: url(${props.imageUrl});
    max-width: 1024px;
    height: 200px;
    background-repeat: no-repeat;
    background-size: 100%;
    margin: 0 auto;

    @media ${device.tablet} {
      height: 300px;
    }
    @media ${device.laptop} {
      height: 400px;
    }
  `

  return <ImageTeaserWrapper imageUrl={props.imageUrl}></ImageTeaserWrapper>
}

export default ImageTeaser
