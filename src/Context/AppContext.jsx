import React, { createContext, useReducer } from 'react'
export const AuthContext = createContext()

export const appReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        isAuth: true,
        token: action.token
      };
    }
    case "LOGOUT_SUCCESS": {
      return {
        ...state,
        isAuth: false,
        token: null
      };
    }
    case "LOGIN_FAILURE": {
      return {
        ...state,
        isAuth: false,
        token: null
      };
    }
    default: {
      return state;
    }
  }
}

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    isAuth: false,
    token: null
  })
  return (
    <>
      <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
    </>
  )
}

export default AppContext