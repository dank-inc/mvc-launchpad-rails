import { Layout } from 'antd'
import { Route, Switch } from 'react-router-dom'
import React from 'react'
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
