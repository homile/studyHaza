import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import ViewCommunity from "./ViewCommunity";
import ViewStudy from "./ViewStudy";
import { ButtonSecondary } from "./ui/Button";

// 스터디 모집 상세 글보기, 커뮤니티 상세 글보기 컴포넌트 container
const ViewDetailBox = ({ setIsWrite }) => {
  const { pathname } = useLocation();

  return (
    <WrapPanel>
      <ViewContainer
        style={{ height: pathname === "/community" ? "700px" : "1000px" }}
      >
        {pathname === "/community" ? (
          <ViewCommunity />
        ) : (
          <ViewStudy height="1000px" />
        )}
      </ViewContainer>
      <ButtonContainer>
        <ButtonSecondary width="126px" onClick={() => setIsWrite(false)}>
          목록으로
        </ButtonSecondary>
        <ButtonRightBox>
          <ButtonSecondary>수정</ButtonSecondary>
          <ButtonSecondary>삭제</ButtonSecondary>
        </ButtonRightBox>
      </ButtonContainer>
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
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  margin-bottom: 1rem;
  padding: 49px 55px 0px 55px;
  margin-top: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonRightBox = styled.span`
  display: flex;
  justify-content: space-between;
  width: 19%;
`;
