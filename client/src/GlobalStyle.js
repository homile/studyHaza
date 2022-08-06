import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./fonts/fonts.css";
import img from "./images/calendar_icon.png";

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

  .react-datepicker__input-container input {
    background: url(${img}) no-repeat 6% 50%/15px auto;
    padding-left: 3.3rem;
  }

  .react-datepicker-popper, .react-datepicker-popper *{
    transition: none;
  }


`;

export default GlobalStyle;
