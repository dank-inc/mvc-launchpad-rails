import React, { createContext, useContext, useState, useEffect } from 'react'

type Props = { children: React.ReactNode }
type Context = { user: any }

const UserContext = createContext<Context | null>(null)

export const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState(false)

  useEffect(() => {
    // get token from localstore
    // if token
    // api.getUser(token)
    // if success, return

    // sad path
    // remove token from localstore, redirect to login page

    setUser(true)
  }, [])

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)

  if (!context)
    throw new Error(
      'UserContext must be called from within the UserContextProvider'
    )

  return context
}
