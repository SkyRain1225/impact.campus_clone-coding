import { ThemeProvider } from 'styled-components';

import { Footer, Header } from '~/components';
import { GlobalStyled } from '~/styles/GlobalStyled';
import { theme } from '~/styles/themes';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Header />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
