import React from 'react';
import styled from '@emotion/styled';
import CardBtnText from '@components/result/atoms/cardBtnText';
import CardBtnIcon from '@components/result/atoms/cardBtnIcon';

const CardBtnContainer = styled.a<{ type: 'normal' | 'best' }>`
  width: 100%;
  height: 93px;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 25px 25px;
  border: none;
  background: ${({ type, theme }) =>
    type === 'best'
      ? 'linear-gradient(137.25deg, #51e14e 5.8%, #e0efe0 111.8%)'
      : theme.colors.gray200};

  ${({ theme }) => theme.mq.laptop} {
    height: 46.5px;
    gap: 15px;
  }
`;

interface CardBtnBoxProps {
  type: 'normal' | 'best';
}

function CardBtnBox({ type }: CardBtnBoxProps) {
  return (
    <CardBtnContainer type={type}>
      <CardBtnText type={type} />
      <CardBtnIcon type={type} />
    </CardBtnContainer>
  );
}

export default CardBtnBox;
