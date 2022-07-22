import styled from "styled-components";

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
