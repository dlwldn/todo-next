// import '../styles/globals.css'
import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/Globalstyles';
import { Provider } from 'react-redux';
import store from '../store';
import wrapper from '../store';
import { useState } from 'react';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) return null;

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
