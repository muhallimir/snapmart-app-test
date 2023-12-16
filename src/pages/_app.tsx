import React, { useState } from 'react';
import MainLayout from '@common/components/layouts/MainLayout';
import { wrapper } from 'src/store';
import '../styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from 'src/helpers/createEmotionCache';
import setGlobalStyles from 'src/styles/setGlobalStyles';
import Theme from 'src/styles/theme';
import Head from 'next/head';

interface MyAppProps {
  Component: React.ElementType;
  emotionCache?: ReturnType<typeof createEmotionCache>;
  pageProps: any;
}

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
  const [theme] = useState(Theme);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        {setGlobalStyles(theme)}
        <CssBaseline />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default wrapper.withRedux(MyApp);
