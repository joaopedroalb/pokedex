import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --red:#ff0054;
        --white:#FFFF;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        background: var(--red);
    
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        
        font-family: 'Roboto';
        box-sizing: border-box;
    }
    h1,h2,h3,h4,h5,p{
        margin: 0;
    }

    .Title{
        text-transform: capitalize;
    }
` 

export default GlobalStyle