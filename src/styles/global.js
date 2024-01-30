import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  body, input, button, a, textarea {
    font-family: 'Roboto Slab', serif;
  }

  a {
    text-decoration: none;
  }

`