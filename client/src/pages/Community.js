import React, { useEffect, useState } from "react";
import { ButtonPrimary } from "../components/ui/Button";
import { NavLink } from "react-router-dom";
import WrtieCommunity from "../components/WrtieCommunity";

function Community() {
  const [isWrite, setIsWrite] = useState(false);

  const onWriteClick = () => {
    setIsWrite(true);
  };
  return (
    <>
      <p>Community</p>

      {isWrite ? (
        <WrtieCommunity />
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
