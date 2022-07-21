import React from "react";
import styled from "styled-components";

function Nav() {
  const Ppsdf = styled.p`
    font-size: 3rem;
  `;

  return (
    <>
      <Ppsdf>StudyHaza</Ppsdf>
      <p>스터디</p>
      <p>커뮤니티</p>
      <p>검색 아이콘</p>
      <i className="fa-solid fa-magnifying-glass"></i>
      <i className="fa-solid fa-moon"></i>
      <p>다크 모드</p>
      <button>LOGIN</button>
    </>
  );
}

export default Nav;
