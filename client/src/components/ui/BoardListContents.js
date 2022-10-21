import React from "react";
import styled from "styled-components";
import CommunityCard from "./CommunityCard";

const BoardListContents = ({ posts }) => {
  return (
    <>
      <ItemGroup>
        {posts.map((data, idx) => (
          <CommunityCard key={data.id} data={data} idx={idx} />
        ))}
      </ItemGroup>
    </>
  );
};

export default BoardListContents;

const ItemGroup = styled.div`
  margin: 25px 0 20px;
`;
