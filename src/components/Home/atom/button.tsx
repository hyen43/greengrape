import React from 'react';
import styled from '@emotion/styled';

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 423px;
  height: 71px;
  padding: 17.5px 188.5px;
  margin-bottom: 123px;
  border: ${({ theme }) => theme.colors.primary};
  background: linear-gradient(137.25deg, #51e14e 5.8%, #e0efe0 111.8%);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  font-size: ${({ theme }) => theme.font.size.xxlg};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary};
  }
  ${({ theme }) => theme.mq.laptop} {
    width: 361px;
    height: 62px;
    padding: 19px 163px;
    margin-bottom: 97px;
    font-size: ${({ theme }) => theme.font.size.md};
  }
`;

function Button() {
  return <ButtonContainer>시작</ButtonContainer>;
}

export default Button;
