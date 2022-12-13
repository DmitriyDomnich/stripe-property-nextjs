import styled from 'styled-components';

const StrokedText = styled.h2<{ margin?: string }>`
  color: #161c241a;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px;
  font-weight: 500;
  font-size: 7rem;
  line-height: 188px;
  text-align: center;
  margin: ${(p) => p.margin || 0};
`;

export default StrokedText;
