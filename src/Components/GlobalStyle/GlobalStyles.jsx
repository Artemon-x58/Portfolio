import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color:  #050505;
    width: 100%;
    height: 100vh;
  }
  body.ReactModal__Body--open {
    overflow: hidden; 
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: currentColor;
    text-decoration: none;
    outline: transparent;
    cursor: pointer;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    padding: 0;
    margin: 0;
    outline: transparent;
  }
svg{
  cursor: pointer;
}
label {
  cursor: pointer;
}

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}


`;
