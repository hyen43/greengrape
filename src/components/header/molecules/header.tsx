import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
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
  gap: 50px;
  align-items: center;
  ${({ theme }) => theme.mq.laptop} {
    gap: 38px;
  }
`;

function Header() {
  const location = useLocation();

  return (
    <HeaderWrapper>
      <Logo />
      <RightSection>
        <Link to="/">
          <Text isRouter={location.pathname === '/'} text="홈" />
        </Link>
        <Link to="/faq">
          <Text isRouter={location.pathname === '/faq'} text="FAQ" />
        </Link>
      </RightSection>
    </HeaderWrapper>
  );
}

export default Header;
