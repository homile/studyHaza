import { useState } from 'react';
import styled from 'styled-components';
import { WriteInputContainer } from '../Post/UI/PostInput';
import { ButtonSecondary } from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';

const EditCommunity = ({ data, onUpdatePost, toggleIsEdit }) => {
  const [editTitle, setEditTitle] = useState(data.title);
  const [editContent, setEditContent] = useState(data.content);
  const dateUpdated = new Date().toLocaleDateString();

  const [isOpenOk, setIsOpenOk] = useState(false);
  const [isOpenCancel, setIsOpenCancel] = useState(false);

  const editData = {
    title: editTitle,
    content: editContent,
    dateUpdated,
  };

  // 수정 완료 버튼
  const handleEdit = () => {
    onUpdatePost(editData);
  };

  // 수정 취소
  const handleInit = () => {
    toggleIsEdit(false);
    setEditTitle(data.title);
    setEditContent(data.content);
  };

  // 취소 모달
  const openModalHandler1 = () => {
    setIsOpenOk(!isOpenOk);
  };

  // 완료 모달
  const openModalHandler2 = () => {
    setIsOpenCancel(!isOpenCancel);
  };

  return (
    <>
      <Container>
        <WriteInputContainer>
          <label htmlFor="title">제목</label>
          <div>
            <input
              name="editTitle"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="제목을 입력해주세요."
            />
          </div>
          <hr />
        </WriteInputContainer>

        <WriteInputContainer height="350px">
          <label htmlFor="content">내용</label>
          <div>
            <textarea
              name="editContent"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              id="content"
              placeholder="내용을 입력해주세요."
            />
          </div>
        </WriteInputContainer>
      </Container>
      <ButtonContainer>
        <ButtonSecondary onClick={openModalHandler2}>취소</ButtonSecondary>
        <ButtonSecondary onClick={openModalHandler1}>완료</ButtonSecondary>
        {isOpenCancel && (
          <Modal
            isOpen={isOpenCancel}
            handleModal={handleInit}
            setIsOpen={setIsOpenCancel}
          >
            수정을 취소하시겠습니까?
          </Modal>
        )}

        {isOpenOk && (
          <Modal
            isOpen={isOpenOk}
            handleModal={handleEdit}
            setIsOpen={setIsOpenOk}
          >
            정말로 글을 수정하시겠습니까?
          </Modal>
        )}
      </ButtonContainer>
    </>
  );
};

export default EditCommunity;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 620px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  margin-bottom: 2rem;
  padding: 49px 55px 0px 55px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
