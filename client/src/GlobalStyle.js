import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./fonts/fonts.css";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard-Regular';

  }

  h1 {
    font-family: 'Pretendard-ExtraBold';
  }

`;

export default GlobalStyle;
