import React from 'react';
import styled from '@emotion/styled';
import ContentTitle from '@components/share/atoms/contentTitle';
import Content from '@components/share/atoms/content';

const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.5px;
  ${({ theme }) => theme.mq.laptop} {
    gap: 6px;
  }
`;

function ContentBox() {
  return (
    <CardContentContainer>
      <ContentTitle content="대출금리" />
      <Content content="연 1.2%" />
    </CardContentContainer>
  );
}

export default ContentBox;
