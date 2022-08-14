import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { ProfileImgXS } from "./ui/ProfileImg";
import { ButtonPrimary } from "./ui/Button";

function ViewStudy() {
  const nickName = useSelector((state) => state.loginReducer.nickName);
  const photoUrl = useSelector((state) => state.loginReducer.photoUrl);

  return (
    <>
      <ViewContainer>
        <Title>사이드 프로젝트 리뷰 플레이스 그룹 플러터</Title>
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
        <DevInfo>
          <InnerBox>
            <ListLine>
              <List>모집 구분 • 프론트엔드</List>
              <List>모집 인원 • 1/10</List>
            </ListLine>

            <ListLine>
              <List>시작 일시 • 2022.08.20</List>
              <List>진행 방법 • 오프라인</List>
            </ListLine>
          </InnerBox>
          <InnerBox>
            <ListLine>
              <List>
                <p>주요 기술</p>
                <p>❤️🧡💛💚💙💜🖤</p>
              </List>
            </ListLine>
          </InnerBox>
        </DevInfo>
        <Content>
          스터디 모집 페이지 구성을 진행할 생각입니다. 우선적으로 프론트엔드만
          구성을 할 것이며 추가적으로 작성을한다면
          <br />
          파이어베이스를 백엔드로 사용하여 서버까지 해보면 좋지 않을까 하는
          생각입니다. <br /> <br /> 이 스터디의 목적은 프론트엔드끼리의 협업이
          가장 큰 목표이고, React를 잘 사용할 수 있도록 <br />
          개개인의 능력을 향상하는 것이 궁극적인 목표입니다. <br /> <br />
          앞으로 누가 같이 하실지는 모르겠지만 시간은 조금 걸리더라도 흥미를
          느끼시고 <br />
          열심히 하시는 분이었으면 좋겠습니다. <br /> <br />
          참여 신청 및 개인 댓글 주시면 연락드리도록 하겠습니다. <br /> <br />
          개인 댓글 양식은 자신이 사용할 수 있는 언어 및 프레임워크,
          라이브러리를 작성해 주시고 <br />
          진행해봤던 프로젝트 포트폴리오 링크를 작성해주시면 되겠습니다.!
        </Content>
        <ButtonBox>
          <ButtonPrimary background="#2863FB">참여하기</ButtonPrimary>
        </ButtonBox>
      </ViewContainer>
    </>
  );
}

export default ViewStudy;

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

const DevInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 890px;
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

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

const InnerBox = styled.div`
  display: flex;
`;
