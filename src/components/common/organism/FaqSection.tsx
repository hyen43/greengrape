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

const FaqBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 51px;
  width: 100%;
  ${({ theme }) => theme.mq.laptop} {
    gap: 28px;
  }
`;

interface FaqSectionProps {
  data: Array<{
    index: number;
    title: string;
    content: string;
  }>;
}

function FaqSection({ data }: FaqSectionProps) {
  if (!data) return null;
  return (
    <FaqSectionContainer>
      <FaqTitleWrapper>
        <span>FAQ</span>
      </FaqTitleWrapper>
      <FaqBoxWrapper>
        {data &&
          data?.map(el => (
            <FaqBox key={el.index} title={el.title} content={el.content} />
          ))}
      </FaqBoxWrapper>
    </FaqSectionContainer>
  );
}

export default FaqSection;
