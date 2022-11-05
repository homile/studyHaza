import React from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

export const DatePick = (props) => {
  return (
    <DatePicker
      selected={props.startDate}
      onChange={props.setStartDate}
      locale={ko}
      dateFormat="yyyy - MM - dd"
      fixedHeight
      minDate={new Date()} // 오늘 날짜 기준 이전 날짜 선택 못하도록
      // showPopperArrow={false} // 캘린더 위에 화살표 유무
    />
  );
};
