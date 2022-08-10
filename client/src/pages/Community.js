import React, { useState } from "react";
import WriteBox from "../components/WriteBox";
import SearchBar from "../components/ui/SearchInputBar";
import BoardHeader from "../components/ui/BoardHeader";
import BoardListContents from "../components/ui/BoardListContents";
import Pagination from "../components/ui/Pagination";
import styled from "styled-components";

function Community() {
  const [isWrite, setIsWrite] = useState(false);

  const onWriteClick = () => {
    setIsWrite(true);
  };

  // console.log("Document written with ID: ", postsCollectionRef);

  return (
    <Container>
      {isWrite ? (
        <WriteBox />
      ) : (
        <ConPanel>
          <SubPageTop>
              <TypeH2>커뮤니티</TypeH2>
              <SearchBar/>
          </SubPageTop>
          
          <BoardHeader onWriteClick={onWriteClick}/>
          <BoardListContents />
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
`

const SubPageTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 25px;
`

const TypeH2 = styled.h2`
  font-size:40px;
  font-family: 'Pretendard-Bold';
`