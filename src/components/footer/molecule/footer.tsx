import React from 'react';
import styled from '@emotion/styled';
import Logo from '@components/common/atom/logo';
import Copyright from '../atom/copyright';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
  padding: 49px 0 32px 0;
  background-color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.mq.laptop} {
    gap: 18px;
    padding: 36px 0 18px 0;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <Logo />
      <Copyright />
    </FooterContainer>
  );
}

export default Footer;
