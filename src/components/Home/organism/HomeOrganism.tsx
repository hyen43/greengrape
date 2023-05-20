import React from 'react';
import styled from '@emotion/styled';
import Button from '../atom/button';
import FaqSection from '../../common/organism/FaqSection';
import ImageSection from '../molecule/ImageSection';

const HomeOrganismContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface HomeOrganismProps {
  data: Array<{
    index: number;
    title: string;
    content: string;
  }>;
}

function HomeOrganism({ data }: HomeOrganismProps) {
  return (
    <HomeOrganismContainer>
      <ImageSection />
      <Button />
      <FaqSection data={data} />
    </HomeOrganismContainer>
  );
}

export default HomeOrganism;
