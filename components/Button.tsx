import styled from 'styled-components';

const Button = styled.button<{ outline?: boolean; borderColor?: string }>`
  border-radius: 4px;
  padding: 10px 36px;
  text-align: center;
  cursor: pointer;
  white-space: none;
  display: inline-block;
  border: none;
  transition: background-color 0.35s ease-out;
  background-color: ${(p) => (p.outline ? 'transparent' : '#40C7F4')};
  font-size: 16px;
  line-height: 28px;
  color: ${(p) => (p.outline ? '#212B36' : '#FFF')};
  outline: ${(p) =>
    p.outline
      ? p.borderColor
        ? `1px solid ${p.borderColor}`
        : `1px solid #40C7F4`
      : 'none'};
  &:hover {
    background-color: ${(p) =>
      p.outline ? (p.borderColor ? p.borderColor : '#a4e8fe') : '#6edbff'};
  }
`;

export default Button;
