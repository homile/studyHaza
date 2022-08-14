import React from "react";
import styled from "styled-components";
import img1 from "../images/check_icon1.png";
import img2 from "../images/check_icon2.png";

const FRONT_LIST = [
  { id: "Angular", data: "Angular" },
  { id: "Emotion", data: "Emotion" },
  { id: "GraphQL", data: "GraphQL" },
  { id: "NextJS", data: "NextJS" },
  { id: "ReactJS", data: "ReactJS" },
  { id: "VueJS", data: "VueJS" },
  { id: "Redux", data: "Redux" },
  { id: "Recoil", data: "Recoil" },
  { id: "Storybook", data: "Storybook" },
  { id: "StyledComponent", data: "StyledComponent" },
  { id: "HTML", data: "HTML" },
  { id: "CSS", data: "CSS" },
  { id: "JavaScript", data: "JavaScript" },
  { id: "TypeScript", data: "TypeScript" },
];

const BACK_LIST = [
  { id: "Apollo", data: "Apollo" },
  { id: "AWS", data: "AWS" },
  { id: "ExpressJS", data: "ExpressJS" },
  { id: "Django", data: "Django" },
  { id: "NestJS", data: "NestJS" },
  { id: "NodeJS", data: "NodeJS" },
  { id: "Spring", data: "Spring" },
  { id: "SpringBoot", data: "SpringBoot" },
  { id: "Python", data: "Python" },
  { id: "Java", data: "Java" },
  { id: "JavaScript", data: "JavaScript" },
];

const CheckBox = ({ devStack, devType, setDevStack }) => {
  const changeHandler = (checked, id) => {
    if (checked) {
      setDevStack([...devStack, id]);
    } else {
      // 체크 해제
      setDevStack(devStack.filter((el) => el !== id));
    }
  };

  console.log(devStack);

  const checkList = (devType === "frontend" ? FRONT_LIST : BACK_LIST).map(
    (item) => {
      return (
        <CheckBoxItem key={item.id}>
          <input
            id={item.id}
            defaultValue={devStack}
            type="checkbox"
            onChange={(e) => {
              changeHandler(e.currentTarget.checked, item.id);
            }}
            checked={devStack.includes(item.id) ? true : false}
          />
          <label htmlFor={item.id}>{item.data}</label>
        </CheckBoxItem>
      );
    }
  );

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
    transition: none;
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
