import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;
  width: 100%;
  height: ${(props) => props.height || "90px" };
  margin-bottom: 1.5rem;

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
    height: 100%;
  }

  i {
    position: absolute;
    top: 1.1rem;
    left: 1rem;
    color: ${(props) => props.color || "#CCCCCC"};
  }
`;


export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;
  width: 100%;
  height: ${(props) => props.height || "90px" };

  label {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 17px;
    font-family: "Pretendard-Medium";
  }

  input {
    width: 100%;
    height: 40px;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 0;
    font-size: 16px;
    text-indent: 1.2rem;
  }

  div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  i {
    position: absolute;
    top: 1.75rem;
    left: 1rem;
    color: ${(props) => props.color || "#CCCCCC"};
  }
`;