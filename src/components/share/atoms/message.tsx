import React from 'react';
import styled from '@emotion/styled';

const Span = styled.span`
  font-weight: ${({ theme }) => theme.font.weight[600]};
  font-size: ${({ theme }) => theme.font.size.lg};
  ${({ theme }) => theme.mq.laptop} {
    font-size: ${({ theme }) => theme.font.size.md};
  }
`;

interface TextProps {
  content: string;
}

function Message({ content }: TextProps) {
  return <Span>{content}</Span>;
}

export default Message;
