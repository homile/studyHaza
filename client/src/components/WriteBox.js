import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import WriteCommunity from "./WriteCommunity";
import { ButtonPrimary } from "./ui/Button";
import WriteStudy from "./WriteStudy";

// 스터디 모집 글쓰기, 커뮤니티 글쓰기 컴포넌트 container
const WriteBox = () => {
  const { pathname } = useLocation();

  return (
    <WrapPanel>
      <HeaderContainer>
        {pathname === "/community" ? "커뮤니티 글쓰기" : "스터디 만들기"}
      </HeaderContainer>
      <WriteContainer>
        {pathname === "/community" ? <WriteCommunity /> : <WriteStudy />}
      </WriteContainer>
    </WrapPanel>
  );
};

export default WriteBox;

const WrapPanel =styled.div`
  width:1000px;
  margin:0 auto;
`

const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1250px;
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
  font-family: "Pretendard-Bold";
  font-size: 35px;
  padding-left: 55px;
  padding-bottom: 29px;
`;
