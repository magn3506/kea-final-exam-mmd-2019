import { createGlobalStyle } from "styled-components"
import { colors } from "../global-js/colors"
export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Merriweather:400,700,900|Roboto+Slab:400,700&display=swap');

 body{
    font-family: 'Merriweather', serif;
    padding: 0;
    margin: 0;
    background: ${props =>
      props.siteType ? colors.boutiqueBody : colors.barBody};

 }   

 * {
     box-sizing: border-box;
 }
 
 h1,h2,h3,h4{
        font-family: 'Merriweather', serif;
        font-weight: 400;
    }

    p{
    font-family: 'Roboto Slab', serif;
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
