import React from 'react';
import styled from '@emotion/styled';

const Span = styled.span<{ type: 'normal' | 'best' }>`
  font-weight: ${({ theme }) => theme.font.weight[600]};
  font-size: ${({ theme }) => theme.font.size.xxlg};
  color: ${({ type, theme }) =>
    type === 'best' ? theme.colors.white : theme.colors.primary};

  ${({ theme }) => theme.mq.laptop} {
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;

interface TextProps {
  type: 'normal' | 'best';
}

function CardBtnText({ type }: TextProps) {
  return <Span type={type}>자세히 보러가기</Span>;
}

export default CardBtnText;
