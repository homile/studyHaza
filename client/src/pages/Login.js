import React, { useState } from "react";
import styled from "styled-components";

import { ButtonLogin } from "../components/ui/Button";
import { StyledInputContainer } from "../components/ui/LoginInput";
import ModalSoon from "../components/ModalSoon";

import naver_symbol from "../assets/naver_symbol.png";
import facebook_symbol from "../assets/facebook_symbol.png";
import kakao_symbol from "../assets/kakao_symbol.png";
import google_symbol from "../assets/google_symbol.png";

function Login() {
  const [isOpen, setIsOpen] = useState(false);

  const snsLoginHandler = () => {
    setIsOpen(true);
  };

  return (
    <>
      <StyledLoginContainer>
        <StyledLoginTitle>StudyHaza</StyledLoginTitle>
        <form>
          <StyledInputContainer>
            <label htmlFor="email">이메일 계정</label>
            <div>
              <input id="email" placeholder="이메일" />
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
          <ButtonLogin>로그인</ButtonLogin>
        </form>
        <StyledUtilContainer>
          <span>
            <em>아이디/패스워드 찾기</em>
          </span>
          <span>|</span>
          <span>
            <em>회원가입</em>
          </span>
        </StyledUtilContainer>
        <hr></hr>
        <SnsButtonContainer>
          <ButtonLogin
            color="#381f1f"
            background="#FFE600"
            onClick={snsLoginHandler}
          >
            카카오톡
            <img alt="카카오톡 로고" src={kakao_symbol} />
          </ButtonLogin>
        </SnsButtonContainer>
        <SnsButtonContainer>
          <ButtonLogin background="#1977F2" onClick={snsLoginHandler}>
            페이스북
            <img alt="페이스북 로고" src={facebook_symbol} />
          </ButtonLogin>
        </SnsButtonContainer>
        <SnsButtonContainer>
          <ButtonLogin background="#02C75A" onClick={snsLoginHandler}>
            네이버
            <img alt="네이버 로고" src={naver_symbol} />
          </ButtonLogin>
        </SnsButtonContainer>
        <SnsButtonContainer>
          <ButtonLogin
            color="#242424"
            background="white"
            borderColor="#d3d3d3"
            onClick={snsLoginHandler}
          >
            구글
            <img alt="구글 로고" src={google_symbol} />
          </ButtonLogin>
        </SnsButtonContainer>
        <ModalSoon isOpen={isOpen} setIsOpen={setIsOpen}>
          SNS 로그인 기능
        </ModalSoon>
      </StyledLoginContainer>
    </>
  );
}

export default Login;

const StyledLoginContainer = styled.div`
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

  form{
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

const StyledLoginTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

const StyledUtilContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  em {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    cursor: pointer;
  }
`;

const SnsButtonContainer = styled.div`
  position: relative;
  width: 100%;

  img {
    position: absolute;
    width: 43px;
    height: 43px;
    left: 1rem;
  }
`;
