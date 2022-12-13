import React, { useCallback } from 'react';
import styled from 'styled-components';
import { HeaderSectionModel } from '../../../data/headerSections';
import Button from '../../Button';

type Props = {
  section: HeaderSectionModel & { index: number };
  isActive: boolean;
  onClick: (index: number) => void;
};
type TitleProps = {
  isActive?: boolean;
};

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  flex-basis: 25%;
  padding-left: 2rem;
  user-select: none;
`;
const Index = styled.div<TitleProps>`
  padding: 10px 2px;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px;
  color: white;
  font-size: 120px;
  line-height: 141px;
  opacity: ${(p) => (p.isActive ? 1 : 0.2)};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Title = styled.h5`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
`;
const Description = styled.span`
  font-size: 16px;
  line-height: 28px;
  color: #fff;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const HeaderSection = ({ section, isActive, onClick }: Props) => {
  const handleClick = useCallback(() => {
    onClick && onClick(section.index);
  }, [onClick, section.index]);

  return (
    <SectionWrapper onClick={handleClick}>
      <Index isActive={isActive}>0{section.index + 1}</Index>
      <Content>
        <Title>{section.title}</Title>
        {isActive ? (
          <>
            <Description>{section.description}</Description>
            <Button>Know more</Button>
          </>
        ) : null}
      </Content>
    </SectionWrapper>
  );
};

export default HeaderSection;
