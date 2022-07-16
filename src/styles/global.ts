import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {

        --Very-Dark-Gray: hsl(0, 0%, 17%);
        --Dark-Gray: hsl(0, 0%, 59%);
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
    }

    #map {
        width: 100%;
        height: 71vh;
        position: relative;
        overflow: hidden;

        .leaflet-container{
            position: static !important;
            height: 100%;
        }
     }



     

`