import styled from "styled-components";
import { useLocation } from "react-router-dom";

// 스터디 모집 글쓰기, 커뮤니티 글쓰기 컴포넌트 container

const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: antiquewhite; */
  width: 1002px;
  height: 1255px;
  border: 1px solid #e3e3e3;
  border-radius: 30px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 1000px;
  height: 134px;
  background-color: #2584f4;
  border-radius: 30px 30px 0 0;
  color: white;
  font-family: "Pretendard-Bold";
  font-size: 35px;
  padding: 2rem;
`;

const WriteBox = () => {
  const { pathname } = useLocation();
  return (
    <>
      <WriteContainer>
        <HeaderContainer>
          {pathname === "/community" ? "커뮤니티 글쓰기" : "스터디 만들기"}
        </HeaderContainer>
      </WriteContainer>
    </>
  );
};

export default WriteBox;
