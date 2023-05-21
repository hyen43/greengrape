import React from 'react';
import styled from '@emotion/styled';

const Span = styled.span`
  font-weight: ${({ theme }) => theme.font.weight[400]};
  font-size: ${({ theme }) => theme.font.size.sm};

  ${({ theme }) => theme.mq.laptop} {
    font-size: ${({ theme }) => theme.font.size.xxs};
  }
`;

interface TextProps {
  content: string;
}

function Content({ content }: TextProps) {
  return <Span>{content}</Span>;
}

export default Content;
