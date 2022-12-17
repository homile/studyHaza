import { StudyContents } from '../components/UI/StudyContents';
import { AdArea } from '../components/UI/AdArea';
import { NavLink } from 'react-router-dom';
import { ButtonPrimary } from '../components/UI/Button/Button';
import styled from 'styled-components';
import { communityDataType } from '../components/UI/StudyCard'

interface Props {
  posts: communityDataType[],
  postsTotal: object[],
}


function Main({ posts, postsTotal }: Props) {
  return (
    <Container>
      <AdArea posts={postsTotal} />
      <ConPanel>
        <StudyContents posts={posts} />

        <div className="button-area">
          <NavLink to="/studyjoin">
            <ButtonPrimary>+ 더보기</ButtonPrimary>
          </NavLink>
        </div>
      </ConPanel>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  max-width: 1290px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
`;

const ConPanel = styled.div`
  width: 100%;
  padding: 50px 0 25px;

  .button-area {
    display: flex;
    justify-content: center;
    padding: 60px 0 30px;
  }
`;
