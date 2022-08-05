import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ButtonLogin, ButtonSnsLogin } from "../components/ui/Button";
import { StyledInputContainer } from "../components/ui/LoginInput";
import ModalSoon from "../components/ModalSoon";
import { loginSuccess } from "../actions";
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence  } from "firebase/auth";

import naver_symbol from "../assets/naver_symbol.png";
import facebook_symbol from "../assets/facebook_symbol.png";
import kakao_symbol from "../assets/kakao_symbol.png";
import google_symbol from "../assets/google_symbol.png";

function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();

  const auth = getAuth();

  const nameInput = useRef(null);
  let navigate = useNavigate();

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  const snsLoginHandler = () => {
    setIsOpen(true);
  };

  // 로그인 버튼 클릭
  const loginHandler = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setPersistence(auth, browserSessionPersistence)
        .then(() => {
          // Existing and future Auth states are now persisted in the current
          // session only. Closing the window would clear any existing state even
          // if a user forgets to sign out.
          // ...
          // New sign-in will be persisted with session persistence.
          return signInWithEmailAndPassword(auth, email, password);
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
        });
        dispatch(loginSuccess());
        setEmail('');
        setPassword('');
        navigate('/');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const emailChange = (e) => {
    setEmail(e);
  };

  const passwordChange = (e) => {
    setPassword(e);
  };

  return (
    <>
      <StyledLoginContainer>
        <StyledLoginTitle>StudyHaza</StyledLoginTitle>
        <form>
          <StyledInputContainer>
            <label htmlFor="email">이메일 계정</label>
            <div>
              <input
                id="email"
                placeholder="이메일"
                ref={nameInput}
                onChange={(e) => emailChange(e.target.value)}
              />
              <i className="fa-solid fa-at" />
            </div>
          </StyledInputContainer>
          <StyledInputContainer>
            <label htmlFor="password">비밀번호</label>
            <div>
              <input
                id="password"
                type="password"
                placeholder="비밀번호"
                onChange={(e) => passwordChange(e.target.value)}
              />
              <i className="fa-solid fa-lock"></i>
            </div>
          </StyledInputContainer>
          <ButtonLogin type="submit" onClick={(e) => loginHandler(e)}>
            로그인
          </ButtonLogin>
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
          <ButtonSnsLogin
            color="#381f1f"
            background="#FFE600"
            onClick={snsLoginHandler}
          >
            카카오톡
            <img alt="카카오톡 로고" src={kakao_symbol} />
          </ButtonSnsLogin>
        </SnsButtonContainer>
        <SnsButtonContainer>
          <ButtonSnsLogin background="#1977F2" onClick={snsLoginHandler}>
            페이스북
            <img alt="페이스북 로고" src={facebook_symbol} />
          </ButtonSnsLogin>
        </SnsButtonContainer>
        <SnsButtonContainer>
          <ButtonSnsLogin background="#02C75A" onClick={snsLoginHandler}>
            네이버
            <img alt="네이버 로고" src={naver_symbol} />
          </ButtonSnsLogin>
        </SnsButtonContainer>
        <SnsButtonContainer>
          <ButtonSnsLogin
            color="#242424"
            background="white"
            borderColor="#d3d3d3"
            onClick={snsLoginHandler}
          >
            구글
            <img alt="구글 로고" src={google_symbol} />
          </ButtonSnsLogin>
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

  form {
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
