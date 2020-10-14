import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import { Home } from 'components/pages/Home'
import { Login } from 'components/pages/Login'

export const UnauthedContent = () => {
  return (
    <Layout.Content>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout.Content>
  )
}
