import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/system';

import { darkTheme, lightTheme, customTheme } from '../themes';
import { CssBaseline } from '@mui/material';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
