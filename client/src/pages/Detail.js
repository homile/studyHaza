import React, { useState } from "react";
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
} from "firebase/firestore";
import { db } from "../firebase-config";
import { useParams } from "react-router-dom";
import Modal from "../components/Modal";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const pathName = useLocation().pathname.split("/")[1];

  const [isOpenOk, setIsOpenOk] = useState(false);

  const openModalHandler = () => {
    setIsOpenOk(!isOpenOk);
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

  return (
    <Container>
      {pathName === "community" ? <ViewCommunity /> : <ViewStudy />}
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
          <ButtonSecondary>수정</ButtonSecondary>
          <ButtonSecondary onClick={openModalHandler}>삭제</ButtonSecondary>
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
