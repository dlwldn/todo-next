import { IUser } from "../../typings/db";

const LOGOUT_ACTION = 'user/LOGOUT_ACTION' as const;
const LOGIN_ACTION_REQUEST = 'user/LOGIN_ACTION_REQUEST' as const;
const LOGIN_ACTION_SUCCESS = 'user/LOGIN_ACTION_SUCCESS' as const;
const LOGIN_ACTION_FAILURE = 'user/LOGIN_ACTION_FAILURE' as const;
const REGISTER_ACTION_REQUEST = 'user/REGISTER_ACTION_REQUEST' as const;
const REGISTER_ACTION_SUCCESS = 'user/REGISTER_ACTION_SUCCESS' as const;
const REGISTER_ACTION_FAILURE = 'user/REGISTER_ACTION_FAILURE' as const;

export const loginActionRequest = () => ({
  type: LOGIN_ACTION_REQUEST
})

export const loginActionSuccess = (token: string) => ({
  type: LOGIN_ACTION_SUCCESS,
  payload: token
})

export const loginActionFailure = (error: object) => ({
  type: LOGIN_ACTION_FAILURE,
  payload: error
})

export const registerActionRequest = () => ({
  type: REGISTER_ACTION_REQUEST
})

export const registerActionSuccess = () => ({
  type: REGISTER_ACTION_SUCCESS
})

export const registerActionFailure = (error: object) => ({
  type: REGISTER_ACTION_FAILURE,
  payload: error
})

export const setLogout = () => ({ type: LOGOUT_ACTION })

export type UserAction = 
  | ReturnType<typeof setLogout>
  | ReturnType<typeof loginActionRequest>
  | ReturnType<typeof loginActionSuccess>
  | ReturnType<typeof loginActionFailure>
  | ReturnType<typeof registerActionRequest>
  | ReturnType<typeof registerActionSuccess>
  | ReturnType<typeof registerActionFailure>
  
interface UserState {
  user: IUser;
  loading: boolean;
  error: null | object;
}

const initialState: UserState = {
  user: {
    token: "",
    isLogin: false
  },

  loading: false,
  error: null,
}

const reducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch(action.type) {
    case LOGOUT_ACTION:
      return {
        ...state,
        user: {
          ...state.user,
          token: "",
          isLogin: false
        }
      }

    case LOGIN_ACTION_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case LOGIN_ACTION_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          token: action.payload,
          isLogin: true
        },
        loading: false
      }

    case LOGIN_ACTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case REGISTER_ACTION_REQUEST:
      return {
        ...state,
        loading: true
      }

    case REGISTER_ACTION_SUCCESS:
      return {
        ...state,
        loading: false
      }

    case REGISTER_ACTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default reducer;