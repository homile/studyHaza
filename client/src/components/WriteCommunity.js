import React from "react";
import { WriteInputContainer } from "./ui/WriteInput";

function WriteCommunity() {
  return (
    <>
      <WriteInputContainer>
        <label htmlFor="title">제목</label>
        <div>
          <input id="community_title" placeholder="제목을 입력해주세요." />
        </div>
        <hr />
      </WriteInputContainer>

      <WriteInputContainer>
        <label htmlFor="content">내용</label>
        <div>
          <textarea id="community_content" placeholder="내용을 입력해주세요." />
        </div>
      </WriteInputContainer>
    </>
  );
}

export default WriteCommunity;
