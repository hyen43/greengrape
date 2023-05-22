import React from 'react';
import styled from '@emotion/styled';
import TitleSection from '@components/Home/molecule/TitleSection';
import FaqTemplate from '@components/common/template/FaqTemplate';
import { useFaq } from 'hooks/useFaq';

const HomeLayout = styled.section`
  display: flex;
  flex-direction: column;
  margin: 63px 0 93px 0;
  ${({ theme }) => theme.mq.laptop} {
    margin: 74px 0 76px 0;
  }
`;

function FaqPage() {
  const { Faq } = useFaq();

  return <HomeLayout>{Faq && <FaqTemplate data={Faq?.BEFORE} />}</HomeLayout>;
}

export default FaqPage;
