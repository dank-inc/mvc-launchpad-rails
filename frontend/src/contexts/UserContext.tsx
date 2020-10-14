import React, { createContext, useContext, useState, useEffect } from 'react'
import { User } from 'types/User'
import {
  getUserFromLocalStorage,
  setLocalStorageToken,
  wipeLocalStorageToken,
} from 'utils/auth'
import { useAppContext } from './AppContext'

type Props = { children: React.ReactNode }
type Context = {
  user: User | null
  handleLogin: (u: string, p: string) => void
}

const UserContext = createContext<Context | null>(null)

export const UserContextProvider = ({ children }: Props) => {
  const { api } = useAppContext()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const authLogin = async (id: string) => {
      setUser(await api.getUser(id))
    }

    const loginData = getUserFromLocalStorage()
    if (loginData) {
      authLogin(loginData.id)
      return
    }

    wipeLocalStorageToken()
    setUser(null)
  }, [])

  const handleLogin = async (username: string, password: string) => {
    const loginData = await api.login(username, password)
    setLocalStorageToken(loginData)
    setUser(await api.getUser(loginData.id))
  }

  return (
    <UserContext.Provider value={{ user, handleLogin }}>
      {children}
    </UserContext.Provider>
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
