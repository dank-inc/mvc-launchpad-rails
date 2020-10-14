import React, { createContext, useContext, useState, useEffect } from 'react'
import { Api } from 'utils/Api'

type Props = { children: React.ReactNode }
type Context = {
  loaded: boolean
  api: Api
  title: string
}

const AppContext = createContext<Context | null>(null)

export const AppContextProvider = ({ children }: Props) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // get app version from server or some async things
    // that you need pre-app load.

    setLoaded(true)
  }, [])

  return (
    <AppContext.Provider
      value={{
        loaded,
        api: new Api(),
        title: 'MVP MVC Boilerplate by Dank Inc. 🤠',
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (!context)
    throw new Error(
      'AppContext must be called from within the AppContextProvider'
    )

  return context
}
