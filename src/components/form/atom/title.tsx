import React from 'react';
import styled from '@emotion/styled';

const TitleContainter = styled.label`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight[600]};
`;

interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return <TitleContainter>{title}</TitleContainter>;
}
export default Title;
