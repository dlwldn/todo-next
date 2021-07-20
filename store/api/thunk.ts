import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { API_LOGIN, API_TODOS, API_REGISTER } from "../../utils/api";
import { loginActionFailure, loginActionRequest, loginActionSuccess, registerActionFailure, registerActionRequest, registerActionSuccess, UserAction } from "../modules/user";
import { getPostActionRequest, getPostActionSuccess, getPostActionFailure, PostAction, getPostDetailActionRequest, getPostDetailActionSuccess, getPostDetailActionFailure, postWriteActionRequest, postWriteActionSuccess, postWriteActionFailure, postDeleteActionRequest, postDeleteActionSuccess, postDeleteActionFailure} from "../modules/post";
import router from "next/router";

export const setLoginThunk = (username: string, password: string): ThunkAction<void, RootState, null, UserAction> => {
  return async dispatch => {
    dispatch(loginActionRequest())
    axios.post(API_LOGIN, {username: username, password: password})
    .then((res)=> {
      dispatch(loginActionSuccess(res.data.token));
    })
    .catch((err)=> {
      dispatch(loginActionFailure(err));
    })
  }
}

export const setRegisterThunk = (username: string, password: string): ThunkAction<void, RootState, null, UserAction> => {
  return async dispatch => {
    dispatch(registerActionRequest())
    axios.post(API_REGISTER, {username: username, password: password})
    .then((res)=> {
      if(res.data.success) {
        dispatch(registerActionSuccess());
        router.push('/login');
      }
    })
    .catch((err)=> {
      dispatch(registerActionFailure(err));
    })
  }
}

export const getPostThunk = (): ThunkAction<void, RootState, null, PostAction> => {
  return async dispatch => {
    dispatch(getPostActionRequest())
    axios.get(API_TODOS)
    .then((res)=> {
      setTimeout(()=> dispatch(getPostActionSuccess(res.data)), 1000);
    })
    .catch((err)=> {
      dispatch(getPostActionFailure(err));
    })
  }
}


export const getPostDetailThunk = (): ThunkAction<void, RootState, null, PostAction> => async (dispatch, getState) => {
  const id = router.query.id;

  console.log(id, router)

  dispatch(getPostDetailActionRequest());
  axios.get(`${API_TODOS}/${id}`)
  .then((res)=> {
    setTimeout(()=>dispatch(getPostDetailActionSuccess(res.data.todo)), 1000);
  })
  .catch((err)=> {
    dispatch(getPostDetailActionFailure(err));
  })
}

export const postWriteThunk = (content: string): ThunkAction<void, RootState, null, PostAction> => async (dispatch, getState) => {
  const token = getState().user.user.token;

  dispatch(postWriteActionRequest());
  axios.post(API_TODOS, {content: content}, {
    headers: {
      'x-auth-token': token
    }
  })
  .then((res)=> {
    dispatch(postWriteActionSuccess());
    router.back();
  })
  .catch((err)=> {
    dispatch(postWriteActionFailure(err));
  })
}

export const postModifyThunk = (content: string): ThunkAction<void, RootState, null, PostAction> => async (dispatch, getState) => {
  const token = getState().user.user.token;
  const id = getState().post.detailPost.id;

  dispatch(postWriteActionRequest());
  axios.put(`${API_TODOS}/${id}`, {content: content}, {
    data: {
      id: id
    },
    headers: {
      'x-auth-token': token
    }
  })
  .then((res)=> {
    dispatch(postWriteActionSuccess());
    router.back();
  })
  .catch((err)=> {
    dispatch(postWriteActionFailure(err));
  })
}

export const postDeleteThunk = (): ThunkAction<void, RootState, null, PostAction> => async (dispatch, getState) => {
  const token = getState().user.user.token;
  const id = getState().post.detailPost.id;

  dispatch(postDeleteActionRequest());
  axios.delete(`${API_TODOS}/${id}`, {
    data: {
      id: id
    },
    headers: {  
      'x-auth-token': token
    }
  })
  .then((res)=> {
    dispatch(postDeleteActionSuccess());
    router.back();
  })
  .catch((err)=> {
    dispatch(postDeleteActionFailure(err));
  })
}