import reset from 'emotion-reset';
import { css } from '@emotion/react';

export const globalStyles = css`
  ${reset}

  html {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
  }
`;
