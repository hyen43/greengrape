import React from 'react';
import styled from '@emotion/styled';

const Span = styled.span`
  font-weight: ${({ theme }) => theme.font.weight[600]};
  font-size: 11px;
  ${({ theme }) => theme.mq.laptop} {
    font-size: ${({ theme }) => theme.font.size.xxs};
  }
`;

interface TextProps {
  content: string;
}

function ContentTitle({ content }: TextProps) {
  return <Span>{content}</Span>;
}

export default ContentTitle;
