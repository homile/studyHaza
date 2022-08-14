import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ProfileImgXS } from "./ui/ProfileImg";

function ViewCommunity() {
  const nickName = useSelector((state) => state.loginReducer.nickName);
  const photoUrl = useSelector((state) => state.loginReducer.photoUrl);

  return (
    <>
      <ViewContainer>
        <Title>스터디하자 후기!</Title>
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
          <Date>2022.08.14</Date>
        </Info>
        <hr />
        <Content>
          여기는 자유게시판이니까 진짜 아무말이나 작성할게요 <br />
          ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ 저는 정말 잘 하지는 못합니다. 타고난 것도 아니고
          진짜 노력파입니다. <br />
          노력없이는 이렇게 까지 못하지 않았을까 싶네요. <br />
          지금은 좋은 스터디원 분들을 만나서 재미있게 공부를 하고 있어서 너무
          행복합니다.
        </Content>
      </ViewContainer>
    </>
  );
}

export default ViewCommunity;

const ViewContainer = styled.div`
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

const Content = styled.div`
  font-family: "Pretendard-Regular";
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  margin-top: 39px;
  margin-left: 8px;
`;

const Info = styled.div`
  width: 200px;
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
