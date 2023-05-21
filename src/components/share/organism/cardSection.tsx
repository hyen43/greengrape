import React from 'react';
import styled from '@emotion/styled';
import Badge from '@components/share/atoms/badge';
import CardTitle from '@components/share/atoms/cardTitle';
import ContentBox from '@components/share/molecules/contentBox';

const CardSectionContainer = styled.div`
  width: 425px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray200};
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);

  ${({ theme }) => theme.mq.laptop} {
    width: 330px;
  }
`;

const TitleWrapper = styled.div`
  margin: 21px 35px 18px 35px;

  ${({ theme }) => theme.mq.laptop} {
    margin: 17px 30px 17px 30px;
  }
`;

const BadgeWrapper = styled.div`
  display: flex;
  gap: 11px;

  ${({ theme }) => theme.mq.laptop} {
    gap: 9px;
  }
`;

const ContentWrapper = styled.div`
  margin: 0px 27px 10.5px 27px;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mq.laptop} {
    margin: 0px 21px 17px 21px;
  }
`;

function CardSection() {
  return (
    <CardSectionContainer>
      <TitleWrapper>
        <CardTitle title="중소기업취업청년 전월세보증금대출" />
      </TitleWrapper>
      <ContentWrapper>
        <BadgeWrapper>
          <Badge content="최대금리" />
          <Badge content="중복가능" />
        </BadgeWrapper>
        <ContentBox />
      </ContentWrapper>
    </CardSectionContainer>
  );
}

export default CardSection;
