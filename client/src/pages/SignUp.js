import React from "react";

import styled from "styled-components";

import Footer from "../components/Footer";
import { StyledInputContainer } from "../components/ui/Input";
import { ButtonLogin } from "../components/ui/Button";

function SignUp() {
  return (
    <>
      <StyledSignUpContainer>
        <StyledSignUpTitle>StudyHaza</StyledSignUpTitle>
        <StyledInputContainer>
          <label htmlFor="email">이메일 계정</label>
          <div>
            <input id="email" placeholder="이메일 계정" />
            <i className="fa-solid fa-at" />
          </div>
        </StyledInputContainer>
        <StyledInputContainer>
          <label htmlFor="password">비밀번호</label>
          <div>
            <input id="password" type="password" placeholder="비밀번호" />
            <i className="fa-solid fa-lock"></i>
          </div>
        </StyledInputContainer>
        <StyledInputContainer>
          <label htmlFor="passwordCheck">비밀번호 확인</label>
          <div>
            <input id="passwordCheck" type="password" placeholder="비밀번호 확인" />
            <i className="fa-solid fa-lock"></i>
          </div>
        </StyledInputContainer>
        <StyledInputContainer>
          <label htmlFor="nickName">닉네임</label>
          <div>
            <input id="nickName" placeholder="사용할 닉네임" />
            <i className="fa-solid fa-user"></i>
          </div>
        </StyledInputContainer>
        <ButtonLogin>가입하기</ButtonLogin>
      </StyledSignUpContainer>
      <Footer />
    </>
  );
}

export default SignUp;

const StyledSignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 410px;
  height: 910px;

  hr {
    width: 100%;
    border: 0.5px solid #dedede;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const StyledSignUpTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;
