import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'antd'

import { AppFooter } from 'components/layout/AppFooter'
import { AppHeader } from 'components/layout/AppHeader'
import { MainContent } from 'components/layout/MainContent'

import { AppContextProvider } from 'contexts/AppContext'

import 'scss/app.scss'

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Layout>
          <AppHeader />
          <MainContent />
          <AppFooter />
        </Layout>
      </BrowserRouter>
    </AppContextProvider>
  )
}

export default App
