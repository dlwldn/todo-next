const SET_USER_DATA = 'user/SET_USER_DATA' as const;

export const setUserData = () => ({
  type: SET_USER_DATA
})

type UserAction = 
  | ReturnType<typeof setUserData>;

type UserState = {
  userData: object
}

const initialState: UserState = {
  userData: {}
}


const reducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch(action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: state.userData
      }
    default:
      return state
  }
}

export default reducer;