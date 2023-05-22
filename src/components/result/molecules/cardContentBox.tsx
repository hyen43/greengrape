import React from 'react';
import styled from '@emotion/styled';
import ContentTitle from '@components/result/atoms/contentTitle';
import Content from '@components/result/atoms/content';

const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

interface TextProps {
  type: 'normal' | 'duplicate';
}

function CardContentBox({ type }: TextProps) {
  return (
    <CardContentContainer>
      <ContentTitle type={type} content="콘텐츠" />
      <Content content="content" />
    </CardContentContainer>
  );
}

export default CardContentBox;
