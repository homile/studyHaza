import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ImgObject from "../images/icon_team3.png";

const ModalSucces = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const openModalHandler = () => {
    setIsOpen(!isOpen);
    navigate("/login");
  };

  return (
    <>
    {isOpen &&
      <StyledModal className="modal" onClick={openModalHandler}>
        <StyledModalCon onClick={(e) => e.stopPropagation()}>
          <div className="modal-body soon">
            <div>
              <b>회원가입 완료</b>
              <p>스터디하자에 오신것을 환영합니다!</p>
              <img className="icon-team3" src={ImgObject} alt=""></img>
            </div>
          </div>
          <StyledModalFooter>
            <button
              type="button"
              className="btn-modal cta"
              onClick={openModalHandler}
            >
              확인
            </button>
          </StyledModalFooter>
        </StyledModalCon>
      </StyledModal>}
    </>
  );
};

export default ModalSucces;

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.75);
`;
const StyledModalCon = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 450px;
  min-height: 500px;
  margin: 0 auto;
  text-align: center;
  background: #fff;
  border-radius: 30px;
  * {
    flex: 1 0;
  }
  .modal-body {
    display: flex;
    align-items: center;
    b {
      display: inline-block;
      padding-bottom: 16px;
      font-size: 40px;
      font-family: "Pretendard-ExtraBold";
    }
    p,
    strong {
      font-size: 26px;
    }
    .icon-team3 {
      margin-top: 20px;
      width: 187px;
    }
  }
`;
const StyledModalFooter = styled.div`
  overflow: hidden;
  display: flex;
  flex: none;
  height: 78px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  button {
    font-size: 20px;
    font-weight: 500;
  }
  .btn-modal.cta {
    background: #2584f4;
    color: #fff;
  }
  .btn-modal.cta:hover {
    background: #2863fb;
    color: #fff;
  }
`;
