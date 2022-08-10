import React, { useState } from "react";
import styled from "styled-components";


function SearchBar() {
    const [search, setSearch] = useState("");
    // const [lengths, setLength] = useState(0);
  
    const onChange = (e) => {
      setSearch(e.target.value);
      if (e.target.value.length !== 0) {
        console.log("have value!!!");
      }
      // setLength(e.target.value.length);
    };
    return(
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
    )
}


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
