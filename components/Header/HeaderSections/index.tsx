import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { HeaderSectionModel } from '../../../data/headerSections';
import HeaderSection from './HeaderSection';

type Props = {
  sections: HeaderSectionModel[];
};

const Sections = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0px;
  position: absolute;
  width: 90%;
  height: 277px;
  left: 64px;
  bottom: 48px;
`;

const HeaderSections = ({ sections }: Props) => {};

export default HeaderSections;
