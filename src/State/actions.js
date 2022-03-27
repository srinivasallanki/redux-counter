export const increment = (val) => {
  return {
    type: 'INCREMENT',
    payload: val,
  }
}

export const decrement = (val) => {
  return {
    type: 'DECREMENT',
    payload: val,
  }
}

export const reset = () => {
  return {
    type: 'RESET',
  }
}

export const logIn = () => {
  return {
    type: 'LOGIN',
  }
}

export const logOut = () => {
  return {
    type: 'LOGOUT',
  }
}
