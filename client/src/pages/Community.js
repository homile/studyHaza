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
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  
  const onWriteClick = () => {
    setIsWrite2(true);
  };

  useEffect(() => {
    setPostData(posts);
  }, [posts]);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

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
          <BoardListContents posts={currentPosts(postData)} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={setCurrentPage}
          ></Pagination>
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
  min-height:100vh;
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
