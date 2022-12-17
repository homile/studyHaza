import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ButtonLogin, ButtonSnsLogin } from '../components/UI/Button/Button';
import { StyledInputContainer } from '../components/UI/Input/LoginInput';
import ModalSoon from '../components/UI/Modal/ModalSoon';
import { loginActions } from '../redux/reducers/reducer';
import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from 'firebase/auth';

import {
  naver_symbol,
  facebook_symbol,
  kakao_symbol,
  google_symbol,
} from '../assets/index';

function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const { current } = nameInput;
    current?.focus();
  }, []);

  const snsLoginHandler = () => {
    setIsOpen(true);
  };

  // 로그인 버튼 클릭
  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setPersistence(auth, browserSessionPersistence)
          .then(() => {
            return signInWithEmailAndPassword(auth, email, password);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorCode, errorMessage);
          });
        dispatch(loginActions.loginSuccess());
        setEmail('');
        setPassword('');
        navigate('/');
        // window.location.reload();
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/user-not-found') {
          alert('존재하지 않는 이메일입니다.');
        }
        if (errorCode === 'auth/wrong-password') {
          alert('비밀번호가 틀렸습니다.');
        }
      });
  };

  const emailChange = (e: string) => {
    setEmail(e);
  };

  const passwordChange = (e: string) => {
    setPassword(e);
  };

  return (
    <>
      <StyledLoginContainer>
        <StyledLoginTitle>StudyHaza</StyledLoginTitle>
        <form onSubmit={loginHandler}>
          <StyledInputContainer height="">
            <label htmlFor="email">이메일 계정</label>
            <div>
              <input
                id="email"
                placeholder="이메일"
                ref={nameInput}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  emailChange(e.target.value)
                }
              />
              <i className="fa-solid fa-at" />
            </div>
          </StyledInputContainer>
          <StyledInputContainer height="">
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
          <ButtonLogin>로그인</ButtonLogin>
        </form>
        <StyledUtilContainer>
          <span>
            <em>아이디/패스워드 찾기</em>
          </span>
          <span>|</span>
          <span>
            <StyledLink to="/signup">
              <em>회원가입</em>
            </StyledLink>
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
