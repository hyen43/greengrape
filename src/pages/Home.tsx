import React from 'react';
import styled from '@emotion/styled';
import TitleSection from '@components/Home/molecule/TitleSection';
import HomeOrganism from '@components/Home/organism/HomeOrganism';

const HomeLayout = styled.section`
  display: flex;
  flex-direction: column;
  margin: 63px 0 93px 0;
  ${({ theme }) => theme.mq.laptop} {
    margin: 74px 0 76px 0;
  }
`;

function Home() {
  return (
    <HomeLayout>
      <TitleSection />
      <HomeOrganism />
    </HomeLayout>
  );
}

export default Home;
