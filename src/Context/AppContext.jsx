import React, { createContext } from 'react'
export const AuthContext = createContext()

const AppContext = ({children}) => {
  return (
    <>
    <AuthContext.Provider>{children}</AuthContext.Provider>
    </>
  )
}

export default AppContext