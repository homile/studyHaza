import { useState } from "react";
import styled from "styled-components";
import { StudyCard } from "./StudyCard";
import { ButtonPrimary } from "./Button";
import { SwitchButton } from "./SwitchButton";

export const StudyContents = ({posts}) => {
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
        <div>
            <ConSortArea>
                <TabMenu>
                    {menuArr.map((el,idx) => {
                        return(
                            <li key={idx}
                            className={`${idx === currentTab ? 'active' : null}`}
                            onClick={()=>activeMenuHandler(idx)}>{el.name}</li>
                        )
                    })}
                </TabMenu>
                <SwitchGroup>
                    <em>모집중만 보기</em>
                    <SwitchButton />
                </SwitchGroup>
            </ConSortArea>
            <StudyList>
                <div>
                   {/* {menuArr[currentTab].content} */}
                </div>
                <StudyCardList>
                    {posts.map((data, idx) => <StudyCard key={data.id} data={data} idx={idx} />)}
                </StudyCardList>
                <div className="button-area">
                    <ButtonPrimary>+ 더보기</ButtonPrimary>
                </div>
            </StudyList>
        </div>
    );
};

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

const StudyCardList = styled.div`
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  column-gap: 30px;  
  margin-top: 25px;
`

const SwitchGroup = styled.div`
  display: flex;
  align-items: center;
  font-size:20px;
  font-family: 'Pretendard-Medium';
  gap:5px;
`

const ConSortArea = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
`