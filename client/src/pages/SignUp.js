import React, { useState } from "react";

import styled from "styled-components";

import Footer from "../components/Footer";
import { StyledInputContainer } from "../components/ui/LoginInput";
import { ButtonLogin } from "../components/ui/Button";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // firebase 회원가입 코드
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  
  const emailChange = (e) => {
    setEmail(e);
  }

  const passwordChange = (e) => {
    setPassword(e);
  }

  const snsLoginHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <StyledSignUpContainer>
        <StyledSignUpTitle>StudyHaza</StyledSignUpTitle>
        <form>
          <StyledInputContainer>
            <label htmlFor="email">이메일 계정</label>
            <div>
              <input id="email" type="email" placeholder="이메일 계정" onChange={e => emailChange(e.target.value)}/>
              <i className="fa-solid fa-at" />
            </div>
          </StyledInputContainer>
          <StyledInputContainer>
            <label htmlFor="password">비밀번호</label>
            <div>
              <input id="password" type="password" placeholder="비밀번호" onChange={e => passwordChange(e.target.value)}/>
              <i className="fa-solid fa-lock"></i>
            </div>
          </StyledInputContainer>
          <StyledInputContainer>
            <label htmlFor="passwordCheck">비밀번호 확인</label>
            <div>
              <input
                id="passwordCheck"
                type="password"
                placeholder="비밀번호 확인"
              />
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
          <ButtonLogin type="submit" onClick={e => snsLoginHandler(e)}>가입하기</ButtonLogin>
        </form>
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

  form {
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

const StyledSignUpTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;
