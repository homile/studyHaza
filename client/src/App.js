import React, { useEffect, useState } from "react";
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
import Detail from "./pages/Detail";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import useUserInfo from "./apis/user/userInfo";
import { loginUserInfo } from "./actions";
import { useDispatch } from "react-redux";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const dispatch = useDispatch();
  // 게시물 받아와서 상태에 넣기
  const [posts, setPosts] = useState([]);
  const [communityPosts, setCommunityPosts] = useState([]);
  // 컬렉션이름이 posts인 db데이터 가져오기
  const postsCollectionRef = collection(db, "posts");
  useUserInfo();
  const user = JSON.parse(
    sessionStorage.getItem(
      `firebase:authUser:${process.env.REACT_APP_FIREBASE_API_KEY}:[DEFAULT]`
    )
  );

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      const boardRoot = data.docs.map((doc) => ({ ...doc.data() }));
      const studyData = boardRoot.filter((el) => {
        return el.board === "study";
      });
      const communityData = boardRoot.filter((el) => {
        return el.board === "community";
      });
      setPosts(
        studyData.sort((a, b) => {
          return new Date(b.dateCreated) - new Date(a.dateCreated);
        })
      );
      setCommunityPosts(
        communityData.sort((a, b) => {
          return new Date(b.dateCreated) - new Date(a.dateCreated);
        })
      );
    };
    getPosts();
  }, []);

  useEffect(() => {
    if (user !== null) {
      dispatch(
        loginUserInfo({
          isLogin: true,
          email: user.email,
          nickName: user.displayName,
          photoUrl: `${user.photoURL !== null ? user.photoURL : ""}`,
        })
      );
    }
  }, [user]);

  return (
    <>
      <Router>
        <AppContainer>
          <Nav />

          <Routes>
            <Route
              path="/"
              element={<Main posts={posts.slice(0, 12)} postsTotal={posts} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/community"
              element={<Community posts={communityPosts} />}
            />
            <Route
              path="/community/detail/:id"
              element={<Detail communityPosts={communityPosts} />}
            />
            <Route path="/studyjoin" element={<StudyJoin posts={posts} />} />
            <Route
              path="/studyjoin/detail/:id"
              element={<Detail posts={posts} />}
            />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>

          <Footer />
        </AppContainer>
      </Router>
    </>
  );
}

export default App;
