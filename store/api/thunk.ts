import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { API_LOGIN, API_TODOS, API_REGISTER } from "../../utils/api";
import { loginActionFailure, loginActionRequest, loginActionSuccess, registerActionFailure, registerActionRequest, registerActionSuccess, UserAction } from "../modules/user";
import { getPostActionRequest, getPostActionSuccess, getPostActionFailure, PostAction, getPostDetailActionRequest, getPostDetailActionSuccess, getPostDetailActionFailure} from "../modules/post";

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
        dispatch(registerActionSuccess(res.data.success));
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


export const getPostDetailThunk = (id: string | string[] | undefined): ThunkAction<void, RootState, null, PostAction> => {
  return async dispatch => {
    dispatch(getPostDetailActionRequest());
    axios.get(`${API_TODOS}/${id}`)
    .then((res)=> {
      setTimeout(()=>dispatch(getPostDetailActionSuccess(res.data.todo)), 1000);
    })
    .catch((err)=> {
      dispatch(getPostDetailActionFailure(err));
    })
  }
}