import { Col, Layout, Row, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export const AppHeader = () => {
  return (
    <Layout.Header className="app-header">
      <Row justify="space-between" align="middle">
        <Col>
          <Typography.Title>
            MVP MVC Boilerplate by Dank Inc. 🤠
          </Typography.Title>
        </Col>
        <Col className="links">
          <Link to="/">Home</Link>
          <Link to="/things/cool">Cool Thing</Link>
        </Col>
      </Row>
    </Layout.Header>
  )
}
