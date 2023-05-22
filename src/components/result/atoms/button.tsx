import React from 'react';
import styled from '@emotion/styled';

const ButtonContainer = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 512px;
  height: 71px;
  padding: 17.5px 0px;
  border: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.font.weight[600]};
  font-size: ${({ theme }) => theme.font.size.xxlg};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    cursor: pointer;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background: linear-gradient(137.25deg, #51e14e 5.8%, #e0efe0 111.8%);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2),
      inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  ${({ theme }) => theme.mq.laptop} {
    width: 361px;
    height: 62px;
    padding: 19px 0px;
    font-size: ${({ theme }) => theme.font.size.md};
  }
`;

function Button() {
  return <ButtonContainer>공유 or 저장</ButtonContainer>;
}

export default Button;
