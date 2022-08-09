import React, { useEffect, useState }  from "react";
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
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  // 게시물 받아와서 상태에 넣기
  const [posts, setPosts] = useState([]);
  // 컬렉션이름이 posts인 db데이터 가져오기
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      const boardStudyRoot = data.docs.map((doc) => ({ ...doc.data() }));
      const studyData = boardStudyRoot.filter((el) => {
        return el.board === "study";
      });
      setPosts(
        studyData.sort((a, b) => {
          return new Date(b.dateCreated) - new Date(a.dateCreated);
        })
      );
    };
    getPosts();
  }, []);

  return (
    <>
      <Router>
        <AppContainer>
          <Nav />

          <Routes>
            <Route path="/" element={<Main posts={posts.slice(0, 12)} postsTotal={posts}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/community" element={<Community />} />
            <Route path="/studyjoin" element={<StudyJoin posts={posts}/>} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>

          <Footer />
        </AppContainer>
      </Router>
    </>
  );
}

export default App;
