import React from 'react';
import styled from '@emotion/styled';

const BtnIcon = styled.img`
  width: 48px;
  height: 48px;

  ${({ theme }) => theme.mq.laptop} {
    width: 38px;
    height: 38px;
  }
`;

function PrevIcon() {
  return <BtnIcon src="/images/prev_icon.png" alt="다음_아이콘" />;
}
export default PrevIcon;
