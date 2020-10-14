import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Layout, Row, Typography } from 'antd'

import { useAppContext } from 'contexts/AppContext'
import { useUserContext } from 'contexts/UserContext'

export const AppHeader = () => {
  const app = useAppContext()
  const { handleLogout } = useUserContext()

  return (
    <Layout.Header className="app-header">
      <Row justify="space-between" align="middle">
        <Col>
          <Typography.Title>{app.title}</Typography.Title>
        </Col>
        <Col className="nav">
          <Link to="/">Home</Link>
          <Link to="/things/cool">Cool Thing</Link>
        </Col>
        <Button onClick={handleLogout}>Log Out</Button>
      </Row>
    </Layout.Header>
  )
}
