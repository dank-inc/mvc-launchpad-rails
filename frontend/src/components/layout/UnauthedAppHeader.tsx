import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Layout, Row, Typography } from 'antd'
import { useAppContext } from 'contexts/AppContext'

export const UnauthedAppHeader = () => {
  const app = useAppContext()

  return (
    <Layout.Header className="app-header">
      <Row align="middle" justify="space-between">
        <Col>
          <Typography.Title>{app.title}</Typography.Title>
        </Col>
        <Col className="nav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </Col>
      </Row>
    </Layout.Header>
  )
}
