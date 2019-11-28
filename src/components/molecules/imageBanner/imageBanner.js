import React from "react"
import styled from "styled-components"

import DecorationImg from "../../../../static/icons/decoration-under-text.svg"
import { device } from "../../../styles/global-js/breakpoints"

const Wrapper = styled.div`
width: 100%;
position: relative;
display: flex;
justify-content: center;
align-items: center;

@media ${device.tablet} {
    justify-content: left;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media ${device.laptop} {
    justify-content: left;
    margin-top: 125px;
    margin-bottom: 125px;
  }
`

const Banner = styled.img`
width: 100%;
height: 300px;
object-fit: cover;
`
const Text = styled.h3`
width: 350px;
color: white;
position: absolute;
text-align: center;
margin: 0;
display: flex;
flex-direction: column;
align-items: center;
font-size: 0.9rem;

@media ${device.tablet} {
    width: 400px;
    margin-left: 5%;
    font-size: 1rem;
  }

  @media ${device.laptop} {
    width: 400px;
    margin-left: 10%;
    font-size: 1rem;
  }

&::after {
    content: url(${DecorationImg});
    width: 150px;
}
`

const ImageBanner = props => {
    return (
        <Wrapper>
            <Text>{props.text}</Text>
            <Banner src={props.img} />
        </Wrapper>
    )
}

export default ImageBanner