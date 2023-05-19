import React from 'react';
import styled from '@emotion/styled';
import Button from '../atom/button';
import FaqSection from './FaqSection';
import ImageSection from '../molecule/ImageSection';

const HomeOrganismContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function HomeOrganixm() {
  return (
    <HomeOrganismContainer>
      <ImageSection />
      <Button />
      <FaqSection />
    </HomeOrganismContainer>
  );
}

export default HomeOrganixm;
