import React from 'react';
import styled from '@emotion/styled';

const FaqSpan = styled.span<{ type: 'title' | 'content' }>`
  font-weight: ${({ type, theme }) =>
    type === 'title' ? theme.font.weight[500] : theme.font.weight[400]};
  font-size: ${({ theme }) => theme.font.size.md};
`;

interface FaqTextProps {
  type: 'title' | 'content';
  contents: string;
}

function FaqText({ type, contents }: FaqTextProps) {
  return <FaqSpan type={type}>{contents}</FaqSpan>;
}

export default FaqText;
