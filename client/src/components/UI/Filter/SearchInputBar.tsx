import React from 'react';
import styled from 'styled-components';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    value?: string;
  }
}

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <>
      <Container>
        <Icon>
          <i
            className="fa-solid fa-magnifying-glass fa-fw"
            value={value}
            onChange={onChange}
          ></i>
        </Icon>
        <input
          type="search"
          id="search"
          value={value}
          contentEditable
          onChange={onChange}
          autoComplete="off"
        />
      </Container>
    </>
  );
};

export default SearchBar;

const Container = styled.div`
  position: relative;
  height: 58px;

  input {
    width: 400px;
    height: 58px;
    background: white;
    border: 2px solid #dbdbdb;
    font-size: 1.3rem;
    float: right;
    padding-left: 30px;
    padding-right: 50px;
    border-radius: 50px;

    &:focus,
    &:active {
      border-color: #2584f4;
    }

    // input type="search" 우측 x 아이콘 삭제
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }
  }
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  right: 16px;
  z-index: 1;
  font-size: 23px;
  cursor: pointer;
  transform: translate(0, -50%);
`;
