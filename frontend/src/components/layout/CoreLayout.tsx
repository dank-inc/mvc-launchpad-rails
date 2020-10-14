import { Layout } from 'antd'
import { useUserContext } from 'contexts/UserContext'
import React from 'react'

import { AppFooter } from 'components/layout/AppFooter'
import { AppHeader } from 'components/layout/AppHeader'
import { MainContent } from 'components/layout/MainContent'
import { UnauthedAppHeader } from 'components/layout/UnauthedAppHeader'
import { UnauthedContent } from 'components/layout/UnauthedContent'

export const CoreLayout = () => {
  const { user } = useUserContext()

  return user ? (
    <Layout>
      <AppHeader />
      <MainContent />
      <AppFooter />
    </Layout>
  ) : (
    <Layout>
      <UnauthedAppHeader />
      <UnauthedContent />
      <AppFooter />
    </Layout>
  )
}
