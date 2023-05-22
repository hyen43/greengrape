import React from 'react';
import styled from '@emotion/styled';
import ShareTemplate from '@components/share/template/shareTemplate';

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
