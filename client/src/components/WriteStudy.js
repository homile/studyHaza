import React from "react";
import styled from "styled-components";
import { WrtieInputContainer } from "./ui/WriteInput";
import WriteBox from "./WriteBox";

function WriteStudy() {
  return (
    <WriteBox>
      <WrtieInputContainer>
        <label htmlFor="title">제목</label>
        <div>
          <input id="title" placeholder="제목을 입력해주세요." />
        </div>
      </WrtieInputContainer>
      <WrtieInputContainer>
        <label htmlFor="content">내용</label>
        <div>
          <input id="content" placeholder="내용을 입력해주세요." />
        </div>
      </WrtieInputContainer>
      <WrtieInputContainer />
    </WriteBox>
  );
}

export default WriteStudy;
