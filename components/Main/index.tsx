import React from 'react';
import styled from 'styled-components';
import MainTitle from './Title';

type Props = {};

const MainWrapper = styled.main`
  padding: 120px;
`;

const Main = () => {
  return (
    <MainWrapper>
      <MainTitle />
    </MainWrapper>
  );
};

export default Main;
