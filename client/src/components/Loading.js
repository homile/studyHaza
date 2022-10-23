import React from 'react';
import styled from 'styled-components';
import loading from '../images/spinner.gif'

export const Loading = () => {
  return <LoadingArea>
    <p><img src={loading} alt="" /></p>
  </LoadingArea>;
};

export default Loading;

const LoadingArea = styled.div`
  width:100%;
  min-height:400px;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width:150px
  }
`