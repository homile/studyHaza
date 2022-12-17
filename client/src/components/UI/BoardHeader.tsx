import { ButtonPrimary } from './Button/Button';
import styled from 'styled-components';

interface Props {
  onWriteClick: () => void;
  posts: object[];
}

const BoardHeader = ({ onWriteClick, posts }: Props) => {
  return (
    <>
      <Thead>
        <TotalNum>{posts.length}개의 글</TotalNum>
        <ButtonPrimary onClick={onWriteClick}>글쓰기</ButtonPrimary>
      </Thead>
    </>
  );
};

export default BoardHeader;

const Thead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #000;
  padding-bottom: 15px;
`;

const TotalNum = styled.span`
  font-size: 17px;
  font-family: 'Pretendard-Medium';
`;
