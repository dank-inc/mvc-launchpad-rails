import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import { Home } from 'components/pages/Home'
import { ThingDetail } from 'components/pages/ThingDetail'

export const MainContent = () => {
  return (
    <Layout.Content>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/thing/:id" component={ThingDetail} />
      </Switch>
    </Layout.Content>
  )
}
