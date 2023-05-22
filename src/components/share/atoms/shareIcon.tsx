import React from 'react';
import styled from '@emotion/styled';

const BtnIcon = styled.img`
  width: 27px;
  height: 27px;

  ${({ theme }) => theme.mq.laptop} {
    width: 22.5px;
    height: 22.5px;
  }
`;

function ShareIcon() {
  return <BtnIcon src="/images/share_icon.svg" alt="공유_아이콘" />;
}
export default ShareIcon;
