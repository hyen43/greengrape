import React from 'react';
import styled from '@emotion/styled';

const Span = styled.span<{ type: 'normal' | 'duplicate' }>`
  font-weight: ${({ theme }) => theme.font.weight[600]};
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ type, theme }) => type === 'duplicate' && theme.colors.action};

  ${({ theme }) => theme.mq.laptop} {
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;

interface TextProps {
  type: 'normal' | 'duplicate';
  content: string;
}

function CardContent({ type, content }: TextProps) {
  return <Span type={type}>{content}</Span>;
}

export default CardContent;
