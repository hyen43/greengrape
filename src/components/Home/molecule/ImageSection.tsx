import React from 'react';
import styled from '@emotion/styled';

const ImageSectionContainer = styled.div<{ backgroundImage: string }>`
  display: flex;
  justify-content: center;
  width: 100%;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

interface ImageSectionProps {
  image: string;
}

function ImageSection({ image }: ImageSectionProps) {
  return (
    <ImageSectionContainer backgroundImage="/images/main_bg.png">
      <img src={image} alt="메인이미지" />
    </ImageSectionContainer>
  );
}

export default ImageSection;
