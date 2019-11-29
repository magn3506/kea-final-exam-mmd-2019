import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
`
const Splash = styled.img`
width: 100%;
height: 350px;
object-fit: cover;
`

const SplashImage = props => {
    return (
        <Wrapper>
            <Splash src={props.img} />
        </Wrapper>
    )
}

export default SplashImage