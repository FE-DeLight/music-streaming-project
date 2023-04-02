import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux'
import store from '@/store';
import Layout from '@/components/Layout';
import '../styles/reset.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
