import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ProfileImgXS } from '../UI/Img/ProfileImg';
import { RootState } from '../../redux/store';

type dataType = {
  board: string;
  content: string;
  dateCreated: string;
  id: string;
  nickName: string;
  title: string;
};

interface Props {
  data: dataType;
}
function DetailCommunity({ data }: Props) {
  const photoUrl = useSelector(
    (state: RootState) => state.loginReducer.photoUrl,
  );

  return (
    <>
      <ViewContainer>
        <Title>{data.title}</Title>
        <Info>
          <ProfileImgXS
            src={
              photoUrl === ''
                ? 'https://avatars.githubusercontent.com/u/56163157?v=4'
                : photoUrl
            }
          />
          <Writer>{data.nickName}</Writer>
          <hr />
          <Date>{data.dateCreated}</Date>
        </Info>
        <hr />
        <Content>{data.content}</Content>
      </ViewContainer>
    </>
  );
}

export default DetailCommunity;

const ViewContainer = styled.div`
  height: 650px;
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
  font-family: 'Pretendard-Regular';
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.03em;
`;

const Content = styled.div`
  font-family: 'Pretendard-Regular';
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  margin-left: 8px;
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
