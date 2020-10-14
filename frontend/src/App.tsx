import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AppContextProvider } from 'contexts/AppContext'
import { UserContextProvider } from 'contexts/UserContext'

import { CoreLayout } from 'components/layout/CoreLayout'

import 'scss/app.scss'

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <UserContextProvider>
          <CoreLayout />
        </UserContextProvider>
      </BrowserRouter>
    </AppContextProvider>
  )
}

export default App
