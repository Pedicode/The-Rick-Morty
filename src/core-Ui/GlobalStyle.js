/*
Default of config css for all pages
*/

import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
 :root{
    --bakColor:#F0F0F0;
    --indexBack:rgba(255, 255, 255, 0.92);;
    --footerColorFnt:#656565;
    --borderColor:#D7D7D7;
    --subTitleColor:#6B6B6B

}


*, 
*::after,
 &::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
 html{
       font-family: 'Open Sans', sans-serif,'Zen Dots';
       font-size: 1rem;
    }

    body{
       width: 100vw;;
       height: 100vh;
       background: url('/back.png') no-repeat center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -ms-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
       
    }
`
