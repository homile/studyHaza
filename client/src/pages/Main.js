import React, { useEffect, useState } from "react";
import { Tab } from "../components/ui/Tab";
import { AdArea } from "../components/ui/AdArea";
import  SwitchButton from "../components/ui/SwitchButton";
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
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
      setPosts(data.docs.map((doc) => ({ ...doc.data()})))
    }

    getPosts();
  }, [])

  console.log(posts)

  // console.log(...posts.filter((el) => el.nickName === 'chapchap'))

  return (
    <Container>
      <AdArea />
      <ConPanel>
        <div>
          <Tab />
          <SwitchGroup>
            <em>모집중만 보기</em>
            <SwitchButton />
          </SwitchGroup>
        </div>
      </ConPanel>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  max-width:1290px;
  width:100%;
  margin:0 auto;
  padding:50px 0;
`

const ConPanel = styled.div`
  width:100%;
  padding:50px 0 25px;
  
  > div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const SwitchGroup = styled.div`
  display: flex;
  align-items: center;
  font-size:20px;
  font-family: 'Pretendard-Medium';
  gap:5px;
`