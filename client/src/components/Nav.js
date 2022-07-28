import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ButtonPrimary } from "./ui/Button";
import logo from "../images/logo.png";
import { useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();

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
          <SearchIcon>
            <i className="fa-solid fa-magnifying-glass fa-fw"></i>
          </SearchIcon>

          <DarkmodeIcon>
            <i className="fa-solid fa-moon fa-fw"></i>
          </DarkmodeIcon>

          <NavLink to={pathname !== "/login" ? "/login" : "/signup"}>
            <ButtonPrimary>
              {pathname === "/login" ? "회원가입" : "LOGIN"}
            </ButtonPrimary>
          </NavLink>
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

const SearchIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  font-size: 26.07px;
  border: 2px solid #f1f1f1;
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
