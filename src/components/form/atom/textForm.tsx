import React from 'react';
import styled from '@emotion/styled';

const TextFormContainer = styled.input`
  width: 361px;
  height: 53px;
`;

function TextForm() {
  return <TextFormContainer type="text" />;
}

export default TextForm;
