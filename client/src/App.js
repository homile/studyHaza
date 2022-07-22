import React from "react";
import "./App.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'
import "./fonts/fonts.css";

import Footer from './components/Footer';
import Modal from './components/Modal';
import ModalSoon from './components/ModalSoon';


const GlobalStyles = createGlobalStyle`
  ${reset}
  .app {font-family: "Pretendard-Bold";}
`;

const HeadLine = styled.h1`
  font-family: "Pretendard-Bold";
`;

function App() {
  return (
    <div className="app">
      <GlobalStyles />
      <HeadLine>App</HeadLine>
      <Footer />

      <Modal children={"등록하시겠습니까?"} />
      <ModalSoon children={"소셜 로그인 기능은"} />
    </div>
  );
}

export default App;
