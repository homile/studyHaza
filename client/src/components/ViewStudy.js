import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { ProfileImgXS } from "./ui/ProfileImg";
import { ButtonPrimary } from "./ui/Button";

import { db } from "../firebase-config";
import {
  getDoc,
  doc,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

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
                모집 구분 •{" "}
                {data.devType === "frontend" ? "프론트엔드" : "백엔드"}
              </List>
              <List>
                모집 인원 • {data.haveHeadCount} / {data.totalHeadCount}
              </List>
            </ListLine>

            <ListLine>
              <List>시작 일시 • {data.startDate}</List>
              <List>
                진행 방법 • {data.onOff === "on" ? "온라인" : "오프라인"}
              </List>
            </ListLine>
          </InnerBox>
          <InnerBox>
            <ListLine>
              <List>
                <p>주요 기술</p>
                <p>{data.devStack}</p>
              </List>
            </ListLine>
          </InnerBox>
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
