import { createGlobalStyle, css } from "styled-components";

const resets = css`
    * {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    html {
        box-sizing: border-box;
    }
`;

const typography = css`
    body {
        font-family: "Montserrat", sans-serif;
        color: white;
    }
`;

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
    ${resets};
    ${typography};
`;

export const colors = {
    primaryBg: "hsl(231, 15%, 17%)",
}