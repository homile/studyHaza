import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;
  width: 100%;
  height: 90px;
  margin-bottom: 1rem;

  label {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 17px;
    font-family: "Pretendard-Medium";
  }

  input {
    width: 100%;
    height: 50px;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 0;
    font-size: 18px;
    text-indent: 2.5rem;
  }

  div {
    position: relative;
    width: 100%;
  }

  i {
    position: absolute;
    top: 1.1rem;
    left: 1rem;
  }
`;
