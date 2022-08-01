import styled from "styled-components";
import { useEffect, useState } from 'react'

export const AdArea = ({posts}) => {
  const postsNum = 30;
  // 카운트 함수
  function useCountUp() {
    const [count, setCount] = useState(0)
    const stepTime = Math.abs(Math.floor(300 / (postsNum - 0)))

    useEffect(() => {
      let currentNumber = 0
      const counter = setInterval(() => {
        currentNumber += 1
        setCount(currentNumber)

        if (currentNumber === postsNum) {
          clearInterval(counter)
        }
      }, stepTime)
    }, [postsNum, 0, stepTime])

    return count
  }

    return(
        <BannerArea>
            <p><strong>{useCountUp()}</strong>개의 스터디가<br/>당신의 합류를 기다리는 중!</p>
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
