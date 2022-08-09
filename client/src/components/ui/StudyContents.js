import { useEffect, useState } from "react";
import styled from "styled-components";
import { StudyCard } from "./StudyCard";
import { SwitchButton } from "./SwitchButton";

export const StudyContents = ({posts}) => {
    const [currentTab, setCurrentTab] = useState(0);
    const [isOn, setIsOn]= useState(false);
    const [postData, setPostData] = useState([]);

    const filtered = {
        menuTab: ["전체", "프론트엔드", "백엔드"],
        skillTab: ["전체", "frontend", "backend"]
    };

    useEffect(() => {
        setPostData(posts);
    }, [posts]);

    useEffect(() => {
        if(isOn){
            const filterdData = posts.filter((data) => {return new Date(data.startDate) > new Date()});
            setPostData(filterdData);
            for(let i= 1 ; i<filtered.skillTab.length; i++){
                if(currentTab === i){
                    setPostData(filterdData.filter ((data) => {return data.devType === filtered.skillTab[i]}));
                }
            }
        }else{
            setPostData(posts);
            for(let i= 1 ; i<filtered.skillTab.length; i++){
                if(currentTab === i){
                    setPostData(posts.filter ((data) => {return data.devType === filtered.skillTab[i]}));
                }
            }
        }
    }, [isOn, currentTab]);

    const toggleHandler = () => {
        setIsOn(!isOn)
    }

    const activeMenuHandler = (idx) => {
        setCurrentTab(idx)
    };

    return(
        <div>
            <ConSortArea>
                <TabMenu>
                    {filtered.menuTab.map((el, idx) => {
                        return(
                            <li key={idx}
                            className={`${idx === currentTab ? 'active' : null}`}
                            onClick={()=>activeMenuHandler(idx)}>{el}</li>
                        )
                    })}
                </TabMenu>
                <SwitchGroup>
                    <em>모집중만 보기</em>
                    <SwitchButton isOn={isOn} toggleHandler={toggleHandler}/>
                </SwitchGroup>
            </ConSortArea>
            <StudyList>
                <StudyCardList>
                    {postData.map((data, idx) => <StudyCard key={data.id} data={data} idx={idx} />)}
                </StudyCardList>
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