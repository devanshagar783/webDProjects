import { createGlobalStyle } from "styled-components";

import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

const GlobalStyles = createGlobalStyle`
  :root{
    --darkBlue_1: #3B447A;
    --darkBlue_2: #222B5F;
    --darkBlue_3: #0A0F19;
    --darkBlue_4: #101826;
    --mediumSlateBlue: #6C62E2;
    --lightBlue_1: #F3F1FE;
    --lightBlue_2: #ADBDE3;
    --black: #000000;
    --white: #FFFFFF;

    --header-height: 50px;
  }
  html{
    font-size: 10px;
  }
  body{
    background-color: var(---lightBlue_1);
    font-family: 'Poppins', sans-serif;
  }
  *, *::after, *::before{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    cursor: pointer;
  }
  li, ul{
    list-style: none;
  }
  .container{
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
`;

export default GlobalStyles