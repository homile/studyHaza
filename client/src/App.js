import React from "react";
import "./App.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'
import "./fonts/fonts.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

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
      <Router>
        <Routes>
          <Route path="/"  /* element={이동할컴포넌트} */ />
          <Route path="/login"  /* element={이동할컴포넌트} */ />
          <Route path="signup/"  /* element={이동할컴포넌트} */ />
          <Route path="/board"  /* element={이동할컴포넌트} */ />
          <Route path="/studyboard"  /* element={이동할컴포넌트} */ />
          <Route path="/mypage"  /* element={이동할컴포넌트} */ />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
