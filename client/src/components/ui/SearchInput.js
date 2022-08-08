import React, { useState } from "react";
import styled from "styled-components";

function Search() {
  const [search, setSearch] = useState("");
  // const [lengths, setLength] = useState(0);

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length !== 0) {
      console.log("have value!!!");
    }
    // setLength(e.target.value.length);
  };

  return (
    <>
      <Container>
        <Icon>
          <i
            className="fa-solid fa-magnifying-glass fa-fw"
            value={search}
            onChange={onChange}
            onClick={() => {
              console.log(search);
            }}
          ></i>
        </Icon>
        <input
          type="search"
          id="search"
          value={search}
          contentEditable
          onChange={onChange}
          autoComplete="off"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              console.log(e.target.value);
            }
          }}
        />
      </Container>
    </>
  );
}

export default Search;

const Container = styled.div`
  width: 60px;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;

  &:hover {
    input {
      width: 255px;
      border-color: #2584f4;
    }
  }

  input {
    width: 50px;
    max-width: 255px;
    height: 50px;
    background: white;
    border: 2px solid #f1f1f1;
    font-size: 1rem;
    float: right;
    padding-left: 15px;
    padding-right: 30px;
    border-radius: 50px;

    -webkit-transition: width 0.55s ease;
    transition: width 0.55s ease;

    &:focus,
    &:active {
      width: 255px;
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
  top: 27%;
  left: 35%;
  z-index: 1;
  font-size: 23px;
  cursor: pointer;
  transition: none;
`;
