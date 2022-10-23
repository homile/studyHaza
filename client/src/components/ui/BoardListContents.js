import React from "react";
import styled from "styled-components";
import Loading from "../Loading";
import CommunityCard from "./CommunityCard";

const BoardListContents = ({ posts }) => {
  return (
    <>
      {posts[0] !== undefined ? 
        <ItemGroup>
          {posts.map((data, idx) => (
            <CommunityCard key={data.id} data={data} idx={idx} />
          ))}
        </ItemGroup>
      :
        <Loading />
      }
      
    </>
  );
};

export default BoardListContents;

const ItemGroup = styled.div`
  margin: 25px 0 20px;
`;
