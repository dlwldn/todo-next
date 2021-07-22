import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import user from './modules/user';
import post from './modules/post';


const rootReducer = combineReducers({
  user,
  post
})


let parsedToken = null;
let initLogin = false;

if(typeof window !== 'undefined') {
  const token = window.localStorage.getItem("login");
  if(token) {
    parsedToken = JSON.parse(token);
    initLogin = true;
  } else {
    parsedToken = "";
    initLogin = false;
  }
}

const preloadedState = {
  user: {
    user: {
      token: parsedToken,
      isLogin: initLogin
    },
  
    loading: false,
    error: null,
  }
}

const configureStore = () => {
  const middlewares = [ReduxThunk];
  const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware(...middlewares))
  : composeWithDevTools(applyMiddleware(...middlewares))

  const store = createStore(rootReducer, preloadedState ,enhancer);
  return store;
}

// const store = createStore(rootReducer, composeWithDevTools(
//   applyMiddleware(ReduxThunk)
// ));

export default configureStore();

// const wrapper = createWrapper(configureStore, { debug: true });
// export default wrapper;
export type RootState = ReturnType<typeof rootReducer>;
