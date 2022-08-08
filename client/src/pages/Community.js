import React, { useEffect, useState } from "react";
import { ButtonPrimary } from "../components/ui/Button";
import WriteBox from "../components/WriteBox";

import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

function Community() {
  const [isWrite, setIsWrite] = useState(false);

  const onWriteClick = () => {
    setIsWrite(true);
  };

  // console.log("Document written with ID: ", postsCollectionRef);

  return (
    <>
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
