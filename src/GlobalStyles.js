import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    a{
        text-decoration: none;
        cursor: pointer;
    }
    ul{
        list-style: none;
    }

`;


export default GlobalStyle