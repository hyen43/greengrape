import React from 'react';
import styled from '@emotion/styled';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  // ${({ theme }) => theme.mq.laptop} {
  //   max-width: 100px;
  // }
`;

function Header() {
  return (
    <HeaderWrapper>
      <div>리나</div>
      <div>테스트</div>
    </HeaderWrapper>
  );
}

export default Header;
