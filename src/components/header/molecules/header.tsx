import React from 'react';
import styled from '@emotion/styled';
import Logo from '../../common/atom/logo';
import Text from '../atoms/text';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 136px;
  padding: 0 208px;
  box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.12);

  ${({ theme }) => theme.mq.laptop} {
    height: 98px;
    padding: 0 26px;
  }
`;

const RightSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 126px;
  height: 65px;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <RightSection>
        <Text color="#51E14E" text="홈" />
        <Text text="FAQ" />
      </RightSection>
    </HeaderWrapper>
  );
}

export default Header;
