import React from 'react';
import styled from 'styled-components';
import Loading from '../Layout/Loading';
import CommunityCard from './CommunityCard';

type Props = {
  posts: [index: string];
};

const BoardListContents = ({ posts }: Props) => {
  return (
    <>
      {posts[0] !== undefined ? (
        <ItemGroup>
          {posts.map((data: any) => (
            <CommunityCard key={data.id} data={data} />
          ))}
        </ItemGroup>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default BoardListContents;

const ItemGroup = styled.div`
  margin: 25px 0 20px;
`;