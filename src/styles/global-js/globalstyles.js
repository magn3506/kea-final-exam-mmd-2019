import { createGlobalStyle } from "styled-components"
import { colors } from "../global-js/colors"
import { device } from "./breakpoints"

export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Merriweather:400,700,900|Roboto+Slab:400,700&display=swap');

 body{
    font-family: 'Merriweather', serif;
    padding: 0;
    margin: 0;
    background: ${props =>
      props.siteType ? colors.boutiqueBody : colors.barBody};

 }


.swiper-container	{
  z-index: -5 !important;
}
    /* REmoves Scroll bar  */
 ::-webkit-scrollbar {
 display: none;
}


  

 * {
     box-sizing: border-box;
 }
 
 h1,h2,h3,h4{
        font-family: 'Merriweather', serif;
        font-weight: 400;
        font-size: 20px;
        letter-spacing: 1px;
        @media ${device.tablet} {
        font-size: 30px;
      }
      @media ${device.laptop} {
        font-size: 40px;
        width: 300px;
      }
    }

    p{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    line-height: 1.4rem;
    @media ${device.tablet} {
        font-size: 18px;
        line-height: 1.8rem;
        letter-spacing: 2px;
      }
      @media ${device.laptop} {
        font-size: 20px;
        line-height: 1.9rem;
        letter-spacing: 2px;
      }
    }
    button, a{
        font-family: 'Roboto Slab', serif;

    }

    a{
        text-decoration: none;
        

    }
    li{
        list-style: none;
      
    }
`
