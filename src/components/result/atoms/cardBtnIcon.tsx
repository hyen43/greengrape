import React from 'react';
import styled from '@emotion/styled';

const BtnIcon = styled.img`
  width: 20px;
  height: 20px;

  ${({ theme }) => theme.mq.laptop} {
    width: 10px;
    height: 10px;
  }
`;

interface TextProps {
  type: 'normal' | 'best';
}

function CardBtnIcon({ type }: TextProps) {
  return (
    <BtnIcon src={`/images/more_${type}_icon.svg`} alt="보러가기_아이콘" />
  );
}
export default CardBtnIcon;
