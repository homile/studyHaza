import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import PostCommunity from './PostCommunity';
import PostStudy from './PostStudy';

interface Props {
  setIsWrite: (isWrite: boolean) => void;
}

interface StyleProps {
  community: boolean;
}

// 스터디 모집 글쓰기, 커뮤니티 글쓰기 컴포넌트 container
const WriteBox = ({ setIsWrite }: Props) => {
  const { pathname } = useLocation();

  return (
    <WrapPanel>
      <HeaderContainer>
        {pathname === '/community' ? '커뮤니티 글쓰기' : '스터디 만들기'}
      </HeaderContainer>

      <WriteContainer community={pathname === '/community' ? true : false}>
        {pathname === '/community' ? (
          <PostCommunity setIsWrite={setIsWrite} />
        ) : (
          <PostStudy setIsWrite={setIsWrite} />
        )}
      </WriteContainer>
    </WrapPanel>
  );
};

export default WriteBox;

const WrapPanel = styled.div`
  width: 1000px;
  margin: 0 auto;
  background-color: #fff;
`;

const WriteContainer = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) => (props.community ? '700px' : '1230px')};
  border: 1px solid #e3e3e3;
  border-radius: 0 0 30px 30px;
  margin-bottom: 6rem;
  padding: 49px 55px 0px 55px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 134px;
  background-color: #2584f4;
  border-radius: 30px 30px 0 0;
  color: white;
  font-family: 'Pretendard-Bold';
  font-size: 35px;
  padding-left: 55px;
  padding-bottom: 29px;
`;
