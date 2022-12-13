import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

type Props = {
  unit: {
    title: string;
    number: string;
    image: { path: string; height: number; width: number };
  };
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  flex-basis: 25%;
  align-items: center;

  &:not(:last-child) {
    border-right: #161c241a 1px solid;
  }
`;
const UnitNumber = styled.h1`
  font-weight: 500;
  color: #212b36;
  font-size: 56px;
  line-height: 72px;
`;
const UnitTitle = styled.div`
  color: #919eab;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
`;

const Unit = ({ unit }: Props) => {
  return (
    <Wrapper>
      <Image
        src={unit.image.path}
        alt={unit.title}
        height={unit.image.height}
        width={unit.image.width}
      />
      <UnitNumber>{unit.number}</UnitNumber>
      <UnitTitle>{unit.title}</UnitTitle>
    </Wrapper>
  );
};

export default Unit;
