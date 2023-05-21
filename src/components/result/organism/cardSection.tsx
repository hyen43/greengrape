import React from 'react';
import styled from '@emotion/styled';
import Badge from '@components/result/atoms/badge';
import CardTitle from '@components/result/atoms/cardTitle';
import CardContentBox from '@components/result/molecules/cardContentBox';
import CardBtnBox from '@components/result/molecules/cardBtnBox';

const CardSectionContainer = styled.div<{ type: 'normal' | 'best' }>`
  padding-top: 49px;
  position: relative;
  width: 666px;
  box-shadow: ${({ type }) =>
    type === 'best'
      ? '5px 5px 20px rgba(186, 246, 185, 0.36)'
      : '0px 4px 4px rgba(0, 0, 0, 0.12)'};
  border: 2px solid
    ${({ type, theme }) =>
      type === 'best' ? theme.colors.primary : theme.colors.gray300};
  border-image-slice: 1;
  border-radius: 28px;
  background-color: white;

  ${({ theme }) => theme.mq.laptop} {
    width: 333px;
    padding-top: 24.5px;
    margin-left: 20.5px;
  }
`;

const CardTitleWrapper = styled.div`
  margin-left: 41px;

  ${({ theme }) => theme.mq.laptop} {
    margin-left: 20.5px;
  }
`;

const BadgeWrapper = styled.div`
  position: absolute;
  top: 27px;
  right: 27px;
  display: flex;
  flex-direction: column;
  gap: 22px;

  ${({ theme }) => theme.mq.laptop} {
    top: 14px;
    right: 14px;
    gap: 11px;
  }
`;

const CardContentWrapper = styled.div`
  margin: 46px 0px 32px 41px;
  display: flex;
  flex-direction: column;
  gap: 35px;

  ${({ theme }) => theme.mq.laptop} {
    margin: 19.5px 0px 13.5px 20.5px;
    gap: 17.5px;
  }
`;

const CardBtnBoxWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

interface CardSectionProps {
  type: 'normal' | 'best';
}

function CardSection({ type }: CardSectionProps) {
  return (
    <CardSectionContainer type={type}>
      <CardTitleWrapper>
        <CardTitle content="중소기업취업청년 전월세보증금대출" />
      </CardTitleWrapper>
      <BadgeWrapper>
        <Badge content="중복가능" />
        <Badge content="중복가능" />
      </BadgeWrapper>
      <CardContentWrapper>
        <CardContentBox type="normal" />
        <CardContentBox type="normal" />
        <CardContentBox type="normal" />
        <CardContentBox type="duplicate" />
      </CardContentWrapper>
      <CardBtnBoxWrapper>
        <CardBtnBox type={type} />
      </CardBtnBoxWrapper>
    </CardSectionContainer>
  );
}

export default CardSection;
