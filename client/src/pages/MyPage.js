import React from 'react'
import styled from 'styled-components';
import SideBar from '../components/myPage/SideBar';

import Content from '../components/myPage/Content';

const MyPage = () => {
  return (
    <MyPageContainer>
      <SideBar></SideBar>
      <Content></Content>
    </MyPageContainer>
  )
}

export default MyPage;


const MyPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  height: 100%;
  padding: 50px 0;
`;