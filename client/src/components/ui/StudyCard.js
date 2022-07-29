import styled from "styled-components";
import { ProfileImgXS } from "./ProfileImg";
import img from "../../images/pf_sample.png";

export const StudyCard = ({data}) => {
    const startDay = new Date(data.startDate);
    const toDay = new Date();
    const diff = startDay - toDay;
    const diffDay = Math.floor(diff / (1000*60*60*24));

    // 모집마감일 디데이 
    function diffDayData() {
        if(diffDay <= 0){
            return '종료';
        }
        return `D-${diffDay}`;
    }
    
    // 기술 스택명 불러오기
    const frontStacks = ["Angular", "Emotion", "GraphQL", "NextJS", "ReactJS", "VueJS", "Redux", "Recoil", 
    "Storybook", "StyledComponent", "HTML", "CSS", "JavaScript", "TypeScript"]

    const backStacks = ["Apollo", "AWS", "ExpressJS", "Django", "NestJS", "NodeJS", "Spring", "SpringBoot", 
    "Python", "Java", "JavaScript"]

    const devStackWord = (devType, skill) => {
      let a = '';
      let idx = '';
      if (devType === "frontend"){
        idx = frontStacks.findIndex((el) => el === skill);
        a = 'fe'
      }

      if (devType === "backend"){
        idx = backStacks.findIndex((el) => el === skill);
        a = 'be';
      }

      if(idx >= 9){
        return `sk_${a}${idx+1}`  
      }else{
        return `sk_${a}${idx+1}`
      }
    }


    return (
        <>  
            <ItemCard>
                <ProjectInfo>
                    <div className="date-area">
                        <span className="date-area__date"><em>{diffDayData()}</em> {data.startDate}</span>
                        <ThumbnailGroup>
                            <li><ProfileImgXS src={img}/></li>
                            <li><ProfileImgXS src={img}/></li>
                            <li>+2</li>
                        </ThumbnailGroup>
                    </div>
                    <h4>{data.title}</h4>
                    <ul className="skill-area">
                        {data.devStack.map((el, idx)=>{
                            return (
                                // <li key={idx}><img src={process.env.PUBLIC_URL + `/skill/${devStackWord(`${el}`)}.png`} alt="" /></li>
                                <li key={idx}><img src={process.env.PUBLIC_URL + `/skill/${devStackWord(data.devType,`${el}`)}.png`} alt="" /></li>
                            )
                        })}
                    </ul>
                    <ul className="meta-area">
                        <li>#{(data.onOff === "on") ? "온라인" : "오프라인"}</li>
                        <li>#3개월</li>
                    </ul>
                </ProjectInfo>
                <StudyInfo>
                    <p>{data.nickName} <em>모집 중 {data.haveHeadCount}/{data.totalHeadCount}명</em></p>
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
    cursor: pointer;

    &:hover{
        border-color:#e1e1e1;
        box-shadow: 0 8px 10px 10px rgba(0,0,0, .03);
    }
`

const ProjectInfo = styled.div`
    position:relative;
    display: block;
    padding-bottom:35px;
    min-height:225px;
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
        padding:12px 0 0;
        font-size:26px;
        font-family: 'Pretendard-Medium';
        line-height:1.2em;
        letter-spacing: -.025em;
        min-height: 77px;
    }
    .skill-area , .meta-area{
        display:flex;
        gap: 5px;
    }
    .skill-area{
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
        bottom:13px;
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