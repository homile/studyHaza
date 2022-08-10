import React, { useState } from "react";
import WriteBox from "../components/WriteBox";
import { StudyContents } from "../components/ui/StudyContents";
import iconButton from "../images/icon_add.png";
import styled from "styled-components";

function StudyJoin({ posts }) {
  const [isWrite, setIsWrite] = useState(false);

  const onWriteClick = () => {
    setIsWrite(true);
  };

  return (
    <Container>
      {isWrite ? (
        <WriteBox setIsWrite={setIsWrite} />
      ) : (
        <>
          <CreateStudyButton onClick={onWriteClick}>
            <div>
              <img src={iconButton} className="icon-add" alt="" />
              <p>나만의 스터디를 만들어보세요!</p>
            </div>
          </CreateStudyButton>
          <ConPanel>
            <StudyContents posts={posts} />
          </ConPanel>
        </>
      )}
    </Container>
  );
}

export default StudyJoin;

const Container = styled.div`
  max-width: 1290px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
`;

const ConPanel = styled.div`
  width: 100%;
  padding: 50px 0 25px;
`;

const CreateStudyButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 185px;
  background: #f9f9f9;
  border: 1px solid #e3e3e3;
  border-radius: 25px;
  text-align: center;
  cursor: pointer;

  .icon-add {
    width: 63px;
  }

  p {
    padding: 6px 0;
    font-size: 20px;
    font-family: "Pretendard-Medium";
  }

  &:hover {
    background: #f4f4f4;
    border-color: #dbdbdb;
    .icon-add {
      opacity: 0.85;
    }
    p {
      color: #1879eb;
    }
  }
`;
