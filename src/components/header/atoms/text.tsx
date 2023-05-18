import React from 'react';
import styled from '@emotion/styled';

const TextContainer = styled.p<{ color?: string }>`
  flex: 1;
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight[600]};
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ color, theme }) => color || theme.colors.black};
`;
interface TextProps {
  // eslint-disable-next-line react/require-default-props
  color?: string;
  text: string;
}

function Text({ color, text }: TextProps) {
  return <TextContainer color={color}>{text}</TextContainer>;
}

export default Text;
