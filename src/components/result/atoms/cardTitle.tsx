import React from 'react';
import styled from '@emotion/styled';

const Span = styled.span`
  font-weight: ${({ theme }) => theme.font.weight[600]};
  font-size: ${({ theme }) => theme.font.size.xxxlg};

  ${({ theme }) => theme.mq.laptop} {
    font-size: ${({ theme }) => theme.font.size.sm};
  }
`;

interface TextProps {
  content: string;
}

function CardTitle({ content }: TextProps) {
  return <Span>{content}</Span>;
}

export default CardTitle;
