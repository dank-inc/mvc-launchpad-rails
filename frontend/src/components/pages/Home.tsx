import { Layout, PageHeader } from 'antd'
import React from 'react'

export const Home = () => {
  return (
    <Layout.Content>
      <PageHeader title="I am the home page" subTitle="Located at route '/'" />
      <p>Change me at 'src/components/pages/Home.tsx'</p>
    </Layout.Content>
  )
}
