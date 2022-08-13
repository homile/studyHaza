import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";

import Footer from "../components/Footer";
import { StyledInputContainer } from "../components/ui/LoginInput";
import { ButtonLogin } from "../components/ui/Button";
import ModalSucces from "../components/ModalSucces";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase-config";
import { collection, addDoc} from "firebase/firestore";

function SignUp() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickName, setNickName] = useState("");
  const [validationEmail, setValidationEmail] = useState("none");
  const [validationPassword, setValidationPassword] = useState("none");
  const [validationNickName, setValidationNickName] = useState("none");

  const nameInput = useRef(null);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  // firebase 회원가입 코드
  const auth = getAuth();

  const emailChange = (e) => {
    setEmail(e);

    // 이메일 형식 체크 정규표현식
    const reg =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (reg.test(email)) {
      setValidationEmail("none");
    } else {
      setValidationEmail("block");
    }
  };

  const passwordChange = (e) => {
    setPassword(e);
    if (e === passwordCheck && e !== "" && passwordCheck !== "") {
      setValidationPassword("none");
    } else {
      setValidationPassword("block");
    }
  };

  const passwordCheckChange = (e) => {
    setPasswordCheck(e);
    if (password === e && password !== "" && e !== "") {
      setValidationPassword("none");
    } else {
      setValidationPassword("block");
    }
  };

  const nickNameChange = (e) => {
    setNickName(e);
    if (e !== "") {
      setValidationNickName("none");
    } else {
      setValidationNickName("block");
    }
  };

  const signUpHandler = (e) => {
    e.preventDefault();

    // 패스워드와 패스워드 확인란이 같을 때만 회원가입 실행
    if (
      validationPassword === "none" &&
      validationEmail === "none" &&
      validationNickName === "none"
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setIsOpen(true);
          createUsers();
          setEmail("");
          setPassword("");
          setPasswordCheck("");
          setNickName("");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };

  // firestore에 데이터 올리기
  const createUsers = async () => {
    const data = await addDoc(usersCollectionRef, {
      email,
      nickName,
      photoUrl: "",
    });
  };

  return (
    <>
      <StyledSignUpContainer>
        <StyledSignUpTitle>StudyHaza</StyledSignUpTitle>
        <form>
          <StyledInputContainer
            height={validationEmail === "block" ? "100px" : "90px"}
          >
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
            <ValidationCheck display={validationEmail}>
              {email === ""
                ? "이메일을 입력해주세요."
                : "이메일 형식이 올바르지 않습니다."}
            </ValidationCheck>
          </StyledInputContainer>
          <StyledInputContainer
            height={validationPassword === "block" ? "100px" : "90px"}
          >
            <label htmlFor="password">비밀번호</label>
            <div>
              <input
                id="password"
                type="password"
                placeholder="비밀번호"
                value={password}
                autoComplete="off"
                onChange={(e) => passwordChange(e.target.value)}
              />
              <i className="fa-solid fa-lock"></i>
            </div>
            <ValidationCheck display={validationPassword}>
              {password === ""
                ? "비밀번호를 입력해주세요"
                : "비밀번호가 일치하지 않습니다."}
            </ValidationCheck>
          </StyledInputContainer>
          <StyledInputContainer
            height={validationPassword === "block" ? "100px" : "90px"}
          >
            <label htmlFor="passwordCheck">비밀번호 확인</label>
            <div>
              <input
                id="passwordCheck"
                type="password"
                placeholder="비밀번호 확인"
                value={passwordCheck}
                autoComplete="off"
                onChange={(e) => passwordCheckChange(e.target.value)}
              />
              <i className="fa-solid fa-lock"></i>
            </div>
            <ValidationCheck display={validationPassword}>
              {password === ""
                ? "비밀번호를 입력해주세요"
                : "비밀번호가 일치하지 않습니다."}
            </ValidationCheck>
          </StyledInputContainer>
          <StyledInputContainer height={validationNickName === "block" ? "100px" : "90px"}>
            <label htmlFor="nickName">닉네임</label>
            <div>
              <input
                id="nickName"
                placeholder="사용할 닉네임"
                value={nickName}
                onChange={(e) => nickNameChange(e.target.value)}
              />
              <i className="fa-solid fa-user"></i>
            </div>
            <ValidationCheck display={validationNickName}>
              {nickName === ""
                && "닉네임을 입력해주세요."}
            </ValidationCheck>
          </StyledInputContainer>
          <ButtonLogin type="submit" onClick={(e) => signUpHandler(e)}>
            가입하기
          </ButtonLogin>
        </form>
        <ModalSucces isOpen={isOpen} setIsOpen={setIsOpen} />
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
