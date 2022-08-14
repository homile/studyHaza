import React, { useState, useEffect } from "react";
import WriteBox from "../components/WriteBox";
import SearchBar from "../components/ui/SearchInputBar";
import BoardHeader from "../components/ui/BoardHeader";
import BoardListContents from "../components/ui/BoardListContents";
import Pagination from "../components/ui/Pagination";
import styled from "styled-components";

function Community({ posts }) {
  const [isWrite2, setIsWrite2] = useState(false);
  const [postData, setPostData] = useState([]);

  const onWriteClick = () => {
    setIsWrite2(true);
  };

  useEffect(() => {
    setPostData(posts);
  }, [posts]);

  return (
    <Container>
      {isWrite2 ? (
        <WriteBox setIsWrite={setIsWrite2} />
      ) : (
        <ConPanel>
          <SubPageTop>
            <TypeH2>커뮤니티</TypeH2>
            <SearchBar />
          </SubPageTop>
          <BoardHeader onWriteClick={onWriteClick} posts={postData} />
          <BoardListContents posts={postData} />
          <Pagination />
        </ConPanel>
      )}
    </Container>
  );
}

export default Community;

const Container = styled.div`
  max-width: 1290px;
  width: 100%;
  margin: 0 auto;
  padding: 0 0 80px;
`;

const ConPanel = styled.div`
  width: 100%;
  padding: 50px 0 25px;
`;

const SubPageTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 25px;
`;

const TypeH2 = styled.h2`
  font-size: 40px;
  font-family: "Pretendard-Bold";
`;
