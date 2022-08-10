import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import ViewCommunity from "./ViewCommunity";
import ViewStudy from "./ViewStudy";

// 스터디 모집 상세 글보기, 커뮤니티 상세 글보기 컴포넌트 container
const ViewDetailBox = () => {
  const { pathname } = useLocation();

  return (
    <WrapPanel>
      <ViewContainer>
        {pathname === "/community" ? <ViewCommunity /> : <ViewStudy />}
      </ViewContainer>
    </WrapPanel>
  );
};

export default ViewDetailBox;

const WrapPanel = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1000px;
  border: 1px solid #e3e3e3;
  border-radius: 30px;
  margin-bottom: 6rem;
  padding: 49px 55px 0px 55px;
`;
