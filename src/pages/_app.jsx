import React, { useState, useEffect } from 'react';
import MainLayout from '@common/components/layouts/MainLayout';
import PropTypes from 'prop-types';
import { wrapper } from 'src/store';
import '../styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from 'src/helpers/createEmotionCache';
import setGlobalStyles from 'src/styles/setGlobalStyles';
import Theme from 'src/styles/theme';
import Head from 'next/head';
import { Modal } from '@mui/material';

const clientSideEmotionCache = createEmotionCache();

export function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [theme] = useState(Theme);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        {setGlobalStyles(theme, { overflowY: Modal.open && 'hidden' })}
        <CssBaseline />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.instanceOf(Object),
  pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default wrapper.withRedux(MyApp);
