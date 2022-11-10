import React from 'react';
import styled from 'styled-components';

export const Loading = () => {
  const spinner = document.querySelector('loading-spinner');
  if (spinner instanceof HTMLImageElement) {
    spinner.src = '../../images/spinner.gif';
  }
  return (
    <LoadingArea>
      <p>
        <img className="loading-spinner" alt="" />
      </p>
    </LoadingArea>
  );
};

export default Loading;

const LoadingArea = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
  }
`;
