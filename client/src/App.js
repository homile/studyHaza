import React from "react";
import "./App.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import "./fonts/fonts.css";

const GlobalStyles = createGlobalStyle`
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
    </div>
  );
}

export default App;
