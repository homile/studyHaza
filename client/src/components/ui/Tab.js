import { useState } from "react";
import styled from "styled-components";
import studyData from "../../resource/postsDummyData"

const TabMenu = styled.ul`
    display: flex;
    gap:13px;

    li{
        font-size:1.25rem;
        font-family:'Pretendard-Medium';
        background:#F0F0F0;
        padding:15px 20px;
        border-radius:12px;
        cursor: pointer;

        &.active{
            background-color:#2584F4;
            color:#fff
        }

        &:before{
            font-family: "FontAwesome";
            margin-right:5px;
        }

        &:nth-child(2):before{
            content: "\f1b2";
        }

        &:nth-child(3):before{
            content: "\f233";
        }
    }
`

const StudyList = styled.div`
    display: block;
`

export const Tab = () => {
    const menuArr = [
        {name :'전체', content : '전체 목록'},
        {name :'프론트엔드', content : '프론트엔드 목록'},
        {name :'백엔드', content : '백엔드 목록'},
    ];

    const [currentTab, setCurrentTab] = useState(0);

    const activeMenuHandler = (idx) => {
        setCurrentTab(idx)
    };

    return(
        <>
        <TabMenu>
            {menuArr.map((el,idx) => {
                return(
                    <li key={idx}
                    className={`${idx === currentTab ? 'active' : null}`}
                    onClick={()=>activeMenuHandler(idx)}>{el.name}</li>
                )
            })}
        </TabMenu>
        <StudyList>
            <div>{menuArr[currentTab].content}</div>
        </StudyList>
        </>
    );
};