import React from 'react';
import styled from '@emotion/styled';
import Text from '@components/Home/atom/text';

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
`;

const TitleWapper = styled.div`
  width: 399px;
  height: fit-content;
`;

function TitleSection() {
  return (
    <TitleContainer>
      <TitleWapper>
        <Text content="청년들에게 유리한" />
        <br />
        <Text content="주거마련 대출을 알려드릴게요!" />
      </TitleWapper>
    </TitleContainer>
  );
}

export default TitleSection;
