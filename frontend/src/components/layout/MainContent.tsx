import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import { Home } from 'components/pages/Home'
import { ThingDetail } from 'components/pages/ThingDetail'

export const MainContent = () => {
  return (
    <Layout.Content>
      <Switch>
        <Route path="/things/:id" component={ThingDetail} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout.Content>
  )
}
