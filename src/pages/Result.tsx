import React from 'react';
import styled from '@emotion/styled';
import ResultTemplate from '@components/result/template/resultTemplate';

const ResultLayout = styled.div`
  margin: 82px auto 90px auto;

  ${({ theme }) => theme.mq.laptop} {
    margin: 30px auto 83px auto;
    padding: 0px 30px;
  }
`;

function Result() {
  return (
    <ResultLayout>
      <ResultTemplate />
    </ResultLayout>
  );
}

export default Result;
