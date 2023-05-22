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

function SaveIcon() {
  return <BtnIcon src="/images/save_icon.svg" alt="저장_아이콘" />;
}
export default SaveIcon;
