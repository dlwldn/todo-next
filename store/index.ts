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

const configureStore = () => {
  const middlewares = [ReduxThunk];
  const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware(...middlewares))
  : composeWithDevTools(applyMiddleware(...middlewares))

  const store = createStore(rootReducer, enhancer);
  return store;
}

// const store = createStore(rootReducer, composeWithDevTools(
//   applyMiddleware(ReduxThunk)
// ));

export default configureStore();

// const wrapper = createWrapper(configureStore, { debug: true });
// export default wrapper;
// export default store;
export type RootState = ReturnType<typeof rootReducer>;
