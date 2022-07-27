import styled from "styled-components";
import { ProfileImgXS } from "./ProfileImg";
import img from "../../images/pf_sample.png";

export const StudyCard = () => {
    const handleColorType = skill => {
        switch (skill) {
          case "Angular":
            return "sk_fe01";
          case "Emotion":
            return "sk_fe02";
          default:
            return "sk_fe03";
        }
    }

    return (
        <>  
            <ItemCard>
                <ProjectInfo>
                    <div className="date-area">
                        <span className="date-area__date"><em>D-12</em> 2022-08-20</span>
                        <ThumbnailGroup>
                            <li><ProfileImgXS src={img}/></li>
                            <li><ProfileImgXS src={img}/></li>
                            <li>+2</li>
                        </ThumbnailGroup>
                    </div>
                    <h4>사이드 프로젝트 리뷰 플레이스 그룹 플러터</h4>
                    <ul className="skill-area">
                        <li><img src={process.env.PUBLIC_URL + `/skill/${handleColorType("Angular")}.png`} alt="" /></li>
                        <li><img src={process.env.PUBLIC_URL + `/skill/${handleColorType("Emotion")}.png`} alt="" /></li>
                        <li><img src={process.env.PUBLIC_URL + `/skill/${handleColorType("GraphQL")}.png`} alt="" /></li>
                        <li><img src={process.env.PUBLIC_URL + `/skill/${handleColorType("NextJS")}.png`} alt="" /></li>
                    </ul>
                    <ul className="meta-area">
                        <li>온오프라인</li>
                        <li>3개월</li>
                    </ul>
                </ProjectInfo>
                <StudyInfo>
                    <p>스터디이름 <em>모집 중 3/10명</em></p>
                </StudyInfo>
            </ItemCard>
        </>
    )
};


const ItemCard = styled.div`
    display: block;
    background:#fff;
    border-radius:25px;
    border:1px solid #EDEDED;
    padding:25px 25px;
`

const ProjectInfo = styled.div`
    position:relative;
    display: block;
    padding-bottom:35px;
    min-height:215px;
    .date-area {
        display: flex;
        justify-content: space-between;
        font-size:16px;
        font-family: 'Pretendard-medium';

        .date-area__date{
            em{
                display:inline-block;
                padding:5px 9px;
                background:#000;
                border-radius: 50px;
                font-weight: bold;
                color:#fff;
            }
        }
    };
    h4{
        padding:12px 0 8px;
        font-size:26px;
        font-family: 'Pretendard-Medium';
        line-height:1.2em;
        letter-spacing: -.025em;
    }
    .skill-area , .meta-area{
        display:flex;
        gap: 5px;
        
        li{
            width:35px;
            height:35px;

            img{
                width:100%
            }
        }
    }
    .meta-area{
        position:absolute;
        bottom:15px;
        gap:8px;
        li{
            font-family: 'Pretendard-Medium';
            font-size:15px;
            color:#75787E;
        }
    }
`

const StudyInfo = styled.div`
    display: block;
    border-top:1px solid #EDEDED;
    padding:15px 0 0;
    font-size:17px;
    font-weight: bold;
    line-height:1.3em;
    em{
        display: block;
        font-size:15px;
        font-family: 'Pretendard-medium';
        font-weight: normal;
    }
`

const ThumbnailGroup = styled.ul`
    display:flex;
    
    li{
        margin-left:-8px;
        font-size:12px;
       &:last-child{
        display: flex;
        justify-content: center;
        align-items: center;
        background:#fff;
        border:1px solid #696969;
        border-radius: 50px;
        width:27px;
        height:27px;
       } 
    }
`