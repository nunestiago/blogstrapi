import '../styles/global-styles.ts';

import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
