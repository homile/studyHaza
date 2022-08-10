import React, { useState } from "react";
import { ButtonPrimary } from "../components/ui/Button";
import WriteBox from "../components/WriteBox";

function Community() {
  const [isWrite2, setIsWrite2] = useState(false);

  const onWriteClick2 = () => {
    setIsWrite2(true);
  };

  return (
    <>
      {isWrite2 ? (
        <WriteBox setIsWrite2={setIsWrite2} />
      ) : (
        <>
          <ButtonPrimary onClick={onWriteClick2}>글쓰기</ButtonPrimary>
          <div>커뮤니티 목록</div>
        </>
      )}
    </>
  );
}

export default Community;
