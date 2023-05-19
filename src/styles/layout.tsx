import React from 'react';
import styled from '@emotion/styled';

const LayoutContainer = styled.main`
  margin: 0 208px;

  ${({ theme }) => theme.mq.laptop} {
    margin: 0;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <LayoutContainer>{children}</LayoutContainer>;
}

export default Layout;
