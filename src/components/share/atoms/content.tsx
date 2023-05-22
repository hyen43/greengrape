import React from 'react';
import styled from '@emotion/styled';

const Span = styled.span`
  font-weight: ${({ theme }) => theme.font.weight[400]};
  font-size: ${({ theme }) => theme.font.size.xxs};
  ${({ theme }) => theme.mq.laptop} {
    font-size: 8px;
  }
`;

interface TextProps {
  content: string;
}

function Content({ content }: TextProps) {
  return <Span>{content}</Span>;
}

export default Content;
