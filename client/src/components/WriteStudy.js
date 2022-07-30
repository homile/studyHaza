import React from "react";
import { WriteInputContainer } from "./ui/WriteInput";
import styled from "styled-components";
import { SelectBox } from "./ui/SelectBox";
import { DatePick } from "./DatePick";

const devTypeOptions = [
  { value: "front", name: "프론트엔드" },
  { value: "back", name: "백엔드" },
];

const onOffOptions = [
  { value: "on", name: "온라인" },
  { value: "off", name: "오프라인" },
];

const DivContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
`;

function WriteStudy() {
  return (
    <>
      <WriteInputContainer>
        <label htmlFor="title">제목</label>
        <div>
          <input id="title" placeholder="제목을 입력해주세요." />
        </div>
      </WriteInputContainer>
      <DivContainer>
        <WriteInputContainer width="95%">
          <label htmlFor="title">시작일자</label>
          <DatePick />
        </WriteInputContainer>
        <WriteInputContainer>
          <label htmlFor="title">모집구분</label>
          <div>
            <SelectBox options={devTypeOptions}></SelectBox>
          </div>
        </WriteInputContainer>
      </DivContainer>
      <DivContainer>
        <WriteInputContainer width="95%">
          <label htmlFor="title">모집인원</label>
          <div>
            <input id="title" placeholder="ex) 10" />
            <span>명</span>
          </div>
        </WriteInputContainer>

        <WriteInputContainer>
          <label htmlFor="title">진행방식</label>
          <div>
            <SelectBox options={onOffOptions}></SelectBox>
          </div>
        </WriteInputContainer>
      </DivContainer>
      <WriteInputContainer height="400px">
        <hr />
        <label htmlFor="content">모집 상세</label>
        <div>
          <textarea id="content" placeholder="모집 상세 내용을 입력해주세요." />
        </div>
      </WriteInputContainer>
    </>
  );
}

export default WriteStudy;
