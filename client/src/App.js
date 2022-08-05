import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import StudyJoin from "./pages/StudyJoin";
import Community from "./pages/Community";
import Login from "./pages/Login";
import styled from "styled-components";
import SignUp from "./pages/SignUp";
import MyPage from "./pages/MyPage";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <Router>
        <AppContainer>
          <Nav />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/community" element={<Community />} />
            <Route path="/studyjoin" element={<StudyJoin />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>

          <Footer />
        </AppContainer>
      </Router>
    </>
  );
}

export default App;
