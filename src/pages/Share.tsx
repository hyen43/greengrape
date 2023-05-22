import React from 'react';
import styled from '@emotion/styled';
import ShareTemplate from '@components/share/template/shareTemplate';

// Refactor)share 박스에 너비를 고정으로 줘야할 지 논의 필요
const ShareLayout = styled.div`
  margin: 70px auto;
  // background-color: ${({ theme }) => theme.colors.gray200};
`;

function Share() {
  return (
    <ShareLayout>
      <ShareTemplate />
    </ShareLayout>
  );
}

export default Share;
