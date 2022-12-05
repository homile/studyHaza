import styled from 'styled-components';
import CountUp from 'react-countup';
import LogoSrc from '../../assets/adBanner.jpg';
interface Props {
  posts: object[];
}

export const AdArea = ({ posts }: Props) => {
  return (
    <BannerArea>
      <p>
        <strong>
          <CountUp duration={1} start={0} end={posts.length} />
        </strong>
        개의 스터디가
        <br />
        당신의 합류를 기다리는 중!
      </p>
    </BannerArea>
  );
};

const BannerArea = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 358px;
  background-image: url(${LogoSrc});
  border-radius: 25px;
  background-size: cover;

  p {
    font-size: 50px;
    font-family: 'Pretendard-Bold';
    text-align: center;
    line-height: 1.1em;
    padding-top: 1.5rem;

    strong {
      font-size: 58px;
    }
  }
`;
