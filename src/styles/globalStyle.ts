import { css } from '@emotion/react';
import reset from './reset';

const globalStyle = css`
  ${reset}
  * {
  }
  body {
    font-family: pretendard, sans-serif;
  }
`;

export default globalStyle;
