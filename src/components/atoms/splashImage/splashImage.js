import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
position: relative;
`
const Splash = styled.img`
width: 100%;
height: 350px;
object-fit: cover;
`

const Overlay = styled.div`
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.2);
position: absolute;
transition: .3s;

`

const SplashImage = props => {
    return (
        <Wrapper>
            <Overlay />
            <Splash src={props.img} />
        </Wrapper>
    )
}

export default SplashImage