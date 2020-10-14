import { Button, Form, Input, Layout, PageHeader, Typography } from 'antd'
import { Store } from 'antd/lib/form/interface'
import React from 'react'

import { useUserContext } from 'contexts/UserContext'

import 'scss/login.scss'

export const Login = () => {
  const { handleLogin } = useUserContext()

  const handleFinish = async ({ username, password }: Store) => {
    handleLogin(username, password)
  }

  return (
    <Layout.Content>
      <PageHeader title="Login Page" />
      <Form onFinish={handleFinish} className="login-form">
        <Typography.Title>Login, you plebb!</Typography.Title>
        <Form.Item label="username" name="username" required>
          <Input />
        </Form.Item>
        <Form.Item label="password" name="username" required>
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </Layout.Content>
  )
}
