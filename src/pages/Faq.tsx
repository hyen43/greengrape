import React from 'react';
import styled from '@emotion/styled';
import FaqTemplate from '@components/common/template/FaqTemplate';
import { useFaq } from 'hooks/useFaq';

const FaqLayout = styled.section`
  display: flex;
  flex-direction: column;
  margin: 63px 0 93px 0;
  ${({ theme }) => theme.mq.laptop} {
    margin: 40px 0 76px 0;
  }
`;

function FaqPage() {
  const { Faq } = useFaq();
  if (!Faq) return null;

  const newData = [...Faq.BEFORE, ...Faq.AFTER];

  return (
    <FaqLayout>
      {Faq && <FaqTemplate data={newData} image="/images/faq.png" />}
    </FaqLayout>
  );
}

export default FaqPage;
