import React from 'react';
import styled from '@emotion/styled';
import FaqBox from '../molecule/FaqBox';

const FaqSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FaqTitleWrapper = styled.div`
  margin-bottom: 91px;
  span {
    font-weight: ${({ theme }) => theme.font.weight[600]};
    font-size: ${({ theme }) => theme.font.size.xxxlg};
  }
  ${({ theme }) => theme.mq.laptop} {
    margin-bottom: 47px;
  }
`;

function FaqSection() {
  return (
    <FaqSectionContainer>
      <FaqTitleWrapper>
        <span>FAQ</span>
      </FaqTitleWrapper>
      <FaqBox />
    </FaqSectionContainer>
  );
}

export default FaqSection;
