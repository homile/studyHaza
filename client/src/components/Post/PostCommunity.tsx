import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { db } from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { WriteInputContainer } from './UI/PostInput';
import { ButtonPrimary } from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../../redux/reducers';

interface Props {
  setIsWrite: (isWrite: boolean) => void;
}

function PostCommunity({ setIsWrite }: Props) {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dateCreated = new Date();
  const nickName = useSelector(
    (state: RootState) => state.loginReducer.nickName,
  );

  const [isOpenOk, setIsOpenOk] = useState(false);
  const [isOpenCancel, setIsOpenCancel] = useState(false);

  // 완료 버튼 클릭시
  const openModalHandler1 = () => {
    setIsOpenOk(!isOpenOk);
  };

  // 취소 버튼 클릭시
  const openModalHandler2 = () => {
    setIsOpenCancel(!isOpenCancel);
  };

  // 글 내용 초기화
  const handleInit = () => {
    setTitle('');
    setContent('');
    setIsWrite(false);
  };

  const postsCollectionRef = collection(db, 'posts');

  // firestore에 데이터 올리기
  const createPosts = async () => {
    const id = uuidv4();
    await addDoc(postsCollectionRef, {
      board: 'community',
      content,
      dateCreated: dateCreated.toLocaleDateString(),
      id,
      nickName,
      title,
    });
    navigate(`/community/detail/${id}`);
  };

  return (
    <>
      <WriteInputContainer>
        <label htmlFor="title">제목</label>
        <div>
          <input
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            id="community_title"
            placeholder="제목을 입력해주세요."
          />
        </div>
        <hr />
      </WriteInputContainer>

      <WriteInputContainer height="350px">
        <label htmlFor="content">내용</label>
        <div>
          <textarea
            defaultValue={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            id="community_content"
            placeholder="내용을 입력해주세요."
          />
        </div>
      </WriteInputContainer>
      <ButtonContainer>
        <ButtonPrimary onClick={openModalHandler2} background="#B6B6B6">
          취소
        </ButtonPrimary>
        {isOpenCancel && (
          <Modal
            isOpen={isOpenCancel}
            handleModal={handleInit}
            setIsOpen={setIsOpenCancel}
          >
            등록을 취소하시겠습니까?
          </Modal>
        )}
        <ButtonPrimary onClick={openModalHandler1}>작성완료</ButtonPrimary>
        {isOpenOk && (
          <Modal
            isOpen={isOpenOk}
            handleModal={createPosts}
            setIsOpen={setIsOpenOk}
          >
            커뮤니티 글을 등록하시겠습니까?
          </Modal>
        )}
      </ButtonContainer>
    </>
  );
}

export default PostCommunity;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
