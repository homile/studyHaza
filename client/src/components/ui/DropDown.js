import styled from "styled-components";

export const MyPageDropDown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  width: 8rem;
  padding: 0.5rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 10;
  background-color: white;
  right: 0;
  top: 15x;

  hr {
    width: 100%;
    border: 0.5px solid lightgray;
  }
`;
