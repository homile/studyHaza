import styled from "styled-components";

// 로그인 버튼
export const ButtonLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard-Medium";
  width: ${(props) => props.width || "100%"};
  height: 54px;
  font-size: 20px;
  color: ${(props) => props.color || "white"};
  background: ${(props) => props.background || "#2584f4"};
  border: 1px solid ${(props) => props.borderColor || "none"};
  border-radius: 0.5rem;
  margin: 0.6rem 0;
  cursor: pointer;

  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

// Nav 로그인 & 회원가입 버튼, 글쓰기 버튼, 더보기 버튼
export const ButtonPrimary = styled.button`
  background: ${(props) => props.background || "#2584f4"};
  color: ${(props) => props.color || "white"};
  border-radius: 50px;
  width: ${(props) => props.width || "143px"};
  height: ${(props) => props.width || "50px"};
  transition-duration: 0.4s;
  font-size: 20px;
  font-weight: 600;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.background || "#2863fb"};
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
