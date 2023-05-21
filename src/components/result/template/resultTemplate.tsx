import React from 'react';
import styled from '@emotion/styled';
import CardSection from '@components/result/organism/cardSection';
import Button from '@components/result/atoms/button';

const ResultTemplateContainer = styled.div``;

const PageTitleWrapper = styled.div`
  margin-left: -100px;

  ${({ theme }) => theme.mq.laptop} {
    margin-left: 0px;
  }

  span {
    font-size: ${({ theme }) => theme.font.size.xxxlg};
    font-weight: ${({ theme }) => theme.font.weight[600]};

    ${({ theme }) => theme.mq.laptop} {
      font-size: ${({ theme }) => theme.font.size.sm};
    }
  }
`;

const Blank = styled.br`
  display: none;

  ${({ theme }) => theme.mq.laptop} {
    display: block;
  }
`;

const CardSectionWrapper = styled.div`
  margin: 84px 0;
  display: flex;
  flex-direction: column;
  gap: 36px;

  ${({ theme }) => theme.mq.laptop} {
    margin: 30px 0px 68px 0px;
    gap: 18px;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

function ResultTemplate() {
  return (
    <ResultTemplateContainer>
      <PageTitleWrapper>
        <span>
          나에게 딱 맞는 <Blank />
          상품을 찾았어요!
        </span>
      </PageTitleWrapper>
      <CardSectionWrapper>
        <CardSection type="best" />
        <CardSection type="best" />
        <CardSection type="normal" />
        <CardSection type="normal" />
      </CardSectionWrapper>
      <ButtonWrapper>
        <Button />
      </ButtonWrapper>
    </ResultTemplateContainer>
  );
}

export default ResultTemplate;
