import React from 'react';
import styled from '@emotion/styled';

const ToggleButton = styled.div<{ isOpen: boolean }>`
  width: 10px;
  // display: inline-block;

  transition: transform 0.3s ease; /* Removed 'top' from transition property */

  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'none')};
`;

interface ToggleProps {
  isOpen: boolean;
}

function Toggle({ isOpen }: ToggleProps) {
  return (
    <ToggleButton isOpen={isOpen}>
      <img src="/images/toggle_icon.png" alt="토글_아이콘" />
    </ToggleButton>
  );
}
export default Toggle;
