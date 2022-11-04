import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import WriteCommunity from './PostCommunity';
import WriteStudy from './PostStudy';
import Detail from '../../pages/Detail';

// 스터디 모집 글쓰기, 커뮤니티 글쓰기 컴포넌트 container
const WriteBox = ({ setIsWrite }) => {
  const { pathname } = useLocation();
  const [isOk, setIsOk] = useState(false);

  return (
    <WrapPanel>
      {!isOk ? (
        <>
          <HeaderContainer>
            {pathname === '/community' ? '커뮤니티 글쓰기' : '스터디 만들기'}
          </HeaderContainer>

          <WriteContainer community={pathname === '/community' ? true : false}>
            {pathname === '/community' ? (
              <WriteCommunity setIsOk={setIsOk} setIsWrite={setIsWrite} />
            ) : (
              <WriteStudy setIsOk={setIsOk} setIsWrite={setIsWrite} />
            )}
          </WriteContainer>
        </>
      ) : (
        <Detail setIsWrite={setIsWrite} />
      )}
    </WrapPanel>
  );
};

export default WriteBox;

const WrapPanel = styled.div`
  width: 1000px;
  margin: 0 auto;
  background-color: #fff;
`;

const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) => (props.community ? '700px' : '1230px')};
  border: 1px solid #e3e3e3;
  border-radius: 0 0 30px 30px;
  margin-bottom: 6rem;
  padding: 49px 55px 0px 55px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 134px;
  background-color: #2584f4;
  border-radius: 30px 30px 0 0;
  color: white;
  font-family: 'Pretendard-Bold';
  font-size: 35px;
  padding-left: 55px;
  padding-bottom: 29px;
`;
