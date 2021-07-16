// import '../styles/globals.css'
import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/Globalstyles';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../store';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  ) 
}
export default MyApp
