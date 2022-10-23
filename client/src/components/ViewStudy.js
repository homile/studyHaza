import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ProfileImgXS } from "./ui/ProfileImg";
import { ButtonPrimary } from "./ui/Button";
import { db } from "../firebase-config";
import { query, collection, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

const frontStacks = [
  "Angular",
  "Emotion",
  "GraphQL",
  "NextJS",
  "ReactJS",
  "VueJS",
  "Redux",
  "Recoil",
  "Storybook",
  "StyledComponent",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
];

const backStacks = [
  "Apollo",
  "AWS",
  "ExpressJS",
  "Django",
  "NestJS",
  "NodeJS",
  "Spring",
  "SpringBoot",
  "Python",
  "Java",
  "JavaScript",
];

const stackBackgrounds = [
  { stack: "Angular", color: "#DD0031" },
  { stack: "Emotion", color: "#E19EDC" },
  { stack: "GraphQL", color: "#E10098" },
  { stack: "NextJS", color: "#000000" },
  { stack: "ReactJS", color: "#61DAFB" },
  { stack: "VueJS", color: "#4FC08D" },
  { stack: "Redux", color: "#764ABC" },
  { stack: "Recoil", color: "#007AF4" },
  { stack: "Storybook", color: "#FF4785" },
  { stack: "StyledComponent", color: "#DB7093" },
  { stack: "HTML", color: "#E34F26" },
  { stack: "CSS", color: "#1572B6" },
  { stack: "JavaScript", color: "#F7DF1E" },
  { stack: "TypeScript", color: "#3178C6" },
  { stack: "Apollo", color: "#311C87" },
  { stack: "AWS", color: "#232F3E" },
  { stack: "ExpressJS", color: "#000000" },
  { stack: "Django", color: "#092E20" },
  { stack: "NestJS", color: "#000000" },
  { stack: "NodeJS", color: "#339933" },
  { stack: "Spring", color: "#6DB33F" },
  { stack: "SpringBoot", color: "#6DB33F" },
  { stack: "Python", color: "#3776AB" },
  { stack: "Java", color: "#D9D9D9" },
];

function ViewStudy() {
  const { id } = useParams();
  const [data, setData] = useState({});

  const nickName = useSelector((state) => state.loginReducer.nickName);
  const photoUrl = useSelector((state) => state.loginReducer.photoUrl);

  const getPosts = async () => {
    const q = query(collection(db, "posts"), where("id", "==", id));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setData(doc.data());
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  const pick = (i) => {
    const filtered = stackBackgrounds
      .filter((el) => el.stack === i)
      .map((el) => el.color);
    return filtered;
  };

  const devStackWord = (devType, skill) => {
    let a = "";
    let idx = "";
    if (devType === "frontend") {
      idx = frontStacks.findIndex((el) => el === skill);
      a = "fe";
    }

    if (devType === "backend") {
      idx = backStacks.findIndex((el) => el === skill);
      a = "be";
    }

    if (idx >= 9) {
      return `sk_${a}${idx + 1}`;
    } else {
      return `sk_${a}${idx + 1}`;
    }
  };

  return (
    <>
      <ViewContainer>
        <Title>{data.title}</Title>
        <Info>
          <ProfileImgXS
            src={
              photoUrl === ""
                ? "https://avatars.githubusercontent.com/u/56163157?v=4"
                : photoUrl
            }
          />
          <Writer>{nickName}</Writer>
          <hr />
          <Date>{data.dateCreated}</Date>
        </Info>
        <DevInfo>
          <InnerBox>
            <ListLine>
              <List>
                모집 구분 <Dot>•</Dot>{" "}
                <span>
                  {data.devType === "frontend" ? "프론트엔드" : "백엔드"}
                </span>
              </List>
              <List>
                모집 인원 <Dot>•</Dot>{" "}
                <span>
                  {data.haveHeadCount} / {data.totalHeadCount}
                </span>
              </List>
            </ListLine>

            <ListLine>
              <List>
                시작 일시 <Dot>•</Dot> <span>{data.startDate}</span>
              </List>
              <List>
                진행 방법 <Dot>•</Dot>{" "}
                <span>{data.onOff === "on" ? "온라인" : "오프라인"}</span>
              </List>
            </ListLine>
          </InnerBox>
          <DevInnerBox>
            <ListLine>
              <DevList>
                <div>주요 기술</div>
                <DevStackList>
                  {data.devStack &&
                    data.devStack.map((el, idx) => {
                      return (
                        <li key={idx} style={{ background: pick(el) }}>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              `/skill/${devStackWord(
                                data.devType,
                                `${el}`
                              )}.png`
                            }
                            alt=""
                          />
                          <div>{el}</div>
                        </li>
                      );
                    })}
                </DevStackList>
              </DevList>
            </ListLine>
          </DevInnerBox>
        </DevInfo>
        <Content>{data.content}</Content>
        <ButtonBox>
          <ButtonPrimary background="#2863FB">참여하기</ButtonPrimary>
        </ButtonBox>
      </ViewContainer>
    </>
  );
}

export default ViewStudy;

const ViewContainer = styled.div`
  height: 800px;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  margin: 2rem 0;
  padding: 3rem;
  display: flex;
  flex-direction: column;

  hr {
    width: 100%;
    border: thin solid #747474;

    margin-bottom: 33px;
  }
`;

const Title = styled.h1`
  font-family: "Pretendard-Regular";
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.03em;
`;

const DevInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 188px;
  background: #f9f9f9;
  border: 1px solid #e1e1e1;
  border-radius: 15px;
  margin: 1.5rem 0;
  padding: 30px 35px;
`;

const ListLine = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.span`
  margin-right: 3rem;
  margin-bottom: 1.5rem;

  p {
    margin-bottom: 10px;
  }

  span {
    font-weight: bold;
  }
`;

const Content = styled.div`
  height: 40%;
  font-family: "Pretendard-Regular";
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  margin-top: 1rem;
  padding-left: 3px;
`;

const Info = styled.div`
  width: 210px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;

  hr {
    width: 10px;
    border: 1px solid #d2d2d2;
    transform: rotate(90deg);
    margin: auto;
  }
`;

const Writer = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin: 0 5px;
`;

const Date = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin: 0 5px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const InnerBox = styled.div`
  display: flex;
`;

const DevInnerBox = styled.div``;

const DevList = styled.div`
  div {
    margin-bottom: 7px;
  }

  img {
    width: 30px;
  }
`;

const DevStackList = styled.ul`
  width: 100%;
  display: flex;
  gap: 10px;

  li {
    display: flex;
    align-items: center;
    color: white;
    border-radius: 8px;
    font-weight: bold;

    div {
      padding: 5px 10px 0 0;
    }
  }
`;

const Dot = styled.span`
  color: #e1e1e1;
`;
