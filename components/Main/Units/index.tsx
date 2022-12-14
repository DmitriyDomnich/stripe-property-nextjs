import React from 'react';
import styled from 'styled-components';
import Unit from './Unit';

const Wrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 10rem;
  display: flex;
  flex-wrap: wrap;
  margin-inline: auto;
  justify-content: flex-start;

  padding-inline: 5%;
  gap: 15px;
  @media (min-width: 768px) {
    gap: 0;
    justify-content: center;
  }
`;

const units = [
  {
    image: {
      path: '/images/parasol.png',
      width: 36,
      height: 36,
    },
    number: '230',
    title: 'Units under construction',
  },
  {
    image: {
      path: '/images/building.png',
      width: 40,
      height: 35,
    },
    number: '500+',
    title: 'Units delivered',
  },
  {
    image: {
      path: '/images/star.png',
      width: 48,
      height: 48,
    },
    number: '20+',
    title: 'Years experience',
  },
  {
    image: {
      path: '/images/dolla.png',
      width: 36,
      height: 36,
    },
    number: '£41m',
    title: 'Gross development value',
  },
];

const Units = () => {
  return (
    <Wrapper>
      {units.map((unit) => (
        <Unit unit={unit} key={unit.title} />
      ))}
    </Wrapper>
  );
};

export default Units;
