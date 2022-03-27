const initialState = {
  isLogin: false,
}
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: (state.isLogin = true),
      }
    case 'LOGOUT':
      return {
        ...state,
        isLogin: (state.isLogin = false),
      }

    default:
      return state
  }
}
