import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserInfo } from "../../actions";

import { db } from "../../firebase-config";
import { getAuth, deleteUser } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useSelector((state) => state.loginReducer.id);

  const auth = getAuth();
  const user = auth.currentUser;
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const signOutHandler = () => {
    deleteUser(user).then(() => {
      dispatch(logoutUserInfo());
      deleteDoc(doc(db, "users", id));
      navigate('/');
    }).catch((error) => {
    });
  };

  const signOutClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <SideBarContainer>
      <div className="sidebartitle">
        <span>마이페이지</span>
      </div>
      <div className="sidebarcontent">
        <div>
          <SideBarText>
            <i className="fa-solid fa-user" />
            회원수정
          </SideBarText>
          <SideBarText>
            <i className="fa-solid fa-pencil" />
            작성한 글
          </SideBarText>
          <SideBarText>
            <i className="fa-solid fa-book-open" />
            나의 스터디
          </SideBarText>
        </div>
        <div>
          <SideBarText onClick={signOutClick}>
            <i className="fa-solid fa-shoe-prints" />
            회원탈퇴
          </SideBarText>
        </div>
      </div>
      {isOpen && (
        <Modal
          handleModal={signOutHandler}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          회원을 탈퇴하면 작성한 게시물에 접근할 수 없습니다. 정말로
          탈퇴하시겠습니까?
        </Modal>
      )}
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 230px;
  height: 340px;
  margin-right: 26px;

  a {
    text-decoration: none;
  }

  .sidebartitle {
    margin: 1rem 0;
    font-family: "Pretendard-ExtraBold";
  }

  span {
    font-size: 30px;
  }

  .sidebarcontent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;

const SideBarText = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  height: 40px;
  font-family: "Pretendard-Medium";
  border-radius: 0 0.5rem 0.5rem 0;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
    border-left: 0.5rem solid #2584f4;
    padding-left: 1rem;
  }

  i {
    padding-right: 0.7rem;
    color: #c6c6c6;
  }
`;
