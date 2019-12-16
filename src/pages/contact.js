import React from "react"
import Layout from "../components/layout/layout"
import { colors } from "../styles/global-js/colors"
import { device } from "../styles/global-js/breakpoints"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import ImageGallery from "../components/organisme/image-gallery/image-gallery"
import BarHero from "../components/molecules/bar-hero/bar-hero"
import DecorationImg from "../../static/icons/decoration-contact.svg"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulContactPage {
        address {
          json
        }
      }
      contentfulContactPage {
        email {
          json
        }
      }
      contentfulContactPage {
        phone {
          json
        }
      }
      contentfulContactPage {
        body {
          json
        }
      }
      allContentfulAsset(filter: { title: { eq: "Front store" } }) {
        edges {
          node {
            resize(width: 600, height: 600) {
              src
            }
          }
        }
      }
    }
  `)

  const Wrapper = styled.div`
    max-width: 1024px;
    margin: 0px auto;

    padding: 25px;

    @media ${device.laptop} {
      padding: 100px 0px;
      margin: 0px auto 50px auto;
    }
  `
  const Container = styled.div`
    width: 100%;
    background: transparent;

    @media ${device.tablet} {
      background: #232521;
    }

    @media ${device.laptop} {
      background: #232521;
    }
  `
  const EmailText = styled.div`
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
    grid-area: email;

    p {
      letter-spacing: 0.3px;
      color: ${colors.grey};
      font-size: 0.8rem;

      @media ${device.tablet} {
        font-size: 0.8rem;
      }

      @media ${device.laptop} {
        font-size: 1rem;
      }
    }
    h4 {
      width: 100%;
      color: ${colors.gold};
      font-size: 1.1rem;
      margin-bottom: 0;

      @media ${device.tablet} {
        font-size: 0.8rem;
        margin: 0;
      }
      @media ${device.laptop} {
        font-size: 1rem;
      }
    }
  `

  const AddressText = styled.div`
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
    grid-area: address;

    p {
      letter-spacing: 0.3px;
      color: ${colors.grey};
      font-size: 0.8rem;

      @media ${device.tablet} {
        font-size: 0.8rem;
        margin: 0;
      }

      @media ${device.laptop} {
        font-size: 1rem;
        margin-bottom: 5px;
      }
    }
    h4 {
      width: 100%;
      color: ${colors.gold};
      font-size: 1.1rem;
      margin-bottom: 0;

      @media ${device.tablet} {
        font-size: 0.8rem;
        margin: 0;
      }
      @media ${device.laptop} {
        font-size: 1rem;
        margin-bottom: 10px;
      }
    }
  `

  const PhoneText = styled.div`
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
    grid-area: phone;

    p {
      letter-spacing: 0.3px;
      color: ${colors.grey};
      font-size: 0.8rem;

      @media ${device.tablet} {
        font-size: 0.8rem;
      }

      @media ${device.laptop} {
        font-size: 1rem;
      }
    }
    h4 {
      width: 100%;
      color: ${colors.gold};
      font-size: 1.1rem;
      margin-bottom: 0;
      margin-top: 0;

      @media ${device.tablet} {
        font-size: 0.8rem;
        margin: 0;
      }
      @media ${device.laptop} {
        font-size: 1rem;
      }
    }
  `

  const Description = styled.div`
    max-width: 800px;
    margin: 0 auto;
    width: 100%;

    p {
      letter-spacing: 0.3px;
      color: ${colors.grey};
      font-size: 1rem;

      @media ${device.tablet} {
        font-size: 0.8rem;
      }

      @media ${device.laptop} {
        font-size: 1rem;
        margin-bottom: 75px;
      }
    }
    h4 {
      width: 100%;
      color: ${colors.gold};
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0;

      @media ${device.tablet} {
        margin-top: 0;
      }
      @media ${device.laptop} {
        font-size: 1.5rem;
        margin-top: 15px;
      }
    }
  `
  const TextContainer = styled.div`
    width: 100%;
    padding: 10px;
  `

  const TextContactCon = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "address email"
      "address phone";
  `

  const ContactCon = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
      flex-direction: row;
    }

    @media ${device.laptop} {
      flex-direction: row;
    }
  `

  const Image = styled.img`
    width: 300px;
    height: 300px;
    margin: 0 auto;
    padding-top: 15px;

    @media ${device.tablet} {
      width: 350px;
      height: 350px;
      padding-top: 0;
    }

    @media ${device.laptop} {
      width: 500px;
      height: 500px;
      padding-top: 0;
    }
  `
  const DecorationCon = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 25px;
  `

  const Frontimage = data.allContentfulAsset.edges[0].node.resize.src

  return (
    <Layout siteType={true}>
      <BarHero color={colors.dark}></BarHero>
      <Wrapper>
        <Container>
          <ContactCon>
            <TextContainer>
              <Description>
                {documentToReactComponents(
                  data.contentfulContactPage.body.json
                )}
              </Description>
              <TextContactCon>
                <AddressText>
                  {documentToReactComponents(
                    data.contentfulContactPage.address.json
                  )}
                </AddressText>
                <EmailText>
                  {documentToReactComponents(
                    data.contentfulContactPage.email.json
                  )}
                </EmailText>
                <PhoneText>
                  {documentToReactComponents(
                    data.contentfulContactPage.phone.json
                  )}
                </PhoneText>
              </TextContactCon>
              <DecorationCon>
                <img src={DecorationImg} />
              </DecorationCon>
            </TextContainer>
            <Image src={Frontimage}></Image>
          </ContactCon>
          <ImageGallery></ImageGallery>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default AboutPage
