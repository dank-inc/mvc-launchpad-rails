import { Layout } from 'antd'
import { AppFooter } from 'components/layout/AppFooter'
import { AppHeader } from 'components/layout/AppHeader'
import { MainContent } from 'components/MainContent'
import React from 'react'

import 'scss/app.scss'

function App() {
  return (
    <Layout>
      <AppHeader />
      <MainContent />
      <AppFooter />
    </Layout>
  )
}

export default App
