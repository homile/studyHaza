import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './fonts/fonts.css';
import img from './images/calendar_icon.png';

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
  }

  .react-datepicker-popper, .react-datepicker-popper *{
    transition: none;
  }
  
  /* ---------- globalStyles 로 옮길 것 - 진 ---------- */
  *{box-sizing: border-box;transition: all .75s;}
  button{border:0;background:none;cursor:pointer;}

  /* modal common */
  .btn-modal-cls {
    position:absolute;
    top:24px;
    right:25px;
    width: 46px;
    height: 46px;
    font-size:0;
    opacity: 0.3;
    border:2px solid #000;
    border-radius: 50px;
  }
  .btn-modal-cls:hover{
    opacity: 1;
  }
  .btn-modal-cls:before, .btn-modal-cls:after {
    position: absolute;
    top:11px;
    left: 20px;
    content: ' ';
    height: 21px;
    width: 2px;
    background-color: #333;
  }
  .btn-modal-cls:before {
    transform: rotate(45deg);
    }
  .btn-modal-cls:after {
    transform: rotate(-45deg);
  }

`;

export default GlobalStyle;
