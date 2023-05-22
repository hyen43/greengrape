import React from 'react';
import styled from '@emotion/styled';

const TextContainer = styled.p<{ isRouter: boolean }>`
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight[600]};
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ isRouter, theme }) => isRouter && theme.colors.primary};
`;
interface TextProps {
  isRouter: boolean;
  text: string;
}

function Text({ text, isRouter }: TextProps) {
  return <TextContainer isRouter={isRouter}>{text}</TextContainer>;
}

export default Text;
