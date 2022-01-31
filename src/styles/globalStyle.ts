import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
    padding: 0;
    margin: 0;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }
    h1{
        color: blue;
    }
` 

export default GlobalStyle