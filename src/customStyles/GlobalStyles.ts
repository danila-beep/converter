import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;600;700&family=Poppins:wght@300;500;700&family=Ubuntu:wght@400;500;700&display=swap');

    :root {
        --main-color: rgba(47, 127, 226, 1);
        --main-color-dark: rgba(29, 76, 136, 1);
        --main-color-light: rgba(131, 178, 238, 1);
        --grey-color: rgba(40, 40, 40, 1);
        --danger-color: rgba(217, 53, 53, 1);
        --typography-color: white;
        --bg-color: black;
    }

    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-family: "Ubuntu", sans-serif;
        font-weight: 400;
    }
    body {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
    }
`;
