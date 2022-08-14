import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ButtonPrimary } from "./ui/Button";
import { MyPageDropDown } from "./ui/DropDown";
import { ProfileImgSM } from "./ui/ProfileImg";
import logo from "../images/logo.png";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserInfo } from "../actions";
import Search from "./ui/SearchInput";

function Nav() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [isNameClick, setIsNameClick] = useState(false);

  // store에 있는 로그인 판별 유무 가져올 수 있음
  const isLogin = useSelector((state) => state.loginReducer.isLogin);
  const nickName = useSelector((state) => state.loginReducer.nickName);
  const photoUrl = useSelector((state) => state.loginReducer.photoUrl);

  const onIsNameClickHandler = () => {
    setIsNameClick(!isNameClick);
  };

  const logoutHandler = () => {
    dispatch(logoutUserInfo());
    window.location.reload();
  };

  return (
    <>
      <NavContainer>
        <LeftContainer>
          <NavLink to="/">
            <LogoImage src={logo} alt="logo" />
          </NavLink>

          <NavStyle to="/studyjoin">스터디</NavStyle>
          <NavStyle to="/community">커뮤니티</NavStyle>
        </LeftContainer>

        <RightContainer>
          <Search />
          <DarkmodeIcon>
            <i className="fa-solid fa-moon fa-fw"></i>
          </DarkmodeIcon>

          {isLogin ? (
            <UserNameDiv>
              <div className="username" onClick={onIsNameClickHandler}>
                <ProfileImgSM
                  src={
                    photoUrl === ""
                      ? "https://avatars.githubusercontent.com/u/56163157?v=4"
                      : photoUrl
                  }
                />{" "}
                {nickName}
                {isNameClick ? (
                  <i className="fa-solid fa-caret-up" />
                ) : (
                  <i className="fa-solid fa-caret-down" />
                )}
              </div>
              {isNameClick && (
                <MyPageDropDown>
                  <NavLink to="/mypage">
                    <div>마이페이지</div>
                  </NavLink>
                  <hr />
                  <div>스터디이름</div>
                  <hr />
                  <div onClick={logoutHandler}>로그아웃</div>
                </MyPageDropDown>
              )}
            </UserNameDiv>
          ) : (
            <NavLink to={pathname !== "/login" ? "/login" : "/signup"}>
              <ButtonPrimary>
                {pathname === "/login" ? "회원가입" : "LOGIN"}
              </ButtonPrimary>
            </NavLink>
          )}
        </RightContainer>
      </NavContainer>
    </>
  );
}

export default Nav;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1285px;
  height: 51px;
  margin: 1rem;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 35%;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
`;

const DarkmodeIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #e8e8e8;
  font-size: 26px;
  margin: 1rem;
  border: 2px solid #e8e8e8;

  > .fa-moon {
    color: white;
  }
`;

const NavStyle = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  &.active {
    color: #2584f4;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

const LogoImage = styled.img`
  height: 40px;
`;

const UserNameDiv = styled.div`
  position: relative;
  cursor: pointer;

  .username {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.35rem;
    user-select: none;
  }
`;
