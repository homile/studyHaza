import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Footer from "../components/Footer";
import { StyledInputContainer } from "../components/ui/LoginInput";
import { ButtonLogin } from "../components/ui/Button";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [validation, setValidation] = useState("none");

  const nameInput = useRef(null);

  let navigate = useNavigate();

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  // firebase 회원가입 코드
  const auth = getAuth();

  const emailChange = (e) => {
    setEmail(e);
  };

  const passwordChange = (e) => {
    setPassword(e);
  };

  const passwordCheckChange = (e) => {
    setPasswordCheck(e);
  };

  const snsLoginHandler = (e) => {
    e.preventDefault();

    // 패스워드와 패스워드 확인란이 같을 때만 회원가입 실행
    if (password === passwordCheck && password !== '' && passwordCheck !== '') {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate('/login');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      setEmail("");
      setPassword("");
      setPasswordCheck("");
      setValidation("none");
    } else {
      setValidation("block");
    }
  };

  return (
    <>
      <StyledSignUpContainer>
        <StyledSignUpTitle>StudyHaza</StyledSignUpTitle>
        <form>
          <StyledInputContainer>
            <label htmlFor="email">이메일 계정</label>
            <div>
              <input
                id="email"
                type="email"
                placeholder="이메일 계정"
                value={email}
                ref={nameInput}
                onChange={(e) => emailChange(e.target.value)}
              />
              <i className="fa-solid fa-at" />
            </div>
          </StyledInputContainer>
          <StyledInputContainer height={validation === 'block' ? "100px" : "90px"}>
            <label htmlFor="password">비밀번호</label>
            <div>
              <input
                id="password"
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => passwordChange(e.target.value)}
              />
              <i className="fa-solid fa-lock"></i>
            </div>
            <ValidationCheck display={validation}>
              {password === '' ? "비밀번호를 입력해주세요" : "비밀번호가 일치하지 않습니다."}
            </ValidationCheck>
          </StyledInputContainer>
          <StyledInputContainer>
            <label htmlFor="passwordCheck">비밀번호 확인</label>
            <div>
              <input
                id="passwordCheck"
                type="password"
                placeholder="비밀번호 확인"
                value={passwordCheck}
                onChange={(e) => passwordCheckChange(e.target.value)}
              />
              <i className="fa-solid fa-lock"></i>
            </div>
            <ValidationCheck display={validation}>
            {password === '' ? "비밀번호를 입력해주세요" : "비밀번호가 일치하지 않습니다."}
            </ValidationCheck>
          </StyledInputContainer>
          <StyledInputContainer>
            <label htmlFor="nickName">닉네임</label>
            <div>
              <input id="nickName" placeholder="사용할 닉네임" value={email} />
              <i className="fa-solid fa-user"></i>
            </div>
          </StyledInputContainer>
          <ButtonLogin type="submit" onClick={(e) => snsLoginHandler(e)}>
            가입하기
          </ButtonLogin>
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

const ValidationCheck = styled.label`
  display: ${(props) => props.display || "none"};
  color: red;
  margin-top: -0.5rem;
`;
