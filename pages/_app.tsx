// import '../styles/globals.css'
import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/Globalstyles';
import { Provider } from 'react-redux';
import store from '../store';
import wrapper from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  ) 
}

export default MyApp
