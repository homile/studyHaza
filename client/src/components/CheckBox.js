import React, { useState } from "react";
import styled from "styled-components";
import img1 from "../images/check_icon1.png";
import img2 from "../images/check_icon2.png";

const FRONT_LIST = [
  { id: 0, data: "Angular" },
  { id: 1, data: "Emotion" },
  { id: 2, data: "GraphQL" },
  { id: 3, data: "NextJS" },
  { id: 4, data: "ReactJS" },
  { id: 5, data: "VueJS" },
  { id: 6, data: "Redux" },
  { id: 7, data: "Recoil" },
  { id: 8, data: "Storybook" },
  { id: 9, data: "StyledComponent" },
  { id: 10, data: "HTML" },
  { id: 11, data: "CSS" },
  { id: 12, data: "JavaScript" },
  { id: 13, data: "TypeScript" },
];

const BACK_LIST = [
  { id: 0, data: "Apollo" },
  { id: 1, data: "AWS" },
  { id: 2, data: "ExpressJS" },
  { id: 3, data: "Django" },
  { id: 4, data: "NestJS" },
  { id: 5, data: "NodeJS" },
  { id: 6, data: "Spring" },
  { id: 7, data: "SpringBoot" },
  { id: 5, data: "Python" },
  { id: 6, data: "Java" },
  { id: 7, data: "JavaScript" },
];

const CheckBox = () => {
  const [checkedInputs, setCheckedInputs] = useState([]);

  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
    } else {
      // 체크 해제
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
    }
  };

  // devTypeOptions value에 따라 FRONT_LIST, BACK_LIST가 바뀌도록 수정해야 함
  const checkList = FRONT_LIST.map((item) => {
    return (
      <CheckBoxItem key={item.id}>
        <input
          id={item.id}
          type="checkbox"
          onChange={(e) => {
            changeHandler(e.currentTarget.checked, { item });
          }}
        />
        <label htmlFor={item.id}>{item.data}</label>
      </CheckBoxItem>
    );
  });

  return (
    <CheckBoxContainer>
      <hr />
      <label htmlFor="title">주요 기술</label>
      <ListContainer>{checkList}</ListContainer>
    </CheckBoxContainer>
  );
};

export default CheckBox;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 50px;

  label {
    font-size: 17px;
    font-family: "Pretendard-Medium";
    margin-bottom: 0.2rem;
  }

  input {
    margin-top: 8px;
    border-radius: 50px;
  }

  hr {
    width: 100%;
    border: 0.5px solid #e1e1e1;
    margin: 40px 0 50px 0;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const CheckBoxItem = styled.div`
  display: flex;
  margin-right: 5rem;
  margin-bottom: 0.5rem;

  label {
    position: relative;
    top: 30%;
    margin-left: 0.5rem;
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid #d9d9d9;
    border-radius: 50%;
    cursor: pointer;
    width: 28px;
    height: 28px;
    background: url(${img1}) no-repeat 50% 50%/15px auto #d9d9d9;
  }

  input[type="checkbox"]::after {
    background: url(${img2}) no-repeat 10% 100%/25px auto;
    content: "";
    display: none;
    width: 28px;
    height: 28px;
    position: relative;
  }

  input[type="checkbox"]:checked {
    background: #2584f4;
    border: 1px solid #2584f4;
    animation: none;
  }

  input[type="checkbox"]:checked::after {
    display: block;
  }

  label {
    font-size: 17px;
    font-family: "Pretendard-Medium";
  }
`;
