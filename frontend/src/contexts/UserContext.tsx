import { message } from 'antd'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router'
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
  handleLogout: () => void
}

const UserContext = createContext<Context | null>(null)

export const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null)

  const { api } = useAppContext()
  const history = useHistory()

  useEffect(() => {
    const authLogin = async (id?: string) => {
      try {
        // TODO: something better than this lol
        if (!id) throw new Error()
        setUser(await api.getUser(id))
      } catch (err) {
        console.error(err)
        wipeLocalStorageToken()
        setUser(null)
      }
    }

    authLogin(getUserFromLocalStorage()?.id)
  }, [api])

  const handleLogin = async (username: string, password: string) => {
    try {
      const loginData = await api.login(username, password)
      setLocalStorageToken(loginData)
      setUser(await api.getUser(loginData.id))
      message.success('User Logged In!')
      history.push('/')
    } catch (err) {
      console.error('LOGIN ERROR =>', err)
      message.error('Something went wrong will logging in!!')
    }
  }

  const handleLogout = async () => {
    setUser(null)
    wipeLocalStorageToken()
    history.push('/')
  }

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
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
