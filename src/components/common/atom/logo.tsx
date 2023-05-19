import React from 'react';
import styled from '@emotion/styled';

const LogoWrapper = styled.div`
  width: 88px;
  height: 60px;
  p {
    font-family: Happiness Sans;
    font-style: normal;
    font-weight: ${({ theme }) => theme.font.weight[900]};
    font-size: ${({ theme }) => theme.font.size.xlg};
    line-height: 30px;
    background: linear-gradient(137.25deg, #51e14e 5.8%, #e0efe0 111.8%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

function Logo() {
  return (
    <LogoWrapper>
      <p>Green</p>
      <p>Grapes</p>
    </LogoWrapper>
  );
}

export default Logo;
