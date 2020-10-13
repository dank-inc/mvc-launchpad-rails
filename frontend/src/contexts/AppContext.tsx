import React, { createContext, useContext, useState, useEffect } from 'react'

type Props = { children: React.ReactNode }
type Context = { loaded: boolean }

const AppContext = createContext<Context | null>(null)

export const AppContextProvider = ({ children }: Props) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // do some shit
    setLoaded(true)
  }, [])

  return (
    <AppContext.Provider value={{ loaded }}>{children}</AppContext.Provider>
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
