import React from 'react'
import styled from 'styled-components';
import SideBar from '../components/myPage/SideBar';

const MyPage = () => {
  return (
    <MyPageContainer>
      <SideBar></SideBar>
    </MyPageContainer>
  )
}

export default MyPage;


const MyPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1290px;
  height: 100%;
`;