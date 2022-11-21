import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import UserInfo from './apis/user/userInfo';
import { loginActions } from './redux/reducers/reducer';
import { useDispatch } from 'react-redux';
import Loading from './components/Layout/Loading';

const Main = lazy(() => import('./pages/Main'));
const StudyJoin = lazy(() => import('./pages/StudyJoin'));
const Community = lazy(() => import('./pages/Community'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));
const MyPage = lazy(() => import('./pages/MyPage'));
const Detail = lazy(() => import('./pages/Detail'));
const Nav = lazy(() => import('./components/Layout/Nav/Nav'));
const Footer = lazy(() => import('./components/Layout/Footer'));

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const dispatch = useDispatch();
  // 게시물 받아와서 상태에 넣기
  const [posts, setPosts] = useState<any>([]);
  const [communityPosts, setCommunityPosts] = useState<any>([]);

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  // 컬렉션이름이 posts인 db데이터 가져오기
  const postsCollectionRef = collection(db, 'posts');
  UserInfo();
  const user = JSON.parse(
    sessionStorage.getItem(
      `firebase:authUser:${process.env.REACT_APP_FIREBASE_API_KEY}:[DEFAULT]`,
    ) || '{}',
  );

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      const boardRoot = data.docs.map((doc) => ({ ...doc.data() }));
      const studyData = boardRoot.filter((el) => {
        return el.board === 'study';
      });
      const communityData = boardRoot.filter((el) => {
        return el.board === 'community';
      });
      setPosts(
        studyData.sort((a, b): number => {
          return +new Date(b.dateCreated) - +new Date(a.dateCreated);
        }),
      );
      setCommunityPosts(
        communityData.sort((a, b) => {
          return +new Date(b.dateCreated) - +new Date(a.dateCreated);
        }),
      );
    };
    getPosts();
  }, []);

  useEffect(() => {
    if (user !== null) {
      dispatch(
        loginActions.loginUserInfo({
          isLogin: true,
          email: user.email,
          nickName: user.displayName,
          photoUrl: `${user.photoURL !== null ? user.photoURL : ''}`,
        }),
      );
    }
  }, [user]);

  return (
    <>
      <Suspense fallback={<Loading />}>
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
                element={<Detail isEdit={isEdit} toggleIsEdit={toggleIsEdit} />}
              />
              <Route path="/studyjoin" element={<StudyJoin posts={posts} />} />
              <Route
                path="/studyjoin/detail/:id"
                element={<Detail isEdit={isEdit} toggleIsEdit={toggleIsEdit} />}
              />
              <Route path="/mypage" element={<MyPage />} />
            </Routes>

            <Footer />
          </AppContainer>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
