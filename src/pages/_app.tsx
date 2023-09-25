import axios from 'axios';
import { AppProps } from 'next/app';
import Router from 'next/router';
import { useRemoteRefresh } from 'next-remote-refresh/hook';
import { ThemeProvider } from 'next-themes';
import nProgress from 'nprogress';
import * as React from 'react';
import { useCallback } from 'react';
import { SWRConfig } from 'swr';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import 'react-tippy/dist/tippy.css';
import '@/styles/globals.css';
import '@/styles/mdx.css';
import '@/styles/nprogress.css';

import { getFromLocalStorage } from '@/lib/helper.client';

// import { blockDomainMeta } from '@/constants/env';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  // Google Analytics tracking code
  const handleRouteChange = useCallback((url: string) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string, {
      page_path: url,
    });
  }, []);
  React.useEffect(() => {
    // Don't increment views if not on main domain
    if (
      window.location.host !==
      (process.env.NEXT_PUBLIC_BLOCK_DOMAIN_WHITELIST || 'vercel.app')
    ) {
      if (getFromLocalStorage('incrementMetaFlag') !== 'false') {
        localStorage.setItem('incrementMetaFlag', 'false');
        // reload page to make changes
        window.location.reload();
      }
    }
    localStorage.setItem('incrementMetaFlag', 'true');
    // Set up event listener for route change
    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      // Clean up event listener
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [handleRouteChange]);

  useRemoteRefresh();

  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
      <SWRConfig
        value={{
          fetcher: (url) => axios.get(url).then((res) => res.data),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  );
}

export default MyApp;
