import React from 'react';
import { default as NextImage } from 'next/image';
import styled from 'styled-components';

type Props = {
  width: number;
  height: number;
} & React.HTMLAttributes<HTMLDivElement>;

const Image = ({ height, width, style }: Props) => {
  return (
    <NextImage
      src='/images/Logo.png'
      alt='logo'
      priority
      quality={100}
      style={style}
      height={height}
      width={width}
    />
  );
};

const StyledLogo = styled(Image)`
  ${(p) => ({ ...p.style })}
`;

const Logo = ({ height, width, ...props }: Props) => {
  return <StyledLogo height={height} width={width} {...props} />;
};

export default Logo;
