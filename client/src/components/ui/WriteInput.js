import styled from "styled-components";

export const WriteInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 100%;

  label {
    font-size: 17px;
    font-family: "Pretendard-Medium";
  }

  input {
    width: ${(props) => props.width || "100%"};
    height: 50px;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    font-size: 18px;
    padding: 0 1.5rem;
    margin-top: 8px;
  }

  textarea {
    width: 100%;
    height: ${(props) => props.height || "600px"};
    border: 1px solid #eeeeee;
    border-radius: 10px;
    font-size: 18px;
    padding-top: 1rem;
    padding-left: 1.5rem;
    margin-top: 8px;
    margin-bottom: 1.5rem;
    resize: none;
  }

  hr {
    width: 100%;
    border: 0.5px solid #e1e1e1;
    margin: 33px 0;
  }

  span {
    position: relative;
    right: 2rem;
    font-size: 18px;
    font-family: "Pretendard-Medium";
  }
`;
