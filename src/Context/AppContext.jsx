import React, { createContext, useReducer, useState } from 'react'
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
  const [count,setCount] = useState(0)
  const addCount =()=>{
    setCount(count+1)
  }
  const subCount =()=>{
    setCount(count-1)
  }

  const [state, dispatch] = useReducer(appReducer, {
    isAuth: false,
    token: null
  })
  return (
    <>
      <AuthContext.Provider value={{ state, dispatch, addCount, subCount, count }}>{children}</AuthContext.Provider>
    </>
  )
}

export default AppContext