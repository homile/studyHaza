import React from "react";
import styled from "styled-components";
import ViewStudy from "../components/ViewStudy";
import { ButtonSecondary } from "../components/ui/Button";

function Detail({ posts }) {
  return (
    <Container>
      <ViewStudy />
      <ButtonContainer>
        <ButtonSecondary width="126px">목록으로</ButtonSecondary>
        <ButtonRightBox>
          <ButtonSecondary>수정</ButtonSecondary>
          <ButtonSecondary>삭제</ButtonSecondary>
        </ButtonRightBox>
      </ButtonContainer>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  max-width: 900px;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonRightBox = styled.span`
  display: flex;
  justify-content: space-between;
  width: 19%;
  gap: 10px;
`;
