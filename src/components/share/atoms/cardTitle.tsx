import React from 'react';
import styled from '@emotion/styled';

const Span = styled.span`
  font-weight: ${({ theme }) => theme.font.weight[600]};
  font-size: ${({ theme }) => theme.font.size.md};
  ${({ theme }) => theme.mq.laptop} {
    font-weight: ${({ theme }) => theme.font.weight[500]};
    font-size: ${({ theme }) => theme.font.size.sm};
  }
`;

interface TextProps {
  title: string;
}

function CardTitle({ title }: TextProps) {
  return <Span>{title}</Span>;
}

export default CardTitle;
