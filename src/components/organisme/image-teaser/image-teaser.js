import React from "react"
import styled from "styled-components"

const ImageTeaser = props => {
  const ImageTeaserWrapper = styled.div`
    background-image: url(${props.imageUrl});
    max-width: 1024px;
    height: 400px;
    background-repeat: no-repeat;
    background-size: 100%;
    margin: 0 auto;
  `

  return <ImageTeaserWrapper imageUrl={props.imageUrl}></ImageTeaserWrapper>
}

export default ImageTeaser
