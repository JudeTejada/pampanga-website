import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
     margin:0;
     padding:0;
     box-sizing: border-box;
 }

html{
    font-size: 10px;
    scroll-behavior: smooth;
}

 body{
    font-family: 'Lato', sans-serif;
 }

 ul{
     list-style:none;
 }
 
 `;
