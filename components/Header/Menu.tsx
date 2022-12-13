import styled from 'styled-components';

const MenuWrapper = styled.div`
  width: 16px;
  height: 16px;
  padding-block: 1px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  cursor: pointer;
`;
const MenuLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(p) => p.color};
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <MenuLine color='#40C7F4'></MenuLine>
      <MenuLine color='#4EC0A5'></MenuLine>
      <MenuLine color='#F89F28'></MenuLine>
      <MenuLine color='#F16A82'></MenuLine>
    </MenuWrapper>
  );
};

export default Menu;
