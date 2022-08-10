import styled from "styled-components";

const Pagination = () => {
    return (
      <>
        <PaginationGroup>
          <ButtonPagiPrev><i class="fa-solid fa-angle-left"></i></ButtonPagiPrev>
          <ButtonPagi className="active">1</ButtonPagi>
          <ButtonPagi>2</ButtonPagi>
          <ButtonPagi>3</ButtonPagi>
          <ButtonPagi>4</ButtonPagi>
          <ButtonPagi>5</ButtonPagi>
          <ButtonPagiNext><i class="fa-solid fa-angle-right"></i></ButtonPagiNext>
        </PaginationGroup>
      </>
    )
  }

  export default Pagination


const PaginationGroup = styled.div`
display: flex;
justify-content:center;
gap:10px;
`

const ButtonPagi = styled.span`
display:flex;
justify-content: center;
align-items: center;
font-size:17px;
font-family: 'Pretendard-Medium';
width:38px;
height:38px;
background:#fff;
border-radius:5px;
cursor: pointer;

&:hover{
  background:#f1f1f1;
  opacity: 1;
}

&.active{
  background: #000;
  color:#fff;
}
`

const ButtonPagiPrev = styled(ButtonPagi)`
opacity: .3;
`

const ButtonPagiNext = styled(ButtonPagi)`
opacity: .3;
`