import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Merriweather:400,700,900|Roboto+Slab:400,700&display=swap');

 body{
    font-family: 'Merriweather', serif;

 }   
 
 h1,h2,h3,h4{
        font-family: 'Merriweather', serif;
    }

    p{
    font-family: 'Roboto Slab', serif;
    }
    button, a{
        font-family: 'Roboto Slab', serif;

    }
`
