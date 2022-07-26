import styled from "styled-components";

export const AdArea = () => {
    return(
        <BannerArea>
            <p><strong>4,123</strong>개의 스터디가<br/>당신의 합류를 기다리는 중!</p>
        </BannerArea>
    )
};

const BannerArea = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:358px;
    background:#F5F5F5;
    border-radius: 25px;

    p{
        font-size:50px;
        font-family:'Pretendard-Bold';
        text-align: center;
        line-height: 1.1em;

        strong {
            font-size:58px
        }
    }
`
