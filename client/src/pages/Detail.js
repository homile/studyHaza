import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ViewStudy from "../components/ViewStudy";
import { ButtonSecondary } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ViewCommunity from "../components/ViewCommunity";
import {
  deleteDoc,
  query,
  collection,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { useParams } from "react-router-dom";
import Modal from "../components/Modal";
import PostEditor from "../components/PostEditor";

function Detail({ isEdit, toggleIsEdit }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({});

  const pathName = useLocation().pathname.split("/")[1];

  const [isOpenOk, setIsOpenOk] = useState(false);
  const [isOpenCancel, setIsOpenCancel] = useState(false);

  const getPosts = async () => {
    const q = query(collection(db, "posts"), where("id", "==", id));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setData(doc.data());
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  const openModalHandler1 = () => {
    setIsOpenOk(!isOpenOk);
  };

  const openModalHandler2 = () => {
    setIsOpenCancel(!isOpenCancel);
  };

  const deletePost = async () => {
    const q = query(collection(db, "posts"), where("id", "==", id));
    const data = await getDocs(q);
    try {
      if (data.docs.length !== 0) {
        await deleteDoc(data.docs[0].ref);
      }
      navigate("/");
      window.location.reload();
    } catch {
      console.log("Not delete");
    }
  };

  const onUpdatePost = async (el) => {
    console.log(el);
    const q = query(collection(db, "posts"), where("id", "==", id));
    const data = await getDocs(q);
    try {
      if (data.docs.length !== 0) {
        await updateDoc(data.docs[0].ref, el);
      }
      toggleIsEdit();
      window.location.reload();
    } catch {
      console.log("Not Update");
    }
  };

  // const handleQuitEdit = () => {
  //   setEditData(initialData);
  //   // toggleIsEdit(false);
  // };

  return (
    <Container>
      {isEdit ? (
        <PostEditor
          isEdit={isEdit}
          data={data}
          onUpdatePost={onUpdatePost}
          toggleIsEdit={toggleIsEdit}
        />
      ) : (
        <>
          {pathName === "community" ? (
            <ViewCommunity />
          ) : (
            <ViewStudy data={data} id={id} />
          )}
        </>
      )}
      {!isEdit && (
        <ButtonContainer>
          <ButtonSecondary
            width="126px"
            onClick={() => {
              pathName === "community"
                ? navigate("/community")
                : navigate("/studyjoin");
            }}
          >
            목록으로
          </ButtonSecondary>
          <ButtonRightBox>
            <ButtonSecondary onClick={toggleIsEdit}>수정</ButtonSecondary>
            <ButtonSecondary onClick={openModalHandler1}>삭제</ButtonSecondary>

            {isOpenCancel && (
              <Modal
                isOpen={isOpenCancel}
                // handleModal={handleQuitEdit}
                setIsOpen={setIsOpenCancel}
              >
                수정을 취소하시겠습니까?
              </Modal>
            )}

            {isOpenOk && (
              <Modal
                isOpen={isOpenOk}
                handleModal={deletePost}
                setIsOpen={setIsOpenOk}
              >
                정말로 글을 삭제하시겠습니까?
              </Modal>
            )}
          </ButtonRightBox>
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
