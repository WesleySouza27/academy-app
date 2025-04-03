import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        color: rebeccapurple;
    }

    a {
        color: rebeccapurple;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

`;
