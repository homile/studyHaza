import React, { useState } from 'react';
import styled from 'styled-components';
import ImgObject from '../images/icon_team.png';

function ModalSoon ( {children, isOpen, setIsOpen} ) {
    const openModalHandler = () => {
        setIsOpen(!isOpen)
    };

    return(
    <>
    {isOpen ? 
    <StyledModal className="modal" onClick={openModalHandler}>
        <StyledModalCon onClick={(e) => e.stopPropagation()}>
            <button type="button" className="btn-modal-cls" onClick={openModalHandler}></button>
            <div className="modal-body soon">
                <div>
                    <b>Coming Soon</b>
                    <p>{children} 준비중 입니다.</p>
                    <img className="icon-team" src ={ImgObject} alt=""></img>
                </div>
            </div>
            <StyledModalFooter className="modal-footer">
                <button type="button" className="btn-modal cta" onClick={openModalHandler}>확인</button>
            </StyledModalFooter>
        </StyledModalCon>
    </StyledModal> : null}
    {/* <button onClick={openModalHandler}>모달 여닫기</button> */}
    </>
    )
}

export default ModalSoon


const StyledModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed;
    width:100%;
    height:100vh;
    top:0;right:0;bottom:0;left:0;
    background:rgba(0,0,0, .75);
`
const StyledModalCon= styled.div`
    position:relative;
    display: flex;
    flex-direction:column;
    width: 450px;
    min-height:500px;
    margin:0 auto;
    text-align: center;
    background:#fff;
    border-radius:30px;
    * {
    flex: 1 0;
    }
    .modal-body{
        display: flex;
        align-items: center;
        b{display:inline-block;padding-bottom:16px;font-size:40px;font-family:'Pretendard-ExtraBold'}
        p, strong{font-size:26px}
        .icon-team{margin-top:20px;width:187px}
    }
`
const StyledModalFooter= styled.div`
    overflow: hidden;
    display:flex;
    flex:none;
    height:78px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    button {font-size:20px;font-weight:500}
    .btn-modal.cta{background:#2584F4;color:#fff}
    .btn-modal.cta:hover{background:#2863FB;color:#fff}
`
