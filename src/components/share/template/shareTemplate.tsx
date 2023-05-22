import React from 'react';
import styled from '@emotion/styled';
import ShareSection from '@components/share/organism/shareSection';
import ShareIcon from '@components/share/atoms/shareIcon';
import SaveIcon from '@components/share/atoms/saveIcon';

const ShareTemplateContainer = styled.div``;

const IconWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 72px;
  justify-content: center;

  ${({ theme }) => theme.mq.laptop} {
    margin-top: 63px;
    gap: 58px;
  }
`;

function ShareTemplate() {
  return (
    <ShareTemplateContainer>
      <ShareSection />
      <IconWrapper>
        <SaveIcon />
        <ShareIcon />
      </IconWrapper>
    </ShareTemplateContainer>
  );
}

export default ShareTemplate;
