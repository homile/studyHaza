import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import StudyJoin from "./pages/StudyJoin";
import Community from "./pages/Community";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" /* element={이동할컴포넌트} */ />
          <Route path="/community" element={<Community />} />
          <Route path="/studyjoin" element={<StudyJoin />} />
          <Route path="/mypage" /* element={이동할컴포넌트} */ />
        </Routes>
      </Router>
    </>
  );
}

export default App;
