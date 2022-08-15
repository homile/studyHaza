import React from "react";
import styled from "styled-components";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <PageUl className="pagination">
        {pageNumbers.map((number) => (
          <PageLi key={number} className="page-item">
            <PageSpan onClick={() => paginate(number)} className="page-link">
              {number}
            </PageSpan>
          </PageLi>
        ))}
      </PageUl>
    </div>
  );
};

export default Pagination;

const PageUl = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: #666;
  gap:10px;
  padding: 1px;
`;

const PageLi = styled.li`
transition: all 0s;
cursor: pointer;
`

const PageSpan = styled.span`
  display:flex;
  justify-content: center;
  align-items: center;
  font-size:17px;
  font-family: 'Pretendard-Medium';
  background:#fff;
  border:1px solid #eee;
  border-radius:5px;
  width:38px;
  height:38px;

  &:hover {
    cursor: pointer;
    background-color: #ddd;
  }
  &:focus::after {
    color: white;
    background-color: #000;
  }
`;