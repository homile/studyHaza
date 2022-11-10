import React, { useState, useEffect } from 'react';
import WriteBox from '../components/Post/PostBox';
import SearchBar from '../components/UI/Filter/SearchInputBar';
import BoardHeader from '../components/UI/BoardHeader';
import BoardListContents from '../components/UI/BoardListContents';
import Pagination from '../components/UI/Filter/Pagination';
import styled from 'styled-components';

type Props = {
  posts: [];
};

function Community({ posts }: Props) {
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
  const currentPosts = (posts?: [] | any) => {
    let currentPosts: number | any = 0;
    currentPosts = posts?.slice(indexOfFirst, indexOfLast);
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
          <BoardListContents posts={currentPosts(postData)} />x
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
  min-height: 90vh;
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
  font-family: 'Pretendard-Bold';
`;
