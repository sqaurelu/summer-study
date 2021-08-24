import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body{
        font-size: 14px;
        color: #212529;
        background-color: #f8f9fa;
        /* background-color:rgba(20,20,20,0.5); */
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    }
    a{
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
    ol, ul, li {
        list-style: none;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    input, button {
        background-color: transparent;
        color: inherit;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family:'Maven Pro', sans-serif;
    }
    form {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    textarea {
        font-family: inherit;
        font-size: inherit;
    }
`;

export default GlobalStyles;