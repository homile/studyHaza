import React, { useEffect, useState } from "react";
import { Tab } from "../components/ui/Tab";
import { AdArea } from "../components/ui/AdArea";
import { SwitchButton } from "../components/ui/SwitchButton";
import { ButtonPrimary } from "../components/ui/Button";
import { StudyCard } from "../components/ui/StudyCard";
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
      setPosts(data.docs.map((doc) => ({ ...doc.data()})))
    }
    getPosts();
  }, [])

  return (
    <Container>
      <AdArea />
      <ConPanel>
        <ConSortArea>
          <Tab />
          <SwitchGroup>
            <em>모집중만 보기</em>
            <SwitchButton />
          </SwitchGroup>
        </ConSortArea>
        <StudyCardList>
          {posts.map((data, idx) => <StudyCard key={data.id} data={data} idx={idx} />)}
        </StudyCardList>
        <div className="button-area">
          <ButtonPrimary>+ 더보기</ButtonPrimary>
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
  padding:40px 0;
`

const ConPanel = styled.div`
  width:100%;
  padding:50px 0 25px;

  .button-area{
    display:flex;
    justify-content: center;
    padding:60px 0 30px;
  }
`

const ConSortArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SwitchGroup = styled.div`
  display: flex;
  align-items: center;
  font-size:20px;
  font-family: 'Pretendard-Medium';
  gap:5px;
`

const StudyCardList = styled.div`
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  column-gap: 30px;  
  margin-top: 25px;
`