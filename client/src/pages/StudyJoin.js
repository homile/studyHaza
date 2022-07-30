import React, { useState } from "react";
import WriteBox from "../components/WriteBox";
import { ButtonPrimary } from "../components/ui/Button";

function StudyJoin() {
  const [isWrite, setIsWrite] = useState(false);

  const onWriteClick = () => {
    setIsWrite(true);
  };
  return (
    <>
      {isWrite ? (
        <WriteBox />
      ) : (
        <>
          <ButtonPrimary onClick={onWriteClick}>글쓰기</ButtonPrimary>
          <div>스터디 목록</div>
        </>
      )}
    </>
  );
}

export default StudyJoin;
