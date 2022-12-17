import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import DetailStudy from '../components/Detail/DetailStudy';
import { ButtonSecondary } from '../components/UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import DetailCommunity from '../components/Detail/DetailCommunity';
import {
  deleteDoc,
  query,
  collection,
  where,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase-config';
import { useParams } from 'react-router-dom';
import Modal from '../components/UI/Modal/Modal';
import EditStudy from '../components/Edit/EditStudy';
import EditCommunity from '../components/Edit/EditCommunity';
import { RootState } from '../redux/store';

interface Props {
  isEdit: boolean;
  toggleIsEdit: () => void;
}

type idParams = {
  id: string;
};

function Detail({ isEdit, toggleIsEdit }: Props) {
  const nickName = useSelector(
    (state: RootState) => state.loginReducer.nickName,
  );

  const { id } = useParams<idParams>();
  const navigate = useNavigate();
  const pathName = useLocation().pathname.split('/')[1];

  const [data, setData] = useState(Object);
  const [isOpenOk, setIsOpenOk] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const getPosts = async () => {
    const q = query(collection(db, 'posts'), where('id', '==', id));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setData(doc.data());
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  // 글쓴이만 수정, 삭제 버튼보이도록
  useEffect(() => {
    if (nickName === data.nickName) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [data.nickName, nickName]);

  const openModalHandler1 = () => {
    setIsOpenOk(!isOpenOk);
  };

  // 글 삭제
  const onDeletePost = async () => {
    const q = query(collection(db, 'posts'), where('id', '==', id));
    const data = await getDocs(q);
    try {
      if (data.docs.length !== 0) {
        await deleteDoc(data.docs[0].ref);
      }
      pathName === 'community' ? navigate('/community') : navigate('/');

      window.location.reload();
    } catch {
      // console.log("Not delete");
    }
  };

  // 글 수정
  const onUpdatePost = async (el: object) => {
    const q = query(collection(db, 'posts'), where('id', '==', id));
    const data = await getDocs(q);
    try {
      if (data.docs.length !== 0) {
        await updateDoc(data.docs[0].ref, el);
      }
      if (toggleIsEdit) toggleIsEdit();
      window.location.reload();
    } catch {
      // console.log('Not Update');
    }
  };
  return (
    <Container>
      {isEdit ? (
        <>
          {pathName === 'community' ? (
            <EditCommunity
              data={data}
              onUpdatePost={onUpdatePost}
              toggleIsEdit={toggleIsEdit}
            />
          ) : (
            <EditStudy
              data={data}
              onUpdatePost={onUpdatePost}
              toggleIsEdit={toggleIsEdit}
            />
          )}
        </>
      ) : (
        <>
          {pathName === 'community' ? (
            <DetailCommunity data={data} />
          ) : (
            <DetailStudy data={data} />
          )}
        </>
      )}
      {!isEdit && (
        <ButtonContainer>
          <ButtonSecondary
            width="126px"
            onClick={() => {
              pathName === 'community'
                ? navigate('/community')
                : navigate('/studyjoin');
            }}
          >
            목록으로
          </ButtonSecondary>

          {isShow && (
            <>
              <ButtonRightBox>
                <ButtonSecondary onClick={toggleIsEdit}>수정</ButtonSecondary>
                <ButtonSecondary onClick={openModalHandler1}>
                  삭제
                </ButtonSecondary>

                {isOpenOk && (
                  <Modal
                    isOpen={isOpenOk}
                    handleModal={onDeletePost}
                    setIsOpen={setIsOpenOk}
                  >
                    정말로 글을 삭제하시겠습니까?
                  </Modal>
                )}
              </ButtonRightBox>
            </>
          )}
        </ButtonContainer>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  max-width: 900px;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonRightBox = styled.span`
  display: flex;
  justify-content: space-between;
  width: 19%;
  gap: 10px;
`;
