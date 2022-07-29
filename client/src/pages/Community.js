import React, { useState } from "react";
import { ButtonPrimary } from "../components/ui/Button";
import WriteBox from "../components/WriteBox";

function Community() {
  const [isWrite, setIsWrite] = useState(false);

  const onWriteClick = () => {
    setIsWrite(true);
  };
  return (
    <>
      <p>Community</p>

      {isWrite ? (
        <WriteBox />
      ) : (
        <>
          <ButtonPrimary onClick={onWriteClick}>글쓰기</ButtonPrimary>
          <div>커뮤니티 목록</div>
        </>
      )}
    </>
  );
}

export default Community;
