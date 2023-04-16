import { Global } from '@emotion/react';
import globalStyle from './styles/globalStyle';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import Home from './pages/Home';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <header>하이 나현</header>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
