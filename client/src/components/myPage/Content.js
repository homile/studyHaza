import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { UserInfoContainer } from "../ui/LoginInput";
import { ButtonPrimary } from "../ui/Button";

const Content = () => {
  // 로그인 중인 유저정보
  const loginUserInfo = useSelector((state) => state.loginReducer);

  const [nickName, setNickName] = useState(loginUserInfo.nickName);

  const nickNameChange = (e) => {
    setNickName(e);
  };

  const PWChange = () => {};

  const PWCheckChange = () => {};

  return (
    <Container>
      <StyledSignUpTitle>회원정보 수정</StyledSignUpTitle>
      <hr />
      <form>
        <InputContainer>
          <InputContentContainer>
            <UserInfoContainer>
              <label>닉네임</label>
              <input
                id="nickName"
                value={nickName}
                onChange={(e) => nickNameChange(e.target.value)}
              />
            </UserInfoContainer>
            <UserInfoContainer>
              <label>이메일</label>
              <input id="email" value={loginUserInfo.email} disabled />
            </UserInfoContainer>
            <UserInfoContainer>
              <label>현재 비밀번호</label>
              <input
                type="password"
                id="usePW"
                value="dsdasdsadsadsa"
                disabled
              />
            </UserInfoContainer>
            <UserInfoContainer>
              <label>새 비밀번호</label>
              <input type="password" id="newPW" onChange={PWChange} />
            </UserInfoContainer>
            <UserInfoContainer>
              <label>새 비밀번호 확인</label>
              <input type="password" id="newPWCheck" onChange={PWCheckChange} />
            </UserInfoContainer>
          </InputContentContainer>
          <InputImgContainer>이미지</InputImgContainer>
        </InputContainer>
        <hr />
        <ButtonContainer>
          <ButtonPrimary background="#B6B6B6">취소</ButtonPrimary>
          <ButtonPrimary>수정완료</ButtonPrimary>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60rem;
  height: 100%;

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
  font-size: 30px;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: row;
  width: 100%;
`;

const InputContentContainer = styled.div`
  width: 40%;
  height: 100%;
`;

const InputImgContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 60%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ValidationCheck = styled.label`
  display: ${(props) => props.display || "none"};
  color: red;
  margin-top: -0.5rem;
`;
