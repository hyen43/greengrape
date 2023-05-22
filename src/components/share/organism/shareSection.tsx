import React from 'react';
import styled from '@emotion/styled';
import CardSection from '@components/share/organism/cardSection';
import Message from '@components/share/atoms/message';
import Logo from '@components/common/atom/logo';

const ShareSectionContainer = styled.div`
  padding: 43px 35px;
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 5.39999px 2.7px rgba(0, 0, 0, 0.14);
  border-radius: 10px;

  ${({ theme }) => theme.mq.laptop} {
    padding: 27px 28px;
  }
`;

const MessageWrapper = styled.div`
  margin: 13.5px 0px 77px 0px;
  text-align: center;

  ${({ theme }) => theme.mq.laptop} {
    margin: 0px 0px 45px 0px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${({ theme }) => theme.mq.laptop} {
    gap: 32px;
  }
`;

const LogoWrapper = styled.div`
  margin: 83px auto 19px auto;
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.mq.laptop} {
    margin: 53px auto 0px auto;
  }
`;

function ShareSection() {
  return (
    <ShareSectionContainer>
      <MessageWrapper>
        <Message content="당신의 쉴 곳을 포기하지 마세요!" />
      </MessageWrapper>
      <CardWrapper>
        <CardSection />
        <CardSection />
      </CardWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </ShareSectionContainer>
  );
}

export default ShareSection;
