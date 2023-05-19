import React from 'react';
import styled from '@emotion/styled';

const CopyrightContainer = styled.div`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.colors.gray300};
`;

function Copyright() {
  return (
    <CopyrightContainer>
      2023 Copyright © CPD. All rights reserved.
    </CopyrightContainer>
  );
}

export default Copyright;
