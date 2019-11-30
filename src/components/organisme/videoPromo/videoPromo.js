import React from "react"
import styled from "styled-components"
import { device } from "../../../styles/global-js/breakpoints"
import { colors } from "../../../styles/global-js/colors"
import ButtonBar from "../../atoms/button-bar/button-bar"

const videoPromo = () => {
  const VideoPromoWrapper = styled.div`
    margin-bottom: 10px;
  `

  const VideoPromoContainer = styled.div`
    padding: 50px 20px;
    margin: 0 auto;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    background: ${colors.redGrade};

    @media ${device.tablet} {
      flex-direction: row;
      max-width: 1024px;
    }
  `
  const Title = styled.h2`
    color: ${colors.gold};
    text-transform: uppercase;
    font-size: 30px;

    width: 100%;
    display: block;
    margin-top: -0px;
  `
  const Text = styled.p`
    color: ${colors.grey};
    font-size: 16px;
  `

  const IframeCon = styled.div`
    iframe {
      width: 100%;
      height: 200px;
      border: 2px solid ${colors.gold};
      border-radius: 10px;
      @media ${device.tablet} {
        height: 300px;
      }
    }
  `

  const TextContainer = styled.div`
    width: 100%;

    @media ${device.tablet} {
      order: 2;
      width: 50%;
      padding: 25px;
    }
  `
  const VideoContainer = styled.div`
    width: 100%;
    padding: 50px 0px;

    @media ${device.tablet} {
      order: 1;
      display: flex;
      width: 50%;
      padding: 25px;
      flex-direction: column;
    }
  `

  return (
    <VideoPromoWrapper>
      <VideoPromoContainer>
        <TextContainer>
          <Title>Bourbon Tasting with Zach</Title>
          <Text>
            We want to take away that stressed and stiff feeling and calm things
            down a bit. At Hats, Boots & Bourbon you can get a drink, coffee or
            a beer in the bar.
          </Text>

          <ButtonBar linkTo="/bourbon-tasting">See More</ButtonBar>
        </TextContainer>
        <VideoContainer>
          <IframeCon>
            <iframe
              src="https://www.youtube.com/embed/5Peo-ivmupE"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </IframeCon>
        </VideoContainer>
      </VideoPromoContainer>
    </VideoPromoWrapper>
  )
}

export default videoPromo
