import React from "react";
import styled from "styled-components";

import { ButtonLogin } from "../components/ui/button/ButtonLogin";
import Footer from "../components/Footer";

function Login() {
  const StyledLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 410px;
    height: 910px;
  `;

  const StyledLoginTitle = styled.h1`
    font-size: 50px;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  `;

  const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: center;
    width: 100%;
    height: 90px;
    margin-bottom: 1rem;

    label {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      font-size: 17px;
      font-family: "Pretendard-Medium";
    }

    input {
      width: 100%;
      height: 50px;
      border: 1px solid black;
      border-radius: 0.5rem;
      padding: 0;
      font-size: 18px;
      text-indent: 2.5rem;
    }

    div {
      position: relative;
      width: 100%;
    }

    i {
      position: absolute;
      top: 1.1rem;
      left: 1rem;
    }
  `;

  const StyledUtilContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <>
      <StyledLoginContainer>
        <StyledLoginTitle>StudyHaza</StyledLoginTitle>
        <StyledInputContainer>
          <label for="email">이메일 계정</label>
          <div>
            <input id="email" placeholder="이메일" />
            <i className="fa-solid fa-at" />
          </div>
        </StyledInputContainer>
        <StyledInputContainer>
          <label for="password">비밀번호</label>
          <input id="password" type="password" placeholder="비밀번호" />
        </StyledInputContainer>
        <ButtonLogin>로그인</ButtonLogin>
        <StyledUtilContainer>
          <span>
            <em>아이디/패스워드 찾기</em>
          </span>
          <span>
            <em>|</em>
          </span>
          <span>
            <em>회원가입</em>
          </span>
        </StyledUtilContainer>
        <ButtonLogin color="#381f1f" background="#f6e24b">
          카카오톡
        </ButtonLogin>
        <ButtonLogin background="#405799">페이스북</ButtonLogin>
        <ButtonLogin background="#00c73c">네이버</ButtonLogin>
        <ButtonLogin color="#242424" background="white" borderColor="#d3d3d3">
          구글
        </ButtonLogin>
      </StyledLoginContainer>
      <Footer />
    </>
  );
}

export default Login;
