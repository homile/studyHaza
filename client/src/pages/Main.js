import React, { useEffect, useState } from "react";
import { StudyContents } from "../components/ui/StudyContents";
import { AdArea } from "../components/ui/AdArea";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import styled from "styled-components";

function Main() {
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
          return b.id - a.id;
        })
      );
    };
    getPosts();
  }, []);

  return (
    <Container>
      <AdArea posts={posts} />
      <ConPanel>
        <StudyContents posts={posts} />
      </ConPanel>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  max-width: 1290px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
`;

const ConPanel = styled.div`
  width: 100%;
  padding: 50px 0 25px;

  .button-area {
    display: flex;
    justify-content: center;
    padding: 60px 0 30px;
  }
`;
