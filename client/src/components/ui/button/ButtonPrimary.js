import React from "react";
import styled from "styled-components";

// Nav 로그인 버튼, 글쓰기 버튼, 더보기 버튼
function Button(props) {
  const ButtonStyle = styled.button`
    background: #2584f4;
    color: white;
    border-radius: 50px;
    width: 143px;
    height: 50px;
    transition-duration: 0.4s;
    font-size: 20px;
    font-weight: 600;
    text-align: center;

    &:hover {
      background-color: #2863fb;
      color: white;
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
  `;

  return <ButtonStyle>{props.text}</ButtonStyle>;
}

export default Button;
