import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { HeaderSectionModel } from '../../data/headerSections';
import Logo from '../Logo';
import HeaderSection from './HeaderSections/HeaderSection';
import Menu from './Menu';
import Socials from './Socials';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;
const BackgroundImage = styled.div`
  flex-basis: 95%;
  background-image: url('/images/header.png');
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  display: flex;
`;
const SocialsWrapper = styled.div`
  flex-basis: 5%;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 32px 20px 48px 20px;
`;
const HeaderText = styled.div`
  position: absolute;
  width: 992px;
  height: 144px;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 56px;
  line-height: 72px;
  text-align: center;
  color: #ffffff;
`;
const VerticalBars = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
`;
const VerticalBar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  padding: 32px 64px;
  flex-basis: 25%;
  &:not(:last-of-type) {
    border-right: 1px solid #888888;
  }
`;

type Props = {
  headerSections: HeaderSectionModel[];
};

const Header = ({ headerSections }: Props) => {
  const [selectedSection, setSelectedSection] = useState(0);

  const selectSection = useCallback(
    (index: number) => setSelectedSection(index),
    []
  );
  return (
    <Wrapper>
      <BackgroundImage>
        <VerticalBars>
          {headerSections.map((headerSection, index) => (
            <VerticalBar key={index}>
              <HeaderSection
                onClick={selectSection}
                isActive={selectedSection === index}
                section={{ ...headerSection, index }}
                key={index}
              />
              {!index ? <Logo height={48} width={139.2} /> : null}
            </VerticalBar>
          ))}
        </VerticalBars>
        <HeaderText>
          Bespoke property developer specialising in digital
        </HeaderText>
      </BackgroundImage>
      <SocialsWrapper>
        <Menu />
        <Socials />
        <div>
          <Image width={32} height={32} src='/images/mouse.png' alt='mouse' />
        </div>
      </SocialsWrapper>
    </Wrapper>
  );
};

export default Header;
