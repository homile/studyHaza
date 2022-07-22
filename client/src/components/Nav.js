import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "./ui/button/ButtonPrimary";

const NavContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1285px;
  height: 51px;
  margin: 1rem;
  top: 44px;
  left: 315px;
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

const Logo = styled.h1`
  font-size: 30px;

  font-size: 39px;
  letter-spacing: -0.04em;
  text-decoration: none;
`;

const NavLogo = styled(NavLink)`
  text-decoration: none;
  color: black;
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

function Nav() {
  return (
    <>
      <NavContainer>
        <LeftContainer>
          <Logo>
            <NavLogo to="/">StudyHaza</NavLogo>
          </Logo>
          <NavStyle to="/studyjoin" activeClassName="active">
            스터디
          </NavStyle>
          <NavStyle to="/community">커뮤니티</NavStyle>
        </LeftContainer>

        <RightContainer>
          <SearchIcon>
            <i className="fa-solid fa-magnifying-glass fa-fw"></i>
          </SearchIcon>

          <DarkmodeIcon>
            <i className="fa-solid fa-moon fa-fw"></i>
          </DarkmodeIcon>
          <NavLink to="/login">
            <Button text="LOGIN"></Button>
          </NavLink>
        </RightContainer>
      </NavContainer>
    </>
  );
}

export default Nav;
