import styled from 'styled-components';
import img from '../../../images/down_arrow.png';

interface OptionsProps {
  value: string;
  name: string;
}

interface Props {
  defaultValue: string;
  options: OptionsProps[];
  devTypeOptions?: OptionsProps[];
  setDevType?: (devType: string) => void;
  setDevStack?: (devStack: string[]) => void;
  setOnOff?: (onOff: string) => void;
}

export const SelectBox = (props: Props) => {
  const onChangeDevType = (e: { target: { value: string } }) => {
    props.setDevType && props.setDevType(e.target.value);
    props.setDevStack && props.setDevStack([]);
  };

  const onChangeOnOff = (e: { target: { value: string } }) => {
    props.setOnOff && props.setOnOff(e.target.value);
  };
  //
  return (
    <Select
      onChange={
        props.options === props.devTypeOptions ? onChangeDevType : onChangeOnOff
      }
      value={props.defaultValue}
    >
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
