import React, { useState } from 'react';
import styled from '@emotion/styled';
import Toggle from '../atom/toggle';
import FaqText from '../atom/faqText';

const FaqBoxContainer = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 28px 34px 22px 34px;
  border-radius: 10px;
`;

const FaqTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 16px;
`;

const FaqBoxContentsWrapper = styled.div`
  width: 100%;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`;

function FaqBox() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FaqBoxContainer onClick={handleClick}>
      <FaqTitleWrapper>
        <FaqText type="title" contents="테스트" />
        <Toggle isOpen={isOpen} />
      </FaqTitleWrapper>
      {isOpen && (
        <FaqBoxContentsWrapper>
          <FaqText type="content" contents="테스트" />
        </FaqBoxContentsWrapper>
      )}
    </FaqBoxContainer>
  );
}
export default FaqBox;
