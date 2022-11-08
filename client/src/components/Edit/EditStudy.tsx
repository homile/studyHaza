import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonSecondary } from '../UI/Button/Button';
import { WriteInputContainer } from '../Post/UI/PostInput';
import { SelectBox } from '../Post/UI/SelectBox';
import { DatePick } from '../Post/UI/DatePick';
import CheckBox from '../Post/UI/CheckBox';
import Modal from '../UI/Modal/Modal';

const devTypeOptions = [
  { value: 'frontend', name: '프론트엔드' },
  { value: 'backend', name: '백엔드' },
];

const onOffOptions = [
  { value: 'on', name: '온라인' },
  { value: 'off', name: '오프라인' },
];

type dataType = {
  board: string;
  content: string;
  dateCreated: string;
  dateUpdated: string;
  devStack: string[];
  devType: string;
  haveHeadCount: number;
  id: string;
  nickName: string;
  onOff: string;
  startDate: Date;
  title: string;
  totalHeadCount: number;
};

interface Props {
  data: dataType;
  onUpdatePost: (editData: object) => void;
  toggleIsEdit: () => void;
}

const EditStudy = ({ data, onUpdatePost, toggleIsEdit }: Props) => {
  console.log(data);
  const [editTitle, setEditTitle] = useState(data.title);
  const [editStartDate, setEditStartDate] = useState(new Date(data.startDate));
  const [editDevType, setEditDevType] = useState(data.devType);
  const [editDevStack, setEditDevStack] = useState(data.devStack);
  const [editTotalHeadCount, setEditTotalHeadCount] = useState(
    data.totalHeadCount,
  );
  const [editOnOff, setEditOnOff] = useState(data.onOff);
  const [editContent, setEditContent] = useState(data.content);
  const dateUpdated = new Date().toLocaleDateString();

  const [isOpenOk, setIsOpenOk] = useState(false);
  const [isOpenCancel, setIsOpenCancel] = useState(false);

  const editData = {
    title: editTitle,
    startDate: editStartDate.toLocaleDateString(),
    devType: editDevType,
    devStack: editDevStack,
    totalHeadCount: editTotalHeadCount,
    onOff: editOnOff,
    content: editContent,
    dateUpdated,
  };

  // 수정 완료 버튼
  const handleEdit = () => {
    onUpdatePost(editData);
  };

  // 수정 취소
  const handleInit = () => {
    toggleIsEdit();
    setEditTitle(data.title);
    setEditStartDate(data.startDate);
    setEditDevType(data.devType);
    setEditDevStack(data.devStack);
    setEditTotalHeadCount(data.totalHeadCount);
    setEditOnOff(data.onOff);
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
        </WriteInputContainer>
        <DivContainer>
          <WriteInputContainer width="95%">
            <label htmlFor="title">시작일자</label>
            <DatePick
              startDate={editStartDate}
              setStartDate={setEditStartDate}
            />
          </WriteInputContainer>
          <WriteInputContainer>
            <label htmlFor="title">모집구분</label>
            <div>
              <SelectBox
                defaultValue={editDevType}
                options={devTypeOptions}
                devTypeOptions={devTypeOptions}
                setDevType={setEditDevType}
                setDevStack={setEditDevStack}
              ></SelectBox>
            </div>
          </WriteInputContainer>
        </DivContainer>
        <DivContainer>
          <WriteInputContainer width="95%">
            <label htmlFor="title">모집인원</label>
            <div>
              <input
                type="number"
                name="editTotalHeadCount"
                value={editTotalHeadCount}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEditTotalHeadCount(Number(e.target.value))
                }
                placeholder="ex) 10"
              />
              <span>명</span>
            </div>
          </WriteInputContainer>

          <WriteInputContainer>
            <label htmlFor="title">진행방식</label>
            <div>
              <SelectBox
                defaultValue={editOnOff}
                options={onOffOptions}
                setOnOff={setEditOnOff}
              ></SelectBox>
            </div>
          </WriteInputContainer>
        </DivContainer>

        <CheckBox
          setDevStack={setEditDevStack}
          devType={editDevType}
          devStack={editDevStack}
        />
        <WriteInputContainer height="300px">
          <label htmlFor="content">모집 상세</label>
          <div>
            <textarea
              name="editContent"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              id="content"
              placeholder="모집 상세 내용을 입력해주세요."
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

export default EditStudy;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1050px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  margin-bottom: 2rem;
  padding: 49px 55px 0px 55px;
`;

const DivContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
