import React, { useState } from "react";
import { WriteInputContainer } from "./ui/WriteInput";
import styled from "styled-components";
import { ButtonPrimary } from "./ui/Button";

import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import uuid from "react-uuid";

function WriteCommunity({ setIsOk, setIsWrite }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dateCreated = new Date();

  const postsCollectionRef = collection(db, "posts");

  // firestore에 데이터 올리기
  const createPosts = async () => {
    const data = await addDoc(postsCollectionRef, {
      board: "community",
      content,
      dateCreated: dateCreated.toLocaleDateString(),
      id: uuid(),
      nickName: "Heza",
      title,
    });

    alert("커뮤니티 글 작성이 완료되었습니다:)");

    setIsOk(true);
  };

  return (
    <>
      <WriteInputContainer>
        <label htmlFor="title">제목</label>
        <div>
          <input
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            id="community_title"
            placeholder="제목을 입력해주세요."
          />
        </div>
        <hr />
      </WriteInputContainer>

      <WriteInputContainer>
        <label htmlFor="content">내용</label>
        <div>
          <textarea
            defaultValue={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            id="community_content"
            placeholder="내용을 입력해주세요."
          />
        </div>
      </WriteInputContainer>
      <ButtonContainer>
        <ButtonPrimary onClick={() => setIsWrite(false)} background="#B6B6B6">
          취소
        </ButtonPrimary>
        <ButtonPrimary onClick={createPosts}>작성완료</ButtonPrimary>
      </ButtonContainer>
    </>
  );
}

export default WriteCommunity;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
