import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import globalStyle from './styles/globalStyle';
import theme from './styles/theme';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Global styles={globalStyle} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  // </React.StrictMode>,
);
