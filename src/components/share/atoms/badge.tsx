import React from 'react';
import styled from '@emotion/styled';

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40.5px;
  height: 40.5px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.action};

  ${({ theme }) => theme.mq.laptop} {
    width: 32.4px;
    height: 32.4px;
  }
`;

const BadgeText = styled.span`
  width: 18px;
  font-weight: ${({ theme }) => theme.font.weight[700]};
  font-size: ${({ theme }) => theme.font.size.xxs};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.mq.laptop} {
    width: 18px;
    font-size: 8px;
  }
`;

interface TextProps {
  content: string;
}

function Badge({ content }: TextProps) {
  return (
    <BadgeContainer>
      <BadgeText>{content}</BadgeText>
    </BadgeContainer>
  );
}

export default Badge;
