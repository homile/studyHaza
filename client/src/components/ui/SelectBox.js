import styled from "styled-components";
import img from "../../images/down_arrow.png";
export const SelectBox = (props) => {
  return (
    <Select>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
  );
};

const Select = styled.select`
  width: 100%;
  height: 50px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  font-size: 18px;
  padding: 0 1.5rem;
  margin-top: 8px;
  -webkit-appearance: none;
  background: url(${img}) no-repeat 95% 50%/15px auto;
`;
